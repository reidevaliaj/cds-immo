"use client";

import {
  legalLinks,
  navigation,
  services,
  siteSettings,
} from "@/data/site-content";
import { Phone } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function SiteFooter() {
  const pathname = usePathname();

  if (pathname === "/services/immobilienvermittlung") {
    return null;
  }

  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#183F55] text-[#f6fbfd]">
      <div className="absolute inset-0 bg-[linear-gradient(180deg,#1d4962_0%,#183F55_44%,#143649_100%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_18%,rgba(255,255,255,0.08),transparent_18%),radial-gradient(circle_at_84%_24%,rgba(121,179,208,0.08),transparent_24%)]" />

      <div className="relative mx-auto max-w-[1280px] px-6 py-16 lg:px-10 lg:py-20">
        <div className="grid gap-14 lg:grid-cols-[1.2fr_0.8fr_0.9fr_0.8fr]">
          <div className="max-w-md">
            <span className="inline-flex rounded-full border border-white/16 bg-white/10 px-4 py-1 text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[#f2d5a3]">
              Kontakt
            </span>
            <h2 className="mt-6 text-[2.2rem] leading-[0.96] font-semibold tracking-[-0.04em] text-balance">
              Sie planen Kauf, Auswanderung oder den nächsten Schritt Richtung Spanien?
            </h2>
            <p className="mt-5 text-base leading-8 text-[#d7e2e8] sm:text-lg">
              CDS-IMMO begleitet deutsche Interessenten an der Costa del Sol
              nicht nur bei Immobilien, sondern auch bei Recht, Bank,
              Versicherung, Umzug und organisatorischen Schritten.
            </p>

            <div className="mt-8 flex flex-wrap gap-3 text-sm text-[#edf3f6]">
              <Link
                className="rounded-full bg-[#d7b172] px-5 py-3 font-semibold text-[#08131b] shadow-[0_16px_34px_rgba(184,135,72,0.22)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
                href="/kontakt"
              >
                Zum Kontaktformular
              </Link>
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
              {services.map((service) => (
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
              Rechtliches
            </h3>
            <div className="mt-6 space-y-4 text-[#edf3f6]">
              {legalLinks.map((item) => (
                <p key={item.href}>
                  <Link
                    href={item.href}
                    className="transition hover:text-[#f6c987]"
                  >
                    {item.label}
                  </Link>
                </p>
              ))}
              <p>{siteSettings.email}</p>
              <div className="space-y-2">
                <p className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">
                    🇩🇪
                  </span>
                  <Phone className="h-4 w-4 text-[#f2d5a3]" />
                  <span>{siteSettings.phone}</span>
                </p>
                <p className="flex items-center gap-2">
                  <span className="text-base" aria-hidden="true">
                    🇪🇸
                  </span>
                  <Phone className="h-4 w-4 text-[#f2d5a3]" />
                  <span>{siteSettings.phoneSecondary}</span>
                </p>
              </div>
              <p>{siteSettings.location}</p>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-white/12 pt-6 text-sm text-[#dcecf3]">
          <p>
            {siteSettings.companyName} · Deutscher Ansprechpartner für
            Immobilien, Auswandern und Leistungen an der Costa del Sol.
          </p>
        </div>
      </div>
    </footer>
  );
}
