# Sarau Luxury — editorial revamp

Next.js 15 / React 19 website for Sarau Luxury. Redesigned homepage, responsive navigation, shared footer and visual styling. Existing service, package, gallery, booking, contact, client and journal pages remain available.

## Local development

Use Node.js 22+. Run `npm ci`, copy `.env.example` to `.env.local`, and run `npm run dev`.

## Verification

Run `npm run build`, then `npx playwright install chromium` and `npm run test:e2e`. Tests start a local production server. They never submit real leads to external services.

## Deploy on Vercel

1. Import `ganoolmovie5th-cell/sarau-luxury-gpt`, branch `main`.
2. Select Next.js, root directory `.` and Node.js 22.
3. Set `NEXT_PUBLIC_SITE_URL` to the final public URL (no trailing slash). This controls canonical URLs and sitemap.
4. Configure Resend (`RESEND_API_KEY`, verified `RESEND_FROM_EMAIL`, `CONTACT_EMAIL`) and/or Fonnte (`FONNTE_TOKEN`, `WHATSAPP_ADMIN_NUMBER`) for inquiry notifications. Copy values securely from your existing deployment; no secrets are included in this repository.
5. Deploy. Verify delivery with a controlled inquiry after configuring credentials.

Event photos use the original Google-hosted assets and require continued public access. Brand details, package prices and statistics are inherited from the source project and should be confirmed by the business before publishing. Existing GTM ID and verification metadata are inherited; update these if this is a separate production property.

The original automated publishing and live-production testing workflows are replaced with build and local browser checks for this repository.
