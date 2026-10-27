// Licence / credit notices shown under articles, chosen by the website the story came from.
// licence: the open licence the source publishes under (we share our rewrite under the same one).
// credit: wording the source asks for when its data is reused.
interface Rule { hosts: string[]; licence?: string; url?: string; credit?: string }
const RULES: Rule[] = [
  { hosts: ['caib.es', 'caib.cat', 'illesbalears.cat'], licence: 'CC BY-SA', url: 'https://creativecommons.org/licenses/by-sa/4.0/' },
  { hosts: ['ibestat.es'], credit: "Font: elaboració pròpia a partir de dades de l'IBESTAT" },
];
export function licenceFor(sourceUrl?: string): Rule | undefined {
  if (!sourceUrl) return;
  let host = '';
  try { host = new URL(sourceUrl).hostname.replace(/^www\./, ''); } catch { return; }
  return RULES.find((r) => r.hosts.some((h) => host === h || host.endsWith('.' + h)));
}
