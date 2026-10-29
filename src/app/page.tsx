import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
export default function Home() {
  return (
    <div id="beranda" className="relative">
      <a
        href="#konten"
        className="sr-only z-50 bg-cream p-4 focus:not-sr-only focus:fixed focus:top-4 focus:left-4"
      >
        Lewati ke konten
      </a>
      <Header />
      <main id="konten">
        <Hero />
      </main>
      <Footer />
    </div>
  );
}
