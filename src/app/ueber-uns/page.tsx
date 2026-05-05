import andalusianCityImage from "@/assets/andalusian-city.jpg";
import marbellaCoastImage from "@/assets/marbella-coast.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { siteSettings } from "@/data/site-content";
import {
  ArrowRight,
  Compass,
  Handshake,
  HousePlus,
  ShieldCheck,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const whyUsItems = [
  {
    title: "Deutschland verstehen, Spanien kennen",
    text: "Wir kennen die Fragen, Unsicherheiten und Erwartungen deutscher Käufer und verbinden dieses Verständnis mit vielen Jahren echter Erfahrung an der Costa del Sol.",
    icon: Compass,
  },
  {
    title: "Mehr als nur Makler",
    text: "Bei CDS-IMMO geht es nicht nur um ein Objekt, sondern um Struktur, Begleitung und die nächsten Schritte Richtung Spanien.",
    icon: HousePlus,
  },
  {
    title: "Partner statt Einzelchaos",
    text: "Bank, Recht, Dokumente und der weitere Ablauf greifen besser ineinander, wenn sie früh zusammen gedacht werden.",
    icon: Handshake,
  },
  {
    title: "Ruhig, ehrlich und klar",
    text: "Wir wollen keine laute Maklerseite sein, sondern eine vertrauensvolle Begleitung für einen Schritt, der für viele Kunden größer ist als nur ein Kauf.",
    icon: ShieldCheck,
  },
];

const differentiators = [
  "Persönliche Einordnung statt unübersichtlicher Objektflut",
  "Lokale Erfahrung in Málaga und an der Costa del Sol",
  "Deutschsprachige Begleitung vor, während und nach dem Kauf",
  "Ein Netzwerk, das Immobilie, Bank, Recht und Ankommen verbindet",
];

export default function AboutPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={andalusianCityImage}
          alt="Andalusische Stadtszene für die Seite Über uns"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.74)_24%,rgba(10,26,37,0.48)_48%,rgba(10,26,37,0.16)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.06)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.22)_80%,#eff7fb_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Über uns &amp; Warum wir
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Mehr als Immobilien: ein ruhiger, ehrlicher Weg nach Spanien.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                Mehr Sonne. Mehr Freiheit. Ein neues Leben. Genau an diesem
                Punkt beginnen für viele Kunden aber auch die größten Fragen:
                Wem kann ich vertrauen, wie vermeide ich Fehler und was
                passiert nach dem Kauf? Genau hier setzt CDS-IMMO an.
              </p>
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
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-start lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b68b4c]">
                Wer hinter CDS-IMMO steht
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#0d2230]">
                Zwischen Deutschland, Málaga und echten Entscheidungen vor Ort.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5f6e79] sm:text-lg">
                Viele Menschen beschäftigten sich nicht nur mit einer
                Immobilie, sondern mit einem größeren Lebensschritt. Genau
                deshalb sollte die Begleitung nie wie eine reine
                Verkaufsstrecke wirken, sondern wie ein klarer Partner für den
                Weg nach Spanien.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6e79] sm:text-lg">
                Veronica Rodriguez lebte und arbeitete über viele Jahre in
                Málaga und im Immobilienbereich an der Costa del Sol. Dadurch
                gewann sie einen direkten Einblick in das, was Käufer vor Ort
                wirklich erwartete, welche Fragen immer wieder aufkamen und an
                welchen Punkten Unterstützung tatsächlich entscheidend wurde.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6e79] sm:text-lg">
                Edwin Kortler lebte über 25 Jahre in Málaga und arbeitete dort
                in Tourismus, Vertrieb und Immobilien, davon über zehn Jahre
                als Geschäftsführer einer deutschen Firma vor Ort. Aus dieser
                Zeit entstand ein sehr klares Verständnis für den Markt, die
                Unterschiede im Ablauf und die Realität hinter schönen
                Exposés.
              </p>
              <p className="mt-5 text-base leading-8 text-[#5f6e79] sm:text-lg">
                Heute begleitet CDS-IMMO Kunden von Deutschland aus mit
                direkter Erreichbarkeit und gleichzeitig mit einem Netzwerk in
                Spanien, das weiterhin an die entscheidenden Stellen vor Ort
                angebunden ist. Genau diese Verbindung aus deutschem
                Verständnis und spanischer Erfahrung ist der eigentliche
                Vorteil.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="space-y-5">
              <div className="relative overflow-hidden rounded-[2rem] border border-[#183f55]/10 shadow-[0_24px_70px_rgba(57,108,134,0.10)]">
                <div className="relative aspect-[4/5]">
                  <Image
                    src={marbellaCoastImage}
                    alt="Küstenaufnahme als ruhige Bildfläche für Über uns"
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <article className="rounded-[1.7rem] border border-[#0d2230]/8 bg-white p-6 shadow-[0_18px_50px_rgba(17,44,60,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b68b4c]">
                    Veronica Rodriguez
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#45606f]">
                    Lebte und arbeitete über viele Jahre in Málaga und im
                    Immobilienumfeld mit direktem Blick auf reale Abläufe und
                    die Situation internationaler Käufer.
                  </p>
                </article>

                <article className="rounded-[1.7rem] border border-[#0d2230]/8 bg-white p-6 shadow-[0_18px_50px_rgba(17,44,60,0.06)]">
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b68b4c]">
                    Edwin Kortler
                  </p>
                  <p className="mt-4 text-base leading-7 text-[#45606f]">
                    Lebte über 25 Jahre in Málaga und brachte Erfahrung aus
                    Tourismus, Vertrieb, Immobilien und deutsch-spanischen
                    Prozessen mit.
                  </p>
                </article>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f3f8fb] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Warum wir"
              title="Weil bei diesem Schritt Vertrauen, Klarheit und echte Erfahrung wichtiger sind als laute Maklersprache."
              description="Viele Kunden suchten keine anonyme Plattform, sondern einen Ansprechpartner, der zuhört, ehrlich einordnet und auch die Themen rund um Bank, Recht und Ankommen in Spanien mitdenkt. Genau daraus ist das heutige Konzept von CDS-IMMO entstanden."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {whyUsItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <Reveal key={item.title} delay={index * 0.05}>
                  <article className="flex h-full flex-col rounded-[1.9rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                    <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff7fb] text-[#1f5a76]">
                      <Icon className="h-5 w-5" />
                    </span>
                    <h3 className="mt-6 text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                      {item.title}
                    </h3>
                    <p className="mt-5 text-base leading-8 text-[#5f6e79]">
                      {item.text}
                    </p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#183F55] py-24 text-[#f6efe5] sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Mehr als Makler
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                Der Unterschied liegt nicht nur in den Objekten, sondern in der
                Begleitung rund um den ganzen Schritt.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#d7e2e8] sm:text-lg">
                Für viele Käufer geht es um mehr als einen Kaufpreis. Es geht
                um Leben, Wohnen und Ankommen in Spanien. Genau deshalb denkt
                CDS-IMMO weiter als eine klassische Maklerseite.
              </p>
              <p className="mt-5 text-base leading-8 text-[#d7e2e8] sm:text-lg">
                Viele Kunden erlebten zuvor Sprachbarrieren,
                Missverständnisse, unvollständige Betreuung oder Unsicherheit
                bei Bank, Verträgen und Abläufen. Aus genau diesen Erfahrungen
                entstand der Anspruch, nicht nur zu vermitteln, sondern den
                gesamten Weg nachvollziehbar zu begleiten.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
              <div className="space-y-4">
                {differentiators.map((item) => (
                  <div
                    key={item}
                    className="flex items-start gap-3 border-t border-white/10 pt-4 first:border-t-0 first:pt-0"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-white/14 text-[#f2d5a3]">
                      <ShieldCheck className="h-3.5 w-3.5" />
                    </span>
                    <p className="text-sm leading-7 text-[#edf4f7] sm:text-base">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="rounded-[2rem] bg-[#143649] p-8 text-[#f6efe5] shadow-[0_28px_80px_rgba(8,24,35,0.14)] sm:p-10">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Kontakt
              </span>
              <h2 className="mt-5 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] sm:text-5xl">
                Wenn Sie spüren, dass es bei Spanien um mehr als nur eine
                Immobilie geht, sprechen wir genau darüber.
              </h2>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#d7e2e8] sm:text-lg">
                In einem ersten Gespräch klären wir, ob es um Kauf,
                Auswandern, Struktur, Finanzierung oder den gesamten Weg nach
                Spanien geht. Danach lässt sich der passende nächste Schritt
                deutlich ruhiger festlegen.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                >
                  Erstgespräch anfragen
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={siteSettings.whatsapp}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full border border-white/14 bg-white/8 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/12"
                >
                  Diskret per WhatsApp anfragen
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
