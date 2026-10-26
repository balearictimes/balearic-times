import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Static site for Cloudflare Pages. URLs keep the old WordPress shape for English:
//   /<post-slug>/            articles          (Spanish: /es/<post-slug>/, French /fr/…, German /de/…)
//   /category/<name>/        category pages
export default defineConfig({
  site: 'https://balearictimes.com',
  trailingSlash: 'always',
  build: { format: 'directory' },
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/') && !page.includes('/thank-you/'),
      i18n: { defaultLocale: 'en', locales: { en: 'en-GB', es: 'es', fr: 'fr', de: 'de' } },
    }),
  ],
});
