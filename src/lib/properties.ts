import {
  getGroupMeta,
  localProperties,
  type PropertyFact,
  type PropertyGroupKey,
  type PropertyRecord,
  type PropertyStatus,
} from "@/data/properties";
import heroImage from "@/assets/hero2.jpg";

type StrapiEntry = {
  id?: number | string;
  documentId?: string;
  slug?: string;
  titel?: string;
  objektgruppe?: PropertyGroupKey;
  ort?: string;
  region?: string;
  preisText?: string;
  wohnflaeche?: string;
  grundstueck?: string;
  schlafzimmer?: string;
  badezimmer?: string;
  garage?: string;
  pool?: string;
  terrasse?: string;
  strand?: string;
  stockwerk?: string;
  ausrichtung?: string;
  fertigstellung?: string;
  baujahr?: string;
  flughafen?: string;
  golf?: string;
  einheiten?: string;
  zusatzraum?: string;
  kurzbeschreibung?: string;
  beschreibung?: string;
  eckdaten?: string;
  highlights?: string;
  featured?: boolean;
  vermarktungsstatus?: PropertyStatus;
  vorschauBild?: {
    url?: string;
  };
  bildergalerie?: Array<{
    url?: string;
  }>;
};

export type PropertyLocationSummary = {
  city: string;
  displayCity: string;
  count: number;
  image: string;
  href: string;
  description: string;
};

type FactField = {
  key: string;
  label: string;
  aliases: string[];
};

const propertyFactFields: FactField[] = [
  {
    key: "wohnflaeche",
    label: "Wohnfläche",
    aliases: ["wohnflaeche", "wohnflache", "wohn und nutzflaeche", "gesamtflaeche"],
  },
  {
    key: "grundstueck",
    label: "Grundstück / Areal",
    aliases: ["grundstueck", "grundstuck", "areal"],
  },
  {
    key: "schlafzimmer",
    label: "Schlafzimmer",
    aliases: ["schlafzimmer"],
  },
  {
    key: "badezimmer",
    label: "Badezimmer",
    aliases: ["badezimmer", "baeder", "bader", "bad"],
  },
  {
    key: "garage",
    label: "Garage / Parkplatz",
    aliases: [
      "garage",
      "garagenplaetze",
      "garagenplatze",
      "parkplatz",
      "parkplaetze",
      "stellplatz",
      "stellplaetze",
    ],
  },
  {
    key: "pool",
    label: "Pool",
    aliases: ["pool"],
  },
  {
    key: "terrasse",
    label: "Terrasse / Balkon",
    aliases: ["terrasse", "balkon"],
  },
  {
    key: "strand",
    label: "Strand / Meer",
    aliases: ["strand", "meer", "strand hafen", "strand und zentrum"],
  },
  {
    key: "stockwerk",
    label: "Stockwerk",
    aliases: ["stockwerk", "etage"],
  },
  {
    key: "ausrichtung",
    label: "Ausrichtung",
    aliases: ["ausrichtung"],
  },
  {
    key: "fertigstellung",
    label: "Fertigstellung",
    aliases: ["fertigstellung"],
  },
  {
    key: "baujahr",
    label: "Baujahr",
    aliases: ["baujahr"],
  },
  {
    key: "flughafen",
    label: "Flughafen",
    aliases: ["flughafen"],
  },
  {
    key: "golf",
    label: "Golf",
    aliases: ["golf"],
  },
  {
    key: "einheiten",
    label: "Verfügbare Einheiten",
    aliases: ["verfuegbare einheiten", "verfugbare einheiten", "einheiten"],
  },
  {
    key: "zusatzraum",
    label: "Zusatzraum",
    aliases: ["zusatzraum", "abstellraum"],
  },
];

const propertyFactOrder = propertyFactFields.map((field) => field.key);

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

const displayReplacements = [
  ["Ãƒâ€ž", "Ä"],
  ["ÃƒÂ¤", "ä"],
  ["Ãƒâ€“", "Ö"],
  ["ÃƒÂ¶", "ö"],
  ["ÃƒÅ“", "Ü"],
  ["ÃƒÂ¼", "ü"],
  ["ÃƒÅ¸", "ß"],
  ["ÃƒÂ¡", "á"],
  ["ÃƒÂ³", "ó"],
  ["Ã¢â‚¬â€œ", "–"],
  ["Ã¢â‚¬â€", "—"],
  ["Ã¢â€šÂ¬", "€"],
  ["Ã‚Â²", "²"],
  ["Ã‚Â·", "·"],
  ["Ã‚", ""],
  ["Haeuser", "Häuser"],
  ["haeuser", "häuser"],
  ["Luxurioese", "Luxuriöse"],
  ["luxurioese", "luxuriöse"],
  ["Ausgewaehl", "Ausgewähl"],
  ["ausgewaehl", "ausgewähl"],
  ["Wuensche", "Wünsche"],
  ["wuensche", "wünsche"],
  ["Anwaelte", "Anwälte"],
  ["anwaelte", "anwälte"],
  ["Pruef", "Prüf"],
  ["pruef", "prüf"],
  ["Kuest", "Küst"],
  ["kuest", "küst"],
  ["Flaeche", "Fläche"],
  ["flaeche", "fläche"],
  ["Plaetze", "Plätze"],
  ["plaetze", "plätze"],
  ["Baeder", "Bäder"],
  ["baeder", "bäder"],
  ["Kaeufer", "Käufer"],
  ["kaeufer", "käufer"],
  ["Kueche", "Küche"],
  ["kueche", "küche"],
  ["Gaeste", "Gäste"],
  ["gaeste", "gäste"],
  ["Tueren", "Türen"],
  ["tueren", "türen"],
  ["Naehe", "Nähe"],
  ["naehe", "nähe"],
  ["naechst", "nächst"],
  ["Naechst", "Nächst"],
  ["verstaend", "verständ"],
  ["Verstaend", "Verständ"],
  ["fusslaeufig", "fußläufig"],
  ["Fusslaeufig", "Fußläufig"],
  ["grosszueg", "großzüg"],
  ["Grosszueg", "Großzüg"],
  ["gross", "groß"],
  ["Gross", "Groß"],
  ["fuer", "für"],
  ["Fuer", "Für"],
  ["ueber", "über"],
  ["Ueber", "Über"],
  ["Moecht", "Möcht"],
  ["moecht", "möcht"],
  ["Sued", "Süd"],
  ["sued", "süd"],
  ["Rincon", "Rincón"],
  ["Malaga", "Málaga"],
  ["Benalmadena", "Benalmádena"],
  ["PotthÃ¶ferei", "Potthöferei"],
] as const;

function normalizeDisplayText(value: string | undefined) {
  if (!value) {
    return "";
  }

  return displayReplacements.reduce(
    (current, [search, replace]) => current.split(search).join(replace),
    value,
  );
}

function splitLines(value: string | undefined) {
  return normalizeDisplayText(value)
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);
}

function normalizeSearchValue(value: string) {
  return normalizeDisplayText(value)
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/ß/g, "ss")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}

function slugifyToken(value: string) {
  return normalizeSearchValue(value).replace(/\s+/g, "-");
}

function getFactMetaByKey(key: string) {
  return propertyFactFields.find((field) => field.key === key);
}

function inferFactKey(label: string) {
  const normalizedLabel = normalizeSearchValue(label);

  return (
    propertyFactFields.find((field) =>
      field.aliases.some((alias) => normalizedLabel.includes(alias)),
    )?.key ?? undefined
  );
}

function parseFacts(value: string | undefined): PropertyFact[] {
  return splitLines(value).map((line) => {
    const parts = line.split(":");

    if (parts.length < 2) {
      return {
        key: `custom-${slugifyToken(line) || "hinweis"}`,
        label: "Hinweis",
        value: line,
      };
    }

    const label = normalizeDisplayText(parts.shift()?.trim()) || "Hinweis";
    const factValue = normalizeDisplayText(parts.join(":").trim());

    return {
      key: inferFactKey(label),
      label,
      value: factValue,
    };
  });
}

function dedupeImageUrls(values: string[]) {
  const seen = new Set<string>();

  return values.filter((value) => {
    if (!value || seen.has(value)) {
      return false;
    }

    seen.add(value);
    return true;
  });
}

function createStructuredFact(key: string, value: string): PropertyFact {
  const meta = getFactMetaByKey(key);

  return {
    key,
    label: meta?.label ?? normalizeDisplayText(key),
    value: normalizeDisplayText(value),
  };
}

function getExplicitFactValues(entry: StrapiEntry) {
  return {
    wohnflaeche: entry.wohnflaeche,
    grundstueck: entry.grundstueck,
    schlafzimmer: entry.schlafzimmer,
    badezimmer: entry.badezimmer,
    garage: entry.garage,
    pool: entry.pool,
    terrasse: entry.terrasse,
    strand: entry.strand,
    stockwerk: entry.stockwerk,
    ausrichtung: entry.ausrichtung,
    fertigstellung: entry.fertigstellung,
    baujahr: entry.baujahr,
    flughafen: entry.flughafen,
    golf: entry.golf,
    einheiten: entry.einheiten,
    zusatzraum: entry.zusatzraum,
  } as const;
}

function buildStructuredFacts(
  sourceFacts: PropertyFact[],
  explicitValues?: Partial<Record<string, string | undefined>>,
) {
  const factsMap = new Map<string, PropertyFact>();
  const customFacts: PropertyFact[] = [];

  Object.entries(explicitValues ?? {}).forEach(([key, rawValue]) => {
    const value = normalizeDisplayText(rawValue);

    if (value) {
      factsMap.set(key, createStructuredFact(key, value));
    }
  });

  sourceFacts.forEach((fact, index) => {
    const normalizedLabel = normalizeDisplayText(fact.label);
    const normalizedValue = normalizeDisplayText(fact.value);
    const resolvedKey = fact.key ?? inferFactKey(normalizedLabel);
    const factSearch = `${normalizeSearchValue(normalizedLabel)} ${normalizeSearchValue(normalizedValue)}`.trim();

    if (resolvedKey) {
      if (!factsMap.has(resolvedKey)) {
        factsMap.set(
          resolvedKey,
          createStructuredFact(resolvedKey, normalizedValue),
        );
      }
      return;
    }

    if (!factsMap.has("garage") && factSearch.includes("garage")) {
      factsMap.set("garage", createStructuredFact("garage", "inklusive"));
      return;
    }

    if (!factsMap.has("pool") && factSearch.includes("pool")) {
      factsMap.set("pool", createStructuredFact("pool", "inklusive"));
      return;
    }

    customFacts.push({
      key: `custom-${slugifyToken(normalizedLabel) || index}`,
      label: normalizedLabel || "Hinweis",
      value: normalizedValue,
    });
  });

  return [...factsMap.values(), ...customFacts].sort((a, b) => {
    const aIndex = propertyFactOrder.indexOf(a.key ?? "");
    const bIndex = propertyFactOrder.indexOf(b.key ?? "");
    const normalizedA = aIndex === -1 ? 999 : aIndex;
    const normalizedB = bIndex === -1 ? 999 : bIndex;

    if (normalizedA !== normalizedB) {
      return normalizedA - normalizedB;
    }

    return a.label.localeCompare(b.label, "de");
  });
}

function normalizeImageUrl(value: string | undefined) {
  if (!value) {
    return "";
  }

  if (value.startsWith("http://") || value.startsWith("https://")) {
    return value;
  }

  const baseUrl = getStrapiBaseUrl();

  if (!baseUrl) {
    return value;
  }

  return new URL(value, baseUrl).toString();
}

function getStrapiBaseUrl() {
  const configuredUrl = process.env.NEXT_PUBLIC_STRAPI_URL?.trim();

  if (configuredUrl) {
    return configuredUrl;
  }

  if (process.env.NODE_ENV === "production") {
    return "https://cds-api.cod-st.com";
  }

  return undefined;
}

function normalizeFallbackSlug(slug: string) {
  return slug.replace(/-\d+$/, "");
}

function normalizeProperty(entry: StrapiEntry): PropertyRecord | null {
  if (!entry.slug || !entry.titel || !entry.objektgruppe || !entry.ort) {
    return null;
  }

  const parsedFacts = parseFacts(entry.eckdaten);
  const coverImage = normalizeImageUrl(entry.vorschauBild?.url) || heroImage.src;
  const galleryImages = dedupeImageUrls(
    [coverImage, ...(entry.bildergalerie ?? []).map((image) => normalizeImageUrl(image.url))]
      .filter(Boolean),
  );

  return {
    id: String(entry.documentId ?? entry.id ?? entry.slug),
    slug: entry.slug,
    title: normalizeDisplayText(entry.titel),
    group: entry.objektgruppe,
    city: normalizeDisplayText(entry.ort),
    region: normalizeDisplayText(entry.region) || "Costa del Sol",
    priceLabel: normalizeDisplayText(entry.preisText) || "Preis auf Anfrage",
    summary: normalizeDisplayText(entry.kurzbeschreibung),
    description:
      normalizeDisplayText(entry.beschreibung) ||
      normalizeDisplayText(entry.kurzbeschreibung),
    facts: buildStructuredFacts(parsedFacts, getExplicitFactValues(entry)),
    highlights: splitLines(entry.highlights),
    coverImage,
    galleryImages,
    featured: Boolean(entry.featured),
    status: entry.vermarktungsstatus ?? "verfuegbar",
  };
}

function normalizePropertyRecord(property: PropertyRecord): PropertyRecord {
  const normalizedFacts = property.facts.map((fact) => ({
    key: fact.key,
    label: normalizeDisplayText(fact.label),
    value: normalizeDisplayText(fact.value),
  }));

  return {
    ...property,
    title: normalizeDisplayText(property.title),
    city: normalizeDisplayText(property.city),
    region: normalizeDisplayText(property.region),
    priceLabel: normalizeDisplayText(property.priceLabel),
    summary: normalizeDisplayText(property.summary),
    description: normalizeDisplayText(property.description),
    facts: buildStructuredFacts(normalizedFacts),
    highlights: property.highlights.map((highlight) =>
      normalizeDisplayText(highlight),
    ),
    galleryImages: dedupeImageUrls(
      [property.coverImage, ...property.galleryImages].map((image) =>
        normalizeImageUrl(image),
      ),
    ),
  };
}

function mergeWithLocalFallback(property: PropertyRecord): PropertyRecord {
  const fallback = localProperties.find(
    (entry) =>
      entry.slug === property.slug ||
      normalizeFallbackSlug(entry.slug) === normalizeFallbackSlug(property.slug),
  );

  if (!fallback) {
    return normalizePropertyRecord(property);
  }

  return normalizePropertyRecord({
    ...fallback,
    ...property,
    facts: property.facts.length > 0 ? property.facts : fallback.facts,
    highlights:
      property.highlights.length > 0 ? property.highlights : fallback.highlights,
    coverImage: property.coverImage || fallback.coverImage,
    galleryImages:
      property.galleryImages.length > 0
        ? property.galleryImages
        : fallback.galleryImages,
    description: property.description || fallback.description,
    summary: property.summary || fallback.summary,
    priceLabel: property.priceLabel || fallback.priceLabel,
  });
}

export async function getProperties(): Promise<PropertyRecord[]> {
  const baseUrl = getStrapiBaseUrl();

  if (!baseUrl) {
    return localProperties.map(normalizePropertyRecord);
  }

  try {
    const response = await fetch(
      `${baseUrl}/api/properties?populate[0]=vorschauBild&populate[1]=bildergalerie&pagination[pageSize]=100&sort[0]=featured:desc&sort[1]=titel:asc`,
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

    return normalized.length > 0
      ? normalized
      : localProperties.map(normalizePropertyRecord);
  } catch {
    return localProperties.map(normalizePropertyRecord);
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
  return normalizeDisplayText(getGroupMeta(group).shortLabel);
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

    if (
      (!existing.image && property.coverImage) ||
      (!existing.featured && property.featured)
    ) {
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
      const displayCity = normalizeDisplayText(meta?.displayCity ?? value.city);

      return {
        city: normalizeDisplayText(value.city),
        displayCity,
        count: value.count,
        image: value.image || heroImage.src,
        href: `/immobilien?ort=${encodeURIComponent(displayCity)}`,
        description:
          normalizeDisplayText(meta?.description) ||
          "Ausgewählte Immobilien in einer Lage, die für viele Käufer an der Costa del Sol besonders interessant ist.",
      };
    });
}
