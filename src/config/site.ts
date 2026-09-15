export const siteConfig = {
  name: "Mova",
  url: "https://mova.ng",
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
  actions: { signIn: "/signin", getMova: "/#get-mova", drive: "/drive" },
  markets: [{ country: "Nigeria", status: "Launching first" }],
  appStores: { apple: null, google: null } as { apple: string | null; google: string | null },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
