// Languages of the site. English is the default and lives at the root (/my-story/),
// every other language lives under its own folder (/es/my-story/).
// To add a language: add it here, add src/i18n/lang/<code>.ts, and add it to
// scripts/translate.mjs (LANGS) and public/admin/config.yml (a collection).

export interface Locale {
  code: string; // folder name and file name
  hreflang: string; // for Google
  htmlLang: string; // <html lang>
  name: string; // name in its own language (shown in the language menu)
  english: string; // name in English (for the translator prompt and the editor)
  dir: 'ltr' | 'rtl';
  og: string; // og:locale
  date: string; // locale for dates and times
  font?: string; // Google Fonts family for scripts our own font doesn't cover
}

export const LOCALES: Locale[] = [
  { code: 'en', hreflang: 'en', htmlLang: 'en-GB', name: 'English', english: 'English', dir: 'ltr', og: 'en_GB', date: 'en-GB' },
  { code: 'es', hreflang: 'es', htmlLang: 'es', name: 'Español', english: 'Spanish (Spain)', dir: 'ltr', og: 'es_ES', date: 'es-ES' },
  { code: 'fr', hreflang: 'fr', htmlLang: 'fr', name: 'Français', english: 'French', dir: 'ltr', og: 'fr_FR', date: 'fr-FR' },
  { code: 'de', hreflang: 'de', htmlLang: 'de', name: 'Deutsch', english: 'German', dir: 'ltr', og: 'de_DE', date: 'de-DE' },
];

export const DEFAULT_LANG = 'en';
export const LANG_CODES = LOCALES.map((l) => l.code);
export const OTHER_LANGS = LOCALES.filter((l) => l.code !== DEFAULT_LANG);
export const localeOf = (code: string) => LOCALES.find((l) => l.code === code) ?? LOCALES[0];

/** '/about-us/' -> '/es/about-us/' (English stays at the root). */
export const lp = (lang: string, path: string) => (lang === DEFAULT_LANG ? path : `/${lang}${path}`);
