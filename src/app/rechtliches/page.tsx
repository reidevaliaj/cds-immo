import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { PageHero } from "@/components/page-hero";
import {
  imprintSections,
  privacySections,
} from "@/data/legal-content";

export default function RechtlichesPage() {
  return (
    <main className="overflow-hidden">
      <PageHero
        eyebrow="Rechtliches"
        title="Datenschutz, Impressum und wichtige Hinweise klar zusammengefasst."
        description="Die folgenden Angaben basieren auf den bereitgestellten Texten des Kunden und wurden gestalterisch in die Website-Struktur eingeordnet."
        highlights={["Datenschutz", "Impressum", "Rechtliche Hinweise"]}
      />

      <section id="datenschutz" className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Datenschutz"
              title="Datenschutzerklärung"
              description="Der Schutz personenbezogener Daten wird nach den übermittelten Vorgaben dargestellt. Die Inhalte wurden nicht inhaltlich verändert, sondern nur sauber gegliedert."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {privacySections.map((section, index) => (
              <Reveal key={section.id} delay={index * 0.03}>
                <article className="h-full rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <h2 className="text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-[#5f6e79]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section
        id="impressum"
        className="relative overflow-hidden bg-[#183F55] py-24 text-[#f6efe5] sm:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Impressum"
              title="Impressum und rechtliche Hinweise"
              description="Auch die Angaben zum Impressum und zu rechtlichen Hinweisen wurden aus den bereitgestellten Unterlagen übernommen und an die neue Seitengestaltung angepasst."
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {imprintSections.map((section, index) => (
              <Reveal key={section.id} delay={index * 0.03}>
                <article className="h-full rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm">
                  <h2 className="text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#f6efe5]">
                    {section.title}
                  </h2>
                  <div className="mt-5 space-y-4 text-base leading-8 text-[#d7e2e8]">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
