import heroImage from "@/assets/hero2.jpg";
import { PropertyShowcase } from "@/components/property-showcase";
import { Reveal } from "@/components/reveal";
import { ScrollStory } from "@/components/scroll-story";
import { SectionHeading } from "@/components/section-heading";
import { TopLocations } from "@/components/top-locations";
import { WaveDivider } from "@/components/wave-divider";
import { services, siteSettings } from "@/data/site-content";
import { getTopPropertyLocations } from "@/lib/properties";
import {
  ArrowRight,
  Check,
  Landmark,
  MessageCircle,
  ShieldCheck,
  Users2,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const heroTrustItems = [
  "Deutschsprachige Spezialisierung",
  "Netzwerk in Spanien & Deutschland",
  "Begleitung bis zur Schlüsselübergabe",
];

const bankBenefits = [
  "Deutschsprachiger Bankservice mit Sitz in Málaga",
  "Klarere Prozesse für Kontoeröffnung und Finanzierung",
  "Weniger Reibung bei Unterlagen, Abstimmung und Umsetzung",
];

const whyChooseUs = [
  {
    title: "Ganzheitlicher Ansatz",
    text: "Nicht nur Objektvorschläge, sondern ein strukturierter Weg mit Immobilie, Bank, Recht und Übergang.",
    icon: ShieldCheck,
  },
  {
    title: "Spezialisierung auf deutsche Kunden",
    text: "Kommunikation, Prozesse und Begleitung sind auf die Fragen deutschsprachiger Käufer und Auswanderer ausgerichtet.",
    icon: Users2,
  },
  {
    title: "Netzwerk vor Ort",
    text: "Partner in Spanien greifen mit klaren Abläufen ineinander, statt dass jeder Schritt separat organisiert werden muss.",
    icon: Landmark,
  },
];

export default async function Home() {
  const topLocations = await getTopPropertyLocations(4);

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#132d3d] text-[#f5f5f3]">
        <Image
          src={heroImage}
          alt="Hero-Aufnahme mit Meerblick, Infinity Pool und Costa-del-Sol-Stimmung"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,31,0.82)_0%,rgba(15,23,31,0.74)_24%,rgba(15,23,31,0.45)_52%,rgba(15,23,31,0.16)_76%,rgba(15,23,31,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(6,14,20,0.16)_0%,rgba(6,14,20,0.06)_34%,rgba(14,36,48,0.42)_74%,#102837_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,241,220,0.18),transparent_22%),radial-gradient(circle_at_76%_12%,rgba(120,182,211,0.16),transparent_18%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] items-center px-6 pb-18 pt-32 sm:pb-24 sm:pt-36 lg:px-10 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex w-fit rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b079] backdrop-blur-sm">
                Costa del Sol Immobilien
              </span>
            </Reveal>

            <Reveal delay={0.05} className="max-w-3xl">
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.04em] text-balance text-[#f5f5f3] sm:text-[3.8rem] lg:text-[4.85rem]">
                Von Deutschland an die Costa del Sol – ohne Unsicherheit.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-5 text-base leading-8 text-[#d8e3e8] sm:mt-6 sm:text-[1.08rem]">
                Ob neuer Lebensabschnitt oder Investition: CDS-IMMO begleitet
                Sie von der ersten Idee bis zur Immobilie in Spanien –
                inklusive Finanzierung, Behörden und der Schritte, die danach
                folgen.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.26)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] sm:px-7 sm:py-4"
              >
                Kostenlose Erstberatung
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteSettings.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/18 bg-white/10 px-6 py-3.5 text-sm font-semibold text-[#f5f5f3] backdrop-blur-sm transition hover:bg-white/16 sm:px-7 sm:py-4"
              >
                Diskret per WhatsApp anfragen
                <MessageCircle className="h-4 w-4" />
              </a>
            </Reveal>

            <Reveal delay={0.2} className="mt-10">
              <div className="grid gap-3 border-t border-white/14 pt-6 sm:grid-cols-3 sm:gap-5">
                {heroTrustItems.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/12 text-[#d4b079]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-7 text-[#e3ecef]">{item}</p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider
            fill="rgba(255,255,255,0.10)"
            midFill="rgba(255,255,255,0.16)"
            topFill="rgba(255,255,255,0.24)"
            className="h-28 md:h-32"
          />
        </div>
      </section>

      <ScrollStory />

      <section
        id="leistungen"
        className="relative overflow-hidden bg-[#173747] py-24 text-[#f6efe5] sm:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a3c4f_0%,#173747_50%,#112b3a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Leistungen"
              title="Zugang zu den richtigen Strukturen rund um Immobilie, Finanzierung und Neustart in Spanien."
              description="CDS-IMMO verbindet ausgewählte Immobilien mit den Partnern und Abläufen, die deutsche Käufer und Auswanderer an der Costa del Sol wirklich brauchen."
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.map((service, index) => (
              <Reveal
                key={service.id}
                delay={index * 0.04}
                className="min-w-0 overflow-hidden rounded-[2rem]"
              >
                <div className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-7 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
                  <h3 className="text-3xl leading-none font-semibold tracking-[-0.03em] text-balance text-[#f6efe5]">
                    {service.title}
                  </h3>
                  <p className="mt-6 max-w-sm text-base leading-8 text-[#d4e2ea]">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex w-fit rounded-full border border-[#d7b172] bg-transparent px-5 py-3 text-sm font-semibold text-[#d7b172] transition hover:translate-y-[-1px] hover:bg-[#d7b172] hover:text-[#08131b]"
                  >
                    Mehr erfahren
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f7fbfd] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[0.94fr_1.06fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Bankstruktur
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl">
                Ein entscheidender Vorteil ist der Zugang zu den richtigen
                Strukturen.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
                Für viele Käufer wird es nicht bei der Immobiliensuche
                kompliziert, sondern bei Konto, Finanzierung und den
                Unterlagen, die in Spanien sauber abgestimmt werden müssen.
                Genau hier schafft deutschsprachige Begleitung spürbar mehr
                Ruhe.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-[#183f55]/10 bg-white/84 p-7 shadow-[0_24px_70px_rgba(57,108,134,0.08)] backdrop-blur-sm sm:p-10">
              <div className="flex items-center gap-3 text-[#17394d]">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef7fb] text-[#1f5874]">
                  <Landmark className="h-5 w-5" />
                </span>
                <h3 className="text-[2rem] leading-none font-semibold">
                  Zugang zu klareren Bankprozessen
                </h3>
              </div>

              <div className="mt-8 space-y-4">
                {bankBenefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex items-start gap-3 border-t border-[#183f55]/8 pt-4"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f8fbfd] text-[#c6a96b]">
                      <Check className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-7 text-[#557388] sm:text-base">
                      {benefit}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PropertyShowcase />

      <TopLocations locations={topLocations} />

      <section className="bg-[#f7fbfd] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Warum CDS-IMMO"
              title="Ruhiger Luxus statt lauter Verkauf."
              description="CDS-IMMO soll nicht wie ein Immobilienportal wirken, sondern wie eine klare, persönliche Begleitung für einen Schritt, der für viele Kunden größer ist als nur ein Kauf."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {whyChooseUs.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="flex h-full flex-col rounded-[1.9rem] border border-[#183f55]/10 bg-white/84 p-7 shadow-[0_24px_70px_rgba(57,108,134,0.08)] backdrop-blur-sm sm:p-8">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-[#eef7fb] text-[#1f5874]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-[2rem] leading-[0.95] font-semibold text-[#17394d]">
                      {item.title}
                    </h3>
                    <p className="mt-4 text-sm leading-7 text-[#557388] sm:text-base">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#112b3a] py-24 text-[#f5f5f3] sm:py-28">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(255,245,224,0.08),transparent_18%),radial-gradient(circle_at_78%_18%,rgba(117,182,211,0.08),transparent_20%),linear-gradient(180deg,#173747_0%,#112b3a_100%)]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b079]">
                Erstgespräch
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.9rem]">
                Der erste Schritt ist ein Gespräch.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7e2e8] sm:text-lg">
                In einem persönlichen Austausch klären wir Ihre Möglichkeiten
                und zeigen Ihnen den Weg, der zu Ihrer Situation, Ihrem Budget
                und Ihrem Ziel an der Costa del Sol passt.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.24)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] sm:px-7 sm:py-4"
                >
                  Erstgespräch vereinbaren
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={siteSettings.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/16 bg-white/10 px-6 py-3.5 text-sm font-semibold text-[#f5f5f3] transition hover:bg-white/16 sm:px-7 sm:py-4"
                >
                  WhatsApp starten
                  <MessageCircle className="h-4 w-4" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
