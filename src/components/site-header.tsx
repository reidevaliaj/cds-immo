"use client";

import logoImage from "@/assets/logo.png";
import logoWhiteImage from "@/assets/logo-white.png";
import { navigation } from "@/data/site-content";
import { cn } from "@/lib/utils";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

function isItemActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname.startsWith(href);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openGroup, setOpenGroup] = useState<string | null>(null);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setOpenGroup(null);
  };

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const transparent = pathname === "/" && !scrolled && !mobileOpen;
  const desktopNavClasses = transparent
    ? "rounded-full border border-white/45 bg-white/38 py-1 pl-3 pr-2 backdrop-blur-md shadow-[0_18px_40px_rgba(88,153,187,0.10)]"
    : "";
  const desktopLinkClasses = transparent
    ? "text-[#254a61] hover:bg-white/72 hover:text-[#17384d]"
    : "text-white/76 hover:bg-white/8 hover:text-white";
  const desktopActiveLinkClasses = transparent
    ? "bg-white/82 text-[#17384d] shadow-[0_12px_26px_rgba(88,153,187,0.12)]"
    : "bg-white/10 text-white";
  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-500",
        transparent
          ? "bg-transparent"
          : "bg-[rgba(32,86,113,0.72)] shadow-[0_18px_60px_rgba(15,44,62,0.22)] backdrop-blur-xl",
      )}
    >
      <div className="mx-auto flex max-w-[1280px] items-center justify-between gap-4 px-4 py-4 lg:px-10">
        <Link href="/" className="shrink-0" onClick={closeMobileMenu}>
          <span className="relative inline-flex h-11 w-[168px] sm:h-12 sm:w-[182px] lg:h-14 lg:w-[214px]">
            <Image
              src={logoImage}
              alt="Costa del Sol Immobilien"
              fill
              sizes="214px"
              className={cn(
                "object-contain object-left transition-opacity duration-300 drop-shadow-[0_10px_18px_rgba(22,64,87,0.12)]",
                transparent ? "opacity-100" : "opacity-0",
              )}
              priority
            />
            <Image
              src={logoWhiteImage}
              alt="Costa del Sol Immobilien"
              fill
              sizes="214px"
              className={cn(
                "object-contain object-left transition-opacity duration-300 drop-shadow-[0_10px_18px_rgba(8,24,35,0.18)]",
                transparent ? "opacity-0" : "opacity-100",
              )}
              priority
            />
          </span>
        </Link>

        <nav className={cn("hidden items-center gap-1.5 lg:flex", desktopNavClasses)}>
          {navigation.map((item) => {
            const active = isItemActive(pathname, item.href);

            return (
              <div key={item.label} className="group relative">
                <Link
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={cn(
                    "flex items-center gap-2 rounded-full px-4 py-3 text-sm font-medium transition",
                    active ? desktopActiveLinkClasses : desktopLinkClasses,
                  )}
                >
                  {item.label}
                  {item.children ? <ChevronDown className="h-4 w-4" /> : null}
                </Link>

                {item.children ? (
                  <div className="pointer-events-none absolute left-1/2 top-full z-30 w-[19rem] -translate-x-1/2 translate-y-2 pt-3 opacity-0 transition duration-300 group-hover:pointer-events-auto group-hover:translate-y-0 group-hover:opacity-100">
                    <div className="rounded-[1.55rem] border border-white/14 bg-[rgba(24,63,85,0.92)] p-3 shadow-[0_25px_80px_rgba(7,24,35,0.32)] backdrop-blur-2xl">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="block rounded-[1.15rem] px-4 py-3.5 transition hover:bg-white/10"
                        >
                          <span className="block text-sm font-semibold text-[#f7efe4]">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : null}
              </div>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/kontakt"
            onClick={closeMobileMenu}
            className="hidden rounded-full bg-[#d7b172] px-5 py-3 text-sm font-semibold text-[#08131b] shadow-[0_14px_30px_rgba(184,135,72,0.28)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b] lg:inline-flex"
          >
            Beratung anfragen
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen((current) => !current)}
            className={cn(
              "inline-flex h-12 w-12 items-center justify-center rounded-full lg:hidden",
              transparent
                ? "border border-white/45 bg-white/54 text-[#21485e] backdrop-blur-md"
                : "border border-white/10 bg-white/8 text-white",
            )}
            aria-label={mobileOpen ? "Menü schließen" : "Menü öffnen"}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen ? (
        <div className="border-t border-white/8 bg-[rgba(7,19,27,0.96)] px-4 pb-5 pt-2 shadow-[0_28px_80px_rgba(0,0,0,0.4)] backdrop-blur-xl lg:hidden">
          <div className="mx-auto max-w-[1280px] space-y-2">
            {navigation.map((item) => {
              const expanded = openGroup === item.label;

              return (
                <div
                  key={item.label}
                  className="rounded-[1.6rem] border border-white/8 bg-white/5 px-4 py-2"
                >
                  <div className="flex items-center gap-3">
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="flex-1 py-3 text-base font-medium text-[#f7efe4]"
                    >
                      {item.label}
                    </Link>

                    {item.children ? (
                      <button
                        type="button"
                        onClick={() =>
                          setOpenGroup((current) =>
                            current === item.label ? null : item.label,
                          )
                        }
                        className="inline-flex h-10 w-10 items-center justify-center rounded-full text-white/72"
                        aria-label={`${item.label} Unterpunkte anzeigen`}
                      >
                        <ChevronDown
                          className={cn(
                            "h-5 w-5 transition-transform",
                            expanded && "rotate-180",
                          )}
                        />
                      </button>
                    ) : null}
                  </div>

                  {item.children && expanded ? (
                    <div className="space-y-1 pb-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.label}
                          href={child.href}
                          onClick={closeMobileMenu}
                          className="block rounded-[1.2rem] bg-white/4 px-4 py-3 text-sm text-white/72 transition hover:bg-white/8 hover:text-white"
                        >
                          <span className="block font-semibold text-[#f7efe4]">
                            {child.label}
                          </span>
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              );
            })}

            <Link
              href="/kontakt"
              onClick={closeMobileMenu}
              className="mt-3 inline-flex w-full items-center justify-center rounded-full bg-[#d7b172] px-5 py-3 text-sm font-semibold text-[#08131b] shadow-[0_14px_30px_rgba(184,135,72,0.2)] transition hover:bg-[#dfba7b]"
            >
              Beratung anfragen
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
