import type { Metadata } from "next";
import type { ReactNode } from "react";
import { DM_Sans } from "next/font/google";
import "./globals.css";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Warung Seblak | Ceker, Bakso & Tulang",
  description:
    "Kenali menu seblak ceker, bakso, dan tulang dengan kuah gurih khas kencur dari Warung Seblak.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="id"
      className={`${dmSans.variable} scroll-smooth motion-reduce:scroll-auto`}
    >
      <body className="bg-cream font-sans text-ink antialiased selection:bg-brand selection:text-white [&_a:focus-visible]:outline-2 [&_a:focus-visible]:outline-offset-4 [&_a:focus-visible]:outline-ink">
        {children}
      </body>
    </html>
  );
}
