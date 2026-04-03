"use client";

import { PropertyCard } from "@/components/property-card";
import type { PropertyGroupKey, PropertyRecord } from "@/data/properties";
import { propertyGroups } from "@/data/properties";
import { normalizePropertySearchValue } from "@/lib/properties";
import { Search } from "lucide-react";
import { useEffect, useState } from "react";

type PropertyBrowserProps = {
  properties: PropertyRecord[];
  initialQuery?: string;
};

export function PropertyBrowser({
  properties,
  initialQuery = "",
}: PropertyBrowserProps) {
  const [query, setQuery] = useState(initialQuery);
  const [activeGroup, setActiveGroup] = useState<PropertyGroupKey | "alle">(
    "alle",
  );

  useEffect(() => {
    setQuery(initialQuery);
  }, [initialQuery]);

  const normalizedQuery = normalizePropertySearchValue(query);
  const filteredProperties = properties.filter((property) => {
    const matchesGroup =
      activeGroup === "alle" ? true : property.group === activeGroup;
    const normalizedHaystack = normalizePropertySearchValue(
      [
        property.title,
        property.city,
        property.region,
        property.summary,
        property.priceLabel,
        ...property.highlights,
      ].join(" "),
    );

    const matchesQuery =
      normalizedQuery.length === 0
        ? true
        : normalizedHaystack.includes(normalizedQuery);

    return matchesGroup && matchesQuery;
  });

  return (
    <div>
      <div className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-6 shadow-[0_22px_60px_rgba(17,44,60,0.08)] sm:p-8">
        <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
          <label className="block">
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b68b4c]">
              Suche
            </span>
            <div className="mt-3 flex items-center gap-3 rounded-full border border-[#183f55]/10 bg-[#f8fcfe] px-5 py-4">
              <Search className="h-5 w-5 text-[#5d7d90]" />
              <input
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ort, Preis, Projekt oder Schlagwort suchen"
                className="w-full bg-transparent text-base text-[#15384d] outline-none placeholder:text-[#6d8595]"
              />
            </div>
          </label>

          <div>
            <span className="text-sm font-semibold uppercase tracking-[0.22em] text-[#b68b4c]">
              Objektgruppe
            </span>
            <div className="mt-3 flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => setActiveGroup("alle")}
                className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                  activeGroup === "alle"
                    ? "bg-[#183f55] text-white shadow-[0_16px_36px_rgba(24,63,85,0.18)]"
                    : "border border-[#183f55]/10 bg-[#f8fcfe] text-[#183f55] hover:bg-[#eaf5fa]"
                }`}
              >
                Alle Immobilien
              </button>
              {propertyGroups.map((group) => (
                <button
                  key={group.id}
                  type="button"
                  onClick={() => setActiveGroup(group.id)}
                  className={`rounded-full px-4 py-3 text-sm font-semibold transition ${
                    activeGroup === group.id
                      ? "bg-[#183f55] text-white shadow-[0_16px_36px_rgba(24,63,85,0.18)]"
                      : "border border-[#183f55]/10 bg-[#f8fcfe] text-[#183f55] hover:bg-[#eaf5fa]"
                  }`}
                >
                  {group.shortLabel}
                </button>
              ))}
            </div>
          </div>
        </div>

        <p className="mt-5 text-sm leading-7 text-[#5f7380]">
          {filteredProperties.length} Immobilien passen aktuell zu Ihrer Suche.
        </p>
      </div>

      <div className="mt-12">
        {filteredProperties.length > 0 ? (
          <div className="grid gap-5 lg:grid-cols-2 xl:grid-cols-3">
            {filteredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
        ) : (
          <div className="rounded-[2rem] border border-[#0d2230]/10 bg-white p-8 text-center shadow-[0_22px_60px_rgba(17,44,60,0.08)] sm:p-10">
            <h2 className="text-3xl leading-[0.98] font-semibold tracking-[-0.03em] text-[#0d2230]">
              Keine Immobilien für diese Suche gefunden
            </h2>
            <p className="mt-4 text-base leading-8 text-[#5f7380]">
              Versuchen Sie einen anderen Ort, ein allgemeineres Schlagwort oder
              wechseln Sie zurück zu allen Objektgruppen.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
