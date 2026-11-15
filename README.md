# Talentix Labs — Company Portfolio Website

A premium, editorial portfolio website for **Talentix Labs**, a technology
company providing software development and intelligent automation solutions.

Built with **React 18 + TypeScript + Vite 6 + Tailwind CSS 3**, frontend-only.
All copy and project data come from the company's own materials
(`Portfolio.pdf` and the logo) — nothing invented.

![Stack](https://img.shields.io/badge/React_18-TypeScript-1B314E) ![Build](https://img.shields.io/badge/Vite_6-Tailwind_3-3AAE67)

## Quick start

```bash
npm install
npm run dev        # http://localhost:5173
```

Production:

```bash
npm run build      # typecheck → build → prerender all routes
npm run preview    # serve dist/ at http://localhost:4173
```

The build typechecks, bundles, **prerenders every route to static HTML**
(with per-route titles, meta, Open Graph, JSON-LD), generates `sitemap.xml`,
`robots.txt` and `404.html`. Set your domain first:

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```

## Pages

| Route | Page |
| --- | --- |
| `/` | Home — hero, intro, services index, selected projects, why-us, process, insights (clearly-marked samples), contact CTA |
| `/about` | Who we are, philosophy, mission & vision, values, approach to technology |
| `/services` | Overview of the three service lines |
| `/services/web-development` | MERN web development |
| `/services/mobile-app-development` | Flutter + Firebase mobile development |
| `/services/ai-automation` | AI-powered workflow automation |
| `/projects` | All five completed projects with category filtering |
| `/projects/:slug` | Full case study per project (PlugPro ERP, Kartly, Tidyo, IPS Driving School, Raziagul) |
| `/contact` | Validated contact form with an honest, backend-ready submission flow |

## Project data

All five projects live in [`src/data/projects.ts`](src/data/projects.ts) with a
documented extraction trail in [`docs/project-inventory.md`](docs/project-inventory.md):

- **PlugPro ERP** — AI-powered, mobile-first ERP (role hierarchy, AI assistant
  with voice input, Manager's Hub, push notifications, multi-tenant isolation)
- **Kartly** — mobile shopping app (discovery → product pages → cart/checkout,
  reviews, wishlist, order tracking)
- **Tidyo** — on-demand home-cleaning booking platform (transparent pricing,
  scheduling in under a minute, saved addresses)
- **IPS Driving School** — responsive website for a Glasgow driving school
  (courses, online payments, SEO blog, instructor recruitment)
- **Raziagul** — e-commerce website for the RaziaGul clothing brand
  (catalog, product pages, on-site checkout)

The PDF states no per-project frameworks and no repository/live URLs — so the
site carries only PDF-confirmed capability tags and omits links rather than
inventing them. Add real links by editing `src/data/projects.ts`; UI and routes
update automatically.

## Design system

Derived from the logo (green `#3AAE67`, navy `#1B314E`, charcoal `#343B41` on
white): paper-white editorial layouts, hairline borders, numbered sections, the
swoosh motif under one word per headline, Fraunces + Instrument Sans, restrained
fade-up motion that respects `prefers-reduced-motion`. Full rules:
[`docs/brand-guidelines.md`](docs/brand-guidelines.md).

## Documentation

| Doc | Contents |
| --- | --- |
| [`docs/architecture.md`](docs/architecture.md) | Rendering model, folder map, prerender + hydration details |
| [`docs/project-inventory.md`](docs/project-inventory.md) | Every project as extracted from Portfolio.pdf |
| [`docs/brand-guidelines.md`](docs/brand-guidelines.md) | Palette, typography, motif, spacing, motion rules |
| [`docs/seo-guide.md`](docs/seo-guide.md) | Prerendering, metadata, structured data, sitemap/robots |
| [`docs/deployment.md`](docs/deployment.md) | Deploy targets, nginx sketch, backend integration steps |

## Performance & accessibility

Route-level code splitting (lazy pages + `vendor`/`motion` chunks), lazy-loaded
images with explicit dimensions, self-hosted fonts, semantic HTML, skip link,
keyboard-accessible mobile menu (Escape closes), labelled fields with inline
validation, `aria-live` filter results, visible focus states, reduced-motion
support, and `<noscript>` fallbacks keeping all content visible.

## Honest notes

- The contact form validates fully client-side; without a configured email it
  says clearly that nothing is sent, and the integration point is documented.
- The three "Notes & insights" cards are **sample entries**, labelled as such.
- No statistics, testimonials, client logos, dates or social links appear
  anywhere — none exist in the source material.
