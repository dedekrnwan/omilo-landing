# Omilo Landing

Marketing landing page for Omilo, the open source AI staff platform for growing businesses, built with Astro 5 (SSR) and Tailwind v4.

- English at `/`
- Indonesian at `/id/`
- Waitlist via `/api/waitlist` (optional Slack webhook)

## Quick start

```sh
npm install
cp .env.example .env   # set SLACK_WEBHOOK_URL if you have one
npm run dev            # http://localhost:4321
```

## Commands

| Command           | Action                              |
|:------------------|:------------------------------------|
| `npm run dev`     | Dev server at `localhost:4321`      |
| `npm run build`   | Build to `./dist/`                  |
| `npm run preview` | Preview production build            |
| `npm test`        | Run all tests                       |

## Structure

```
src/
  data/          content.en.ts + content.id.ts + types.ts
  layouts/       Base.astro (SEO, OG, JSON-LD)
  components/
    Home.astro   The full page for one locale (pages only pick the locale)
    sections/    Nav, Hero, Growth, Loop, Helpers, Workspace, Guardrails, Engines, Offer, FinalCta, Footer
    ui/          Mascot (helper drawings), Icon, SectionHead, StatRow
    waitlist/    WaitlistDialog (client-side modal + /api/waitlist)
  pages/         index.astro + id/index.astro
  styles/        global.css (design tokens + Tailwind)
public/
  saga.svg       Favicon
  icon-192.png   Apple touch icon / PWA icon
  icon-512.png   PWA icon
  og/
    social-preview.png   1200x630 OG image (regenerate from social-preview.html)
    social-preview.html  Source for the OG image (Playwright-rasterized)
  robots.txt
tests/           node --test suite (15 tests)
```

## Deploy

See [DEPLOY.md](DEPLOY.md) for Vercel deploy steps and environment variables.
