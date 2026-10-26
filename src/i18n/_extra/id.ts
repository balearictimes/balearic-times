import type { ui as UI, pages as PAGES } from './en';

export const ui: typeof UI = {
  tagline: 'Balearic Times — Berita dari Mallorca, Menorca, Ibiza & Formentera',
  siteDescription:
    'Balearic Times adalah situs berita independen yang meliput Mallorca, Menorca, Ibiza, dan Formentera: berita, politik, bisnis, ekonomi, kesehatan, budaya, olahraga, teknologi, dan cuaca.',
  defaultTitle: 'Berita dari Mallorca, Menorca, Ibiza & Formentera',
  home: 'Beranda',
  contact: 'Kontak',
  about: 'Tentang',
  sendTip: 'Kirim Info',
  sendTipLower: 'Kirim info',
  language: 'Bahasa',
  toggleNav: 'Buka menu',
  timezone: 'CET',

  cat: {
    news: ['Berita', 'Berita terbaru dari Mallorca, Menorca, Ibiza, dan Formentera.'],
    business: ['Bisnis', 'Perusahaan, pariwisata, properti, dan lapangan kerja di Kepulauan Balears.'],
    economy: ['Ekonomi', 'Harga, upah, perumahan, dan angka-angka di balik kehidupan pulau.'],
    health: ['Kesehatan', 'Rumah sakit, kesehatan masyarakat, dan kesejahteraan di Balears.'],
    lifestyle: ['Gaya Hidup', 'Kuliner, perjalanan, acara, dan kehidupan di pulau.'],
    politics: ['Politik', 'Govern, Parlament, dewan pulau, dan pemerintah kota.'],
    culture: ['Budaya', 'Seni, musik, festival, warisan, dan tradisi.'],
    sports: ['Olahraga', 'RCD Mallorca, bola basket, layar, lari, dan olahraga pulau.'],
    tech: ['Teknologi', 'Teknologi, perusahaan rintisan, dan kehidupan digital di Balears.'],
    weather: ['Cuaca', 'Kondisi terkini, prakiraan, dan peringatan cuaca untuk setiap pulau.'],
  },
  island: {
    mallorca: ['Mallorca', 'Palma, Serra de Tramuntana, dan pulau terbesar — politik, pariwisata, perumahan, dan RCD Mallorca.'],
    menorca: ['Menorca', 'Cagar biosfer UNESCO — Maó, Ciutadella, pertanian, warisan, dan kehidupan pulau.'],
    ibiza: ['Ibiza', 'Ibiza di luar kelab malam — Santa Eulària, Sant Antoni, perumahan, transportasi, dan musim wisata.'],
    formentera: ['Formentera', 'Pulau terkecil — feri, pantai, lingkungan, dan Consell de Formentera.'],
  },

  readMoreCaps: 'BACA SELENGKAPNYA',
  learnMoreCaps: 'PELAJARI LEBIH LANJUT',
  latestHeading: 'Berita Terbaru dari Kepulauan Balears',
  emptyLatest: 'Berita baru segera hadir.',
  viewAllNews: 'Lihat semua berita',
  homeH1: 'Balearic Times — Berita dari Mallorca, Menorca, Ibiza & Formentera',
  aboutTagline: 'Berita Pulau, Politik, Bisnis & Cuaca',
  aboutP1:
    'Balearic Times menghadirkan kisah-kisah yang membentuk kehidupan di Mallorca, Menorca, Ibiza, dan Formentera. Dari keputusan Govern dan dewan pulau hingga perumahan, pariwisata, layanan kesehatan, budaya, dan olahraga, kami menjelaskan apa yang terjadi, mengapa penting, dan apa yang akan terjadi selanjutnya.',
  aboutSub: 'Independen & Lokal',
  aboutP2:
    'Liputan kami berdasarkan pengumuman resmi, data publik, dan orang-orang yang terlibat, ditulis dengan kata-kata kami sendiri dan diperiksa sebelum diterbitkan. Prakiraan harian untuk keempat pulau membuat Anda siap menghadapi cuaca Mediterania.',
  ourIslands: 'Pulau Kami',
  acrossBalearics: 'Di Seluruh Balears',
  islandsIntro: 'Empat pulau, empat kisah yang sangat berbeda. Ikuti berita dari pulau yang penting bagi Anda.',
  nStories: '{n} berita',
  latestNews: 'Berita terbaru',
  topStories: 'Berita Utama',
  balearicIslands: 'Kepulauan Balears',
  weather: 'Cuaca',

  newsletter: 'Buletin',
  signUp: 'Daftar untuk Info Terbaru',
  name: 'Nama',
  email: 'Email',
  subscribe: 'Berlangganan',

  chooseIsland: 'Pilih pulau',
  wxLoading: 'Memuat kondisi terkini…',
  wxUnavailable: 'Data cuaca sedang tidak tersedia.',
  wxWind: 'angin',
  wx: {
    clear: 'Cerah', mainlyClear: 'Sebagian besar cerah', partlyCloudy: 'Berawan sebagian', overcast: 'Mendung', fog: 'Kabut',
    drizzle: 'Gerimis', rain: 'Hujan', heavyRain: 'Hujan lebat', freezingRain: 'Hujan beku', snow: 'Salju',
    showers: 'Hujan lokal', thunderstorm: 'Badai petir', cloudy: 'Berawan',
  },

  readMore: 'Baca selengkapnya',
  backTo: '← Kembali ke {cat}',
  by: 'Oleh {author}',
  minRead: '{n} menit baca',
  updated: 'Diperbarui {date}',
  photo: 'Foto: {credit}',
  source: 'Sumber:',
  basedOn: 'berdasarkan informasi yang diterbitkan oleh',
  share: 'Bagikan',
  keepReading: 'Baca juga',
  moreCat: '{cat} lainnya',
  translatedNote: 'Artikel ini diterjemahkan dari bahasa Inggris.',
  readOriginal: 'Baca versi aslinya',
  advertisement: 'Iklan',

  catTitle: '{name} — Kepulauan Balears',
  catPageTitle: '{name} — halaman {n}',
  catIntro: '{name} dari Mallorca, Menorca, Ibiza & Formentera',
  noStories: 'Belum ada berita di bagian ini — kunjungi lagi nanti.',
  readInEnglish: 'Baca berita terbaru dalam bahasa Inggris',
  islandTitle: 'Berita {name}',
  islandBanner: 'Berita {name}',
  islandDesc: 'Berita terbaru dari {name}: {blurb}',
  latestFrom: 'Terbaru dari {name}',
  pagination: 'Navigasi halaman',

  usefulLinks: 'Tautan Berguna',
  aboutUs: 'Tentang Kami',
  editorialPolicy: 'Kebijakan Redaksi',
  contactUs: 'Hubungi Kami',
  rssFeed: 'Feed RSS',
  sendNewsTip: 'Kirimkan info berita kepada kami',
  location: 'Palma de Mallorca, Kepulauan Balears',
  privacyPolicy: 'Kebijakan Privasi',
  terms: 'Syarat & Ketentuan',
  weatherDataBy: 'Data cuaca dari',

  yourName: 'Nama Anda',
  topic: 'Topik',
  topics: ['Info berita', 'Siaran pers', 'Koreksi', 'Iklan', 'Lainnya'],
  message: 'Pesan',
  sendMessage: 'Kirim Pesan',
};

export const pages: typeof PAGES = {
  about: {
    title: 'Tentang Kami',
    intro: 'Berita independen dari Kepulauan Balears.',
    html: `<p><strong>{site}</strong> meliput Mallorca, Menorca, Ibiza, dan Formentera untuk penduduk, pelaku usaha, dan wisatawan yang menginginkan berita yang jelas dan tepercaya.</p>
<h2>Apa yang kami liput</h2>
<p>Kami memberitakan keputusan, peristiwa, dan tren yang membentuk kehidupan di pulau-pulau ini: politik regional dan lokal, ekonomi dan pariwisata, perumahan, layanan kesehatan, budaya dan festival, olahraga, teknologi, serta cuaca. Ketika sesuatu penting bagi orang yang tinggal atau berkunjung ke pulau-pulau ini, kami ingin menjelaskan apa yang terjadi, mengapa itu penting, dan apa selanjutnya.</p>
<h2>Cara kami bekerja</h2>
<p>Sebisa mungkin, berita kami bersumber dari sumber primer: pengumuman resmi Govern de les Illes Balears, dewan pulau dan pemerintah kota, statistik publik, pengadilan dan layanan darurat, klub, organisasi, dan orang-orang yang terlibat. Kami menulis setiap berita dengan kata-kata kami sendiri dan segera memperbaiki kesalahan.</p>
<p>Kami menggunakan perangkat lunak, termasuk bantuan penulisan AI, untuk membantu menyusun beberapa berita rutin seperti prakiraan cuaca dan ringkasan pengumuman resmi, serta untuk menerjemahkan artikel kami dari bahasa Inggris ke bahasa lain. Baca selengkapnya di <a href="@/editorial-policy/">kebijakan redaksi</a> kami.</p>
<h2>Koreksi</h2>
<p>Jika kami keliru, kami memperbaikinya dan mencatat koreksi pada artikel. Beri tahu kami di <a href="mailto:{email}">{email}</a>.</p>
<h2>Hubungi kami</h2>
<p>Info berita, siaran pers, iklan, dan tawaran kerja sama sangat kami sambut. Kunjungi <a href="@/contact-us/">halaman kontak</a> kami.</p>`,
  },
  editorial: {
    title: 'Kebijakan Redaksi',
    intro: 'Cara Balearic Times mencari sumber, menulis, menerjemahkan, dan mengoreksi beritanya.',
    html: `<h2>Sumber</h2>
<p>Sebisa mungkin kami menyusun berita dari sumber primer: pengumuman dan siaran pers lembaga publik, statistik resmi, data cuaca, pernyataan organisasi dan perusahaan, serta liputan kami sendiri. Kami menyampaikan fakta dengan kata-kata kami sendiri dan tidak pernah menyalin teks atau foto dari media lain. Jika sebuah berita bergantung pada liputan eksklusif media lain, kami menyebutkannya.</p>
<h2>Arsip kami</h2>
<p>Pada 2026 kami pindah ke situs web baru dan meninjau arsip kami. Artikel lama ditulis ulang dari awal: fakta diperiksa, kesalahan diperbaiki, angka dan kutipan yang tidak dapat diverifikasi dihapus, dan gambar pihak ketiga dihilangkan. Setiap artikel arsip tetap memakai tanggal terbit aslinya dan menunjukkan kapan terakhir diperbarui.</p>
<h2>Terjemahan</h2>
<p>Artikel kami ditulis dalam bahasa Inggris dan diterjemahkan ke bahasa Tionghoa, Hindi, Spanyol, Arab, Prancis, Bengali, Portugis, Indonesia, dan Urdu, sebagian besar dengan bantuan terjemahan AI. Setiap terjemahan menautkan ke artikel asli berbahasa Inggris, yang menjadi acuan jika ada perbedaan. Jika Anda menemukan kesalahan terjemahan, mohon beri tahu kami.</p>
<h2>Otomatisasi dan AI</h2>
<p>Beberapa berita rutin, seperti prakiraan cuaca harian dan ringkasan pengumuman resmi, disusun dengan bantuan perangkat lunak dan alat penulisan AI. Draf tersebut diperiksa oleh editor terhadap sumber aslinya sebelum diterbitkan. Laporan cuaca otomatis dibuat dari data prakiraan terbuka Open-Meteo.</p>
<h2>Gambar</h2>
<p>Kami menggunakan foto milik sendiri, gambar yang diberikan untuk dipublikasikan oleh organisasi terkait, dan gambar berlisensi terbuka, dengan mencantumkan kreditnya. Kami tidak menyalin foto dari media lain.</p>
<h2>Koreksi</h2>
<p>Kami memperbaiki kesalahan dengan cepat dan mencatat koreksi penting di akhir artikel. Laporkan kesalahan ke <a href="mailto:{email}">{email}</a>.</p>
<h2>Independensi</h2>
<p>Iklan dan konten bersponsor selalu diberi label dan tidak pernah memengaruhi liputan berita kami.</p>`,
  },
  privacy: {
    title: 'Kebijakan Privasi',
    intro: 'Cara kami menangani informasi Anda.',
    html: `<p><em>Terakhir diperbarui: 26 Oktober 2026. Terjemahan ini disediakan untuk kemudahan; jika terdapat perbedaan, versi bahasa Inggris yang berlaku.</em></p>
<h2>Siapa kami</h2>
<p>{site} ({url}) adalah pengendali data pribadi yang dikumpulkan melalui situs ini. Kontak: <a href="mailto:{email}">{email}</a>.</p>
<h2>Apa yang kami kumpulkan</h2>
<ul>
<li><strong>Formulir kontak dan buletin:</strong> nama, alamat email, dan pesan Anda, yang hanya digunakan untuk membalas Anda atau mengirim buletin yang Anda minta. Formulir diproses atas nama kami oleh Web3Forms.</li>
<li><strong>Data teknis:</strong> penyedia hosting kami, Cloudflare, memproses alamat IP dan data permintaan dasar untuk menyajikan dan melindungi situs.</li>
<li><strong>Widget cuaca:</strong> peramban Anda meminta data prakiraan langsung dari Open-Meteo. Kami tidak mengirimkan lokasi Anda.</li>
</ul>
<h2>Cookie</h2>
<p>Situs ini tidak memasang cookie iklan atau pelacakan. Jika hal itu berubah, kami akan meminta persetujuan Anda terlebih dahulu.</p>
<h2>Hak Anda</h2>
<p>Berdasarkan GDPR, Anda dapat meminta akses, koreksi, atau penghapusan data Anda, atau menolak penggunaannya, dengan mengirim email kepada kami. Anda juga dapat mengajukan keluhan kepada otoritas perlindungan data Spanyol (AEPD, aepd.es).</p>
<h2>Penyimpanan</h2>
<p>Kami menyimpan pesan hanya selama diperlukan untuk menanganinya, dan alamat buletin hingga Anda berhenti berlangganan.</p>`,
  },
  terms: {
    title: 'Syarat & Ketentuan',
    intro: 'Aturan penggunaan situs ini.',
    html: `<p><em>Terakhir diperbarui: 26 Oktober 2026. Terjemahan ini disediakan untuk kemudahan; jika terdapat perbedaan, versi bahasa Inggris yang berlaku.</em></p>
<h2>Penggunaan konten</h2>
<p>Kecuali dinyatakan lain, artikel dan grafis asli di {site} adalah © {site}. Anda boleh membagikan tautan dan kutipan singkat dengan menyebutkan sumbernya. Mintalah izin sebelum menerbitkan ulang artikel secara utuh. Gambar pihak ketiga tetap menjadi milik pemiliknya dan dicantumkan kreditnya.</p>
<h2>Akurasi</h2>
<p>Kami berupaya keras untuk akurat, tetapi informasi disediakan apa adanya. Prakiraan cuaca dibuat secara otomatis dan dapat berubah; selalu ikuti peringatan resmi dari AEMET dan layanan darurat (112).</p>
<h2>Terjemahan</h2>
<p>Artikel ditulis dalam bahasa Inggris dan diterjemahkan ke bahasa lain, sebagian besar secara otomatis. Jika terjemahan berbeda dari artikel asli berbahasa Inggris, versi bahasa Inggris yang berlaku.</p>
<h2>Tautan eksternal</h2>
<p>Kami menautkan ke sumber dan situs web lain. Kami tidak bertanggung jawab atas isinya.</p>
<h2>Kontak</h2>
<p><a href="mailto:{email}">{email}</a></p>`,
  },
  contact: {
    title: 'Hubungi Kami',
    intro: 'Info berita, siaran pers, koreksi, dan iklan',
    description: 'Hubungi Balearic Times untuk info berita, siaran pers, koreksi, atau pertanyaan seputar iklan.',
    html: `<p>Kirimkan berita, siaran pers, atau koreksi melalui formulir di bawah ini, atau email ke <a href="mailto:{email}">{email}</a>. Kami membaca setiap pesan, dalam bahasa apa pun.</p>`,
  },
  thanks: {
    title: 'Terima kasih',
    intro: 'Pesan Anda telah terkirim.',
    html: `<p>Terima kasih telah menghubungi kami. Jika Anda mengirim pesan, kami akan membalas secepatnya. Jika Anda berlangganan buletin, nama Anda sudah masuk daftar.</p>
<p><a class="btn btn-primary no-icon" href="@/">Kembali ke beranda</a></p>`,
  },
  notFound: {
    title: 'Halaman Tidak Ditemukan',
    intro: 'Maaf, kami tidak dapat menemukan halaman tersebut.',
    html: `<p>Berita mungkin telah dipindahkan atau dihapus. Coba <a href="@/">beranda</a> atau salah satu bagian di menu.</p>`,
  },
};
