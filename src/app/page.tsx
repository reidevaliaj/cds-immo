import heroImage from "@/assets/hero2.jpg";
import { PropertyShowcase } from "@/components/property-showcase";
import { Reveal } from "@/components/reveal";
import { ScrollStory } from "@/components/scroll-story";
import { SectionHeading } from "@/components/section-heading";
import { TopLocations } from "@/components/top-locations";
import { WaveDivider } from "@/components/wave-divider";
import { heroStats, services } from "@/data/site-content";
import { homepageTestimonials } from "@/data/testimonials";
import { getTopPropertyLocations } from "@/lib/properties";
import { ArrowRight, MoveRight, Star } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const topLocations = await getTopPropertyLocations(4);

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={heroImage}
          alt="Hero-Aufnahme mit Meerblick, Infinity Pool und Costa-del-Sol-Stimmung"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(248,252,254,0.98)_0%,rgba(248,252,254,0.92)_22%,rgba(248,252,254,0.52)_44%,rgba(248,252,254,0.12)_66%,rgba(248,252,254,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(244,250,253,0.14)_0%,rgba(244,250,253,0.02)_38%,rgba(239,247,251,0.42)_72%,#eff7fb_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_22%,rgba(255,249,238,0.9),transparent_24%),radial-gradient(circle_at_72%_20%,rgba(125,189,218,0.18),transparent_18%),radial-gradient(circle_at_36%_84%,rgba(255,255,255,0.34),transparent_24%)]" />
        <div className="absolute left-0 top-0 h-full w-[62%] bg-[linear-gradient(90deg,rgba(248,252,254,0.82)_0%,rgba(248,252,254,0.5)_38%,transparent_100%)]" />
        <div className="absolute inset-x-0 bottom-0 h-36 bg-[linear-gradient(180deg,transparent_0%,rgba(237,248,252,0.18)_62%,rgba(237,248,252,0.34)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1280px] items-center px-6 pb-18 pt-32 sm:pb-24 sm:pt-36 lg:px-10 lg:pt-40">
          <div className="max-w-4xl sm:max-w-3xl">
            <Reveal>
              <span className="inline-flex w-fit rounded-full border border-[#275772]/10 bg-white/72 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b58949] backdrop-blur-sm">
                Costa del Sol Immobilien
              </span>
            </Reveal>

            <Reveal delay={0.05} className="max-w-4xl">
              <h1 className="mt-6 text-[2.82rem] leading-[0.98] font-semibold tracking-[-0.04em] text-balance text-[#21485e] sm:mt-7 sm:text-[3.45rem] lg:text-[3.85rem]">
                Ihr deutscher Ansprechpartner für Immobilien und Auswandern an
                der Costa del Sol.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-4 text-[0.98rem] leading-7 text-[#31546a] sm:hidden">
                Häuser, Wohnungen, Neubauten und deutschsprachige Leistungen für
                Ihren Schritt nach Spanien.
              </p>
              <p className="mt-4 hidden text-[0.98rem] leading-7 text-[#31546a] sm:mt-6 sm:block sm:text-xl">
                Ob Kauf, Verkauf, Neubau, Bank, Versicherung, Umzug oder
                wichtige Unterlagen: CDS-IMMO begleitet deutsche Interessenten
                Schritt für Schritt beim Leben, Wohnen und Arbeiten in
                Andalusien.
              </p>
            </Reveal>

            <Reveal
              delay={0.15}
              className="mt-6 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:items-center sm:gap-4"
            >
              <Link
                href="/immobilien"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] sm:px-7 sm:py-4"
              >
                Immobilien entdecken
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/services/immobilienvermittlung"
                className="hidden items-center justify-center gap-2 rounded-full border border-[#275772]/12 bg-white/74 px-6 py-3.5 text-sm font-semibold text-[#14384e] shadow-[0_16px_40px_rgba(62,126,160,0.12)] transition hover:bg-white/88 sm:inline-flex sm:px-7 sm:py-4"
              >
                Leistungen ansehen
                <MoveRight className="h-4 w-4" />
              </Link>
            </Reveal>

            <Reveal delay={0.2} className="mt-12 hidden lg:block">
              <div className="grid max-w-4xl gap-6 border-t border-[#275772]/12 pt-7 lg:grid-cols-3">
                {heroStats.map((item) => (
                  <div key={item.value} className="max-w-sm">
                    <p className="text-3xl font-semibold tracking-[-0.03em] text-[#2d6f91]">
                      {item.value}
                    </p>
                    <p className="mt-3 max-w-xs text-sm leading-7 text-[#3f6176]">
                      {item.label}
                    </p>
                  </div>
                ))}
              </div>
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

      <ScrollStory />

      <section
        id="leistungen"
        className="relative overflow-hidden bg-[#183F55] py-24 text-[#f6efe5] sm:py-28"
      >
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_16%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_82%_28%,rgba(121,179,208,0.08),transparent_24%)]" />

        <div className="relative mx-auto max-w-[1280px] px-5 sm:px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Leistungen"
              title="Immobilien und Leistungen, die den Schritt nach Spanien wirklich begleiten."
              description="CDS-IMMO ist bewusst mehr als eine klassische Maklerseite. Immobilien, Bank, Recht, Versicherung, Umzug und Dokumente greifen hier sichtbar ineinander."
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

      <PropertyShowcase />

      <TopLocations locations={topLocations} />

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <SectionHeading
              eyebrow="Vertrauen"
              title="Was Käufer und Auswanderer bei CDS-IMMO besonders schätzen."
              description="Persönliche Begleitung, klare Einschätzungen und Hilfe über die reine Immobiliensuche hinaus sind für viele Interessenten die Punkte, die am meisten Sicherheit geben."
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {homepageTestimonials.map((testimonial, index) => (
              <Reveal key={testimonial.name} delay={index * 0.04}>
                <article className="rounded-[2rem] border border-[#0d2230]/8 bg-white p-8 shadow-[0_22px_58px_rgba(62,126,160,0.08)]">
                  <div className="flex gap-1 text-[#c59a5a]">
                    {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                      <Star key={starIndex} className="h-4 w-4 fill-current" />
                    ))}
                  </div>
                  <p className="mt-6 text-lg leading-8 text-[#36505e]">
                    &ldquo;{testimonial.quote}&rdquo;
                  </p>
                  <div className="mt-8 border-t border-[#0d2230]/10 pt-5">
                    <p className="text-lg font-semibold text-[#0d2230]">
                      {testimonial.name}
                    </p>
                    <p className="mt-1 text-sm text-[#5f6e79]">
                      {testimonial.origin}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
