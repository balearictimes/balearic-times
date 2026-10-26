import { getCollection, type CollectionEntry } from 'astro:content';
import { ISLANDS } from './site';
import { DEFAULT_LANG, localeOf, lp } from '../i18n/locales';

export type Post = CollectionEntry<'posts'>;
/** A post in a given language. For English it is the post itself; for other languages it has the
 *  English post's data with the translated title/excerpt/body. `entry` is what gets rendered. */
export type LPost = Post & { lang: string; en: Post; entry: Post | CollectionEntry<'translations'>; translated: boolean };

export async function getPosts(): Promise<Post[]> {
  const all = await getCollection('posts', ({ data }) => !data.draft);
  return all.sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** Every post that has a translation in `lang` (English: all posts). Newest first. */
export async function getPostsFor(lang: string): Promise<LPost[]> {
  const en = await getPosts();
  if (lang === DEFAULT_LANG) return en.map((p) => ({ ...p, lang, en: p, entry: p, translated: false }) as LPost);
  const tr = await getCollection('translations', ({ id, data }) => id.startsWith(`${lang}/`) && !data.draft);
  const byId = new Map(tr.map((t) => [t.id.slice(lang.length + 1), t]));
  const out: LPost[] = [];
  for (const p of en) {
    const t = byId.get(p.id);
    if (!t) continue;
    out.push({
      ...p,
      data: { ...p.data, title: t.data.title, excerpt: t.data.excerpt ?? undefined },
      body: t.body,
      lang,
      en: p,
      entry: t,
      translated: true,
    } as LPost);
  }
  return out;
}

/** Which languages have a translation of this article. */
export async function translationsOf(slug: string): Promise<string[]> {
  const tr = await getCollection('translations', ({ id, data }) => id.endsWith(`/${slug}`) && !data.draft);
  return tr.map((t) => t.id.split('/')[0]);
}

const langOf = (p: Post) => (p as Partial<LPost>).lang ?? DEFAULT_LANG;
export const postUrl = (p: Post) => lp(langOf(p), `/${p.id}/`);
export const postLang = langOf;

/** The story's photo, or the red category cover when it has none. */
export const coverOf = (p: Post) => p.data.image || `/images/cat-${p.data.category}.svg`;

/** True when the story has a real photo (not one of our generated covers). */
export const hasPhoto = (p: Post) => !!p.data.image && !p.data.image.startsWith('/images/cat-');

export const formatDate = (d: Date, lang = DEFAULT_LANG) =>
  d.toLocaleDateString(localeOf(lang).date, { month: 'short', day: 'numeric', year: 'numeric', timeZone: 'Europe/Madrid' });

export function plainText(p: Post): string {
  return (p.body ?? '')
    .replace(/!\[[^\]]*\]\([^)]*\)/g, '')
    .replace(/\[([^\]]*)\]\([^)]*\)/g, '$1')
    .replace(/<[^>]+>/g, ' ')
    .replace(/[#>*_`|]/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}

export function excerptOf(p: Post, len = 160): string {
  if (p.data.excerpt) return p.data.excerpt.length > len + 40 ? p.data.excerpt.slice(0, len).replace(/\s\S*$/, '') + '…' : p.data.excerpt;
  const text = plainText(p);
  return text.length > len ? text.slice(0, len).replace(/\s\S*$/, '') + '…' : text;
}

export function readingTime(p: Post): number {
  const words = (p.body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / 200));
}

/** Island pages match on the English post text (place names), so pass the English post list. */
export function postsForIsland<T extends Post>(posts: T[], slug: string): T[] {
  const island = ISLANDS.find((i) => i.slug === slug);
  if (!island) return [];
  const words = island.match.map((w) => w.toLowerCase());
  return posts.filter((p) => {
    const en = (p as Partial<LPost>).en ?? p;
    const hay = `${en.data.title} ${en.data.excerpt ?? ''} ${plainText(en)}`.toLowerCase();
    return words.some((w) => hay.includes(w));
  });
}
