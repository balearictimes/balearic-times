#!/usr/bin/env node
// Balearic Times translator. Translates every English article into the other site languages.
//
//   node scripts/translate.mjs                 translate what is missing or out of date (up to TRANSLATE_MAX)
//   node scripts/translate.mjs --lang es       only one language
//   node scripts/translate.mjs --slug my-story only one article
//   node scripts/translate.mjs --dry-run       list what would be translated, spend nothing
//
// One file per language and article:  src/content/translations/<lang>/<slug>.md
//  - It is (re)translated when the English text changes (sourceHash differs).
//  - If you correct a translation in the CMS and tick "reviewed", it is never overwritten.
//  - Resumable: run it as often as you like; it only does what is left. Stops cleanly at the
//    free-tier daily limit and carries on the next day.
//
// Env: AI_PROVIDER, AI_MODEL and the key — see scripts/ai.mjs.
//      TRANSLATE_MAX   most translations per run (default 40)
//      TRANSLATE_PAUSE seconds between requests (default 4 — keeps under 20 requests/minute)

import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { callAI, QuotaError, providerName } from './ai.mjs';
import { ROOT, POSTS_DIR, q, detectLang } from './lib.mjs';

// Keep in sync with src/i18n/locales.ts (every language except English).
export const LANGS = [
  { code: 'es', name: 'Spanish (Spain)' },
  { code: 'fr', name: 'French' },
  { code: 'de', name: 'German' },
];
const OUT_DIR = path.join(ROOT, 'src/content/translations');

const args = process.argv.slice(2);
const flag = (n) => { const i = args.indexOf(n); return i >= 0 ? args[i + 1] : null; };
const DRY = args.includes('--dry-run');
const ONLY_LANG = flag('--lang');
const ONLY_SLUG = flag('--slug');
const MAX = Number(process.env.TRANSLATE_MAX || 40);
const PAUSE = Number(process.env.TRANSLATE_PAUSE || 4) * 1000;

// ---------- read English posts ----------
function unq(v) {
  v = v.trim();
  if (v.startsWith('"')) { try { return JSON.parse(v); } catch { /* fall through */ } }
  if (v.startsWith("'")) return v.slice(1, -1).replace(/''/g, "'");
  return v;
}
function readPost(file) {
  const raw = fs.readFileSync(file, 'utf8');
  const m = raw.match(/^---\n([\s\S]*?)\n---\n?([\s\S]*)$/);
  if (!m) return null;
  const fm = {};
  for (const line of m[1].split('\n')) {
    const k = line.match(/^(\w+):\s*(.*)$/);
    if (k) fm[k[1]] = unq(k[2]);
  }
  return { slug: path.basename(file, '.md'), title: fm.title, excerpt: fm.excerpt ?? '', draft: fm.draft === 'true', date: fm.date, body: m[2].trim() };
}
const hashOf = (p) => crypto.createHash('sha1').update(`${p.title}\n${p.excerpt}\n${p.body}`).digest('hex').slice(0, 12);

function currentState(lang, slug) {
  const f = path.join(OUT_DIR, lang, `${slug}.md`);
  if (!fs.existsSync(f)) return null;
  const raw = fs.readFileSync(f, 'utf8');
  return { reviewed: /^reviewed:\s*true/m.test(raw), hash: raw.match(/^sourceHash:\s*"?([\w]+)"?/m)?.[1] };
}

// ---------- translate ----------
const system = (lang) => `You are the translation desk of Balearic Times, a news site about Mallorca, Menorca, Ibiza and Formentera.
Translate the English news article you are given into ${lang.name}, as a professional news translator would.

Rules:
- Natural, fluent, neutral newspaper style in ${lang.name}. Do not translate word for word.
- Keep ALL Markdown structure exactly: headings (##), paragraphs, bullet lists, tables, bold, links and their URLs.
- Keep proper names, place names, organisations and institutions in their usual local form (Consell de Mallorca, Son Espases, RCD Mallorca, Govern, Palma). Use the established ${lang.name} name where there is one (e.g. Majorca/Mallorca as is normal in ${lang.name}).
- Keep numbers, dates, money amounts and quotations accurate. Convert nothing. Add nothing. Leave nothing out.
- Do not add comments, notes or explanations.

Reply in EXACTLY this format and nothing else:
TITLE: <translated title>
EXCERPT: <translated one-sentence summary>
-----
<translated article body in Markdown>`;

function parse(out) {
  out = out.replace(/^```(?:markdown|md)?\n?|\n?```$/g, '').trim();
  const m = out.match(/^\s*TITLE:\s*(.+)\n\s*EXCERPT:\s*(.*)\n-{3,}\s*\n([\s\S]+)$/);
  if (!m) throw new Error('answer not in the expected format');
  return { title: m[1].trim().replace(/^"|"$/g, ''), excerpt: m[2].trim().replace(/^"|"$/g, ''), body: m[3].trim() };
}

const words = (s) => (s.match(/\S+/g) ?? []).length;
function validate(src, t, lang) {
  if (!t.title || t.title.length > 220) throw new Error('bad title');
  const ratio = words(t.body) / Math.max(1, words(src.body));
  if (ratio < 0.7 || ratio > 1.6) throw new Error(`length off (${ratio.toFixed(2)}x of the English)`);
  const paras = (s) => s.split(/\n{2,}/).length;
  if (paras(t.body) < paras(src.body) * 0.6) throw new Error('paragraphs missing');
  if (detectLang(t.body) === 'en') throw new Error('still looks English');
  if (/^(here is|sure|of course|note:)/i.test(t.body)) throw new Error('chatty answer');
}

async function translateOne(src, lang) {
  const user = `TITLE: ${src.title}\nEXCERPT: ${src.excerpt}\n-----\n${src.body}`;
  let lastErr;
  for (let attempt = 1; attempt <= 2; attempt++) {
    try {
      const out = await callAI({ system: system(lang), user, maxTokens: 6000 });
      const t = parse(out);
      validate(src, t, lang);
      return t;
    } catch (e) {
      if (e instanceof QuotaError) throw e;
      lastErr = e;
      await sleep(PAUSE);
    }
  }
  throw lastErr;
}

function save(lang, src, t) {
  const dir = path.join(OUT_DIR, lang.code);
  fs.mkdirSync(dir, { recursive: true });
  const lines = ['---', `title: ${q(t.title)}`];
  if (t.excerpt) lines.push(`excerpt: ${q(t.excerpt)}`);
  lines.push(`sourceHash: ${q(hashOf(src))}`, 'reviewed: false', 'draft: false', '---', '', t.body, '');
  fs.writeFileSync(path.join(dir, `${src.slug}.md`), lines.join('\n'));
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

// ---------- main ----------
const posts = fs.readdirSync(POSTS_DIR).filter((f) => f.endsWith('.md')).map((f) => readPost(path.join(POSTS_DIR, f)))
  .filter((p) => p && !p.draft && (!ONLY_SLUG || p.slug === ONLY_SLUG))
  .sort((a, b) => String(b.date).localeCompare(String(a.date))); // newest first

const todo = [];
for (const p of posts) for (const l of LANGS) {
  if (ONLY_LANG && l.code !== ONLY_LANG) continue;
  const st = currentState(l.code, p.slug);
  if (st?.reviewed) continue;
  if (st && st.hash === hashOf(p)) continue;
  todo.push({ p, l, update: !!st });
}
console.log(`${posts.length} English articles · ${todo.length} translations to do · provider ${providerName()} · this run up to ${MAX}`);
if (DRY) { for (const t of todo.slice(0, 30)) console.log(` ${t.update ? 'update' : 'new   '} ${t.l.code} ${t.p.slug}`); process.exit(0); }

let done = 0, failed = 0;
for (const { p, l, update } of todo) {
  if (done >= MAX) break;
  try {
    const t = await translateOne(p, l);
    save(l, p, t);
    done++;
    console.log(`✓ ${update ? 'updated' : 'new'} ${l.code} ${p.slug}`);
  } catch (e) {
    if (e instanceof QuotaError) { console.log(`Daily limit reached — stopping. (${e.message})`); break; }
    failed++;
    console.log(`✗ ${l.code} ${p.slug}: ${e.message}`);
    if (failed >= 8) { console.log('Too many failures — stopping this run.'); break; }
  }
  await sleep(PAUSE);
}
console.log(`Done: ${done} translated, ${failed} failed, ${Math.max(0, todo.length - done - failed)} left for the next run.`);
