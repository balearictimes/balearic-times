import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — 马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛新闻',
  siteDescription:
    'Balearic Times 是一家独立新闻网站，报道马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛的新闻、政治、商业、经济、健康、文化、体育、科技和天气。',
  defaultTitle: '马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛新闻',
  home: '首页',
  contact: '联系',
  about: '关于',
  sendTip: '提供新闻线索',
  sendTipLower: '提供线索',
  language: '语言',
  toggleNav: '打开菜单',
  timezone: '中欧时间',

  cat: {
    news: ['新闻', '马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛的最新消息。'],
    business: ['商业', '巴利阿里群岛的企业、旅游、房地产和就业。'],
    economy: ['经济', '物价、工资、住房以及海岛生活背后的数据。'],
    health: ['健康', '巴利阿里群岛的医院、公共卫生与健康。'],
    lifestyle: ['生活', '美食、旅行、活动和海岛生活。'],
    politics: ['政治', '自治区政府、议会、各岛委员会和市政府。'],
    culture: ['文化', '艺术、音乐、节庆、遗产和传统。'],
    sports: ['体育', '马略卡足球俱乐部、篮球、帆船、跑步和海岛体育。'],
    tech: ['科技', '巴利阿里群岛的科技、初创企业和数字生活。'],
    weather: ['天气', '各岛实时天气、预报和天气预警。'],
  },
  island: {
    mallorca: ['马略卡岛', '帕尔马、特拉蒙塔纳山脉和群岛中最大的岛屿——政治、旅游、住房和马略卡足球俱乐部。'],
    menorca: ['梅诺卡岛', '联合国教科文组织生物圈保护区——马翁、休达德拉、农业、遗产和海岛生活。'],
    ibiza: ['伊维萨岛', '夜店之外的伊维萨——圣欧拉利亚、圣安东尼、住房、交通和旅游季。'],
    formentera: ['福门特拉岛', '最小的岛屿——渡轮、海滩、环境和福门特拉岛委员会。'],
  },

  readMoreCaps: '阅读全文',
  learnMoreCaps: '了解更多',
  latestHeading: '巴利阿里群岛最新新闻',
  emptyLatest: '新报道即将发布。',
  viewAllNews: '查看全部新闻',
  homeH1: 'Balearic Times — 马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛新闻',
  aboutTagline: '海岛新闻、政治、商业与天气',
  aboutP1:
    'Balearic Times 为您带来影响马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛生活的新闻。从自治区政府和各岛委员会的决定，到住房、旅游、医疗、文化和体育，我们解释发生了什么、为什么重要以及接下来会怎样。',
  aboutSub: '独立、本地',
  aboutP2:
    '我们的报道以官方公告、公开数据和当事人为基础，用我们自己的语言撰写，并在发布前经过核实。四个岛屿的每日天气预报让您随时了解地中海的天气变化。',
  ourIslands: '我们的岛屿',
  acrossBalearics: '巴利阿里群岛各地',
  islandsIntro: '四个岛屿，四种截然不同的故事。关注您所关心的岛屿的新闻。',
  nStories: '{n} 篇报道',
  latestNews: '最新新闻',
  topStories: '头条新闻',
  balearicIslands: '巴利阿里群岛',
  weather: '天气',

  newsletter: '新闻通讯',
  signUp: '订阅最新动态',
  name: '姓名',
  email: '电子邮箱',
  subscribe: '订阅',

  chooseIsland: '选择岛屿',
  wxLoading: '正在加载当前天气…',
  wxUnavailable: '暂时无法获取天气信息。',
  wxWind: '风速',
  wx: {
    clear: '晴', mainlyClear: '大致晴朗', partlyCloudy: '局部多云', overcast: '阴', fog: '雾',
    drizzle: '毛毛雨', rain: '雨', heavyRain: '大雨', freezingRain: '冻雨', snow: '雪',
    showers: '阵雨', thunderstorm: '雷暴', cloudy: '多云',
  },

  readMore: '阅读全文',
  backTo: '← 返回{cat}',
  by: '作者：{author}',
  minRead: '阅读约 {n} 分钟',
  updated: '更新于 {date}',
  photo: '图片：{credit}',
  source: '来源：',
  basedOn: '根据以下机构发布的信息：',
  share: '分享',
  keepReading: '继续阅读',
  moreCat: '更多{cat}',
  translatedNote: '本文译自英文。',
  readOriginal: '阅读英文原文',
  advertisement: '广告',

  catTitle: '{name} — 巴利阿里群岛',
  catPageTitle: '{name} — 第 {n} 页',
  catIntro: '马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛{name}',
  noStories: '本栏目暂无报道，请稍后再来。',
  readInEnglish: '阅读最新英文报道',
  islandTitle: '{name}新闻',
  islandBanner: '{name}新闻',
  islandDesc: '{name}最新新闻：{blurb}',
  latestFrom: '{name}最新消息',
  pagination: '分页',

  usefulLinks: '实用链接',
  aboutUs: '关于我们',
  editorialPolicy: '编辑方针',
  contactUs: '联系我们',
  rssFeed: 'RSS 订阅',
  sendNewsTip: '向我们提供新闻线索',
  location: '西班牙巴利阿里群岛 帕尔马',
  privacyPolicy: '隐私政策',
  terms: '条款与条件',
  weatherDataBy: '天气数据来源：',

  yourName: '您的姓名',
  topic: '主题',
  topics: ['新闻线索', '新闻稿', '更正', '广告', '其他'],
  message: '留言',
  sendMessage: '发送',
};

export const pages: typeof PAGES = {
  about: {
    title: '关于我们',
    intro: '来自巴利阿里群岛的独立新闻。',
    html: `<p><strong>{site}</strong> 报道马略卡岛、梅诺卡岛、伊维萨岛和福门特拉岛，为希望获得清晰、可靠新闻的居民、企业和游客服务。</p>
<h2>我们报道什么</h2>
<p>我们报道影响海岛生活的决策、事件和趋势：地区和地方政治、经济与旅游、住房、医疗服务、文化与节庆、体育、科技和天气。当某件事对岛上居民或前来旅行的人很重要时，我们会解释发生了什么、为什么重要以及接下来会怎样。</p>
<h2>我们的工作方式</h2>
<p>我们尽可能以第一手资料为基础：巴利阿里群岛自治区政府、各岛委员会和市政府的官方公告、公共统计数据、法院和紧急服务部门、俱乐部、机构以及当事人。每篇报道都用我们自己的语言撰写，出现错误会及时更正。</p>
<p>我们使用包括人工智能写作辅助在内的软件工具，协助起草部分常规报道，例如天气预报和官方公告摘要，并将文章从英文翻译成其他语言。详情请参阅我们的<a href="@/editorial-policy/">编辑方针</a>。</p>
<h2>更正</h2>
<p>如果我们出错，会进行更正并在文章中注明。请发送邮件至 <a href="mailto:{email}">{email}</a> 告知我们。</p>
<h2>联系我们</h2>
<p>欢迎提供新闻线索、新闻稿以及广告和合作咨询。请访问我们的<a href="@/contact-us/">联系页面</a>。</p>`,
  },
  editorial: {
    title: '编辑方针',
    intro: 'Balearic Times 如何获取信息、撰写、翻译和更正报道。',
    html: `<h2>信息来源</h2>
<p>我们尽可能以第一手资料撰写报道：公共机构的公告和新闻稿、已发布的统计数据、气象数据、机构和企业的声明，以及我们自己的采访。我们用自己的语言陈述事实，绝不复制其他媒体的文字或图片。如果报道依赖其他媒体的独家消息，我们会予以说明。</p>
<h2>我们的旧文章</h2>
<p>2026 年我们启用了新网站并审查了旧文章。旧文章均由编辑部重新撰写：核实了事实，更正了错误，删除了无法核实的数据和引语，并移除了第三方图片。每篇旧文章保留原始发布日期，并显示最后更新时间。</p>
<h2>翻译</h2>
<p>我们的文章以英文撰写，并翻译成中文、印地语、西班牙语、阿拉伯语、法语、孟加拉语、葡萄牙语、印度尼西亚语和乌尔都语，主要借助人工智能翻译。每篇译文都链接到英文原文；如有出入，以英文原文为准。如发现翻译错误，请告诉我们。</p>
<h2>自动化与人工智能</h2>
<p>部分常规报道，如每日天气预报和官方公告摘要，借助软件和人工智能写作工具起草。编辑会在发布前根据原始来源核对这些草稿。自动天气报道使用 Open-Meteo 提供的开放预报数据生成。</p>
<h2>图片</h2>
<p>我们使用自己拍摄的照片、相关机构提供用于发布的图片以及开放许可的图片，并注明出处。我们不复制其他媒体的照片。</p>
<h2>更正</h2>
<p>我们会及时更正错误，并在文末注明重要更正。如发现错误，请发送邮件至 <a href="mailto:{email}">{email}</a>。</p>
<h2>独立性</h2>
<p>广告和赞助内容始终有明确标注，绝不影响我们的新闻报道。</p>`,
  },
  privacy: {
    title: '隐私政策',
    intro: '我们如何处理您的信息。',
    html: `<p><em>最后更新：2026 年 10 月 26 日。本译文仅供参考，如有出入，以英文版本为准。</em></p>
<h2>我们是谁</h2>
<p>{site}（{url}）是通过本网站收集的个人数据的控制者。联系方式：<a href="mailto:{email}">{email}</a>。</p>
<h2>我们收集哪些信息</h2>
<ul>
<li><strong>联系表单和新闻通讯：</strong>您的姓名、电子邮箱和留言，仅用于回复您或发送您订阅的新闻通讯。表单由 Web3Forms 代表我们处理。</li>
<li><strong>技术数据：</strong>我们的托管服务商 Cloudflare 会处理 IP 地址和基本请求数据，以提供和保护网站。</li>
<li><strong>天气组件：</strong>您的浏览器直接向 Open-Meteo 请求预报数据。我们不会发送您的位置。</li>
</ul>
<h2>Cookie</h2>
<p>本网站不设置广告或跟踪 Cookie。如有变化，我们会事先征得您的同意。</p>
<h2>您的权利</h2>
<p>根据《通用数据保护条例》（GDPR），您可以通过电子邮件要求查阅、更正或删除您的数据，或反对其使用。您也可以向西班牙数据保护局（AEPD，aepd.es）投诉。</p>
<h2>保存期限</h2>
<p>我们仅在处理所需期间保存留言，新闻通讯地址保存至您取消订阅为止。</p>`,
  },
  terms: {
    title: '条款与条件',
    intro: '使用本网站的规则。',
    html: `<p><em>最后更新：2026 年 10 月 26 日。本译文仅供参考，如有出入，以英文版本为准。</em></p>
<h2>内容使用</h2>
<p>除非另有说明，{site} 上的文章和原创图表版权归 {site} 所有。您可以在注明出处的情况下分享链接和简短引用。转载完整文章前请先征得我们同意。第三方图片归其所有者所有，并已注明出处。</p>
<h2>准确性</h2>
<p>我们力求准确，但信息按“现状”提供。天气预报为自动生成，可能会有变化；请始终遵循西班牙国家气象局（AEMET）和紧急服务（112）的官方预警。</p>
<h2>翻译</h2>
<p>文章以英文撰写，并在很大程度上通过自动方式翻译成其他语言。如译文与英文原文有出入，以英文版本为准。</p>
<h2>外部链接</h2>
<p>我们会链接到信息来源和其他网站，但不对其内容负责。</p>
<h2>联系方式</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: '联系我们',
    intro: '新闻线索、新闻稿、更正和广告',
    description: '联系 Balearic Times，提供新闻线索、新闻稿、更正或广告咨询。',
    html: `<p>请使用下方表单向我们发送新闻、新闻稿或更正，或发送邮件至 <a href="mailto:{email}">{email}</a>。我们会阅读每一条留言，任何语言均可。</p>`,
  },
  thanks: {
    title: '谢谢',
    intro: '您的留言已发送。',
    html: `<p>感谢您与我们联系。如果您发送了留言，我们会尽快回复。如果您订阅了新闻通讯，您已成功加入订阅名单。</p>
<p><a class="btn btn-primary no-icon" href="@/">返回首页</a></p>`,
  },
  notFound: {
    title: '页面未找到',
    intro: '抱歉，我们找不到该页面。',
    html: `<p>该报道可能已被移动或删除。请返回<a href="@/">首页</a>或浏览菜单中的栏目。</p>`,
  },
};
