import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — Noticias de Mallorca, Menorca, Ibiza y Formentera',
  siteDescription:
    'Balearic Times es un medio independiente que cubre Mallorca, Menorca, Ibiza y Formentera: noticias, política, empresas, economía, salud, cultura, deporte, tecnología y el tiempo.',
  defaultTitle: 'Noticias de Mallorca, Menorca, Ibiza y Formentera',
  home: 'Inicio',
  contact: 'Contacto',
  about: 'Quiénes somos',
  sendTip: 'Envía una noticia',
  sendTipLower: 'Envía una noticia',
  language: 'Idioma',
  notTranslated: 'Aún sin traducir',
  toggleNav: 'Abrir menú',
  timezone: 'CET',

  cat: {
    news: ['Noticias', 'Las últimas noticias de Mallorca, Menorca, Ibiza y Formentera.'],
    business: ['Empresas', 'Empresas, turismo, inmobiliario y empleo en las Islas Baleares.'],
    economy: ['Economía', 'Precios, salarios, vivienda y las cifras de la vida en las islas.'],
    health: ['Salud', 'Hospitales, salud pública y bienestar en Baleares.'],
    lifestyle: ['Estilo de vida', 'Gastronomía, viajes, eventos y vida en las islas.'],
    politics: ['Política', 'El Govern, el Parlament, los consells insulars y los ayuntamientos.'],
    culture: ['Cultura', 'Arte, música, fiestas, patrimonio y tradiciones.'],
    sports: ['Deportes', 'RCD Mallorca, baloncesto, vela, atletismo y el deporte de las islas.'],
    tech: ['Tecnología', 'Tecnología, startups y vida digital en Baleares.'],
    weather: ['El tiempo', 'Condiciones en directo, previsiones y avisos meteorológicos para cada isla.'],
  },
  island: {
    mallorca: ['Mallorca', 'Palma, la Serra de Tramuntana y la isla más grande: política, turismo, vivienda y el RCD Mallorca.'],
    menorca: ['Menorca', 'Reserva de la Biosfera de la UNESCO: Maó, Ciutadella, campo, patrimonio y vida isleña.'],
    ibiza: ['Ibiza', 'Eivissa más allá de las discotecas: Santa Eulària, Sant Antoni, vivienda, transporte y la temporada.'],
    formentera: ['Formentera', 'La isla más pequeña: ferris, playas, medio ambiente y el Consell de Formentera.'],
  },

  readMoreCaps: 'LEER MÁS',
  learnMoreCaps: 'SABER MÁS',
  latestHeading: 'Últimas noticias de las Islas Baleares',
  emptyLatest: 'Pronto publicaremos nuevas noticias.',
  viewAllNews: 'Ver todas las noticias',
  homeH1: 'Balearic Times — Noticias de Mallorca, Menorca, Ibiza y Formentera',
  aboutTagline: 'Noticias de las islas, política, economía y el tiempo',
  aboutP1:
    'Balearic Times te trae las historias que marcan la vida en Mallorca, Menorca, Ibiza y Formentera. Desde las decisiones del Govern y los consells insulars hasta la vivienda, el turismo, la sanidad, la cultura y el deporte, explicamos qué ha pasado, por qué importa y qué viene después.',
  aboutSub: 'Independiente y local',
  aboutP2:
    'Nuestra información se basa en anuncios oficiales, datos públicos y las personas implicadas, redactada con nuestras propias palabras y revisada antes de publicarse. Una previsión diaria para las cuatro islas te prepara para lo que traiga el Mediterráneo.',
  ourIslands: 'Nuestras islas',
  acrossBalearics: 'Por todas las Baleares',
  islandsIntro: 'Cuatro islas, cuatro historias muy distintas. Sigue la actualidad de la isla que te importa.',
  nStories: '{n} noticias',
  latestNews: 'Últimas noticias',
  topStories: 'Destacadas',
  balearicIslands: 'Islas Baleares',
  weather: 'El tiempo',

  newsletter: 'Boletín',
  signUp: 'Suscríbete a las novedades',
  name: 'Nombre',
  email: 'Correo electrónico',
  subscribe: 'Suscribirme',

  chooseIsland: 'Elige isla',
  wxLoading: 'Cargando condiciones actuales…',
  wxUnavailable: 'El tiempo no está disponible ahora mismo.',
  wxWind: 'viento',
  wx: {
    clear: 'Despejado', mainlyClear: 'Mayormente despejado', partlyCloudy: 'Parcialmente nublado', overcast: 'Cubierto', fog: 'Niebla',
    drizzle: 'Llovizna', rain: 'Lluvia', heavyRain: 'Lluvia intensa', freezingRain: 'Lluvia helada', snow: 'Nieve',
    showers: 'Chubascos', thunderstorm: 'Tormenta', cloudy: 'Nublado',
  },

  readMore: 'Leer más',
  backTo: '← Volver a {cat}',
  by: 'Por {author}',
  minRead: '{n} min de lectura',
  updated: 'Actualizado el {date}',
  photo: 'Foto: {credit}',
  source: 'Fuente:',
  basedOn: 'basado en información publicada por',
  share: 'Compartir',
  keepReading: 'Sigue leyendo',
  moreCat: 'Más de {cat}',
  translatedNote: 'Este artículo ha sido traducido del inglés.',
  readOriginal: 'Leer el original',
  advertisement: 'Publicidad',

  catTitle: '{name} — Islas Baleares',
  catPageTitle: '{name} — página {n}',
  catIntro: '{name} de Mallorca, Menorca, Ibiza y Formentera',
  noStories: 'Todavía no hay noticias en esta sección. Vuelve pronto.',
  readInEnglish: 'Lee las últimas noticias en inglés',
  islandTitle: 'Noticias de {name}',
  islandBanner: 'Noticias de {name}',
  islandDesc: 'Últimas noticias de {name}: {blurb}',
  latestFrom: 'Lo último de {name}',
  pagination: 'Paginación',

  usefulLinks: 'Enlaces útiles',
  aboutUs: 'Quiénes somos',
  editorialPolicy: 'Política editorial',
  contactUs: 'Contacto',
  rssFeed: 'Feed RSS',
  sendNewsTip: 'Envíanos una noticia',
  location: 'Palma de Mallorca, Illes Balears',
  privacyPolicy: 'Política de privacidad',
  terms: 'Términos y condiciones',
  weatherDataBy: 'Datos meteorológicos de',

  yourName: 'Tu nombre',
  topic: 'Asunto',
  topics: ['Noticia', 'Nota de prensa', 'Corrección', 'Publicidad', 'Otro'],
  message: 'Mensaje',
  sendMessage: 'Enviar mensaje',
};

export const pages: typeof PAGES = {
  about: {
    title: 'Quiénes somos',
    intro: 'Información independiente desde las Islas Baleares.',
    html: `<p><strong>{site}</strong> cubre Mallorca, Menorca, Ibiza y Formentera para residentes, empresas y visitantes que quieren noticias claras y fiables.</p>
<h2>Qué cubrimos</h2>
<p>Informamos sobre las decisiones, los acontecimientos y las tendencias que marcan la vida en las islas: política autonómica y local, economía y turismo, vivienda, sanidad, cultura y fiestas, deporte, tecnología y el tiempo. Cuando algo importa a quienes viven en las islas o viajan a ellas, queremos explicar qué ha pasado, por qué importa y qué ocurrirá después.</p>
<h2>Cómo trabajamos</h2>
<p>Siempre que es posible, nuestras noticias parten de fuentes primarias: anuncios oficiales del Govern de les Illes Balears, los consells insulars y los ayuntamientos, estadísticas públicas, tribunales y servicios de emergencia, clubes, organizaciones y las personas implicadas. Escribimos cada noticia con nuestras propias palabras y corregimos los errores con rapidez.</p>
<p>Usamos herramientas informáticas, incluida la inteligencia artificial, para ayudar a redactar algunas noticias rutinarias, como el parte meteorológico o resúmenes de anuncios oficiales, y para traducir nuestros artículos del inglés a otros idiomas. Puedes leer más en nuestra <a href="@/editorial-policy/">política editorial</a>.</p>
<h2>Correcciones</h2>
<p>Si nos equivocamos, lo corregimos y lo indicamos en el artículo. Escríbenos a <a href="mailto:{email}">{email}</a>.</p>
<h2>Contacto</h2>
<p>Recibimos con gusto noticias, notas de prensa y propuestas de publicidad o colaboración. Visita nuestra <a href="@/contact-us/">página de contacto</a>.</p>`,
  },
  editorial: {
    title: 'Política editorial',
    intro: 'Cómo Balearic Times busca, redacta, traduce y corrige sus noticias.',
    html: `<h2>Fuentes</h2>
<p>Siempre que es posible, elaboramos las noticias a partir de fuentes primarias: anuncios y notas de prensa de organismos públicos, estadísticas publicadas, datos meteorológicos, declaraciones de organizaciones y empresas, y nuestro propio trabajo periodístico. Contamos los hechos con nuestras propias palabras y nunca copiamos textos ni fotografías de otros medios. Cuando una noticia depende de una exclusiva de otro medio, lo decimos.</p>
<h2>Nuestro archivo</h2>
<p>En 2026 estrenamos una nueva web y revisamos nuestro archivo. Los artículos antiguos se reescribieron desde cero: se comprobaron los datos, se corrigieron errores, se eliminaron cifras y citas que no se podían verificar y se retiraron las imágenes de terceros. Cada artículo conserva su fecha original de publicación e indica cuándo se actualizó por última vez.</p>
<h2>Traducciones</h2>
<p>Nuestros artículos se escriben en inglés y se traducen al español, francés y alemán, principalmente con ayuda de traducción automática. Cada traducción enlaza con el original en inglés, que es la versión de referencia en caso de diferencias. Si detectas un error de traducción, avísanos.</p>
<h2>Automatización e inteligencia artificial</h2>
<p>Algunas noticias rutinarias, como el parte meteorológico diario y los resúmenes de anuncios oficiales, se redactan con ayuda de software y herramientas de inteligencia artificial. Un editor revisa esos borradores con la fuente original antes de publicarlos. Los partes meteorológicos automáticos se generan con datos abiertos de Open-Meteo.</p>
<h2>Imágenes</h2>
<p>Usamos fotografías propias, imágenes cedidas para su publicación por las organizaciones implicadas e imágenes con licencia abierta, siempre con su crédito. No copiamos fotografías de otros medios.</p>
<h2>Correcciones</h2>
<p>Corregimos los errores con rapidez y señalamos las correcciones importantes al final del artículo. Comunica un error a <a href="mailto:{email}">{email}</a>.</p>
<h2>Independencia</h2>
<p>La publicidad y el contenido patrocinado siempre se identifican y nunca influyen en nuestra cobertura informativa.</p>`,
  },
  privacy: {
    title: 'Política de privacidad',
    intro: 'Cómo tratamos tus datos.',
    html: `<p><em>Última actualización: 26 de octubre de 2026. Traducción ofrecida para tu comodidad; en caso de discrepancia prevalece la versión en inglés.</em></p>
<h2>Quiénes somos</h2>
<p>{site} ({url}) es el responsable de los datos personales recogidos a través de esta web. Contacto: <a href="mailto:{email}">{email}</a>.</p>
<h2>Qué datos recogemos</h2>
<ul>
<li><strong>Formulario de contacto y boletín:</strong> tu nombre, correo electrónico y mensaje, que usamos solo para responderte o enviarte el boletín que has pedido. Web3Forms procesa los formularios en nuestro nombre.</li>
<li><strong>Datos técnicos:</strong> nuestro proveedor de alojamiento, Cloudflare, trata direcciones IP y datos básicos de las peticiones para servir y proteger la web.</li>
<li><strong>Widget del tiempo:</strong> tu navegador solicita la previsión directamente a Open-Meteo. No enviamos tu ubicación.</li>
</ul>
<h2>Cookies</h2>
<p>Esta web no instala cookies publicitarias ni de seguimiento. Si eso cambia, te pediremos antes tu consentimiento.</p>
<h2>Tus derechos</h2>
<p>De acuerdo con el RGPD, puedes pedirnos por correo electrónico el acceso, la rectificación o la supresión de tus datos, u oponerte a su uso. También puedes reclamar ante la Agencia Española de Protección de Datos (AEPD, aepd.es).</p>
<h2>Conservación</h2>
<p>Conservamos los mensajes solo el tiempo necesario para atenderlos, y las direcciones del boletín hasta que te des de baja.</p>`,
  },
  terms: {
    title: 'Términos y condiciones',
    intro: 'Las normas de uso de esta web.',
    html: `<p><em>Última actualización: 26 de octubre de 2026. Traducción ofrecida para tu comodidad; en caso de discrepancia prevalece la versión en inglés.</em></p>
<h2>Uso de los contenidos</h2>
<p>Salvo que se indique lo contrario, los artículos y gráficos originales de {site} son © {site}. Puedes compartir enlaces y citas breves mencionando la fuente. Pide permiso antes de reproducir artículos completos. Las imágenes de terceros pertenecen a sus propietarios y se acreditan.</p>
<h2>Exactitud</h2>
<p>Trabajamos para ser rigurosos, pero la información se ofrece tal cual. Las previsiones meteorológicas son automáticas y pueden cambiar; sigue siempre los avisos oficiales de AEMET y de los servicios de emergencia (112).</p>
<h2>Traducciones</h2>
<p>Los artículos se escriben en inglés y se traducen a otros idiomas, en gran parte de forma automática. Si una traducción difiere del original en inglés, prevalece la versión inglesa.</p>
<h2>Enlaces externos</h2>
<p>Enlazamos a fuentes y otras webs. No somos responsables de su contenido.</p>
<h2>Contacto</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Contacto',
    intro: 'Noticias, notas de prensa, correcciones y publicidad',
    description: 'Contacta con Balearic Times para enviar noticias, notas de prensa, correcciones o consultas de publicidad.',
    html: `<p>Envíanos una noticia, una nota de prensa o una corrección con el formulario de abajo, o escribe a <a href="mailto:{email}">{email}</a>. Leemos todos los mensajes, en cualquier idioma.</p>`,
  },
  thanks: {
    title: 'Gracias',
    intro: 'Tu mensaje se ha enviado.',
    html: `<p>Gracias por escribirnos. Si nos has enviado un mensaje, te responderemos lo antes posible. Si te has suscrito al boletín, ya estás en la lista.</p>
<p><a class="btn btn-primary no-icon" href="@/">Volver a la portada</a></p>`,
  },
  notFound: {
    title: 'Página no encontrada',
    intro: 'Lo sentimos, no hemos encontrado esa página.',
    html: `<p>Es posible que la noticia se haya movido o eliminado. Prueba en la <a href="@/">portada</a> o en una de las secciones del menú.</p>`,
  },
};
