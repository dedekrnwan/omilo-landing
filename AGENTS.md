# Omilo Landing, Agent Guide

Astro 5 (SSR) + Tailwind v4 landing page. Node 22.x. Output `server` via `@astrojs/vercel`.

## Development

Start the dev server in the background:

```sh
astro dev --host 127.0.0.1 --port 4321
```

Or use the npm shortcut: `npm run dev`.

## Documentation

Full Astro docs: https://docs.astro.build

Relevant guides:

- [Pages and routing](https://docs.astro.build/en/guides/routing/)
- [Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Internationalization (i18n)](https://docs.astro.build/en/guides/internationalization/)
- [Styling with Tailwind](https://docs.astro.build/en/guides/styling/)
- [SSR and adapters](https://docs.astro.build/en/guides/server-side-rendering/)

## Content

All page copy lives in `src/data/content.en.ts` and `src/data/content.id.ts`. Types are defined in `src/data/types.ts`. Do not add copy anywhere else.

## i18n

- Default locale: `en` (no prefix, served at `/`)
- ID locale: prefix `/id/` (served at `/id/`)
- Helper in `src/i18n.ts`: `getContent`, `localizePath`, `otherLocale`

## Waitlist API

`src/pages/api/waitlist.ts` handles POST with `{ name, email }`. If `SLACK_WEBHOOK_URL` is set, it posts to Slack. If unset, it returns `{ ok: true }` anyway (graceful degradation). See [DEPLOY.md](DEPLOY.md) for env vars.

## Testing

```sh
npm test
```

Tests use Node's built-in `node:test` runner. Each test file spins up Astro dev on a unique port and tears it down via `before`/`after`. Do not import `.ts` modules directly in tests; assert via file text or server-rendered HTML.

## Sections

Sections live in `src/components/sections/`. Each receives a typed `content` prop from the page. Do not hardcode copy in sections.

## Design tokens

All tokens are in `src/styles/global.css` as CSS custom properties. Use tokens, not raw hex values.

## OG image regeneration

To regenerate `public/og/social-preview.png`:

1. Serve `public/og/` over HTTP (e.g. `python3 -m http.server 7788` from that directory).
2. Use Playwright to navigate to `http://127.0.0.1:7788/social-preview.html`, set viewport to 1200x630, and screenshot.
3. Verify dimensions: `sips -g pixelWidth -g pixelHeight public/og/social-preview.png` must show 1200 x 630.
