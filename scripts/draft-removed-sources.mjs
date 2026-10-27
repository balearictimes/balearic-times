// One-off clean-up: sets stories to draft when they were written from sources we no longer use
// (ports, Sant Antoni, Eivissa town hall, Alcúdia, Llucmajor, Palma).
// Drafts disappear from the site (and so do their translations). Nothing is deleted.
//   node scripts/draft-removed-sources.mjs          -> only lists what it would change
//   node scripts/draft-removed-sources.mjs --apply  -> does it
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const DIR = process.env.POSTS_DIR || path.join(ROOT, 'src/content/posts');
const APPLY = process.argv.includes('--apply');

// exact hostnames (without www.) or domain endings
const REMOVED = ['portsdebalears.com', 'santantoni.net', 'eivissa.es', 'alcudia.net', 'llucmajor.org', 'palma.cat', 'palma.es'];
const removed = (host) => REMOVED.some((h) => host === h || host.endsWith('.' + h));

let found = 0, changed = 0;
for (const f of fs.readdirSync(DIR).filter((x) => x.endsWith('.md'))) {
  const file = path.join(DIR, f);
  const txt = fs.readFileSync(file, 'utf8');
  const m = txt.match(/^---\n([\s\S]*?)\n---/);
  if (!m) continue;
  const fm = m[1];
  const url = fm.match(/^sourceUrl:\s*"?([^"\n]+)"?\s*$/m)?.[1];
  if (!url) continue;
  let host;
  try { host = new URL(url).hostname.replace(/^www\./, ''); } catch { continue; }
  if (!removed(host)) continue;
  found++;
  const isDraft = /^draft:\s*true\s*$/m.test(fm);
  console.log(`${isDraft ? 'already draft' : 'to draft    '}  ${f}  (${host})`);
  if (isDraft || !APPLY) continue;
  const newFm = /^draft:/m.test(fm) ? fm.replace(/^draft:.*$/m, 'draft: true') : fm + '\ndraft: true';
  fs.writeFileSync(file, txt.replace(fm, newFm));
  changed++;
}
console.log(`\n${found} stories from removed sources, ${APPLY ? changed + ' set to draft' : 'nothing changed (add --apply to do it)'}.`);
