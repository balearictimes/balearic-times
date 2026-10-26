import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — Actualités de Majorque, Minorque, Ibiza et Formentera',
  siteDescription:
    "Balearic Times est un site d'information indépendant consacré à Majorque, Minorque, Ibiza et Formentera : actualité, politique, entreprises, économie, santé, culture, sport, technologie et météo.",
  defaultTitle: 'Actualités de Majorque, Minorque, Ibiza et Formentera',
  home: 'Accueil',
  contact: 'Contact',
  about: 'À propos',
  sendTip: 'Envoyer une info',
  sendTipLower: 'Envoyer une info',
  language: 'Langue',
  notTranslated: 'Pas encore traduit',
  toggleNav: 'Ouvrir le menu',
  timezone: 'CET',

  cat: {
    news: ['Actualité', 'Les dernières nouvelles de Majorque, Minorque, Ibiza et Formentera.'],
    business: ['Entreprises', 'Entreprises, tourisme, immobilier et emploi aux îles Baléares.'],
    economy: ['Économie', 'Prix, salaires, logement et les chiffres de la vie insulaire.'],
    health: ['Santé', 'Hôpitaux, santé publique et bien-être aux Baléares.'],
    lifestyle: ['Art de vivre', 'Gastronomie, voyages, événements et vie sur les îles.'],
    politics: ['Politique', 'Le Govern, le Parlament, les conseils insulaires et les mairies.'],
    culture: ['Culture', 'Art, musique, fêtes, patrimoine et traditions.'],
    sports: ['Sport', 'RCD Majorque, basket, voile, course à pied et sport insulaire.'],
    tech: ['Tech', 'Technologie, start-up et vie numérique aux Baléares.'],
    weather: ['Météo', 'Conditions en direct, prévisions et alertes météo pour chaque île.'],
  },
  island: {
    mallorca: ['Majorque', "Palma, la Serra de Tramuntana et la plus grande île : politique, tourisme, logement et le RCD Majorque."],
    menorca: ['Minorque', "Réserve de biosphère de l'UNESCO : Maó, Ciutadella, agriculture, patrimoine et vie insulaire."],
    ibiza: ['Ibiza', 'Ibiza au-delà des boîtes de nuit : Santa Eulària, Sant Antoni, logement, transports et la saison.'],
    formentera: ['Formentera', "La plus petite île : ferries, plages, environnement et le Conseil de Formentera."],
  },

  readMoreCaps: 'LIRE LA SUITE',
  learnMoreCaps: 'EN SAVOIR PLUS',
  latestHeading: 'Dernières nouvelles des îles Baléares',
  emptyLatest: 'De nouveaux articles arrivent bientôt.',
  viewAllNews: "Toute l'actualité",
  homeH1: 'Balearic Times — Actualités de Majorque, Minorque, Ibiza et Formentera',
  aboutTagline: 'Actualité des îles, politique, économie et météo',
  aboutP1:
    "Balearic Times vous apporte les histoires qui façonnent la vie à Majorque, Minorque, Ibiza et Formentera. Des décisions du Govern et des conseils insulaires au logement, au tourisme, à la santé, à la culture et au sport, nous expliquons ce qui s'est passé, pourquoi c'est important et ce qui va suivre.",
  aboutSub: 'Indépendant et local',
  aboutP2:
    "Nos articles s'appuient sur les annonces officielles, les données publiques et les personnes concernées, rédigés avec nos propres mots et vérifiés avant publication. Une prévision quotidienne pour les quatre îles vous prépare à tout ce que la Méditerranée vous réserve.",
  ourIslands: 'Nos îles',
  acrossBalearics: 'Dans toutes les Baléares',
  islandsIntro: "Quatre îles, quatre histoires très différentes. Suivez l'actualité de l'île qui vous intéresse.",
  nStories: '{n} articles',
  latestNews: 'Dernières nouvelles',
  topStories: 'À la une',
  balearicIslands: 'Îles Baléares',
  weather: 'Météo',

  newsletter: 'Newsletter',
  signUp: "Inscrivez-vous pour recevoir l'actualité",
  name: 'Nom',
  email: 'E-mail',
  subscribe: "S'inscrire",

  chooseIsland: 'Choisir une île',
  wxLoading: 'Chargement des conditions actuelles…',
  wxUnavailable: 'La météo est indisponible pour le moment.',
  wxWind: 'vent',
  wx: {
    clear: 'Dégagé', mainlyClear: 'Plutôt dégagé', partlyCloudy: 'Partiellement nuageux', overcast: 'Couvert', fog: 'Brouillard',
    drizzle: 'Bruine', rain: 'Pluie', heavyRain: 'Forte pluie', freezingRain: 'Pluie verglaçante', snow: 'Neige',
    showers: 'Averses', thunderstorm: 'Orage', cloudy: 'Nuageux',
  },

  readMore: 'Lire la suite',
  backTo: '← Retour à {cat}',
  by: 'Par {author}',
  minRead: '{n} min de lecture',
  updated: 'Mis à jour le {date}',
  photo: 'Photo : {credit}',
  source: 'Source :',
  basedOn: "d'après des informations publiées par",
  share: 'Partager',
  keepReading: 'À lire aussi',
  moreCat: 'Plus : {cat}',
  translatedNote: "Cet article a été traduit de l'anglais.",
  readOriginal: "Lire l'original",
  advertisement: 'Publicité',

  catTitle: '{name} — Îles Baléares',
  catPageTitle: '{name} — page {n}',
  catIntro: '{name} : Majorque, Minorque, Ibiza et Formentera',
  noStories: 'Pas encore d’articles dans cette rubrique. Revenez bientôt.',
  readInEnglish: 'Lire les derniers articles en anglais',
  islandTitle: 'Actualités de {name}',
  islandBanner: 'Actualités : {name}',
  islandDesc: 'Dernières nouvelles de {name} : {blurb}',
  latestFrom: 'Le plus récent : {name}',
  pagination: 'Pagination',

  usefulLinks: 'Liens utiles',
  aboutUs: 'À propos',
  editorialPolicy: 'Charte éditoriale',
  contactUs: 'Nous contacter',
  rssFeed: 'Flux RSS',
  sendNewsTip: 'Envoyez-nous une info',
  location: 'Palma de Majorque, îles Baléares',
  privacyPolicy: 'Politique de confidentialité',
  terms: 'Conditions générales',
  weatherDataBy: 'Données météo :',

  yourName: 'Votre nom',
  topic: 'Sujet',
  topics: ['Info', 'Communiqué de presse', 'Correction', 'Publicité', 'Autre'],
  message: 'Message',
  sendMessage: 'Envoyer le message',
};

export const pages: typeof PAGES = {
  about: {
    title: 'À propos',
    intro: 'Une information indépendante depuis les îles Baléares.',
    html: `<p><strong>{site}</strong> couvre Majorque, Minorque, Ibiza et Formentera pour les résidents, les entreprises et les visiteurs qui veulent une information claire et fiable.</p>
<h2>Ce que nous couvrons</h2>
<p>Nous traitons des décisions, des événements et des tendances qui façonnent la vie sur les îles : politique régionale et locale, économie et tourisme, logement, santé, culture et fêtes, sport, technologie et météo. Quand un sujet compte pour ceux qui vivent sur les îles ou s'y rendent, nous voulons expliquer ce qui s'est passé, pourquoi c'est important et ce qui va suivre.</p>
<h2>Notre méthode</h2>
<p>Nos articles s'appuient autant que possible sur des sources primaires : annonces officielles du Govern de les Illes Balears, des conseils insulaires et des mairies, statistiques publiques, tribunaux et services d'urgence, clubs, organisations et personnes concernées. Nous rédigeons chaque article avec nos propres mots et corrigeons rapidement nos erreurs.</p>
<p>Nous utilisons des outils logiciels, dont l'aide à la rédaction par intelligence artificielle, pour préparer certains articles courants, comme la météo ou des résumés d'annonces officielles, et pour traduire nos articles de l'anglais vers d'autres langues. Pour en savoir plus, consultez notre <a href="@/editorial-policy/">charte éditoriale</a>.</p>
<h2>Corrections</h2>
<p>Si nous nous trompons, nous corrigeons l'erreur et le signalons dans l'article. Écrivez-nous à <a href="mailto:{email}">{email}</a>.</p>
<h2>Nous contacter</h2>
<p>Informations, communiqués de presse, publicité et propositions de partenariat sont les bienvenus. Rendez-vous sur notre <a href="@/contact-us/">page de contact</a>.</p>`,
  },
  editorial: {
    title: 'Charte éditoriale',
    intro: 'Comment Balearic Times recherche, rédige, traduit et corrige ses articles.',
    html: `<h2>Sources</h2>
<p>Nous construisons nos articles autant que possible à partir de sources primaires : annonces et communiqués d'organismes publics, statistiques publiées, données météorologiques, déclarations d'organisations et d'entreprises, et notre propre travail de terrain. Nous rapportons les faits avec nos propres mots et ne copions jamais de textes ni de photos d'autres médias. Lorsqu'un article repose sur l'exclusivité d'un autre média, nous le précisons.</p>
<h2>Nos archives</h2>
<p>En 2026, nous avons lancé un nouveau site et revu nos archives. Les anciens articles ont été entièrement réécrits : les faits ont été vérifiés, les erreurs corrigées, les chiffres et citations invérifiables supprimés et les images de tiers retirées. Chaque article archivé conserve sa date de publication d'origine et indique sa date de dernière mise à jour.</p>
<h2>Traductions</h2>
<p>Nos articles sont rédigés en anglais puis traduits en espagnol, français et allemand, principalement à l'aide de la traduction automatique. Chaque traduction renvoie à l'original anglais, qui fait référence en cas de différence. Si vous repérez une erreur de traduction, signalez-la-nous.</p>
<h2>Automatisation et intelligence artificielle</h2>
<p>Certains articles courants, comme la météo quotidienne et les résumés d'annonces officielles, sont préparés avec l'aide de logiciels et d'outils d'intelligence artificielle. Un rédacteur vérifie ces brouillons par rapport à la source avant publication. Les bulletins météo automatiques sont produits à partir des données ouvertes d'Open-Meteo.</p>
<h2>Images</h2>
<p>Nous utilisons nos propres photos, des images fournies pour publication par les organisations concernées et des images sous licence libre, toujours créditées. Nous ne copions pas de photos d'autres médias.</p>
<h2>Corrections</h2>
<p>Nous corrigeons rapidement les erreurs et signalons les corrections importantes en fin d'article. Signalez une erreur à <a href="mailto:{email}">{email}</a>.</p>
<h2>Indépendance</h2>
<p>La publicité et les contenus sponsorisés sont toujours signalés et n'influencent jamais notre couverture de l'actualité.</p>`,
  },
  privacy: {
    title: 'Politique de confidentialité',
    intro: 'Comment nous traitons vos données.',
    html: `<p><em>Dernière mise à jour : 26 octobre 2026. Traduction fournie à titre indicatif ; en cas de divergence, la version anglaise prévaut.</em></p>
<h2>Qui sommes-nous</h2>
<p>{site} ({url}) est responsable du traitement des données personnelles collectées via ce site. Contact : <a href="mailto:{email}">{email}</a>.</p>
<h2>Données collectées</h2>
<ul>
<li><strong>Formulaire de contact et newsletter :</strong> votre nom, votre adresse e-mail et votre message, utilisés uniquement pour vous répondre ou vous envoyer la newsletter demandée. Les formulaires sont traités pour notre compte par Web3Forms.</li>
<li><strong>Données techniques :</strong> notre hébergeur, Cloudflare, traite les adresses IP et des données de connexion de base pour diffuser et protéger le site.</li>
<li><strong>Widget météo :</strong> votre navigateur demande les prévisions directement à Open-Meteo. Nous n'envoyons pas votre position.</li>
</ul>
<h2>Cookies</h2>
<p>Ce site ne dépose pas de cookies publicitaires ni de traçage. Si cela change, nous vous demanderons d'abord votre consentement.</p>
<h2>Vos droits</h2>
<p>Conformément au RGPD, vous pouvez demander par e-mail l'accès, la rectification ou l'effacement de vos données, ou vous opposer à leur utilisation. Vous pouvez aussi saisir l'autorité espagnole de protection des données (AEPD, aepd.es).</p>
<h2>Conservation</h2>
<p>Nous conservons les messages uniquement le temps nécessaire pour y répondre, et les adresses de la newsletter jusqu'à votre désinscription.</p>`,
  },
  terms: {
    title: 'Conditions générales',
    intro: "Les règles d'utilisation de ce site.",
    html: `<p><em>Dernière mise à jour : 26 octobre 2026. Traduction fournie à titre indicatif ; en cas de divergence, la version anglaise prévaut.</em></p>
<h2>Utilisation des contenus</h2>
<p>Sauf mention contraire, les articles et graphiques originaux de {site} sont © {site}. Vous pouvez partager des liens et de courtes citations en mentionnant la source. Demandez-nous l'autorisation avant de republier un article complet. Les images de tiers restent la propriété de leurs auteurs et sont créditées.</p>
<h2>Exactitude</h2>
<p>Nous faisons tout pour être exacts, mais les informations sont fournies en l'état. Les prévisions météo sont automatiques et peuvent changer ; suivez toujours les alertes officielles de l'AEMET et des services d'urgence (112).</p>
<h2>Traductions</h2>
<p>Les articles sont rédigés en anglais puis traduits dans d'autres langues, en grande partie de manière automatique. En cas de différence avec l'original anglais, la version anglaise s'applique.</p>
<h2>Liens externes</h2>
<p>Nous renvoyons vers des sources et d'autres sites. Nous ne sommes pas responsables de leur contenu.</p>
<h2>Contact</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Nous contacter',
    intro: 'Infos, communiqués, corrections et publicité',
    description: 'Contactez Balearic Times pour une info, un communiqué de presse, une correction ou une demande publicitaire.',
    html: `<p>Envoyez-nous une info, un communiqué de presse ou une correction avec le formulaire ci-dessous, ou écrivez à <a href="mailto:{email}">{email}</a>. Nous lisons tous les messages, dans toutes les langues.</p>`,
  },
  thanks: {
    title: 'Merci',
    intro: 'Votre message a bien été envoyé.',
    html: `<p>Merci de nous avoir écrit. Si vous nous avez envoyé un message, nous vous répondrons dès que possible. Si vous vous êtes inscrit à la newsletter, c'est fait.</p>
<p><a class="btn btn-primary no-icon" href="@/">Retour à l'accueil</a></p>`,
  },
  notFound: {
    title: 'Page introuvable',
    intro: "Désolé, nous n'avons pas trouvé cette page.",
    html: `<p>L'article a peut-être été déplacé ou supprimé. Essayez la <a href="@/">page d'accueil</a> ou l'une des rubriques du menu.</p>`,
  },
};
