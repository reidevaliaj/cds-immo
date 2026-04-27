import logoWhiteImage from "@/assets/logo-white.png";
import { Reveal } from "@/components/reveal";
import type { ServicePageContent } from "@/data/service-content";
import { siteSettings } from "@/data/site-content";
import {
  ArrowRight,
  Check,
  MessageCircle,
  MoveRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PremiumImmobilienvermittlungPageProps = {
  content: ServicePageContent;
};

export function PremiumImmobilienvermittlungPage({
  content,
}: PremiumImmobilienvermittlungPageProps) {
  return (
    <main className="overflow-hidden bg-[#0f1115] text-[#f5f5f3]">
      <PremiumHeader />

      <section className="relative isolate min-h-[100svh] overflow-hidden">
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,11,15,0.88)_0%,rgba(10,11,15,0.78)_28%,rgba(10,11,15,0.46)_56%,rgba(10,11,15,0.18)_82%,rgba(10,11,15,0.08)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(10,11,15,0.08)_0%,rgba(10,11,15,0.18)_38%,rgba(10,11,15,0.6)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_18%,rgba(198,169,107,0.16),transparent_18%),radial-gradient(circle_at_76%_14%,rgba(255,255,255,0.08),transparent_18%)]" />

        <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pt-38">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c6a96b] backdrop-blur-sm">
                {content.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.92] font-semibold tracking-[-0.045em] text-balance sm:text-[3.8rem] lg:text-[5rem]">
                {content.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#ddd9d1] sm:text-[1.08rem]">
                {content.description}
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
                      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#c6a96b]/14 text-[#c6a96b]">
                        <Check className="h-3.5 w-3.5" />
                      </span>
                      <p className="text-sm leading-7 text-[#f2ede6]">{item}</p>
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
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6a96b] px-6 py-4 text-sm font-semibold text-[#0f1115] shadow-[0_20px_45px_rgba(198,169,107,0.22)] transition hover:translate-y-[-1px] hover:bg-[#d1b57a]"
              >
                Erstgespräch anfragen
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={siteSettings.whatsapp}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
              >
                Diskret per WhatsApp
                <MessageCircle className="h-4 w-4" />
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="bg-[#11161c] py-24">
        <div className="mx-auto grid max-w-[1280px] gap-12 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          <Reveal>
            <div className="max-w-xl">
              <span className="inline-flex rounded-full border border-[#c6a96b]/24 bg-[#c6a96b]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
                {content.introLabel}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] sm:text-[3.45rem]">
                {content.introTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#c9c4bb] sm:text-lg">
                {content.introText}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-5">
            {content.benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[1.9rem] border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.05),rgba(255,255,255,0.03))] p-7 backdrop-blur-sm sm:p-8">
                  <h3 className="text-[2.1rem] leading-[0.94] font-semibold tracking-[-0.035em] text-[#f5f5f3]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#c9c4bb]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#eae3d9] py-24 text-[#171a1f]">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="max-w-4xl">
              <span className="inline-flex rounded-full border border-[#171a1f]/10 bg-white/60 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#a88548]">
                {content.includedEyebrow}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.95] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.65rem]">
                {content.includedTitle}
              </h2>
              <p className="mt-6 max-w-3xl text-base leading-8 text-[#5a5750] sm:text-lg">
                {content.includedDescription}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {content.includedItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[1.9rem] border border-[#171a1f]/8 bg-white/72 p-7 shadow-[0_20px_44px_rgba(15,17,21,0.06)] sm:p-8">
                  <h3 className="text-[2rem] leading-[0.95] font-semibold tracking-[-0.035em] text-[#171a1f]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5a5750]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#0f1115] py-24">
        <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
          <Reveal>
            <div className="mx-auto max-w-3xl text-center">
              <span className="inline-flex rounded-full border border-[#c6a96b]/24 bg-[#c6a96b]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
                {content.processEyebrow}
              </span>
              <h2 className="mt-6 text-4xl leading-[0.94] font-semibold tracking-[-0.04em] sm:text-5xl lg:text-[3.7rem]">
                {content.processTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#c9c4bb] sm:text-lg">
                {content.processDescription}
              </p>
            </div>
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {content.processItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[1.9rem] border border-white/10 bg-white/[0.04] p-8 backdrop-blur-sm">
                  <div className="flex items-center gap-4">
                    <span className="text-[2.15rem] leading-none font-semibold tracking-[-0.04em] text-[#c6a96b]">
                      0{index + 1}
                    </span>
                    <span className="h-px flex-1 bg-[linear-gradient(90deg,rgba(198,169,107,0.86),rgba(198,169,107,0))]" />
                  </div>
                  <h3 className="mt-6 text-[2rem] leading-[0.94] font-semibold tracking-[-0.035em]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#c9c4bb]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[#15191f] py-24">
        <div className="mx-auto grid max-w-[1280px] gap-6 px-6 lg:grid-cols-[0.86fr_1.14fr] lg:px-10">
          {content.note ? (
            <Reveal>
              <div className="rounded-[2rem] border border-[#c6a96b]/18 bg-[linear-gradient(180deg,rgba(198,169,107,0.08),rgba(198,169,107,0.04))] p-8 text-[#f5f5f3] sm:p-10">
                <span className="inline-flex rounded-full border border-[#c6a96b]/24 bg-[#c6a96b]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
                  Wichtiger Hinweis
                </span>
                <h3 className="mt-5 text-[2rem] leading-[0.94] font-semibold tracking-[-0.035em]">
                  {content.note.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-[#d7d0c4]">
                  {content.note.text}
                </p>
              </div>
            </Reveal>
          ) : null}

          <Reveal delay={0.05}>
            <div className={`rounded-[2rem] border border-white/10 bg-[#0f1115] p-8 text-[#f5f5f3] shadow-[0_28px_90px_rgba(0,0,0,0.28)] sm:p-10 ${content.note ? "" : "lg:col-span-2"}`}>
              <span className="inline-flex rounded-full border border-[#c6a96b]/24 bg-[#c6a96b]/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
                Kontakt
              </span>
              <h3 className="mt-5 text-[2.55rem] leading-[0.92] font-semibold tracking-[-0.04em]">
                {content.ctaTitle}
              </h3>
              <p className="mt-5 max-w-2xl text-base leading-8 text-[#c9c4bb]">
                {content.ctaText}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={`/kontakt?thema=${encodeURIComponent(content.contactTopic)}`}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#c6a96b] px-6 py-4 text-sm font-semibold text-[#0f1115] transition hover:translate-y-[-1px] hover:bg-[#d1b57a]"
                >
                  Zum Kontaktformular
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href="/immobilien"
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/[0.06] px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/[0.1]"
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
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-5 lg:px-10">
        <Link href="/" className="relative inline-flex h-12 w-[180px] sm:h-14 sm:w-[214px]">
          <Image
            src={logoWhiteImage}
            alt="Costa del Sol Immobilien"
            fill
            sizes="214px"
            className="object-contain object-left"
            priority
          />
        </Link>

        <nav className="hidden items-center gap-8 text-sm font-medium text-white/78 lg:flex">
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
          className="inline-flex items-center gap-2 rounded-full border border-white/14 bg-white/[0.08] px-5 py-3 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/[0.12]"
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
    <footer className="border-t border-white/8 bg-[#0b0d11] text-[#f5f5f3]">
      <div className="mx-auto grid max-w-[1280px] gap-10 px-6 py-14 lg:grid-cols-[1.2fr_0.8fr_0.8fr] lg:px-10">
        <div className="max-w-lg">
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
            Immobilienvermittlung
          </p>
          <h2 className="mt-5 text-[2.35rem] leading-[0.92] font-semibold tracking-[-0.04em]">
            Premium-Präsentation für eine Leistung, die Ruhe und Orientierung
            vermitteln soll.
          </h2>
          <p className="mt-5 text-base leading-8 text-[#c9c4bb]">
            {siteSettings.shortName} begleitet deutsche Interessenten an der
            Costa del Sol mit ausgewählten Immobilien und strukturierter
            persönlicher Begleitung.
          </p>
        </div>

        <div>
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
            Direkt
          </p>
          <div className="mt-5 space-y-4 text-[#ddd9d1]">
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
          <p className="text-sm font-semibold uppercase tracking-[0.28em] text-[#c6a96b]">
            Kontakt
          </p>
          <div className="mt-5 space-y-4 text-[#ddd9d1]">
            <p>{siteSettings.email}</p>
            <p>{siteSettings.phone}</p>
            <a
              href={siteSettings.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-white transition hover:text-[#d4b079]"
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
