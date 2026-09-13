# PBKK Mandiri Tugas

Aplikasi profil akademis statis menggunakan Laravel + Inertia.js + React. Dibuat untuk tugas mandiri mata kuliah Pemrograman Berbasis Kerangka Kerja (PBKK) — Teknik Informatika ITS.

## Rute yang Tersedia

| URL | Keterangan |
|-----|------------|
| `/` | Halaman home |
| `/mahasiswa/{nrp}` | Profil mahasiswa by NRP (10 digit) |
| `/agent/{tema?}` | Platform Agentic AI, tema opsional |
| `/hitung-ipk/{ip1}/{ip2}` | Kalkulator rata-rata IPK |
| `/dashboard/mahasiswa/{nrp}` | Sama, prefix `/dashboard` |
| `/dashboard/agent/{tema?}` | Sama, prefix `/dashboard` |
| `/dashboard/hitung-ipk/{ip1}/{ip2}` | Sama, prefix `/dashboard` |
| `/*` | Fallback 404 |

## Setup

### Prasyarat

- PHP >= 8.2
- Composer
- Node.js >= 18

### Langkah

```bash
# 1. Clone repo
git clone https://github.com/praisethefools/pbkk-mandiri-tugas.git
cd pbkk-mandiri-tugas

# 2. Install dependencies
composer install
npm install

# 3. Buat file environment
cp .env.example .env
php artisan key:generate

# 4. Jalankan migrasi database (SQLite, otomatis dibuat)
php artisan migrate

# 5. Jalankan dev server (dua terminal terpisah)
php artisan serve
npm run dev
```
