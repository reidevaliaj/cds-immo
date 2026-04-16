import coastImage from "@/assets/hero2.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const complexityPoints = [
  {
    title: "Immobilie ist nur ein Teil des Schritts",
    text: "Zwischen Region, Kaufprozess, Unterlagen, Finanzierung und dem eigentlichen Ankommen in Spanien entstehen schnell mehrere offene Baustellen gleichzeitig.",
  },
  {
    title: "Viele Fragen tauchen erst im Ablauf auf",
    text: "NIE, Bank, rechtliche Prüfung, Fristen, Versicherungen und organisatorische Themen werden oft erst dann sichtbar, wenn Entscheidungen schon laufen.",
  },
  {
    title: "Genau dort braucht es Struktur",
    text: "Wer früh die richtigen Themen verbindet, spart nicht nur Zeit und Unsicherheit, sondern trifft deutlich ruhiger und klarer seine Entscheidungen.",
  },
];

const guidanceSteps = [
  {
    title: "Situation und Zielbild klären",
    text: "Wir sortieren, ob es um Kauf, Kapitalanlage, Auswandern, Ruhestand oder einen zweiten Wohnsitz geht, und grenzen Region, Budget und Prioritäten ein.",
  },
  {
    title: "Die richtigen Partner aktivieren",
    text: "Recht, Bank, Versicherung, Dokumente und organisatorische Schritte werden nicht separat gesammelt, sondern passend zu Ihrer Situation zusammengeführt.",
  },
  {
    title: "Mit Klarheit weitergehen",
    text: "So entsteht aus vielen Einzelfragen ein roter Faden, der den Immobilienkauf und den Weg nach Spanien verständlich begleitet.",
  },
];

const whyUsPoints = [
  {
    title: "Deutschsprachige Begleitung",
    text: "Alle wichtigen Schritte bleiben verständlich, klar kommuniziert und ohne unnötige Sprachbarrieren.",
  },
  {
    title: "Ein Netzwerk statt Einzelkontakte",
    text: "Immobilie, Recht, Bank, Krankenversicherung und weitere Themen greifen ineinander, statt lose nebeneinander zu stehen.",
  },
  {
    title: "Vorauswahl statt Überforderung",
    text: "CDS-IMMO hilft nicht nur beim Finden von Objekten, sondern beim Sortieren der nächsten sinnvollen Schritte.",
  },
  {
    title: "Begleitung bis zum Ankommen",
    text: "Der Prozess endet nicht bei der Auswahl einer Immobilie, sondern bleibt auch bei den anschließenden Themen präsent.",
  },
];

export default function RatgeberPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={coastImage}
          alt="Blick über die Costa del Sol für den Ratgeber"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.72)_24%,rgba(10,26,37,0.46)_48%,rgba(10,26,37,0.14)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.06)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.22)_80%,#eff7fb_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Ratgeber
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Von Deutschland nach Spanien – mit Klarheit statt Einzelbaustellen.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                Dieser Ratgeber zeigt, warum der Schritt an die Costa del Sol
                oft komplexer ist als gedacht und wie CDS-IMMO Immobilien,
                Netzwerk und Organisation in einen verständlichen Gesamtprozess
                übersetzt.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/kontakt?thema=Ratgeber"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Erstgespräch anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                Leistungen ansehen
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
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Warum ein Ratgeber sinnvoll ist"
              title="Der Schritt nach Spanien ist oft komplexer, als er im ersten Moment wirkt."
              description="Viele deutsche Interessenten wollen nicht nur eine Immobilie finden, sondern auch verstehen, wie Bank, Recht, Unterlagen und der eigentliche Neustart sauber ineinandergreifen."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {complexityPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <h2 className="text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
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
              eyebrow="Die CDS-IMMO Lösung"
              title="Statt einzelner Ansprechpartner entsteht ein klarer, durchgängiger Weg nach Spanien."
              description="Genau hier liegt der Unterschied: CDS-IMMO verbindet Immobilienvermittlung mit den Themen, die Käufer und Auswanderer in der Realität wirklich beschäftigen."
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {guidanceSteps.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm">
                  <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f2d5a3]">
                    Schritt 0{index + 1}
                  </span>
                  <h2 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#d7e2e8]">
                    {item.text}
                  </p>
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
              eyebrow="Warum CDS-IMMO?"
              title="Warum deutsche Interessenten sich an der Costa del Sol bewusst für eine integrierte Begleitung entscheiden."
              description="Wer nicht nur Objekte sehen, sondern Entscheidungen sicherer treffen möchte, profitiert von einem Partner, der den Gesamtprozess im Blick behält."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {whyUsPoints.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <h2 className="text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
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
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Nächster Schritt
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                Ein Gespräch ist meist der Punkt, an dem aus vielen Fragen ein klarer Plan wird.
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7e2e8] sm:text-lg">
                Wenn Sie Ihre Situation kurz schildern, lässt sich deutlich
                schneller eingrenzen, welche Region, welche Leistungen und
                welche nächsten Schritte für Sie wirklich sinnvoll sind.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt?thema=Ratgeber"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Zum Kontaktformular
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/immobilien"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/12"
              >
                Immobilien ansehen
                <MoveRight className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
