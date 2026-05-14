import { PropertyBrowser } from "@/components/property-browser";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getProperties } from "@/lib/properties";

type ImmobilienPageProps = {
  searchParams: Promise<{
    ort?: string;
  }>;
};

export default async function ImmobilienPage({
  searchParams,
}: ImmobilienPageProps) {
  const properties = await getProperties();
  const { ort = "" } = await searchParams;

  return (
    <main className="overflow-hidden bg-[#f8fcfe]">
      <section className="pb-24 pt-34 sm:pb-28 sm:pt-38">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Immobilien"
              title="Aktuelle Häuser, Wohnungen und Neubauprojekte an der Costa del Sol – jetzt auch mit ausgewählten Angeboten an der Costa Blanca."
              description="Die Suche bleibt bewusst einfach: erst alle Immobilien sehen und dann nach Objektgruppe, Ort, Region oder Schlagwort filtern."
              wide
            />
          </Reveal>

          <div className="mt-14">
            <PropertyBrowser properties={properties} initialQuery={ort} />
          </div>
        </div>
      </section>
    </main>
  );
}
