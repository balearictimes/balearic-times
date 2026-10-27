#!/usr/bin/env node
// Balearic Times autoposter. Runs from GitHub Actions (see .github/workflows/autopost.yml).
//
//  1. Weather: writes one daily forecast article for all four islands from Open-Meteo
//     open data (CC BY 4.0). No AI needed, so it is free and can't invent anything.
//  2. Press releases: reads the RSS feeds listed in scripts/sources.json (official / reusable
//     sources only), and asks an AI model to write an ORIGINAL English news article from each.
//     Drafts that copy too much wording from the source, or are too thin, are rejected.
//
// New stories are saved as drafts (draft: true) unless AUTOPUBLISH=true. Even then, stories on sensitive topics
// (crime, court, deaths, minors …) or with numbers that are not in the source are held back as drafts.
//
// Env:
//   AUTOPUBLISH=true|false          publish immediately or leave as drafts (default false)
//   AI_PROVIDER=anthropic|openrouter|gemini|workers-ai (see scripts/ai.mjs)
//   ANTHROPIC_API_KEY=...           when AI_PROVIDER=anthropic
//   CF_ACCOUNT_ID=... CF_API_TOKEN=...  when AI_PROVIDER=workers-ai
//   AI_MODEL=...                    optional model override
//
// Flags: --weather-only  --news-only  --dry-run

import { callAI as callAIRaw } from './ai.mjs';
import fs from 'node:fs';
import path from 'node:path';
import { XMLParser } from 'fast-xml-parser';
import { parseHTML } from 'linkedom';
import { Readability } from '@mozilla/readability';
import { ROOT, CATEGORIES, writePost, postExists, uniqueSlug, slugify, fetchText, allowedByRobots } from './lib.mjs';

const args = process.argv.slice(2);
const DRY = args.includes('--dry-run');
const AUTOPUBLISH = String(process.env.AUTOPUBLISH).toLowerCase() === 'true';
const SEEN_FILE = path.join(ROOT, 'data/seen.json');
const log = (...a) => console.log('[autopost]', ...a);

// ---------------------------------------------------------------- weather
const ISLANDS = [
  { name: 'Mallorca', place: 'Palma', lat: 39.5696, lon: 2.6502, sea: [39.45, 2.6] },
  { name: 'Menorca', place: 'Maó', lat: 39.8885, lon: 4.2658, sea: [39.85, 4.4] },
  { name: 'Ibiza', place: 'Ibiza Town', lat: 38.9067, lon: 1.4206, sea: [38.85, 1.5] },
  { name: 'Formentera', place: 'Sant Francesc', lat: 38.7056, lon: 1.4294, sea: [38.62, 1.45] },
];

const WMO = {
  0: 'clear skies', 1: 'mostly clear skies', 2: 'a mix of sun and cloud', 3: 'cloudy, overcast skies',
  45: 'fog', 48: 'freezing fog', 51: 'light drizzle', 53: 'drizzle', 55: 'heavy drizzle',
  61: 'light rain', 63: 'rain', 65: 'heavy rain', 66: 'freezing rain', 67: 'heavy freezing rain',
  71: 'light snow', 73: 'snow', 75: 'heavy snow', 80: 'scattered showers', 81: 'heavy showers',
  82: 'violent showers', 95: 'thunderstorms', 96: 'thunderstorms with hail', 99: 'severe thunderstorms with hail',
};
const SHORT = { 0: 'Sunny', 1: 'Mostly sunny', 2: 'Sun & cloud', 3: 'Cloudy', 45: 'Fog', 48: 'Fog', 51: 'Drizzle', 53: 'Drizzle', 55: 'Drizzle', 61: 'Light rain', 63: 'Rain', 65: 'Heavy rain', 66: 'Freezing rain', 67: 'Freezing rain', 71: 'Snow', 73: 'Snow', 75: 'Snow', 80: 'Showers', 81: 'Heavy showers', 82: 'Heavy showers', 95: 'Storms', 96: 'Storms', 99: 'Storms' };
const range = (a, b) => (r(a) === r(b) ? `${r(a)}°C` : `${r(a)}–${r(b)}°C`);
const compass = (deg) => ['north', 'north-east', 'east', 'south-east', 'south', 'south-west', 'west', 'north-west'][Math.round(deg / 45) % 8];
const r = (n) => Math.round(n);
const dayName = (iso) => new Date(iso + 'T12:00:00Z').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', timeZone: 'UTC' });
const hhmm = (iso) => iso.slice(11, 16);

function windWords(kmh) {
  if (kmh < 12) return 'light winds';
  if (kmh < 25) return 'a moderate breeze';
  if (kmh < 40) return 'fresh to strong winds';
  if (kmh < 60) return 'strong winds';
  return 'gale-force gusts';
}
function rainWords(p) {
  if (p < 15) return 'Rain is unlikely';
  if (p < 40) return `There is a low chance of rain (${p}%)`;
  if (p < 70) return `There is a fair chance of rain (${p}%)`;
  return `Rain is likely (${p}%)`;
}
function uvWords(uv) {
  if (uv < 3) return 'UV levels are low.';
  if (uv < 6) return `UV is moderate (index ${r(uv)}), so sun cream is a good idea at midday.`;
  if (uv < 8) return `UV is high (index ${r(uv)}): use sun cream and seek shade around midday.`;
  return `UV is very high (index ${r(uv)}): avoid the midday sun and protect children carefully.`;
}
function seaWords(h) {
  if (h == null) return '';
  if (h < 0.5) return `The sea should be calm, with waves of around ${h.toFixed(1)} m.`;
  if (h < 1.25) return `Sea conditions are slight to moderate, with waves up to about ${h.toFixed(1)} m.`;
  if (h < 2.5) return `The sea will be rough at times, with waves up to ${h.toFixed(1)} m – take care on exposed coasts.`;
  return `Expect very rough seas with waves up to ${h.toFixed(1)} m. Ferry timetables may be affected; check with your operator.`;
}

async function weatherPost() {
  const today = new Date().toLocaleDateString('en-CA', { timeZone: 'Europe/Madrid' }); // YYYY-MM-DD
  const slug = `balearic-weather-forecast-${today}`;
  if (postExists(slug)) return log('weather: already posted today');

  const data = [];
  for (const i of ISLANDS) {
    const f = await (await fetch(
      `https://api.open-meteo.com/v1/forecast?latitude=${i.lat}&longitude=${i.lon}&daily=weather_code,temperature_2m_max,temperature_2m_min,precipitation_probability_max,precipitation_sum,wind_speed_10m_max,wind_gusts_10m_max,wind_direction_10m_dominant,uv_index_max,sunrise,sunset&timezone=Europe%2FMadrid&forecast_days=4`
    )).json();
    let waves = [];
    try {
      const m = await (await fetch(`https://marine-api.open-meteo.com/v1/marine?latitude=${i.sea[0]}&longitude=${i.sea[1]}&daily=wave_height_max&timezone=Europe%2FMadrid&forecast_days=4`)).json();
      waves = m?.daily?.wave_height_max ?? [];
    } catch {}
    data.push({ ...i, d: f.daily, waves });
  }

  const t0 = (x) => x.d;
  const highs = data.map((x) => t0(x).temperature_2m_max[0]);
  const lows = data.map((x) => t0(x).temperature_2m_min[0]);
  const maxRain = Math.max(...data.map((x) => t0(x).precipitation_probability_max[0] ?? 0));
  const maxGust = Math.max(...data.map((x) => t0(x).wind_gusts_10m_max[0] ?? 0));
  const wettest = data.reduce((a, b) => ((b.d.precipitation_probability_max[0] ?? 0) > (a.d.precipitation_probability_max[0] ?? 0) ? b : a));
  const warmest = data.reduce((a, b) => (b.d.temperature_2m_max[0] > a.d.temperature_2m_max[0] ? b : a));

  let headline;
  if (maxRain >= 70) headline = `Rain on the way for the Balearics, with ${wettest.name} most at risk`;
  else if (maxGust >= 60) headline = `Windy day across the Balearics, with gusts up to ${r(maxGust)} km/h`;
  else if (Math.max(...highs) >= 30) headline = `Hot day in the Balearics, with ${warmest.name} reaching ${r(warmest.d.temperature_2m_max[0])}°C`;
  else if (maxRain >= 40) headline = `Mixed day in the Balearics, with a chance of showers`;
  else headline = `Settled weather across the Balearics, highs of ${range(Math.min(...highs), Math.max(...highs))}`;
  const title = `${headline} – weather forecast for ${dayName(data[0].d.time[0])}`;

  const intro = `Here is today's weather forecast for Mallorca, Menorca, Ibiza and Formentera. Daytime highs will be ${range(Math.min(...highs), Math.max(...highs))}, with overnight lows of ${range(Math.min(...lows), Math.max(...lows))}. ${maxRain >= 40 ? `${wettest.name} has the highest chance of rain today, at ${wettest.d.precipitation_probability_max[0]}%.` : 'Most of the islands should stay dry.'} ${maxGust >= 50 ? `Wind gusts could reach ${r(maxGust)} km/h in exposed areas.` : ''}`.trim();

  const sections = data.map((x) => {
    const d = x.d;
    const code = WMO[d.weather_code[0]] ?? 'changeable weather';
    return [
      `## ${x.name}`,
      '',
      `${x.place} can expect ${code} today, with a high of ${r(d.temperature_2m_max[0])}°C and a low of ${r(d.temperature_2m_min[0])}°C. ${rainWords(d.precipitation_probability_max[0] ?? 0)}${(d.precipitation_sum[0] ?? 0) >= 1 ? `, with around ${d.precipitation_sum[0].toFixed(1)} mm expected` : ''}. There will be ${windWords(d.wind_speed_10m_max[0])} from the ${compass(d.wind_direction_10m_dominant[0])}, reaching ${r(d.wind_speed_10m_max[0])} km/h with gusts of up to ${r(d.wind_gusts_10m_max[0])} km/h.`,
      '',
      `${uvWords(d.uv_index_max[0] ?? 0)} ${seaWords(x.waves[0])} Sunrise is at ${hhmm(d.sunrise[0])} and sunset at ${hhmm(d.sunset[0])}.`.trim(),
    ].join('\n');
  });

  const outlookRows = data.map((x) => {
    const cells = [1, 2, 3].map((k) => `${r(x.d.temperature_2m_max[k])}° / ${r(x.d.temperature_2m_min[k])}°, ${SHORT[x.d.weather_code[k]] ?? '–'}, rain ${x.d.precipitation_probability_max[k] ?? 0}%`);
    return `| ${x.name} | ${cells.join(' | ')} |`;
  });
  const days = [1, 2, 3].map((k) => dayName(data[0].d.time[k]));

  const body = [
    intro,
    '',
    ...sections.flatMap((s) => [s, '']),
    '## The next three days',
    '',
    `| Island | ${days.join(' | ')} |`,
    `|---|---|---|---|`,
    ...outlookRows,
    '',
    '## Weather warnings',
    '',
    'This forecast is generated automatically from open weather model data. Official weather warnings for the Balearic Islands are issued by the Spanish state weather agency, [AEMET](https://www.aemet.es/en/eltiempo/prediccion/avisos). In an emergency, call **112**.',
    '',
    '*Weather data by [Open-Meteo.com](https://open-meteo.com/) (CC BY 4.0).*',
  ].join('\n');

  if (DRY) return log('weather (dry run):\n' + title + '\n\n' + body);
  writePost({
    slug,
    title,
    date: new Date().toISOString(),
    category: 'weather',
    excerpt: intro.slice(0, 250),
    image: '/images/cat-weather.svg',
    imageAlt: 'Balearic Times weather',
    author: 'Balearic Times Weather Desk',
    sourceName: 'Open-Meteo',
    sourceUrl: 'https://open-meteo.com/',
    draft: false, // pure data, safe to publish automatically
    autopost: true,
    body,
  });
  log('weather: posted', slug);
}

// ---------------------------------------------------------------- AI
const SYSTEM = `You are a news writer for Balearic Times, an English-language news site for residents of and visitors to Mallorca, Menorca, Ibiza and Formentera.
You will receive the text of an official press release or public announcement (often in Spanish or Catalan).
Write an ORIGINAL English news article about it.

Rules:
- Use ONLY facts stated in the source. Never invent facts, numbers, names, dates or quotes.
- Write in your own words and your own structure. Do not translate the source sentence by sentence and do not copy its phrasing.
- You may include at most ONE short direct quote (under 20 words) if the source contains one, attributed to the person named in the source.
- Attribute claims ("the Govern said", "according to the Consell").
- Open with a clear news lead: what happened, who, where, when.
- Then add useful context for English-speaking residents: what it means for them, practical details (dates, how to apply, where), and what happens next – but only from the source or widely known, uncontroversial background (e.g. what the Consell de Mallorca is).
- Use 2–4 short subheadings (## in Markdown). British English. Neutral, factual tone. No hype, no clickbait, no emojis.
- Length: 450–850 words when the source has enough substance. If the source is short, write a shorter article. Never pad.
- Keep local names in their original form (e.g. Consell de Mallorca, Son Espases) with a brief English explanation the first time.
- Pick the category by the MAIN SUBJECT of the story, from this list only:
  news = general local news, accidents, emergencies, transport, crime, community and anything that fits nowhere else;
  business = companies, tourism industry, hotels, airlines, property, jobs, investments;
  economy = prices, wages, taxes, budgets, public finances, housing market, statistics and figures;
  health = hospitals, doctors, public health, medicines, wellbeing;
  lifestyle = food, travel, events, leisure, consumer items, daily life;
  politics = Govern, Parlament, island councils, town halls, parties, elections, laws and regulations;
  culture = art, music, festivals, theatre, cinema, books, heritage, traditions;
  sports = football, basketball, sailing, cycling, running, any sport;
  tech = technology, digital, start-ups, science, energy and environment innovation.

If the source is only an administrative notice with no news value for readers (meeting agenda, call for applications or tenders, internal appointment, opening hours), reply with {"skip": true} instead.

Reply with ONLY a JSON object, no other text:
{"title": "...", "excerpt": "one-sentence summary under 200 characters", "category": "...", "body": "the article in Markdown, without the title"}`;

const callAI = (user) => callAIRaw({ system: SYSTEM, user, maxTokens: 3000 });

function parseJSON(text) {
  const m = text.match(/\{[\s\S]*\}/);
  if (!m) throw new Error('AI did not return JSON');
  return JSON.parse(m[0]);
}

// ---- Safety gate: with AUTOPUBLISH=true a story still stays a draft for a human when it touches risky ground.
const RISKY = /\b(arrest\w*|detain\w*|custody|murder\w*|kill\w*|dead|death|died|dies|fatal\w*|body|suicid\w*|rape\w*|sexual\w*|abus\w*|assault\w*|stabb\w*|shot|shooting|court|trial|jail|prison|sentenc\w*|charged|accused|suspect\w*|investigat\w*|minors?|missing|overdose|drown\w*|injur\w*|crash\w*|victims?|lawsuit|fraud|corrupt\w*|defamat\w*)\b/i;
const digitsOf = (s) => new Set((String(s).match(/\d[\d.,]*\d|\d/g) ?? []).map((n) => n.replace(/\D/g, '')));
export function needsReview(out, sourceText) {
  const article = `${out.title} ${out.excerpt ?? ''} ${out.body}`;
  const risky = article.match(RISKY);
  if (risky) return `sensitive topic ("${risky[0]}")`;
  const src = digitsOf(sourceText);
  for (const n of digitsOf(article)) if (n.length >= 3 && !src.has(n)) return `number ${n} is not in the source`;
  if (String(out.body).split(/\s+/).length > 1100) return 'unusually long';
  return null;
}

// Share of the article's 8-word sequences that also appear in the source.
// Translation from Spanish/Catalan keeps this near 0; copying English text raises it.
function overlap(article, source) {
  const toks = (s) => s.toLowerCase().replace(/[^a-z0-9à-ÿ\s]/g, ' ').split(/\s+/).filter(Boolean);
  const grams = (t) => { const g = new Set(); for (let i = 0; i + 8 <= t.length; i++) g.add(t.slice(i, i + 8).join(' ')); return g; };
  const a = grams(toks(article));
  const s = grams(toks(source));
  if (!a.size) return 0;
  let hit = 0;
  for (const g of a) if (s.has(g)) hit++;
  return hit / a.size;
}

// ---------------------------------------------------------------- feeds
const xml = new XMLParser({ ignoreAttributes: false, attributeNamePrefix: '@_' });
const textOf = (v) => (typeof v === 'object' && v !== null ? v['#text'] ?? '' : v ?? '');
const stripTags = (s) => String(s ?? '').replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();

function readFeed(raw) {
  const doc = xml.parse(raw);
  const items = doc?.rss?.channel?.item ?? doc?.feed?.entry ?? doc?.['rdf:RDF']?.item ?? [];
  return (Array.isArray(items) ? items : [items]).map((it) => ({
    title: stripTags(textOf(it.title)),
    link: typeof it.link === 'string' ? it.link : it.link?.['@_href'] ?? (Array.isArray(it.link) ? it.link[0]?.['@_href'] : '') ?? '',
    date: it.pubDate ?? it.published ?? it.updated ?? it['dc:date'],
    summary: stripTags(textOf(it.description ?? it.summary ?? it['content:encoded'] ?? it.content)),
  })).filter((i) => i.link && i.title);
}

// For sites without RSS: read the news LIST page and pick out the article links that match `linkPattern`.
function readList(html, baseUrl, pattern, stripQuery = false) {
  const { document } = parseHTML(html);
  const re = new RegExp(pattern);
  const byLink = new Map();
  for (const a of document.querySelectorAll('a[href]')) {
    let link;
    try { const u = new URL(a.getAttribute('href'), baseUrl); if (stripQuery) u.search = ''; link = u.href.split('#')[0]; } catch { continue; }
    if (!re.test(link)) continue;
    const text = stripTags(a.textContent || a.getAttribute('title') || '');
    if (!byLink.has(link) || text.length > byLink.get(link).length) byLink.set(link, text);
  }
  return [...byLink].filter(([, t]) => t.length >= 15).map(([link, title]) => ({ link, title, date: null, summary: '' }));
}

async function articleText(url) {
  const html = await fetchText(url);
  const { document } = parseHTML(html);
  const art = new Readability(document).parse();
  return stripTags(art?.textContent ?? '').slice(0, 12000);
}

async function newsPosts() {
  const cfg = JSON.parse(fs.readFileSync(path.join(ROOT, 'scripts/sources.json'), 'utf8'));
  const enabled = cfg.sources.filter((s) => s.enabled && /^https?:\/\//.test(s.url));
  if (!enabled.length) return log('news: no enabled sources in scripts/sources.json – skipping');

  const seen = fs.existsSync(SEEN_FILE) ? JSON.parse(fs.readFileSync(SEEN_FILE, 'utf8')) : {};
  const cutoff = Date.now() - 3 * 864e5;

  for (const src of enabled) {
    const max = src.maxPerRun ?? cfg.maxPerRun ?? 4;
    let items = [];
    try {
      const raw = await fetchText(src.url);
      items = src.type === 'html' ? readList(raw, src.url, src.linkPattern, src.stripQuery) : readFeed(raw);
    } catch (e) { log(`news: source failed ${src.name}: ${e.message}`); continue; }
    // List pages have no dates: the first time we see one, only take the newest few so we don't dump its whole history
    if (src.type === 'html') {
      seen.__init = seen.__init ?? {};
      if (!seen.__init[src.name]) {
        items.slice(src.firstRun ?? 2).forEach((i) => { seen[i.link] = 'backlog'; });
        seen.__init[src.name] = new Date().toISOString();
      }
    }
    let made = 0;
    for (const it of items) {
      if (made >= max) break;
      if (seen[it.link]) continue;
      if (it.date && new Date(it.date).valueOf() < cutoff) { seen[it.link] = 'old'; continue; }

      try {
        let text = '';
        if (await allowedByRobots(it.link)) { try { text = await articleText(it.link); } catch {} }
        if (text.length < 400) text = `${it.title}. ${it.summary}`;
        if (text.length < 300) { seen[it.link] = 'too-short'; log(`skip (too short): ${it.title}`); continue; }
        // national / general feeds: only stories that mention the islands
        if (src.mustMatch && !new RegExp(src.mustMatch, 'i').test(`${it.title} ${text}`)) { seen[it.link] = 'not-local'; continue; }

        const out = parseJSON(await callAI(`Source: ${src.name}\nURL: ${it.link}\nTitle: ${it.title}\n\n${text}`));
        if (out.skip) { seen[it.link] = 'not-newsworthy'; log(`skip (no news value): ${it.title}`); continue; }
        const words = String(out.body ?? '').split(/\s+/).length;
        const ov = overlap(out.body ?? '', text);
        if (words < 250) { seen[it.link] = 'thin'; log(`skip (only ${words} words): ${it.title}`); continue; }
        if (ov > 0.12) { seen[it.link] = 'too-similar'; log(`skip (${Math.round(ov * 100)}% wording overlap with source): ${it.title}`); continue; }

        const category = CATEGORIES.includes(out.category) && out.category !== 'weather' ? out.category : src.category ?? 'news';
        const review = AUTOPUBLISH ? needsReview(out, text) : 'AUTOPUBLISH is off';
        const slug = uniqueSlug(slugify(out.title));
        if (DRY) { log(`(dry run) would write ${slug} – ${words} words`); continue; }
        writePost({
          slug,
          title: out.title,
          date: new Date().toISOString(),
          category,
          excerpt: out.excerpt,
          image: `/images/cat-${category}.svg`,
          imageAlt: `Balearic Times ${category}`,
          author: 'Balearic Times Newsroom',
          sourceName: src.name,
          sourceUrl: it.link,
          draft: !!review,
          autopost: true,
          body: out.body,
        });
        seen[it.link] = slug;
        made++;
        log(`${review ? 'draft' : 'PUBLISHED'}: ${slug} (${words} words, overlap ${Math.round(ov * 100)}%)${review && AUTOPUBLISH ? ` – held for review: ${review}` : ''}`);
      } catch (e) {
        log(`error on ${it.link}: ${e.message}`);
      }
    }
  }
  if (!DRY) fs.writeFileSync(SEEN_FILE, JSON.stringify(seen, null, 1));
}

// ---------------------------------------------------------------- run
if (!args.includes('--news-only')) await weatherPost().catch((e) => log('weather error:', e.message));
if (!args.includes('--weather-only')) await newsPosts().catch((e) => log('news error:', e.message));
