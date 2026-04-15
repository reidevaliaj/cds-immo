"use client";

import Link from "next/link";
import { useState, useSyncExternalStore } from "react";

const STORAGE_KEY = "cds-immo-cookie-consent";

export function CookieNotice() {
  const visible = useSyncExternalStore(
    () => () => undefined,
    () => window.localStorage.getItem(STORAGE_KEY) !== "accepted",
    () => false,
  );
  const [, forceRender] = useState(0);

  const accept = () => {
    window.localStorage.setItem(STORAGE_KEY, "accepted");
    forceRender((value) => value + 1);
  };

  if (!visible) {
    return null;
  }

  return (
    <div className="fixed inset-x-0 bottom-0 z-[70] px-4 pb-4 pt-2 sm:px-6">
      <div className="mx-auto flex max-w-[980px] flex-col gap-4 rounded-[1.75rem] border border-[#183f55]/12 bg-[rgba(255,255,255,0.94)] p-5 shadow-[0_24px_60px_rgba(15,44,62,0.18)] backdrop-blur-xl sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#b68b4c]">
            Cookie-Hinweis
          </p>
          <p className="mt-2 text-sm leading-7 text-[#45606f] sm:text-base">
            Diese Website nutzt technisch notwendige Cookies und lokale
            Speicherung für Funktion, Darstellung und Formularabläufe. Weitere
            Informationen finden Sie in der{" "}
            <Link
              href="/rechtliches#datenschutz"
              className="font-semibold text-[#1c5673] underline decoration-[#c59a5a]/50 underline-offset-4"
            >
              Datenschutzerklärung
            </Link>
            .
          </p>
        </div>

        <button
          type="button"
          onClick={accept}
          className="inline-flex items-center justify-center rounded-full bg-[#d7b172] px-5 py-3 text-sm font-semibold text-[#08131b] shadow-[0_18px_36px_rgba(184,135,72,0.22)] transition hover:translate-y-[-1px] hover:bg-[#dfba7b]"
        >
          Akzeptieren
        </button>
      </div>
    </div>
  );
}
