# iBellori Marketing Site

The public-facing website for iBellori — homepage, Privacy Policy, Terms of Use, and
Contact. This repo is intentionally scoped to marketing content only. There is no backend,
OAuth, database, or billing code here — that belongs in the separate iBellori product repo.

## Stack

- React + TypeScript, built with Vite
- Client-side routing via `react-router-dom`
- Plain CSS with a small design-token system (`src/styles/global.css`) — no UI framework
- Static output only — deploys as a static site, no server required

## Pages

- `/` — Homepage
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use
- `/contact` — Contact

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

Outputs static files to `dist/`.

## Deploying to Cloudflare Pages

1. Push this repo to GitHub.
2. In Cloudflare, create a Pages project connected to this repo.
3. Build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Add your custom domain (`ibellori.com` and `www.ibellori.com`) in the Pages project's
   custom domain settings once the domain's DNS is on Cloudflare.

The `public/_redirects` file (`/* /index.html 200`) is required so that client-side routes
like `/privacy` and `/terms` resolve correctly on a static host — don't remove it.

## Before this goes live

- Replace the placeholder contact email (`hello@ibellori.com`) in `Footer.tsx`, `Contact.tsx`,
  `Privacy.tsx`, and `Terms.tsx` with a real inbox you control.
- Have the Privacy Policy and Terms of Use reviewed by an attorney before relying on them —
  they're a solid first draft, not legal advice.
- Update `src/pages/Privacy.tsx` if/when the product starts storing additional categories of
  data (e.g. once the dashboard backend exists).

## Scope boundary

This repo should stay limited to: homepage, legal pages, contact, and general marketing
content as iBellori grows (case studies, product pages, blog, etc.). Application code —
OAuth flows, the Etsy/Pinterest integrations, database, dashboard UI, billing — belongs in
the separate iBellori product repository.
