import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — Notícias de Maiorca, Menorca, Ibiza e Formentera',
  siteDescription:
    'O Balearic Times é um site de notícias independente sobre Maiorca, Menorca, Ibiza e Formentera: atualidade, política, empresas, economia, saúde, cultura, desporto, tecnologia e meteorologia.',
  defaultTitle: 'Notícias de Maiorca, Menorca, Ibiza e Formentera',
  home: 'Início',
  contact: 'Contacto',
  about: 'Sobre nós',
  sendTip: 'Enviar notícia',
  sendTipLower: 'Enviar notícia',
  language: 'Idioma',
  toggleNav: 'Abrir menu',
  timezone: 'CET',

  cat: {
    news: ['Notícias', 'As últimas notícias de Maiorca, Menorca, Ibiza e Formentera.'],
    business: ['Empresas', 'Empresas, turismo, imobiliário e emprego nas Ilhas Baleares.'],
    economy: ['Economia', 'Preços, salários, habitação e os números da vida nas ilhas.'],
    health: ['Saúde', 'Hospitais, saúde pública e bem-estar nas Baleares.'],
    lifestyle: ['Estilo de vida', 'Gastronomia, viagens, eventos e a vida nas ilhas.'],
    politics: ['Política', 'O Govern, o Parlament, os conselhos insulares e as câmaras municipais.'],
    culture: ['Cultura', 'Arte, música, festas, património e tradições.'],
    sports: ['Desporto', 'RCD Mallorca, basquetebol, vela, corrida e o desporto das ilhas.'],
    tech: ['Tecnologia', 'Tecnologia, startups e vida digital nas Baleares.'],
    weather: ['Meteorologia', 'Condições em direto, previsões e avisos meteorológicos para cada ilha.'],
  },
  island: {
    mallorca: ['Maiorca', 'Palma, a Serra de Tramuntana e a maior ilha: política, turismo, habitação e o RCD Mallorca.'],
    menorca: ['Menorca', 'Reserva da Biosfera da UNESCO: Maó, Ciutadella, agricultura, património e vida insular.'],
    ibiza: ['Ibiza', 'Ibiza para além das discotecas: Santa Eulària, Sant Antoni, habitação, transportes e a temporada.'],
    formentera: ['Formentera', 'A ilha mais pequena: ferries, praias, ambiente e o Consell de Formentera.'],
  },

  readMoreCaps: 'LER MAIS',
  learnMoreCaps: 'SAIBA MAIS',
  latestHeading: 'Últimas notícias das Ilhas Baleares',
  emptyLatest: 'Novas notícias a caminho.',
  viewAllNews: 'Ver todas as notícias',
  homeH1: 'Balearic Times — Notícias de Maiorca, Menorca, Ibiza e Formentera',
  aboutTagline: 'Notícias das ilhas, política, economia e meteorologia',
  aboutP1:
    'O Balearic Times traz-lhe as histórias que marcam a vida em Maiorca, Menorca, Ibiza e Formentera. Das decisões do Govern e dos conselhos insulares à habitação, ao turismo, à saúde, à cultura e ao desporto, explicamos o que aconteceu, porque é importante e o que vem a seguir.',
  aboutSub: 'Independente e local',
  aboutP2:
    'O nosso trabalho baseia-se em anúncios oficiais, dados públicos e nas pessoas envolvidas, escrito com as nossas próprias palavras e verificado antes de ser publicado. Uma previsão diária para as quatro ilhas prepara-o para o que o Mediterrâneo trouxer.',
  ourIslands: 'As nossas ilhas',
  acrossBalearics: 'Por todas as Baleares',
  islandsIntro: 'Quatro ilhas, quatro histórias muito diferentes. Acompanhe as notícias da ilha que lhe interessa.',
  nStories: '{n} notícias',
  latestNews: 'Últimas notícias',
  topStories: 'Destaques',
  balearicIslands: 'Ilhas Baleares',
  weather: 'Meteorologia',

  newsletter: 'Newsletter',
  signUp: 'Subscreva as novidades',
  name: 'Nome',
  email: 'E-mail',
  subscribe: 'Subscrever',

  chooseIsland: 'Escolha a ilha',
  wxLoading: 'A carregar as condições atuais…',
  wxUnavailable: 'A meteorologia não está disponível neste momento.',
  wxWind: 'vento',
  wx: {
    clear: 'Céu limpo', mainlyClear: 'Pouco nublado', partlyCloudy: 'Parcialmente nublado', overcast: 'Encoberto', fog: 'Nevoeiro',
    drizzle: 'Chuvisco', rain: 'Chuva', heavyRain: 'Chuva forte', freezingRain: 'Chuva gelada', snow: 'Neve',
    showers: 'Aguaceiros', thunderstorm: 'Trovoada', cloudy: 'Nublado',
  },

  readMore: 'Ler mais',
  backTo: '← Voltar a {cat}',
  by: 'Por {author}',
  minRead: '{n} min de leitura',
  updated: 'Atualizado a {date}',
  photo: 'Foto: {credit}',
  source: 'Fonte:',
  basedOn: 'com base em informação publicada por',
  share: 'Partilhar',
  keepReading: 'Continue a ler',
  moreCat: 'Mais em {cat}',
  translatedNote: 'Este artigo foi traduzido do inglês.',
  readOriginal: 'Ler o original',
  advertisement: 'Publicidade',

  catTitle: '{name} — Ilhas Baleares',
  catPageTitle: '{name} — página {n}',
  catIntro: '{name} de Maiorca, Menorca, Ibiza e Formentera',
  noStories: 'Ainda não há notícias nesta secção. Volte em breve.',
  readInEnglish: 'Leia as últimas notícias em inglês',
  islandTitle: 'Notícias de {name}',
  islandBanner: 'Notícias de {name}',
  islandDesc: 'Últimas notícias de {name}: {blurb}',
  latestFrom: 'O mais recente de {name}',
  pagination: 'Paginação',

  usefulLinks: 'Ligações úteis',
  aboutUs: 'Sobre nós',
  editorialPolicy: 'Política editorial',
  contactUs: 'Contacte-nos',
  rssFeed: 'Feed RSS',
  sendNewsTip: 'Envie-nos uma notícia',
  location: 'Palma de Maiorca, Ilhas Baleares',
  privacyPolicy: 'Política de privacidade',
  terms: 'Termos e condições',
  weatherDataBy: 'Dados meteorológicos de',

  yourName: 'O seu nome',
  topic: 'Assunto',
  topics: ['Notícia', 'Comunicado de imprensa', 'Correção', 'Publicidade', 'Outro'],
  message: 'Mensagem',
  sendMessage: 'Enviar mensagem',
};

export const pages: typeof PAGES = {
  about: {
    title: 'Sobre nós',
    intro: 'Informação independente das Ilhas Baleares.',
    html: `<p>O <strong>{site}</strong> cobre Maiorca, Menorca, Ibiza e Formentera para residentes, empresas e visitantes que procuram notícias claras e fiáveis.</p>
<h2>O que cobrimos</h2>
<p>Noticiamos as decisões, os acontecimentos e as tendências que marcam a vida nas ilhas: política regional e local, economia e turismo, habitação, saúde, cultura e festas, desporto, tecnologia e meteorologia. Quando algo importa a quem vive nas ilhas ou as visita, queremos explicar o que aconteceu, porque é importante e o que acontece a seguir.</p>
<h2>Como trabalhamos</h2>
<p>Sempre que possível, as nossas notícias partem de fontes primárias: anúncios oficiais do Govern de les Illes Balears, dos conselhos insulares e das câmaras municipais, estatísticas públicas, tribunais e serviços de emergência, clubes, organizações e as pessoas envolvidas. Escrevemos cada notícia com as nossas próprias palavras e corrigimos rapidamente os erros.</p>
<p>Utilizamos ferramentas informáticas, incluindo inteligência artificial, para ajudar a redigir algumas notícias de rotina, como a previsão do tempo e resumos de anúncios oficiais, e para traduzir os nossos artigos do inglês para outras línguas. Saiba mais na nossa <a href="@/editorial-policy/">política editorial</a>.</p>
<h2>Correções</h2>
<p>Se errarmos, corrigimos e assinalamos a correção no artigo. Escreva-nos para <a href="mailto:{email}">{email}</a>.</p>
<h2>Contacte-nos</h2>
<p>Notícias, comunicados de imprensa, publicidade e propostas de parceria são bem-vindos. Visite a nossa <a href="@/contact-us/">página de contacto</a>.</p>`,
  },
  editorial: {
    title: 'Política editorial',
    intro: 'Como o Balearic Times recolhe, escreve, traduz e corrige as suas notícias.',
    html: `<h2>Fontes</h2>
<p>Sempre que possível, construímos as notícias a partir de fontes primárias: anúncios e comunicados de organismos públicos, estatísticas publicadas, dados meteorológicos, declarações de organizações e empresas, e o nosso próprio trabalho jornalístico. Relatamos os factos com as nossas palavras e nunca copiamos textos ou fotografias de outros meios. Quando uma notícia depende de uma exclusiva de outro meio, dizemo-lo.</p>
<h2>O nosso arquivo</h2>
<p>Em 2026 lançámos um novo site e revimos o nosso arquivo. Os artigos antigos foram reescritos de raiz: os factos foram verificados, os erros corrigidos, os números e citações impossíveis de verificar foram retirados, bem como as imagens de terceiros. Cada artigo do arquivo mantém a data original de publicação e indica quando foi atualizado pela última vez.</p>
<h2>Traduções</h2>
<p>Os nossos artigos são escritos em inglês e traduzidos para chinês, hindi, espanhol, árabe, francês, bengali, português, indonésio e urdu, sobretudo com a ajuda de tradução automática. Cada tradução tem uma ligação para o original em inglês, que é a versão de referência em caso de diferença. Se encontrar um erro de tradução, diga-nos.</p>
<h2>Automatização e inteligência artificial</h2>
<p>Algumas notícias de rotina, como a previsão diária do tempo e os resumos de anúncios oficiais, são redigidas com a ajuda de software e ferramentas de inteligência artificial. Um editor verifica esses rascunhos com a fonte original antes da publicação. As previsões automáticas são geradas a partir de dados abertos da Open-Meteo.</p>
<h2>Imagens</h2>
<p>Usamos fotografias próprias, imagens cedidas para publicação pelas organizações envolvidas e imagens de licença aberta, sempre com crédito. Não copiamos fotografias de outros meios.</p>
<h2>Correções</h2>
<p>Corrigimos os erros rapidamente e assinalamos as correções importantes no fim do artigo. Comunique um erro para <a href="mailto:{email}">{email}</a>.</p>
<h2>Independência</h2>
<p>A publicidade e os conteúdos patrocinados estão sempre identificados e nunca influenciam a nossa cobertura noticiosa.</p>`,
  },
  privacy: {
    title: 'Política de privacidade',
    intro: 'Como tratamos as suas informações.',
    html: `<p><em>Última atualização: 26 de outubro de 2026. Tradução disponibilizada por conveniência; em caso de divergência prevalece a versão em inglês.</em></p>
<h2>Quem somos</h2>
<p>O {site} ({url}) é o responsável pelo tratamento dos dados pessoais recolhidos através deste site. Contacto: <a href="mailto:{email}">{email}</a>.</p>
<h2>O que recolhemos</h2>
<ul>
<li><strong>Formulário de contacto e newsletter:</strong> o seu nome, e-mail e mensagem, usados apenas para lhe responder ou enviar a newsletter que pediu. Os formulários são processados em nosso nome pela Web3Forms.</li>
<li><strong>Dados técnicos:</strong> o nosso alojamento, a Cloudflare, trata endereços IP e dados básicos dos pedidos para disponibilizar e proteger o site.</li>
<li><strong>Widget meteorológico:</strong> o seu navegador pede a previsão diretamente à Open-Meteo. Não enviamos a sua localização.</li>
</ul>
<h2>Cookies</h2>
<p>Este site não instala cookies de publicidade nem de rastreamento. Se isso mudar, pediremos primeiro o seu consentimento.</p>
<h2>Os seus direitos</h2>
<p>Ao abrigo do RGPD, pode pedir-nos por e-mail o acesso, a retificação ou o apagamento dos seus dados, ou opor-se à sua utilização. Pode também apresentar queixa à autoridade espanhola de proteção de dados (AEPD, aepd.es).</p>
<h2>Conservação</h2>
<p>Guardamos as mensagens apenas o tempo necessário para lhes dar resposta, e os endereços da newsletter até cancelar a subscrição.</p>`,
  },
  terms: {
    title: 'Termos e condições',
    intro: 'As regras de utilização deste site.',
    html: `<p><em>Última atualização: 26 de outubro de 2026. Tradução disponibilizada por conveniência; em caso de divergência prevalece a versão em inglês.</em></p>
<h2>Utilização dos conteúdos</h2>
<p>Salvo indicação em contrário, os artigos e gráficos originais do {site} são © {site}. Pode partilhar ligações e citações curtas indicando a fonte. Peça autorização antes de republicar artigos completos. As imagens de terceiros pertencem aos respetivos autores e são creditadas.</p>
<h2>Exatidão</h2>
<p>Esforçamo-nos por ser rigorosos, mas a informação é fornecida tal como está. As previsões meteorológicas são automáticas e podem mudar; siga sempre os avisos oficiais da AEMET e dos serviços de emergência (112).</p>
<h2>Traduções</h2>
<p>Os artigos são escritos em inglês e traduzidos para outras línguas, em grande parte de forma automática. Se uma tradução diferir do original em inglês, aplica-se a versão inglesa.</p>
<h2>Ligações externas</h2>
<p>Incluímos ligações para fontes e outros sites. Não somos responsáveis pelo seu conteúdo.</p>
<h2>Contacto</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Contacte-nos',
    intro: 'Notícias, comunicados, correções e publicidade',
    description: 'Contacte o Balearic Times com notícias, comunicados de imprensa, correções ou pedidos de publicidade.',
    html: `<p>Envie-nos uma notícia, um comunicado de imprensa ou uma correção através do formulário abaixo, ou escreva para <a href="mailto:{email}">{email}</a>. Lemos todas as mensagens, em qualquer língua.</p>`,
  },
  thanks: {
    title: 'Obrigado',
    intro: 'A sua mensagem foi enviada.',
    html: `<p>Obrigado pelo contacto. Se nos enviou uma mensagem, responderemos o mais depressa possível. Se subscreveu a newsletter, já está na lista.</p>
<p><a class="btn btn-primary no-icon" href="@/">Voltar à página inicial</a></p>`,
  },
  notFound: {
    title: 'Página não encontrada',
    intro: 'Lamentamos, não encontrámos essa página.',
    html: `<p>A notícia pode ter mudado de lugar ou sido removida. Experimente a <a href="@/">página inicial</a> ou uma das secções do menu.</p>`,
  },
};
