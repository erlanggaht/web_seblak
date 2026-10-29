"use client";

import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-5 sm:px-6 lg:px-8">
        <a
          href="#beranda"
          aria-label="Warung Seblak, beranda"
          className="text-xl font-extrabold tracking-tight text-cream sm:text-2xl"
        >
          warung seblak<span className="text-cream/50">.</span>
        </a>

        <nav
          aria-label="Navigasi utama"
          className="hidden items-center gap-8 text-sm font-semibold text-cream/90 sm:flex"
        >
          <a
            href="#menu"
            className="underline-offset-4 hover:underline transition-opacity hover:opacity-80"
          >
            Menu
          </a>
          <a
            href="#cerita"
            className="underline-offset-4 hover:underline transition-opacity hover:opacity-80"
          >
            Tentang
          </a>
          <a
            href="#galeri"
            className="underline-offset-4 hover:underline transition-opacity hover:opacity-80"
          >
            Galeri
          </a>
          <a
            href="#menu"
            className="rounded-full bg-cream px-5 py-2 font-bold text-brand transition-colors hover:bg-white"
          >
            Lihat Menu
          </a>
        </nav>

        <button
          type="button"
          className="flex flex-col gap-1.5 p-2 sm:hidden text-cream"
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
            <a href="#menu" onClick={() => setOpen(false)}>
              Menu
            </a>
            <a href="#cerita" onClick={() => setOpen(false)}>
              Tentang
            </a>
            <a href="#galeri" onClick={() => setOpen(false)}>
              Galeri
            </a>
            <a
              href="#menu"
              onClick={() => setOpen(false)}
              className="mt-2 inline-block rounded-full bg-cream px-5 py-2.5 text-center font-bold text-brand"
            >
              Lihat Menu
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
