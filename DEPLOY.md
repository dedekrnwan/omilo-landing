# Saga OS Landing, Production Deploy

Astro 5 (SSR) + Tailwind v4, deployed on **Vercel** (`@astrojs/vercel` adapter, `output: 'server'`). Target domain: **saga-os.co.id** (placeholder; update when the domain is confirmed).

Node runtime: Node 22.x (specified in `package.json` `engines` and Vercel project settings).

---

## 1. Environment variables (set in Vercel)

Vercel, Project, Settings, Environment Variables (scope: Production + Preview). All are server-side only.

| Variable | Value | Purpose |
|---|---|---|
| `SLACK_WEBHOOK_URL` | Your Slack incoming webhook URL | Waitlist notifications (`/api/waitlist`). Must start with `https://hooks.slack.com/`. If unset, the API still returns `ok: true` (graceful degradation). |

No other environment variables are required. The site runs with no env vars set; the waitlist simply logs to nowhere without the webhook.

---

## 2. Deploy steps (Vercel)

1. Push the repo (or this directory) to a Git provider Vercel can import.
2. In Vercel, import the project. Framework preset: **Astro**. Root directory: this folder.
3. Build command: `astro build` (the Vercel adapter handles output; no manual output dir needed).
4. Add `SLACK_WEBHOOK_URL` from section 1 (optional).
5. Deploy. Then add the custom domain once confirmed.

---

## 3. Routes

| Path | Description |
|---|---|
| `/` | English landing (EN, `lang="en"`) |
| `/id/` | Indonesian landing (ID, `lang="id"`) |
| `/api/waitlist` | Server route: accepts `POST { name, email }`, posts to Slack |
| `/sitemap-index.xml` | Sitemap (emitted by `@astrojs/sitemap`) |
| `/robots.txt` | Static, allows all bots |
| `/og/social-preview.png` | OG image (1200x630 PNG) |

---

## 4. Pre-launch checklist

Build and deploy:
- [ ] `npm ci && npm run build` succeeds; `npx astro check` returns 0 errors.
- [ ] `npm test` is all green (14+ tests including OG PNG dimension check).
- [ ] Domain confirmed and set in `astro.config.mjs` (`site`) and `src/config.ts` (`SITE`).
- [ ] `SLACK_WEBHOOK_URL` set in Vercel; submit the waitlist dialog and confirm the Slack message.

Content (owner to supply before public launch):
- [ ] Real early-user social proof in `src/data/content.en.ts` and `content.id.ts` (`socialProof.note` / `socialProof.proofPlaceholder`). Do not add any before it is real.
- [ ] Pricing copy reviewed and confirmed with the team (currently placeholders).
- [ ] `WA_URL` in `src/config.ts` updated to the real WhatsApp business number.

SEO:
- [ ] `site` in `astro.config.mjs` updated to the confirmed domain (currently `https://saga-os.co.id`).
- [ ] `SITE` in `src/config.ts` updated to match.
- [ ] `sitemap-index.xml` and `robots.txt` served correctly after deploy.

---

## 5. Notes

- Secrets live only in Vercel env + a local gitignored `.env`. Nothing secret is committed.
- `/api/waitlist` is server-rendered (`prerender = false`); all pages are SSR via the Vercel adapter.
- To regenerate the OG image, see the "OG image regeneration" section in `AGENTS.md`.
- `STORE_LIVE` in `src/config.ts`: set to `true` when a managed-cloud offer is available. Currently `false`; all store CTAs open the waitlist instead.
