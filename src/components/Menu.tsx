import Image from "next/image";
import ceker from "../../public/images/ceker.jpg";
import bakso from "../../public/images/baso.jpg";
import tulang from "../../public/images/tulang.jpg";

const menu = [
  {
    name: "Seblak Ceker",
    image: ceker,
    description: "Ceker ayam, kerupuk, dan kuah seblak berbumbu kencur.",
    topping: "Ceker ayam",
  },
  {
    name: "Seblak Bakso",
    image: bakso,
    description: "Bakso dan kerupuk kenyal dalam kuah seblak pedas gurih.",
    topping: "Bakso",
  },
  {
    name: "Seblak Tulang",
    image: tulang,
    description:
      "Tulang ayam dengan kuah seblak. Buat kamu yang suka makan pelan-pelan.",
    topping: "Tulang ayam",
  },
];

export default function Menu() {
  return (
    <section
      id="menu"
      aria-labelledby="menu-title"
      className="scroll-mt-5 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4 lg:mb-12">
        <h2
          id="menu-title"
          className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
        >
          Menu seblak
        </h2>
        <p className="max-w-sm text-base leading-7 text-muted">
          Mulai dari topping favoritmu.
        </p>
      </div>
      <div className="border-t border-ink">
        {menu.map((item) => (
          <article
            key={item.name}
            className="grid grid-cols-[100px_minmax(0,1fr)] items-center gap-x-5 gap-y-4 border-b border-ink/20 py-6 sm:grid-cols-[160px_minmax(0,1fr)] sm:gap-x-8 lg:grid-cols-[200px_minmax(0,1fr)_minmax(0,0.85fr)] lg:gap-x-12 lg:py-8"
          >
            <div className="relative aspect-square overflow-hidden bg-cream sm:aspect-4/3">
              <Image
                src={item.image}
                alt={item.name}
                fill
                sizes="(max-width: 639px) 100px, (max-width: 1023px) 160px, 200px"
                className="object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                {item.name}
              </h3>
              <p className="mt-3 text-sm text-muted">Topping: {item.topping}</p>
            </div>
            <p className="col-span-2 max-w-md text-sm leading-7 text-muted sm:col-start-2 sm:text-base lg:col-span-1 lg:col-start-3">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}
