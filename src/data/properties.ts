export type PropertyGroupKey = "haeuser" | "neubau" | "wohnungen";

export type PropertyStatus = "verfuegbar" | "reserviert" | "verkauft";

export type PropertyFact = {
  label: string;
  value: string;
};

export type PropertyRecord = {
  id: string;
  slug: string;
  title: string;
  group: PropertyGroupKey;
  city: string;
  region: string;
  priceLabel: string;
  summary: string;
  description: string;
  facts: PropertyFact[];
  highlights: string[];
  coverImage: string;
  featured: boolean;
  status: PropertyStatus;
};

export const propertyGroups = [
  {
    id: "haeuser" as const,
    shortLabel: "Häuser",
    label: "Häuser Andalusien / Costa del Sol",
    description:
      "Villen, Reihenhäuser und Häuser mit Meerblick für Eigennutzer, Zweitwohnsitz oder den dauerhaften Schritt nach Spanien.",
  },
  {
    id: "neubau" as const,
    shortLabel: "Neubau",
    label: "Neubauprojekte Andalusien / Costa del Sol",
    description:
      "Ausgewählte Projekte mit moderner Architektur, klaren Grundrissen und Standorten mit Perspektive an der Küste.",
  },
  {
    id: "wohnungen" as const,
    shortLabel: "Wohnungen",
    label: "Wohnungen Andalusien / Costa del Sol",
    description:
      "Apartments, Penthäuser und großzügige Wohnungen für Feriennutzung, Wohnen am Meer oder Kapitalanlage.",
  },
];

export const localProperties: PropertyRecord[] = [
  {
    id: "1748br",
    slug: "luxurioese-villa-am-strand-von-marbella",
    title: "Luxuriöse Villa am Strand von Marbella",
    group: "haeuser",
    city: "Marbella",
    region: "Costa del Sol",
    priceLabel: "2.850.000 €",
    summary:
      "Andalusische Villa in Guadalmina Baja, weniger als 200 Meter vom Meer entfernt, mit Garten, Pool und großzügigem Wohngefühl.",
    description:
      "Diese Villa in Marbella richtet sich an Käufer, die strandnah wohnen und dabei Ruhe, Großzügigkeit und klassischen andalusischen Stil suchen. Geboten werden rund 300 m² Wohnfläche auf zwei Ebenen, ein großer Garten mit Pool und mehrere Terrassen in einer der gefragtesten Lagen der Costa del Sol.",
    facts: [
      { label: "Wohnfläche", value: "ca. 300 m²" },
      { label: "Schlafzimmer", value: "6" },
      { label: "Garagenplätze", value: "3" },
      { label: "Meer", value: "< 200 m" },
    ],
    highlights: [
      "Typischer andalusischer Stil mit großem Garten und Pool.",
      "Großer Wohn- und Essbereich mit offener Küche und Kamin.",
      "Nur wenige Minuten zu Strand, Marbella und dem gewohnten Alltag an der Küste.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D794x10000%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i30273a8e09885a5b/version/1633195545/image.jpg",
    featured: true,
    status: "verfuegbar",
  },
  {
    id: "br1243",
    slug: "reihenhaus-in-toplage-in-la-cala-de-mijas",
    title: "Reihenhaus in Toplage in La Cala de Mijas",
    group: "haeuser",
    city: "La Cala de Mijas",
    region: "Costa del Sol",
    priceLabel: "650.000 €",
    summary:
      "Großzügiges Reihenhaus mit Meerblick, privatem Pool und fußläufiger Nähe zu Strand, Schule und Zentrum von La Cala de Mijas.",
    description:
      "Das Haus bietet rund 347 m² Wohnfläche mit offenem Wohnbereich, Kamin, komplett ausgestatteter Küche und mehreren Terrassen. Im Außenbereich erwarten Sie Pool, Grillplatz und Meerblick, im Untergeschoss zusätzlicher Platz für Gäste, Kino oder Fitness sowie eine Garage für Autos und Motorräder.",
    facts: [
      { label: "Wohnfläche", value: "ca. 347 m²" },
      { label: "Schlafzimmer", value: "3" },
      { label: "Bäder", value: "2" },
      { label: "Strand & Zentrum", value: "ca. 5 Min." },
    ],
    highlights: [
      "Privater Pool, große Terrasse und Grillplatz mit Meerblick.",
      "Einbauschränke, Alarmanlage sowie einbruchsichere Fenster und Türen.",
      "Gute Lage für Familien, weil Schule, Bushaltestelle und Strand schnell erreichbar sind.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa7cb54a604c6896d/image/i123dc840e3b92612/version/1550605412/image.jpg",
    featured: true,
    status: "verfuegbar",
  },
  {
    id: "idilia-senses",
    slug: "idilia-senses-rincon-de-la-victoria",
    title: "Idilia Senses in Rincón de la Victoria",
    group: "neubau",
    city: "Rincón de la Victoria",
    region: "Costa del Sol",
    priceLabel: "396.000 € bis 481.000 €",
    summary:
      "Kleiner Neubaukomplex mit 2-Schlafzimmer-Wohnungen, großen Terrassen und weitem Blick über das Mittelmeer.",
    description:
      "In Idilia Senses stehen nur noch wenige Einheiten zur Verfügung. Das Projekt kombiniert moderne Wohnungen mit großzügigen Terrassen, ausgestatteten Küchen, Poolbereich, Grünflächen und Spielplatz in einer Lage mit schneller Verbindung nach Málaga und zum Flughafen.",
    facts: [
      { label: "Verfügbare Einheiten", value: "5" },
      { label: "Schlafzimmer", value: "2" },
      { label: "Fertigstellung", value: "Q4 2024" },
      { label: "Flughafen Málaga", value: "ca. 30 km" },
    ],
    highlights: [
      "Spektakulärer Meerblick von jeder Wohnung.",
      "Pool, Liegeflächen und Spielplatz innerhalb der Anlage.",
      "Ideal für Käufer, die moderne Neubauqualität mit guter Anbindung suchen.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa7cb54a604c6896d/image/ief8240af339b3091/version/1679907623/image.jpg",
    featured: true,
    status: "verfuegbar",
  },
  {
    id: "amphora-beach",
    slug: "amphora-beach-residence-manilva",
    title: "Amphora Beach Residence in Manilva",
    group: "neubau",
    city: "Manilva",
    region: "Costa del Sol",
    priceLabel: "ab 199.999 €",
    summary:
      "Neubauprojekt nur rund 150 Meter vom Mittelmeer entfernt, mit 2- und 3-Schlafzimmer-Apartments, Meerblick und großzügiger Anlage.",
    description:
      "Amphora Beach verbindet Strandnähe mit einer durchdachten Wohnanlage inklusive Grünflächen, drei Pools, Fitnessstudio, Garage und Abstellraum. Für Käufer interessant, die eine klare Neubauoption im westlichen Teil der Costa del Sol mit Nähe zu Golf und Marbella suchen.",
    facts: [
      { label: "Schlafzimmer", value: "2 bis 3" },
      { label: "Wohnfläche", value: "ab 88 m²" },
      { label: "Meer", value: "ca. 150 m" },
      { label: "Marbella", value: "ca. 40 km" },
    ],
    highlights: [
      "Terrassen mit Meerblick und komplett eingerichtete Küchen.",
      "Drei Pools, Fitnessstudio und 14.000 m² großes Areal.",
      "Golfplätze und Strand bequem erreichbar.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/none/path/sa7cb54a604c6896d/image/i10e800654cb9559a/version/1679896992/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "nexus",
    slug: "nexus-residences-benalmadena",
    title: "Nexus Residences in Benalmádena",
    group: "neubau",
    city: "Benalmádena",
    region: "Costa del Sol",
    priceLabel: "ab 251.000 €",
    summary:
      "Exklusive Wohnanlage mit Meerblick, großen Terrassen und 35 Wohneinheiten in sehr guter Lage zwischen Málaga und Marbella.",
    description:
      "Nexus Residences bietet lichtdurchflutete Apartments mit 3 oder 4 Schlafzimmern, großzügigen Terrassen, ausgestatteten Küchen und einem gepflegten Außenbereich. Durch die Lage erreichen Sie Flughafen, Málaga, Marbella sowie Strand und Hafen in kurzer Zeit.",
    facts: [
      { label: "Schlafzimmer", value: "3 bis 4" },
      { label: "Garagenplätze", value: "2" },
      { label: "Strand / Hafen", value: "ca. 4 km" },
      { label: "Fertigstellung", value: "Q4 2025" },
    ],
    highlights: [
      "Von jeder Wohnung aus Meerblick.",
      "Abstellraum und zwei Garagenplätze pro Einheit.",
      "Spannend für Käufer, die eine moderne Anlage in Benalmádena suchen.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i1f94e04220254d4e/version/1679854431/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "blueview",
    slug: "blue-view-heights-manilva",
    title: "Blue View Heights in Manilva",
    group: "neubau",
    city: "Manilva",
    region: "Costa del Sol",
    priceLabel: "289.000 € bis 566.000 €",
    summary:
      "Wohnprojekt mit Doppelhaushälften, mediterranen Gärten, Spa und Gemeinschaftsflächen in ruhiger Lage mit Meerblick.",
    description:
      "Blue View Heights wurde für Käufer konzipiert, die modernes Wohnen, großzügige Außenflächen und Serviceangebote wie Spa, Fitness und Gemeinschaftsbereiche verbinden möchten. Die Häuser sind nach Südwesten ausgerichtet und bieten mehrere Grundrissvarianten mit Terrassen, Garten und optional privatem Pool.",
    facts: [
      { label: "Wohnfläche", value: "106 bis 146 m²" },
      { label: "Schlafzimmer", value: "2 bis 4" },
      { label: "Garage", value: "eigener Platz" },
      { label: "Fertigstellung", value: "Ende 2024" },
    ],
    highlights: [
      "Mediterrane Gärten, Promenadenbereiche und Ruhezonen.",
      "Großer Pool, Gemeinschaftsraum, Spa und Fitnessstudio.",
      "Mehrere Wohnmodelle für unterschiedliche Familien- und Lebenssituationen.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i7e19188e5519cb24/version/1679767115/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "designvilla-m",
    slug: "luxurioese-design-villa-in-marbella",
    title: "Luxuriöse Design Villa in Marbella",
    group: "neubau",
    city: "Marbella",
    region: "Costa del Sol",
    priceLabel: "Preis auf Anfrage",
    summary:
      "Zeitgenössische Design-Villa in Guadalmina Baja, nur wenige Schritte von Strand, Golf und Hotel entfernt.",
    description:
      "Diese moderne Villa in Guadalmina Baja wurde als hochwertige Design-Immobilie mit klaren Linien, großem Außenbereich und starkem Wellness- und Freizeitkonzept geplant. Neben den vier Schlafzimmern im Obergeschoss bietet das Haus unter anderem Kino, Fitness, Spa, Innenpool sowie Garage und Servicetrakt in einer der bekanntesten Wohnlagen Marbellas.",
    facts: [
      { label: "Schlafzimmer", value: "4 + Servicebereich" },
      { label: "Strand", value: "ca. 50 m" },
      { label: "Golf", value: "ca. 10 m" },
      { label: "Garage", value: "2 Autos" },
    ],
    highlights: [
      "Design-Villa in Guadalmina Baja mit sehr starker Lage.",
      "Kino, Fitnessraum, Spa, Sauna, Dampfbad und Innenpool im Untergeschoss.",
      "Nur wenige Minuten nach Puerto Banús und schnell im Zentrum von Estepona.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D630x10000%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i233aa2debf7076cd/version/1553630021/luxuri%C3%B6se-design-villa-marbella-andalusien.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "one-residences",
    slug: "one-residences-la-cala-de-mijas",
    title: "One Residences in La Cala de Mijas",
    group: "neubau",
    city: "La Cala de Mijas",
    region: "Costa del Sol",
    priceLabel: "550.000 € bis 1.250.000 €",
    summary:
      "Luxusanlage mit hochwertiger Architektur, großen Außenbereichen und umfangreichen Services für anspruchsvolle Käufer.",
    description:
      "One Residences verbindet moderne Architektur mit einem sehr starken Freizeit- und Servicekonzept. Auf rund 17.000 m² entstanden 80 Apartments mit Gärten, Pools, Fitness, Sauna, römischem Bad, privatem Kino, Golfsimulator und weiteren Annehmlichkeiten, die das Projekt deutlich von klassischen Neubauten unterscheiden.",
    facts: [
      { label: "Areal", value: "ca. 17.000 m²" },
      { label: "Verfügbare Apartments", value: "10" },
      { label: "Garagenplätze", value: "2" },
      { label: "Zusatzraum", value: "Abstellraum" },
    ],
    highlights: [
      "Luxusprojekt mit Golf, Kino, Spa und Gastrobar.",
      "Nahtloser Innen-Außenbereich mit hochwertiger Materialität.",
      "Sehr gute Wahl für Käufer, die Lifestyle und Qualität kombinieren möchten.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D682x2048%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i0d1f10fe06991be9/version/1643563441/image.jpg",
    featured: true,
    status: "verfuegbar",
  },
  {
    id: "kike",
    slug: "penthousewohnung-in-torremolinos",
    title: "Penthousewohnung in Torremolinos",
    group: "wohnungen",
    city: "Torremolinos",
    region: "Costa del Sol",
    priceLabel: "405.000 €",
    summary:
      "Renoviertes Duplex-Penthouse mit rund 160 m² Wohn- und Nutzfläche, großer Terrasse und sehr guter Lage nahe Strand und Flughafen.",
    description:
      "Die Wohnung wurde modernisiert und bietet heute einen großzügigen Wohn- und Essbereich, moderne Küche, drei Schlafzimmer, mehrere Bäder sowie viel Einbaumobiliar nach Maß. Besonders stark sind die Terrasse mit Blick, der Steinofengrill und die Lage mit kurzer Entfernung zu Strand, Park, Geschäften und Málaga Airport.",
    facts: [
      { label: "Wohn- und Nutzfläche", value: "ca. 160 m²" },
      { label: "Schlafzimmer", value: "3" },
      { label: "Flughafen Málaga", value: "ca. 10 Min." },
      { label: "Parkplatz", value: "privat" },
    ],
    highlights: [
      "Große Terrasse mit Blick und Steinofengrill.",
      "Luxuriöse Anlage mit Garten und Pool.",
      "Gute Option für Eigennutzung, Ferienwohnen oder den Start an der Küste.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i0387a034f9e5ea2e/version/1717873382/image.jpg",
    featured: true,
    status: "verfuegbar",
  },
  {
    id: "1046j",
    slug: "geraeumige-wohnung-in-benalmadena-montealto",
    title: "Geräumige Wohnung in Benalmádena, Montealto",
    group: "wohnungen",
    city: "Benalmádena",
    region: "Costa del Sol",
    priceLabel: "385.000 €",
    summary:
      "Große renovierte Wohnung mit 4 Schlafzimmern, mehreren Terrassenbereichen und Gemeinschaftspool in Montealto.",
    description:
      "Diese Wohnung eignet sich für Käufer, die viel Platz und flexible Nutzung suchen. Sie bietet rund 200 m² Gesamtfläche, vier Doppelschlafzimmer, eine separate Küche, Wohn-Essbereich mit Terrassenzugang und zusätzliche Flächen, die den Alltag oder längere Aufenthalte sehr angenehm machen.",
    facts: [
      { label: "Gesamtfläche", value: "ca. 200 m²" },
      { label: "Schlafzimmer", value: "4" },
      { label: "Bäder", value: "2" },
      { label: "Terrasse", value: "40 m²" },
    ],
    highlights: [
      "Komplett renoviert mit Einbauschränken und Klimaanlage.",
      "Gemeinschaftspool, Parkplatz und Gegensprechanlage.",
      "Südliche Ausrichtung mit großzügigen Außenflächen.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i7e7a82278fac1b2e/version/1711803574/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "1042j",
    slug: "strandlage-in-torremolinos",
    title: "1. Strandlage in Torremolinos",
    group: "wohnungen",
    city: "Torremolinos",
    region: "Costa del Sol",
    priceLabel: "230.000 €",
    summary:
      "Renovierte Wohnung in erster Strandlage mit Meerblick, Pool und guter Eignung für Ferienvermietung.",
    description:
      "Die Wohnung liegt in direkter Strandlage in Torremolinos und bietet eine interessante Mischung aus Eigennutzung und Vermietungspotenzial. Neben Meerblick, Aufzug und Gemeinschaftsbereichen überzeugt vor allem die Kombination aus Lage, Ausrichtung und überschaubarer Einstiegssumme.",
    facts: [
      { label: "Schlafzimmer", value: "1 (ursprünglich 2)" },
      { label: "Wohnfläche", value: "62 m²" },
      { label: "Stockwerk", value: "4. Etage" },
      { label: "Ausrichtung", value: "Süden" },
    ],
    highlights: [
      "Terrasse mit Meerblick.",
      "Gemeinschaftsgarage und Abstellraum.",
      "Spannend für Ferienvermietung und Käufer mit Fokus auf Lage.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/i77c5090954943cd9/version/1711805204/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
  {
    id: "1040j",
    slug: "gelegenheit-in-riviera-del-sol-mijas",
    title: "Gelegenheit in Riviera del Sol, Mijas",
    group: "wohnungen",
    city: "Mijas",
    region: "Costa del Sol",
    priceLabel: "189.000 €",
    summary:
      "Gepflegte Wohnung in ruhiger Urbanisation mit Terrasse, Meerblick, Pool und Garage in Riviera del Sol.",
    description:
      "Die Wohnung ist eine kompakte Gelegenheit für Käufer, die einen bezahlbaren Einstieg an der Costa del Sol suchen. Sie verbindet zwei Schlafzimmer, zwei Bäder und Meerblick mit einer ruhigen Anlage, Gemeinschaftspool und Parkplatz in gutem Verhältnis von Preis zu Lage.",
    facts: [
      { label: "Schlafzimmer", value: "2" },
      { label: "Bäder", value: "2" },
      { label: "Urbanisation", value: "ruhig & gepflegt" },
      { label: "Extras", value: "Garage & Pool" },
    ],
    highlights: [
      "Terrasse mit Meerblick.",
      "Gute Gelegenheit für den Einstieg oder als Ferienwohnung.",
      "Ruhige Wohnanlage mit gepflegtem Gemeinschaftsbereich.",
    ],
    coverImage:
      "https://image.jimcdn.com/app/cms/image/transf/dimension%3D1920x400%3Aformat%3Djpg/path/sa7cb54a604c6896d/image/icbbd2ad3fd0f327d/version/1711807824/image.jpg",
    featured: false,
    status: "verfuegbar",
  },
];

export function getGroupMeta(group: PropertyGroupKey) {
  return propertyGroups.find((entry) => entry.id === group) ?? propertyGroups[0];
}
