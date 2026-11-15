# Deployment

## Commands

```bash
npm install        # install dependencies
npm run dev        # local dev server (http://localhost:5173)
npm run build      # typecheck → client build → SSR build → prerender all routes
npm run preview    # serve the production build (http://localhost:4173)
npm run typecheck  # TypeScript only
```

`npm run build` output lands in `dist/` — that folder is the whole deployable
site (static files only, no server code to run).

## Before you deploy: two settings

1. **Production URL** — set the real domain at build time so canonical/OG URLs,
   JSON-LD, `sitemap.xml` and `robots.txt` are generated:

   ```bash
   VITE_SITE_URL=https://your-real-domain.com npm run build
   ```

   (The docs and sitemap currently assume `https://talentixlabs.com` as a
   placeholder — replace it with your actual domain.)

2. **Contact email (optional)** — set `contact.email` in
   `src/config/site.ts`. With an email configured, the contact form hands off
   to a pre-filled mailto draft; without it, the page states plainly that it is
   a frontend demonstration.

## Hosting (static, no backend required)

The build emits every route in two shapes — `<route>/index.html` and
`<route>.html` — plus `404.html`, so it works on any static host:

| Host | Notes |
| --- | --- |
| **Netlify / Vercel / Cloudflare Pages** | Build command `npm run build`, publish `dist`. Pretty URLs resolve automatically. |
| **GitHub Pages** | Publish `dist`. `404.html` is used automatically for unknown routes. |
| **nginx** | Serve `dist/` as root; add `error_page 404 /404.html;`. Directory indexes resolve `/about` → `/about/index.html` out of the box. |

### nginx sketch

```nginx
server {
  listen 80;
  server_name your-domain.com;
  root /var/www/company-portfolio/dist;
  index index.html;
  location / { try_files $uri $uri/ =404; }
  error_page 404 /404.html;
  gzip on;
  gzip_types text/css application/javascript image/svg+xml;
}
```

## Future backend integration (contact form)

`src/pages/ContactPage.tsx` → `handleSubmit()` contains a marked
**“Future backend integration point”**. To go live:

1. Implement a small endpoint (e.g. `POST /api/contact`) or use a form service
   (Formspree, Netlify Forms — on Netlify, add `data-netlify="true"` to the
   form and a hidden `form-name` input; no code rewrite needed).
2. Replace the mailto/demo branch with the `fetch` POST — the payload shape is
   `{ name, email, phone, subject, message }`.
3. Keep or remove the honest demo notice accordingly.

No redesign is required — the form UI, validation and success states stay as-is.

## Adding content

- **New project**: append to `src/data/projects.ts` (fields documented in
  `src/types/index.ts`). The route, prerendered page, sitemap entry, projects
  grid and service cross-links all pick it up automatically. Drop the preview
  image into `public/images/projects/`.
- **New service page**: append to `src/data/services.ts`; add its slug to
  nothing — routes derive from the data.
- **Articles**: replace the sample entries in `src/data/company.ts`
  (`insights`) and link them to real pages when they exist; until then the
  cards stay clearly marked as samples.


## Vercel

A `vercel.json` is included. Import the repo (or run `vercel` from this
folder) and accept the defaults: framework **Vite**, build command
`npm run build`, output directory `dist`. `cleanUrls` serves the
prerendered pages at `/about`, `/projects/...` etc., and unknown URLs get
the prerendered `404.html`. Optionally set `VITE_SITE_URL` (Project →
Settings → Environment Variables) to your production URL to enable
canonical URLs, JSON-LD, `sitemap.xml` and `robots.txt`.

## Dark mode

Colours are CSS variables (`--c-*` in `src/styles/index.css`); `:root`
holds the light palette and `.dark` the dark one, and `tailwind.config.ts`
maps the existing colour names (`bg-paper`, `text-ink`, …) onto them — so
every component themes automatically. The theme is applied before first
paint by a small inline script in `index.html` (saved choice, else the OS
preference) and toggled by `src/components/ui/ThemeToggle.tsx`.
