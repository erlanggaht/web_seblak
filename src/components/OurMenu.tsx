"use client";

import { useState } from "react";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { MENU_CATEGORIES, MENU_ITEMS } from "@/data/content";

type Category = (typeof MENU_CATEGORIES)[number]["key"];

export default function OurMenu() {
  const [activeTab, setActiveTab] = useState<Category>("kuah");

  const filteredItems = MENU_ITEMS.filter((item) => item.category === activeTab);

  return (
    <section
      id="menu"
      aria-labelledby="ourmenu-title"
      className="scroll-mt-10 bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Header */}
        <FadeIn className="mx-auto max-w-2xl text-center">
          <h2
            id="ourmenu-title"
            className="text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Menu Kami
          </h2>
          <p className="mt-3 text-base leading-relaxed text-muted sm:text-lg">
            Pilihan seblak kuah hangat berbumbu kencur atau seblak kering renyah gurih.
          </p>
        </FadeIn>

        {/* Tab Filters */}
        <div className="mt-8 flex justify-center gap-2 sm:gap-3">
          {MENU_CATEGORIES.map((cat) => {
            const isActive = activeTab === cat.key;
            return (
              <button
                key={cat.key}
                type="button"
                onClick={() => setActiveTab(cat.key)}
                className={`rounded-full px-5 py-2 text-xs font-bold transition-colors sm:px-6 sm:py-2.5 sm:text-sm ${
                  isActive
                    ? "bg-ink text-white"
                    : "border border-ink/20 bg-transparent text-ink hover:border-ink/50"
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* 3 Columns Square Grid */}
        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 lg:gap-10">
          {filteredItems.map((item, i) => (
            <FadeIn
              key={item.id}
              delay={(i % 3) * 100}
              className="flex flex-col text-left"
            >
              <div className="relative aspect-square w-full overflow-hidden border border-ink/20 bg-ink/5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 420px"
                  className="object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>

              <div className="mt-4 flex items-center gap-2">
                <span className="rounded-full bg-ink/5 px-2.5 py-0.5 text-[11px] font-semibold tracking-wide text-muted uppercase">
                  {item.category === "kuah" ? "Kuah" : "Kering"}
                </span>
              </div>

              <h3 className="mt-1.5 text-xl font-bold tracking-tight text-ink sm:text-2xl">
                {item.name}
              </h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted sm:text-base">
                {item.description}
              </p>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
