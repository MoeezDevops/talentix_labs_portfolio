# SEO Guide

## What is implemented

### Static prerendering (React + Vite, no Next.js)

`npm run build` renders **all 13 public routes** to real HTML via
`src/entry-server.tsx` + `scripts/prerender.mjs`:

- Each route produces `dist/<route>/index.html` **and** `dist/<route>.html`, so
  the prerendered page is served on directory-index hosts (nginx, Netlify,
  GitHub Pages, Cloudflare Pages) and on sirv-style hosts (`vite preview`).
- `dist/404.html` is a prerendered NotFound page (GitHub Pages uses it
  automatically; nginx: `error_page 404 /404.html;`).
- Crawlers receive full, meaningful HTML — headings, copy, links, image alts —
  before any JavaScript runs. Browsers hydrate the same markup in place.

### Per-route metadata

`src/head/Seo.tsx` gives every page its own:

- `<title>` (format: `Page · Talentix Labs`, home page spells out the full
  positioning),
- meta description,
- canonical URL (`link rel="canonical"`),
- Open Graph: `og:title`, `og:description`, `og:type`, `og:image`, `og:url`,
  plus static `og:site_name`,
- Twitter: `twitter:card summary_large_image`, `twitter:title/description/image`,
- JSON-LD where accurate (see below).

Default tags sit between `<!-- page metadata start/end -->` markers in
`index.html`; the prerender swaps that block per route. Keep new default tags
in sync with `src/head/Seo.tsx` emission order.

### Structured data

| Schema | Where |
| --- | --- |
| `Organization` (name, url, logo) + `WebSite` | every page, injected at prerender |
| `Service` | each of the three service detail pages |
| `SoftwareApplication` (author: Organization) | each project detail page |
| `BreadcrumbList` | each project detail page |
| `CollectionPage` + `hasPart` CreativeWork list | `/projects` |

**Nothing is invented**: no address, phone, founding date, aggregate rating or
social profile is emitted because none is known. When real details exist, add
them in `src/config/site.ts` (contact) and the JSON-LD builders.

### Sitemap & robots

Generated at build time **only when `VITE_SITE_URL` is set** (see below):
`dist/sitemap.xml` (all routes, `lastmod` = build date, priority/changefreq per
route type) and `dist/robots.txt` (`Allow: /` + `Sitemap:` line). Without the
variable the build still succeeds and prints a reminder; `public/robots.txt`
(allow-all) remains as the base.

### Semantic & accessibility foundations

- One `<h1>` per page, descending `h2/h3` order, landmark elements
  (`header/nav/main/footer`), breadcrumbs on detail pages.
- Descriptive `alt` text for every image (project previews describe the
  product and screen count).
- Internal linking: header, footer (company/services/selected work), service →
  project cross-links, related projects, next-project pager, breadcrumbs.
- Skip-to-content link, visible focus rings, `aria-current` on the active nav
  item, labelled form fields, `aria-live` result counts, keyboard-operable
  mobile menu (Escape closes).

## Configuration

Set the production origin before building (used for canonical/OG URLs,
JSON-LD URLs, sitemap and robots):

```bash
VITE_SITE_URL=https://your-domain.com npm run build
```

It is currently configured as the placeholder `https://talentixlabs.com` in
the deploy docs — **replace it with the real domain**. Contact details set in
`src/config/site.ts` flow into the Organization schema and the contact page.

## Honest limitations

- Prerendering provides crawlable HTML; it does **not** guarantee rankings.
- `og:image` uses `/images/og-image.png` (logo on white, 1200×630) for all
  pages except project pages, which use their preview image.
- The blog/insights cards are explicitly labelled **sample content** and do
  not link anywhere — no fake articles are presented as real.
