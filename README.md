# Balearic Times

A fast, static news site for **balearictimes.com**, hosted free on Cloudflare Pages.

- **Theme**: the star983fm.com layout, in Balearic Times black and white: black top bar with live Palma clock and temperature, white header with the nav and a black button, full-width photo hero with a dark overlay and the blackletter masthead, rounded news cards with black category pills, the "Our Islands" cards, the "Top Stories" band, newsletter + weather block, Useful Links / Contact footer and the black bottom bar. Same Aller fonts (in `public/fonts/`).
- **Branding**: the Balearic Times blackletter masthead from the current site, as vector files (`public/logo.svg`, `public/logo-light.svg`, `public/images/logo-big.svg`, `public/favicon.svg`).
- **Sections**: Home, News, Business, Economy, Health, Lifestyle, Politics, Culture, Sports, Tech, Weather, Contact, About (plus Editorial policy, Privacy, Terms).
- **Old URLs keep working**: articles stay at `/post-slug/`, sections at `/category/news/`.
- **Editor** at `/admin/` for writing articles in the browser.
- **Autoposter** runs 3 times a day on GitHub Actions: a daily weather forecast for all four islands, plus AI-written articles from official press releases (saved as drafts for you to approve).

The island pages (`/island/mallorca/` etc.) collect every story that mentions that island.

Everything is free except the optional AI drafting, which costs a few euros a month with Anthropic, or is free within Cloudflare Workers AI's daily allowance.

---

## 1. Put the code on GitHub

1. Create a free account at github.com if you don't have one.
2. Create a new **private** repository called `balearic-times`.
3. Upload this folder to it. The easiest way is GitHub's **"uploading an existing file"** link on the empty repo page: drag in all the files and folders from this zip, then **Commit changes**. Make sure the hidden `.github` folder is included; if your computer hides it, use GitHub Desktop or `git push` instead.

## 2. Connect Cloudflare Pages

1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git** → pick `balearic-times`.
2. Build settings: framework preset **Astro**, build command `npm run build`, output directory `dist`.
3. Under **Environment variables**, add `PUBLIC_WEB3FORMS_KEY`. Get a free key at web3forms.com using the email address that should receive contact messages. This powers the contact form and newsletter signups.
4. Deploy. You get a `*.pages.dev` address to check everything before switching the domain.

## 3. Your old articles are already included

The 439 articles that Google had indexed are already in `src/content/posts/`, rewritten and at their original URLs. The other 610 old WordPress posts redirect to their section page, and old WordPress addresses (tags, authors, feeds, uploads) are redirected too. All of these rules are in `public/_redirects`. There is nothing to import.

## 4. Switch the domain

Cloudflare Pages project → **Custom domains** → add `balearictimes.com` and `www.balearictimes.com`. If the domain's DNS is already on Cloudflare, it's one click; otherwise Cloudflare tells you which nameservers to set at your registrar. Then you can cancel the WordPress hosting.

Afterwards, in **Google Search Console**, submit `https://balearictimes.com/sitemap-index.xml`.

## 5. Set up the editor (/admin)

1. Edit `public/admin/config.yml` and change `repo: YOUR-GITHUB-USERNAME/balearic-times`.
2. Create a GitHub **fine-grained personal access token**: GitHub → Settings → Developer settings → Personal access tokens. Give it access to this repo only, with **Contents: Read and write**.
3. Open `https://balearictimes.com/admin/`, choose **Sign in with token** and paste it.

You can now write, edit, schedule and delete articles, and upload photos. Pressing **Save** publishes the article; it appears on the site about a minute later. Use the **Drafts** filter to see what the autoposter has written for you to review: check it against the source link, edit if needed, untick *Draft*, then save.

If you want team members to log in with their GitHub accounts instead of tokens, deploy the free `sveltia-cms-auth` Cloudflare Worker and add its address as `base_url` in `config.yml`.

## 6. Turn on the autoposter

GitHub repo → **Settings** → **Secrets and variables** → **Actions**.

**Weather posts** work with no setup. Every morning a forecast article for all four islands is published from Open-Meteo data.

**Press-release articles** need an AI key. Pick one:

| Option | Secrets to add | Variables to add |
|---|---|---|
| Anthropic (best quality, a few €/month) | `ANTHROPIC_API_KEY` | `AI_PROVIDER` = `anthropic` |
| OpenRouter free models (€0; add $10 credit once to lift the limit from 50 to 1,000 requests a day) | `OPENROUTER_API_KEY` | `AI_PROVIDER` = `openrouter` |
| Google Gemini free tier (€0) | `GEMINI_API_KEY` | `AI_PROVIDER` = `gemini` |
| Cloudflare Workers AI (free daily allowance) | `CF_ACCOUNT_ID`, `CF_API_TOKEN` (permission: Workers AI) | `AI_PROVIDER` = `workers-ai` |

Optional variables: `AI_MODEL` to change the model (for OpenRouter you can list several, comma-separated, and they are tried in order; the default is a few `:free` models, check openrouter.ai/models?q=free if one disappears), and `AUTOPUBLISH` = `true` to skip the review step. Leave `AUTOPUBLISH` off until you trust the output.

Then add sources in **`scripts/sources.json`**: paste each RSS feed address and set `"enabled": true`.

**Only add sources whose content is meant to be reused:**

- Official press rooms: the Govern de les Illes Balears, Consells Insulars, Ajuntaments
- Public bodies and statistics offices (IBESTAT, INE), the EU
- Clubs' and companies' own press releases

Check each site's *Aviso legal*. **Never add other newspapers.** Rewriting their articles is what creates copyright problems and Google penalties.

### Switching on automatic publishing

Set the GitHub variable `AUTOPUBLISH` = `true` (repo → Settings → Secrets and variables → Actions → Variables). With it on, stories from the official sources go live by themselves, **except** that the robot keeps a story as a draft for you when:

- it touches a sensitive topic (arrests, courts, deaths, accidents, injuries, minors, fraud, abuse …), or
- it contains a number (3+ digits) that does not appear in the source text, or
- it is unusually long.

The Autopost log says `PUBLISHED` or `draft … held for review: <reason>` for every story. Weather posts always publish by themselves. Set `AUTOPUBLISH` back to `false` any time to review everything again.

### What the autoposter protects against

- It writes in its own words from the facts in the source, and links the source at the bottom of every article.
- It rejects any draft that shares too much wording with the source (more than 12% of 8-word phrases).
- It rejects drafts under 250 words, rather than padding them out.
- It never copies photos. Stories get a branded category cover; add a real photo in the editor if you have one.
- It runs 3 times a day and makes one commit per run, so Cloudflare's free build limit is never an issue.

Run it by hand any time: **Actions** → **Autopost** → **Run workflow**.

---

## 7. Languages (English, Spanish, French, German)

English is the original and lives at the normal addresses (`/my-story/`). The same stories exist in Spanish (`/es/my-story/`), French (`/fr/…`) and German (`/de/…`). The menus, pages, weather widget, dates and footer are translated by hand (`src/i18n/lang/*.ts`). Articles are translated by the AI.

**How a new story becomes four stories.** You (or the autoposter) publish in English. Right after, the **Autopost** workflow runs `scripts/translate.mjs`, which writes one file per language into `src/content/translations/<lang>/<same-slug>.md`. Each translated page links back to the English original, and Google gets `hreflang` tags so it shows the right language to the right reader.

**The old archive.** Only a few top stories are translated by hand. To translate the other ~430 articles: GitHub → **Actions** → **Translate the archive** → **Run workflow**. It also runs every night by itself, does what the AI quota allows, and stops. It is safe to run any number of times; it only does what is missing. On a free tier expect a few weeks; with a paid key it takes a day.

**Correcting a translation.** In `/admin`, open *Translations — Spanish* (or French / German), fix the text and leave *I corrected this by hand* ticked. The robot will never overwrite it. If you change the English article later, untick that box on the translations you want re-done.

**If the English text changes**, the robot re-translates the other languages automatically (it compares a fingerprint), except the ones you marked as corrected.

**Costs.** Spanish/French/German needs 3 extra AI requests per story. A normal day is 40–60 requests. Free tiers (OpenRouter with a $10 top-up, or Gemini) cover that. Paid Anthropic Haiku is roughly €30–50 for the whole archive once, then cents per day.

**Run it yourself:** `node scripts/translate.mjs --dry-run` shows what is left; `node scripts/translate.mjs --lang de --slug my-story` does one.

**Adding a language later (e.g. Portuguese).** A ready translation of the menus and pages for Portuguese, Chinese, Hindi, Bengali, Indonesian, Arabic and Urdu is kept in `src/i18n/_extra/`. See the README note in that folder.

---

## Everyday changes

| To change | Edit |
|---|---|
| Site name, email, phone/WhatsApp, social links (social links also switch on the left-hand social rail like Star FM's) | `src/data/site.ts` |
| Hero / banner photo | put a wide photo at `public/images/hero.jpg` and set `heroImage: '/images/hero.jpg'` in `src/data/site.ts`. Until then a drawn Palma-bay picture is used. On the homepage, the top story's own photo is used when it has one. |
| Header button ("Send a Tip") | `cta` in `src/data/site.ts` |
| Colours and fonts | top of `src/styles/global.css` (`--accent` is the Balearic Times black) |
| Logo | `public/logo.svg`, `public/logo-light.svg`, `public/images/logo-big.svg`, `public/favicon.svg`, `public/images/og-default.png` (share image) |
| Ads | add Cloudflare Pages env var `PUBLIC_ADSENSE_CLIENT` (ca-pub-…) and put your slot ids in the `<AdSlot slot="…" />` tags in `src/views/Home.astro` and `src/views/Article.astro` — same placements as Star FM |
| About / policy pages, menus and all fixed texts (per language) | `src/i18n/lang/en.ts`, `es.ts`, `fr.ts`, `de.ts` |
| Autopost times | `.github/workflows/autopost.yml` (`cron` line, UTC) |

## Running it on your own computer (optional)

```
npm install
npm run dev        # http://localhost:4321
npm run weather    # write today's weather post
npm run autopost -- --dry-run
```
