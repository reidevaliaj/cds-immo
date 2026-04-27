import aboutImage from "@/assets/about6.jpg";
import { Reveal } from "@/components/reveal";
import {
  Building2,
  Compass,
  FileText,
  Landmark,
} from "lucide-react";
import Image from "next/image";

const supportPoints = [
  {
    title: "Passende Objekte",
    text: "Ausgewählte Häuser, Wohnungen und Neubauprojekte statt unübersichtlicher Objektflut.",
    icon: Building2,
  },
  {
    title: "Bank & Finanzierung",
    text: "Deutschsprachige Abstimmung für Konto, Hypothek und die Unterlagen, die wirklich relevant sind.",
    icon: Landmark,
  },
  {
    title: "Recht & Unterlagen",
    text: "NIE, Verträge, Anwälte und administrative Punkte greifen nachvollziehbar ineinander.",
    icon: FileText,
  },
  {
    title: "Übergang nach Spanien",
    text: "Vom Erstgespräch bis zum Ankommen vor Ort bleibt die Begleitung an einem Ansprechpartner gebündelt.",
    icon: Compass,
  },
];

const collaborationSteps = [
  {
    number: "01",
    title: "Wünsche und Möglichkeiten klären",
    text: "Ziele, Budget, Region und Ausgangssituation werden im Erstgespräch sauber eingeordnet.",
  },
  {
    number: "02",
    title: "Passende Struktur aufbauen",
    text: "Immobilie, Bank, Recht und Abläufe werden so verbunden, dass keine Lücke zwischen den einzelnen Schritten entsteht.",
  },
  {
    number: "03",
    title: "Sicher umsetzen",
    text: "Kauf, Übergang nach Spanien und die ersten organisatorischen Schritte bleiben verständlich begleitet.",
  },
];

export function ScrollStory() {
  return (
    <section
      id="story-section"
      className="relative overflow-hidden bg-[#f7fbfd] py-24 text-[#14384e] sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_16%,rgba(255,246,232,0.82),transparent_18%),radial-gradient(circle_at_82%_18%,rgba(141,200,226,0.14),transparent_24%),linear-gradient(180deg,#f7fbfd_0%,#eef7fb_100%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
              Der Weg nach Spanien
            </span>
            <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl lg:text-[3.7rem]">
              Der Schritt nach Spanien ist komplexer, als er scheint.
            </h2>
            <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
              Viele starten mit einer klaren Vorstellung: eine Immobilie an der
              Costa del Sol. Die eigentlichen Fragen beginnen oft erst danach
              bei Finanzierung, Unterlagen, Abläufen und der Organisation des
              Übergangs.
            </p>
          </div>
        </Reveal>

        <div className="mt-20 grid gap-10 lg:grid-cols-[0.96fr_1.04fr] lg:items-center">
          <Reveal>
            <div className="relative overflow-hidden rounded-[2.2rem] border border-white/55 bg-white/50 p-3 shadow-[0_28px_90px_rgba(57,108,134,0.12)] backdrop-blur-sm">
              <div className="relative overflow-hidden rounded-[1.65rem]">
                <Image
                  src={aboutImage}
                  alt="Blick auf die Costa del Sol und die Verbindung zwischen Immobilie und Neustart in Spanien"
                  className="h-[23rem] w-full object-cover sm:h-[28rem]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,19,27,0.08)_0%,rgba(8,19,27,0.12)_34%,rgba(8,19,27,0.38)_100%)]" />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Struktur statt Einzelservices
              </span>
              <h3 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-[3.2rem]">
                Immobilie gefunden. Und dann wird es oft erst kompliziert.
              </h3>
              <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
                Genau an diesem Punkt setzt CDS-IMMO an. Wir verbinden
                Immobilien, Partner, Bank, Recht und die organisatorischen
                Schritte zu einem Ablauf, der ruhig, verständlich und auf
                deutsche Interessenten abgestimmt bleibt.
              </p>

              <div className="mt-10 grid gap-6 sm:grid-cols-2">
                {supportPoints.map((point) => {
                  const Icon = point.icon;

                  return (
                    <article
                      key={point.title}
                      className="border-t border-[#183f55]/10 pt-4"
                    >
                      <div className="flex items-center gap-3 text-[#1f5874]">
                        <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-white text-[#1f5874] shadow-[0_12px_24px_rgba(57,108,134,0.08)]">
                          <Icon className="h-4 w-4" />
                        </span>
                        <h4 className="text-[1.35rem] leading-none font-semibold text-[#17394d]">
                          {point.title}
                        </h4>
                      </div>
                      <p className="mt-4 text-sm leading-7 text-[#557388]">
                        {point.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-24 border-t border-[#183f55]/10 pt-18 sm:mt-28 sm:pt-20">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white/76 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                Zusammenarbeit
              </span>
              <h3 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] text-[#17394d] sm:text-5xl">
                So läuft die Zusammenarbeit ab.
              </h3>
              <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg">
                Wir führen nicht durch eine lose Sammlung von Leistungen,
                sondern durch einen klar strukturierten Weg mit Orientierung,
                Koordination und Umsetzung.
              </p>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            {collaborationSteps.map((step, index) => (
              <Reveal
                key={step.number}
                delay={index * 0.05}
                className="min-w-0"
              >
                <article className="flex h-full flex-col rounded-[1.85rem] border border-[#183f55]/10 bg-white/74 p-7 shadow-[0_20px_55px_rgba(57,108,134,0.08)] backdrop-blur-sm sm:p-8">
                  <div className="flex items-center gap-4">
                    <span className="text-[2.2rem] leading-none font-semibold tracking-[-0.04em] text-[#c6a96b]">
                      {step.number}
                    </span>
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(198,169,107,0.85),rgba(198,169,107,0))]" />
                  </div>
                  <h4 className="mt-6 text-[2rem] leading-[0.95] font-semibold text-[#17394d]">
                    {step.title}
                  </h4>
                  <p className="mt-4 text-sm leading-7 text-[#557388] sm:text-base">
                    {step.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
