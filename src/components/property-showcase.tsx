import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getFeaturedProperties, getProperties } from "@/lib/properties";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export async function PropertyShowcase() {
  const [properties, featured] = await Promise.all([
    getProperties(),
    getFeaturedProperties(6),
  ]);

  const cards =
    featured.length > 0
      ? [
          ...featured,
          ...properties.filter(
            (property) =>
              !featured.some(
                (featuredProperty) => featuredProperty.id === property.id,
              ),
          ),
        ].slice(0, 6)
      : properties.slice(0, 6);

  return (
    <section className="bg-[#eff7fb] py-24 sm:py-28">
      <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <SectionHeading
            eyebrow="Immobilien"
            title="Ausgewählte Immobilien an der Costa del Sol."
            description="Ein erster Einblick in Häuser, Wohnungen und Neubauprojekte aus dem aktuellen CDS-IMMO Angebot – ausgewählt für unterschiedliche Lagen, Lebensmodelle und Zielbilder."
            wide
          />
        </Reveal>

        <div className="mt-14 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
          {cards.map((property, index) => (
            <Reveal key={property.id} delay={index * 0.05}>
              <PropertyCard property={property} variant="homepage" />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.15} className="mt-12 flex">
          <Link
            href="/immobilien"
            className="inline-flex items-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.24)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
          >
            Zur Immobilienübersicht
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Reveal>
      </div>
    </section>
  );
}
