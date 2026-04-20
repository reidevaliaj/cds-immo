import { MarkdownContent } from "@/components/markdown-content";
import { PropertyCard } from "@/components/property-card";
import { PropertyFactsList } from "@/components/property-facts";
import { PropertyGallery } from "@/components/property-gallery";
import { Reveal } from "@/components/reveal";
import { siteSettings } from "@/data/site-content";
import {
  getProperties,
  getPropertyBySlug,
  getPropertyGroupLabel,
} from "@/lib/properties";
import { ArrowLeft, ArrowRight, MapPin } from "lucide-react";
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

type PropertyDetailPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: PropertyDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    return {
      title: "Immobilie nicht gefunden",
    };
  }

  return {
    title: property.title,
    description: property.summary,
  };
}

export default async function PropertyDetailPage({
  params,
}: PropertyDetailPageProps) {
  const { slug } = await params;
  const property = await getPropertyBySlug(slug);

  if (!property) {
    notFound();
  }

  const relatedProperties = (await getProperties())
    .filter(
      (entry) => entry.group === property.group && entry.slug !== property.slug,
    )
    .slice(0, 3);

  return (
    <main className="overflow-hidden bg-[#f8fcfe]">
      <section className="relative isolate min-h-[84svh] overflow-hidden bg-[#102a39] text-[#f8fcfe]">
        <Image
          src={property.coverImage}
          alt={property.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(7,18,26,0.88)_0%,rgba(7,18,26,0.7)_30%,rgba(7,18,26,0.24)_64%,rgba(7,18,26,0.4)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(11,28,40,0.18)_0%,rgba(11,28,40,0.1)_32%,rgba(11,28,40,0.78)_100%)]" />

        <div className="relative mx-auto flex min-h-[84svh] max-w-[1280px] items-end px-6 pb-16 pt-34 lg:px-10">
          <div className="max-w-4xl">
            <Reveal>
              <Link
                href="/immobilien"
                className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur-sm transition hover:bg-white/14"
              >
                <ArrowLeft className="h-4 w-4" />
                Zurück zur Immobilienübersicht
              </Link>
            </Reveal>

            <Reveal delay={0.05}>
              <div className="mt-7 flex flex-wrap gap-3">
                <span className="rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm font-semibold text-[#f3d8a8] backdrop-blur-sm">
                  {getPropertyGroupLabel(property.group)}
                </span>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/16 bg-white/10 px-4 py-2 text-sm text-white/88 backdrop-blur-sm">
                  <MapPin className="h-4 w-4" />
                  {property.city} · {property.region}
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1}>
              <h1 className="mt-6 text-5xl leading-[0.92] font-semibold tracking-[-0.05em] text-balance sm:text-6xl lg:text-7xl">
                {property.title}
              </h1>
            </Reveal>

            <Reveal delay={0.15}>
              <p className="mt-6 max-w-3xl text-lg leading-8 text-[#ebf5f9] sm:text-xl">
                {property.summary}
              </p>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="mt-8 inline-flex rounded-full bg-[#d7b172] px-6 py-4 text-base font-semibold text-[#08131b] shadow-[0_20px_45px_rgba(12,31,44,0.22)]">
                {property.priceLabel}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-10 px-6 lg:grid-cols-[1.05fr_0.95fr] lg:px-10">
          <div className="min-w-0">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#b68b4c]">
                Überblick
              </span>
              <h2 className="mt-6 text-5xl leading-[0.94] font-semibold tracking-[-0.045em] text-[#0d2230]">
                Was diese Immobilie besonders macht.
              </h2>
              <PropertyGallery
                images={property.galleryImages}
                title={property.title}
              />
              <MarkdownContent
                content={property.description}
                className="mt-8 space-y-6 text-lg leading-9 text-[#526977]"
              />
            </Reveal>

            <Reveal delay={0.06}>
              <div className="mt-12 grid gap-4 sm:grid-cols-2">
                {property.highlights.map((highlight) => (
                  <div
                    key={highlight}
                    className="rounded-[1.7rem] border border-[#183f55]/10 bg-white p-6 shadow-[0_18px_45px_rgba(17,44,60,0.06)]"
                  >
                    <p className="text-base leading-8 text-[#35505f]">
                      {highlight}
                    </p>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <aside className="rounded-[2rem] border border-[#183f55]/10 bg-white p-8 shadow-[0_24px_70px_rgba(17,44,60,0.08)] lg:sticky lg:top-28">
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-[#eff7fb] px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#b68b4c]">
                Eckdaten
              </span>

              <PropertyFactsList facts={property.facts} />

              <div className="mt-10 rounded-[1.8rem] bg-[linear-gradient(180deg,#eff7fb_0%,#e7f3f8_100%)] p-6">
                <h3 className="text-2xl leading-none font-semibold tracking-[-0.03em] text-[#0d2230]">
                  Exposé und Beratung anfragen
                </h3>
                <p className="mt-4 text-base leading-8 text-[#566f7e]">
                  Wenn diese Immobilie zu Ihren Plänen passt, begleiten wir Sie
                  gern bei Exposé, Besichtigung, Finanzierung und den nächsten
                  Schritten vor Ort.
                </p>

                <div className="mt-8 flex flex-col gap-3">
                  <Link
                    href={`/kontakt?thema=${encodeURIComponent(`Immobilie: ${property.title}`)}`}
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-[#d7b172] px-5 py-3.5 text-sm font-semibold text-[#08131b] shadow-[0_18px_38px_rgba(184,135,72,0.22)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                  >
                    Exposé anfragen
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                  <Link
                    href={siteSettings.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full border border-[#183f55]/12 bg-white px-5 py-3.5 text-sm font-semibold text-[#183f55] transition hover:bg-[#eff7fb]"
                  >
                    Per WhatsApp kontaktieren
                  </Link>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>
      </section>

      {relatedProperties.length > 0 ? (
        <section className="bg-[#efe6d7] py-24 sm:py-28">
          <div className="mx-auto max-w-[1280px] px-6 lg:px-10">
            <Reveal>
              <span className="inline-flex rounded-full border border-[#183f55]/10 bg-white px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.26em] text-[#b68b4c]">
                Weitere Immobilien
              </span>
              <h2 className="mt-6 max-w-3xl text-5xl leading-[0.94] font-semibold tracking-[-0.045em] text-[#0d2230]">
                Ähnliche Immobilien aus derselben Objektgruppe.
              </h2>
            </Reveal>

            <div className="mt-10 grid gap-5 lg:grid-cols-3">
              {relatedProperties.map((entry, index) => (
                <Reveal key={entry.id} delay={index * 0.05}>
                  <PropertyCard property={entry} />
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      ) : null}
    </main>
  );
}
