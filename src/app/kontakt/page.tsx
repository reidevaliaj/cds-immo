import malagaCivicImage from "@/assets/malaga-civic.jpg";
import { ContactForm } from "@/components/contact-form";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { WaveDivider } from "@/components/wave-divider";
import { servicePages, siteSettings } from "@/data/site-content";
import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

type ContactPageProps = {
  searchParams: Promise<{
    thema?: string;
  }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { thema } = await searchParams;

  return (
    <main className="overflow-hidden">
      <section className="relative isolate min-h-[72svh] overflow-hidden bg-[#eff7fb] text-[#14384e]">
        <Image
          src={malagaCivicImage}
          alt="Málaga-Stadtansicht für die Kontaktseite"
          fill
          priority
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(10,26,37,0.84)_0%,rgba(10,26,37,0.72)_24%,rgba(10,26,37,0.46)_48%,rgba(10,26,37,0.14)_74%,rgba(10,26,37,0.04)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(14,42,57,0.06)_0%,rgba(14,42,57,0.14)_44%,rgba(239,247,251,0.22)_80%,#eff7fb_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-[72svh] w-full max-w-[1280px] items-center px-6 pb-20 pt-34 lg:px-10 lg:pb-24 lg:pt-40">
          <div className="max-w-3xl">
            <Reveal>
              <span className="inline-flex rounded-full border border-white/18 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3] backdrop-blur-sm">
                Kontakt
              </span>
            </Reveal>

            <Reveal delay={0.05}>
              <h1 className="mt-6 text-[3rem] leading-[0.94] font-semibold tracking-[-0.045em] text-balance text-white sm:text-[3.55rem] lg:text-[4.5rem]">
                Kontakt für Immobilien, Recht, Bank und den Weg nach Spanien.
              </h1>
            </Reveal>

            <Reveal delay={0.1} className="max-w-2xl">
              <p className="mt-6 text-base leading-8 text-[#e7f1f5] sm:text-xl">
                Schildern Sie kurz, worum es geht. Ob Immobilie, Anwälte, Bank,
                Versicherung, Umzug oder Dokumente: wir helfen, den passenden
                nächsten Schritt sauber einzugrenzen.
              </p>
            </Reveal>
          </div>
        </div>

        <div className="absolute inset-x-0 bottom-0">
          <WaveDivider
            fill="rgba(255,255,255,0.18)"
            midFill="rgba(255,255,255,0.26)"
            topFill="rgba(255,255,255,0.38)"
            className="h-28 md:h-32"
          />
        </div>
      </section>

      <section className="bg-[#f8fcfe] py-24 sm:py-28">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-6 lg:grid-cols-[0.88fr_1.12fr] lg:px-10">
          <div>
            <Reveal>
              <SectionHeading
                eyebrow="Direkter Kontakt"
                title="Sie können den Einstieg so einfach halten, wie Sie möchten."
                description="Eine kurze Nachricht reicht aus. Danach lässt sich viel schneller einschätzen, welche Leistung zuerst relevant ist und welcher Kontakt eingebunden werden sollte."
                wide
              />
            </Reveal>

            <div className="mt-10 space-y-4">
              {[
                {
                  icon: Phone,
                  title: "Telefon",
                  text: siteSettings.phone,
                  href: "tel:+4917621843103",
                },
                {
                  icon: Mail,
                  title: "E-Mail",
                  text: siteSettings.email,
                  href: `mailto:${siteSettings.email}`,
                },
                {
                  icon: MessageCircle,
                  title: "WhatsApp",
                  text: "Direkt und unkompliziert schreiben",
                  href: siteSettings.whatsapp,
                },
                {
                  icon: MapPin,
                  title: "Standort",
                  text: `${siteSettings.addressLines.join(", ")} · ${siteSettings.location}`,
                  href: "/rechtliches#impressum",
                },
              ].map((item) => (
                <Reveal key={item.title}>
                  <Link
                    href={item.href}
                    target={item.href.startsWith("http") ? "_blank" : undefined}
                    rel={item.href.startsWith("http") ? "noreferrer" : undefined}
                    className="flex items-start gap-4 rounded-[1.75rem] border border-[#0d2230]/8 bg-white p-5 shadow-[0_18px_50px_rgba(17,44,60,0.06)] transition hover:translate-y-[-2px]"
                  >
                    <span className="inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-[#eff7fb] text-[#1f5a76]">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-sm font-semibold uppercase tracking-[0.22em] text-[#b68b4c]">
                        {item.title}
                      </span>
                      <span className="mt-2 block text-base leading-7 text-[#45606f]">
                        {item.text}
                      </span>
                    </span>
                  </Link>
                </Reveal>
              ))}
            </div>

            <Reveal>
              <div className="mt-8 rounded-[2rem] bg-[#143649] p-8 text-[#f6efe5] shadow-[0_28px_80px_rgba(8,24,35,0.14)]">
                <span className="inline-flex rounded-full border border-white/14 bg-white/8 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
                  Themen
                </span>
                <div className="mt-5 flex flex-wrap gap-3">
                  <span className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-[#e6f1f6]">
                    Immobilien
                  </span>
                  {servicePages.map((page) => (
                    <span
                      key={page.slug}
                      className="rounded-full border border-white/14 bg-white/8 px-4 py-2 text-sm text-[#e6f1f6]"
                    >
                      {page.title}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>

          <Reveal delay={0.05}>
            <ContactForm initialTopic={thema} />
          </Reveal>
        </div>
      </section>
    </main>
  );
}
