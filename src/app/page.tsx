import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import OurMenu from "@/components/OurMenu";
import FAQ from "@/components/FAQ";
import StoreInfo from "@/components/StoreInfo";
import Link from "next/link";

export default function Home() {
  return (
    <div id="beranda" className="relative">
      <Link
        href="#konten"
        className="sr-only z-50 bg-cream p-4 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Lewati ke konten
      </Link>
      <Header />
      <main id="konten">
        <Hero />
        <OurMenu />
        <Story />
        <FAQ />
        <StoreInfo />
      </main>
      <Footer />
    </div>
  );
}
