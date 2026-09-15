import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

const routes = ["", "ride", "drive", "deliver", "safety", "cities", "about", "help"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((route) => ({ url: `${siteConfig.url}/${route}`, lastModified: new Date(), changeFrequency: route === "" ? "weekly" : "monthly", priority: route === "" ? 1 : .7 }));
}