import type { NextConfig } from "next";

const scriptSource = "'self' 'unsafe-inline' 'unsafe-eval'";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  images: { qualities: [75, 84] },
  async headers() {
    return [{ source: "/(.*)", headers: [
      { key: "Content-Security-Policy", value: `default-src 'self'; img-src 'self' data: blob:; font-src 'self'; style-src 'self' 'unsafe-inline'; script-src ${scriptSource}; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self'` },
      { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
      { key: "X-Content-Type-Options", value: "nosniff" },
      { key: "X-Frame-Options", value: "DENY" },
      { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
    ] }];
  },
};

export default nextConfig;
