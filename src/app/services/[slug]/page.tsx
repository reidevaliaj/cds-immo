import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { servicePageContent } from "@/data/service-content";
import {
  getServicePageBySlug,
  servicePages,
} from "@/data/site-content";
import { ArrowRight, MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type ServiceDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export function generateStaticParams() {
  return servicePages.map((page) => ({
    slug: page.slug,
  }));
}

export default async function ServiceDetailPage({
  params,
}: ServiceDetailPageProps) {
  const { slug } = await params;
  const servicePage = getServicePageBySlug(slug);
  const content = servicePageContent[slug];

  if (!servicePage || !content) {
    notFound();
  }

  const secondaryHref =
    slug === "immobilienvermittlung" ? "/immobilien" : "/services";
  const secondaryLabel =
    slug === "immobilienvermittlung" ? "Immobilien ansehen" : "Alle Leistungen";

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[82svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={content.image}
          alt={content.imageAlt}
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.76)_22%,rgba(10,26,37,0.48)_46%,rgba(10,26,37,0.12)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.05)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.24)_80%,#eff7fb_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_22%,rgba(255,232,203,0.18),transparent_24%),radial-gradient(circle_at_22%_78%,rgba(255,255,255,0.12),transparent_22%)]" />

        <div className="relative z-10 mx-auto flex min-h-[82svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                {content.eyebrow}
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                {content.title}
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                {content.description}
              </p>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="mt-7 flex flex-wrap gap-3">
                {content.highlights.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/14 bg-white/10 px-4 py-2 text-sm text-[#f1f6f8] backdrop-blur-sm"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </Reveal>

            <Reveal
              delay={0.2}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Link
                href={`/kontakt?thema=${encodeURIComponent(content.contactTopic)}`}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
              >
                Zum Kontaktformular
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={secondaryHref}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/14"
              >
                {secondaryLabel}
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
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[0.92fr_1.08fr] lg:px-10">
          <Reveal>
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b68b4c]">
                {content.introLabel}
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#0d2230]">
                {content.introTitle}
              </h2>
              <p className="mt-6 text-base leading-8 text-[#5f6e79] sm:text-lg">
                {content.introText}
              </p>
            </div>
          </Reveal>

          <div className="space-y-4">
            {content.benefits.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-7 shadow-[0_22px_58px_rgba(17,44,60,0.08)] sm:p-8">
                  <h3 className="text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5f6e79]">
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
              eyebrow={content.includedEyebrow}
              title={content.includedTitle}
              description={content.includedDescription}
              inverted
              wide
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-2">
            {content.includedItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/6 p-8 shadow-[0_24px_70px_rgba(4,20,31,0.14)] backdrop-blur-sm sm:p-10">
                  <h3 className="text-4xl leading-[0.94] font-semibold tracking-[-0.04em] text-[#f6efe5]">
                    {item.title}
                  </h3>
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
              eyebrow={content.processEyebrow}
              title={content.processTitle}
              description={content.processDescription}
              align="center"
            />
          </Reveal>

          <div className="mt-16 grid gap-5 lg:grid-cols-3">
            {content.processItems.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.05}>
                <article className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <span className="inline-flex rounded-full border border-[#183f55]/10 bg-[#eff7fb] px-4 py-2 text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-[#b68b4c]">
                    Phase 0{index + 1}
                  </span>
                  <h3 className="mt-6 text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {item.title}
                  </h3>
                  <p className="mt-5 text-base leading-8 text-[#5f6e79]">
                    {item.text}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>

          <div className="mt-16 grid gap-6 lg:grid-cols-[0.88fr_1.12fr]">
            {content.note ? (
              <Reveal>
                <aside className="rounded-[2rem] border border-[#d7b172]/22 bg-[linear-gradient(160deg,rgba(248,252,254,0.96),rgba(255,245,226,0.92))] p-8 shadow-[0_22px_58px_rgba(17,44,60,0.08)]">
                  <span className="inline-flex rounded-full border border-[#d7b172]/28 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#b68b4c]">
                    Wichtiger Hinweis
                  </span>
                  <h3 className="mt-5 text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
                    {content.note.title}
                  </h3>
                  <p className="mt-4 text-base leading-8 text-[#5f6e79]">
                    {content.note.text}
                  </p>
                  {content.note.items?.length ? (
                    <ul className="mt-5 space-y-3 text-sm leading-7 text-[#45606f]">
                      {content.note.items.map((item) => (
                        <li key={item} className="flex gap-3">
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#c59a5a]" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </aside>
              </Reveal>
            ) : (
              <div />
            )}

            <Reveal>
              <div className="rounded-[2rem] bg-[#143649] p-8 text-[#f6efe5] shadow-[0_28px_80px_rgba(8,24,35,0.14)] sm:p-10">
                <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                  Kontakt
                </span>
                <h3 className="mt-5 text-4xl leading-[0.94] font-semibold tracking-[-0.04em]">
                  {content.ctaTitle}
                </h3>
                <p className="mt-5 max-w-2xl text-base leading-8 text-[#d7e2e8]">
                  {content.ctaText}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    href={`/kontakt?thema=${encodeURIComponent(content.contactTopic)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-6 py-4 text-sm font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                  >
                    Anfrage senden
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href="/services"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-white/14 bg-white/8 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/12"
                  >
                    Weitere Leistungen
                    <MoveRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
