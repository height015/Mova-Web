import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { siteConfig } from "@/config/site";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-inter", display: "swap" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-jakarta", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: "Mova — Move your way", template: "%s | Mova" },
  description: siteConfig.description,
  alternates: { canonical: "/" },
  openGraph: { title: "Mova — Move your way", description: siteConfig.description, url: "/", siteName: "Mova", locale: "en_NG", type: "website" },
  twitter: { card: "summary_large_image", title: "Mova — Move your way", description: siteConfig.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = { themeColor: "#071b2b", colorScheme: "light" };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body className={`${inter.variable} ${jakarta.variable}`}><a className="skip-link" href="#main-content">Skip to content</a><Header />{children}<Footer /></body></html>;
}
