import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { PropertyLocationSummary } from "@/lib/properties";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type TopLocationsProps = {
  locations: PropertyLocationSummary[];
};

export function TopLocations({ locations }: TopLocationsProps) {
  if (locations.length === 0) {
    return null;
  }

  return (
    <section className="relative overflow-hidden bg-[#173747] py-24 text-[#f6efe5] sm:py-28">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a3c4f_0%,#173747_50%,#112b3a_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Top-Lagen"
            title="Orte an der Costa del Sol, in denen aktuelle Angebote und Lebensmodelle besonders gut zusammenkommen."
            description="Marbella, La Cala de Mijas, Benalmádena und weitere Lagen zeigen, wo CDS-IMMO aktuell besonders präsent ist – und wohin viele Anfragen führen."
            inverted
            wide
          />
        </Reveal>

        <div className="mt-16 grid gap-5 lg:grid-cols-2">
          {locations.map((location, index) => (
            <Reveal key={location.displayCity} delay={index * 0.05}>
              <Link
                href={location.href}
                className="group relative block min-h-[26rem] overflow-hidden rounded-[2rem] border border-white/10"
              >
                <Image
                  src={location.image}
                  alt={`Immobilien und Umgebung in ${location.displayCity}`}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover transition duration-700 group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,27,0.06)_0%,rgba(8,19,27,0.2)_34%,rgba(8,19,27,0.82)_100%)]" />

                <div className="absolute inset-x-0 top-0 flex items-start justify-between gap-3 p-6">
                  <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f2d5a3] backdrop-blur-sm">
                    Top-Standort
                  </span>
                  <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/90 backdrop-blur-sm">
                    {location.count} Immobilien
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 sm:p-8">
                  <h3 className="max-w-xl text-4xl leading-[0.94] font-semibold tracking-[-0.04em] text-white sm:text-5xl">
                    {location.displayCity}
                  </h3>
                  <p className="mt-4 max-w-xl text-base leading-8 text-[#d7e2e8]">
                    {location.description}
                  </p>
                  <span className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition group-hover:bg-white/16">
                    Immobilien in {location.displayCity} ansehen
                    <ArrowRight className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
