export const SITE = {
  name: 'Balearic Times',
  tagline: 'Balearic Times — News from Mallorca, Menorca, Ibiza & Formentera',
  description:
    'Balearic Times is an independent English-language news site covering Mallorca, Menorca, Ibiza and Formentera: news, politics, business, economy, health, culture, sport, tech and weather.',
  url: 'https://balearictimes.com',
  email: 'news@balearictimes.com', // shown in the top bar and footer
  // Optional extra contact lines for the footer (leave '' to hide)
  phone: '',
  // Company details shown in the footer
  legal: 'Virtual Random LLC · Reg. No. 400481260 · Erosi Manjgaladze St. 75a, Nadzaladevi District, Tbilisi, Georgia',
  whatsapp: '', // digits only with country code, e.g. 34600000000
  social: {
    facebook: '', // e.g. https://www.facebook.com/balearictimes — shows the left social rail when set
    instagram: 'https://www.instagram.com/balearictimes/',
    x: '',
  },
  // Hero / banner background. Put your own landscape photo at public/images/hero.jpg
  // and change this to '/images/hero.jpg'. The dark overlay is added on top.
  heroImage: '/images/hero.svg',
  // Header button (Star FM's "Listen Live" button)
  cta: { label: 'Send a Tip', href: '/contact-us/', icon: 'fa-paper-plane' },
  postsPerPage: 12,
};

export const CATEGORIES = [
  { slug: 'news', name: 'News', blurb: 'The latest news from Mallorca, Menorca, Ibiza and Formentera.' },
  { slug: 'business', name: 'Business', blurb: 'Companies, tourism, property and jobs across the Balearic Islands.' },
  { slug: 'economy', name: 'Economy', blurb: 'Prices, wages, housing and the numbers behind island life.' },
  { slug: 'health', name: 'Health', blurb: 'Hospitals, public health and wellbeing in the Balearics.' },
  { slug: 'lifestyle', name: 'Lifestyle', blurb: 'Food, travel, events and living on the islands.' },
  { slug: 'politics', name: 'Politics', blurb: 'The Govern, the Parlament, the island councils and the town halls.' },
  { slug: 'culture', name: 'Culture', blurb: 'Art, music, festivals, heritage and traditions.' },
  { slug: 'sports', name: 'Sports', blurb: 'RCD Mallorca, basketball, sailing, running and island sport.' },
  { slug: 'tech', name: 'Tech', blurb: 'Technology, start-ups and digital life in the Balearics.' },
  { slug: 'weather', name: 'Weather', blurb: 'Live conditions, forecasts and weather warnings for every island.' },
] as const;

export type CategorySlug = (typeof CATEGORIES)[number]['slug'];

export const categoryName = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.name ?? slug;
export const categoryBlurb = (slug: string) => CATEGORIES.find((c) => c.slug === slug)?.blurb ?? '';

export const NAV = [
  { href: '/', label: 'Home' },
  ...CATEGORIES.map((c) => ({ href: `/category/${c.slug}/`, label: c.name })),
  { href: '/contact-us/', label: 'Contact' },
  { href: '/about-us/', label: 'About' },
];

// Islands: weather widget, weather autoposter and the "Our Islands" cards / pages
export const ISLANDS = [
  {
    slug: 'mallorca', name: 'Mallorca', place: 'Palma', lat: 39.5696, lon: 2.6502,
    blurb: 'Palma, the Serra de Tramuntana and the largest island — politics, tourism, housing and RCD Mallorca.',
    match: ['mallorca', 'majorca', 'palma', 'calvià', 'calvia', 'manacor', 'inca', 'alcúdia', 'alcudia', 'sóller', 'soller', 'llucmajor', 'pollença', 'pollensa', 'magaluf', 'son espases', 'tramuntana'],
  },
  {
    slug: 'menorca', name: 'Menorca', place: 'Maó', lat: 39.8885, lon: 4.2658,
    blurb: 'A UNESCO biosphere reserve — Maó, Ciutadella, farming, heritage and island life.',
    match: ['menorca', 'minorca', 'maó', 'mahon', 'mahón', 'ciutadella', 'alaior', 'es mercadal', 'fornells'],
  },
  {
    slug: 'ibiza', name: 'Ibiza', place: 'Ibiza Town', lat: 38.9067, lon: 1.4206,
    blurb: 'Eivissa beyond the clubs — Santa Eulària, Sant Antoni, housing, transport and the season.',
    match: ['ibiza', 'eivissa', 'santa eulària', 'santa eularia', 'sant antoni', 'san antonio', 'sant josep', 'sant joan de labritja'],
  },
  {
    slug: 'formentera', name: 'Formentera', place: 'Sant Francesc', lat: 38.7056, lon: 1.4294,
    blurb: 'The smallest island — ferries, beaches, the environment and the Consell de Formentera.',
    match: ['formentera', 'sant francesc', 'la savina', 'es pujols', 'la mola'],
  },
] as const;
