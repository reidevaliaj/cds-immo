import benalmadenaVillageImage from "@/assets/benalmadena-village.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import {
  lifestyleHighlights,
  scrollStoryChapters,
  services,
} from "@/data/site-content";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function AuswandernPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={benalmadenaVillageImage}
          alt="Weißes Küstendorf an der Costa del Sol für die Auswandern-Seite"
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
                Auswandern
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Ihr Weg nach Spanien beginnt nicht mit Papierkram, sondern mit Klarheit.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                Viele deutsche Interessenten wünschen sich Sonne, Meer und mehr
                Lebensqualität an der Costa del Sol. Damit aus diesem Wunsch ein
                realistischer und sicherer Plan wird, begleitet CDS-IMMO die
                wichtigsten Schritte verständlich und deutschsprachig.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/kontakt?thema=Auswandern nach Spanien"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Beratung anfragen
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
              eyebrow="Leben an der Costa del Sol"
              title="Warum der Schritt nach Andalusien für viele deutsche Käufer und Auswanderer so attraktiv ist."
              description="Sonne, Erreichbarkeit, Infrastruktur und unterschiedliche Lebensmodelle treffen hier aufeinander. Entscheidend ist, die Region nicht nur schön zu finden, sondern den Alltag dort wirklich passend aufzubauen."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {lifestyleHighlights.map((item, index) => (
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
              eyebrow="So begleiten wir"
              title="Auswandern wird planbarer, wenn Immobilie, Netzwerk und nächste Schritte zusammengedacht werden."
              description="Genau darin liegt die Stärke von CDS-IMMO. Nicht nur das Objekt, sondern der gesamte Weg nach Spanien wird verständlich strukturiert."
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {scrollStoryChapters.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm">
                  <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#f2d5a3]">
                    Phase 0{index + 1}
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
              eyebrow="Leistungen"
              title="Diese Bereiche greifen beim Schritt nach Spanien besonders ineinander."
              description="Je nach Situation sind nicht alle Themen gleich wichtig. Genau deshalb lässt sich der Ablauf über die passenden Leistungen sauber aufbauen."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {services.slice(1).map((service, index) => (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <h2 className="text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#d7b172] px-5 py-3 text-sm font-semibold text-[#b68b4c] transition hover:bg-[#d7b172] hover:text-[#08131b]"
                  >
                    Mehr erfahren
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
