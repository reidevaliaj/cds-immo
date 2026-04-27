import logoWhiteImage from "@/assets/logo-white.png";
import { Reveal } from "@/components/reveal";
import type { ServicePageContent } from "@/data/service-content";
import { siteSettings } from "@/data/site-content";
import { ArrowRight, Check, MessageCircle, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PremiumImmobilienvermittlungPageProps = {
  content: ServicePageContent;
};

export function PremiumImmobilienvermittlungPage({
  content,
}: PremiumImmobilienvermittlungPageProps) {
  return (
    <main className="overflow-hidden bg-[#f8fafc] text-[#1f2937]">
      <PremiumHeader />

      <section className="relative isolate min-h-[100svh] overflow-hidden bg-[#0f172a] text-[#f8fafc]">
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.82)_0%,rgba(15,23,42,0.74)_28%,rgba(15,23,42,0.46)_58%,rgba(15,23,42,0.16)_84%,rgba(15,23,42,0.06)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(15,23,42,0.1)_0%,rgba(15,23,42,0.14)_38%,rgba(15,23,42,0.62)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(212,163,115,0.18),transparent_18%),radial-gradient(circle_at_76%_14%,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pt-38">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373] backdrop-blur-sm">
                {content.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.92] font-semibold tracking-[-0.045em] text-balance sm:text-[3.8rem] lg:text-[5rem]">
                Immobilien in Spanien - sicher, klar und deutsch begleitet.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e5e7eb] sm:text-[1.08rem]">
                {content.description} Damit wird aus einer reinen Maklersuche
                ein geführter Weg von der Auswahl bis zu den nächsten Schritten
                in Spanien.
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-8 grid gap-3 sm:grid-cols-3">
                {content.highlights.map((item) => (
                  <div
                    key={item}
                    className="rounded-[1.25rem] border border-white/10 bg-white/[0.06] px-4 py-4 backdrop-blur-sm"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#d4a373]/14 text-[#d4a373]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm leading-7 text-[#f8fafc]">{item}</p>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href={`/kontakt?thema=${encodeURIComponent(content.contactTopic)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a373] px-6 py-4 text-sm font-semibold text-[#0f172a] shadow-[0_20px_45px_rgba(212,163,115,0.22)] transition hover:translate-y-[-1px] hover:bg-[#e9c46a]"
              >
                Erstgespräch anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteSettings.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.12]"
              >
                Diskret per WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#d4a373]/24 bg-[#d4a373]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
                {content.introLabel}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#1f2937] sm:text-[3.45rem]">
                {content.introTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#6b7280] sm:text-lg">
                {content.introText}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {content.benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.9rem] border border-[#0f172a]/8 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.06)] sm:p-8">
                  <h3 className="text-[2.1rem] leading-[0.94] font-semibold tracking-[-0.035em] text-[#1f2937]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#6b7280]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f1f5f9] py-24 text-[#1f2937]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#d4a373]/24 bg-white/70 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
                {content.includedEyebrow}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">
                {content.includedTitle}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#6b7280] sm:text-lg">
                {content.includedDescription}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {content.includedItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[1.9rem] border border-[#0f172a]/8 bg-white p-7 shadow-[0_18px_40px_rgba(15,23,42,0.05)] sm:p-8">
                  <h3 className="text-[2rem] leading-[0.95] font-semibold tracking-[-0.035em] text-[#1f2937]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#6b7280]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f172a] py-24 text-[#f8fafc]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#d4a373]/24 bg-[#d4a373]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
                {content.processEyebrow}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
                {content.processTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#e5e7eb] sm:text-lg">
                {content.processDescription}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {content.processItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[1.9rem] border border-white/10 bg-white/[0.05] p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-[2.15rem] leading-none font-semibold tracking-[-0.04em] text-[#d4a373]">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(212,163,115,0.86),rgba(212,163,115,0))]" />
                  </div>
                  <h3 className="mt-6 text-[2rem] leading-[0.94] font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#cbd5e1]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#f8fafc] py-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          {content.note ? (
            <Reveal>
              <div className="rounded-[2rem] border border-[#d4a373]/18 bg-[linear-gradient(180deg,rgba(212,163,115,0.08),rgba(212,163,115,0.04))] p-8 text-[#1f2937] sm:p-10">
                <span className="inline-flex rounded-full border border-[#d4a373]/24 bg-white/70 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
                  Wichtiger Hinweis
                </span>
                <h3 className="mt-5 text-[2rem] leading-[0.94] font-semibold tracking-[-0.035em]">
                  {content.note.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#6b7280]">
                  {content.note.text}
                </p>
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <div
              className={`rounded-[2rem] border border-[#0f172a]/8 bg-white p-8 text-[#1f2937] shadow-[0_20px_44px_rgba(15,23,42,0.08)] sm:p-10 ${content.note ? "" : "lg:col-span-2"}`}
            >
              <span className="inline-flex rounded-full border border-[#d4a373]/24 bg-[#d4a373]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
                Kontakt
              </span>
              <h3 className="mt-5 text-[2.55rem] leading-[0.92] font-semibold tracking-[-0.04em]">
                {content.ctaTitle}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#6b7280]">
                {content.ctaText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/kontakt?thema=${encodeURIComponent(content.contactTopic)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d4a373] px-6 py-4 text-sm font-semibold text-[#0f172a] transition hover:translate-y-[-1px] hover:bg-[#e9c46a]"
                >
                  Zum Kontaktformular
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/immobilien"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-[#0f172a]/10 bg-[#f8fafc] px-6 py-4 text-sm font-semibold text-[#0f172a] transition hover:bg-[#f1f5f9]"
                >
                  Immobilien ansehen
                  <MoveRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <PremiumFooter />
    </main>
  );
}

function PremiumHeader() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-[rgba(15,23,42,0.74)] backdrop-blur-xl">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-10">
        <Link
          href="/"
          className="relative inline-flex h-12 w-[180px] sm:h-14 sm:w-[214px]"
        >
          <Image
            src={logoWhiteImage}
            alt="Costa del Sol Immobilien"
            fill
            sizes="214px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/82 lg:flex">
          <Link href="/" className="transition hover:text-white">
            Startseite
          </Link>
          <Link href="/immobilien" className="transition hover:text-white">
            Immobilien
          </Link>
          <Link href="/kontakt" className="transition hover:text-white">
            Kontakt
          </Link>
        </nav>

        <Link
          href="/kontakt?thema=Immobilienvermittlung"
          className="inline-flex items-center gap-2 rounded-full bg-[#d4a373] px-5 py-3 text-sm font-semibold text-[#0f172a] transition hover:bg-[#e9c46a]"
        >
          Beratung anfragen
          <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </header>
  );
}

function PremiumFooter() {
  return (
    <footer className="border-t border-[#0f172a]/8 bg-[#0f172a] text-[#f8fafc]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
            Immobilienvermittlung
          </p>
          <h2 className="mt-5 text-[2.35rem] leading-[0.92] font-semibold tracking-[-0.04em]">
            Eine ruhigere Premium-Variante für die Präsentation der
            Immobilienvermittlung.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#cbd5e1]">
            {siteSettings.shortName} begleitet deutsche Interessenten an der
            Costa del Sol mit ausgewählten Immobilien und strukturierter
            persönlicher Begleitung.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
            Direkt
          </p>
          <div className="mt-5 space-y-4 text-[#e5e7eb]">
            <p>
              <Link href="/" className="transition hover:text-white">
                Startseite
              </Link>
            </p>
            <p>
              <Link href="/immobilien" className="transition hover:text-white">
                Immobilien
              </Link>
            </p>
            <p>
              <Link href="/kontakt" className="transition hover:text-white">
                Kontaktformular
              </Link>
            </p>
          </div>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#d4a373]">
            Kontakt
          </p>
          <div className="mt-5 space-y-4 text-[#e5e7eb]">
            <p>{siteSettings.email}</p>
            <p>{siteSettings.phone}</p>
            <a
              href={siteSettings.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white transition hover:text-[#d4a373]"
            >
              WhatsApp
              <MessageCircle className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
