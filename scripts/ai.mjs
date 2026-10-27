// One place that talks to the AI. Used by the autoposter (writing) and the translator.
//
//   AI_PROVIDER = anthropic | openrouter | gemini | workers-ai
//   AI_MODEL    = optional. For openrouter you can give several, comma-separated: they are tried in order.
//
//   anthropic   ANTHROPIC_API_KEY                 (paid, best quality, default model claude-haiku-5-5)
//   openrouter  OPENROUTER_API_KEY                (free models end in ":free"; see https://openrouter.ai/models?q=free)
//   gemini      GEMINI_API_KEY                    (free tier at https://aistudio.google.com/apikey)
//   workers-ai  CF_ACCOUNT_ID + CF_API_TOKEN      (free daily allowance on Cloudflare)

export class QuotaError extends Error {
  // daily = the free allowance for the whole day is used up (waiting a minute won't help)
  constructor(message, daily = false) { super(message); this.daily = daily; }
}

export function providerName() {
  const e = process.env;
  return (e.AI_PROVIDER || (e.ANTHROPIC_API_KEY ? 'anthropic' : e.OPENROUTER_API_KEY ? 'openrouter' : e.GEMINI_API_KEY ? 'gemini' : 'workers-ai')).toLowerCase();
}

// Free model names change all the time, so instead of a fixed list we ask OpenRouter which models are free
// right now and take the largest ones. Set AI_MODEL to override (comma-separated, tried in order).
const FALLBACK_OPENROUTER = 'meta-llama/llama-3.3-70b-instruct:free,qwen/qwen-2.5-72b-instruct:free,google/gemma-3-27b-it:free';
let freeCache = null;
const badModels = new Set();

async function freeModels() {
  if (freeCache) return freeCache;
  try {
    const res = await fetch('https://openrouter.ai/api/v1/models', { signal: AbortSignal.timeout(30000) });
    const j = await res.json();
    const sizeOf = (id) => Number(id.match(/[-_](\d{1,4})b\b/i)?.[1] ?? 30);
    const list = (j.data ?? [])
      .filter((m) => m.id.endsWith(':free') || (Number(m.pricing?.prompt) === 0 && Number(m.pricing?.completion) === 0))
      .filter((m) => (m.context_length ?? 0) >= 16000)
      .filter((m) => !/vision|image|coder|embed|guard|audio|safeguard|moderation|lyria|-vl/i.test(m.id))
      .filter((m) => !m.architecture?.output_modalities || m.architecture.output_modalities.includes('text'))
      .filter((m) => !/^openrouter\//.test(m.id))
      .sort((a, b) => sizeOf(b.id) - sizeOf(a.id))
      .map((m) => m.id);
    if (list.length) { freeCache = list.slice(0, 8); console.log(`Free models today: ${freeCache.join(', ')}`); return freeCache; }
  } catch (e) { console.log(`Could not list free models (${e.message}); using the built-in list.`); }
  freeCache = FALLBACK_OPENROUTER.split(',');
  return freeCache;
}

async function json(res, label) {
  const text = await res.text();
  let j;
  try { j = JSON.parse(text); } catch { j = { raw: text.slice(0, 300) }; }
  if (res.status === 429 || /quota|rate.?limit|free-models-per-day/i.test(JSON.stringify(j).slice(0, 600)) && !res.ok) {
    const body = JSON.stringify(j).slice(0, 600);
    throw new QuotaError(`${label}: rate limit (${res.status}) ${body.slice(0, 160)}`, /per.?day|daily/i.test(body));
  }
  if (!res.ok) throw new Error(`${label}: ${res.status} ${JSON.stringify(j).slice(0, 300)}`);
  return j;
}

export async function callAI({ system, user, maxTokens = 3000 }) {
  const provider = providerName();
  const e = process.env;

  if (provider === 'anthropic') {
    if (!e.ANTHROPIC_API_KEY) throw new Error('ANTHROPIC_API_KEY missing');
    const res = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-api-key': e.ANTHROPIC_API_KEY, 'anthropic-version': '2023-06-01' },
      body: JSON.stringify({ model: e.AI_MODEL || 'claude-haiku-5-5', max_tokens: maxTokens, system, messages: [{ role: 'user', content: user }] }),
    });
    const j = await json(res, 'Anthropic');
    return j.content.map((c) => c.text ?? '').join('');
  }

  if (provider === 'openrouter') {
    if (!e.OPENROUTER_API_KEY) throw new Error('OPENROUTER_API_KEY missing');
    const models = (e.AI_MODEL ? e.AI_MODEL.split(',').map((x) => x.trim()).filter(Boolean) : await freeModels()).filter((m) => !badModels.has(m));
    if (!models.length) throw new Error('OpenRouter: no working free model left. Set the variable AI_MODEL to a model from openrouter.ai/models?q=free');
    const errors = [];
    for (const model of models) {
      try {
        const res = await fetch('https://openrouter.ai/api/v1/chat/completions', {
          method: 'POST',
          headers: {
            'content-type': 'application/json',
            Authorization: `Bearer ${e.OPENROUTER_API_KEY}`,
            'HTTP-Referer': 'https://balearictimes.com',
            'X-Title': 'Balearic Times',
          },
          body: JSON.stringify({ model, max_tokens: maxTokens, temperature: 0.3, messages: [{ role: 'system', content: system }, { role: 'user', content: user }] }),
          signal: AbortSignal.timeout(180000),
        });
        const j = await json(res, model);
        const out = j.choices?.[0]?.message?.content;
        if (!out) throw new Error(`${model}: empty answer`);
        return out;
      } catch (err) {
        if (err instanceof QuotaError && err.daily) throw err;
        if (/ 404|no endpoints|unavailable|not found|\b400\b|\b403\b/i.test(err.message)) badModels.add(model); // don't keep asking a dead model
        errors.push(String(err.message).slice(0, 140));
      }
    }
    // every model said "too many requests": that is a limit, not a broken article
    if (errors.length && errors.every((m) => /rate limit \(429\)/.test(m))) throw new QuotaError(`all free models are rate-limited right now`, false);
    throw new Error(`all free models failed: ${errors.join(' | ')}`);
  }

  if (provider === 'gemini') {
    if (!e.GEMINI_API_KEY) throw new Error('GEMINI_API_KEY missing');
    const model = e.AI_MODEL || 'gemini-2.5-flash';
    const res = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', 'x-goog-api-key': e.GEMINI_API_KEY },
      body: JSON.stringify({
        systemInstruction: { parts: [{ text: system }] },
        contents: [{ role: 'user', parts: [{ text: user }] }],
        generationConfig: { maxOutputTokens: maxTokens, temperature: 0.3 },
      }),
      signal: AbortSignal.timeout(180000),
    });
    const j = await json(res, 'Gemini');
    return (j.candidates?.[0]?.content?.parts ?? []).map((p) => p.text ?? '').join('');
  }

  if (provider === 'workers-ai') {
    if (!e.CF_ACCOUNT_ID || !e.CF_API_TOKEN) throw new Error('CF_ACCOUNT_ID / CF_API_TOKEN missing');
    const model = e.AI_MODEL || '@cf/meta/llama-3.3-70b-instruct-fp8-fast';
    const res = await fetch(`https://api.cloudflare.com/client/v4/accounts/${e.CF_ACCOUNT_ID}/ai/run/${model}`, {
      method: 'POST',
      headers: { 'content-type': 'application/json', Authorization: `Bearer ${e.CF_API_TOKEN}` },
      body: JSON.stringify({ messages: [{ role: 'system', content: system }, { role: 'user', content: user }], max_tokens: maxTokens }),
    });
    const j = await json(res, 'Workers AI');
    if (!j.success) throw new Error(`Workers AI: ${JSON.stringify(j.errors ?? j)}`);
    return typeof j.result?.response === 'string' ? j.result.response : JSON.stringify(j.result?.response);
  }

  throw new Error(`Unknown AI_PROVIDER ${provider}`);
}
