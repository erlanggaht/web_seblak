import Link from "next/link";

export default function Footer() {
  return (
    <footer className="mx-4 flex flex-wrap items-center justify-between gap-6 border-t border-ink/25 py-7 sm:mx-6 lg:px-8">
      <Link
        href="#beranda"
        className="py-2 text-xl font-extrabold tracking-tight"
      >
        warung seblak.
      </Link>
      <Link
        href="#beranda"
        className="inline-flex min-h-11 items-center text-sm underline-offset-4 hover:underline"
      >
        Kembali ke atas
      </Link>
    </footer>
  );
}
