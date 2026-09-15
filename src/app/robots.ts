import type { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";

export const dynamic = "force-dynamic";

export default function robots(): MetadataRoute.Robots {
  const staging = process.env.NEXT_PUBLIC_ENVIRONMENT === "staging";
  return { rules: { userAgent: "*", allow: staging ? undefined : "/", disallow: staging ? "/" : ["/legal/"] }, sitemap: `${siteConfig.url}/sitemap.xml` };
}