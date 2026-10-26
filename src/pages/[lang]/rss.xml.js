import { makeFeed } from '../../data/feed.js';
import { OTHER_LANGS } from '../../i18n';
export const getStaticPaths = () => OTHER_LANGS.map((l) => ({ params: { lang: l.code } }));
export const GET = (context) => makeFeed(context, context.params.lang);
