# Architecture

Talentix Labs company portfolio — React 18 + TypeScript + Vite 6 + Tailwind CSS 3, frontend-only.

## Stack

| Layer | Choice | Why |
| --- | --- | --- |
| UI runtime | React 18.3 | Stable, mature hydration/SSR behaviour |
| Language | TypeScript 5.8 (strict) | Type safety across content and UI |
| Bundler | Vite 6 | Fast dev server, clean production builds |
| Styling | Tailwind CSS 3.4 | Design tokens in `tailwind.config.ts` |
| Routing | React Router 6.30 | Declarative routes, `BrowserRouter` (client) / `StaticRouter` (prerender) |
| Motion | Framer Motion 11 | Reveal-on-scroll only; `reducedMotion="user"` |
| Icons | Lucide React | Single icon set, tree-shaken |
| Fonts | Fontsource (Fraunces, Instrument Sans) | Self-hosted, no external font CDN |

## Directory map

```
src/
├── app/
│   ├── router/
│   │   ├── AppRoutes.tsx     # route table, receives the page registry
│   │   ├── loaders.ts        # lazy() page loaders + ensurePagesLoaded()
│   │   └── paths.ts          # all crawlable routes, derived from data
│   └── providers/AppProviders.tsx   # MotionConfig (reduced-motion aware) + Suspense
├── components/
│   ├── common/               # Section, SectionHeading, Reveal, ProjectCard, ContactCTA
│   ├── layout/               # Header (desktop + mobile menu), Footer, Layout, ScrollToTop
│   └── ui/                   # Button, Links (ArrowLink/Tag/ExternalLink), Logo, Swoosh
├── config/site.ts            # site name, nav, CTA, contact config, site URL
├── data/                     # projects.ts, services.ts, company.ts — ALL content
├── features/home/            # Hero, Intro, ServicesOverview, SelectedProjects,
│                             # WhyChooseUs, Process, Insights
├── head/Seo.tsx              # per-page title/description/OG/Twitter/JSON-LD manager
├── pages/                    # thin route-level components
├── styles/index.css          # tokens usage, base styles, reduced-motion fallbacks
├── types/                    # Project, Service, Principle, ProcessStep, Insight
├── utils/cn.ts
├── entry-server.tsx          # SSR render used by scripts/prerender.mjs
└── main.tsx                  # client entry: boots after page modules are ready
```

## Content pipeline

1. **Data lives in `src/data/`** (`projects.ts`, `services.ts`, `company.ts`) typed by
   `src/types/index.ts`. Components never hard-code content.
2. Routes in `paths.ts` are **derived from the data files** — adding a project to
   `projects.ts` automatically adds its route, its prerendered page, its sitemap entry
   and its `/projects/:slug` page. No page rewrite needed.

## Rendering model (prerender + hydration)

- `npm run build` runs three steps:
  1. `tsc -b` — strict typecheck.
  2. Client build (`vite build`) — code-split pages, `vendor` and `motion` chunks.
  3. SSR build (`vite build --ssr src/entry-server.tsx --outDir dist/server`) +
     `scripts/prerender.mjs` — renders every route in `ROUTE_PATHS` with
     `renderToString` and writes:
     - `dist/<route>/index.html` (directory-index shape for nginx/Netlify/GH Pages),
     - `dist/<route>.html` (flat shape for sirv/`vite preview`-style hosts),
     - `dist/404.html` (rendered NotFound page),
     - `dist/sitemap.xml` + `dist/robots.txt` (when `VITE_SITE_URL` is set).
- `main.tsx` **awaits every lazy page module (`ensurePagesLoaded()`) before
  `hydrateRoot`** — otherwise the root-level Suspense would swap the prerendered
  HTML for its fallback and break hydration (React error #418).
- The SSR entry mirrors the client provider tree exactly (MotionConfig + Suspense),
  so context matches on both sides.
- Page components are **eagerly imported in `entry-server.tsx`**: a synchronous
  `renderToString` cannot wait on dynamic imports.

## SEO head management

`src/head/Seo.tsx` is a dependency-free head manager:

- **Prerender**: `<Seo>` collects title/description/canonical/OG/Twitter/JSON-LD tags
  through `HeadProvider` during render; `scripts/prerender.mjs` swaps them into the
  built `index.html` between the `<!-- page metadata start/end -->` markers.
- **Client navigation**: `<Seo>` updates `document.title` and head tags in an effect.
- Global `Organization` + `WebSite` JSON-LD is injected by the prerender script on
  every page when `VITE_SITE_URL` is set.

## Design system

- Tokens live in `tailwind.config.ts` (colors, type scale, easing, keyframes) and are
  documented in `docs/brand-guidelines.md`.
- The `Swoosh` component (`components/ui/Swoosh.tsx`) redraws the logo's swoosh as a
  headline underline — the brand's single decorative motif.
- Reveal-on-scroll is centralised in `components/common/Section.tsx` (`Reveal`),
  driven by `MotionConfig reducedMotion="user"`; CSS fallbacks keep content visible
  without JavaScript.

## Contact form

Fully client-side validated (see `pages/ContactPage.tsx`). Submission is honest about
capabilities: with `site.contact.email` set it opens a pre-filled mailto draft; without
it, the page states clearly that nothing was sent and documents the integration point.
A backend hook position is marked in the submit handler (`Future backend integration
point`).
