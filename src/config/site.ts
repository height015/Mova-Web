export type ServiceAvailability = "enabled" | "coming-soon" | "disabled";

export type PublicMarket = {
  code: string;
  country: string;
  currency: string;
  status: "launching" | "coming-soon" | "disabled";
  services: { ride: ServiceAvailability; drive: ServiceAvailability; deliver: ServiceAvailability };
};

const configuredUrl = process.env.NEXT_PUBLIC_SITE_URL;
const configuredAppleUrl = process.env.NEXT_PUBLIC_MOVA_IOS_APP_URL || null;
const configuredGoogleUrl = process.env.NEXT_PUBLIC_MOVA_ANDROID_APP_URL || null;

export const siteConfig = {
  name: "Mova",
  url: configuredUrl || "https://mova.ng",
  description: "Choose how you move with flexible ride pricing, driver opportunities, and delivery—all in one Mova app.",
  nav: [
    { label: "Ride", href: "/ride" },
    { label: "Drive", href: "/drive" },
    { label: "Deliver", href: "/deliver" },
    { label: "Safety", href: "/safety" },
    { label: "Cities", href: "/cities" },
    { label: "About", href: "/about" },
    { label: "Help", href: "/help" },
  ],
  actions: { signIn: "/signin", getMova: "/#get-mova", drive: "/drive", deliver: "/deliver", help: "/help" },
  markets: [{ code: "NG", country: "Nigeria", currency: "NGN", status: "launching", services: { ride: "enabled", drive: "enabled", deliver: "enabled" } }] satisfies PublicMarket[],
  defaultMarket: "NG",
  appStores: { apple: configuredAppleUrl, google: configuredGoogleUrl },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];

export function getAppAcquisitionHref() {
  return siteConfig.appStores.apple || siteConfig.appStores.google || siteConfig.actions.getMova;
}

export function getMarket(code = siteConfig.defaultMarket) {
  return siteConfig.markets.find((market) => market.code === code) || siteConfig.markets[0];
}
