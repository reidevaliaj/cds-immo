import aboutImage from "@/assets/about6.jpg";
import stepImage1 from "@/assets/1.png";
import stepImage2 from "@/assets/2.png";
import stepImage3 from "@/assets/3.png";
import stepImage4 from "@/assets/4.png";
import stepImage5 from "@/assets/5.png";
import stepImage6 from "@/assets/6.png";
import { Reveal } from "@/components/reveal";
import {
  Scale,
  Handshake,
  FileText,
  HousePlus,
} from "lucide-react";
import Image from "next/image";

const journeySteps = [
  {
    title: "Erstgespräch",
    text: "Wir klären in Deutschland Ihre Wünsche, Ihr Budget und wie Ihr Plan für Spanien aussieht.",
    image: stepImage1,
  },
  {
    title: "Region auswählen",
    text: "Gemeinsam definieren wir, ob Málaga, Mijas, Marbella oder eine andere Lage am besten passt.",
    image: stepImage2,
  },
  {
    title: "Immobilien finden",
    text: "Passende Häuser, Wohnungen oder Neubauten werden gezielt statt wahllos zusammengestellt.",
    image: stepImage3,
  },
  {
    title: "Netzwerk aktivieren",
    text: "Anwälte, Steuerberater, Bankpartner und Versicherungen werden passend eingebunden.",
    image: stepImage4,
  },
  {
    title: "Kauf begleiten",
    text: "Unterlagen, Prüfung und die nächsten Schritte rund um den Kauf bleiben verständlich und geordnet.",
    image: stepImage5,
  },
  {
    title: "Ankommen",
    text: "Umzug, erste Abläufe vor Ort und weitere Betreuung greifen sauber ineinander.",
    image: stepImage6,
  },
];

const supportBoxes = [
  {
    title: "Vorauswahl",
    text: "Statt unübersichtlicher Objektflut entsteht eine Auswahl, die zu Lebensmodell, Budget und Zielbild passt.",
    icon: HousePlus,
  },
  {
    title: "Partnernetzwerk",
    text: "Genau bei Recht, Bank, Steuer und Versicherung brauchen viele Kunden klare Ansprechpartner auf Deutsch.",
    icon: Scale,
  },
  {
    title: "Dokumente & Ablauf",
    text: "Unterlagen, Abstimmungen und die nächsten Schritte bleiben geordnet, nachvollziehbar und gut vorbereitet.",
    icon: FileText,
  },
  {
    title: "Ankommen vor Ort",
    text: "Auch nach der Auswahl greifen Kontakte, Orientierung und Unterstützung für die ersten Schritte in Spanien weiter.",
    icon: Handshake,
  },
];

export function ScrollStory() {
  const leftSupportBoxes = supportBoxes.slice(0, 2);
  const rightSupportBoxes = supportBoxes.slice(2);

  return (
    <section
      id="story-section"
      className="relative overflow-hidden bg-[#eff7fb] py-24 text-[#14384e] sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_14%,rgba(255,247,231,0.72),transparent_18%),radial-gradient(circle_at_84%_20%,rgba(151,206,229,0.18),transparent_24%),linear-gradient(180deg,#eff7fb_0%,#f8fcfe_100%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
        <div className="grid gap-4 lg:grid-cols-2 lg:items-start">
          <Reveal>
            <div className="flex flex-col gap-8">
              <div className="max-w-xl">
                <span className="inline-flex rounded-full border border-[#275772]/10 bg-white/72 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
                  Was wir verbinden
                </span>
                <h2 className="mt-6 text-4xl leading-[0.96] font-semibold tracking-[-0.04em] text-[#183f55] sm:text-5xl lg:text-[3.6rem]">
                  Immobilie, Netzwerk und der Weg nach Spanien aus einer Hand.
                </h2>
                <p className="mt-6 text-base leading-8 text-[#557388] sm:text-lg pb-[8px]">
                  CDS-IMMO zeigt nicht nur Objekte, sondern begleitet deutsche
                  Interessenten vom ersten Wunsch bis zum sicheren Ankommen an der
                  Costa del Sol.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {leftSupportBoxes.map((box) => {
                  const Icon = box.icon;

                  return (
                    <article
                      key={box.title}
                      className="rounded-[1.65rem] border border-[#79b2ce]/16 bg-white/82 p-5 shadow-[0_18px_40px_rgba(86,145,175,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9edf6] text-[#215d7c]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-[1.55rem] leading-[1.02] font-semibold text-[#173c52]">
                        {box.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#557388]">
                        {box.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="flex w-full flex-col gap-8">
              <div>
                <Image
                  src={aboutImage}
                  alt="Costa del Sol Küstenaufnahme"
                  className="h-[20rem] w-full object-cover sm:h-[25rem]"
                  priority={false}
                />
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {rightSupportBoxes.map((box) => {
                  const Icon = box.icon;

                  return (
                    <article
                      key={box.title}
                      className="rounded-[1.65rem] border border-[#79b2ce]/16 bg-white/82 p-5 shadow-[0_18px_40px_rgba(86,145,175,0.08)]"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#d9edf6] text-[#215d7c]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <h3 className="mt-4 text-[1.55rem] leading-[1.02] font-semibold text-[#173c52]">
                        {box.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-[#557388]">
                        {box.text}
                      </p>
                    </article>
                  );
                })}
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.08}>
          <div className="mt-28 max-w-3xl text-center sm:mt-32 sm:mx-auto">
            <span className="inline-flex rounded-full border border-[#275772]/10 bg-white/72 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949]">
              Ihr Weg nach Spanien
            </span>
            <h2 className="mt-5 text-4xl leading-[0.96] font-semibold tracking-[-0.04em] text-[#183f55] sm:text-5xl">
              Wir begleiten Ihre Reise von Deutschland an die Costa del Sol.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[#557388] sm:mx-auto sm:text-lg">
              So wird aus dem Wunsch nach Spanien ein klarer Ablauf mit
              Immobilien, Partnern, Unterlagen und den richtigen Schritten bis
              zum Ankommen.
            </p>
          </div>
        </Reveal>



        <Reveal delay={0.16}>
          <div className="relative mt-16">
            <div className="absolute bottom-8 left-[2.15rem] top-10 w-px bg-[linear-gradient(180deg,rgba(132,184,208,0.06),rgba(132,184,208,0.62),rgba(132,184,208,0.06))] lg:hidden" />
  

            <div className="space-y-6 lg:grid lg:grid-cols-3 lg:gap-x-5 lg:gap-y-20 lg:space-y-0">
              {journeySteps.map((step) => {
                return (
                  <article key={step.title} className="relative z-10">
                    <div className="flex items-start gap-10 lg:flex-col lg:items-center lg:text-center">
                      <div className="relative z-10 flex h-[4.9rem] w-[6.3rem] shrink-0 items-center justify-center rounded-[1.15rem] border border-white/54 bg-white/88 shadow-[0_18px_36px_rgba(86,145,175,0.12)]">
                        <Image
                          src={step.image}
                          alt={step.title}
                          className="h-8 w-auto object-contain"
                        />
                      </div>
                      <div className="max-w-[21rem]">
                        <h3 className="text-2xl leading-none font-semibold text-[#173c52]">
                          {step.title}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-[#557388]">
                          {step.text}
                        </p>
                      </div>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
