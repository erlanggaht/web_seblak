# Arah desain Warung Seblak

## Arahan pemilik

- Pertahankan oranye dari project awal.
- Gunakan panduan anti-slop sebagai acuan desain.
- Margin kiri dan kanan dekat tepi layar, tetap ada sedikit jarak.
- Landing page terlihat profesional dan luas.

## Keputusan implementasi

- Oranye `#ffa500` kembali menjadi bidang utama hero untuk mempertahankan identitas awal warung.
- Teks arang `#25221e` di atas oranye menjaga keterbacaan; putih dipakai hanya pada tombol arang.
- Margin 16 px di ponsel, 24 px di tablet, dan 32 px di desktop tanpa pembatas lebar konten.
- Arial tebal dipakai untuk judul seperti tulisan menu warung, dengan bentuk sederhana yang jelas dibaca.
- Foto produk asli menjadi bukti visual; tidak menambah ilustrasi, ulasan, statistik, atau informasi usaha fiktif.
- Menu memakai daftar horizontal dengan foto dan keterangan topping agar pilihan mudah dibandingkan.
- Hero, daftar menu, bagian tentang, dan galeri memiliki komposisi berbeda sesuai jenis konten.
- Tema terang mendukung warna oranye asli dan foto makanan; tidak memerlukan toggle tema untuk landing page ini.
- Interaksi hanya tautan antarbagian dan hover; tidak ada animasi masuk atau gerakan berulang.

ENERGY 3 / RHYTHM 2 / MOTION 1.

Referensi: https://github.com/miqdadbadjuber/anti-slop

## Verifikasi revisi

- Hard Gate PASS: tidak ada klaim statistik, ulasan, atau tautan fiktif; semua sembilan tautan mengarah ke elemen yang ada. Konten statis tanpa fetch atau form tidak memerlukan state pemuatan data. Rasio kontras teks terendah 5,79:1.
- Purpose Gate PASS: oranye berasal dari arahan pemilik; font, margin, foto, daftar menu, dan interaksi memiliki alasan yang tercatat di atas. Tidak memakai badge, glow, gradient, bayangan, atau ikon dekoratif.
- Liveliness PASS: ENERGY 3 ditunjukkan melalui hero oranye dan judul tebal; RHYTHM 2 melalui perbedaan komposisi hero, menu, tentang, dan galeri; MOTION 1 hanya hover dan scroll dengan dukungan reduced motion.
- Quality PASS: lint, TypeScript, format, dan build produksi berhasil. Browser tidak mencatat error atau warning. Lebar 320, 390, 768, dan 1280 px tidak memiliki overflow horizontal.

### Pemeriksaan tautan di browser

- Menu dan Lihat menu seblak membuka `#menu`.
- Tentang membuka `#cerita`.
- Lihat pilihan topping membuka `#menu`.
- Galeri membuka `#galeri` dan foto termuat.
- Tautan nama warung di header dan footer membuka `#beranda`.
- Kembali ke atas membuka `#beranda`.
- Lewati ke konten dapat diaktifkan dengan keyboard dan membuka `#konten`.
