import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG, HERO_DISHES } from "@/data/content";

export default function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-svh flex-col items-center justify-center overflow-hidden bg-brand px-4 pt-24 pb-32 sm:pt-28 sm:pb-48 lg:px-8"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-light)_0%,var(--color-brand)_60%,var(--color-brand-dark)_100%)] opacity-70"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-5xl flex-col items-center text-center">
        <h1
          id="hero-title"
          className="mt-5 text-[clamp(2.5rem,5.5vw,4.5rem)] leading-[1.08] font-bold tracking-tight text-cream"
        >
          {SITE_CONFIG.name}
        </h1>

        <p className="mt-4 max-w-lg text-base leading-relaxed font-medium text-cream sm:text-lg">
          Kerupuk kenyal dan kuah berbumbu kencur, dipadukan dengan isian yang
          kamu suka. Pilih seblak ceker, bakso, atau tulang untuk menemani waktu
          makanmu.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3.5">
          <Link
            href={SITE_CONFIG.phoneTel}
            className="inline-flex items-center gap-3 rounded-full border border-cream/50 bg-transparent px-5 py-2.5 text-sm font-bold text-white transition-colors hover:bg-white hover:text-brand"
          >
            {SITE_CONFIG.phone}
            <span aria-hidden="true" className="text-base leading-none">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="size-4 shrink-0"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </span>
          </Link>
        </div>

        <div className="mt-10 grid w-full max-w-4xl grid-cols-2 gap-4 sm:mt-12 sm:grid-cols-4 sm:gap-6 lg:max-w-5xl lg:gap-8">
          {HERO_DISHES.map((dish, i) => (
            <div key={dish.name} className="flex flex-col items-center">
              <div className="relative aspect-square w-full overflow-hidden border-2 border-cream/40 shadow-lg select-none">
                <Image
                  src={dish.src}
                  alt={dish.name}
                  fill
                  priority={i < 2}
                  sizes="(max-width: 640px) 45vw, (max-width: 1024px) 220px, 260px"
                  className="object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm font-bold text-cream sm:text-base">
                {dish.name}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Repeating Flame Border */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 h-16 overflow-hidden sm:h-20 md:h-24 lg:h-30"
        style={{
          backgroundImage: "url('/images/flame-border.svg')",
          backgroundRepeat: "repeat-x",
          backgroundPosition: "bottom left",
          backgroundSize: "auto 100%",
        }}
      />
    </section>
  );
}
