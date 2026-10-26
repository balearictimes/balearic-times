// Shared helpers for the importer and the autoposter.
import fs from 'node:fs';
import path from 'node:path';

export const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '..');
export const POSTS_DIR = path.join(ROOT, 'src/content/posts');
export const UPLOADS_DIR = path.join(ROOT, 'public/uploads');
export const CATEGORIES = ['news', 'business', 'economy', 'health', 'lifestyle', 'politics', 'culture', 'sports', 'tech', 'weather'];

export const UA = 'BalearicTimesBot/1.0 (+https://balearictimes.com/editorial-policy/)';

export function slugify(s) {
  let out = String(s)
    .normalize('NFKD')
    .replace(/[̀-ͯ]/g, '')
    .toLowerCase()
    .replace(/&/g, ' and ')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  if (out.length > 90) out = out.slice(0, 90).replace(/-[^-]*$/, ''); // don't cut a word in half
  return out;
}

// YAML-safe double-quoted string
export const q = (s) => JSON.stringify(String(s ?? ''));

export function writePost({ slug, title, date, category, excerpt, image, imageAlt, imageCredit, author, sourceName, sourceUrl, draft = false, noindex = false, autopost = false, body }) {
  fs.mkdirSync(POSTS_DIR, { recursive: true });
  const lines = [
    '---',
    `title: ${q(title)}`,
    `date: ${new Date(date).toISOString()}`,
    `category: ${CATEGORIES.includes(category) ? category : 'news'}`,
  ];
  if (excerpt) lines.push(`excerpt: ${q(excerpt)}`);
  if (image) lines.push(`image: ${q(image)}`);
  if (imageAlt) lines.push(`imageAlt: ${q(imageAlt)}`);
  if (imageCredit) lines.push(`imageCredit: ${q(imageCredit)}`);
  if (author) lines.push(`author: ${q(author)}`);
  if (sourceName) lines.push(`sourceName: ${q(sourceName)}`);
  if (sourceUrl) lines.push(`sourceUrl: ${q(sourceUrl)}`);
  lines.push(`draft: ${draft}`, `noindex: ${noindex}`, `autopost: ${autopost}`, '---', '', body.trim(), '');
  const file = path.join(POSTS_DIR, `${slug}.md`);
  fs.writeFileSync(file, lines.join('\n'));
  return file;
}

export const postExists = (slug) => fs.existsSync(path.join(POSTS_DIR, `${slug}.md`));

export function uniqueSlug(base) {
  let s = base || `story-${Date.now()}`;
  let i = 2;
  while (postExists(s)) s = `${base}-${i++}`;
  return s;
}

export async function fetchText(url, opts = {}) {
  const res = await fetch(url, { headers: { 'User-Agent': UA, ...(opts.headers ?? {}) }, signal: AbortSignal.timeout(30000) });
  if (!res.ok) throw new Error(`${res.status} ${res.statusText} for ${url}`);
  return res.text();
}

export async function download(url, destRel) {
  const dest = path.join(UPLOADS_DIR, destRel);
  if (fs.existsSync(dest)) return `/uploads/${destRel}`;
  const res = await fetch(url, { headers: { 'User-Agent': UA }, signal: AbortSignal.timeout(60000) });
  if (!res.ok) throw new Error(`${res.status} for ${url}`);
  fs.mkdirSync(path.dirname(dest), { recursive: true });
  fs.writeFileSync(dest, Buffer.from(await res.arrayBuffer()));
  return `/uploads/${destRel}`;
}

// Very small language check: is this text mostly English?
const STOP = {
  en: ['the', 'and', 'of', 'to', 'in', 'is', 'for', 'with', 'that', 'on', 'are', 'was', 'from', 'has', 'have', 'will', 'this'],
  es: ['el', 'la', 'los', 'las', 'de', 'del', 'que', 'y', 'en', 'por', 'para', 'con', 'una', 'un', 'es', 'se', 'su', 'al'],
  ca: ['els', 'les', 'amb', 'per', 'que', 'una', 'del', 'dels', 'és', 'als', 'aquest', 'aquesta', 'i'],
  de: ['der', 'die', 'das', 'und', 'ist', 'nicht', 'mit', 'auf', 'für', 'ein', 'eine', 'den', 'dem', 'sind', 'wird', 'binnen'],
};
export function detectLang(text) {
  const words = String(text).toLowerCase().match(/[a-zà-ÿ']+/g) ?? [];
  const score = Object.fromEntries(Object.keys(STOP).map((k) => [k, 0]));
  for (const w of words) for (const [k, list] of Object.entries(STOP)) if (list.includes(w)) score[k]++;
  return Object.entries(score).sort((a, b) => b[1] - a[1])[0][0];
}
