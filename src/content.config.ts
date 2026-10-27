import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// The admin panel saves an emptied optional field as `field:` (null). Treat that as "not set".
const blank = (v: unknown) => (v === null || v === '' ? undefined : v);
const optStr = z.preprocess(blank, z.string().optional());

const posts = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/posts' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date(),
    updated: z.preprocess(blank, z.coerce.date().optional()),
    category: z.enum(['news', 'business', 'economy', 'health', 'lifestyle', 'politics', 'culture', 'sports', 'tech', 'weather']),
    excerpt: optStr,
    image: optStr,
    imageAlt: optStr,
    imageCredit: optStr,
    author: z.string().default('Balearic Times Newsroom'),
    // Where the facts came from (shown at the bottom of the article)
    sourceName: optStr,
    sourceUrl: optStr,
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
    noindex: z.boolean().default(false),
    autopost: z.boolean().default(false),
  }),
});

// Translations of the English posts. One file per language and article:
//   src/content/translations/<lang>/<english-slug>.md
// Date, category, photo etc. always come from the English post; only the words are stored here.
const translations = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/translations' }),
  schema: z.object({
    title: z.string(),
    excerpt: optStr,
    // Fingerprint of the English text this was translated from. When the English changes,
    // the translate script re-translates (unless "reviewed" is on).
    sourceHash: optStr,
    // Tick this in the CMS after correcting a translation by hand: it will never be overwritten.
    reviewed: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { posts, translations };
