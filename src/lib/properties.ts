import {
  getGroupMeta,
  localProperties,
  type PropertyFact,
  type PropertyGroupKey,
  type PropertyRecord,
  type PropertyStatus,
} from "@/data/properties";
import heroImage from "@/assets/hero.jpg";

type StrapiEntry = {
  id?: number | string;
  documentId?: string;
  slug?: string;
  titel?: string;
  objektgruppe?: PropertyGroupKey;
  ort?: string;
  region?: string;
  preisText?: string;
  kurzbeschreibung?: string;
  beschreibung?: string;
  eckdaten?: string;
  highlights?: string;
  featured?: boolean;
  vermarktungsstatus?: PropertyStatus;
  vorschauBild?: {
    url?: string;
  };
};

export type PropertyLocationSummary = {
  city: string;
  displayCity: string;
  count: number;
  image: string;
  href: string;
  description: string;
};

const locationMeta = {
  marbella: {
    displayCity: "Marbella",
    description:
      "Exklusive Lagen, kurze Wege zum Meer und starke Nachfrage bei Villen und hochwertigen Immobilien.",
  },
  "la cala de mijas": {
    displayCity: "La Cala de Mijas",
    description:
      "Beliebter Küstenort mit Strandnähe, alltagstauglicher Infrastruktur und gefragten Familienlagen.",
  },
  benalmadena: {
    displayCity: "Benalmádena",
    description:
      "Gute Anbindung an Málaga, Meerblicklagen und eine Mischung aus Wohnen, Hafen und Alltag.",
  },
  torremolinos: {
    displayCity: "Torremolinos",
    description:
      "Direkte Küstenlage, schnelle Wege zum Flughafen und besonders attraktiv für dauerhaften Alltag am Meer.",
  },
  manilva: {
    displayCity: "Manilva",
    description:
      "Ruhigerer Küstenabschnitt mit Neubauprojekten, Meerblick und starkem Preis-Leistungs-Verhältnis.",
  },
  mijas: {
    displayCity: "Mijas",
    description:
      "Zwischen Küste und Hügeln mit guter Aussicht, gewachsener Umgebung und vielseitigen Wohnlagen.",
  },
  "rincon de la victoria": {
    displayCity: "Rincón de la Victoria",
    description:
      "Östlich von Málaga mit entspannter Küstenatmosphäre und guten Neubauoptionen nahe der Stadt.",
  },
} as const;

const locationPriority: Record<string, number> = {
  marbella: 0,
  "la cala de mijas": 1,
  benalmadena: 2,
  torremolinos: 3,
  manilva: 4,
  mijas: 5,
  "rincon de la victoria": 6,
};

function splitLines(value: string | undefined) {
  return (value ?? "")
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeSearchValue(value: string) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .trim();
}

function parseFacts(value: string | undefined): PropertyFact[] {
  return splitLines(value).map((line) => {
    const parts = line.split(":");

    if (parts.length < 2) {
      return { label: "Hinweis", value: line };
    }

    const label = parts.shift()?.trim() ?? "Hinweis";
    const factValue = parts.join(":").trim();

    return { label, value: factValue };
  });
}

function normalizeImageUrl(value: string | undefined) {
  if (!value) {
    return heroImage.src;
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!baseUrl) {
    return value;
  }

  return new URL(value, baseUrl).toString();
}

function normalizeProperty(entry: StrapiEntry): PropertyRecord | null {
  if (!entry.slug || !entry.titel || !entry.objektgruppe || !entry.ort) {
    return null;
  }

  return {
    id: String(entry.documentId ?? entry.id ?? entry.slug),
    slug: entry.slug,
    title: entry.titel,
    group: entry.objektgruppe,
    city: entry.ort,
    region: entry.region ?? "Costa del Sol",
    priceLabel: entry.preisText ?? "Preis auf Anfrage",
    summary: entry.kurzbeschreibung ?? "",
    description: entry.beschreibung ?? entry.kurzbeschreibung ?? "",
    facts: parseFacts(entry.eckdaten),
    highlights: splitLines(entry.highlights),
    coverImage: normalizeImageUrl(entry.vorschauBild?.url),
    featured: Boolean(entry.featured),
    status: entry.vermarktungsstatus ?? "verfuegbar",
  };
}

function mergeWithLocalFallback(property: PropertyRecord): PropertyRecord {
  const fallback = localProperties.find((entry) => entry.slug === property.slug);

  if (!fallback) {
    return property;
  }

  return {
    ...fallback,
    ...property,
    facts: property.facts.length > 0 ? property.facts : fallback.facts,
    highlights:
      property.highlights.length > 0 ? property.highlights : fallback.highlights,
    coverImage: property.coverImage || fallback.coverImage,
    description: property.description || fallback.description,
    summary: property.summary || fallback.summary,
    priceLabel: property.priceLabel || fallback.priceLabel,
  };
}

export async function getProperties(): Promise<PropertyRecord[]> {
  const baseUrl = process.env.NEXT_PUBLIC_STRAPI_URL;

  if (!baseUrl) {
    return localProperties;
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/properties?populate=vorschauBild&pagination[pageSize]=100&sort[0]=featured:desc&sort[1]=titel:asc`,
      { cache: "no-store" },
    );

    if (!response.ok) {
      throw new Error("Strapi properties could not be loaded.");
    }

    const payload = await response.json();
    const rawEntries: unknown[] = Array.isArray(payload?.data) ? payload.data : [];
    const normalized = rawEntries
      .map((item) => {
        const typedItem = item as StrapiEntry & { attributes?: StrapiEntry };
        const entry = typedItem.attributes ?? typedItem;

        return entry ? normalizeProperty(entry) : null;
      })
      .map((item) => (item ? mergeWithLocalFallback(item) : null))
      .filter((item): item is PropertyRecord => Boolean(item));

    return normalized.length > 0 ? normalized : localProperties;
  } catch {
    return localProperties;
  }
}

export async function getFeaturedProperties(
  limit = 4,
): Promise<PropertyRecord[]> {
  const properties = await getProperties();

  return properties
    .filter((property) => property.featured)
    .slice(0, limit);
}

export async function getPropertyBySlug(
  slug: string,
): Promise<PropertyRecord | null> {
  const properties = await getProperties();

  return properties.find((property) => property.slug === slug) ?? null;
}

export function getPropertyGroupLabel(group: PropertyGroupKey) {
  return getGroupMeta(group).shortLabel;
}

export function normalizePropertySearchValue(value: string) {
  return normalizeSearchValue(value);
}

export async function getTopPropertyLocations(
  limit = 4,
): Promise<PropertyLocationSummary[]> {
  const properties = await getProperties();
  const locationMap = new Map<
    string,
    {
      city: string;
      count: number;
      image: string;
      featured: boolean;
    }
  >();

  for (const property of properties) {
    const key = normalizeSearchValue(property.city);

    if (!key) {
      continue;
    }

    const existing = locationMap.get(key);

    if (!existing) {
      locationMap.set(key, {
        city: property.city,
        count: 1,
        image: property.coverImage,
        featured: property.featured,
      });
      continue;
    }

    existing.count += 1;

    if ((!existing.image && property.coverImage) || (!existing.featured && property.featured)) {
      existing.image = property.coverImage || existing.image;
      existing.featured = property.featured;
    }
  }

  return [...locationMap.entries()]
    .sort((a, b) => {
      const countDiff = b[1].count - a[1].count;

      if (countDiff !== 0) {
        return countDiff;
      }

      const priorityDiff =
        (locationPriority[a[0]] ?? 999) - (locationPriority[b[0]] ?? 999);

      if (priorityDiff !== 0) {
        return priorityDiff;
      }

      return a[1].city.localeCompare(b[1].city, "de");
    })
    .slice(0, limit)
    .map(([key, value]) => {
      const meta = locationMeta[key as keyof typeof locationMeta];
      const displayCity = meta?.displayCity ?? value.city;

      return {
        city: value.city,
        displayCity,
        count: value.count,
        image: value.image || heroImage.src,
        href: `/immobilien?ort=${encodeURIComponent(displayCity)}`,
        description:
          meta?.description ??
          "Ausgewählte Immobilien in einer Lage, die für viele Käufer an der Costa del Sol besonders interessant ist.",
      };
    });
}
