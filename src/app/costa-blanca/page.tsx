import entranceBoardwalkImage from "@/assets/entrance-boardwalk.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { siteSettings } from "@/data/site-content";
import { ArrowRight, Check, Compass, HousePlus, MapPinned } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Costa Blanca",
  description:
    "Ausgewählte Immobilien an der Costa Blanca mit klarer deutschsprachiger Begleitung als ergänzende Region zur Costa del Sol.",
};

const costaBlancaBenefits = [
  {
    title: "Ausgewählte Immobilien statt Massenangebot",
    text: "Die Costa Blanca wird nicht als anonyme Zusatzregion eingebunden, sondern mit ausgewählten Möglichkeiten, die zu deutschen Käufern und ihrem Lebensmodell passen.",
    icon: HousePlus,
  },
  {
    title: "Region als Ergänzung, nicht als Richtungswechsel",
    text: "Der Schwerpunkt von CDS-IMMO bleibt die Costa del Sol. Für passende Anfragen werden nun zusätzlich ausgewählte Immobilien an der Costa Blanca mit einbezogen.",
    icon: Compass,
  },
  {
    title: "Suche über die Region bereits vorbereitet",
    text: "Sobald Immobilien in der Region mit Costa Blanca gepflegt werden, erscheinen sie auch in der Immobiliensuche über die Region automatisch.",
    icon: MapPinned,
  },
];

export default function CostaBlancaPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={entranceBoardwalkImage}
          alt="Mediterrane Küstenaufnahme für die Costa-Blanca-Seite"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,252,254,0.94)_0%,rgba(248,252,254,0.88)_24%,rgba(248,252,254,0.56)_48%,rgba(248,252,254,0.18)_76%,rgba(248,252,254,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,255,255,0.08)_0%,rgba(255,255,255,0.05)_36%,rgba(239,247,251,0.36)_76%,#eff7fb_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[78svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4b079] backdrop-blur-sm">
                Costa Blanca
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.04em] text-balance text-[#21485e] sm:text-[3.8rem] lg:text-[4.7rem]">
                Ausgewählte Immobilien an der Costa Blanca – mit klarer
                deutscher Begleitung.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#31546a] sm:text-[1.08rem]">
                Neben der Costa del Sol werden nun auch ausgewählte Immobilien
                an der Costa Blanca aufgenommen. Damit bleibt die Suche
                fokussiert, aber Kunden erhalten mehr Spielraum, wenn eine
                zweite Mittelmeerregion besser zu ihrem Plan passt.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/immobilien?ort=Costa%20Blanca"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.26)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] sm:px-7 sm:py-4"
              >
                Costa Blanca in der Suche öffnen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/kontakt?thema=Costa Blanca"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-[#275772]/12 bg-white/74 px-6 py-3.5 text-sm font-semibold text-[#14384e] shadow-[0_16px_40px_rgba(62,126,160,0.12)] backdrop-blur-sm transition hover:bg-white/88 sm:px-7 sm:py-4"
              >
                Anfrage zur Costa Blanca
              </Link>
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

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Einordnung"
              title="Die Costa Blanca wird als ergänzende Region eingebunden – nicht als Bruch mit dem bisherigen Profil."
              description="Der Schwerpunkt von CDS-IMMO bleibt die Costa del Sol. Für passende Kundenanfragen können nun aber auch ausgewählte Immobilien an der Costa Blanca berücksichtigt werden."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {costaBlancaBenefits.map((item, index) => {
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

      <section className="bg-[#f3f8fb] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Für wen das sinnvoll ist
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl">
                Nicht jede Anfrage muss automatisch an die Costa del Sol
                passen.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
                Manche Kunden suchen eine ruhigere Region, andere einen
                bestimmten Lebensstil, Preisrahmen oder eine Alternative zum
                bisherigen Suchgebiet. Genau dann kann die Costa Blanca eine
                sinnvolle Ergänzung sein.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-[#183f55]/10 bg-white p-8 shadow-[0_24px_70px_rgba(57,108,134,0.08)] sm:p-10">
              <div className="space-y-4">
                {[
                  "Wenn das Suchbild weiter gefasst werden soll, ohne die deutschsprachige Begleitung zu verlieren",
                  "Wenn Preis, Lage oder Lebensmodell eher zu einer zweiten Mittelmeerregion passen",
                  "Wenn Kunden bewusst zwischen Costa del Sol und Costa Blanca vergleichen möchten",
                ].map((item) => (
                  <div key={item} className="flex items-start gap-3 border-t border-[#183f55]/8 pt-4 first:border-t-0 first:pt-0">
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

      <section className="relative overflow-hidden bg-[#173747] py-24 text-[#f6efe5] sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1a3c4f_0%,#173747_50%,#112b3a_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.06),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[1.04fr_0.96fr] lg:items-center lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Nächster Schritt
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                Sobald Immobilien in der Region als Costa Blanca gepflegt sind,
                erscheinen sie automatisch in der Suche.
              </h2>
              <p className="mt-6 text-base leading-8 text-[#d7e2e8] sm:text-lg">
                Die Struktur ist dafür bereits vorbereitet. Im
                Immobilienprogramm reicht es, die Region entsprechend zu
                hinterlegen. Danach können Besucher über die Suche und über den
                Begriff Costa Blanca darauf zugreifen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
              <h3 className="text-3xl leading-[0.96] font-semibold text-[#f6efe5]">
                Kontakt für die Region Costa Blanca
              </h3>
              <p className="mt-5 text-base leading-8 text-[#d7e2e8]">
                Wenn bereits konkrete Wünsche für die Region bestehen, lässt
                sich der Einstieg am einfachsten über ein kurzes Gespräch oder
                eine direkte Anfrage eingrenzen.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href="/kontakt?thema=Costa Blanca"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.24)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                >
                  Anfrage senden
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
