import type { PropertyFact } from "@/data/properties";
import type { LucideIcon } from "lucide-react";
import {
  Bath,
  BedDouble,
  Building2,
  CalendarDays,
  CarFront,
  Compass,
  Flag,
  Info,
  LayoutGrid,
  Package,
  Plane,
  Ruler,
  SunMedium,
  Trees,
  Umbrella,
  Waves,
} from "lucide-react";

const propertyFactIcons: Record<string, LucideIcon> = {
  wohnflaeche: Ruler,
  grundstueck: Trees,
  schlafzimmer: BedDouble,
  badezimmer: Bath,
  garage: CarFront,
  pool: Waves,
  terrasse: SunMedium,
  strand: Umbrella,
  stockwerk: Building2,
  ausrichtung: Compass,
  fertigstellung: CalendarDays,
  baujahr: CalendarDays,
  flughafen: Plane,
  golf: Flag,
  einheiten: LayoutGrid,
  zusatzraum: Package,
};

function getPropertyFactIcon(key?: string) {
  if (!key) {
    return Info;
  }

  return propertyFactIcons[key] ?? Info;
}

function getVisibleFacts(facts: PropertyFact[], limit?: number) {
  const filtered = facts.filter((fact) => fact.value?.trim());

  if (!limit) {
    return filtered;
  }

  return filtered.slice(0, limit);
}

type PropertyFactsCompactProps = {
  facts: PropertyFact[];
  limit?: number;
};

export function PropertyFactsCompact({
  facts,
  limit = 3,
}: PropertyFactsCompactProps) {
  const visibleFacts = getVisibleFacts(facts, limit);

  if (visibleFacts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 grid gap-2.5">
      {visibleFacts.map((fact) => {
        const Icon = getPropertyFactIcon(fact.key);

        return (
          <div
            key={`${fact.key ?? fact.label}-${fact.value}`}
            className="grid grid-cols-[1.9rem_minmax(0,1fr)] items-center gap-3 text-[#183f55]"
          >
            <span className="inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#eff7fb] text-[#3d7590]">
              <Icon className="h-4 w-4" />
            </span>
            <span
              className="min-w-0 truncate text-sm font-semibold leading-6 text-[#183f55]"
              title={fact.value}
            >
              {fact.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}

type PropertyFactsListProps = {
  facts: PropertyFact[];
};

export function PropertyFactsList({ facts }: PropertyFactsListProps) {
  const visibleFacts = getVisibleFacts(facts);

  if (visibleFacts.length === 0) {
    return null;
  }

  return (
    <div className="mt-8 grid gap-x-5 gap-y-4 sm:grid-cols-2">
      {visibleFacts.map((fact) => {
        const Icon = getPropertyFactIcon(fact.key);

        return (
          <div
            key={`${fact.key ?? fact.label}-${fact.value}`}
            className="flex items-start gap-3 border-b border-[#183f55]/8 pb-4"
          >
            <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-[#eff7fb] text-[#3d7590]">
              <Icon className="h-4 w-4" />
            </span>

            <div className="min-w-0">
              <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#587080]">
                {fact.label}
              </p>
              <p className="mt-1.5 text-sm font-semibold text-[#183f55] sm:text-[0.96rem]">
                {fact.value}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

type PropertyFactsInlineProps = {
  facts: PropertyFact[];
  limit?: number;
};

export function PropertyFactsInline({
  facts,
  limit = 4,
}: PropertyFactsInlineProps) {
  const visibleFacts = getVisibleFacts(facts, limit);

  if (visibleFacts.length === 0) {
    return null;
  }

  return (
    <div className="mt-6 flex flex-wrap gap-3">
      {visibleFacts.map((fact) => {
        const Icon = getPropertyFactIcon(fact.key);

        return (
          <div
            key={`${fact.key ?? fact.label}-${fact.value}`}
            className="inline-flex items-center gap-3 rounded-full border border-[#183f55]/8 bg-[#f6fbfe] px-4 py-2.5 text-[#183f55]"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-white text-[#3d7590] shadow-[0_8px_18px_rgba(17,44,60,0.08)]">
              <Icon className="h-4 w-4" />
            </span>
            <span className="text-sm font-semibold leading-6 text-[#183f55]">
              {fact.value}
            </span>
          </div>
        );
      })}
    </div>
  );
}
