export interface SiteConfig {
  name: string;
  shortName: string;
  logoText: string;
  tagline: string;
  description: string;
  url: string;
  supportEmail: string;
  gameUrl?: string;
  heroVideoId?: string;
  social?: {
    discord?: string;
    youtube?: string;
    twitter?: string;
    tiktok?: string;
  };
  locales: readonly string[];
  defaultLocale: string;
}

export const siteConfig: SiteConfig = {
  name: "Shape of Dreams Wiki",
  shortName: "Shape of Dreams",
  logoText: "S",
  tagline: "Complete Guides, Builds, Travelers & Tier Lists",
  description: "Shape of Dreams is a fast-paced action roguelite combining hack-and-slash combat, MOBA-style teamwork, flexible builds and up to 4-player co-op across ever-changing dream worlds.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://shapeofdreams-wiki.top",
  supportEmail: "support@shapeofdreams-wiki.top",
  gameUrl: "https://store.steampowered.com/app/2444750/Shape_of_Dreams/",
  heroVideoId: "sUfcplBV6WU", // Shape of Dreams - Official Launch Trailer
  social: {
    discord: "https://discord.gg/PEsbaxuSzS",
    youtube: "https://www.youtube.com/watch?v=sUfcplBV6WU",
  },
  locales: ["en", "ko", "ru", "ja"],
  defaultLocale: "en",
};
