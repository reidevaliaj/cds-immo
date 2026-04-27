import andalusianCityImage from "@/assets/andalusian-city.jpg";
import benalmadenaVillageImage from "@/assets/benalmadena-village.jpg";
import entranceBoardwalkImage from "@/assets/entrance-boardwalk.jpg";
import immobilienvermittlungHeroImage from "@/assets/immobilienvermittlung-hero.jpg";
import malagaCivicImage from "@/assets/malaga-civic.jpg";
import marbellaCoastImage from "@/assets/marbella-coast.jpg";
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

const immobilienvermittlungContent: ServicePageContent = {
  eyebrow: "Leistung im Fokus",
  title: "Immobilienvermittlung an der Costa del Sol mit deutscher Begleitung.",
  description:
    "CDS-IMMO zeigt nicht einfach nur Immobilien. Wir begleiten bei der Auswahl passender Häuser, Wohnungen und Neubauprojekte und verbinden die Suche mit den nächsten Schritten Richtung Spanien - von der ersten Orientierung bis zur abgestimmten Umsetzung.",
  highlights: [
    "Häuser, Wohnungen und Neubauprojekte",
    "Vorauswahl statt Objektflut",
    "Mehr als Makler: Suche, Struktur und Begleitung",
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
  ctaTitle:
    "Die Suche soll nicht kompliziert wirken, sondern nachvollziehbar und passend zu Ihrem Plan.",
  ctaText:
    "Wenn Sie bereits eine Region oder Objektart im Blick haben, starten wir genau dort. Wenn noch nicht, grenzen wir es gemeinsam ein.",
};

const anwaelteContent: ServicePageContent = {
  eyebrow: "Anwälte & Recht",
  title:
    "Deutschsprachige Rechtsbegleitung für einen 100 % safe begleiteten Immobilienkauf in Spanien.",
  description:
    "CDS-IMMO arbeitet mit einer erfahrenen, international tätigen Kanzlei mit deutschsprachigen Rechtsanwälten zusammen, die an der Costa del Sol mit mehreren Büros vertreten ist. So werden alle rechtlichen Schritte verständlich, transparent und ohne Sprachbarrieren begleitet.",
  highlights: [
    "100 % safe aus Kundensicht",
    "Internationale Kanzlei",
    "Mehrere Büros an der Costa del Sol",
    "NIE auf Wunsch",
  ],
  image: malagaCivicImage,
  imageAlt:
    "Málaga-Stadtansicht mit repräsentativem Gebäude für die Seite Anwälte und Recht",
  contactTopic: "Anwälte & Recht",
  introLabel: "Worum es hier geht",
  introTitle:
    "Rechtliche Sicherheit muss sich für deutsche Käufer klar, verständlich und 100 % safe anfühlen.",
  introText:
    "Gerade beim Immobilienkauf in Spanien zählen nicht nur schöne Exposés, sondern saubere Verträge, klare Prüfungen und verlässliche deutschsprachige Ansprechpartner. Genau dafür ist diese juristische Begleitung da.",
  benefits: [
    {
      title: "100 % safe aus Kundensicht",
      text: "Vom ersten Prüfschritt bis zur finalen Unterschrift wird der Kauf so vorbereitet, dass Risiken sichtbar, verständlich und juristisch abgesichert werden.",
    },
    {
      title: "Internationale Kanzlei vor Ort",
      text: "Die Zusammenarbeit erfolgt mit einer international tätigen Kanzlei mit mehreren Büros an der Costa del Sol und deutschsprachigen Rechtsanwälten.",
    },
    {
      title: "Deutschsprachig bis zum Abschluss",
      text: "Prüfungen, Rückfragen, Verträge und Notartermin bleiben transparent begleitet, ohne dass der Kunde in einen unklaren spanischen Rechtsprozess allein hineingeht.",
    },
  ],
  includedEyebrow: "Leistungsumfang",
  includedTitle:
    "Diese juristische Begleitung deckt die entscheidenden Schritte vor, während und nach dem Kauf ab.",
  includedDescription:
    "Die Kanzlei begleitet nicht nur den Vertrag, sondern prüft die Immobilie, bereitet den Notartermin vor und bleibt auch bei den Folgeschritten eingebunden.",
  includedItems: [
    {
      title: "Sorgfältige Prüfung im Vorfeld",
      text: "Nota Simple, Eigentumsverhältnisse, Belastungen, Katasterdaten, baurechtliche Gegebenheiten, Lizenzen und laufende Kosten werden sorgfältig geprüft.",
    },
    {
      title: "Vertragsprüfung & Kaufabwicklung",
      text: "Reservierungsvertrag, Arras-Vertrag und notarielle Kaufurkunde werden juristisch vorbereitet, geprüft und in enger Abstimmung mit Makler, Verkäufer, Bank und Notariat begleitet.",
    },
    {
      title: "Notartermin & Abschluss",
      text: "Alle relevanten Unterlagen werden vorbereitet, die Kommunikation mit dem Notariat koordiniert und auf Wunsch auch die Vertretung beim Notartermin organisiert.",
    },
    {
      title: "NIE auf Wunsch",
      text: "Die spanische Ausländer-Identifikationsnummer kann auf Wunsch gleich mitgedacht und über den passenden Weg vorbereitet oder begleitet werden.",
    },
  ],
  processEyebrow: "Ablauf",
  processTitle: "So entsteht rechtliche Sicherheit Schritt für Schritt.",
  processDescription:
    "Die juristische Begleitung beginnt nicht erst beim Vertrag, sondern schon deutlich früher mit Prüfung, Risikoeinschätzung und klarer Kommunikation.",
  processItems: [
    {
      title: "Objekt und Anliegen einordnen",
      text: "Wir besprechen Objekt, Situation und offene Punkte und stellen den passenden deutschsprachigen Kanzleikontakt her.",
    },
    {
      title: "Unterlagen und Verträge prüfen",
      text: "Die Kanzlei prüft die relevanten Dokumente, erklärt die juristischen Risiken und sichert die Vertragsunterlagen sauber ab.",
    },
    {
      title: "Abschluss und Nachbetreuung begleiten",
      text: "Notartermin, Eintragung und die nächsten rechtlichen Schritte bleiben in einer nachvollziehbaren Reihenfolge koordiniert.",
    },
  ],
  note: {
    title: "Transparenz, Kosten & NIE",
    text: "Die vollständige rechtliche Begleitung beim Immobilienkauf erfolgt in der Regel zu einer pauschalen Vergütung von 1 % des Kaufpreises zzgl. 21 % MwSt. Die Abrechnung erfolgt direkt mit der Kanzlei und nicht durch CDS-IMMO. Eine Weitergabe Ihrer Daten erfolgt ausschließlich nach Ihrer ausdrücklichen Zustimmung.",
    items: [
      "Die NIE ist für Immobilienkauf, Kontoeröffnung und weitere rechtliche Schritte in Spanien zwingend erforderlich.",
      "Die Beantragung ist über ein spanisches Konsulat in Deutschland, persönlich in Spanien bei der Oficina de Extranjería oder über die Kanzlei in Spanien möglich.",
      "Auf Wunsch wird die NIE-Beantragung direkt in die juristische Begleitung eingebunden.",
    ],
  },
  ctaTitle:
    "Wenn Sie rechtliche Sicherheit wünschen, stellen wir gern den passenden deutschsprachigen Kanzleikontakt her.",
  ctaText:
    "Über das Kontaktformular können Sie Ihre Situation kurz schildern. Von dort aus begleiten wir die nächsten Schritte transparent und abgestimmt weiter.",
};

const steuernContent: ServicePageContent = {
  eyebrow: "Steuern, Kosten & NIE",
  title:
    "Steuern, Kaufnebenkosten und NIE beim Immobilienkauf in Spanien klar eingeordnet.",
  description:
    "Gerade für deutsche Käufer sind Kaufnebenkosten, Fristen und die NIE oft einer der unübersichtlichsten Teile des Spanien-Schritts. Diese Seite schafft Orientierung, ohne eine individuelle Steuer- oder Rechtsberatung zu ersetzen.",
  highlights: [
    "Bestandsimmobilie vs. Neubau",
    "Laufende Steuern und Kosten",
    "Fristen für Nichtresidenten",
    "NIE als Pflichtnummer",
  ],
  image: malagaCivicImage,
  imageAlt:
    "Málaga-Stadtansicht als ruhiger Hintergrund für Steuern, Kosten und NIE",
  contactTopic: "Steuern, Kosten & NIE",
  introLabel: "Worum es hier geht",
  introTitle:
    "Wer Kosten und Fristen früh versteht, trifft beim Immobilienkauf in Spanien deutlich sicherere Entscheidungen.",
  introText:
    "Viele Fragen entstehen nicht beim Besichtigen, sondern bei Steuern, Nebenkosten, laufenden Abgaben und der NIE. Genau hier hilft ein klarer Überblick, bevor Unsicherheit oder Zeitdruck entstehen.",
  benefits: [
    {
      title: "Bestandsimmobilie vs. Neubau",
      text: "Je nachdem, ob Sie eine Bestandsimmobilie oder einen Neubau kaufen, unterscheiden sich Steuerarten und Kaufnebenkosten deutlich.",
    },
    {
      title: "Laufende Kosten im Blick",
      text: "Neben dem Kaufpreis spielen auch Grundsteuer, Nichtresidentensteuer und je nach Vermögenshöhe weitere laufende Abgaben eine Rolle.",
    },
    {
      title: "NIE rechtzeitig einplanen",
      text: "Die Número de Identidad de Extranjero ist für wirtschaftliche, geschäftliche und rechtliche Schritte in Spanien zwingend erforderlich.",
    },
  ],
  includedEyebrow: "Überblick",
  includedTitle:
    "Diese Punkte sollten beim Immobilienkauf in Spanien früh und sauber eingeordnet werden.",
  includedDescription:
    "Die konkrete Einordnung hängt von Region, Immobilientyp und persönlicher Situation ab. Die folgenden Punkte geben den wichtigen Rahmen vor.",
  includedItems: [
    {
      title: "Bestandsimmobilie",
      text: "Bei einer Bestandsimmobilie fällt in der Regel ITP an. Regional liegt die Grunderwerbsteuer meist zwischen 6,5 % und 11 % des Kaufpreises; in Andalusien wird häufig mit 7 % gearbeitet.",
    },
    {
      title: "Neubauimmobilie",
      text: "Bei Neubauten fällt in der Regel 10 % IVA auf dem spanischen Festland und den Balearen an, zusätzlich kommt je nach Region die Dokumentensteuer AJD mit rund 0,5 % bis 1,5 % hinzu.",
    },
    {
      title: "Notar, Registro und weitere Kaufkosten",
      text: "Notar- und Grundbuchkosten sind gesetzlich geregelt und liegen oft zwischen 0,5 % und 1 % des Kaufpreises. Hinzu kommen bei externer Begleitung häufig Anwaltskosten von rund 1 % zzgl. MwSt.",
    },
    {
      title: "Laufende Steuern und Kosten",
      text: "Dazu zählen vor allem IBI, die Einkommensteuer für Nichtansässige bei Eigennutzung oder Vermietung und bei höherem Vermögen gegebenenfalls zusätzliche Vermögensteuer.",
    },
  ],
  processEyebrow: "Worauf es ankommt",
  processTitle: "Diese drei Punkte sollten Sie vor dem Kauf nicht aufschieben.",
  processDescription:
    "Gerade bei Käufen aus Deutschland oder bei begrenzten Zeitfenstern hilft es enorm, diese Themen frühzeitig mitzudenken.",
  processItems: [
    {
      title: "Kaufart unterscheiden",
      text: "Zuerst sollte klar sein, ob es sich um eine Bestandsimmobilie oder einen Neubau handelt, weil davon die steuerliche Struktur maßgeblich abhängt.",
    },
    {
      title: "Nebenkosten und Fristen einordnen",
      text: "Steuern sind in der Regel innerhalb von 30 Tagen nach Unterzeichnung der Escritura zu zahlen. Gerade bei Nichtresidenten sollten auch Sonderfälle früh geklärt sein.",
    },
    {
      title: "NIE rechtzeitig sichern",
      text: "Ohne NIE sind Kauf, Kontoeröffnung und weitere Abwicklungen nicht möglich. Deshalb sollte die Beantragung nicht erst kurz vor dem Abschluss beginnen.",
    },
  ],
  note: {
    title: "Wichtiger Hinweis",
    text: "Diese Seite dient als klarer Überblick und ersetzt keine individuelle Rechts- oder Steuerberatung. Regionale Sätze, persönliche Konstellationen und Sonderfälle sollten immer mit zugelassenen Fachpartnern final geprüft werden.",
    items: [
      "Beim Kauf von einem Nichtresidenten müssen häufig 3 % des Kaufpreises einbehalten und an das Finanzamt abgeführt werden.",
      "Die Número de Identidad de Extranjero ist zwingend für den Kauf erforderlich.",
      "CDS-IMMO hilft gern dabei, die richtigen Ansprechpartner für die genaue Prüfung rechtzeitig einzubinden.",
    ],
  },
  ctaTitle:
    "Wenn Sie Steuern, Kaufnebenkosten oder die NIE frühzeitig sauber klären möchten, gehen wir den Überblick gemeinsam mit Ihnen durch.",
  ctaText:
    "Über das Kontaktformular können Sie kurz schildern, ob es um Bestandsimmobilie, Neubau, Nichtresidenten-Themen oder die NIE geht. Danach lässt sich die passende Richtung deutlich schneller festlegen.",
};

const bankContent: ServicePageContent = {
  eyebrow: "Bank & Finanzierung",
  title:
    "Bank & Finanzierung mit deutschsprachigem Zugang in Málaga und klarer Struktur für deutsche Käufer.",
  description:
    "Ein zentraler Vorteil bei CDS-IMMO ist der Zugang zu Banco Sabadell mit deutschsprachigem Service in Málaga. Damit werden Kontoeröffnung, Hypothekenanfrage und die Abstimmung mit dem Kaufprozess für deutsche Käufer deutlich klarer und planbarer.",
  highlights: [
    "Deutschsprachiger Service in Málaga",
    "Banco Sabadell",
    "Hypotheken für deutsche Bürger",
    "Weniger Papierkram und Reibung",
  ],
  image: marbellaCoastImage,
  imageAlt:
    "Küstenstadt an der Costa del Sol als Hintergrund für Bank und Finanzierung",
  contactTopic: "Bank & Finanzierung",
  introLabel: "Worum es hier geht",
  introTitle:
    "Gerade bei Finanzierung und Kontoeröffnung entscheidet der richtige Zugang oft darüber, ob ein Kaufprozess kompliziert oder funktionierend wird.",
  introText:
    "Viele deutsche Käufer kennen die Unsicherheit rund um Hypotheken, Unterlagen, Beglaubigungen und Abstimmungen zwischen Deutschland und Spanien. Genau hier schafft ein deutschsprachiger Bankzugang mit Sitz in Málaga einen echten Vorteil.",
  benefits: [
    {
      title: "Deutschsprachiger Bankservice in Málaga",
      text: "Nach den Erfahrungen von Veronica Rodriguez und Edwin Kortler ist dies die einzige Bank in Spanien, die diesen deutschsprachigen Service mit Sitz in Málaga in dieser Form anbietet.",
    },
    {
      title: "Hypotheken unkomplizierter vorbereiten",
      text: "Gerade für deutsche Bürger werden Finanzierungen verständlicher und vor allem einfacher vorbereitet und durchgeführt, fast so, als würden Sie in Deutschland zu Ihrer Hausbank gehen.",
    },
    {
      title: "Weniger Hürden im Papierprozess",
      text: "Einkommensteuerbescheide, Gehaltsabrechnungen und weitere Nachweise lassen sich strukturierter vorbereiten, während unnötige Beglaubigungen und Apostillen durch diese Zusammenarbeit vielfach entfallen.",
    },
  ],
  includedEyebrow: "Wobei unterstützt wird",
  includedTitle:
    "Der Vorteil liegt nicht in einer Bankwerbung, sondern in einem sauber begleiteten Zugang zu den richtigen Strukturen.",
  includedDescription:
    "Für viele Käufer scheitert Finanzierung nicht am Wunsch, sondern an Sprache, Fristen oder an einem unübersichtlichen Dokumentenprozess. Genau diese Reibung wird hier reduziert.",
  includedItems: [
    {
      title: "Kontoeröffnung in Spanien",
      text: "Ein spanisches Girokonto wird klar vorbereitet, weil es für laufende Zahlungen rund um die Immobilie wichtig ist. Auch die IBI kann nur von einem spanischen Konto abgebucht werden.",
    },
    {
      title: "Hypothekenanfrage für deutsche Käufer",
      text: "Die Finanzierung für deutsche Bürger wird verständlicher und einfacher vorbereitet, damit der Ablauf deutlich greifbarer wird und offene Fragen nicht erst in der heißen Phase auftauchen.",
    },
    {
      title: "Dokumente sauber vorbereiten",
      text: "Hoher Papieraufwand, Einkommensnachweise und Lohnabrechnungen werden sauber in den Ablauf eingebunden, während unnötige Beglaubigungen und Apostillen durch diese Zusammenarbeit vielfach wegfallen.",
    },
    {
      title: "Mit dem Kaufprozess verzahnen",
      text: "Bank, Rechtsanwälte, Notariat und Immobilienkauf werden nicht getrennt gedacht, sondern strukturiert zusammengeführt.",
    },
  ],
  processEyebrow: "Ablauf",
  processTitle: "So wird das Bankthema für deutsche Käufer deutlich planbarer.",
  processDescription:
    "Statt unsicher zu improvisieren, wird die Finanzierung in drei klaren Schritten vorbereitet und mit dem restlichen Ablauf verbunden.",
  processItems: [
    {
      title: "Situation und Wunsch klären",
      text: "Wir besprechen, ob es um Kontoeröffnung, Hypothek, Finanzierung aus Deutschland oder eine Kombination mehrerer Schritte geht.",
    },
    {
      title: "Passenden Kontakt herstellen",
      text: "Danach wird der direkte deutschsprachige Kontakt in Málaga hergestellt, damit offene Fragen früh und verständlich geklärt werden können.",
    },
    {
      title: "Unterlagen und Kaufprozess abstimmen",
      text: "Wenn es konkreter wird, helfen wir dabei, Bank, Rechtsanwälte und Immobilienprozess sauber aufeinander abzustimmen.",
    },
  ],
  note: {
    title: "Wichtiger Hinweis",
    text: "CDS-IMMO verkauft keine Bankprodukte, sondern erleichtert den Zugang zu einem deutschsprachigen Bankservice und hilft bei der strukturierten Abstimmung. Die finale Kreditentscheidung und Produktprüfung erfolgen selbstverständlich durch die Bank selbst.",
  },
  ctaTitle:
    "Wenn Konto oder Finanzierung der nächste Schritt ist, stellen wir gern den direkten deutschsprachigen Kontakt in Málaga her.",
  ctaText:
    "Über das Kontaktformular können Sie kurz angeben, ob es um Konto, Hypothek, Finanzierung aus Deutschland oder eine erste Orientierung geht. Danach lässt sich der Ablauf deutlich schneller sortieren.",
};

const krankenversicherungContent: ServicePageContent = {
  eyebrow: "Private Krankenversicherung",
  title:
    "Private Krankenversicherung in Spanien mit klarer Begleitung von der Angebotsanfrage bis zum Vertragsangebot.",
  description:
    "CDS-IMMO vermittelt eine der größten und günstigsten privaten Krankenversicherungen mit eigenen Krankenhäusern an der Costa del Sol. Wir holen die Angebote ein, helfen beim Ausfüllen des Antrags und übermitteln das Vertragsangebot an unsere Kunden.",
  highlights: [
    "Große und günstige private Krankenversicherung",
    "Eigene Krankenhäuser an der Costa del Sol",
    "Angebote, Antrag und Vertragsangebot",
  ],
  image: entranceBoardwalkImage,
  imageAlt:
    "Promenade zur Küste an der Costa del Sol für die Seite private Krankenversicherung",
  contactTopic: "Private Krankenversicherung",
  introLabel: "Worum es hier geht",
  introTitle:
    "Krankenversicherung soll beim Schritt nach Spanien nicht unklar bleiben, sondern konkret vorbereitet werden.",
  introText:
    "Gerade für Auswanderer, Käufer und Familien ist die private Krankenversicherung ein sensibles Thema. Deshalb wird hier nicht nur ein Kontakt vermittelt, sondern der Weg von der Angebotsanfrage bis zum Vertragsangebot aktiv begleitet.",
  benefits: [
    {
      title: "Starker Versicherer mit Klinikstruktur",
      text: "Die vermittelte private Krankenversicherung gehört zu den großen und günstigen Anbietern und verfügt über eigene Krankenhäuser an der Costa del Sol.",
    },
    {
      title: "Angebote werden eingeholt",
      text: "CDS-IMMO holt die passenden Angebote ein, damit Kunden nicht selbst erst nach Anbietern, Tarifen und Zuständigkeiten suchen müssen.",
    },
    {
      title: "Antrag und Vertragsangebot begleitet",
      text: "Wir helfen beim Ausfüllen des Antrags und übermitteln anschließend das Vertragsangebot strukturiert an unsere Kunden weiter.",
    },
  ],
  includedEyebrow: "Leistungsrahmen",
  includedTitle:
    "Diese Begleitung verbindet Versicherungsanfrage, Antrag und nächste Schritte in einer klaren Reihenfolge.",
  includedDescription:
    "Die Seite soll nicht allgemein über Krankenversicherung sprechen, sondern genau zeigen, wie CDS-IMMO in diesem Bereich tatsächlich unterstützt.",
  includedItems: [
    {
      title: "Angebote einholen",
      text: "Auf Basis Ihrer Situation werden die passenden Angebote einer großen privaten Krankenversicherung angefordert.",
    },
    {
      title: "Antrag gemeinsam vorbereiten",
      text: "Wir helfen beim Ausfüllen des Antrags, damit Rückfragen, Lücken oder Missverständnisse gar nicht erst entstehen.",
    },
    {
      title: "Eigene Krankenhäuser an der Costa del Sol",
      text: "Die vermittelte Lösung ist nicht nur ein Tarif auf dem Papier, sondern mit einer starken medizinischen Infrastruktur vor Ort verbunden.",
    },
    {
      title: "Vertragsangebot übermitteln",
      text: "Sobald das Angebot vorliegt, wird es strukturiert an unsere Kunden weitergegeben, damit die Entscheidung auf klarer Grundlage getroffen werden kann.",
    },
  ],
  processEyebrow: "Ablauf",
  processTitle: "So wird aus einem offenen Thema ein konkreter nächster Schritt.",
  processDescription:
    "Gerade bei sensiblen Versicherungsthemen hilft ein klarer Ablauf enorm. So bleibt die Orientierung erhalten, ohne dass alles auf einmal erledigt werden muss.",
  processItems: [
    {
      title: "Situation schildern",
      text: "Sie geben an, ob es um Auswanderung, längeren Aufenthalt, Familie oder einen zweiten Wohnsitz in Spanien geht.",
    },
    {
      title: "Angebote und Antrag vorbereiten",
      text: "Wir holen die passenden Angebote ein und helfen anschließend beim sauberen Ausfüllen des Antrags.",
    },
    {
      title: "Vertragsangebot erhalten",
      text: "Das Vertragsangebot wird strukturiert weitergegeben, damit die nächsten Schritte in Ruhe geprüft und abgestimmt werden können.",
    },
  ],
  note: {
    title: "Wichtiger Hinweis",
    text: "Die finale Risikoprüfung und Annahme erfolgen selbstverständlich durch den Versicherer selbst. CDS-IMMO begleitet die Anfrage, den Antrag und die Weiterleitung des Vertragsangebots.",
  },
  ctaTitle:
    "Wenn private Krankenversicherung in Spanien für Sie ein offenes Thema ist, starten wir mit einer klaren und praktischen Einordnung.",
  ctaText:
    "Schildern Sie im Kontaktformular kurz Ihre Situation. Danach holen wir die passenden Angebote ein und begleiten den nächsten Schritt sauber weiter.",
};

const umzugContent: ServicePageContent = {
  eyebrow: "Umzug",
  title:
    "Umzugsservice zwischen Deutschland und Spanien mit klarer Planung statt Einzelchaos.",
  description:
    "Der Wechsel zwischen Deutschland und Spanien soll nicht in unübersichtlichen Einzelthemen enden. CDS-IMMO hilft dabei, den Umzug nachvollziehbar vorzubereiten und mit Immobilie, Unterlagen und Ankommen vor Ort zu verbinden.",
  highlights: [
    "DE–ES–DE",
    "Strukturierte Planung",
    "Mit Immobilie und Ankommen verknüpft",
  ],
  image: andalusianCityImage,
  imageAlt:
    "Andalusische Straßenszene als Hintergrund für den Umzugsservice zwischen Deutschland und Spanien",
  contactTopic: "Umzugsservice DE–ES–DE",
  introLabel: "Worum es hier geht",
  introTitle:
    "Ein Umzug braucht nicht nur Transport, sondern Übersicht über den gesamten Wechsel nach Spanien.",
  introText:
    "Gerade wenn Immobilie, Schlüsselübergabe, Unterlagen und neue Routinen zusammenkommen, hilft ein sauberer Ablaufplan mehr als spontane Einzelentscheidungen.",
  benefits: [
    {
      title: "Früh planen",
      text: "Ein geordneter Umzug beginnt lange vor dem eigentlichen Transport und spart später Zeit, Druck und unnötige Umwege.",
    },
    {
      title: "Mitdenken statt nacharbeiten",
      text: "Wichtige Übergänge zwischen Immobilie, Dokumenten, Ankunft und Alltag werden von Anfang an mitgedacht.",
    },
    {
      title: "Ruhiger ankommen",
      text: "Die Bewegung zwischen Deutschland und Spanien wird deutlich übersichtlicher, wenn die Struktur vorher steht.",
    },
  ],
  includedEyebrow: "Wobei unterstützt wird",
  includedTitle:
    "Der Umzugsservice verbindet Logistik, Zeitplan und den tatsächlichen Neustart in Spanien.",
  includedDescription:
    "Die genaue Ausgestaltung hängt natürlich von Umfang, Wohnort und Zeitrahmen ab. Ziel ist ein Ablauf, der nicht isoliert neben allen anderen Themen herläuft.",
  includedItems: [
    {
      title: "Vorabplanung",
      text: "Zeitrahmen, Umfang und die wichtigsten Übergänge werden vor dem eigentlichen Umzug nachvollziehbar geordnet.",
    },
    {
      title: "Koordination mit weiteren Schritten",
      text: "Wenn Immobilie, Dokumente, Schlüsselübergabe oder erste Abläufe vor Ort dazugehören, werden sie gleich mitgedacht.",
    },
    {
      title: "Abläufe bündeln",
      text: "So entsteht kein Bruch zwischen Immobilienprozess, Umzug und den organisatorischen Schritten nach der Ankunft.",
    },
    {
      title: "Ankommen erleichtern",
      text: "Ziel ist nicht nur der Transport, sondern ein ruhigerer Start in Spanien oder bei Bedarf auch die geordnete Rückkehr nach Deutschland.",
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
    title: "Individuell planbar",
    text: "Ob kompletter Umzug, Teilumzug oder ergänzende Transporte: Der Umfang wird passend zu Ihrem Zeitplan und zum übrigen Spanien-Prozess abgestimmt.",
  },
  ctaTitle:
    "Wenn der Schritt nach Spanien konkreter wird, sollte auch der Umzug früh mitgedacht werden.",
  ctaText:
    "Über das Kontaktformular können Sie kurz schildern, ob es um DE–ES, ES–DE oder einen kombinierten Ablauf mit Immobilie und Dokumenten geht.",
};

const dokumentenContent: ServicePageContent = {
  eyebrow: "Dokumenten- & Objektservice",
  title:
    "Unterlagen, Abstimmungen und Objektservice verständlich zusammenführen.",
  description:
    "Viele Prozesse rund um Kauf, Verkauf, Vermietung und das spätere Ankommen hängen an Dokumenten, Nachweisen und organisatorischen Schritten. CDS-IMMO hilft dabei, diese Punkte übersichtlich zu bündeln.",
  highlights: [
    "Unterlagen rund um Kauf und Verkauf",
    "Abstimmungen mit Partnern",
    "Objektservice auf Wunsch",
  ],
  image: benalmadenaVillageImage,
  imageAlt:
    "Weißes Küstendorf an der Costa del Sol für Dokumenten- und Objektservice",
  contactTopic: "Dokumenten- & Objektservice",
  introLabel: "Worum es hier geht",
  introTitle:
    "Viele Vorhaben scheitern nicht an der Immobilie, sondern an fehlender Übersicht über Unterlagen und Zuständigkeiten.",
  introText:
    "Ob Kauf, Verkauf, Vermietung oder die Betreuung eines Objekts: Wenn Dokumente, Ansprechpartner und nächste Schritte sauber geordnet sind, wird der gesamte Prozess deutlich entspannter.",
  benefits: [
    {
      title: "Übersicht schaffen",
      text: "Dokumente, Zuständigkeiten und offene Punkte werden so geordnet, dass jederzeit klar bleibt, was als Nächstes wichtig ist.",
    },
    {
      title: "Abstimmungen bündeln",
      text: "Kontakte mit Anwälten, Banken, Dienstleistern oder weiteren Beteiligten greifen besser ineinander, wenn Unterlagen klar sortiert sind.",
    },
    {
      title: "Objekt im Blick behalten",
      text: "Auf Wunsch wird auch die spätere Betreuung, Pflege oder organisatorische Begleitung der Immobilie mitgedacht.",
    },
  ],
  includedEyebrow: "Wobei unterstützt wird",
  includedTitle:
    "Diese Leistung schafft Ordnung in Themen, die für Eigentümer und Käufer schnell unübersichtlich werden.",
  includedDescription:
    "Gerade wenn mehrere Beteiligte, Unterlagen oder organisatorische Schritte zusammenkommen, ist eine saubere Koordination oft entscheidend.",
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
      title: "Objektservice mitdenken",
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
      title: "Unterlagen und Rollen ordnen",
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
  ctaTitle:
    "Wenn Unterlagen, Abläufe oder Objektbetreuung unübersichtlich werden, helfen klare Strukturen am meisten.",
  ctaText:
    "Schildern Sie im Kontaktformular kurz, worum es geht. Daraus lässt sich der passende nächste Schritt wesentlich leichter ableiten.",
};

export const servicePageContent: Record<string, ServicePageContent> = {
  immobilienvermittlung: immobilienvermittlungContent,
  "anwaelte-steuerberater": anwaelteContent,
  "steuern-kosten-nie": steuernContent,
  "bankkonto-finanzierung": bankContent,
  "private-krankenversicherung": krankenversicherungContent,
  "umzug-service": umzugContent,
  "dokumenten-objektservice": dokumentenContent,
};
