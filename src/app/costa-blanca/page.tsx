import costaBlancaHeroImage from "@/assets/costa-blanca.jpg";
import { PropertyCard } from "@/components/property-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { siteSettings } from "@/data/site-content";
import { getProperties, normalizePropertySearchValue } from "@/lib/properties";
import {
  ArrowRight,
  Building2,
  Check,
  MapPinned,
  ShieldCheck,
  SunMedium,
} from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Costa Blanca",
  description:
    "Ausgewählte Immobilien an der Costa Blanca mit deutschsprachiger Begleitung für Käufer, Auswanderer und Interessenten aus Deutschland.",
};

const keyReasons = [
  {
    title: "Mehr Auswahl am Mittelmeer",
    text: "Die Costa Blanca bietet Käufern eine starke Küstenregion mit vielseitigen Wohnlagen, attraktiven Orten und guten Möglichkeiten für Zweitwohnsitz, Auswandern oder Investition.",
    icon: Building2,
  },
  {
    title: "Ruhige Begleitung statt Suchchaos",
    text: "Auch hier bleibt die Suche klar strukturiert: passende Immobilien, klare Einordnung und deutschsprachige Begleitung bei den nächsten Schritten.",
    icon: ShieldCheck,
  },
  {
    title: "Ganzjährig attraktiv",
    text: "Sonne, Küstenorte, gute Infrastruktur und eine starke Mischung aus Alltag, Zweitwohnsitz und Langzeitperspektive machen die Region interessant.",
    icon: SunMedium,
  },
];

const costaBlancaHighlights = [
  "Längere Küstenlinie mit bekannten Orten wie Benidorm, Altea, Calpe, Jávea oder Dénia",
  "Spannend für Käufer, die Meer, Alltagstauglichkeit und unterschiedliche Preisniveaus vergleichen möchten",
  "Geeignet für Zweitwohnsitz, Ruhestand, längere Aufenthalte oder eine alternative Suchregion in Spanien",
];

const buyerScenarios = [
  "Wenn Sie bewusst eine mediterrane Küstenregion mit guter Infrastruktur und vielseitigen Wohnlagen suchen",
  "Wenn Preis, Lage oder Lebensstil an der Costa Blanca besser zu Ihrem persönlichen Plan passen",
  "Wenn Sie bereits wissen, dass Alicante, Benidorm, Altea, Calpe oder Dénia für Sie interessant sein könnten",
];

export default async function CostaBlancaPage() {
  const properties = await getProperties();
  const costaBlancaProperties = properties.filter(
    (property) =>
      normalizePropertySearchValue(property.region) ===
      normalizePropertySearchValue("Costa Blanca"),
  );

  return (
    <main className="overflow-hidden bg-[#f8fcfe]">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#dfeff6] text-white">
        <Image
          src={costaBlancaHeroImage}
          alt="Panorama der Costa Blanca mit Strand, Stadt und Mittelmeer"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(11,34,48,0.78)_0%,rgba(11,34,48,0.7)_22%,rgba(11,34,48,0.44)_48%,rgba(11,34,48,0.18)_72%,rgba(11,34,48,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,17,26,0.14)_0%,rgba(8,26,39,0.08)_42%,rgba(248,252,254,0.18)_72%,#f8fcfe_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Costa Blanca
              </span>
            </Reveal>

            <Reveal delay={0.05} className="max-w-3xl">
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.04em] text-balance text-white sm:text-[3.8rem] lg:text-[4.8rem]">
                Von Deutschland an die Costa Blanca – ohne Unsicherheit.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-lg leading-8 text-[#eef5f8] sm:text-[1.18rem]">
                Jetzt auch ausgewählte Immobilien an der Costa Blanca
                entdecken.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="max-w-2xl">
              <p className="mt-5 text-base leading-8 text-[#dce8ed] sm:text-[1.06rem]">
                Für Käufer, die an der Costa Blanca suchen möchten, entsteht
                hier eine klare Möglichkeit am Mittelmeer – mit
                deutschsprachiger Begleitung, ruhiger Einordnung und einem
                strukturierten Weg zu den passenden Immobilien.
              </p>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="#immobilien-costa-blanca"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] sm:px-7 sm:py-4"
              >
                Immobilien ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/kontakt?thema=Costa Blanca"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/16 sm:px-7 sm:py-4"
              >
                Anfrage zur Costa Blanca
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider
            fill="rgba(255,255,255,0.1)"
            midFill="rgba(255,255,255,0.16)"
            topFill="rgba(255,255,255,0.22)"
            className="h-28 md:h-32"
          />
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Costa Blanca"
              title="Eine starke Küstenregion für Käufer, die Sonne, Meer und einen klaren Neustart in Spanien suchen."
              description="Die Costa Blanca verbindet mediterranes Lebensgefühl mit bekannten Küstenorten, guter Infrastruktur und Immobilienmöglichkeiten für unterschiedliche Lebensmodelle."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-8 lg:grid-cols-3">
            {keyReasons.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="border-t border-[#16384c]/12 pt-6">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef7fb] text-[#205c78]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h2 className="mt-6 text-[2rem] leading-[0.95] font-semibold tracking-[-0.03em] text-[#14384e]">
                      {item.title}
                    </h2>
                    <p className="mt-4 text-base leading-8 text-[#557388]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="bg-[#eff7fb] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Was die Region attraktiv macht
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl">
                Zwischen Küstenleben, Alltag und einem mediterranen Lebensstil
                mit eigener Identität.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
                Die Costa Blanca spricht Kunden an, die Sonne, Meer und
                Spanien suchen, aber ihren Fokus noch einmal breiter setzen
                möchten. Manche suchen ruhiger, andere urbaner, manche mit
                klarerem Preisrahmen oder mehr Flexibilität bei Lage und
                Lebensstil – genau dafür bietet die Region viele passende
                Möglichkeiten.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-4">
              {costaBlancaHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 border-t border-[#183f55]/10 pt-4 first:border-t-0 first:pt-0"
                >
                  <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white text-[#c6a96b]">
                    <Check className="h-3.5 w-3.5" />
                  </span>
                  <p className="text-base leading-8 text-[#557388]">{item}</p>
                </div>
              ))}

              <div className="mt-8 rounded-[2rem] border border-[#183f55]/10 bg-white/78 p-7 shadow-[0_24px_70px_rgba(57,108,134,0.08)] backdrop-blur-sm sm:p-8">
                <div className="flex items-center gap-3 text-[#14384e]">
                  <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef7fb] text-[#205c78]">
                    <MapPinned className="h-5 w-5" />
                  </span>
                  <h3 className="text-[1.8rem] leading-[0.96] font-semibold tracking-[-0.03em]">
                    Interessante Orte an der Costa Blanca
                  </h3>
                </div>
                <p className="mt-5 text-base leading-8 text-[#557388]">
                  Benidorm, Altea, Calpe, Jávea oder Dénia gehören zu den
                  Lagen, die für deutsche Käufer häufig eine Rolle spielen,
                  wenn sie am Mittelmeer nicht nur eine einzige Region prüfen
                  möchten.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Für wen das sinnvoll ist
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl">
                Die Costa Blanca ist vor allem dann spannend, wenn Sie bewusst
                vergleichen und nicht vorschnell festgelegt suchen möchten.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-[#183f55]/10 bg-white p-8 shadow-[0_24px_70px_rgba(57,108,134,0.08)] sm:p-10">
              <div className="space-y-4">
                {buyerScenarios.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-[#183f55]/8 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f8fbfd] text-[#c6a96b]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-7 text-[#557388] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section
        id="immobilien-costa-blanca"
        className="bg-[#f3f8fb] py-24 sm:py-28"
      >
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Immobilien"
              title="Ausgewählte Immobilien an der Costa Blanca"
              description="Sobald die ersten Immobilien in dieser Region im System gepflegt sind, erscheinen sie hier automatisch. Bis dahin bleibt die Struktur bereits vorbereitet."
              wide
            />
          </Reveal>

          <div className="mt-14">
            {costaBlancaProperties.length > 0 ? (
              <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
                {costaBlancaProperties.map((property) => (
                  <PropertyCard key={property.id} property={property} />
                ))}
              </div>
            ) : (
              <Reveal>
                <div className="rounded-[2rem] border border-[#183f55]/10 bg-white px-8 py-12 text-center shadow-[0_22px_60px_rgba(17,44,60,0.08)] sm:px-10 sm:py-14">
                  <h3 className="text-3xl leading-[0.98] font-semibold tracking-[-0.03em] text-[#14384e]">
                    Aktuell sind noch keine Immobilien an der Costa Blanca
                    veröffentlicht.
                  </h3>
                  <p className="mx-auto mt-4 max-w-2xl text-base leading-8 text-[#5f7380]">
                    Die Region ist bereits vorbereitet. Sobald die ersten
                    ausgewählten Objekte eingepflegt sind, werden sie hier
                    automatisch sichtbar.
                  </p>
                </div>
              </Reveal>
            )}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#173747] py-24 text-[#f6efe5] sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a3c4f_0%,#173747_50%,#112b3a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[1.02fr_0.98fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Nächster Schritt
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                Wenn die Costa Blanca für Sie interessant ist, lässt sich der
                Einstieg am besten über ein kurzes Gespräch klären.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#d7e2e8] sm:text-lg">
                So kann früh eingeordnet werden, ob die Costa Blanca für Ihren
                Plan wirklich die bessere Ergänzung ist und welche Art von
                Immobilien oder Regionen für Sie in Frage kommen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
              <h3 className="text-3xl leading-[0.96] font-semibold text-[#f6efe5]">
                Anfrage zur Costa Blanca
              </h3>
              <p className="mt-5 text-base leading-8 text-[#d7e2e8]">
                Schreiben Sie uns kurz, ob es um Zweitwohnsitz, Auswandern,
                Anlage oder den passenden Standort an der Costa Blanca geht.
                Danach lässt sich die Suche deutlich klarer eingrenzen.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt?thema=Costa Blanca"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.24)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                >
                  Jetzt anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={siteSettings.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  WhatsApp öffnen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
