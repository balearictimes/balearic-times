import rss from '@astrojs/rss';
import { SITE } from './site';
import { getPostsFor, excerptOf, postUrl } from './posts';
import { uiOf, localeOf } from '../i18n';

export async function makeFeed(context, lang) {
  const posts = (await getPostsFor(lang)).filter((p) => !p.data.noindex).slice(0, 50);
  return rss({
    title: SITE.name,
    description: uiOf(lang).siteDescription,
    site: context.site,
    customData: `<language>${localeOf(lang).htmlLang}</language>`,
    items: posts.map((p) => ({
      title: p.data.title,
      pubDate: p.data.date,
      description: excerptOf(p, 300),
      link: postUrl(p),
      categories: [p.data.category],
    })),
  });
}
