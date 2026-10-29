import Image from "next/image";
import seblak from "../../public/images/art1.jpg";

export default function Story() {
  return (
    <section
      id="cerita"
      aria-labelledby="story-title"
      className="grid scroll-mt-5 gap-8 bg-[#f2eee7] px-4 py-10 sm:px-6 md:grid-cols-2 md:items-center md:gap-12 lg:gap-20 lg:px-8 lg:py-12"
    >
      <div className="py-3 lg:py-10">
        <h2
          id="story-title"
          className="max-w-2xl text-4xl leading-[1.1] font-bold tracking-[-0.045em] sm:text-5xl lg:text-6xl"
        >
          Kerupuk, kencur,
          <br />
          dan selera kamu.
        </h2>
        <p className="mt-7 max-w-xl text-base leading-8 text-muted">
          Seblak punya rasa yang mudah dikenali: kerupuk yang kenyal, aroma
          kencur, dan kuah pedas gurih. Di Warung Seblak, kamu bisa mengenalnya
          lewat pilihan ceker, bakso, atau tulang.
        </p>
        <p className="mt-5 max-w-xl text-base leading-8 text-muted">
          Lihat menunya, pilih isian yang kamu suka.
        </p>
        <a
          href="#menu"
          className="mt-7 inline-flex min-h-11 items-center font-semibold underline decoration-ink/40 underline-offset-8 hover:decoration-ink"
        >
          Lihat pilihan topping
        </a>
      </div>
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={seblak}
          alt="Sajian seblak dengan beragam isian dan kuah merah"
          fill
          sizes="(max-width: 767px) 100vw, 50vw"
          className="object-cover"
        />
      </div>
    </section>
  );
}
