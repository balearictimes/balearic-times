// English text for the whole site. Every other language file has exactly the same keys.
// In page HTML: {site} = site name, {email} = contact email, and links written as href="@/path/"
// automatically point to the same page in the reader's language.

export const ui = {
  tagline: 'Balearic Times — News from Mallorca, Menorca, Ibiza & Formentera',
  siteDescription:
    'Balearic Times is an independent news site covering Mallorca, Menorca, Ibiza and Formentera: news, politics, business, economy, health, culture, sport, tech and weather.',
  defaultTitle: 'News from Mallorca, Menorca, Ibiza & Formentera',
  home: 'Home',
  contact: 'Contact',
  about: 'About',
  sendTip: 'Send a Tip',
  sendTipLower: 'Send a tip',
  language: 'Language',
  toggleNav: 'Toggle navigation',
  timezone: 'CET',

  cat: {
    news: ['News', 'The latest news from Mallorca, Menorca, Ibiza and Formentera.'],
    business: ['Business', 'Companies, tourism, property and jobs across the Balearic Islands.'],
    economy: ['Economy', 'Prices, wages, housing and the numbers behind island life.'],
    health: ['Health', 'Hospitals, public health and wellbeing in the Balearics.'],
    lifestyle: ['Lifestyle', 'Food, travel, events and living on the islands.'],
    politics: ['Politics', 'The Govern, the Parlament, the island councils and the town halls.'],
    culture: ['Culture', 'Art, music, festivals, heritage and traditions.'],
    sports: ['Sports', 'RCD Mallorca, basketball, sailing, running and island sport.'],
    tech: ['Tech', 'Technology, start-ups and digital life in the Balearics.'],
    weather: ['Weather', 'Live conditions, forecasts and weather warnings for every island.'],
  },
  island: {
    mallorca: ['Mallorca', 'Palma, the Serra de Tramuntana and the largest island — politics, tourism, housing and RCD Mallorca.'],
    menorca: ['Menorca', 'A UNESCO biosphere reserve — Maó, Ciutadella, farming, heritage and island life.'],
    ibiza: ['Ibiza', 'Eivissa beyond the clubs — Santa Eulària, Sant Antoni, housing, transport and the season.'],
    formentera: ['Formentera', 'The smallest island — ferries, beaches, the environment and the Consell de Formentera.'],
  },

  // Home page
  readMoreCaps: 'READ MORE',
  learnMoreCaps: 'LEARN MORE',
  latestHeading: 'Latest News from the Balearic Islands',
  emptyLatest: 'New stories are on their way.',
  viewAllNews: 'View all news',
  homeH1: 'Balearic Times — News from Mallorca, Menorca, Ibiza & Formentera',
  aboutTagline: 'Island News, Politics, Business & Weather',
  aboutP1:
    'Balearic Times brings you the stories that shape life on Mallorca, Menorca, Ibiza and Formentera. From decisions in the Govern and the island councils to housing, tourism, health services, culture and sport, we explain what happened, why it matters and what comes next.',
  aboutSub: 'Independent & Local',
  aboutP2:
    'Our reporting is built on official announcements, public data and the people involved, written in our own words and checked before it goes out. A daily forecast for all four islands keeps you ready for whatever the Mediterranean brings.',
  ourIslands: 'Our Islands',
  acrossBalearics: 'Across the Balearics',
  islandsIntro: 'Four islands, four very different stories. Follow the news from the island that matters to you.',
  nStories: '{n} stories',
  latestNews: 'Latest news',
  topStories: 'Top Stories',
  balearicIslands: 'Balearic Islands',
  weather: 'Weather',

  // Newsletter
  newsletter: 'Newsletter',
  signUp: 'Sign Up for Updates',
  name: 'Name',
  email: 'Email',
  subscribe: 'Subscribe',

  // Weather widget
  chooseIsland: 'Choose island',
  wxLoading: 'Loading current conditions…',
  wxUnavailable: 'Weather is unavailable right now.',
  wxWind: 'wind',
  wx: {
    clear: 'Clear', mainlyClear: 'Mainly clear', partlyCloudy: 'Partly cloudy', overcast: 'Overcast', fog: 'Fog',
    drizzle: 'Drizzle', rain: 'Rain', heavyRain: 'Heavy rain', freezingRain: 'Freezing rain', snow: 'Snow',
    showers: 'Showers', thunderstorm: 'Thunderstorm', cloudy: 'Cloudy',
  },

  // Cards and articles
  readMore: 'Read More',
  backTo: '← Back to {cat}',
  by: 'By {author}',
  minRead: '{n} min read',
  updated: 'Updated {date}',
  photo: 'Photo: {credit}',
  source: 'Source:',
  basedOn: 'based on information published by',
  share: 'Share',
  keepReading: 'Keep reading',
  moreCat: 'More {cat}',
  translatedNote: 'This article was translated from English.',
  readOriginal: 'Read the original',
  advertisement: 'Advertisement',

  // Section and island pages
  catTitle: '{name} — Balearic Islands',
  catPageTitle: '{name} — page {n}',
  catIntro: '{name} from Mallorca, Menorca, Ibiza & Formentera',
  noStories: 'No stories in this section yet — check back soon.',
  readInEnglish: 'Read the latest stories in English',
  islandTitle: '{name} news',
  islandBanner: '{name} News',
  islandDesc: 'Latest news from {name}: {blurb}',
  latestFrom: 'The latest from {name}',
  pagination: 'Pagination',

  // Footer
  usefulLinks: 'Useful Links',
  aboutUs: 'About Us',
  editorialPolicy: 'Editorial Policy',
  contactUs: 'Contact Us',
  rssFeed: 'RSS Feed',
  sendNewsTip: 'Send us a news tip',
  location: 'Palma de Mallorca, Illes Balears',
  privacyPolicy: 'Privacy Policy',
  terms: 'Terms & Conditions',
  weatherDataBy: 'Weather data by',

  // Contact form
  yourName: 'Your name',
  topic: 'Topic',
  topics: ['News tip', 'Press release', 'Correction', 'Advertising', 'Other'],
  message: 'Message',
  sendMessage: 'Send Message',
};

export const pages = {
  about: {
    title: 'About Us',
    intro: 'Independent news from the Balearic Islands.',
    html: `<p><strong>{site}</strong> covers Mallorca, Menorca, Ibiza and Formentera for residents, businesses and visitors who want clear, reliable news.</p>
<h2>What we cover</h2>
<p>We report on the decisions, events and trends that shape island life: regional and local politics, the economy and tourism, housing, health services, culture and festivals, sport, technology and the weather. When something matters to people living on or travelling to the islands, we want to explain what happened, why it matters and what happens next.</p>
<h2>How we work</h2>
<p>Our stories are built from primary sources wherever possible: official announcements from the Govern de les Illes Balears, the island councils and town halls, public statistics, court and emergency services, clubs, organisations and the people involved. We write every story in our own words and correct errors promptly.</p>
<p>We use software tools, including AI writing assistance, to help draft some routine stories such as weather updates and summaries of official announcements, and to translate our articles from English into other languages. You can read more in our <a href="@/editorial-policy/">editorial policy</a>.</p>
<h2>Corrections</h2>
<p>If we get something wrong, we fix it and note the correction on the article. Please tell us at <a href="mailto:{email}">{email}</a>.</p>
<h2>Get in touch</h2>
<p>News tips, press releases, advertising and partnership enquiries are all welcome. Visit our <a href="@/contact-us/">contact page</a>.</p>`,
  },
  editorial: {
    title: 'Editorial Policy',
    intro: 'How Balearic Times sources, writes, translates and corrects its stories.',
    html: `<h2>Sources</h2>
<p>We build stories from primary sources wherever possible: official announcements and press releases from public bodies, published statistics, weather data, statements from organisations and businesses, and our own reporting. We report facts in our own words and never copy text or photographs from other publications. Where a story relies on another outlet's exclusive reporting, we say so.</p>
<h2>Our archive</h2>
<p>In 2026 we moved to a new website and reviewed our archive. Older articles were rewritten from scratch by our newsroom: facts were checked, errors corrected, unverifiable figures and quotes removed, and third-party images taken out. Each archived article keeps its original publication date and shows when it was last updated.</p>
<h2>Translations</h2>
<p>Our articles are written in English and translated into Spanish, French and German, mostly with the help of AI translation. Each translation links to the English original, which is the reference version if there is any difference. If you spot a translation error, please tell us.</p>
<h2>Use of automation and AI</h2>
<p>Some routine stories, such as daily weather forecasts and summaries of official announcements, are drafted with the help of software and AI writing tools. Those drafts are checked by an editor against the original source before they are published. Automated weather reports are generated from open forecast data provided by Open-Meteo.</p>
<h2>Images</h2>
<p>We use our own photographs, images supplied for publication by the organisations involved, and openly licensed images, and we credit them. We do not copy photographs from other publications.</p>
<h2>Corrections</h2>
<p>We correct errors promptly and note significant corrections at the end of the article. Report an error to <a href="mailto:{email}">{email}</a>.</p>
<h2>Independence</h2>
<p>Advertising and sponsored content is always labelled and never influences our news coverage.</p>`,
  },
  privacy: {
    title: 'Privacy Policy',
    intro: 'How we handle your information.',
    html: `<p><em>Last updated: 26 October 2026.</em></p>
<h2>Who we are</h2>
<p>{site} ({url}) is the controller of personal data collected through this website. Contact: <a href="mailto:{email}">{email}</a>.</p>
<h2>What we collect</h2>
<ul>
<li><strong>Contact form and newsletter:</strong> your name, email address and message, used only to reply to you or send the newsletter you asked for. Forms are processed by Web3Forms on our behalf.</li>
<li><strong>Technical data:</strong> our host, Cloudflare, processes IP addresses and basic request data to deliver and protect the site.</li>
<li><strong>Weather widget:</strong> your browser requests forecast data directly from Open-Meteo. We do not send your location.</li>
</ul>
<h2>Cookies</h2>
<p>This site does not set advertising or tracking cookies. If that changes, we will ask for your consent first.</p>
<h2>Your rights</h2>
<p>Under the GDPR you can ask to access, correct or delete your data, or object to its use, by emailing us. You can also complain to the Spanish data protection authority (AEPD, aepd.es).</p>
<h2>Retention</h2>
<p>We keep messages only as long as needed to deal with them, and newsletter addresses until you unsubscribe.</p>`,
  },
  terms: {
    title: 'Terms & Conditions',
    intro: 'The rules for using this website.',
    html: `<p><em>Last updated: 26 October 2026.</em></p>
<h2>Use of content</h2>
<p>Unless stated otherwise, articles and original graphics on {site} are © {site}. You may share links and short quotations with attribution. Please ask before republishing full articles. Third-party images remain the property of their owners and are credited.</p>
<h2>Accuracy</h2>
<p>We work hard to be accurate, but information is provided as is. Weather forecasts are automated and may change; always follow official warnings from AEMET and the emergency services (112).</p>
<h2>Translations</h2>
<p>Articles are written in English and translated into other languages, largely by automated means. If a translation differs from the English original, the English version applies.</p>
<h2>External links</h2>
<p>We link to sources and other websites. We are not responsible for their content.</p>
<h2>Contact</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Contact Us',
    intro: 'News tips, press releases, corrections and advertising',
    description: 'Contact Balearic Times with news tips, press releases, corrections or advertising enquiries.',
    html: `<p>Send us a story, a press release or a correction using the form below, or email <a href="mailto:{email}">{email}</a>. We read every message, in any language.</p>`,
  },
  thanks: {
    title: 'Thank you',
    intro: 'Your message has been sent.',
    html: `<p>Thanks for getting in touch. If you sent a message, we'll reply as soon as we can. If you subscribed to the newsletter, you're on the list.</p>
<p><a class="btn btn-primary no-icon" href="@/">Back to the homepage</a></p>`,
  },
  notFound: {
    title: 'Page Not Found',
    intro: "Sorry, we couldn't find that page.",
    html: `<p>The story may have moved or been removed. Try the <a href="@/">homepage</a> or one of the sections in the menu.</p>`,
  },
};
