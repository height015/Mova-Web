# Mova Website

Phase 1 public marketing site for Mova, built with Next.js, React, TypeScript, and Tailwind CSS.

```bash
npm install
npm run dev
```

The app is intentionally backend-independent. Store links and operational market data are configured in `src/config/site.ts`.

## Public foundation

- Public routes are rendered from `src/config/public-content.ts` and `src/app/[slug]/page.tsx`.
- Market/service states and app-store destinations live in `src/config/site.ts`.
- Set `NEXT_PUBLIC_MOVA_IOS_APP_URL` and `NEXT_PUBLIC_MOVA_ANDROID_APP_URL` only when approved store destinations exist. Missing values keep Get Mova in the truthful coming-soon flow.
- The public website is intentionally content-driven and does not require the operational Mova API for normal marketing-site operation.
- `NEXT_PUBLIC_ENVIRONMENT=staging` makes robots disallow indexing. `NEXT_PUBLIC_SITE_URL` controls canonical URLs, sitemap, and robots output.
- Privacy and Terms remain noindex until approved legal content is supplied.

The public website does not implement web ride booking, authentication, payments, provider integrations, or Mova Admin workflows. Those remain separate product/backend boundaries. A future CMS or public API may be introduced only for an approved need such as real-time market publishing or support submission.
