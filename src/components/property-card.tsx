import type { PropertyRecord } from "@/data/properties";
import { PropertyFactsCompact } from "@/components/property-facts";
import { getPropertyGroupLabel } from "@/lib/properties";
import { ArrowRight, MapPin } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type PropertyCardProps = {
  property: PropertyRecord;
  variant?: "default" | "homepage";
};

export function PropertyCard({
  property,
  variant = "default",
}: PropertyCardProps) {
  const isHomepage = variant === "homepage";

  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-[2rem] border border-[#0d2230]/10 bg-white shadow-[0_26px_70px_rgba(17,44,60,0.08)]">
      <Link
        href={`/immobilien/${property.slug}`}
        className="relative block aspect-[1.12] overflow-hidden"
      >
        <Image
          src={property.coverImage}
          alt={property.title}
          fill
          sizes="(max-width: 1024px) 100vw, 33vw"
          className="object-cover transition duration-700 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(9,24,34,0.08)_0%,rgba(9,24,34,0.22)_42%,rgba(9,24,34,0.7)_100%)]" />

        <div className="absolute left-5 top-5 flex flex-wrap gap-2">
          <span className="rounded-full border border-white/18 bg-white/18 px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.22em] text-white backdrop-blur-sm">
            {getPropertyGroupLabel(property.group)}
          </span>
          <span className="rounded-full border border-white/18 bg-white/18 px-3 py-1 text-[0.78rem] text-white/92 backdrop-blur-sm">
            {property.city}
          </span>
        </div>

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5">
          <span className="rounded-full border border-[#e5c088]/30 bg-[#e0bb7b] px-4 py-2 text-sm font-semibold text-[#08131b] shadow-[0_10px_24px_rgba(12,31,44,0.16)]">
            {property.priceLabel}
          </span>
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-6 sm:p-7">
        <div className="flex items-center gap-2 text-sm text-[#567182]">
          <MapPin className="h-4 w-4 text-[#4f87a3]" />
          <span>
            {property.city} · {property.region}
          </span>
        </div>

        <h3 className="mt-4 text-3xl leading-[0.96] font-semibold tracking-[-0.03em] text-[#0d2230]">
          <Link
            href={`/immobilien/${property.slug}`}
            className="transition hover:text-[#255f7c]"
          >
            {property.title}
          </Link>
        </h3>

        {!isHomepage ? (
          <>
            <p className="mt-4 text-base leading-8 text-[#59707d]">
              {property.summary}
            </p>

            <PropertyFactsCompact facts={property.facts} limit={3} />
          </>
        ) : null}

        <div className={isHomepage ? "mt-auto pt-8" : "mt-7"}>
          <Link
            href={`/immobilien/${property.slug}`}
            className={
              isHomepage
                ? "inline-flex w-full items-center justify-center gap-2 rounded-full border border-[#183f55]/12 bg-[#eff7fb] px-5 py-3.5 text-sm font-semibold text-[#183f55] transition hover:bg-[#dff0f7]"
                : "inline-flex items-center gap-2 rounded-full border border-[#183f55]/12 bg-[#eff7fb] px-5 py-3 text-sm font-semibold text-[#183f55] transition hover:bg-[#dff0f7]"
            }
          >
            Immobilie ansehen
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
