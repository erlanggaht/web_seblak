# Warung Seblak

Landing page satu halaman menggunakan Next.js App Router, TypeScript strict, dan Tailwind CSS. Tidak membutuhkan Firebase, database, akun, atau environment variable.

## Menjalankan

Gunakan Node.js 22 atau lebih baru.

```sh
npm ci
npm run dev
```

Buka http://localhost:3000.

## Pemeriksaan

```sh
npm run lint
npm run typecheck
npm run format:check
npm run build
```

`npm run format` merapikan kode sekaligus mengurutkan class Tailwind. Build menghasilkan situs statis di `out/`. Untuk memakai `npm start`, hapus `output: "export"` di `next.config.ts` lalu build kembali.

## Struktur

- `src/app/`: route, layout, dan token tema.
- `src/components/`: komponen section dengan nama PascalCase.
- `public/images/`: foto asli project.

File khusus Next.js mengikuti konvensi framework (`page.tsx`, `layout.tsx`). Tampilan ditulis menggunakan class Tailwind. CSS global hanya berisi import Tailwind dan token tema. Font DM Sans disimpan lokal di `src/assets/fonts/`, beserta lisensi OFL, tanpa permintaan font ke layanan eksternal. Arah visual dan alasan desain dicatat di `DESIGN.md`.

Konten menu bisa diedit di `src/components/Menu.tsx`. Alamat, jam buka, kontak, harga, dan tautan pemesanan belum dicantumkan karena belum tersedia informasi yang terverifikasi.
