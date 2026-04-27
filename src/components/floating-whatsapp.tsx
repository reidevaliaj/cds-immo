"use client";

import { siteSettings } from "@/data/site-content";
import { MessageCircle } from "lucide-react";

export function FloatingWhatsappButton() {
  return (
    <a
      href={siteSettings.whatsapp}
      target="_blank"
      rel="noreferrer"
      aria-label="Per WhatsApp Kontakt aufnehmen"
      className="fixed bottom-24 right-4 z-[65] inline-flex items-center gap-2 rounded-full border border-[#d7b172]/28 bg-[rgba(16,40,55,0.9)] px-4 py-3 text-sm font-semibold text-[#f5f5f3] shadow-[0_18px_42px_rgba(12,28,38,0.22)] backdrop-blur-xl transition hover:translate-y-[-1px] hover:bg-[rgba(23,55,71,0.96)] sm:bottom-6 sm:right-6"
    >
      <MessageCircle className="h-4 w-4 text-[#d7b172]" />
      <span className="hidden sm:inline">WhatsApp</span>
    </a>
  );
}
