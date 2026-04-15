export type NavChild = {
  label: string;
  href: string;
};

export type NavItem = {
  label: string;
  href: string;
  children?: NavChild[];
};

export type ServicePage = {
  id: string;
  slug: string;
  navLabel: string;
  title: string;
  description: string;
  menuDescription: string;
};

export type ServiceIconName =
  | "Building2"
  | "Scale"
  | "Landmark"
  | "ShieldCheck"
  | "Truck"
  | "FileCheck2";

export const siteSettings = {
  name: "Costa del Sol Immobilien",
  shortName: "CDS-IMMO",
  tagline: "Ihr deutscher Ansprechpartner an der Costa del Sol",
  email: "info@cds-immo.de",
  phone: "+49 176 21843 103",
  location: "Málaga · Mijas · Marbella · Costa del Sol",
  whatsapp: "https://wa.me/4917621843103",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  companyName: "Rodriguez & Kortler GbR / Costa del Sol Immobilien",
  responsible: "Edwin Kortler",
  addressLines: ["Potthöferei 19", "44388 Dortmund", "Deutschland"],
};

export const servicePages: ServicePage[] = [
  {
    id: "immobilienvermittlung",
    slug: "immobilienvermittlung",
    navLabel: "Immobilienvermittlung",
    title: "Immobilienvermittlung",
    description:
      "Häuser, Wohnungen und Neubauprojekte an der Costa del Sol mit deutscher Begleitung von der Auswahl bis zum nächsten Schritt.",
    menuDescription:
      "Passende Häuser, Wohnungen und Neubauprojekte mit strukturierter deutscher Begleitung.",
  },
  {
    id: "anwaelte-steuerberater",
    slug: "anwaelte-steuerberater",
    navLabel: "Anwälte & Recht",
    title: "Anwälte & Recht",
    description:
      "Deutschsprachige Anwälte für Prüfung, Kaufabwicklung und rechtssichere Begleitung beim Immobilienkauf in Spanien.",
    menuDescription:
      "Rechtssichere Begleitung durch deutschsprachige Anwälte in Spanien.",
  },
  {
    id: "bankkonto-finanzierung",
    slug: "bankkonto-finanzierung",
    navLabel: "Bank & Finanzierung",
    title: "Bank & Finanzierung",
    description:
      "Deutschsprachige Ansprechpartner für Kontoeröffnung, Finanzierung und abgestimmte Bankprozesse in Spanien.",
    menuDescription:
      "Konto, Finanzierung und Bankservice für deutschsprachige Käufer.",
  },
  {
    id: "private-krankenversicherung",
    slug: "private-krankenversicherung",
    navLabel: "Krankenversicherung",
    title: "Private Krankenversicherung",
    description:
      "Orientierung bei spanischer privater Krankenversicherung für Auswanderer, Käufer, Familien und Ruheständler.",
    menuDescription:
      "Unterstützung bei passender privater Absicherung in Spanien.",
  },
  {
    id: "umzug-service",
    slug: "umzug-service",
    navLabel: "Umzugsservice DE–ES–DE",
    title: "Umzugsservice DE–ES–DE",
    description:
      "Begleitung für den Wechsel zwischen Deutschland und Spanien mit klarer Planung und abgestimmten nächsten Schritten.",
    menuDescription:
      "Umzugsservice zwischen Deutschland und Spanien mit strukturierter Begleitung.",
  },
  {
    id: "dokumenten-objektservice",
    slug: "dokumenten-objektservice",
    navLabel: "Dokumenten- & Objektservice",
    title: "Dokumenten- & Objektservice",
    description:
      "Unterstützung bei Unterlagen, Abstimmungen und organisatorischen Schritten rund um Kauf, Verkauf und Objektbetreuung.",
    menuDescription:
      "Dokumente, Abläufe und Objektservice verständlich zusammengeführt.",
  },
];

export function getServiceHref(slug: string) {
  return `/services/${slug}`;
}

export function getServicePageBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export const navigation: NavItem[] = [
  { label: "Startseite", href: "/" },
  { label: "Immobilien", href: "/immobilien" },
  {
    label: "Leistungen",
    href: "/services",
    children: servicePages.map((page) => ({
      label: page.navLabel,
      href: getServiceHref(page.slug),
    })),
  },
  { label: "Auswandern", href: "/auswandern" },
  { label: "Kontakt", href: "/kontakt" },
];

export const heroStats = [
  {
    value: "330+",
    label: "Sonnentage im Jahr an der Costa del Sol",
  },
  {
    value: "2,5–3h",
    label: "Flugzeit von vielen deutschen Städten nach Málaga",
  },
  {
    value: "DE + ES",
    label: "Deutschsprachige Begleitung für Immobilie, Netzwerk und Dokumente",
  },
];

export const scrollStoryChapters = [
  {
    title: "Erstgespräch in Deutschland",
    text: "Gemeinsam klären wir Wunschregion, Budget, Objekttyp und ob es um Ferienimmobilie, Auswandern, Ruhestand oder Kapitalanlage geht.",
  },
  {
    title: "Netzwerk in Spanien aktivieren",
    text: "Je nach Situation vermitteln wir Anwälte, Steuerberater, Bankpartner, Versicherungen, Umzug und alle wichtigen Kontakte vor Ort.",
  },
  {
    title: "Immobilie finden und ankommen",
    text: "Von der Auswahl passender Objekte bis zu den nächsten Schritten nach Kauf oder Umzug bleibt die Begleitung klar, verständlich und deutschsprachig.",
  },
];

export const services = [
  {
    id: servicePages[0].id,
    title: servicePages[0].title,
    description: servicePages[0].description,
    href: getServiceHref(servicePages[0].slug),
    icon: "Building2" as ServiceIconName,
  },
  {
    id: servicePages[1].id,
    title: servicePages[1].title,
    description: servicePages[1].description,
    href: getServiceHref(servicePages[1].slug),
    icon: "Scale" as ServiceIconName,
  },
  {
    id: servicePages[2].id,
    title: servicePages[2].title,
    description: servicePages[2].description,
    href: getServiceHref(servicePages[2].slug),
    icon: "Landmark" as ServiceIconName,
  },
  {
    id: servicePages[3].id,
    title: servicePages[3].title,
    description: servicePages[3].description,
    href: getServiceHref(servicePages[3].slug),
    icon: "ShieldCheck" as ServiceIconName,
  },
  {
    id: servicePages[4].id,
    title: servicePages[4].title,
    description: servicePages[4].description,
    href: getServiceHref(servicePages[4].slug),
    icon: "Truck" as ServiceIconName,
  },
  {
    id: servicePages[5].id,
    title: servicePages[5].title,
    description: servicePages[5].description,
    href: getServiceHref(servicePages[5].slug),
    icon: "FileCheck2" as ServiceIconName,
  },
];

export const propertyCollections = [
  {
    id: "haeuser",
    title: "Häuser & Villen",
    description:
      "Vom renovierten Stadthaus bis zur Villa mit Meerblick: Häuser für Eigennutzer, Ferienimmobilien oder den dauerhaften Schritt nach Spanien.",
    highlights: [
      "Mijas Costa",
      "Marbella",
      "La Cala de Mijas",
      "Torre del Mar",
    ],
  },
  {
    id: "wohnungen",
    title: "Wohnungen & Penthäuser",
    description:
      "Apartments in Strandnähe, Penthäuser mit Blick und gut positionierte Wohnungen für Kapitalanlage, Feriennutzung oder das neue Leben unter spanischer Sonne.",
    highlights: [
      "Torremolinos",
      "Benalmádena",
      "Mijas",
      "Fuengirola",
    ],
  },
  {
    id: "neubau",
    title: "Neubauprojekte",
    description:
      "Sorgfältig ausgewählte Projekte mit modernem Standard, attraktiver Infrastruktur und klarer Orientierung für deutschsprachige Käufer.",
    highlights: [
      "Rincón de la Victoria",
      "Benalmádena",
      "Manilva",
      "La Cala de Mijas",
    ],
  },
];

export const lifestyleHighlights = [
  {
    title: "330 Sonnentage und kurze Wege",
    text: "Milde Winter, viel Sonne und eine gute Erreichbarkeit aus Deutschland machen die Costa del Sol für viele Käufer und Auswanderer besonders attraktiv.",
  },
  {
    title: "Städte mit eigenem Charakter",
    text: "Málaga, Torremolinos, Mijas, Fuengirola, Marbella oder Estepona: jede Lage hat ihren eigenen Rhythmus, Charme und Lebensstil.",
  },
  {
    title: "Leben und Arbeiten neu aufstellen",
    text: "Ob Ruhestand, Remote-Arbeit, Familie oder neuer Lebensabschnitt: Alltag, Infrastruktur und Servicepartner müssen zum eigenen Plan passen.",
  },
];

export const legalLinks = [
  { label: "Kontakt", href: "/kontakt" },
  { label: "Datenschutz & Impressum", href: "/rechtliches" },
];
