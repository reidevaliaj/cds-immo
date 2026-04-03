import { navigation, services, siteSettings } from "@/data/site-content";
import Link from "next/link";

export function SiteFooter() {
  return (
    <footer
      id="kontakt"
      className="relative overflow-hidden border-t border-white/10 bg-[#183F55] text-[#f6fbfd]"
    >
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.7fr_0.8fr_0.8fr]">
          <div className="max-w-md">
            <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
              Kontakt
            </span>
            <h2 className="mt-6 text-[2.2rem] leading-[0.96] font-semibold tracking-[-0.04em] text-balance">
              Sie planen Kauf, Verkauf oder den Schritt nach Spanien?
            </h2>
            <p className="mt-5 text-base leading-8 text-[#d7e2e8] sm:text-lg">
              CDS-IMMO begleitet deutsche Interessenten an der Costa del Sol
              nicht nur bei Immobilien, sondern auch bei wichtigen Schritten
              rund um Ankommen, Netzwerk und Alltag in Andalusien.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#edf3f6]">
              <a
                className="rounded-full border border-white/16 bg-white/10 px-4 py-3 transition hover:border-white/28 hover:bg-white/14"
                href={`mailto:${siteSettings.email}`}
              >
                {siteSettings.email}
              </a>
              <a
                className="rounded-full border border-white/16 bg-white/10 px-4 py-3 transition hover:border-white/28 hover:bg-white/14"
                href={siteSettings.whatsapp}
                target="_blank"
                rel="noreferrer"
              >
                WhatsApp
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d5a3]">
              Navigation
            </h3>
            <ul className="mt-6 space-y-4 text-[#edf3f6]">
              {navigation.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#f6c987]"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
              <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d5a3]">
                Leistungen
              </h3>
              <ul className="mt-6 space-y-4 text-[#edf3f6]">
                {services.slice(0, 5).map((service) => (
                  <li key={service.id}>
                    <Link
                      href={service.href}
                      className="transition hover:text-[#f6c987]"
                    >
                      {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.24em] text-[#f2d5a3]">
              Standort
            </h3>
            <div className="mt-6 space-y-4 text-[#edf3f6]">
              <p>{siteSettings.location}</p>
              <p>{siteSettings.phone}</p>
              <p>Ihr deutscher Ansprechpartner an der Costa del Sol</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-6 text-sm text-[#dcecf3]">
          <p>
            {siteSettings.name} · Deutscher Ansprechpartner für Immobilien,
            Auswandern und Leistungen an der Costa del Sol.
          </p>
        </div>
      </div>
    </footer>
  );
}
