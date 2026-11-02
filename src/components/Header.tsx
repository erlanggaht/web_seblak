"use client";

import Link from "next/link";
import { useState } from "react";
import { SITE_CONFIG, NAV_LINKS } from "@/data/content";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <Link
          href="#beranda"
          aria-label={`${SITE_CONFIG.name}, beranda`}
          className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
        >
          {SITE_CONFIG.shortName}
        </Link>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 text-sm font-semibold text-cream/90 sm:flex"
        >
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="underline-offset-4 transition-opacity hover:underline hover:opacity-80"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#menu"
            className="rounded-full bg-cream px-5 py-2 font-bold text-brand transition-colors hover:bg-white"
          >
            Lihat Menu
          </Link>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 text-cream sm:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${open ? "translate-y-2 rotate-45" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-opacity ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-0.5 w-6 bg-current transition-transform ${open ? "-translate-y-2 -rotate-45" : ""}`}
          />
        </button>
      </div>

      {open && (
        <div className="border-t border-cream/10 bg-brand-dark px-6 py-5 sm:hidden">
          <nav className="flex flex-col gap-4 text-base font-semibold text-cream">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full bg-cream px-5 py-2.5 text-center font-bold text-brand"
            >
              Lihat Menu
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
