# Loose Wheel Coffee

A responsive, minimalist website for the Loose Wheel coffee truck in Ogden, Utah. Built with Next.js App Router, React, and TypeScript.

## Run locally

Use Node.js 20.9 or newer (validated with Node 24) and npm.

```sh
npm ci
npm run dev
```

Visit http://localhost:3000. Pages: Home (`/`), About (`/about`), Services (`/services`), and Contact (`/contact`).

## Validate and run production

```sh
npm run typecheck
npm run build
npm start
```

The production server listens on port 3000. Set `PORT` to use another port. If your npm cache directory is unavailable, use `npm ci --cache /tmp/loosewheel-npm-cache`.

## Deploy

### Vercel

Import this GitHub repository into Vercel, choose the Next.js preset, and deploy. Default build command: `npm run build`. No environment variables are currently required. Connect your domain in Vercel's project settings.

### Node.js hosting

Install dependencies with `npm ci`, run `npm run build`, and launch `npm start` through your host's process manager. Put the server behind your host's HTTPS reverse proxy. Retain the `.next` directory, `public`, package files, and installed runtime dependencies. Rebuild for each release.

## Customize before launch

- Replace illustrative copy, menu items, availability, and placeholder illustrations with approved business information.
- Add actual contact details and a confirmed truck schedule.
- The contact form validates fields locally and shows an explicit preview notice. It does **not** send or store messages. Integrate a server-side mail or form provider, validation, rate limits, and appropriate privacy disclosures before enabling real submissions. Keep provider credentials server-side.
- Coffee illustrations are bundled SVG placeholders in `public`, so no external image service is required. Replace them with your own brand photography before launch.
- Update metadata in `app/layout.tsx` and page files with final brand details.

## Structure

- `app/`: route pages, metadata, shared layout, and responsive global styles.
- `components/`: shared navigation, footer, imagery, calls to action, and interactive contact form.

The site uses system sans-serif and serif fonts, so no remote font service is needed. Navigation includes a mobile menu, current-page state, keyboard focus styles, and a skip-to-content link.

## Brand colors

The shared palette is defined in `app/globals.css`:

| Color | Hex | Use |
| --- | --- | --- |
| Sea green | `#003d39` | Main brand color, text, buttons, dark sections |
| Yellow | `#ffcc00` | Calls to action and highlights |
| Off white | `#fffae3` | Page background and text on dark surfaces |
| Red | `#dd1b2a` | Status dot and keyboard focus outline |
| Bronze | `#8c7329` | Heading emphasis, small accents, button hover |

The original Loosey mascot is bundled in `public/loosey.svg` and displayed through `components/Loosey.tsx` on Home and About. Its supplied paths and colors are preserved. The original wordmark is bundled in `public/loose-wheel-logo.svg` and reused in the header and footer through `components/Logo.tsx`. Cadet webfont files are still pending; the site currently uses system fonts.
