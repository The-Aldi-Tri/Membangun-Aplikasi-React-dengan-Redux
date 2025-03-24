# Membangun-Aplikasi-React-dengan-Redux

Proyek ini adalah submission pertama pada course **Menjadi React Web Developer Expert** di [Dicoding](dicoding.com).

## Tujuan Akhir

Buatlah aplikasi React bertemakan “Aplikasi Forum Diskusi” yang memanfaatkan API dari [Dicoding Forum API](https://forum-api.dicoding.dev/v1/). Contoh aplikasi: https://dicoding-forum-app.vercel.app/

## Kriteria Wajib

1. Fungsionalitas Aplikasi

    - Terdapat cara untuk mendaftar akun.
    - Terdapat cara untuk login akun.
    - Menampilkan daftar thread.
    - Ketika item thread dipilih, menampilkan detail thread beserta komentar di dalamnya.
    - Pengguna dapat membuat thread.
    - Pengguna dapat membuat komentar di dalam sebuah thread.
    - Menampilkan Loading bar ketika memuat data dari API.

    Catatan penting.

    1. Perihal authorization dalam mengakses resource threads kami bebaskan. Anda boleh mengharuskan pengguna untuk login ataupun tidak ketika ingin melihat threads. Namun, dalam berinteraksi mengubah data, seperti membuat thread atau komentar, pengguna wajib terotentikasi.
    2. Item thread pada halaman daftar thread yang ditampilkan harus mengandung informasi berikut ini.
        - Judul dari thread.
        - Potongan dari body thread (opsional).
        - Waktu pembuatan thread.
        - Jumlah komentar.
        - Informasi pembuat thread:
            - Nama
            - Avatar (opsional)
    3. Halaman detail thread harus mengandung informasi berikut ini.
        - Judul dari thread.
        - Body dari thread.
        - Waktu pembuatan thread.
        - Informasi pembuat thread:
            - Nama
            - Avatar
        - Komentar pada thread tersebut. Minimal informasi yang harus ditampilkan adalah:
            - Konten dari komentar.
            - Waktu pembuatan komentar.
            - Informasi pembuat komentar:
                - Nama
                - Avatar (opsional)

2. Bugs Highlighting

    - Menggunakan ESLint pada source code aplikasi. Indikasinya adalah terdapat berkas konfigurasi ESLint pada proyek.
    - Menerapkan salah satu Code Convention berikut.
        - [Dicoding Academy JavaScript Style Guide](https://github.com/dicodingacademy/javascript-style-guide).
        - [AirBnB JavaScript Style Guide](https://github.com/airbnb/javascript).
        - [Google JavaScript Style Guide](https://google.github.io/styleguide/jsguide.html).
        - [StandardJS Style Guide](https://standardjs.com/).
    - Tidak ada indikasi error yang ditampilkan ESLint.
    - Menggunakan React Strict Mode.

3. Arsitektur Aplikasi

    - Hampir seluruh state aplikasi (terutama yang bersumber dari API) disimpan pada Redux Store. Form input atau controlled component diperbolehkan untuk mengelola state-nya sendiri.
    - Tidak ada pemanggilan REST API yang dilakukan di dalam lifecycle atau efek pada komponen.
    - Memisahkan kode UI dengan State di folder yang terpisah.
    - React component bersifat modular dan reusable.

## Kriteria Saran

1. Fitur Votes pada Thread dan Komentar
    - Menyediakan tombol yang dapat digunakan untuk votes pada thread dan komentar.
    - Menampilkan indikasi pada tombol bila pengguna sudah mem-vote thread dan komentar. Contohnya, mengubah warna tombol dari abu-abu menjadi merah bila pengguna sudah up-vote/down-vote.
    - Mengedepankan User Experience dengan menerapkan Optimistically Apply Actions.
    - Menampilkan jumlah votes pada thread dan komentar.

2. Menampilkan Leaderboard
    - Terdapat halaman untuk menampilkan leaderboard.
    - Setiap item leaderboard, harus menampilkan informasi berikut ini.
        - Nama pengguna.
        - Avatar pengguna.
        - Score.

3. Filter Daftar Thread Berdasarkan Kategori
    - Terdapat fitur untuk mem-filter item thread yang ditampilkan pada halaman daftar threads.

    Catatan: API tidak menyediakan endpoint untuk filter daftar threads, sehingga fitur ini dibangun murni dari sisi Front-End dengan memanipulasi state aplikasi.

## Instruksi Pengerjaan

Ikuti instruksi berikut agar lebih mudah dalam mengerjakan submission.

- Buat Rencana yang Matang

    1. Buat sketsa dari aplikasi yang akan dibuat

        Dalam mengerjakan proyek ini, Anda perlu menentukan visual berdasarkan fungsionalitas aplikasi. Salah satu cara terbaik adalah dengan menggambar tiap halaman aplikasi menggunakan kertas dan pensil. Hal ini akan sangat membantu Anda untuk memberikan ide informasi yang harus ada pada setiap halaman aplikasi.

        Selain dengan kertas dan pensil, Anda juga bisa memanfaatkan aplikasi mock-up gratis seperti Figma.

    2. Pecah view menjadi hierarki komponen

        Setelah menggambar tiap halaman aplikasi, Anda bisa tandai yang bisa dijadikan komponen terpisah dengan memberi garis kotak. Ini akan memudahkan Anda dalam menentukan hierarki komponennya.

    3. Tentukan Action yang dapat terjadi pada aplikasi

        Anda perlu menganalisis action yang mungkin terjadi pada aplikasi terhadap sebuah data. Contohnya, menetapkan nilai state dari API atau menambah dan memodifikasi state. Ini akan memudahkan Anda dalam menentukkan state dan action yang harus dibuat pada aplikasi.

- Fase Coding

    1. Buatlah folder baru untuk memulai proyek React. Kami sarankan Anda untuk menggunakan create-react-app agar tidak perlu repot menyiapakan module bundler dan lain sebagainya.
    2. Pasanglah dependencies yang sudah pasti dibutuhkan seperti redux atau redux toolkit, react-redux, dan lainnya. Jangan dulu pasang dependencies yang sekiranya belum Anda butuhkan.
    3. Buatlah kode yang berhubungan dengan state terlebih dulu, seperti action dan reducer. Kemudian buatlah Redux store dan daftarkan seluruh reducer yang sudah dibuat.
    4. Uji Redux Store dan pastikan bekerja dengan baik. Anda bisa mengeceknya via console terlebih dulu.
    5. Buatlah komponen dan pastikan store berfungsi dengan baik ketika digunakan pada komponen.
    6. Tambahkan react-router jika Anda sudah membutuhkannya.
    7. Selesaikan aplikasi berdasarkan kriteria yang ada.

## Penilaian

Submission akan dinilai oleh reviewer dalam skala 1-5. Untuk mendapatkan nilai tinggi, Anda bisa menerapkan beberapa saran berikut.

- Menerapkan Saran 1: Fitur Votes pada Thread dan Komentar.
- Menerapkan Saran 2: Menampilkan Leaderboard.
- Menerapkan Saran 3: Filter Daftar Thread Berdasarkan Kategori.
- Saran lainnya:
    - Aplikasi yang Anda bangun mudah untuk digunakan. Contohnya, tidak membuat pengguna bingung dan menggunakan warna yang mudah dalam membaca teks.
    - Aplikasi yang Anda bangun memiliki tampilkan yang menarik.

Berikut adalah detail penilaian submission:

&starf;:
Semua ketentuan wajib terpenuhi, tetapi terdapat indikasi kecurangan dalam mengerjakan submission.

&starf;&starf;:
Semua ketentuan wajib terpenuhi, tetapi terdapat kekurangan pada penulisan kode. Seperti tidak menerapkan modularization atau gaya penulisan tidak konsisten.

&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi, namun tidak terdapat improvisasi atau persyaratan opsional yang dipenuhi.

&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan minimal dua poin saran di atas.

&starf;&starf;&starf;&starf;&starf;:
Semua ketentuan wajib terpenuhi dan menerapkan seluruh saran di atas.

## Ketentuan Berkas Submission
- Berkas submission yang dikirim merupakan folder proyek dari Aplikasi Forum Diskusi dalam bentuk ZIP. 
- Folder yang dikirim merupakan proyek React yang di-render menggunakan react-dom bukan react-native.
- Hapus folder node_modules ke dalam berkas ZIP. Karena akan membuat berkas ZIP memiliki ukuran yang besar dan fitur code review tidak dapat berfungsi.
- Anda boleh menambahkan berkas aset seperti gambar selama aset tersebut digunakan pada proyek Anda.

## Submission Anda akan Ditolak Bila
- Kriteria utama tidak terpenuhi.
- Ketentuan berkas submission tidak terpenuhi.
- Menggunakan framework atau UI library selain React.
- Mengirimkan kode JavaScript yang telah di-minify.
- Melakukan kecurangan seperti tindakan plagiasi.