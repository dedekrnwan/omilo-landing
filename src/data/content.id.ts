// Salinan landing, Bahasa Indonesia.
// Berdasar saga-os/README.md. Tanpa statistik, pelanggan, atau testimoni karangan.
// Tanpa tanda em dash. Item roadmap (Codex) ditandai "akan datang", bukan tersedia.
// Bukti nyata atau harga yang belum ada ditandai TODO untuk diisi pemilik.

import type { Content } from './types';

export const content: Content = {
  meta: {
    title: 'Saga OS, kantor tempat Anda memimpin tim staf AI',
    description:
      'Saga OS adalah gerbang open-source untuk menjalankan tim staf AI. Agen Anda mengusulkan pekerjaan, Anda memutuskan di Inbox, dan pekerjaan yang disetujui berjalan di kode. Kendali tetap di tangan Anda.',
    ogImageAlt: 'Workspace Saga OS menampilkan satu staf AI yang sedang bekerja sementara pemilik meninjau sebuah usulan.',
  },

  nav: {
    brand: 'Saga OS',
    links: [
      { label: 'Staf AI Anda', href: '#agents' },
      { label: 'Cara kerja', href: '#how-it-works' },
      { label: 'Harga', href: '#pricing' },
      { label: 'FAQ', href: '#faq' },
    ],
    primaryCta: { label: 'Gabung waitlist' },
  },

  hero: {
    headline: 'Jalankan bisnis dengan tim staf AI, keputusan akhir tetap di Anda.',
    subhead:
      'Bisnis macet kalau semua tugas dan keputusan harus lewat Anda. Saga OS memberi Anda tim agen AI yang mengerjakan pekerjaan dan mengusulkan langkah berikutnya. Anda menyetujuinya di Inbox, lalu pekerjaan itu berjalan. Tidak ada yang keluar tanpa persetujuan Anda.',
    ctaPrimary: { label: 'Gabung waitlist' },
    ctaSecondary: { label: 'Lihat cara kerjanya' },
    microcopy: 'Open-source dan di-hosting sendiri. Anda pakai Claude milik sendiri dan hanya membayar pemakaiannya.',
    mockTitle: 'Agen Marketing, shift pagi',
    mockStatus: 'Sedang bekerja',
    mockReasoning: 'Membaca postingan pekan lalu, menyusun tiga draf untuk Anda tinjau.',
    mockToolCall: 'docs_read: Company/Voice.md',
    mockMeter: 'Token, biaya, dan waktu tercatat tiap run',
  },

  socialProof: {
    heading: 'Dibuat untuk pemilik yang kerja serba sendiri.',
    body:
      'Saga OS untuk pemilik usaha kecil dan menengah yang terlalu banyak kerja manual. Digitalkan cara bisnis berjalan, serahkan pekerjaan berulang ke staf AI, dan pantau angkanya di satu tempat, sementara setiap tindakan keluar tetap Anda yang pegang.',
    note: 'TODO: pemilik mengisi bukti nyata di sini sebelum peluncuran publik (nama pengguna awal, jumlah star repo yang nyata, atau kutipan singkat dari yang sudah mencoba). Jangan tambahkan apa pun sampai itu nyata.',
    proofPlaceholder: 'TODO: bukti sosial nyata menyusul',
  },

  agents: {
    eyebrow: 'Staf AI Anda',
    heading: 'Tim yang hadir sesuai jadwal shift-nya.',
    subhead:
      'Tiap agen punya satu pekerjaan, satu jadwal, dan engine yang menjalankannya. Chief of Staff memimpin tim dan membagi pekerjaan. Anda bisa menambah, menjeda, atau mengubah mereka dari halaman Team.',
    roster: [
      {
        name: 'Chief of Staff',
        job: 'Memimpin tim, membagi pekerjaan sesuai target Anda, dan memimpin retro mingguan.',
        shift: 'Retro tiap Jumat, rangkuman tiap Senin',
        engine: 'Claude Code',
      },
      {
        name: 'Sales',
        job: 'Memantau prospek dan deal, lalu menyusun tindak lanjut untuk Anda setujui.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
      {
        name: 'Marketing',
        job: 'Menyusun postingan dan kampanye dengan gaya bahasa Anda, lalu membawanya ke Inbox.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
      {
        name: 'Dev',
        job: 'Bekerja di folder yang Anda bagikan: install, build, test, dan mengusulkan perubahan.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
      {
        name: 'Finance',
        job: 'Menjaga KPI dan catatan tetap mutakhir, dan menandai apa yang butuh keputusan.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
      {
        name: 'Support',
        job: 'Membaca pesan, menyusun balasan, dan mengarahkan yang butuh manusia kepada Anda.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
      {
        name: 'Ops',
        job: 'Mengurus administrasi rutin dan menjaga pengetahuan perusahaan tetap terbarui.',
        shift: 'Berjalan sesuai jadwal yang Anda atur',
        engine: 'Claude Code',
      },
    ],
    shiftNote:
      'Shift adalah jadwal cron di zona waktu Anda sendiri. Tiap agen punya karakter SVG kecilnya sendiri, digambar aplikasi dari id dan pekerjaannya.',
  },

  approvalLoop: {
    eyebrow: 'Siapa yang pegang kendali',
    heading: 'Agen mengusulkan. Anda memutuskan. Gerbang menjalankannya di kode.',
    subhead:
      'Setiap tugas, usulan, pertanyaan, dan laporan lewat Saga OS. Saat agen mau melakukan sesuatu di luar aplikasi, ia mengajukan usulan. Anda menyetujui, minta revisi, atau menolak dengan catatan. Baru setelah itu teks yang disetujui berjalan.',
    steps: [
      {
        title: 'Usulkan',
        body: 'Agen menyelesaikan shift lalu mengajukan rencana langkah berikutnya sebagai usulan, lengkap dengan alasannya dan teks persis yang akan dikirim.',
      },
      {
        title: 'Putuskan',
        body: 'Anda buka Inbox. Setujui untuk menjalankannya apa adanya, minta revisi untuk mendapat perbaikan, atau tolak dengan catatan yang dibaca agen sebelum run berikutnya.',
      },
      {
        title: 'Jalankan di kode',
        body: 'Pekerjaan yang disetujui berjalan sebagai tugas eksekusi yang persis sama dengan teks yang Anda setujui. Aturannya ada di kode, bukan di prompt yang bisa diakali agen.',
      },
    ],
    policyHeading: 'Anda yang menentukan aturan per jenis tindakan.',
    policyLevels: [
      { level: 'Off', body: 'Agen sama sekali tidak bisa melakukan tindakan ini.' },
      { level: 'Ask', body: 'Agen mengusulkannya dan menunggu persetujuan Anda di Inbox.' },
      { level: 'Do and tell', body: 'Agen melakukannya lalu mengirim pemberitahuan agar Anda tahu apa yang terjadi.' },
      { level: 'Auto', body: 'Agen melakukannya tanpa bertanya. Ini Anda pilih per tindakan, secara sengaja.' },
    ],
    strictNote:
      'Strict mode aktif secara default dan membatasi setiap tindakan keluar pada Ask. Agen tidak bisa mengirim, membelanjakan, merge, deploy, atau publish sendiri.',
    guarantee:
      'Retro yang menyetel tim Anda tiap pekan tidak pernah bisa mengubah izin, anggaran, engine, atau aturan inti.',
  },

  features: {
    eyebrow: 'Yang Anda dapat',
    heading: 'Satu kantor penuh, dalam satu layar.',
    subhead:
      'Saga OS menyatukan chat dan pekerjaan, dan mencatat semua yang dibaca atau dilakukan agen saat itu terjadi.',
    items: [
      {
        title: 'Work',
        body: 'Shift berubah jadi tugas. Worker menjalankannya satu per agen, menulis checkpoint sambil jalan, dan membuat laporan di akhir.',
      },
      {
        title: 'Inbox',
        body: 'Papan berisi usulan, pertanyaan, dan peringatan. Setujui, minta revisi, atau tolak dari drawer yang bisa dibuka dari mana saja.',
      },
      {
        title: 'Policy',
        body: 'Atur off, ask, do and tell, atau auto per jenis tindakan, per agen. Strict mode menahan setiap tindakan keluar pada ask.',
      },
      {
        title: 'Chat',
        body: 'Thread utama dengan Chief of Staff, plus thread per agen, tugas, dan usulan. Balasan tampil seperti Claude: kode, tabel, dan pratinjau file.',
      },
      {
        title: 'Workspace',
        body: 'Pantau agen bekerja langsung: alasannya, tiap panggilan tool beserta input dan output-nya, sumber yang dibaca, dan meter token, biaya, serta waktu.',
      },
      {
        title: 'Docs',
        body: 'Lemari catatan Markdown bergaya Obsidian dengan wiki link, backlink, riwayat versi penuh, dan tampilan graph. Isinya folder biasa yang bisa Anda buka di Obsidian juga.',
      },
      {
        title: 'Monitor',
        body: 'Lihat 24 jam, 7 hari, atau 30 hari terakhir: token dan biaya, jumlah job selesai dan tingkat keberhasilan, apa yang menunggu Anda, dan kenapa job gagal. Tetapkan anggaran bulanan per agen dengan peringatan di 80 dan 100 persen.',
      },
    ],
  },

  integrations: {
    eyebrow: 'Engine-nya',
    heading: 'Claude yang berpikir. Claude-nya dari Anda.',
    subhead:
      'Pilih cara Saga OS terhubung ke Claude. Keduanya menjalankan agen lewat Claude Code dan tool Saga, dan keduanya mencatat tiap panggilan tool.',
    engines: [
      {
        name: 'Pool Claude Code',
        body: 'Tambahkan langganan Claude Anda dan tempatkan agen pada pool. Tiap job memakai akun yang paling lama menganggur. Saat satu akun kena batas pemakaian, job lanjut di akun lain, jadi tidak ada pekerjaan yang hilang.',
      },
      {
        name: 'Built-in Claude',
        body: 'Pakai Claude API key Anda sendiri. Saga OS memasang Claude Code dan menjalankan tiap agen dengan key Anda. Pemakaian ditagih ke key Anda dan tampil sebagai biaya nyata.',
      },
    ],
    capabilitiesLabel: 'Yang bisa dijangkau agen Anda',
    capabilities: [
      {
        title: 'Konektor MCP',
        body: 'Hubungkan MCP server mana pun lewat alamat web atau sebagai program lokal. Konektor "tanya dulu" tetap terkunci sampai Anda menyetujui permintaan. Tambahkan aplikasi sosial dan kerja lewat Composio atau Zapier.',
      },
      {
        title: 'Skills',
        body: 'Taruh file SKILL.md untuk memberi agen sebuah panduan. Skill standar berlaku di mana saja, yang lain diaktifkan per chat.',
      },
      {
        title: 'Folder bersama',
        body: 'Bagikan folder di mesin yang menjalankan Saga OS, masing-masing diatur baca saja, atau baca dan edit. Bahkan dengan hak edit, agen tidak bisa push, publish, deploy, atau menjalankan perintah merusak sendiri.',
      },
    ],
    roadmapLabel: 'Akan datang',
    roadmapNote:
      'Codex di dalam harness ada di roadmap dan belum tersedia. Saat ini engine-nya adalah Claude.',
  },

  multiCompany: {
    eyebrow: 'Lebih dari satu bisnis',
    heading: 'Jalankan setiap perusahaan Anda dari satu Saga OS.',
    body:
      'Ganti perusahaan dari atas sidebar, dan badge-nya menunjukkan apa yang menunggu di perusahaan lain. Tiap perusahaan benar-benar terpisah, jadi pekerjaan di satu tempat tidak pernah menyentuh yang lain.',
    points: [
      {
        title: 'Terpisah secara default',
        body: 'Tiap perusahaan punya agen, job, Inbox, Docs, pengetahuan, anggaran, konektor, folder bersama, dan pool Claude sendiri.',
      },
      {
        title: 'Satu login',
        body: 'Hanya sign-in Anda yang dibagi antar perusahaan. Selebihnya tetap di tempatnya masing-masing.',
      },
      {
        title: 'Datanya sendiri',
        body: 'Tiap perusahaan punya database dan vault sendiri. Dengan Postgres, Anda bisa memberi tiap perusahaan database terpisah.',
      },
    ],
  },

  howItWorks: {
    eyebrow: 'Mulai',
    heading: 'Dari kosong jadi tim yang bekerja dalam tiga langkah.',
    subhead: 'Tanpa perlu jago teknis. Wizard yang menyiapkan semuanya dari pertanyaan sederhana.',
    steps: [
      {
        title: 'Jawab wizard onboarding',
        body: 'Sembilan langkah singkat dengan contoh dan pilihan sekali ketuk mencakup bisnis, pelanggan, penawaran, target, gaya bahasa, alat, dan aturan Anda. Saga OS menulis file pengetahuan Anda, menyarankan tim dari target Anda, dan menjalankan satu job latihan agar Anda langsung melihat persetujuan di Inbox.',
      },
      {
        title: 'Agen menjalankan shift-nya',
        body: 'Tiap agen bangun saat shift-nya, mengerjakan tugas, dan mengajukan usulan beserta alasannya. Anda bisa mengikutinya langsung di Workspace.',
      },
      {
        title: 'Anda menyetujui, lalu berjalan',
        body: 'Buka Inbox, setujui yang sudah pas, minta revisi, atau tolak dengan catatan. Pekerjaan yang disetujui berjalan persis seperti teksnya, dan catatan Anda jadi pelajaran yang dibaca agen di run berikutnya.',
      },
    ],
  },

  pricing: {
    eyebrow: 'Harga',
    heading: 'Software-nya gratis. Anda hanya membayar Claude yang Anda pakai.',
    body:
      'Saga OS open-source dan di-hosting sendiri. Tidak ada paket SaaS per kursi. Anda menjalankannya di mesin atau server sendiri dan memakai Claude milik Anda, baik Claude API key maupun pool langganan Claude Code, dan membayar pemakaian itu langsung.',
    points: [
      {
        title: 'Software gratis, open-source',
        body: 'Hosting sendiri Saga OS dengan lisensi MIT. Kodenya milik Anda untuk dijalankan dan dibaca.',
      },
      {
        title: 'Pakai Claude milik sendiri',
        body: 'Gunakan Claude API key Anda, atau tambahkan langganan Claude Code ke pool. Pemakaian ditagih ke Anda, bukan ke kami.',
      },
      {
        title: 'Lihat biayanya',
        body: 'Monitor menampilkan token dan biaya per agen, dan Anda bisa menetapkan anggaran bulanan dengan peringatan sebelum agen menjeda dirinya sendiri.',
      },
    ],
    ctaPrimary: { label: 'Gabung waitlist' },
    earlyAccessNote:
      'TODO: pemilik mengonfirmasi apakah akan ada opsi hosting terkelola, dan dengan ketentuan apa, sebelum peluncuran publik. Sampai saat itu, jalur yang ditampilkan hanya hosting sendiri plus waitlist.',
  },

  faq: {
    eyebrow: 'Pertanyaan',
    heading: 'Yang ditanyakan pemilik sebelum percaya.',
    items: [
      {
        q: 'Bisakah agen mengirim, membelanjakan, atau publish tanpa saya?',
        a: 'Tidak. Strict mode aktif secara default dan menahan setiap tindakan keluar pada ask, jadi agen hanya mengusulkan dan menunggu. Agen tidak bisa mengirim, membelanjakan, merge, deploy, atau publish sendiri. Anda yang menentukan aturan per jenis tindakan dan baru mengubah tindakan tertentu jadi auto kalau Anda memang mau.',
      },
      {
        q: 'Di mana data saya tersimpan?',
        a: 'Di mesin tempat Anda menjalankan Saga OS. Ini di-hosting sendiri, dengan catatan tersimpan sebagai vault Markdown biasa yang bisa dibuka di Obsidian, serta database lokal (SQLite, atau Postgres kalau Anda mau).',
      },
      {
        q: 'Apakah saya harus jago teknis untuk memasangnya?',
        a: 'Wizard onboarding dibuat untuk yang bukan engineer: pertanyaan sederhana, contoh, dan pilihan sekali ketuk. Menjalankan server-nya memang butuh setup sekali di awal, dan tersedia opsi CLI serta Docker untuk itu.',
      },
      {
        q: 'Engine apa yang menjalankan agen?',
        a: 'Claude, baik lewat pool langganan Claude Code dengan failover otomatis saat kena batas pemakaian, maupun lewat Claude API key Anda sendiri dengan built-in Claude. Codex ada di roadmap dan belum tersedia.',
      },
      {
        q: 'Bisakah saya menjalankan lebih dari satu bisnis?',
        a: 'Bisa. Jalankan beberapa perusahaan yang benar-benar terpisah dari satu Saga OS. Masing-masing punya agen, Inbox, Docs, anggaran, konektor, dan pool Claude sendiri. Hanya login Anda yang dibagi.',
      },
      {
        q: 'Bagaimana agen belajar dari saya?',
        a: 'Tiap job rutin adalah sebuah loop. Saat Anda menolak atau minta revisi, catatan Anda jadi pelajaran yang dibaca agen sebelum run berikutnya. Tiap pekan Chief of Staff menjalankan retro dan membuat beberapa perubahan terukur, yang otomatis dibatalkan kalau hasilnya menurun.',
      },
    ],
  },

  finalCta: {
    headline: 'Berhenti jadi penghambat di bisnis Anda sendiri.',
    subtext:
      'Gabung waitlist untuk mulai menjalankan Saga OS: tim staf AI yang mengusulkan pekerjaan, dan Inbox tempat keputusan akhir tetap di tangan Anda.',
    ctaPrimary: { label: 'Gabung waitlist' },
    microcopy: 'Open-source dan di-hosting sendiri. Pakai Claude milik Anda.',
  },

  footer: {
    tagline: 'Kantor tempat Anda memimpin tim staf AI.',
    linkGroups: [
      {
        heading: 'Produk',
        links: [
          { label: 'Staf AI Anda', href: '#agents' },
          { label: 'Cara kerja', href: '#how-it-works' },
          { label: 'Harga', href: '#pricing' },
          { label: 'FAQ', href: '#faq' },
        ],
      },
    ],
    contact: {
      email: 'hello@saga.co.id',
      repo: 'TODO: tautan repositori publik untuk ditambahkan sebelum peluncuran',
      contactHeading: 'Kontak',
      repoLabel: 'GitHub',
      repoComingLabel: 'Tautan repo segera hadir',
    },
    legal: [
      { label: 'Privasi', href: '/privasi' },
      { label: 'Ketentuan', href: '/ketentuan' },
    ],
    copyright: '© 2026 Saga OS. Berlisensi MIT.',
  },

  waitlist: {
    title: 'Gabung waitlist Saga OS',
    subtitle: 'Ceritakan sedikit soal bisnis Anda, dan kami akan menghubungi saat tiba giliran Anda.',
    nameLabel: 'Nama Anda',
    namePlaceholder: 'Nama lengkap Anda',
    emailLabel: 'Email',
    emailPlaceholder: 'anda@contoh.com',
    companyLabel: 'Perusahaan',
    companyPlaceholder: 'Perusahaan atau proyek Anda',
    interestLabel: 'Anda mencari apa?',
    selectPlaceholder: 'Pilih salah satu...',
    interestOptions: [
      { value: 'self-host', label: 'Saya mau hosting sendiri' },
      { value: 'managed', label: 'Saya lebih suka opsi terkelola' },
      { value: 'exploring', label: 'Masih melihat-lihat dulu' },
    ],
    submitLabel: 'Gabung waitlist',
    submitSending: 'Mengirim...',
    successTitle: 'Anda sudah masuk daftar.',
    successMessage: 'Anda sudah masuk daftar. Kami akan menghubungi Anda.',
    closeLabel: 'Tutup',
    errorMessage: 'Ada yang tidak beres. Coba lagi, atau email ke hello@saga.co.id.',
  },
};
