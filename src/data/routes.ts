import { getCollection } from 'astro:content';
import { CATEGORIES, ISLANDS, SITE } from './site';
import { getPostsFor } from './posts';
import { DEFAULT_LANG } from '../i18n/locales';

/** slug -> languages it exists in (always includes English). */
async function langsBySlug() {
  const tr = await getCollection('translations', ({ data }) => !data.draft);
  const map = new Map<string, string[]>();
  for (const t of tr) {
    const [lang, ...rest] = t.id.split('/');
    const slug = rest.join('/');
    map.set(slug, [...(map.get(slug) ?? [DEFAULT_LANG]), lang]);
  }
  return map;
}

export async function articlePaths(lang: string) {
  const posts = await getPostsFor(lang);
  const langs = await langsBySlug();
  return posts.map((post) => {
    const altLangs = langs.get(post.id) ?? [DEFAULT_LANG];
    const related = posts.filter((p) => p.data.category === post.data.category && p.id !== post.id).slice(0, 3);
    return { params: { slug: post.id, ...(lang !== DEFAULT_LANG ? { lang } : {}) }, props: { post, related, altLangs } };
  });
}

export async function categoryPaths(lang: string, paged: boolean) {
  const posts = await getPostsFor(lang);
  const out: any[] = [];
  for (const c of CATEGORIES) {
    const items = posts.filter((p) => p.data.category === c.slug);
    const pages = Math.max(1, Math.ceil(items.length / SITE.postsPerPage));
    const lp = lang !== DEFAULT_LANG ? { lang } : {};
    if (!paged) out.push({ params: { cat: c.slug, ...lp }, props: { items: items.slice(0, SITE.postsPerPage), pages } });
    else for (let n = 2; n <= pages; n++)
      out.push({ params: { cat: c.slug, n: String(n), ...lp }, props: { items: items.slice((n - 1) * SITE.postsPerPage, n * SITE.postsPerPage), pages } });
  }
  return out;
}

export const islandPaths = (lang: string) =>
  ISLANDS.map((i) => ({ params: { island: i.slug, ...(lang !== DEFAULT_LANG ? { lang } : {}) } }));
