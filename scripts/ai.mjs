// One place that talks to the AI. Used by the autoposter (writing) and the translator.
//
//   AI_PROVIDER = anthropic | openrouter | gemini | workers-ai
//   AI_MODEL    = optional. For openrouter you can give several, comma-separated: they are tried in order.
//
//   anthropic   ANTHROPIC_API_KEY                 (paid, best quality, default model claude-haiku-5-5)
//   openrouter  OPENROUTER_API_KEY                (free models end in ":free"; see https://openrouter.ai/models?q=free)
//   gemini      GEMINI_API_KEY                    (free tier at https://aistudio.google.com/apikey)
//   workers-ai  CF_ACCOUNT_ID + CF_API_TOKEN      (free daily allowance on Cloudflare)

export class QuotaError extends Error {}

export function providerName() {
  const e = process.env;
  return (e.AI_PROVIDER || (e.ANTHROPIC_API_KEY ? 'anthropic' : e.OPENROUTER_API_KEY ? 'openrouter' : e.GEMINI_API_KEY ? 'gemini' : 'workers-ai')).toLowerCase();
}

const DEFAULT_OPENROUTER = 'meta-llama/llama-3.3-70b-instruct:free,google/gemma-3-27b-it:free,mistralai/mistral-small-3.1-24b-instruct:free';

async function json(res, label) {
  const text = await res.text();
  let j;
  try { j = JSON.parse(text); } catch { j = { raw: text.slice(0, 300) }; }
  if (res.status === 429 || /quota|rate.?limit|free-models-per-day/i.test(JSON.stringify(j).slice(0, 600)) && !res.ok) {
    throw new QuotaError(`${label}: rate limit or daily quota reached (${res.status})`);
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
    const models = (e.AI_MODEL || DEFAULT_OPENROUTER).split(',').map((s) => s.trim()).filter(Boolean);
    let lastErr;
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
        const j = await json(res, `OpenRouter ${model}`);
        const out = j.choices?.[0]?.message?.content;
        if (!out) throw new Error(`OpenRouter ${model}: empty answer`);
        return out;
      } catch (err) {
        if (err instanceof QuotaError && /free-models-per-day|per.?day/i.test(err.message + '')) throw err;
        lastErr = err; // try the next model
      }
    }
    throw lastErr;
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
