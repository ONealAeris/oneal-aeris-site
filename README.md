# ONeal Aeris — corporate site

A single-page credibility site for **ONeal Aeris**, the consulting S-Corp (Krav is a DBA).
Aerospace / instrumentation aesthetic: deep navy ground, hairline grids, monospaced
telemetry labels, brass signal accent. Built to convey precision and high-consequence
experience without literal military / extreme-sports imagery.

## Stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3** — design tokens in [`tailwind.config.ts`](tailwind.config.ts)
- **Resend** for the contact form ([`app/api/contact/route.ts`](app/api/contact/route.ts))
- Type: Space Grotesk (display) · IBM Plex Sans (body) · IBM Plex Mono (labels)

## Local development

```bash
npm install
npm run dev        # http://localhost:3000  (preview config uses -p 3014)
```

`npm run build` runs a production build + type check.

## Environment

Copy `.env.example` → `.env.local` and fill in:

| Var | Purpose |
| --- | --- |
| `RESEND_API_KEY` | Resend API key. **If unset, the form still "succeeds" and logs to the server console** — so you can demo without it. |
| `CONTACT_TO` | Where inquiries are delivered (default `hello@onealaeris.com`). |
| `CONTACT_FROM` | Verified Resend sender, e.g. `ONeal Aeris <no-reply@onealaeris.com>`. |

### Resend setup (when ready)
1. Create a Resend account, add & verify the `onealaeris.com` domain (DKIM/SPF records go in Cloudflare DNS).
2. Generate an API key → set `RESEND_API_KEY` in Vercel project env.
3. Set `CONTACT_FROM` to an address on the verified domain.

## Deploy (Vercel + Cloudflare domain)

1. Push this folder to a GitHub repo (e.g. `ONealAeris/oneal-aeris-site`).
2. Import into Vercel → framework auto-detected (Next.js). Add the env vars above.
3. In **Cloudflare DNS**, point the apex/`www` records at Vercel (Vercel will show the exact
   `A` / `CNAME` targets). Keep Resend's DKIM/SPF/DMARC records in place.
4. Add the custom domain in Vercel and let it issue the TLS cert.

> Cloudflare proxy (orange cloud) can stay on for the site records; set Resend's email
> auth records to **DNS-only** (grey cloud).

## Editing content

All copy lives in the section components under [`components/`](components):
`Hero`, `Capabilities`, `Approach`, `Practice`, `Contact`, `Footer`, plus `Nav` and the
`Brand` mark/wordmark. The instrument mark is also in [`public/mark.svg`](public/mark.svg)
(favicon). Palette + type are centralized in `tailwind.config.ts`.
