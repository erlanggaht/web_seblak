import Image from "next/image";
import { SITE_CONFIG, DELIVERY_PARTNERS } from "@/data/content";

export default function StoreInfo() {
  const { address, hours } = SITE_CONFIG;

  return (
    <section
      id="lokasi"
      aria-labelledby="lokasi-title"
      className="scroll-mt-5 px-4 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      {/* Header Baris Klasik */}
      <div className="mb-10 flex flex-wrap items-center justify-between gap-4 border-b border-ink/20 pb-6 lg:mb-14">
        <div>
          <h2
            id="lokasi-title"
            className="mt-1 text-2xl font-bold tracking-tight text-ink sm:text-3xl lg:text-4xl"
          >
            Lokasi &amp; Jam Buka
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-muted sm:text-base">
          Makan di tempat atau pesan online lewat aplikasi favoritmu.
        </p>
      </div>

      {/* Grid Konten: Info & Peta Berdampingan */}
      <div className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-14">
        {/* Kolom Informasi Teks */}
        <div className="flex flex-col justify-between space-y-8 lg:col-span-5">
          <div className="space-y-6">
            <div>
              <h3 className="text-sm font-bold text-muted uppercase">Alamat</h3>
              <p className="mt-2 text-xl font-bold text-ink sm:text-2xl">
                {address.street}
              </p>
              <p className="mt-1 text-sm text-ink/80 sm:text-base">
                {address.detail}
              </p>
              <p className="mt-2 text-xs text-muted">{address.note}</p>
            </div>

            <div className="h-px bg-ink/15" />

            <div>
              <h3 className="text-sm font-bold text-muted uppercase">
                Jam Buka
              </h3>
              <p className="mt-2 text-lg font-bold text-ink sm:text-xl">
                {hours.days}: {hours.time}
              </p>
              <p className="mt-1 text-xs text-muted">{hours.note}</p>
            </div>

            <div className="h-px bg-ink/15" />

            {/* Order Online Mitra Ojek Online (Logo Transparan) */}
            <div>
              <h3 className="text-sm font-bold text-muted uppercase">
                Pesan Online
              </h3>
              <p className="mt-1 text-xs text-muted">
                Tersedia di merchant resmi pesan antar online:
              </p>
              <div className="mt-4 flex flex-wrap items-center gap-6 sm:gap-8">
                {DELIVERY_PARTNERS.map((partner) => (
                  <div key={partner.name} className="relative h-6 w-24">
                    <Image
                      src={partner.src}
                      alt={partner.name}
                      fill
                      sizes="96px"
                      className="object-contain object-left transition-opacity hover:opacity-75"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <a
              href={address.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-12 items-center gap-3 rounded-full bg-ink px-6 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-brand"
            >
              Buka di Google Maps
            </a>
          </div>
        </div>

        {/* Kolom Peta */}
        <div className="lg:col-span-7">
          <div className="relative aspect-4/3 w-full overflow-hidden border border-ink sm:aspect-10/4 lg:h-full lg:min-h-100">
            <iframe
              title={`Peta Lokasi ${SITE_CONFIG.name}`}
              src={address.embedUrl}
              className="size-full border-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
