# Pengembangan Media Ajar Bahasa Arab Interaktif Berbasis Web

Media pembelajaran interaktif ini merupakan luaran instrumen digital yang dirancang secara khusus untuk memfasilitasi penguasaan empat keterampilan berbahasa Arab (*maharah istima’*, *kalam*, *qira’ah*, dan *kitabah*). Platform ini mengintegrasikan pendekatan kontekstual berbasis teknologi dengan antarmuka visual yang terstruktur guna menstimulasi motivasi intrinsik serta mengoptimalkan hasil belajar peserta didik.

Proyek ini dikembangkan sebagai bagian dari riset akademis pada jenjang strata dua (S2) untuk mengeksplorasi efektivitas pemanfaatan *web-based learning* dalam pendidikan bahasa Arab di era digital.

---

## Arsitektur Sistem dan Detail Pengembangan

Sistem pembelajaran ini dibangun menggunakan ekosistem pengembangan modern yang berbasis pada arsitektur *Single Page Application* (SPA). Berikut adalah rincian tumpukan teknologi (*tech stack*) dan struktur rekayasa perangkat lunaknya:

### 1. Teknologi Utama (*Tech Stack*)
*   **React.js:** Digunakan sebagai pustaka inti (*core library*) untuk membangun komponen antarmuka pengguna (*User Interface*) yang reaktif dan dinamis.
*   **Vite:** Diimplementasikan sebagai *build tool* dan *module bundler* untuk menghasilkan proses kompilasi (*Hot Module Replacement*) yang sangat cepat selama fase pengembangan.
*   **Tailwind CSS:** Digunakan untuk penataan gaya (*styling*) berbasis *utility-class*, memungkinkan implementasi desain *glassmorphism* secara efisien dan responsif.
*   **Framer Motion:** Pustaka animasi yang diintegrasikan untuk memberikan transisi visual yang halus pada setiap pergantian materi, guna meminimalisir disorientasi kognitif peserta didik.

### 2. Struktur Direktori dan Komponen Moduler
Pengembangan antarmuka dibagi menjadi beberapa komponen independen (*modular components*) untuk memudahkan pemeliharaan sistem (*system maintainability*). Struktur hierarki utama proyek ini meliputi:

*   **Direktori `/public`:** Tempat penyimpanan aset statis terpusat, meliputi fail multimedia (*multimedia files*) yang diintegrasikan secara lokal seperti `toleransi.mp4`, `video-analisis.mp4`, `taawun.mp3`, serta elemen grafis (`icons.png`, `icons.svg`).
*   **Direktori `/src/components`:** Memuat seluruh modul antarmuka pembelajaran, di antaranya:
    *   `Hero.jsx`: Komponen beranda (*landing area*) yang menyajikan sapaan dan pengantar materi.
    *   `CapaianKompetensi.jsx`: Modul yang memaparkan tujuan dan indikator pembelajaran.
    *   `Materi.jsx` & `Kosakata.jsx`: Komponen inti untuk transmisi pengetahuan gramatikal dan leksikal (*mufradat*).
    *   `VideoSection.jsx`: Penampang media untuk integrasi materi audio-visual (*istima'*).
    *   `Quiz.jsx`: Instrumen evaluasi formatif berbasis interaktif.
    *   `Biografi.jsx`: Modul informasi profil peneliti/pengembang.
    *   `BottomNav.jsx`: Sistem navigasi utama berbasis seluler (*mobile-first navigation bar*).
    *   `BackgroundAnimated.jsx` & `ThreeScene.jsx`: Komponen pengelola efek visual latar belakang dan elemen spasial guna meningkatkan daya tarik visual lingkungan belajar.

---

## Fitur Utama Penelitian

*   **Integrasi Empat Keterampilan Berbahasa:** Menyajikan materi komprehensif yang mencakup latihan mendengar, berbicara, membaca, dan menulis secara proporsional.
*   **Pendekatan Kontekstual:** Materi disusun berdasarkan situasi dunia nyata untuk memudahkan pemahaman peserta didik terhadap penggunaan bahasa Arab fungsional.
*   **Desain Antarmuka (*User Interface*) Ergonomis:** Dirancang menggunakan prinsip *glassmorphism* dan hierarki visual untuk mengurangi beban kognitif (*cognitive load*) peserta didik saat berinteraksi dengan media.
*   **Aksesibilitas Multi-Platform:** Dibangun menggunakan teknologi *responsive web design* agar instrumen pembelajaran dapat diakses secara optimal melalui perangkat seluler maupun desktop.

---

## Spesifikasi dan Panduan Instalasi

Untuk melakukan replikasi atau menjalankan proyek ini pada lingkungan lokal (*localhost*), ikuti langkah-langkah komputasi berikut:

1.  Pastikan *runtime environment* **Node.js** telah terinstal di perangkat keras (komputer/laptop) Anda.
2.  Buka terminal/konsol (*command line*) pada direktori utama (root) proyek `web-bahasa-arab`.
3.  Jalankan perintah `npm install` untuk mengunduh seluruh dependensi pustaka yang dibutuhkan (berdasarkan konfigurasi pada `package.json`).
4.  Eksekusi perintah `npm run dev` untuk menginisiasi server pengembangan lokal (*local development server*).
5.  Akses tautan yang muncul pada terminal (umumnya `http://localhost:5173`) melalui peramban web (*web browser*) untuk mulai melakukan tinjauan antarmuka.

---

## Profil Peneliti

Aplikasi media ajar ini disusun dan dikembangkan oleh:

*   **Nama:** Vina Roisatul Muna
*   **Program Studi:** Magister (S2) Pendidikan Bahasa Arab
*   **Tempat, Tanggal Lahir:** Kediri, 22 Mei 2002
*   **Alamat Domisili:** Dusun Kradenan, Desa Manyaran, Kec. Banyakan, Kab. Kediri

**Kontak dan Korespondensi:**
*   **Email:** vinnarm2205.02@gmail.com
*   **Telepon/WhatsApp:** 085607616322
*   **Instagram:** [@vinnaroisa_fuady](https://instagram.com/vinnaroisa_fuady)

*Hak Cipta © 2026 Vina Roisatul Muna. Seluruh hak cipta dilindungi.*