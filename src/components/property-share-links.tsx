import { siteSettings } from "@/data/site-content";
import {
  Globe,
  Mail,
  MessageCircle,
  Share2,
} from "lucide-react";

type PropertyShareLinksProps = {
  slug: string;
  title: string;
};

function buildShareUrl(slug: string) {
  return `${siteSettings.siteUrl}/immobilien/${slug}`;
}

export function PropertyShareLinks({
  slug,
  title,
}: PropertyShareLinksProps) {
  const url = buildShareUrl(slug);
  const encodedUrl = encodeURIComponent(url);
  const encodedTitle = encodeURIComponent(title);
  const shareText = encodeURIComponent(
    `${title} - Costa del Sol Immobilien`,
  );

  const shareLinks = [
    {
      label: "WhatsApp",
      href: `https://wa.me/?text=${shareText}%20${encodedUrl}`,
      icon: MessageCircle,
    },
    {
      label: "Facebook",
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
      icon: Share2,
    },
    {
      label: "X",
      href: `https://twitter.com/intent/tweet?text=${shareText}&url=${encodedUrl}`,
      icon: Share2,
    },
    {
      label: "LinkedIn",
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
      icon: Share2,
    },
    {
      label: "E-Mail",
      href: `mailto:?subject=${encodedTitle}&body=${shareText}%0A${encodedUrl}`,
      icon: Mail,
    },
  ];

  return (
    <div className="mt-8 border-t border-[#183f55]/10 pt-6">
      <p className="text-[0.76rem] font-semibold uppercase tracking-[0.18em] text-[#587080]">
        Immobilie teilen
      </p>
      <div className="mt-4 flex flex-wrap gap-3">
        {shareLinks.map((item) => {
          const Icon = item.icon;

          return (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full border border-[#183f55]/10 bg-[#f8fcfe] px-4 py-2.5 text-sm font-semibold text-[#183f55] transition hover:bg-[#eff7fb]"
            >
              <Icon className="h-4 w-4" />
              {item.label}
            </a>
          );
        })}
        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full border border-[#183f55]/10 bg-white px-4 py-2.5 text-sm font-semibold text-[#183f55] transition hover:bg-[#eff7fb]"
        >
          <Globe className="h-4 w-4" />
          Link öffnen
        </a>
      </div>
    </div>
  );
}
