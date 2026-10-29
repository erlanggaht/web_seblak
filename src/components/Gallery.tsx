import Image from "next/image";
import first from "../../public/images/art2.jpg";
import second from "../../public/images/art3.jpg";

export default function Gallery() {
  return (
    <section
      id="galeri"
      aria-labelledby="gallery-title"
      className="scroll-mt-5 px-4 pt-16 pb-12 sm:px-6 lg:px-8 lg:pt-24"
    >
      <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
        <h2
          id="gallery-title"
          className="text-4xl font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
        >
          Seporsi seblak.
        </h2>
        <p className="text-base text-muted">Lihat lebih dekat.</p>
      </div>
      <div className="grid gap-4 sm:gap-6 md:grid-cols-[1.35fr_1fr]">
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/10]">
            <Image
              src={first}
              alt="Seporsi seblak dengan berbagai topping"
              fill
              sizes="(max-width: 767px) 100vw, 57vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Aneka isian seblak.
          </figcaption>
        </figure>
        <figure>
          <div className="relative aspect-[4/3] overflow-hidden md:aspect-[16/13.5]">
            <Image
              src={second}
              alt="Sajian seblak kuah berbumbu"
              fill
              sizes="(max-width: 767px) 100vw, 43vw"
              className="object-cover"
            />
          </div>
          <figcaption className="mt-3 text-sm text-muted">
            Kuah dan bumbu seblak.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
