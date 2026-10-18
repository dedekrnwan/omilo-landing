// Landing copy, Bahasa Indonesia (served at /id/).
// Tanpa em dash. Tanpa statistik, pelanggan atau testimoni karangan.
// Pratinjau produk memakai contoh bisnis fiktif dan diberi label contoh di halaman.

import type { Content } from './types';

export const content: Content = {
  meta: {
    title: 'Omilo, kembangkan bisnis Anda dengan tim staf AI',
    description:
      'Omilo memberi bisnis Anda tim helper AI yang menjalankan pekerjaan rutin sesuai jadwal, melapor, dan mengusulkan langkah berikutnya. Tidak ada hal penting yang terjadi sebelum Anda setujui.',
    ogImageAlt: 'Inbox Omilo, berisi laporan kerja para helper AI dan satu usulan yang menunggu persetujuan.',
  },

  nav: {
    brand: 'Omilo',
    tagline: 'Staf AI untuk bisnis yang bertumbuh',
    links: [
      { label: 'Cara kerja', href: '#loop' },
      { label: 'Helper', href: '#helpers' },
      { label: 'Batasan', href: '#guardrails' },
      { label: 'Paket', href: '#offer' },
    ],
    cta: 'Akses awal',
    homeAriaLabel: 'Omilo, beranda',
    languageLabel: 'Bahasa',
  },

  hero: {
    kicker: 'Open source · kini akses awal',
    headline: 'Kembangkan bisnis Anda',
    headlineSoft: 'bersama tim helper AI.',
    subhead:
      'Setiap helper memegang satu pekerjaan rutin: operasional, layanan pelanggan, keuangan, pemasaran, penjualan, bahkan kode. Mereka bekerja sesuai jadwal, melapor, dan mengusulkan langkah berikutnya. Tidak ada hal penting yang terjadi sebelum Anda setujui.',
    ctaPrimary: 'Gabung waitlist',
    ctaSecondary: 'Lihat cara kerjanya',
    crewNote: 'Satu Chief of Staff dan enam helper, siap sejak hari pertama',
    preview: {
      company: 'Kopi Senja (contoh)',
      groups: [
        { label: 'Work', items: [{ key: 'inbox', label: 'Inbox' }, { key: 'workspace', label: 'Workspace' }, { key: 'plan', label: 'Plan' }, { key: 'docs', label: 'Docs' }, { key: 'monitor', label: 'Monitor' }] },
        { label: 'Company', items: [{ key: 'team', label: 'Team' }, { key: 'hire', label: 'Hire' }, { key: 'company', label: 'Company' }, { key: 'settings', label: 'Settings' }] },
        { label: 'Capabilities', items: [{ key: 'harness', label: 'Harness' }, { key: 'connectors', label: 'Connectors' }, { key: 'skills', label: 'Skills' }, { key: 'computer', label: 'Computer' }] },
      ],
      controlLabel: 'Control',
      pause: 'Pause all helpers',
      resume: 'Resume all helpers',
      pausedChip: 'Dijeda',
      user: 'Anda',
      inboxTitle: 'Inbox',
      waiting: '1 menunggu Anda',
      proposal: {
        title: 'Terbitkan 3 postingan soal area pengiriman baru',
        meta: 'Pemasaran · usulan',
        status: 'Menunggu',
        why: 'Alasan: "bisa kirim ke daerah saya?" jadi pertanyaan pelanggan teratas minggu ini (dari Layanan).',
        approve: 'Setujui',
        reject: 'Tolak dengan catatan',
        adjust: 'Sesuaikan dengan AI',
        notePlaceholder: 'Beri tahu helper apa yang perlu diubah',
        noteValue: 'Dua postingan saja, tambahkan promo akhir pekan.',
        send: 'Kirim catatan',
        approved: 'Disetujui. Pemasaran membuat draf postingan di run berikutnya.',
        adjusted: 'Revisi 2: dua postingan plus naskah video singkat. Setujui atau tolak di bawah.',
        rejectedPrefix: 'Ditolak dengan catatan: "',
        rejectedSuffix: '". Run berikutnya membacanya.',
      },
      rows: [
        { mascot: 'dev', title: 'Perubahan website siap ditinjau', meta: 'Dev · 13:00', status: 'Tinjau', tone: 'run' },
        { mascot: 'ops', title: 'Pesanan, situs, dan pembayaran sehat', meta: 'Ops · 14:00', status: 'OK', tone: 'up' },
        { mascot: 'support', title: 'Pesan kemarin, dikelompokkan jadi 4 tema', meta: 'Layanan · 06:30', status: 'Selesai', tone: 'up' },
      ],
      views: [
        {
          key: 'workspace', title: 'Workspace', subtitle: 'Chat dengan Chief of Staff atau helper mana pun',
          chat: [
            { who: 'you', name: 'Anda', text: 'Pelanggan paling banyak tanya soal apa minggu ini?' },
            { who: 'chief', name: 'Chief of Staff', text: 'Area pengiriman, jauh di atas yang lain. Pemasaran sudah mengusulkan tiga postingan soal itu. Ada di Inbox Anda.' },
            { who: 'you', name: 'Anda', text: 'Dua postingan saja, tambahkan promo akhir pekan.' },
            { who: 'marketing', name: 'Pemasaran', text: 'Siap. Revisi 2 menunggu persetujuan Anda.' },
          ],
        },
        {
          key: 'plan', title: 'Plan', subtitle: 'Target dari Anda, dan pekerjaan yang menggerakkannya',
          goals: [
            {
              goal: 'Tambah pesanan online', jobs: [
                { mascot: 'marketing', title: 'Postingan mingguan soal pengiriman', meta: 'Pemasaran', status: 'Bekerja', tone: 'run' },
                { mascot: 'sales', title: 'Follow-up prospek katering', meta: 'Penjualan', status: 'Antre', tone: 'idle' },
                { mascot: 'dev', title: 'Tambah zona pengiriman di website', meta: 'Dev', status: 'Menunggu Anda', tone: 'warn' },
              ]
            },
            {
              goal: 'Jaga pelanggan tetap puas', jobs: [
                { mascot: 'support', title: 'Draf balasan dalam satu jam', meta: 'Layanan', status: 'Selesai', tone: 'up' },
              ]
            },
          ],
        },
        {
          key: 'docs', title: 'Docs', subtitle: 'Yang diketahui dan diingat para helper',
          rows: [
            { icon: 'docs', title: 'Gaya bahasa brand', meta: 'Diubah oleh Anda · Sen', status: 'Disematkan', tone: 'idle' },
            { icon: 'docs', title: 'Menu dan harga', meta: 'Diperbarui Ops · Sel', status: 'Dibagikan', tone: 'idle' },
            { icon: 'docs', title: 'Pelajaran: postingan singkat dengan foto paling berhasil', meta: 'Retro mingguan · Jum', status: 'Memori', tone: 'run' },
            { icon: 'docs', title: 'Log run: Layanan, Kamis', meta: 'Layanan · Kam 06:30', status: 'Log', tone: 'idle' },
          ],
        },
        {
          key: 'monitor', title: 'Monitor', subtitle: '7 hari terakhir',
          stats: [
            { label: 'Pekerjaan selesai', value: '46', note: 'naik dari 39', tone: 'up' },
            { label: 'Tingkat sukses', value: '94%', note: '3 dicoba ulang', tone: 'up' },
            { label: 'Menunggu Anda', value: '1', note: 'Usulan Pemasaran', tone: 'warn' },
            { label: 'Biaya bulan ini', value: 'Rp 312 rb', note: 'dari budget Rp 1 jt' },
          ],
        },
        {
          key: 'team', title: 'Team', subtitle: 'Para helper dan yang sedang mereka kerjakan',
          rows: [
            { mascot: 'chief', title: 'Chief of Staff', meta: 'Membagi pekerjaan · retro mingguan', status: 'Siap', tone: 'idle' },
            { mascot: 'marketing', title: 'Pemasaran', meta: 'Menyusun revisi 2', status: 'Bekerja', tone: 'run' },
            { mascot: 'support', title: 'Layanan', meta: 'Run berikutnya 06:30', status: 'Siap', tone: 'idle' },
            { mascot: 'ops', title: 'Ops', meta: 'Dicek 14:00', status: 'Siap', tone: 'idle' },
            { mascot: 'sales', title: 'Penjualan', meta: 'Menunggu pembaruan target dari Anda', status: 'Menunggu', tone: 'warn' },
          ],
        },
        {
          key: 'hire', title: 'Hire', subtitle: 'Tambah helper dari template, atau jelaskan sendiri',
          rows: [
            { icon: 'team', title: 'Pembukuan', meta: 'Catat penjualan dan biaya, tandai yang janggal', status: 'Rekrut', tone: 'idle' },
            { icon: 'team', title: 'Penulis konten', meta: 'Postingan, caption, dan newsletter', status: 'Rekrut', tone: 'idle' },
            { icon: 'team', title: 'Peneliti', meta: 'Kompetitor, harga, dan pemasok', status: 'Rekrut', tone: 'idle' },
            { icon: 'team', title: 'Customer success', meta: 'Sapa pelanggan dan tindak lanjut ulasan', status: 'Rekrut', tone: 'idle' },
          ],
        },
        {
          key: 'company', title: 'Company', subtitle: 'KPI, masing-masing dengan helper pemilik',
          stats: [
            { label: 'Omzet bulanan', value: 'Rp 48 jt', note: '+8% dari bulan lalu', tone: 'up' },
            { label: 'Pesanan per minggu', value: '312', note: '+5%', tone: 'up' },
            { label: 'Pelanggan kembali', value: '41%', note: 'target 45%', tone: 'warn' },
            { label: 'Waktu balas pertama', value: '52 mnt', note: 'target 60 mnt', tone: 'up' },
          ],
        },
        {
          key: 'settings', title: 'Settings', subtitle: 'Aturan yang diikuti semua helper',
          rows: [
            { icon: 'settings', title: 'Strict mode', meta: 'Setiap aksi keluar menunggu Anda', status: 'Aktif', tone: 'up' },
            { icon: 'settings', title: 'Budget bulanan', meta: 'Peringatan di 80% dan 100%', status: 'Rp 1 jt', tone: 'idle' },
            { icon: 'settings', title: 'Zona waktu', meta: 'Jadwal mengikuti waktu lokal Anda', status: 'WIB', tone: 'idle' },
          ],
        },
        {
          key: 'harness', title: 'Harness', subtitle: 'Engine AI yang menjalankan helper Anda',
          rows: [
            { icon: 'harness', title: 'Claude Code', meta: 'Login Anda sendiri, di dalam container', status: 'Aktif', tone: 'up' },
            { icon: 'harness', title: 'Claude API', meta: 'Batas biaya harian', status: 'Siaga', tone: 'idle' },
            { icon: 'harness', title: 'Mode latihan', meta: 'Agen tiruan untuk mencoba', status: 'Mati', tone: 'idle' },
          ],
        },
        {
          key: 'connectors', title: 'Connectors', subtitle: 'Aplikasi yang bisa dijangkau helper',
          rows: [
            { icon: 'connectors', title: 'Gmail', meta: 'Baca dan buat draf', status: 'Terhubung', tone: 'up' },
            { icon: 'connectors', title: 'Google Sheets', meta: 'Pesanan dan biaya', status: 'Terhubung', tone: 'up' },
            { icon: 'connectors', title: 'Instagram', meta: 'Posting', status: 'Tanya dulu', tone: 'warn' },
            { icon: 'connectors', title: 'Zapier', meta: 'Sisanya', status: 'Terhubung', tone: 'up' },
          ],
        },
        {
          key: 'skills', title: 'Skills', subtitle: 'Keahlian yang dipakai bersama para helper',
          rows: [
            { icon: 'skills', title: 'Menulis dengan gaya brand kami', meta: 'Dipakai Pemasaran, Layanan', status: '2 helper', tone: 'idle' },
            { icon: 'skills', title: 'Laporan KPI mingguan', meta: 'Dipakai Keuangan', status: '1 helper', tone: 'idle' },
            { icon: 'skills', title: 'Menjawab pertanyaan pengiriman', meta: 'Dipakai Layanan', status: '1 helper', tone: 'idle' },
          ],
        },
        {
          key: 'computer', title: 'Computer', subtitle: 'Tempat helper bekerja dengan file dan web',
          rows: [
            { icon: 'computer', title: 'Folder bersama', meta: 'website, laporan', status: '2 folder', tone: 'idle' },
            { icon: 'computer', title: 'Browser', meta: 'Dev membuka halaman menu Anda · 13:02', status: 'Tangkapan', tone: 'run' },
            { icon: 'computer', title: 'Terminal', meta: 'Build website berhasil · 13:05', status: 'OK', tone: 'up' },
          ],
        },
      ],
      sample: 'Contoh bisnis dan data · coba klik menunya',
    },
  },

  loop: {
    eyebrow: 'Cara kerja',
    heading: 'Setiap helper menjalankan loop yang sama',
    subhead:
      'Helper dipicu, mengumpulkan konteks, mengerjakan tugas, lalu melapor dengan usulan. Anda yang memutuskan. Run berikutnya menjalankan yang Anda setujui.',
    steps: [
      { title: 'Pemicu', body: 'Jadwal, kejadian, atau permintaan Anda lewat Chat.' },
      { title: 'Konteks', body: 'Target, KPI, memori, dan catatan run sebelumnya.' },
      { title: 'Kerjakan', body: 'Di dalam izin yang dikunci dan budget.' },
      { title: 'Lapor', body: 'Apa yang terjadi, plus usulan.' },
      { title: 'Anda putuskan', body: 'Setujui, atau tolak dengan catatan yang dibaca.' },
      { title: 'Jalankan', body: 'Run berikutnya mengerjakan yang disetujui.' },
    ],
    youIndex: 4,
    retroTitle: 'Retro mingguan, Jumat 16:00.',
    retroBody: 'Maksimal tiga perbaikan per minggu, masing-masing diukur, dengan rollback otomatis dan undo.',
  },

  helpers: {
    eyebrow: 'Tim Anda',
    heading: 'Siapa kerja kapan',
    subhead:
      'Chief of Staff membagikan pekerjaan menuju target Anda. Enam helper mengisi satu minggu. Mulai dari dua, lalu tambah satu per satu setelah Anda percaya.',
    columns: { helper: 'Helper', when: 'Jalan (bawaan)', job: 'Tugas', output: 'Hasil untuk Anda' },
    rows: [
      { mascot: 'ops', name: 'Ops', when: 'Tiap jam', job: 'Cek situs, pesanan, pembayaran, dan antrean.', output: 'Peringatan bila ada masalah', tone: 'up' },
      { mascot: 'support', name: 'Layanan', when: 'Harian 06:30', job: 'Baca pesan pelanggan kemarin dan kelompokkan.', output: 'Tema + draf balasan', tone: 'up' },
      { mascot: 'finance', name: 'Keuangan', when: 'Sen 07:00', job: 'Perbarui omzet, biaya, churn, dan runway.', output: 'Scorecard KPI', tone: 'up' },
      { mascot: 'marketing', name: 'Pemasaran', when: 'Sen 08:00', job: 'Rencanakan postingan minggu ini dari pertanyaan pelanggan nyata.', output: 'Usulan konten', tone: 'warn' },
      { mascot: 'sales', name: 'Penjualan', when: 'Sel · Kam 09:00', job: 'Riset prospek dan siapkan draf follow-up.', output: 'Draf, tidak dikirim', tone: 'idle' },
      { mascot: 'dev', name: 'Dev', when: '01:00 · 13:00', job: 'Ambil satu tugas siap di website atau aplikasi Anda lalu kerjakan.', output: '1 perubahan untuk ditinjau', tone: 'run' },
      { mascot: 'chief', name: 'Chief of Staff', when: 'Jum 16:00', job: 'Tinjau minggu ini dan setel cara kerja semua helper.', output: 'Maks 3 perubahan', tone: 'idle' },
    ],
    note: 'Jadwal berjalan di zona waktu Anda. Ubah jadwal, jeda helper, atau rekrut helper baru untuk pekerjaan yang berulang.',
  },

  workspace: {
    eyebrow: 'Ruang kerja',
    heading: 'Lihat yang jalan, yang macet, dan yang menunggu Anda',
    items: [
      { icon: 'plan', title: 'Rencana', body: 'Anda tetapkan target; Chief memecahnya jadi pekerjaan. Work Map menelusuri tiap pekerjaan ke targetnya.' },
      { icon: 'inbox', title: 'Inbox', body: 'Satu antrean keputusan. Usulan menyimpan riwayat revisinya.' },
      { icon: 'chat', title: 'Chat', body: 'Tanya soal run mana pun, atau jalankan ulang helper dengan instruksi Anda. Chat bisa mengusulkan; hanya Anda yang menyetujui.' },
      { icon: 'kpi', title: 'KPI', body: 'Nilai, tren, target, dan sumber di tiap KPI, dengan helper pemilik yang menjaganya tetap terbaru.' },
      { icon: 'monitor', title: 'Monitor', body: 'Dashboard sederhana, atau kantor virtual tempat Anda melihat helper bekerja. Hanya kejadian nyata yang bergerak.' },
      { icon: 'docs', title: 'Dokumen & memori', body: 'Pelajaran, log run, dan pengetahuan perusahaan tersimpan sebagai dokumen yang bisa Anda baca dan ubah.' },
    ],
  },

  guardrails: {
    eyebrow: 'Batasan',
    heading: 'Helper mengusulkan. Anda memutuskan.',
    subhead: 'Aturan keras dijaga oleh policy engine, bukan sekadar prompt. Setiap aksi tercatat di audit log.',
    neverHeading: 'Tidak pernah tanpa Anda',
    never: [
      'Mengirim apa pun ke pelanggan',
      'Mengeluarkan uang',
      'Menerbitkan, merge kode, atau deploy',
      'Mengubah data produksi Anda',
      'Mengarang fakta atau menjanjikan yang belum ada',
    ],
    alwaysHeading: 'Selalu aktif',
    always: [
      'Izin, budget, dan persetujuan yang dikunci',
      'Coba ulang otomatis saat rate limit atau gangguan singkat',
      'Posting sosial diatur "Tanya saya dulu"',
      'Host sendiri, atau biarkan kami jalankan di cloud kami',
      'Beberapa bisnis, terpisah penuh, satu login',
    ],
  },

  engines: {
    eyebrow: 'Engine',
    heading: 'Pakai AI milik Anda',
    subhead:
      'Pilih engine per helper. Mode latihan menjalankan seluruh alur dengan agen tiruan, jadi Anda bisa mencobanya tanpa biaya.',
    engines: [
      { label: 'Claude Code', title: 'Login milik Anda', body: 'Jalan dengan login Claude Code atau API key Anda, di container di server Anda.' },
      { label: 'Claude API', title: 'Batas biaya harian', body: 'Panggilan API langsung yang berhenti di batas yang Anda tetapkan.' },
      { label: 'Mode latihan', title: 'Gratis dicoba', body: 'Agen tiruan menjalani setiap langkah agar Anda memahami alurnya.' },
    ],
  },

  offer: {
    eyebrow: 'Cara memakai Omilo',
    heading: 'Inti open source. Bantuan saat Anda butuh.',
    subhead:
      'Omilo open source, jadi Anda bisa menjalankannya sendiri secara gratis. Bila tidak ingin repot sendiri, kami siapkan bersama Anda, dukung, atau jalankan untuk Anda.',
    plans: [
      {
        label: 'Open source',
        title: 'Host sendiri',
        body: 'Platform lengkap, gratis dijalankan di server Anda dengan AI milik Anda.',
        points: ['Semua fitur di halaman ini', 'Data tetap di server Anda', 'Kode sumber tersedia saat peluncuran'],
        cta: 'Gabung waitlist',
        action: 'waitlist',
      },
      {
        label: 'Konsultasi',
        title: 'Onboarding & dukungan',
        body: 'Kami petakan pekerjaan berulang di bisnis Anda dan siapkan helper yang pas.',
        points: ['Setup di server Anda atau server kami', 'Helper, target, dan KPI dirancang bersama Anda', 'Dukungan berkelanjutan dan penyetelan mingguan'],
        cta: 'Hubungi kami',
        action: 'waitlist',
        highlight: true,
      },
      {
        label: 'Cloud',
        title: 'Dikelola kami',
        body: 'Kami host, perbarui, dan backup Omilo untuk Anda. Tidak perlu instalasi.',
        points: ['Siap dalam sehari', 'Pembaruan dan backup kami urus', 'Pakai AI sendiri atau dari kami'],
        cta: 'Gabung waitlist cloud',
        action: 'waitlist',
      },
    ],
    note: 'Harga konsultasi, dukungan, dan cloud disesuaikan per bisnis selama masa akses awal.',
  },

  growth: {
    eyebrow: 'Kenapa pemilik bisnis memakainya',
    heading: 'Bertumbuh sebelum merekrut',
    subhead:
      'Banyak bisnis yang sedang tumbuh menabrak tembok yang sama: pemiliknya jadi penghambat. Omilo mengambil alih pekerjaan berulang, sehingga waktu Anda dipakai untuk keputusan yang hanya bisa Anda buat.',
    items: [
      { label: 'Waktu', title: 'Jam kembali setiap minggu', body: 'Laporan, follow-up, balasan, dan pengecekan selesai sesuai jadwal tanpa Anda memulainya.' },
      { label: 'Fokus', title: 'Keputusan, bukan kesibukan', body: 'Anda melihat antrean usulan singkat beserta alasannya, lalu bilang ya, tidak, atau ubah ini.' },
      { label: 'Kejelasan', title: 'Satu tampilan bisnis', body: 'Target, KPI, dan pekerjaan setiap helper di satu tempat, diperbarui oleh para helper sendiri.' },
    ],
  },

  examples: {
    eyebrow: 'Cocok untuk bisnis Anda',
    heading: 'Sesuai cara bisnis Anda berjalan.',
    subhead: 'Helper yang sama, pekerjaan berbeda. Anda yang menentukan tugas masing-masing.',
    cards: [
      {
        label: 'Contoh',
        title: 'Kedai kopi',
        helpers: [
          { mascot: 'marketing', role: 'Pemasaran', body: 'Membuat postingan menu dan area pengiriman' },
          { mascot: 'support', role: 'Layanan', body: 'Menjawab pesan "apakah bisa antar?"' },
          { mascot: 'finance', role: 'Keuangan', body: 'Penjualan dan biaya mingguan' },
        ],
      },
      {
        label: 'Contoh',
        title: 'Toko online',
        helpers: [
          { mascot: 'ops', role: 'Ops', body: 'Cek pesanan, stok, dan pembayaran' },
          { mascot: 'sales', role: 'Penjualan', body: 'Menindaklanjuti calon pembeli grosir' },
          { mascot: 'support', role: 'Layanan', body: 'Membuat draf balasan untuk retur' },
        ],
      },
      {
        label: 'Contoh',
        title: 'Agensi atau jasa',
        helpers: [
          { mascot: 'dev', role: 'Dev', body: 'Memperbarui situs klien' },
          { mascot: 'chief', role: 'Chief of Staff', body: 'Menulis laporan klien mingguan' },
          { mascot: 'sales', role: 'Penjualan', body: 'Membuat draf proposal untuk klien baru' },
        ],
      },
    ],
  },

  connectors: {
    eyebrow: 'Konektor',
    heading: 'Bekerja di aplikasi yang sudah Anda pakai.',
    subhead: 'Konektor siap pakai untuk aplikasi sehari-hari, Zapier untuk sisanya, dan server MCP apa pun untuk semua hal lain.',
    cta: 'Gabung waitlist',
    askChip: 'Tanya saya dulu',
    autoChip: 'Otomatis',
    addLabel: 'Konektor berikutnya',
    apps: [
      { key: 'gmail', name: 'Gmail' },
      { key: 'gcal', name: 'Google Calendar' },
      { key: 'gsheets', name: 'Google Sheets' },
      { key: 'whatsapp', name: 'WhatsApp' },
      { key: 'instagram', name: 'Instagram' },
      { key: 'facebook', name: 'Facebook' },
      { key: 'zapier', name: 'Zapier' },
      { key: 'github', name: 'GitHub' },
      { key: 'postgres', name: 'Postgres' },
      { key: 'browser', name: 'Browser' },
      { key: 'mcp', name: 'Server MCP apa pun' },
    ],
    helpers: [
      { mascot: 'chief', name: 'Chief of Staff' },
      { mascot: 'support', name: 'Layanan' },
      { mascot: 'marketing', name: 'Pemasaran' },
      { mascot: 'finance', name: 'Keuangan' },
      { mascot: 'sales', name: 'Penjualan' },
      { mascot: 'ops', name: 'Ops' },
      { mascot: 'dev', name: 'Dev' },
    ],
    activity: [
      { mascot: 'support', app: 'whatsapp', text: 'Draf balasan untuk pelanggan siap', ask: true },
      { mascot: 'finance', app: 'gsheets', text: 'Membaca pesanan dan biaya minggu ini' },
      { mascot: 'marketing', app: 'instagram', text: 'Postingan foto siap', ask: true },
      { mascot: 'ops', app: 'browser', text: 'Mengecek situs tetap jalan' },
      { mascot: 'chief', app: 'gcal', text: 'Melihat jadwal minggu ini' },
      { mascot: 'dev', app: 'github', text: 'Perubahan siap ditinjau', ask: true },
      { mascot: 'support', app: 'gmail', text: 'Mengelompokkan pesan kemarin' },
      { mascot: 'sales', app: 'gmail', text: 'Draf email follow-up siap', ask: true },
      { mascot: 'ops', app: 'postgres', text: 'Mengecek pesanan hari ini' },
      { mascot: 'marketing', app: 'facebook', text: 'Membaca postingan Page minggu lalu' },
      { mascot: 'sales', app: 'gsheets', text: 'Baris prospek baru untuk ditambah', ask: true },
      { mascot: 'ops', app: 'zapier', text: 'Menyinkronkan sisanya lewat Zapier' },
      { mascot: 'dev', app: 'browser', text: 'Menguji halaman checkout' },
      { mascot: 'chief', app: 'gmail', text: 'Membaca inbox untuk ringkasan pagi' },
      { mascot: 'dev', app: 'mcp', text: 'Mencari dokumentasi library' },
      { mascot: 'support', app: 'instagram', text: 'Melihat postingan terbaru' },
    ],
    features: [
      { title: 'Masuk sekali', body: 'Gmail, Google Calendar, Google Sheets, WhatsApp, Instagram, dan Facebook tersambung lewat login biasa. Tanpa menyalin kunci.' },
      { title: 'Pakai server MCP apa pun', body: 'Tambahkan alamat server atau program yang Anda jalankan, seperti GitHub, Postgres, atau browser. Helper Anda dapat memakai alatnya.' },
      { title: 'Anda yang atur', body: 'Setiap aksi bisa otomatis atau "tanya saya dulu". Mengirim, memposting, dan menambah baris menunggu Anda secara bawaan.' },
    ],
  },

  demo: {
    eyebrow: 'Lihat langsung',
    heading: 'Melihat ke dalam Omilo',
    subhead: 'Helper mengusulkan pekerjaan, Anda memutuskan di satu tempat, lalu run berjalan. Inilah ruang kerjanya dari awal sampai akhir.',
    videoSrc: '/videos/omilo-product-video.mp4',
    caption: 'Panduan produk.',
  },

  finalCta: {
    headline: 'Rekrut staf AI pertama Anda',
    subtext: 'Ceritakan bisnis Anda dan pekerjaan apa yang berulang tiap minggu. Kami bantu siapkan dua helper pertama Anda.',
    cta: 'Gabung waitlist',
    microcopy: 'Gratis dan open source untuk di-host sendiri. Onboarding, dukungan, dan cloud dari tim kami.',
  },

  footer: {
    tagline: 'Staf AI untuk bisnis yang bertumbuh.',
    note: 'Akses awal. Sebagian fitur masih diuji dengan akun nyata.',
    contactLabel: 'Kontak',
    sourceLabel: 'Gabung waitlist',
    email: 'omilio@saga.co.id',
    copyright: '© 2026 Omilo by Saga Tekno',
  },

  waitlist: {
    title: 'Gabung waitlist Omilo',
    subtitle: 'Ceritakan sedikit soal bisnis Anda, dan kami akan menghubungi saat tiba giliran Anda.',
    crewNote: 'Helper Anda siap kapan pun Anda siap.',
    nameLabel: 'Nama Anda',
    namePlaceholder: 'Nama lengkap Anda',
    emailLabel: 'Email',
    emailPlaceholder: 'anda@contoh.com',
    companyLabel: 'Perusahaan',
    companyPlaceholder: 'Perusahaan atau proyek Anda',
    interestLabel: 'Anda mencari apa?',
    selectPlaceholder: 'Pilih salah satu...',
    interestOptions: [
      { value: 'self-host', label: 'Host sendiri versi open source' },
      { value: 'managed', label: 'Cloud terkelola' },
      { value: 'consulting', label: 'Onboarding dan dukungan' },
      { value: 'exploring', label: 'Masih melihat-lihat dulu' },
    ],
    submitLabel: 'Gabung waitlist',
    submitSending: 'Mengirim...',
    successTitle: 'Anda sudah masuk daftar.',
    successMessage: 'Kami akan menghubungi Anda saat giliran Anda tiba.',
    closeLabel: 'Tutup',
    errorMessage: 'Ada yang tidak beres. Coba lagi, atau email ke omilio@saga.co.id.',
    validationNameRequired: 'Nama wajib diisi.',
    validationEmailRequired: 'Email wajib diisi.',
    validationEmailInvalid: 'Masukkan alamat email yang valid.',
    connectionError: 'Koneksi gagal, coba lagi.',
  },
};
