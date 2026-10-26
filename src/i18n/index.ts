import { SITE } from '../data/site';
import { DEFAULT_LANG, LANG_CODES, localeOf, lp } from './locales';
import * as en from './lang/en';
import * as es from './lang/es';
import * as fr from './lang/fr';
import * as de from './lang/de';

export * from './locales';

const BUNDLES = { en, es, fr, de } as const;
export type UI = typeof en.ui;
export type Pages = typeof en.pages;

export const uiOf = (lang: string): UI => (BUNDLES as any)[lang]?.ui ?? en.ui;
export const pagesOf = (lang: string): Pages => (BUNDLES as any)[lang]?.pages ?? en.pages;

/** Replace {placeholders} in a string. */
export const fmt = (s: string, vars: Record<string, string | number> = {}) =>
  s.replace(/\{(\w+)\}/g, (m, k) => (k in vars ? String(vars[k]) : m));

/** Static page HTML: fill {site}/{url}/{email} and turn href="@/path/" into the language's path. */
export function pageHtml(lang: string, html: string) {
  return fmt(html, { site: SITE.name, url: SITE.url, email: SITE.email }).replace(
    /href="@(\/[^"]*)"/g,
    (_m, p) => `href="${lp(lang, p)}"`,
  );
}

export const isLang = (s: string) => LANG_CODES.includes(s);
export const langStaticPaths = () =>
  LANG_CODES.filter((c) => c !== DEFAULT_LANG).map((lang) => ({ params: { lang } }));

export const catLabel = (lang: string, slug: string) => (uiOf(lang).cat as any)[slug]?.[0] ?? slug;
export const catBlurb = (lang: string, slug: string) => (uiOf(lang).cat as any)[slug]?.[1] ?? '';
export const islandLabel = (lang: string, slug: string) => (uiOf(lang).island as any)[slug]?.[0] ?? slug;
export const islandBlurb = (lang: string, slug: string) => (uiOf(lang).island as any)[slug]?.[1] ?? '';

export const formatDateLang = (d: Date, lang: string) =>
  new Intl.DateTimeFormat(localeOf(lang).date, { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'Europe/Madrid' }).format(d);
