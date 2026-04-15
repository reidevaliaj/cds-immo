import aboutCityImage from "@/assets/about6.jpg";
import heroImage from "@/assets/hero.jpg";
import coastImage from "@/assets/hero2.jpg";
import immobilienvermittlungHeroImage from "@/assets/immobilienvermittlung-hero.jpg";
import serviceBankImage from "@/assets/service-bank.jpg";
import serviceMoveImage from "@/assets/service-move.jpg";
import type { StaticImageData } from "next/image";

export type ServiceContentCard = {
  title: string;
  text: string;
};

export type ServicePageContent = {
  eyebrow: string;
  title: string;
  description: string;
  highlights: string[];
  image: StaticImageData;
  imageAlt: string;
  contactTopic: string;
  introLabel: string;
  introTitle: string;
  introText: string;
  benefits: ServiceContentCard[];
  includedEyebrow: string;
  includedTitle: string;
  includedDescription: string;
  includedItems: ServiceContentCard[];
  processEyebrow: string;
  processTitle: string;
  processDescription: string;
  processItems: ServiceContentCard[];
  note?: {
    title: string;
    text: string;
    items?: string[];
  };
  ctaTitle: string;
  ctaText: string;
};

export const servicePageContent: Record<string, ServicePageContent> = {
  "immobilienvermittlung": {
    eyebrow: "Leistung im Fokus",
    title: "Immobilienvermittlung an der Costa del Sol mit deutscher Begleitung.",
    description:
      "CDS-IMMO zeigt nicht einfach nur Immobilien. Wir begleiten bei der Auswahl passender Häuser, Wohnungen und Neubauprojekte und verbinden die Suche mit den nächsten Schritten Richtung Spanien.",
    highlights: [
      "Häuser, Wohnungen und Neubauprojekte",
      "Vorauswahl statt Objektflut",
      "Deutschsprachige Begleitung",
    ],
    image: immobilienvermittlungHeroImage,
    imageAlt:
      "Straßenszene in Andalusien für die Immobilienvermittlung an der Costa del Sol",
    contactTopic: "Immobilienvermittlung",
    introLabel: "Was diese Leistung leistet",
    introTitle:
      "Die Immobiliensuche wird ruhiger, klarer und besser auf das echte Leben in Spanien abgestimmt.",
    introText:
      "Viele Interessenten brauchen nicht nur schöne Exposés, sondern eine Auswahl, die zu Alltag, Region, Budget und dem gesamten Schritt an die Costa del Sol passt. Genau dort setzt die Vermittlung an.",
    benefits: [
      {
        title: "Passende Vorauswahl",
        text: "Objekte werden nicht nur nach Preis, sondern nach Lebensmodell, Lage, Alltag und realer Nutzbarkeit zusammengestellt.",
      },
      {
        title: "Deutschsprachige Begleitung",
        text: "Fragen zu Regionen, Abläufen und Besichtigungen bleiben verständlich, ruhig und klar strukturiert.",
      },
      {
        title: "Vernetzte Begleitung",
        text: "Immobilie, Bank, Recht und Unterlagen werden früh zusammengedacht statt erst kurz vor dem Kauf.",
      },
    ],
    includedEyebrow: "Objektarten",
    includedTitle:
      "Häuser, Wohnungen und Neubauprojekte werden nicht getrennt präsentiert, sondern passend zum Suchbild kuratiert.",
    includedDescription:
      "Die Vermittlung denkt nicht in einer starren Standardliste. Je nach Wunsch, Region und Lebensmodell entsteht die Auswahl aus genau den Objektarten, die wirklich Sinn ergeben.",
    includedItems: [
      {
        title: "Häuser & Villen",
        text: "Für Käufer, die Privatsphäre, Garten, Pool oder mehr Raum für den Alltag in Spanien suchen.",
      },
      {
        title: "Wohnungen & Penthäuser",
        text: "Für strandnahes Wohnen, Feriennutzung, Kapitalanlage oder einen pflegeleichten Einstieg an der Küste.",
      },
      {
        title: "Neubauprojekte",
        text: "Für Käufer, die moderne Standards, neue Anlagen und klare Projektstrukturen bevorzugen.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So läuft die Vermittlung typischerweise ab.",
    processDescription:
      "Klarheit im Ablauf nimmt Druck heraus. Deshalb bleibt vom ersten Gespräch bis zur engeren Auswahl jeder Schritt nachvollziehbar.",
    processItems: [
      {
        title: "Wunschbild schärfen",
        text: "Zu Beginn klären wir Region, Budget, Objektart und ob es um Auswandern, Feriennutzung oder Kapitalanlage geht.",
      },
      {
        title: "Objekte gezielt auswählen",
        text: "Danach entsteht eine passende Auswahl aus Häusern, Wohnungen oder Neubauprojekten statt einer unsortierten Masse an Exposés.",
      },
      {
        title: "Sicher weitergehen",
        text: "Bei ernsthaftem Interesse werden die nächsten Schritte mit Besichtigung, Unterlagen und passenden Kontakten sauber vorbereitet.",
      },
    ],
    ctaTitle: "Die Suche soll nicht kompliziert wirken, sondern nachvollziehbar und passend zu Ihrem Plan.",
    ctaText:
      "Wenn Sie bereits eine Region oder Objektart im Blick haben, starten wir genau dort. Wenn noch nicht, grenzen wir es gemeinsam ein.",
  },
  "anwaelte-steuerberater": {
    eyebrow: "Recht & Sicherheit",
    title: "Deutschsprachige Anwälte für einen rechtssicheren Immobilienkauf in Spanien.",
    description:
      "Für maximale Sicherheit beim Immobilienkauf arbeitet CDS-IMMO mit einer erfahrenen, international ausgerichteten Kanzlei mit deutschsprachigen Rechtsanwälten an der Costa del Sol zusammen.",
    highlights: [
      "Deutschsprachige Rechtsanwälte",
      "Prüfung bis Abschluss",
      "Auch unabhängig vom Immobilienkauf nutzbar",
    ],
    image: aboutCityImage,
    imageAlt:
      "Küstenaufnahme der Costa del Sol als ruhiger Hintergrund für die Rechtsberatung",
    contactTopic: "Anwälte & Recht",
    introLabel: "Worum es geht",
    introTitle:
      "Rechtliche Schritte sollen verständlich, transparent und ohne Sprachbarrieren ablaufen.",
    introText:
      "Gerade bei Kaufverträgen, Belastungen, Lizenzen oder dem Notartermin schafft ein deutschsprachiger juristischer Ansprechpartner die Sicherheit, die viele Käufer in Spanien brauchen.",
    benefits: [
      {
        title: "Prüfung im Vorfeld",
        text: "Eigentumsverhältnisse, Grundbuch, Kataster, laufende Kosten und mögliche Belastungen werden sorgfältig geprüft.",
      },
      {
        title: "Verträge & Absicherung",
        text: "Reservierungsvertrag, Arras-Vertrag und notarielle Kaufurkunde werden rechtlich vorbereitet und sauber abgestimmt.",
      },
      {
        title: "Begleitung bis danach",
        text: "Auch Notartermin, Eintragung, steuerliche Schritte und auf Wunsch weitere Abwicklungen bleiben eingebunden.",
      },
    ],
    includedEyebrow: "Leistungsumfang",
    includedTitle:
      "Diese juristische Begleitung deckt die entscheidenden Schritte vor, während und nach dem Kauf ab.",
    includedDescription:
      "Die Zusammenarbeit erfolgt direkt mit der Kanzlei. CDS-IMMO stellt den Kontakt her und hilft, die Abstimmung in einen verständlichen Ablauf zu übersetzen.",
    includedItems: [
      {
        title: "Vorprüfung",
        text: "Nota Simple, Eigentumsverhältnisse, Belastungen, Kataster, Lizenzen und laufende Kosten werden kontrolliert.",
      },
      {
        title: "Vertragsprüfung",
        text: "Reservierung, Anzahlungsvertrag und notarielle Kaufurkunde werden rechtlich geprüft, abgestimmt und verhandelt.",
      },
      {
        title: "Notartermin",
        text: "Unterlagen, Kommunikation mit Notariat und Begleitung oder Vertretung beim Termin werden vorbereitet.",
      },
      {
        title: "Nachbetreuung",
        text: "Steuerliche Abwicklung, Grundbucheintragung und auf Wunsch weitere Ummeldungen bleiben im Blick.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So entsteht rechtliche Sicherheit Schritt für Schritt.",
    processDescription:
      "Die rechtliche Begleitung beginnt nicht erst beim Vertrag, sondern schon deutlich früher mit Prüfung, Risikoeinschätzung und klarer Kommunikation.",
    processItems: [
      {
        title: "Anliegen einordnen",
        text: "Wir besprechen Objekt, Situation und offenen Punkte und stellen den passenden juristischen Kontakt her.",
      },
      {
        title: "Unterlagen prüfen lassen",
        text: "Die Kanzlei prüft die relevanten Dokumente und erklärt, worauf aus rechtlicher Sicht geachtet werden sollte.",
      },
      {
        title: "Bis zum Abschluss begleiten",
        text: "Verträge, Notartermin und Nachbereitung bleiben in einer nachvollziehbaren Reihenfolge abgestimmt.",
      },
    ],
    note: {
      title: "Transparente Kostenstruktur",
      text: "Die vollständige rechtliche Begleitung beim Immobilienkauf erfolgt in der Regel zu einer pauschalen Vergütung von 1 % des Kaufpreises zzgl. 21 % MwSt. Die Abrechnung erfolgt direkt mit der Kanzlei und nicht durch CDS-IMMO.",
      items: [
        "Die Kontaktvermittlung ist auch möglich, wenn keine Immobilie über CDS-IMMO gekauft wurde.",
        "Eine Datenweitergabe erfolgt ausschließlich nach ausdrücklicher Zustimmung.",
      ],
    },
    ctaTitle: "Wenn Sie rechtliche Sicherheit wünschen, stellen wir gern den passenden deutschsprachigen Kontakt her.",
    ctaText:
      "Über das Kontaktformular können Sie Ihre Situation kurz schildern. Von dort aus begleiten wir die nächsten Schritte abgestimmt weiter.",
  },
  "bankkonto-finanzierung": {
    eyebrow: "Bank & Finanzierung",
    title: "Deutschsprachige Unterstützung bei Konto, Finanzierung und Bankabwicklung in Spanien.",
    description:
      "Für einen reibungslosen Immobilienkauf in Spanien ist ein funktionierendes Bankensystem vor Ort unerlässlich. CDS-IMMO arbeitet dafür mit Banco Sabadell zusammen – einer Bank mit besonderem Fokus auf deutschsprachige Kunden.",
    highlights: [
      "Deutschsprachige Ansprechpartner",
      "Kontoeröffnung in Spanien",
      "Strukturierte Finanzierungslösungen",
    ],
    image: serviceBankImage,
    imageAlt:
      "Küstenstadt an der Costa del Sol als ruhiger Hintergrund für Bank- und Finanzierungsthemen",
    contactTopic: "Bank & Finanzierung",
    introLabel: "Worum es geht",
    introTitle:
      "Bankthemen sollen nicht an Sprache, Unsicherheit oder fehlender Koordination scheitern.",
    introText:
      "Gerade bei Kontoeröffnung, Finanzierungsprüfung und der Abstimmung zwischen Bank, Anwälten und weiteren Beteiligten ist ein klarer, deutschsprachiger Prozess besonders wertvoll.",
    benefits: [
      {
        title: "Deutschsprachige Ansprechpartner",
        text: "Beratung, Begleitung und 24-Stunden-Support auf Deutsch reduzieren Reibung im gesamten Bankprozess.",
      },
      {
        title: "Konto & Hypothek",
        text: "Die Kontoeröffnung in Spanien und die Prüfung möglicher Finanzierungen lassen sich deutlich strukturierter vorbereiten.",
      },
      {
        title: "Abgestimmte Begleitung",
        text: "Auf Wunsch koordiniert CDS-IMMO die Schritte mit Bank, Anwälten und weiteren Beteiligten eng mit.",
      },
    ],
    includedEyebrow: "Leistungsumfang",
    includedTitle:
      "Die Banklösung ist auf die typischen Bedürfnisse deutschsprachiger Käufer in Spanien ausgerichtet.",
    includedDescription:
      "Nach aktuellem Kenntnisstand gehört Banco Sabadell zu den wenigen Banken in Spanien, die diesen Service für deutschsprachige Kunden in dieser Form anbieten.",
    includedItems: [
      {
        title: "Kontoeröffnung",
        text: "Das spanische Konto als wichtige Grundlage für den Immobilienkauf wird klar und nachvollziehbar vorbereitet.",
      },
      {
        title: "Finanzierungsprüfung",
        text: "Individuelle Hypotheken- und Finanzierungslösungen werden für deutsche Käufer transparenter aufbereitet.",
      },
      {
        title: "Versicherungen",
        text: "Auch Absicherungen rund um die Immobilie können in die Bankabstimmung eingebunden werden.",
      },
      {
        title: "Koordination",
        text: "CDS-IMMO hilft dabei, die Kommunikation zwischen Bank, Recht und weiteren Stellen sauber zusammenzuführen.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So wird das Bankthema planbarer.",
    processDescription:
      "Konto, Finanzierung und Abstimmungen werden nicht nebenbei erledigt, sondern geordnet vorbereitet, damit der Kaufprozess nicht ins Stocken gerät.",
    processItems: [
      {
        title: "Situation einordnen",
        text: "Wir klären, ob es um Kontoeröffnung, Finanzierung, Absicherung oder die Kombination mehrerer Schritte geht.",
      },
      {
        title: "Kontakt herstellen",
        text: "Danach wird der direkte Kontakt zur passenden deutschsprachigen Bankberatung hergestellt.",
      },
      {
        title: "Abstimmung begleiten",
        text: "Auf Wunsch begleiten wir den weiteren Ablauf zwischen Bank, Rechtsanwälten und Immobilienprozess eng mit.",
      },
    ],
    note: {
      title: "Transparenz & Datenschutz",
      text: "Im Rahmen dieser Dienstleistung kann es erforderlich sein, Kontaktdaten an Banco Sabadell weiterzuleiten, um eine Kontoeröffnung oder Finanzierungsprüfung zu ermöglichen. Dies erfolgt selbstverständlich nur mit ausdrücklicher Einwilligung.",
    },
    ctaTitle: "Wenn Konto oder Finanzierung der nächste Schritt ist, stellen wir den direkten deutschsprachigen Kontakt her.",
    ctaText:
      "Über das Kontaktformular können Sie kurz angeben, ob es um Konto, Hypothek, Finanzierung oder eine allgemeine Orientierung geht.",
  },
  "private-krankenversicherung": {
    eyebrow: "Versicherung",
    title: "Private Krankenversicherung in Spanien verständlich einordnen und passend weiterleiten.",
    description:
      "Wer den Lebensmittelpunkt ganz oder teilweise nach Spanien verlegt, muss die Krankenversicherung früh mitdenken. CDS-IMMO hilft dabei, den passenden deutschsprachigen Kontakt für die nächste Abstimmung zu finden.",
    highlights: [
      "Für Auswanderer, Familien und Ruheständler",
      "Orientierung statt Unsicherheit",
      "Deutschsprachige Ansprechpartner",
    ],
    image: coastImage,
    imageAlt:
      "Blick über die Costa del Sol als ruhiger Hintergrund für private Krankenversicherung in Spanien",
    contactTopic: "Private Krankenversicherung",
    introLabel: "Worum es geht",
    introTitle:
      "Versicherung soll zum Leben in Spanien passen und nicht erst im letzten Moment geklärt werden.",
    introText:
      "Gerade bei Auswanderung, längerem Aufenthalt oder dem Wechsel des Lebensmittelpunkts entstehen viele Fragen. Deshalb wird dieses Thema bei CDS-IMMO frühzeitig mitgedacht.",
    benefits: [
      {
        title: "Früh Orientierung gewinnen",
        text: "Noch bevor Unterlagen fehlen oder Fristen drücken, lässt sich klären, welche Richtung für Ihre Situation sinnvoll ist.",
      },
      {
        title: "Passende Ansprechpartner",
        text: "Deutschsprachige Kontakte helfen dabei, Tarife, Voraussetzungen und die nächsten Schritte verständlich einzuordnen.",
      },
      {
        title: "Mit dem Gesamtplan verzahnt",
        text: "Versicherung wird nicht isoliert betrachtet, sondern mit Immobilie, Auswanderung und dem Alltag in Spanien verbunden.",
      },
    ],
    includedEyebrow: "Wobei unterstützt wird",
    includedTitle:
      "Die Begleitung schafft Klarheit bei Fragen, die für viele Auswanderer und Käufer besonders relevant sind.",
    includedDescription:
      "CDS-IMMO vermittelt hier keine eigene Versicherung, sondern unterstützt bei der Einordnung und beim Kontakt zu passenden Stellen.",
    includedItems: [
      {
        title: "Lebenssituation prüfen",
        text: "Ob Familie, Ruhestand, Selbstständigkeit oder zweiter Wohnsitz: die Ausgangslage entscheidet über die sinnvolle Richtung.",
      },
      {
        title: "Absicherung verstehen",
        text: "Unterschiede, Voraussetzungen und der praktische Nutzen einer privaten Lösung in Spanien werden verständlich erklärt.",
      },
      {
        title: "Kontakt herstellen",
        text: "Wenn die Richtung klar ist, wird der passende Ansprechpartner für die weitere Klärung angebunden.",
      },
      {
        title: "Nächste Schritte bündeln",
        text: "Versicherung, Dokumente und der allgemeine Schritt nach Spanien lassen sich sauber aufeinander abstimmen.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So wird aus einer offenen Frage ein geordneter nächster Schritt.",
    processDescription:
      "Statt unsicher zu recherchieren, lässt sich die Situation eingrenzen und mit einem passenden deutschsprachigen Kontakt weiterführen.",
    processItems: [
      {
        title: "Situation schildern",
        text: "Sie geben an, ob es um Auswandern, Zweitwohnsitz, Familie, Ruhestand oder eine andere Konstellation geht.",
      },
      {
        title: "Bedarf einordnen",
        text: "Gemeinsam wird geklärt, welches Thema konkret offen ist und welche Informationen vor dem nächsten Schritt wichtig sind.",
      },
      {
        title: "Kontakt aufnehmen",
        text: "Danach wird der passende Ansprechpartner eingebunden, damit die eigentliche Absicherung weiter vorbereitet werden kann.",
      },
    ],
    note: {
      title: "Wichtiger Hinweis",
      text: "CDS-IMMO vermittelt Kontakte und Orientierung, erbringt aber selbst keine Versicherungsberatung.",
    },
    ctaTitle: "Wenn Krankenversicherung in Spanien für Sie ein offenes Thema ist, starten wir mit einer ruhigen Einordnung.",
    ctaText:
      "Schildern Sie im Kontaktformular kurz Ihre Situation. Danach lässt sich die passende Richtung deutlich schneller eingrenzen.",
  },
  "umzug-service": {
    eyebrow: "Umzug",
    title: "Umzugsservice zwischen Deutschland und Spanien mit klarer Planung statt Chaos.",
    description:
      "Der Wechsel zwischen Deutschland und Spanien soll nicht in unübersichtlichen Einzelthemen enden. CDS-IMMO hilft dabei, den Umzug nachvollziehbar vorzubereiten und mit den übrigen Schritten Richtung Spanien zu verbinden.",
    highlights: [
      "DE–ES–DE",
      "Strukturierte Planung",
      "Abstimmung mit weiteren Schritten",
    ],
    image: serviceMoveImage,
    imageAlt:
      "Straßenszene in Andalusien als lebendiger Hintergrund für den Umzug nach Spanien",
    contactTopic: "Umzugsservice DE–ES–DE",
    introLabel: "Worum es geht",
    introTitle:
      "Ein Umzug braucht nicht nur Transport, sondern Übersicht über den gesamten Wechsel nach Spanien.",
    introText:
      "Gerade wenn Immobilie, Dokumente, Ankunft und neue Routinen zusammenkommen, hilft ein sauberer Ablaufplan mehr als spontane Einzelentscheidungen.",
    benefits: [
      {
        title: "Früh planen",
        text: "Ein geordneter Umzug beginnt lange vor dem eigentlichen Transport und spart später Zeit, Druck und unnötige Umwege.",
      },
      {
        title: "Mitdenken statt nacharbeiten",
        text: "Wichtige Übergänge zwischen Immobilie, Dokumenten, Ankunft und Alltag werden gleich mitgedacht.",
      },
      {
        title: "Ruhiger ankommen",
        text: "Die eigentliche Bewegung zwischen Deutschland und Spanien wird deutlich übersichtlicher, wenn die Struktur vorher steht.",
      },
    ],
    includedEyebrow: "Wobei unterstützt wird",
    includedTitle:
      "Der Umzugsservice verbindet Logistik, Planung und den tatsächlichen Neustart in Spanien.",
    includedDescription:
      "Die genaue Ausgestaltung hängt natürlich von Umfang, Wohnort und Zeitrahmen ab. CDS-IMMO hilft dabei, die passende Richtung zu strukturieren und die nächsten Ansprechpartner einzubinden.",
    includedItems: [
      {
        title: "Vorabplanung",
        text: "Zeitrahmen, Umfang und die wichtigsten Schritte werden vor dem eigentlichen Umzug nachvollziehbar geordnet.",
      },
      {
        title: "Koordination",
        text: "Wenn weitere Themen wie Dokumente, Schlüsselübergabe oder Ankunft vor Ort dazugehören, werden sie mitgedacht.",
      },
      {
        title: "Abläufe bündeln",
        text: "So entsteht kein Bruch zwischen Immobilienprozess, Umzug und den organisatorischen Schritten nach der Ankunft.",
      },
      {
        title: "Ankommen erleichtern",
        text: "Ziel ist nicht nur der Transport, sondern ein ruhigerer Start in Spanien oder bei der Rückkehr nach Deutschland.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So wird der Wechsel zwischen Deutschland und Spanien planbar.",
    processDescription:
      "Auch ohne endgültigen Fahrplan lassen sich die wichtigsten Punkte früh sortieren, damit später weniger Druck entsteht.",
    processItems: [
      {
        title: "Situation erfassen",
        text: "Sie schildern, ob es um einen dauerhaften Umzug, einen Teilumzug oder mehrere abgestimmte Schritte geht.",
      },
      {
        title: "Rahmen klären",
        text: "Gemeinsam wird eingegrenzt, welche Themen außer dem Transport ebenfalls berücksichtigt werden sollten.",
      },
      {
        title: "Nächste Kontakte anbinden",
        text: "Danach werden die passenden nächsten Schritte und Ansprechpartner für die konkrete Umsetzung angebunden.",
      },
    ],
    note: {
      title: "Hinweis",
      text: "Für diesen Bereich lag kein separates PDF vor. Die Seite wurde aus dem bisherigen Projektbriefing und den bereits abgestimmten Leistungen sauber neu aufgebaut.",
    },
    ctaTitle: "Wenn der Schritt nach Spanien konkreter wird, sollte auch der Umzug früh mitgedacht werden.",
    ctaText:
      "Über das Kontaktformular können Sie kurz schildern, ob es um DE–ES, ES–DE oder einen kombinierten Ablauf mit Immobilie und Dokumenten geht.",
  },
  "dokumenten-objektservice": {
    eyebrow: "Dokumente & Objektservice",
    title: "Unterlagen, Abstimmungen und Objektservice verständlich zusammenführen.",
    description:
      "Viele Prozesse rund um Kauf, Verkauf, Vermietung und das spätere Ankommen hängen an Dokumenten, Nachweisen und organisatorischen Schritten. CDS-IMMO hilft dabei, diese Punkte übersichtlich zu bündeln.",
    highlights: [
      "Dokumente rund um Kauf und Verkauf",
      "Abstimmungen mit Partnern",
      "Objektservice auf Wunsch",
    ],
    image: heroImage,
    imageAlt:
      "Küstenmotiv für Dokumenten- und Objektservice an der Costa del Sol",
    contactTopic: "Dokumenten- & Objektservice",
    introLabel: "Worum es geht",
    introTitle:
      "Viele Vorhaben scheitern nicht an der Immobilie, sondern an fehlender Übersicht über Unterlagen und Abläufe.",
    introText:
      "Ob Kauf, Verkauf, Vermietung oder die Betreuung eines Objekts: Wenn Unterlagen, Zuständigkeiten und nächste Schritte sauber geordnet sind, wird der gesamte Prozess deutlich entspannter.",
    benefits: [
      {
        title: "Übersicht schaffen",
        text: "Dokumente, Zuständigkeiten und offene Punkte werden so geordnet, dass Sie jederzeit wissen, was als Nächstes wichtig ist.",
      },
      {
        title: "Abstimmungen bündeln",
        text: "Kontakte mit Anwälten, Banken, Dienstleistern oder anderen Beteiligten können besser ineinandergreifen.",
      },
      {
        title: "Objekt im Blick behalten",
        text: "Auf Wunsch wird auch die spätere Betreuung, Pflege oder Vermietung des Objekts mitgedacht.",
      },
    ],
    includedEyebrow: "Wobei unterstützt wird",
    includedTitle:
      "Diese Leistung schafft Ordnung in Themen, die für viele Eigentümer und Käufer schnell unübersichtlich werden.",
    includedDescription:
      "Gerade wenn mehrere Beteiligte, Dokumente oder organisatorische Schritte zusammenkommen, ist eine saubere Koordination oft entscheidend.",
    includedItems: [
      {
        title: "Unterlagen vorbereiten",
        text: "Dokumente für Kauf, Verkauf, Vermietung oder weitere Abwicklungen werden eingeordnet und nachvollziehbar gebündelt.",
      },
      {
        title: "Abläufe abstimmen",
        text: "Beteiligte Stellen lassen sich besser koordinieren, wenn Unterlagen und Zuständigkeiten klar sortiert sind.",
      },
      {
        title: "Objektservice denken",
        text: "Auf Wunsch wird auch der Blick auf Vermietung, Pflege oder die weitere Betreuung der Immobilie gerichtet.",
      },
      {
        title: "Alltag entlasten",
        text: "Viele kleine Einzelschritte verlieren ihren Druck, wenn sie in einer verständlichen Reihenfolge organisiert werden.",
      },
    ],
    processEyebrow: "Ablauf",
    processTitle: "So werden aus losen Einzelthemen geordnete nächste Schritte.",
    processDescription:
      "Die Arbeit beginnt mit Übersicht und endet bei klar abgestimmten Kontakten, Unterlagen und Zuständigkeiten.",
    processItems: [
      {
        title: "Bedarf eingrenzen",
        text: "Wir klären, ob es um Kauf, Verkauf, Vermietung, Objektbetreuung oder eine Kombination mehrerer Themen geht.",
      },
      {
        title: "Unterlagen ordnen",
        text: "Danach wird eingegrenzt, welche Dokumente, Abstimmungen und Ansprechpartner wirklich relevant sind.",
      },
      {
        title: "Weiter begleiten",
        text: "Die nächsten Schritte werden so vorbereitet, dass Sie nicht mit einer unklaren Liste offener Punkte allein bleiben.",
      },
    ],
    note: {
      title: "Wichtiger Hinweis",
      text: "Diese Begleitung schafft Struktur und Orientierung. Rechts- oder Steuerberatung erfolgt ausschließlich über zugelassene externe Fachpartner.",
    },
    ctaTitle: "Wenn Unterlagen, Abläufe oder Objektbetreuung unübersichtlich werden, helfen klare Strukturen am meisten.",
    ctaText:
      "Schildern Sie im Kontaktformular kurz, worum es geht. Daraus lässt sich der passende nächste Schritt wesentlich leichter ableiten.",
  },
};
