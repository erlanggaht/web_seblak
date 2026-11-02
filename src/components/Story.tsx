import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { SECRET_RECIPES } from "@/data/content";

export default function Story() {
  return (
    <section
      id="cerita"
      aria-labelledby="story-title"
      className="relative isolate scroll-mt-5 overflow-hidden bg-brand pt-20 pb-28 text-cream sm:pt-24 sm:pb-36 lg:pt-28 lg:pb-44"
    >
      {/* Efek radial hangat selaras dengan Hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,var(--color-brand-light)_0%,var(--color-brand)_60%,var(--color-brand-dark)_100%)] opacity-70"
      />

      {/* Asset Dekoratif: Stamp Cap Tradisional & Garis Rempah Halus */}
      <svg
        aria-hidden="true"
        viewBox="0 0 400 400"
        className="pointer-events-none absolute -top-16 -left-16 size-80 text-cream/5 select-none sm:size-96"
        fill="currentColor"
      >
        <circle cx="200" cy="200" r="180" stroke="currentColor" strokeWidth="2" fill="none" strokeDasharray="6 6" />
        <circle cx="200" cy="200" r="150" stroke="currentColor" strokeWidth="1.5" fill="none" />
        <path d="M200 40 L200 80 M200 320 L200 360 M40 200 L80 200 M320 200 L360 200" stroke="currentColor" strokeWidth="2" />
        <path d="M200 130 C160 130 140 170 140 200 C140 240 170 270 200 270 C230 270 260 240 260 200 C260 170 240 130 200 130 Z" fill="none" stroke="currentColor" strokeWidth="2" />
      </svg>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 md:grid-cols-2 md:gap-14 lg:gap-20 lg:px-8">
        {/* Teks Cerita & Karakter Rasa */}
        <FadeIn className="py-2">
          <h2
            id="story-title"
            className="mt-2 text-3xl font-extrabold tracking-tight text-cream sm:text-4xl lg:text-5xl"
          >
            Rahasia Rasa Warung
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-cream/90 sm:text-base">
            Bagi kami, seblak bukan cuma soal pedas yang membakar lidah, tapi
            ada aroma kencur segar dan gurih kaldu yang menyatu di setiap
            seruputan.
          </p>

          <div className="mt-6 space-y-4 border-l-2 border-cream/40 pl-4 text-xs text-cream/85 sm:text-sm">
            {SECRET_RECIPES.map((recipe) => (
              <div key={recipe.title}>
                <p className="font-bold text-cream">{recipe.title}</p>
                <p className="mt-0.5 text-cream/75">{recipe.desc}</p>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Foto Sajian Nyata */}
        <FadeIn delay={150}>
          <div className="relative aspect-4/3 w-full overflow-hidden bg-black/10 shadow-lg sm:aspect-12/11">
            <Image
              src="/images/seblak(3).jpg"
              alt="Racikan bahan dan kuah seblak segar khas Bandung"
              fill
              sizes="(max-width: 768px) 100vw, 620px"
              className="object-cover"
            />
          </div>
        </FadeIn>
      </div>

      {/* Asset Divider Gelombang Kuah */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 z-10 w-full overflow-hidden leading-none select-none"
      >
        <svg
          viewBox="0 0 1440 110"
          preserveAspectRatio="none"
          className="relative -mb-[1px] block h-14 w-full sm:h-20 md:h-24 lg:h-28"
        >
          <path
            d="M0,70 C180,110 320,30 500,65 C680,100 820,25 1000,60 C1180,95 1320,40 1440,65 L1440,110 L0,110 Z"
            fill="#c02400"
            fillOpacity="0.45"
          />
          <path
            d="M0,82 C160,40 320,105 490,68 C660,30 840,95 1010,58 C1170,22 1310,80 1440,55 L1440,110 L0,110 Z"
            fill="#fffdf9"
          />
        </svg>
      </div>
    </section>
  );
}
