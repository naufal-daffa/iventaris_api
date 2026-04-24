# Inventaris Barang API

Panduan setup dan langkah pembuatan API inventaris barang dengan Node.js, Express, Sequelize, dan MySQL.

## Prasyarat

- Node.js versi 18+ atau setara
- MySQL berjalan dan dapat diakses
- Git (opsional untuk clone repository)

## Langkah 1: Clone repository

```bash
git clone <repo-url>
cd iventaris_barang_api
```

Jika sudah berada di folder project, lanjut ke langkah berikutnya.

## Langkah 2: Install dependency

```bash
npm install
```

## Langkah 3: Buat file `.env`

Di root proyek, buat file `.env` dengan konfigurasi database:

```env
DB_USERNAME=your_mysql_username
DB_PASSWORD=your_mysql_password
DB_NAME_DEVELOPMENT=your_database_name
DB_HOST=localhost
DB_PORT=3306
DB_DIALECT=mysql
```

Pastikan nilai-nilai ini sesuai dengan setup MySQL lokal.

## Langkah 4: Konfigurasi database

File konfigurasi database berada di `config/config.js`.

`config/config.js` membaca variabel dari `.env` sehingga cukup mengatur file `.env` saja.

Jika menggunakan environment lain, atur `NODE_ENV` ke `development` atau `production` sesuai kebutuhan.

## Langkah 5: Buat database MySQL

Sebelum migrasi, buat database MySQL sesuai nama di `DB_NAME_DEVELOPMENT`.

Contoh SQL:

```sql
CREATE DATABASE your_database_name;
```

## Langkah 6: Jalankan migrasi

Project menggunakan Sequelize CLI untuk migrasi.

```bash
npx sequelize-cli db:migrate
```

Jika struktur tabel belum dibuat, perintah ini akan membuat tabel berdasarkan file migrasi di folder `migrations/`.

## Langkah 7: Jalankan aplikasi

```bash
npm run dev
```

Server akan berjalan pada:

```
http://localhost:3000
```

## Struktur dasar project

- `app.js` - file utama server Express
- `config/config.js` - konfigurasi database Sequelize
- `models/` - definisi model Sequelize
- `migrations/` - definisi migrasi database

## Cara tambah fitur baru

1. Tambahkan model baru di `models/` jika diperlukan.
2. Tambahkan migrasi baru di `migrations/`.
3. Tambahkan route baru di `app.js` atau buat folder `routes/`.
4. Jalankan ulang server setelah menyimpan perubahan.

## Catatan penting

- Server saat ini hanya memiliki endpoint dasar `GET /` untuk pengecekan.
- Semua konfigurasi koneksi database dikelola oleh `.env` dan `config/config.js`.
- Gunakan `npm run dev` untuk pengembangan karena `nodemon` akan memantau perubahan file.
