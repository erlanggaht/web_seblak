import Image from "next/image";

const dishes = [
  {
    name: "Seblak Original",
    src: "/images/seblak-food.jpg",
  },
  {
    name: "Seblak Ceker",
    src: "/images/seblak(1).jpg",
  },
  {
    name: "Seblak Prasmanan",
    src: "/images/Seblak prasmanan.jpg",
  },
  {
    name: "Seblak Setan",
    src: "/images/Seblak Setan.jpg",
  },
];

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-brand px-4 pt-28 pb-20 sm:px-6 lg:px-8"
    >
      {/* Efek hangat/panas background */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-light)_0%,var(--color-brand)_60%,var(--color-brand-dark)_100%)] opacity-70"
      />

      {/* Kontainer Utama */}
      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <div className="mb-6 flex items-center justify-center gap-2.5 sm:gap-4 md:hidden">
          <div className="relative size-16 translate-y-3 overflow-hidden rounded-full border-2 border-cream/40 shadow-lg sm:size-20">
            <Image
              src={dishes[0].src}
              alt={dishes[0].name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="relative size-16 -translate-y-1.5 overflow-hidden rounded-full border-2 border-cream/40 shadow-lg sm:size-20">
            <Image
              src={dishes[1].src}
              alt={dishes[1].name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="relative size-16 -translate-y-1.5 overflow-hidden rounded-full border-2 border-cream/40 shadow-lg sm:size-20">
            <Image
              src={dishes[2].src}
              alt={dishes[2].name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
          <div className="relative size-16 translate-y-3 overflow-hidden rounded-full border-2 border-cream/40 shadow-lg sm:size-20">
            <Image
              src={dishes[3].src}
              alt={dishes[3].name}
              fill
              sizes="80px"
              className="object-cover"
            />
          </div>
        </div>

        <div className="relative flex w-full items-center justify-center py-4 md:py-8 lg:py-12">
          <div className="pointer-events-none absolute top-1/2 -left-4 z-10 hidden -translate-y-1/2 md:block lg:-left-10 xl:-left-16">
            <div className="pointer-events-auto relative size-28 overflow-hidden rounded-full border-3 border-cream/35 bg-brand-dark shadow-2xl transition-transform duration-300 hover:scale-105 sm:size-32 md:size-36 lg:size-44 xl:size-48">
              <Image
                src={dishes[0].src}
                alt={dishes[0].name}
                fill
                priority
                sizes="(max-width: 1024px) 144px, 192px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute top-[-2rem] left-[14%] z-10 hidden -translate-x-1/2 md:block lg:top-[-3rem] lg:left-[16%]">
            <div className="pointer-events-auto relative size-24 overflow-hidden rounded-full border-3 border-cream/35 bg-brand-dark shadow-2xl transition-transform duration-300 hover:scale-105 sm:size-28 md:size-32 lg:size-40 xl:size-44">
              <Image
                src={dishes[1].src}
                alt={dishes[1].name}
                fill
                priority
                sizes="(max-width: 1024px) 128px, 176px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute top-[-2rem] right-[14%] z-10 hidden translate-x-1/2 md:block lg:top-[-3rem] lg:right-[16%]">
            <div className="pointer-events-auto relative size-24 overflow-hidden rounded-full border-3 border-cream/35 bg-brand-dark shadow-2xl transition-transform duration-300 hover:scale-105 sm:size-28 md:size-32 lg:size-40 xl:size-44">
              <Image
                src={dishes[2].src}
                alt={dishes[2].name}
                fill
                priority
                sizes="(max-width: 1024px) 128px, 176px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="pointer-events-none absolute top-1/2 -right-4 z-10 hidden -translate-y-1/2 md:block lg:-right-10 xl:-right-16">
            <div className="pointer-events-auto relative size-28 overflow-hidden rounded-full border-3 border-cream/35 bg-brand-dark shadow-2xl transition-transform duration-300 hover:scale-105 sm:size-32 md:size-36 lg:size-44 xl:size-48">
              <Image
                src={dishes[3].src}
                alt={dishes[3].name}
                fill
                priority
                sizes="(max-width: 1024px) 144px, 192px"
                className="object-cover"
              />
            </div>
          </div>

          <h1
            id="hero-title"
            className="relative z-10 max-w-xl text-[clamp(2.75rem,6.5vw,5rem)] leading-[1.08] font-bold tracking-[-0.04em] text-cream"
          >
            Seblak pilihan kamu.
          </h1>
        </div>

        {/* Deskripsi */}
        <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed text-cream/85 sm:text-base">
          Kerupuk kenyal dan kuah berbumbu kencur, dipadukan dengan isian yang
          kamu suka. Pilih seblak ceker, bakso, atau tulang untuk menemani waktu
          makanmu.
        </p>

        <div className="mt-8">
          <a
            href="#menu"
            className="inline-flex items-center gap-4 rounded-full bg-cream px-7 py-3 text-sm font-bold text-brand transition-colors hover:bg-white"
          >
            Lihat menu seblak
            <span aria-hidden="true" className="text-base leading-none">
              &darr;
            </span>
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 overflow-hidden leading-none"
      >
        <div className="h-16 w-full bg-gradient-to-t from-orange-600/30 via-red-600/10 to-transparent sm:h-24" />

        <svg
          viewBox="0 0 1440 140"
          preserveAspectRatio="none"
          className="relative -mb-1 block h-14 w-full sm:h-20 md:h-24 lg:h-28"
        >
          <path
            d="M0,140 L0,70 Q45,20 80,75 Q115,120 150,55 Q185,-5 220,65 Q255,120 290,50 Q325,-15 360,60 Q400,125 440,55 Q485,-10 530,65 Q575,130 620,50 Q665,-15 710,60 Q755,125 800,55 Q845,-10 890,65 Q935,130 980,50 Q1025,-20 1070,58 Q1115,125 1160,52 Q1205,-15 1250,62 Q1295,125 1335,55 Q1385,15 1440,50 L1440,140 Z"
            fill="#f97316"
            fillOpacity="0.4"
          />

          <path
            d="M0,140 L0,90 Q35,45 70,95 Q105,135 140,75 Q175,20 210,85 Q245,135 280,70 Q320,15 355,80 Q390,135 435,70 Q475,15 520,85 Q565,138 610,68 Q655,5 700,80 Q745,138 790,70 Q835,15 880,85 Q925,138 970,68 Q1015,5 1060,75 Q1105,135 1150,70 Q1195,10 1240,80 Q1285,135 1325,68 Q1375,30 1440,65 L1440,140 Z"
            fill="#fbbf24"
            fillOpacity="0.5"
          />

          <path
            d="M0,140 L0,105 Q30,70 60,108 Q95,140 130,90 Q165,40 200,100 Q235,140 270,88 Q310,35 345,95 Q380,140 425,85 Q465,35 510,100 Q555,142 600,85 Q645,30 690,95 Q735,142 780,85 Q825,35 870,100 Q915,142 960,85 Q1005,25 1050,90 Q1095,140 1140,85 Q1185,30 1230,95 Q1275,140 1315,82 Q1365,50 1440,85 L1440,140 Z"
            fill="#ef4444"
            fillOpacity="0.6"
          />
        </svg>
      </div>
    </section>
  );
}
