import { CookieNotice } from "@/components/cookie-notice";
import { FloatingWhatsappButton } from "@/components/floating-whatsapp";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import type { Metadata } from "next";
import { Montserrat, Quicksand } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const quicksand = Quicksand({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.cds-immo.de"),
  title: {
    default: "Costa del Sol Immobilien | Leben, Wohnen und Arbeiten in Andalusien",
    template: "%s | Costa del Sol Immobilien",
  },
  description:
    "Costa del Sol Immobilien: Häuser, Wohnungen, Neubauprojekte und deutschsprachige Begleitung an der Costa del Sol – jetzt auch mit ausgewählten Immobilien an der Costa Blanca.",
  icons: {
    icon: "/icon.png",
    shortcut: "/icon.png",
    apple: "/apple-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="de"
      className={`${montserrat.variable} ${quicksand.variable} h-full scroll-smooth`}
    >
      <body className="min-h-full bg-[var(--background)] text-[var(--foreground)] antialiased">
        <SiteHeader />
        <div className="min-h-screen">{children}</div>
        <SiteFooter />
        <FloatingWhatsappButton />
        <CookieNotice />
      </body>
    </html>
  );
}
