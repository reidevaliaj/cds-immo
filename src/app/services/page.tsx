import coastImage from "@/assets/hero2.jpg";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { ServiceIcon } from "@/components/service-icon";
import { WaveDivider } from "@/components/wave-divider";
import { services, siteSettings } from "@/data/site-content";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[78svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={coastImage}
          alt="Blick über die Costa del Sol für die Leistungsübersicht"
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
                Leistungen
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Immobilien, Netzwerk und Begleitung für den Weg nach Spanien.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                CDS-IMMO verbindet die Immobiliensuche mit Recht, Bank,
                Versicherung, Umzug und Dokumenten. So entsteht kein loses
                Sammelsurium an Einzelleistungen, sondern ein roter Faden für
                deutsche Interessenten an der Costa del Sol.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href="/kontakt"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Kontakt aufnehmen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={`mailto:${siteSettings.email}`}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                E-Mail schreiben
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
              eyebrow="Leistungsbereiche"
              title="Jede Leistung greift in die nächste – genau das macht den Unterschied zur klassischen Maklerseite."
              description="Die Unterseiten erklären die einzelnen Bereiche sauber. Gleichzeitig bleibt sichtbar, dass diese Themen in der Praxis zusammengehören."
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {services.map((service, index) => (
              <Reveal key={service.id} delay={index * 0.04}>
                <article className="flex h-full flex-col rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#eff7fb] text-[#1f5a76]">
                    <ServiceIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h2 className="mt-6 text-4xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {service.title}
                  </h2>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
                    {service.description}
                  </p>
                  <Link
                    href={service.href}
                    className="mt-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#d7b172] px-5 py-3 text-sm font-semibold text-[#b68b4c] transition hover:bg-[#d7b172] hover:text-[#08131b]"
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

      <section className="relative overflow-hidden bg-[#183F55] py-24 text-[#f6efe5] sm:py-28">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-3xl">
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                Kontakt
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                Sie möchten direkt klären, welche Leistung für Ihre Situation zuerst wichtig ist?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-[#d7e2e8] sm:text-lg">
                Genau dafür ist das Kontaktformular gedacht. Sie müssen nicht
                schon alles sortiert haben. Oft reicht ein kurzes Anliegen, um
                den richtigen ersten Schritt festzulegen.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/kontakt"
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
