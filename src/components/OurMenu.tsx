import Image from "next/image";
import FadeIn from "@/components/FadeIn";

const menuItems = [
  {
    id: 1,
    name: "Seblak Original",
    price: "Rp 15.000",
    image: "/images/seblak-food.jpg",
    description:
      "Kerupuk aci kenyal, makaroni, telur orak-arik, dan kuah kencur pedas gurih.",
  },
  {
    id: 2,
    name: "Seblak Ceker",
    price: "Rp 18.000",
    image: "/images/seblak(1).jpg",
    description:
      "Ceker ayam empuk bumbu meresap berpadu kuah merah rempah pedas.",
  },
  {
    id: 3,
    name: "Seblak Prasmanan",
    price: "Mulai Rp 12.000",
    image: "/images/Seblak prasmanan.jpg",
    description:
      "Bebas pilih aneka isian: cuanki lidah, dumpling cheese, sosis, dan bakso.",
  },
  {
    id: 4,
    name: "Seblak Setan",
    price: "Rp 20.000",
    image: "/images/Seblak Setan.jpg",
    description:
      "Kuah cabai rawit merah segar melimpah dengan aroma kencur nampol.",
  },
  {
    id: 5,
    name: "Seblak Bakso & Sosis",
    price: "Rp 17.000",
    image: "/images/seblak(2).jpg",
    description:
      "Perpaduan bakso sapi gurih dan sosis sapi pilihan dalam kuah rempah khas.",
  },
  {
    id: 6,
    name: "Seblak Seafood",
    price: "Rp 22.000",
    image: "/images/seblak(3).jpg",
    description:
      "Olahan seafood crabstick, fish roll, dan dumpling dalam balutan kuah hangat.",
  },
];

export default function OurMenu() {
  return (
    <section
      id="menu"
      aria-labelledby="ourmenu-title"
      className="scroll-mt-10 bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2
            id="ourmenu-title"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Menu Kami
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            Berbagai menu seblak lezat yang bisa kamu nikmati setiap hari.
          </p>
        </FadeIn>

        {/* Circular Menu Items */}
        <div className="mt-14 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-16">
          {menuItems.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={(i % 3) * 120}
              className="flex flex-col items-center text-center"
            >
              {/* Gambar Rounded Full Tanpa Card / Background */}
              <div className="relative size-44 overflow-hidden rounded-full border-2 border-brand/20 shadow-md sm:size-52 lg:size-56">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 176px, (max-width: 1024px) 208px, 224px"
                  className="object-cover"
                />
              </div>

              {/* Title, Description, Harga */}
              <h3 className="mt-5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {item.name}
              </h3>
              <p className="mt-2 max-w-xs text-sm leading-relaxed text-muted">
                {item.description}
              </p>
              <span className="mt-3 text-base font-extrabold text-brand sm:text-lg">
                {item.price}
              </span>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
