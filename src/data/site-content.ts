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
  | "ReceiptText"
  | "Landmark"
  | "ShieldCheck"
  | "Truck"
  | "FileCheck2";

export const siteSettings = {
  name: "Costa del Sol Immobilien",
  shortName: "CDS-IMMO",
  tagline: "Ihr deutscher Ansprechpartner an der Costa del Sol",
  siteUrl: "https://cds-immo.vercel.app",
  email: "info@cds-immo.de",
  phone: "+49 176 21843 103",
  phoneSecondary: "+49 1578 7181 846",
  publicLocation: "Online-Beratung · Costa del Sol · Deutschland",
  location: "Costa del Sol · Online-Beratung zwischen Deutschland und Spanien",
  whatsapp: "https://wa.me/4917621843103",
  instagram: "https://www.instagram.com/",
  facebook: "https://www.facebook.com/",
  companyName: "Kortler & Rodriguez GbR / Costa del Sol Immobilien",
  responsible: "Veronica Rodriguez und Edwin Kortler",
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
      "Deutschsprachige Rechtsbegleitung mit internationaler Kanzlei, mehreren Büros an der Costa del Sol und transparenter Kaufabwicklung.",
    menuDescription:
      "Rechtssichere Begleitung durch deutschsprachige Anwälte in Spanien.",
  },
  {
    id: "steuern-kosten-nie",
    slug: "steuern-kosten-nie",
    navLabel: "Steuern, Kosten & NIE",
    title: "Steuern, Kosten & NIE",
    description:
      "Überblick zu Kaufnebenkosten, laufenden Steuern, Fristen und der wichtigen NIE-Nummer beim Immobilienkauf in Spanien.",
    menuDescription:
      "Steuern, Kaufkosten und NIE beim Immobilienkauf klar eingeordnet.",
  },
  {
    id: "bankkonto-finanzierung",
    slug: "bankkonto-finanzierung",
    navLabel: "Bank & Finanzierung",
    title: "Bank & Finanzierung",
    description:
      "Deutschsprachige Unterstützung bei Kontoeröffnung, Hypothek und Finanzierungsabstimmung mit Banco Sabadell in Málaga.",
    menuDescription:
      "Konto, Finanzierung und Bankservice für deutschsprachige Käufer.",
  },
  {
    id: "private-krankenversicherung",
    slug: "private-krankenversicherung",
    navLabel: "Private Krankenversicherung",
    title: "Private Krankenversicherung",
    description:
      "Begleitung bei Angeboten, Antrag und Vertragsübergabe für private Krankenversicherung an der Costa del Sol.",
    menuDescription:
      "Private Krankenversicherung mit klarer Begleitung für den Schritt nach Spanien.",
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

const serviceIcons: Record<string, ServiceIconName> = {
  immobilienvermittlung: "Building2",
  "anwaelte-steuerberater": "Scale",
  "steuern-kosten-nie": "ReceiptText",
  "bankkonto-finanzierung": "Landmark",
  "private-krankenversicherung": "ShieldCheck",
  "umzug-service": "Truck",
  "dokumenten-objektservice": "FileCheck2",
};

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
  { label: "Über uns", href: "/ueber-uns" },
  { label: "Ratgeber", href: "/ratgeber" },
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
    text: "Gemeinsam klären wir Wunschregion, Budget, Objekttyp und ob es um Ferienimmobilie, Auswandern, Ruhestand oder Kapitalanlage geht. Alle Beratungsgespräche finden dabei flexibel telefonisch, per WhatsApp oder via Google Meet statt, persönliche Termine in Deutschland sind nicht erforderlich.",
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

export const services = servicePages.map((page) => ({
  id: page.id,
  title: page.title,
  description: page.description,
  href: getServiceHref(page.slug),
  icon: serviceIcons[page.id],
}));

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
    highlights: ["Torremolinos", "Benalmádena", "Mijas", "Fuengirola"],
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
