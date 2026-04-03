import immobilienvermittlungHeroImage from "@/assets/immobilienvermittlung-hero.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { propertyGroups } from "@/data/properties";
import {
  getServicePageBySlug,
  servicePages,
  siteSettings,
} from "@/data/site-content";
import { getProperties } from "@/lib/properties";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const vermittlungBenefits = [
  {
    title: "Passende Vorauswahl",
    text: "Objekte werden nicht nur nach Preis, sondern nach Lebensmodell, Lage, Alltag und realer Nutzbarkeit zusammengestellt.",
  },
  {
    title: "Deutschsprachige Begleitung",
    text: "Fragen zu Regionen, Abläufen und Besichtigungen bleiben verständlich, ruhig und klar strukturiert.",
  },
  {
    title: "Vernetzte Begleitung",
    text: "Immobilie, Bank, Recht und Unterlagen werden früh zusammengedacht statt erst kurz vor dem Kauf.",
  },
];

const vermittlungProcess = [
  {
    title: "Wunschbild schärfen",
    text: "Zu Beginn klären wir Region, Budget, Objektart und ob es um Auswandern, Feriennutzung oder Kapitalanlage geht.",
  },
  {
    title: "Objekte gezielt auswählen",
    text: "Danach entsteht eine passende Auswahl aus Häusern, Wohnungen oder Neubauprojekten statt einer unsortierten Masse an Exposés.",
  },
  {
    title: "Sicher weitergehen",
    text: "Bei ernsthaftem Interesse werden die nächsten Schritte mit Besichtigung, Unterlagen und passenden Kontakten sauber vorbereitet.",
  },
];

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const servicePage = getServicePageBySlug(slug);

  if (!servicePage) {
    notFound();
  }

  if (!servicePage.implemented) {
    return <main className="min-h-screen bg-[#f8fcfe] pt-32" />;
  }

  const properties = await getProperties();
  const propertyCounts = propertyGroups.map((group) => ({
    ...group,
    count: properties.filter((property) => property.group === group.id).length,
  }));

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[82svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={immobilienvermittlungHeroImage}
          alt="Straßenszene in Andalusien für die Immobilienvermittlung an der Costa del Sol"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.74)_24%,rgba(10,26,37,0.48)_48%,rgba(10,26,37,0.18)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.06)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.22)_80%,#eff7fb_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(255,232,203,0.18),transparent_24%),radial-gradient(circle_at_22%_78%,rgba(255,255,255,0.12),transparent_22%)]" />

        <div className="relative z-10 mx-auto flex min-h-[82svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Leistung im Fokus
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Immobilienvermittlung an der Costa del Sol mit deutscher Begleitung.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                CDS-IMMO zeigt nicht einfach nur Immobilien. Wir begleiten bei der
                Auswahl passender Häuser, Wohnungen und Neubauprojekte und
                verbinden die Suche mit den nächsten Schritten Richtung Spanien.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/immobilien"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Immobilien ansehen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${siteSettings.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                Beratung anfragen
                <MoveRight className="h-4 w-4" />
              </Link>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider
            fill="rgba(255,255,255,0.18)"
            midFill="rgba(255,255,255,0.26)"
            topFill="rgba(255,255,255,0.38)"
            className="h-28 md:h-32"
          />
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b68b4c]">
                Was diese Leistung leistet
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#0d2230]">
                Die Immobiliensuche wird ruhiger, klarer und besser auf das echte Leben in Spanien abgestimmt.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5f6e79] sm:text-lg">
                Viele Interessenten brauchen nicht nur schöne Exposés, sondern eine
                Auswahl, die zu Alltag, Region, Budget und dem gesamten Schritt an
                die Costa del Sol passt. Genau dort setzt die Vermittlung an.
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {vermittlungBenefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-7 shadow-[0_22px_58px_rgba(17,44,60,0.08)] sm:p-8">
                  <h3 className="text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5f6e79]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183F55] py-24 text-[#f6efe5] sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Objektarten"
              title="Häuser, Wohnungen und Neubauprojekte werden nicht getrennt präsentiert, sondern passend zum Suchbild kuratiert."
              description="Die Vermittlung denkt nicht in einer starren Standardliste. Je nach Wunsch, Region und Lebensmodell entsteht die Auswahl aus genau den Objektarten, die wirklich Sinn ergeben."
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {propertyCounts.map((group, index) => (
              <Reveal key={group.id} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
                  <span className="inline-flex w-fit rounded-full border border-white/14 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-[#f2d5a3]">
                    {group.count} Objekte
                  </span>
                  <h3 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                    {group.shortLabel}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#d7e2e8]">
                    {group.description}
                  </p>
                  <Link
                    href="/immobilien"
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#d7b172] px-5 py-3 text-sm font-semibold text-[#d7b172] transition hover:bg-[#d7b172] hover:text-[#08131b]"
                  >
                    Zur Übersicht
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Ablauf"
              title="So läuft die Vermittlung typischerweise ab."
              description="Klarheit im Ablauf nimmt Druck heraus. Deshalb bleibt vom ersten Gespräch bis zur engeren Auswahl jeder Schritt nachvollziehbar."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {vermittlungProcess.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <span className="inline-flex rounded-full border border-[#183f55]/10 bg-[#eff7fb] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#b68b4c]">
                    Phase 0{index + 1}
                  </span>
                  <h3 className="mt-6 text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
