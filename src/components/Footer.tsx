import { SITE_CONFIG } from "@/data/content";

export default function Footer() {
  return (
    <footer className="mx-4 flex flex-wrap items-center justify-between gap-6 border-t border-ink/25 py-7 sm:mx-6 lg:px-8">
      <p className="py-2 text-xl font-extrabold tracking-tight capitalize">
        {SITE_CONFIG.name.toLowerCase()}.
      </p>
    </footer>
  );
}
