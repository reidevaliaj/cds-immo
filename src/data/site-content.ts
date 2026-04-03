export type NavChild = {
  label: string;
  href: string;
  description: string;
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
  implemented?: boolean;
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
};

export const servicePages: ServicePage[] = [
  {
    id: "immobilienvermittlung",
    slug: "immobilienvermittlung",
    navLabel: "Immobilienvermittlung",
    title: "Immobilienvermittlung",
    description:
      "Häuser, Wohnungen und Neubauprojekte an der Costa del Sol für Eigennutzer, Auswanderer und Kapitalanleger.",
    menuDescription:
      "Passende Häuser, Wohnungen und Neubauprojekte mit deutscher Begleitung von der Auswahl bis zum Ankommen.",
    implemented: true,
  },
  {
    id: "anwaelte-steuerberater",
    slug: "anwaelte-steuerberater",
    navLabel: "Anwälte & Steuerberater",
    title: "Anwälte & Steuerberater",
    description:
      "Vermittlung deutschsprachiger Experten für Kaufabwicklung, NIE, Steuerfragen und rechtliche Sicherheit.",
    menuDescription:
      "Deutschsprachige Kontakte für Kauf, Steuerfragen, NIE und rechtliche Themen.",
  },
  {
    id: "bankkonto-finanzierung",
    slug: "bankkonto-finanzierung",
    navLabel: "Bankkonto & Finanzierung",
    title: "Bankkonto & Finanzierung",
    description:
      "Spanische Bankpartner mit deutschem Ansprechpartner in Málaga sowie Unterstützung rund um Konto und Finanzierung.",
    menuDescription:
      "Spanische Bankpartner mit deutschem Ansprechpartner für Konto und Finanzierung.",
  },
  {
    id: "versicherung-umzug",
    slug: "private-krankenversicherung",
    navLabel: "Private Krankenversicherung",
    title: "Private Krankenversicherung",
    description:
      "Passende Lösungen für Auswanderer, Familien, Ruheständler und Käufer mit langfristigen Plänen in Spanien.",
    menuDescription:
      "Orientierung bei privater Krankenversicherung und langfristiger Absicherung in Spanien.",
  },
  {
    id: "umzug-service",
    slug: "umzug-service",
    navLabel: "Umzugsservice DE-ES-DE",
    title: "Umzugsservice DE-ES-DE",
    description:
      "Koordination für den Wechsel zwischen Deutschland und Spanien, damit der Umzug strukturiert und planbar bleibt.",
    menuDescription:
      "Begleitung für den Umzug zwischen Deutschland und Spanien mit klarem Ablauf.",
  },
  {
    id: "dokumente-service",
    slug: "dokumenten-objektservice",
    navLabel: "Dokumenten- & Objektservice",
    title: "Dokumenten- & Objektservice",
    description:
      "Unterstützung bei Papieren rund um Kauf, Verkauf, Vermietung sowie auf Wunsch Betreuung und Pflege der Immobilie.",
    menuDescription:
      "Unterlagen, Abstimmungen und Objektbetreuung verständlich zusammengeführt.",
  },
];

export function getServiceHref(slug: string) {
  return `/services/${slug}`;
}

export function getServicePageBySlug(slug: string) {
  return servicePages.find((page) => page.slug === slug);
}

export const navigation: NavItem[] = [
  {
    label: "Startseite",
    href: "/",
  },
  {
    label: "Immobilien",
    href: "/immobilien",
  },
  {
    label: "Leistungen",
    href: "/services",
    children: servicePages.map((page) => ({
      label: page.navLabel,
      href: getServiceHref(page.slug),
      description: page.menuDescription,
    })),
  },
  {
    label: "Auswandern",
    href: "/auswandern",
  },
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

export const featuredProperties = [
  {
    title: "Komplett renovierte Villa in Mijas Costa",
    location: "Mijas Costa",
    category: "Kauf",
    price: "1.350.000 €",
    details: "5 Schlafzimmer · 198 m² Wohnfläche · Privatpool",
    summary:
      "Meerblick, Privatsphäre und nur wenige Minuten vom Strand entfernt.",
    gradient:
      "linear-gradient(160deg, rgba(16,64,90,0.16), rgba(16,64,90,0.56)), radial-gradient(circle at top left, rgba(255,235,197,0.78), transparent 34%), linear-gradient(135deg, #b7ddee 0%, #7fc0da 42%, #3e7ea0 100%)",
  },
  {
    title: "Luxusvilla in Marbella nahe dem Strand",
    location: "Marbella",
    category: "Kauf",
    price: "2.850.000 €",
    details: "6 Schlafzimmer · 300 m² · Andalusischer Garten",
    summary:
      "Für Käufer, die Großzügigkeit, Meerluft und einen repräsentativen Standort suchen.",
    gradient:
      "linear-gradient(165deg, rgba(18,76,102,0.18), rgba(18,76,102,0.6)), radial-gradient(circle at 20% 15%, rgba(255,230,188,0.76), transparent 34%), radial-gradient(circle at 80% 55%, rgba(255,255,255,0.16), transparent 42%), linear-gradient(135deg, #a6d5ea 0%, #6eb1d0 44%, #347392 100%)",
  },
  {
    title: "Duplex-Penthouse in Torremolinos",
    location: "Torremolinos",
    category: "Kauf",
    price: "405.000 €",
    details: "Penthouse · Meerblick · sofort bezugsbereit",
    summary:
      "Starke Lage für Feriennutzung, Langzeitwohnen oder den Einstieg an der Küste.",
    gradient:
      "linear-gradient(180deg, rgba(15,66,89,0.18), rgba(15,66,89,0.62)), radial-gradient(circle at 30% 10%, rgba(255,238,204,0.78), transparent 36%), linear-gradient(145deg, #b4dcf0 0%, #7ebfd8 42%, #3a7997 100%)",
  },
  {
    title: "Ausgewählte Neubauprojekte an der Costa del Sol",
    location: "Rincón de la Victoria · Manilva · Benalmádena",
    category: "Neubau",
    price: "ab 199.000 €",
    details: "Wohnungen, Reihenhäuser und exklusive Anlagen",
    summary:
      "Kuratiert für Käufer, die moderne Projekte mit Meerblick, Infrastruktur und Wertpotenzial suchen.",
    gradient:
      "linear-gradient(180deg, rgba(17,70,94,0.16), rgba(17,70,94,0.58)), radial-gradient(circle at 70% 18%, rgba(255,239,207,0.7), transparent 32%), radial-gradient(circle at 15% 85%, rgba(255,255,255,0.16), transparent 38%), linear-gradient(130deg, #bce2f2 0%, #8ac6df 46%, #3f81a1 100%)",
  },
];

export const trustReasons = [
  {
    title: "Deutscher Ansprechpartner vor Ort",
    description:
      "Sie müssen sich nicht alleine durch Sprache, Abläufe und Unterschiede im spanischen Immobilienmarkt arbeiten.",
    metric: "Verständliche Begleitung statt Unsicherheit.",
  },
  {
    title: "Mehr als nur Immobilien",
    description:
      "Kauf, Auswandern, Bank, Recht, Versicherung und Umzug greifen ineinander. Genau darin liegt der besondere Mehrwert von CDS-IMMO.",
    metric: "Ein Konzept, das deutlich weiter geht als eine klassische Maklerseite.",
  },
  {
    title: "Netzwerk für die wichtigen Schritte",
    description:
      "Deutschsprachige Anwälte, Steuerberater, Bankpartner und Versicherungen helfen dort weiter, wo viele Interessenten sonst hängen bleiben.",
    metric: "Kontakte, die schon da sind, wenn Sie sie brauchen.",
  },
  {
    title: "Auch nach dem Kauf ansprechbar",
    description:
      "Auf Wunsch endet die Begleitung nicht beim Notartermin, sondern unterstützt auch bei Vermietung, Objektpflege und nächsten Schritten vor Ort.",
    metric: "Betreuung, die über den Kauf hinaus weiterdenkt.",
  },
];

export const testimonials = [
  {
    name: "Käufer & Auswanderer",
    origin: "Typische Erwartung",
    quote:
      "Eine schöne Immobilie ist wichtig, aber noch wichtiger ist ein Ansprechpartner, der auch Bank, Unterlagen und die nächsten Schritte in Spanien kennt.",
    rating: 5,
  },
  {
    name: "Familien & Ruheständler",
    origin: "Typische Erwartung",
    quote:
      "Wer den Lebensmittelpunkt an die Costa del Sol verlegen möchte, braucht Orientierung bei Versicherung, Alltag, Infrastruktur und regionalen Unterschieden.",
    rating: 5,
  },
  {
    name: "Eigentümer & Investoren",
    origin: "Typische Erwartung",
    quote:
      "Auch bei Vermietung, Pflege oder Verkauf zählt ein deutscher Ansprechpartner, der den lokalen Markt versteht und zuverlässig erreichbar bleibt.",
    rating: 5,
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

export const serviceDetails = [
  {
    id: "anwaelte-steuerberater",
    title: "Vermittlung deutschsprachiger Anwälte & Steuerberater",
    text:
      "Gerade beim Immobilienkauf, bei steuerlichen Fragen oder beim dauerhaften Schritt nach Spanien schafft ein deutschsprachiger Ansprechpartner Sicherheit. Deshalb vermitteln wir passende Kontakte für die wirklich entscheidenden Themen.",
    accent: "Recht & Steuer",
  },
  {
    id: "bankkonto-finanzierung",
    title: "Spanisches Bankkonto & Finanzierung",
    text:
      "Ob Kontoeröffnung, deutsches Service-Team in Málaga oder Finanzierung einer Immobilie: wir helfen dabei, Bankthemen verständlich und ohne unnötige Hürden anzugehen.",
    accent: "Bank & Finanzierung",
  },
  {
    id: "versicherung-umzug",
    title: "Private Krankenversicherung in Spanien",
    text:
      "Für Auswanderer, Familien, Selbstständige oder Ruheständler ist die richtige Absicherung ein zentraler Schritt. Wir unterstützen dabei, passende Lösungen in Spanien zu finden.",
    accent: "Versicherung",
  },
  {
    id: "umzug-service",
    title: "Umzugsservice zwischen Deutschland und Spanien",
    text:
      "Der Umzug an die Costa del Sol oder zurück nach Deutschland soll nicht im Chaos enden. Mit einem verlässlichen Netzwerk lässt sich der Wechsel deutlich entspannter organisieren.",
    accent: "Umzug",
  },
  {
    id: "dokumente-service",
    title: "Unterstützung bei Kauf, Verkauf & Dokumenten",
    text:
      "Viele Prozesse hängen an Papieren, Nachweisen und Abstimmungen. Genau hier schaffen wir Übersicht und bringen die nötigen Schritte zusammen.",
    accent: "Dokumente",
  },
];

export const relocationSteps = [
  {
    title: "Orientierung finden",
    description:
      "Wunschregion, Lebensstil, Budget und Nutzung werden klar. So wird aus der Idee ein realistischer Plan für Andalusien.",
  },
  {
    title: "Rechtliches & Dokumente",
    description:
      "Bank, Steuer, Versicherung und wichtige Unterlagen werden frühzeitig mitgedacht, damit der Ablauf später nicht stockt.",
  },
  {
    title: "Immobilie auswählen",
    description:
      "Besichtigungen, Objektvergleich und Kaufentscheidung orientieren sich nicht nur am Preis, sondern am Leben vor Ort.",
  },
  {
    title: "Ankommen in Spanien",
    description:
      "Nach dem Kauf oder Umzug geht es um Alltag, Kontakte, Routinen und das sichere Gefühl, nicht allein zu sein.",
  },
];

export const lifestyleHighlights = [
  {
    title: "330 Sonnentage und kurze Wege",
    text:
      "Milde Winter, viel Sonne und eine gute Erreichbarkeit aus Deutschland machen die Costa del Sol für viele Käufer und Auswanderer besonders attraktiv.",
  },
  {
    title: "Städte mit eigenem Charakter",
    text:
      "Málaga, Torremolinos, Mijas, Fuengirola, Marbella oder Estepona: jede Lage hat ihren eigenen Rhythmus, Charme und Lebensstil.",
  },
  {
    title: "Leben und Arbeiten neu aufstellen",
    text:
      "Ob Ruhestand, Remote-Arbeit, Familie oder neuer Lebensabschnitt: Alltag, Infrastruktur und Servicepartner müssen zum eigenen Plan passen.",
  },
];
