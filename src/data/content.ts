export interface Dish {
  name: string;
  src: string;
}

export interface MenuItem {
  id: number;
  name: string;
  category: "kuah" | "kering";
  image: string;
  description: string;
}

export interface SecretItem {
  title: string;
  desc: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface PartnerLogo {
  name: string;
  src: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const SITE_CONFIG = {
  name: "Warung Seblak Bandung",
  shortName: "WSB",
  phone: "0888 1234 5678",
  phoneTel: "tel:088812345678",
  address: {
    street: "Jl. Braga No. 88",
    detail: "Sumur Bandung, Kota Bandung, Jawa Barat 40111",
    note: 'Patokan: Tepat di seberang minimarket Braga, plang merah "Warung Seblak".',
    mapsUrl: "https://maps.google.com/?q=Jl.+Braga+No.88+Bandung",
    embedUrl:
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3960.852404173872!2d107.607421!3d-6.917464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6398252477f%3A0x146a1f93d3e23c7b!2sJl.%20Braga%2C%20Kota%20Bandung%2C%20Jawa%20Barat!5e0!3m2!1sid!2sid!4v1710000000000!5m2!1sid!2sid",
  },
  hours: {
    days: "Senin – Minggu",
    time: "11.00 – 22.00 WIB",
    note: "Buka setiap hari tanpa libur. Pesanan terakhir 21.30 WIB.",
  },
};

export const NAV_LINKS: NavLink[] = [
  { label: "Menu", href: "#menu" },
  { label: "Lokasi", href: "#lokasi" },
];

export const HERO_DISHES: Dish[] = [
  { name: "Seblak Original", src: "/images/seblak-food.jpg" },
  { name: "Seblak Ceker", src: "/images/seblak(1).jpg" },
  { name: "Seblak Prasmanan", src: "/images/Seblak prasmanan.jpg" },
  { name: "Seblak Kering", src: "/images/seblak-kering.jpg" },
];

export const MENU_CATEGORIES = [
  { key: "kuah", label: "Seblak Kuah" },
  { key: "kering", label: "Seblak Kering" },
] as const;

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 1,
    name: "Seblak Original",
    category: "kuah",
    image: "/images/seblak-food.jpg",
    description:
      "Kerupuk aci kenyal, makaroni, telur orak-arik, dan kuah kencur pedas gurih.",
  },
  {
    id: 2,
    name: "Seblak Ceker",
    category: "kuah",
    image: "/images/seblak(1).jpg",
    description:
      "Ceker ayam empuk bumbu meresap berpadu kuah merah rempah pedas.",
  },
  {
    id: 3,
    name: "Seblak Prasmanan",
    category: "kuah",
    image: "/images/Seblak prasmanan.jpg",
    description:
      "Bebas pilih aneka isian: cuanki lidah, dumpling cheese, sosis, dan bakso.",
  },
  {
    id: 4,
    name: "Seblak Setan",
    category: "kuah",
    image: "/images/Seblak Setan.jpg",
    description:
      "Kuah cabai rawit merah segar melimpah dengan aroma kencur nampol.",
  },
  {
    id: 5,
    name: "Seblak Bakso & Sosis",
    category: "kuah",
    image: "/images/seblak(2).jpg",
    description:
      "Perpaduan bakso sapi gurih dan sosis sapi pilihan dalam kuah rempah khas.",
  },
  {
    id: 6,
    name: "Seblak Seafood",
    category: "kuah",
    image: "/images/seblak(3).jpg",
    description:
      "Olahan seafood crabstick, fish roll, dan dumpling dalam balutan kuah hangat.",
  },
  {
    id: 7,
    name: "Seblak Kering Pedas Daun Jeruk",
    category: "kering",
    image: "/images/seblak-kering.jpg",
    description:
      "Kerupuk renyah dengan taburan bumbu cabai pedas dan aroma segar daun jeruk.",
  },
  {
    id: 8,
    name: "Seblak Kering Gurih Balado",
    category: "kering",
    image: "/images/seblak-kering2.jpg",
    description:
      "Sensasi kriuk pedas manis gurih berpadu rempah balado yang meresap rata.",
  },
  {
    id: 9,
    name: "Seblak Kering Cabe Merah Ekstra",
    category: "kering",
    image: "/images/seblak-kering3.jpg",
    description:
      "Tekstur garing tahan lama dengan tingkat kepedasan maksimal khas bubuk cabai merah.",
  },
];

export const SECRET_RECIPES: SecretItem[] = [
  {
    title: "Kencur Segar Pilihan",
    desc: "Dipipis setiap hari langsung bersama bawang merah & putih, bukan bubuk instan.",
  },
  {
    title: "Cabai Rawit Merah Murni",
    desc: "Tingkat kepedasan berasal dari cabai rawit merah segar yang digiling kasar.",
  },
  {
    title: "Kerupuk Kenyal Matang Pas",
    desc: "Direbus dengan teknik khusus agar teksturnya kenyal lembut tanpa rasa tepung mentah.",
  },
];

export const FAQS: FAQItem[] = [
  {
    q: "Apakah bisa pesan seblak yang sama sekali tidak pedas?",
    a: "Tentu bisa! Kami menyediakan pilihan Level 0 (tanpa cabai rawit sama sekali). Kamu tetap bisa menikmati gurihnya kuah kaldu rempah kencur yang harum tanpa rasa pedas.",
  },
  {
    q: "Kalau dibungkus bawa pulang (take away), apakah kuahnya bisa dipisah?",
    a: "Bisa banget. Untuk menjaga kerupuk dan aneka topping tetap kenyal dan tidak lembek di perjalanan, kamu bisa minta kuah dan isian dipisah saat memesan di kasir.",
  },
  {
    q: "Seblak keringnya tahan berapa lama?",
    a: "Seblak kering kami dibuat dengan kemasan rapat dan kedap udara. Dalam suhu ruangan yang sejuk dan kering, seblak kering tahan renyah hingga 1–2 bulan tanpa bahan pengawet.",
  },
  {
    q: "Metode pembayaran apa saja yang diterima?",
    a: "Kami melayani pembayaran tunai (cash) serta pembayaran digital nontunai melalui QRIS (BCA, Mandiri, BRI, GoPay, OVO, ShopeePay, dan DANA).",
  },
  {
    q: "Apakah tersedia tempat untuk makan di tempat (dine-in)?",
    a: "Ya, tersedia area makan yang bersih dan nyaman, lengkap dengan tempat parkir untuk motor maupun mobil di area depan warung.",
  },
];

export const DELIVERY_PARTNERS: PartnerLogo[] = [
  { name: "GoFood", src: "/images/logo/gofood.svg" },
  { name: "GrabFood", src: "/images/logo/grabfood.svg" },
  { name: "ShopeeFood", src: "/images/logo/shoopefood.svg" },
];
