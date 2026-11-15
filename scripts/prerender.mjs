/**
 * Static prerender for the Talentix Labs portfolio.
 *
 * Runs after `vite build` (client) and the SSR entry build:
 *   1. awaits every route's dynamic import (so no Suspense fallback
 *      ever lands in crawled HTML),
 *   2. renders each route in ROUTE_PATHS to HTML,
 *   3. swaps the default head block in dist/index.html for the route's
 *      real title / description / canonical / Open Graph / Twitter tags,
 *      and appends per-page JSON-LD plus global Organization & WebSite
 *      schemas,
 *   4. writes dist/<route>/index.html for each route,
 *   5. generates dist/sitemap.xml and dist/robots.txt when VITE_SITE_URL
 *      is set (see docs/seo-guide.md).
 *
 * The result: crawlers receive meaningful HTML for every public page;
 * browsers hydrate the same markup via main.tsx.
 */
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { render, ROUTE_PATHS } from '../dist/server/entry-server.js'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const dist = path.join(root, 'dist')
const siteUrl = (process.env.VITE_SITE_URL || '').trim().replace(/\/$/, '')

const today = new Date().toISOString().slice(0, 10)

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

function attrsToString(attrs) {
  return Object.entries(attrs)
    .map(([k, v]) => `${k}="${escapeHtml(v)}"`)
    .join(' ')
}

function serializeHead(head) {
  const meta = []
  const jsonLd = []
  for (const tag of head) {
    if (tag.tag === 'title') {
      meta.push(`<title>${escapeHtml(tag.innerHTML)}</title>`)
    } else if (tag.tag === 'meta' || tag.tag === 'link') {
      meta.push(`<${tag.tag} ${attrsToString(tag.attrs)} />`)
    } else if (tag.tag === 'script') {
      jsonLd.push(
        `<script type="application/ld+json">${tag.innerHTML}</script>`,
      )
    }
  }
  return { meta: meta.join('\n    '), jsonLd: jsonLd.join('\n    ') }
}

function globalJsonLd() {
  if (!siteUrl) return ''
  const org = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Talentix Labs',
    url: `${siteUrl}/`,
    logo: `${siteUrl}/logo/company-logo.png`,
  }
  const website = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'Talentix Labs',
    url: `${siteUrl}/`,
  }
  return (
    `<script type="application/ld+json">${JSON.stringify(org)}</script>\n    ` +
    `<script type="application/ld+json">${JSON.stringify(website)}</script>`
  )
}

const template = readFileSync(path.join(dist, 'index.html'), 'utf8')
const START = '<!-- page metadata start'
const END = '<!-- page metadata end -->'

if (!template.includes(START) || !template.includes(END)) {
  console.error('prerender: index.html is missing the page metadata markers')
  process.exit(1)
}

const abs = (p) => (siteUrl ? `${siteUrl}${p}` : p)

for (const route of ROUTE_PATHS) {
  const { html, head } = render(route)
  const { meta, jsonLd } = serializeHead(head)

  let finalHtml = template.replace(
    new RegExp(`${START.replace(/[<>!-]/g, (c) => `\\${c}`)}[\\s\\S]*?${END.replace(/[<>!-]/g, (c) => `\\${c}`)}`),
    [
      START,
      '     ' + meta,
      jsonLd ? '     ' + jsonLd : null,
      globalJsonLd() ? '     ' + globalJsonLd() : null,
      '     ' + END,
    ]
      .filter(Boolean)
      .join('\n    '),
  )

  finalHtml = finalHtml.replace('<div id="root"></div>', `<div id="root">${html}</div>`)

  // Write BOTH shapes so every static host resolves the right page:
  //  - <route>/index.html  → directory-index hosts (nginx, Netlify, GitHub Pages)
  //  - <route>.html        → hosts that resolve /route to route.html
  //                          (vite preview / sirv SPA mode)
  const dir = route === '/' ? dist : path.join(dist, route)
  mkdirSync(dir, { recursive: true })
  writeFileSync(path.join(dir, 'index.html'), finalHtml)
  if (route !== '/') {
    const flat = route.endsWith('/')
      ? path.join(dist, route.slice(0, -1) + '.html')
      : path.join(dist, `${route}.html`)
    mkdirSync(path.dirname(flat), { recursive: true })
    writeFileSync(flat, finalHtml)
  }
  console.log(`prerendered ${route}`)
}

// ------------------------------------------- 404 page (404.html) ----
// The '*' route rendered once and written as 404.html — GitHub Pages
// and many other hosts serve it for unknown paths automatically.
{
  const notFoundRoute = '/this-route-does-not-exist'
  const { html, head } = render(notFoundRoute)
  const { meta, jsonLd } = serializeHead(head)
  let nf = template.replace(
    new RegExp(`${START.replace(/[<>!-]/g, (c) => `\\${c}`)}[\\s\\S]*?${END.replace(/[<>!-]/g, (c) => `\\${c}`)}`),
    [START, '     ' + meta, jsonLd ? '     ' + jsonLd : null, '     ' + END]
      .filter(Boolean)
      .join('\n    '),
  )
  nf = nf.replace('<div id="root"></div>', `<div id="root">${html}</div>`)
  writeFileSync(path.join(dist, '404.html'), nf)
  console.log('prerendered 404.html')
}

// ------------------------------------------------------------- sitemap ----
if (siteUrl) {
  const priority = (r) =>
    r === '/' ? '1.0'
    : r.startsWith('/projects/') ? '0.9'
    : r === '/contact' ? '0.7'
    : '0.8'
  const changefreq = (r) =>
    r === '/' || r === '/projects' ? 'weekly' : 'monthly'

  const entries = ROUTE_PATHS.map(
    (r) =>
      `  <url>\n    <loc>${abs(r)}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${changefreq(r)}</changefreq>\n    <priority>${priority(r)}</priority>\n  </url>`,
  ).join('\n')

  writeFileSync(
    path.join(dist, 'sitemap.xml'),
    `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${entries}\n</urlset>\n`,
  )

  writeFileSync(
    path.join(dist, 'robots.txt'),
    `User-agent: *\nAllow: /\n\nSitemap: ${siteUrl}/sitemap.xml\n`,
  )
  console.log(`sitemap.xml + robots.txt written for ${siteUrl}`)
} else {
  console.log(
    'note: VITE_SITE_URL not set — skipped canonical/og:url URLs, Organization & WebSite JSON-LD, sitemap.xml and robots.txt. See docs/seo-guide.md.',
  )
}

console.log(`prerender complete — ${ROUTE_PATHS.length} routes`)
