"use client";

import { useState } from "react";
import FadeIn from "@/components/FadeIn";
import { FAQS } from "@/data/content";

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="scroll-mt-5 bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-5xl">
        {/* Header */}
        <FadeIn className="text-center">
          <h2
            id="faq-title"
            className="mt-2 text-3xl font-extrabold tracking-tight text-ink sm:text-4xl lg:text-5xl"
          >
            Pertanyaan yang Sering Diajukan
          </h2>
          <p className="mx-auto mt-3 max-w-lg text-sm text-muted sm:text-base">
            Informasi penting seputar sajian, pesanan, dan kunjungan ke Warung
            Seblak.
          </p>
        </FadeIn>

        {/* List Pertanyaan Accordion */}
        <div className="mt-12 divide-y divide-ink/15 border-y border-ink/15">
          {FAQS.map((faq, i) => {
            const isOpen = openIdx === i;
            return (
              <div key={faq.q} className="py-5">
                <button
                  type="button"
                  onClick={() => toggle(i)}
                  className="flex w-full items-start justify-between gap-4 text-left font-bold text-ink sm:text-lg"
                  aria-expanded={isOpen}
                >
                  <span className="leading-snug">{faq.q}</span>
                  <span
                    className={`shrink-0 text-xl font-light text-muted transition-transform duration-200 ${
                      isOpen ? "rotate-45 text-brand" : ""
                    }`}
                    aria-hidden="true"
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <p className="mt-3 text-sm leading-relaxed text-muted sm:text-base">
                    {faq.a}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
