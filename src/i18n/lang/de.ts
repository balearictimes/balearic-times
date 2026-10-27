import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — Nachrichten von Mallorca, Menorca, Ibiza und Formentera',
  siteDescription:
    'Balearic Times ist eine unabhängige Nachrichtenseite über Mallorca, Menorca, Ibiza und Formentera: Nachrichten, Politik, Wirtschaft, Gesundheit, Kultur, Sport, Technologie und Wetter.',
  defaultTitle: 'Nachrichten von Mallorca, Menorca, Ibiza und Formentera',
  home: 'Startseite',
  contact: 'Kontakt',
  about: 'Über uns',
  sendTip: 'Hinweis senden',
  sendTipLower: 'Hinweis senden',
  language: 'Sprache',
  notTranslated: 'Noch nicht übersetzt',
  toggleNav: 'Menü öffnen',
  timezone: 'MEZ',

  cat: {
    news: ['Nachrichten', 'Die neuesten Nachrichten von Mallorca, Menorca, Ibiza und Formentera.'],
    business: ['Wirtschaft', 'Unternehmen, Tourismus, Immobilien und Arbeitsmarkt auf den Balearen.'],
    economy: ['Konjunktur', 'Preise, Löhne, Wohnen und die Zahlen hinter dem Inselleben.'],
    health: ['Gesundheit', 'Krankenhäuser, öffentliche Gesundheit und Wohlbefinden auf den Balearen.'],
    lifestyle: ['Lifestyle', 'Essen, Reisen, Veranstaltungen und das Leben auf den Inseln.'],
    politics: ['Politik', 'Die Govern, das Parlament, die Inselräte und die Rathäuser.'],
    culture: ['Kultur', 'Kunst, Musik, Feste, Kulturerbe und Traditionen.'],
    sports: ['Sport', 'RCD Mallorca, Basketball, Segeln, Laufen und Inselsport.'],
    tech: ['Tech', 'Technologie, Start-ups und digitales Leben auf den Balearen.'],
    weather: ['Wetter', 'Aktuelle Bedingungen, Vorhersagen und Wetterwarnungen für jede Insel.'],
  },
  island: {
    mallorca: ['Mallorca', 'Palma, die Serra de Tramuntana und die größte Insel: Politik, Tourismus, Wohnen und der RCD Mallorca.'],
    menorca: ['Menorca', 'Ein UNESCO-Biosphärenreservat: Maó, Ciutadella, Landwirtschaft, Kulturerbe und das Inselleben.'],
    ibiza: ['Ibiza', 'Ibiza jenseits der Clubs: Santa Eulària, Sant Antoni, Wohnen, Verkehr und die Tourismussaison.'],
    formentera: ['Formentera', 'Die kleinste Insel: Fähren, Strände, Umwelt und der Inselrat von Formentera.'],
  },

  readMoreCaps: 'WEITERLESEN',
  learnMoreCaps: 'MEHR ERFAHREN',
  latestHeading: 'Aktuelle Nachrichten von den Balearen',
  emptyLatest: 'Neue Meldungen folgen in Kürze.',
  viewAllNews: 'Alle Nachrichten ansehen',
  homeH1: 'Balearic Times — Nachrichten von Mallorca, Menorca, Ibiza und Formentera',
  aboutTagline: 'Inselnachrichten, Politik, Wirtschaft und Wetter',
  aboutP1:
    'Balearic Times berichtet über die Themen, die das Leben auf Mallorca, Menorca, Ibiza und Formentera prägen. Von Entscheidungen der Regionalregierung und der Inselräte bis zu Wohnen, Tourismus, Gesundheitsversorgung, Kultur und Sport erklären wir, was passiert ist, warum es wichtig ist und was als Nächstes kommt.',
  aboutSub: 'Unabhängig und lokal',
  aboutP2:
    'Unsere Berichte stützen sich auf offizielle Mitteilungen, öffentliche Daten und die Beteiligten selbst. Wir schreiben sie in eigenen Worten und prüfen sie vor der Veröffentlichung. Ein tägliches Wetterbulletin für alle vier Inseln hält Sie auf alles vorbereitet, was das Mittelmeer bringt.',
  ourIslands: 'Unsere Inseln',
  acrossBalearics: 'Auf den gesamten Balearen',
  islandsIntro: 'Vier Inseln, vier ganz unterschiedliche Geschichten. Lesen Sie die Nachrichten der Insel, die Ihnen wichtig ist.',
  nStories: '{n} Meldungen',
  latestNews: 'Aktuelle Nachrichten',
  topStories: 'Top-Meldungen',
  balearicIslands: 'Balearen',
  weather: 'Wetter',

  newsletter: 'Newsletter',
  signUp: 'Melden Sie sich für die neuesten Nachrichten an',
  name: 'Name',
  email: 'E-Mail',
  subscribe: 'Abonnieren',

  chooseIsland: 'Insel wählen',
  wxLoading: 'Aktuelles Wetter wird geladen …',
  wxUnavailable: 'Wetterdaten sind derzeit nicht verfügbar.',
  wxWind: 'Wind',
  wx: {
    clear: 'Klar', mainlyClear: 'Überwiegend klar', partlyCloudy: 'Teilweise bewölkt', overcast: 'Bedeckt', fog: 'Nebel',
    drizzle: 'Nieselregen', rain: 'Regen', heavyRain: 'Starkregen', freezingRain: 'Gefrierender Regen', snow: 'Schnee',
    showers: 'Schauer', thunderstorm: 'Gewitter', cloudy: 'Bewölkt',
  },

  readMore: 'Weiterlesen',
  backTo: '← Zurück zu {cat}',
  by: 'Von {author}',
  minRead: '{n} Min. Lesezeit',
  updated: 'Aktualisiert am {date}',
  photo: 'Foto: {credit}',
  source: 'Quelle:',
  basedOn: 'Auf Grundlage von Informationen von',
  share: 'Teilen',
  keepReading: 'Weiterlesen',
  moreCat: 'Mehr aus {cat}',
  translatedNote: 'Dieser Artikel wurde aus dem Englischen übersetzt.',
  readOriginal: 'Original lesen',
  advertisement: 'Anzeige',

  catTitle: '{name} — Balearen',
  catPageTitle: '{name} — Seite {n}',
  catIntro: '{name} von Mallorca, Menorca, Ibiza und Formentera',
  noStories: 'In diesem Bereich gibt es noch keine Meldungen — schauen Sie bald wieder vorbei.',
  readInEnglish: 'Aktuelle Nachrichten auf Englisch lesen',
  islandTitle: 'Nachrichten aus {name}',
  islandBanner: 'Nachrichten aus {name}',
  islandDesc: 'Aktuelle Nachrichten aus {name}: {blurb}',
  latestFrom: 'Neu aus {name}',
  pagination: 'Seitennavigation',

  usefulLinks: 'Nützliche Links',
  aboutUs: 'Über uns',
  editorialPolicy: 'Redaktionelle Grundsätze',
  contactUs: 'Kontakt',
  rssFeed: 'RSS-Feed',
  sendNewsTip: 'Hinweis senden',
  location: 'Palma de Mallorca, Balearen',
  privacyPolicy: 'Datenschutz',
  terms: 'Nutzungsbedingungen',
  weatherDataBy: 'Wetterdaten von',
  licensedUnder: 'Die verwendeten Informationen stehen unter {licence}; dieser Artikel wird unter derselben Lizenz geteilt.',
  poweredBy: 'betrieben von',

  yourName: 'Ihr Name',
  topic: 'Thema',
  topics: ['Nachrichtenhinweis', 'Pressemitteilung', 'Korrektur', 'Werbung', 'Sonstiges'],
  message: 'Nachricht',
  sendMessage: 'Nachricht senden',
};

export const pages: typeof PAGES = {
  about: {
    title: 'Über uns',
    intro: 'Unabhängige Nachrichten von den Balearen.',
    html: `<p><strong>{site}</strong> berichtet über Mallorca, Menorca, Ibiza und Formentera – für Einwohner, Unternehmen und Besucher, die klare und verlässliche Nachrichten wollen.</p>
<h2>Worüber wir berichten</h2>
<p>Wir berichten über die Entscheidungen, Ereignisse und Entwicklungen, die das Leben auf den Inseln prägen: Regional- und Kommunalpolitik, Wirtschaft und Tourismus, Wohnen, Gesundheitsversorgung, Kultur und Feste, Sport, Technologie und Wetter. Wenn etwas für Menschen auf den Inseln oder auf dem Weg dorthin wichtig ist, erklären wir, was passiert ist, warum es wichtig ist und was als Nächstes kommt.</p>
<h2>Wie wir arbeiten</h2>
<p>Wir stützen uns, wo möglich, auf Primärquellen: offizielle Mitteilungen der Balearen-Regierung, der Inselräte und der Gemeinden, öffentliche Statistiken, Gerichte und Notdienste, Vereine, Organisationen und die Beteiligten selbst. Jede Meldung schreiben wir in eigenen Worten und korrigieren Fehler zügig.</p>
<p>Wir setzen Software-Werkzeuge ein, darunter KI-Schreibassistenz, um etwa Routinemeldungen wie Wetterberichte und Zusammenfassungen offizieller Mitteilungen zu entwerfen und unsere Artikel aus dem Englischen in andere Sprachen zu übersetzen. Mehr dazu in unseren <a href="@/editorial-policy/">redaktionellen Grundsätzen</a>.</p>
<h2>Korrekturen</h2>
<p>Wenn wir einen Fehler machen, korrigieren wir ihn und weisen im Artikel darauf hin. Bitte melden Sie ihn uns unter <a href="mailto:{email}">{email}</a>.</p>
<h2>Kontakt</h2>
<p>Wir freuen uns über Hinweise, Pressemitteilungen sowie Anfragen zu Werbung und Partnerschaften. Besuchen Sie die <a href="@/contact-us/">Kontaktseite</a>.</p>`,
  },
  editorial: {
    title: 'Redaktionelle Grundsätze',
    intro: 'Wie Balearic Times Informationen beschafft, schreibt, übersetzt und korrigiert.',
    html: `<h2>Quellen</h2>
<p>Wir stützen unsere Berichte, wo möglich, auf Primärquellen: Mitteilungen und Pressemeldungen öffentlicher Stellen, veröffentlichte Statistiken, Wetterdaten, Erklärungen von Organisationen und Unternehmen sowie unsere eigene Recherche. Wir geben Fakten in eigenen Worten wieder und übernehmen niemals Texte oder Bilder anderer Medien. Beruht eine Meldung auf der Exklusivrecherche eines anderen Mediums, sagen wir das.</p>
<h2>Unser Archiv</h2>
<p>2026 sind wir auf eine neue Website umgezogen und haben unser Archiv überarbeitet. Die Redaktion hat ältere Artikel von Grund auf neu geschrieben: Fakten geprüft, Fehler korrigiert, nicht überprüfbare Zahlen und Zitate entfernt und Bilder Dritter gestrichen. Jeder archivierte Artikel behält sein ursprüngliches Veröffentlichungsdatum und zeigt das Datum der letzten Aktualisierung.</p>
<h2>Übersetzungen</h2>
<p>Unsere Artikel werden auf Englisch geschrieben und ins Spanische, Französische und Deutsche übersetzt, meist mit Hilfe von KI-Übersetzung. Jede Übersetzung verweist auf das englische Original, das bei Abweichungen maßgeblich ist. Wenn Sie in einer Übersetzung einen Fehler entdecken, sagen Sie es uns bitte.</p>
<h2>Automatisierung und KI</h2>
<p>Einige Routinemeldungen, etwa die tägliche Wettervorhersage und Zusammenfassungen offizieller Mitteilungen, entstehen mit Hilfe von Software und KI-Schreibwerkzeugen. Diese Entwürfe werden vor der Veröffentlichung mit der Originalquelle abgeglichen. Automatische Wetterberichte beruhen auf den offenen Vorhersagedaten von Open-Meteo. Beruht ein Beitrag auf Informationen unter einer Creative-Commons-Lizenz (zum Beispiel vom Govern de les Illes Balears, CC BY-SA), weisen wir unter dem Artikel darauf hin und teilen unsere Neufassung unter derselben Lizenz.</p>
<h2>Bilder</h2>
<p>Wir verwenden eigene Fotos, zur Veröffentlichung bereitgestellte Bilder und offen lizenzierte Bilder mit Quellenangabe. Bilder anderer Medien kopieren wir nicht.</p>
<h2>Korrekturen</h2>
<p>Wir korrigieren Fehler zügig und vermerken wesentliche Korrekturen am Ende des Artikels. Fehler melden Sie bitte an <a href="mailto:{email}">{email}</a>.</p>
<h2>Unabhängigkeit</h2>
<p>Werbung und gesponserte Inhalte sind stets klar gekennzeichnet und beeinflussen unsere Berichterstattung nie.</p>`,
  },
  privacy: {
    title: 'Datenschutz',
    intro: 'Wie wir mit Ihren Daten umgehen.',
    html: `<p><em>Zuletzt aktualisiert: 26. Oktober 2026. Diese Übersetzung dient der Information; bei Abweichungen gilt die englische Fassung.</em></p>
<h2>Wer wir sind</h2>
<p>{site} ({url}) ist verantwortlich für die über diese Website erhobenen personenbezogenen Daten. Kontakt: <a href="mailto:{email}">{email}</a>.</p>
<h2>Was wir erheben</h2>
<ul>
<li><strong>Kontaktformular und Newsletter:</strong> Ihr Name, Ihre E-Mail-Adresse und Ihre Nachricht. Wir verwenden sie nur, um Ihnen zu antworten oder den gewünschten Newsletter zu senden. Die Formulare werden in unserem Auftrag von Web3Forms verarbeitet.</li>
<li><strong>Technische Daten:</strong> Unser Hosting-Anbieter Cloudflare verarbeitet IP-Adressen und grundlegende Anfragedaten, um die Website auszuliefern und zu schützen.</li>
<li><strong>Wetter-Widget:</strong> Ihr Browser ruft die Vorhersagedaten direkt bei Open-Meteo ab. Wir senden Ihren Standort nicht.</li>
</ul>
<h2>Cookies</h2>
<p>Diese Website setzt keine Werbe- oder Tracking-Cookies. Sollte sich das ändern, holen wir zuvor Ihre Einwilligung ein.</p>
<h2>Ihre Rechte</h2>
<p>Nach der DSGVO können Sie per E-Mail Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen oder der Verarbeitung widersprechen. Sie können sich außerdem bei der spanischen Datenschutzbehörde (AEPD, aepd.es) beschweren.</p>
<h2>Speicherdauer</h2>
<p>Nachrichten speichern wir nur so lange, wie es zu ihrer Bearbeitung nötig ist, Newsletter-Adressen bis zu Ihrer Abmeldung.</p>`,
  },
  terms: {
    title: 'Nutzungsbedingungen',
    intro: 'Die Regeln für die Nutzung dieser Website.',
    html: `<p><em>Zuletzt aktualisiert: 26. Oktober 2026. Diese Übersetzung dient der Information; bei Abweichungen gilt die englische Fassung.</em></p>
<h2>Nutzung der Inhalte</h2>
<p>Sofern nicht anders angegeben, liegen die Rechte an den Originalartikeln und -grafiken auf {site} bei {site}. Sie dürfen Links und kurze Zitate mit Quellenangabe teilen. Bitte fragen Sie vor dem Nachdruck ganzer Artikel um Erlaubnis. Bilder Dritter bleiben Eigentum ihrer Inhaber und werden mit Quelle genannt.</p>
<h2>Richtigkeit</h2>
<p>Wir bemühen uns um Genauigkeit, die Informationen werden jedoch ohne Gewähr bereitgestellt. Wettervorhersagen sind automatisiert und können sich ändern; befolgen Sie stets die offiziellen Warnungen der spanischen Wetterbehörde (AEMET) und der Notdienste (112).</p>
<h2>Übersetzungen</h2>
<p>Artikel werden auf Englisch geschrieben und überwiegend automatisiert in andere Sprachen übersetzt. Weicht eine Übersetzung vom englischen Original ab, gilt das Original.</p>
<h2>Externe Links</h2>
<p>Wir verlinken auf andere Quellen und Websites und sind für deren Inhalte nicht verantwortlich.</p>
<h2>Kontakt</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Kontakt',
    intro: 'Hinweise, Pressemitteilungen, Korrekturen und Werbung',
    description: 'Kontaktieren Sie Balearic Times für Nachrichtenhinweise, Pressemitteilungen, Korrekturen oder Werbeanfragen.',
    html: `<p>Senden Sie uns einen Hinweis, eine Pressemitteilung oder eine Korrektur über das Formular unten oder per E-Mail an <a href="mailto:{email}">{email}</a>. Wir lesen jede Nachricht – in jeder Sprache.</p>`,
  },
  thanks: {
    title: 'Vielen Dank',
    intro: 'Ihre Nachricht wurde gesendet.',
    html: `<p>Vielen Dank für Ihre Nachricht. Wenn Sie uns geschrieben haben, antworten wir so schnell wie möglich. Wenn Sie sich für den Newsletter angemeldet haben, stehen Sie jetzt auf der Liste.</p>
<p><a class="btn btn-primary no-icon" href="@/">Zurück zur Startseite</a></p>`,
  },
  notFound: {
    title: 'Seite nicht gefunden',
    intro: 'Entschuldigung, diese Seite konnten wir nicht finden.',
    html: `<p>Vielleicht wurde die Meldung verschoben oder entfernt. Versuchen Sie die <a href="@/">Startseite</a> oder einen Bereich im Menü.</p>`,
  },
};
