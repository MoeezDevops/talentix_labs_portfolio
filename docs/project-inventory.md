# Project Inventory

Source of truth: **Portfolio.pdf** (6 pages), uploaded by the company.
All five projects were read page-by-page and transcribed below. Copy on the
website is edited only for grammar and presentation — technical meaning is
unchanged and nothing has been added.

## Extraction rules used on the site

- No GitHub or live URLs appear anywhere in the PDF → `githubUrl` and `liveUrl`
  are `null` in `src/data/projects.ts` and the UI simply omits them. Add real
  links by editing the data file; no component changes are needed.
- The PDF states no per-project frameworks → project pages carry
  **PDF-confirmed capability tags** (e.g. "AI Assistant", "Multi-tenant
  Architecture"), never assumed stacks. The MERN / Flutter / Firebase stacks
  appear only on the **service pages**, where they describe what the company
  offers.
- No client names beyond those printed in the PDF (I Passing Smiles / IPS,
  RaziaGul), no dates, no metrics, no testimonials.

## 1. PlugPro ERP — `src/data/projects.ts` id `plugpro-erp`

| Field | Content (from PDF, page 1–2) |
| --- | --- |
| Type | Mobile ERP Platform (AI-powered, mobile-first) |
| Sector | Business management |
| Purpose | Control over operations without being tied to a desk or juggling separate tools; employees, projects, attendance, expenses, finance, banking, vendors and orders in one app |
| Structure | Three-tier roles: Admin, Manager, Employee; Admin creates Managers, Managers create Employees; Access Control exclusive to Admin |
| Key features | AI assistant (chatbot with voice input) · Role-based hierarchy · Admin control + Access Control · Manager's Hub · Manager area (profiles, salary, attendance, team expenses, vendors, orders) · Project-centric management · Real-time push notifications · Multi-tenant data isolation |
| Featured on homepage | Yes |

## 2. Kartly — id `kartly`

| Field | Content (from PDF, page 2–3) |
| --- | --- |
| Type | Mobile shopping app |
| Sector | Retail & e-commerce |
| Purpose | Smooth path from discovery to purchase — search, browse by category or brand, check out without leaving the app |
| Key features | Discovery (search, tabbed categories, banner sliders, featured brands, horizontal sub-category scrolling) · Product browsing (responsive grid, "View All", brand pages) · Product details (galleries, attributes/variations like size and colour) · Ratings & reviews · Wishlist · Cart & checkout (quantities, saved addresses) · Order tracking · Account screens · Polished UI (custom app bar, bottom navigation, curved elements) |
| Featured on homepage | Yes |

## 3. Tidyo — id `tidyo`

| Field | Content (from PDF, page 3–4) |
| --- | --- |
| Type | Service booking platform (on-demand home cleaning) |
| Sector | Home services |
| Purpose | Turn a phone-call-and-wait service into a booking experience as fast as ordering a ride; booking in under a minute |
| Catalog | Recurring upkeep, deep cleaning, kitchen & bathroom cleaning, move-in/move-out, plus specialised services |
| Key features | Service discovery (location, search, categories) · Transparent details (starting price, duration, ratings, reviews, "what's included" checklist) · Flexible scheduling (weekly/biweekly, date picker, time slots) · Saved addresses · Booking management · Clean focused UI · Bookings & profile |
| Featured on homepage | No |

## 4. IPS Driving School — id `ips-driving-school`

| Field | Content (from PDF, page 5) |
| --- | --- |
| Type | Business website (responsive) |
| Sector | Driving education — I Passing Smiles (IPS), Glasgow, UK |
| Purpose | One place for learners to explore courses, book lessons, read driving advice and pay online; a professional, trust-focused presence that turns visitors into bookings |
| Key features | Course management (structured pages, clear pricing) · Online payments (secure checkout) · Blog & articles (SEO-friendly driving tips) · Instructor recruitment ("Become an Instructor" page) · Conversion-focused design (persistent "Get Started Now" CTA) · Fully responsive (readable blog on phones) · Brand-aligned UI (navy & amber palette) |
| Featured on homepage | Yes |

## 5. Raziagul — id `raziagul`

| Field | Content (from PDF, page 6) |
| --- | --- |
| Type | E-commerce website (responsive) |
| Sector | Fashion & apparel — RaziaGul clothing brand |
| Purpose | Complete path from browsing to purchase in one place; no redirects, DMs or manual order messages |
| Key features | Product listing page (grid, images, names, prices) · Product detail page (large imagery, description, pricing, size & colour selection) · Direct online payments (secure on-site checkout) · Cart & checkout flow · Fully responsive (mobile-first fashion shoppers) · Brand-aligned UI (built around the RaziaGul identity) |
| Featured on homepage | No |

## Category facets (projects page filter)

Derived from PDF facts, defined in `projectCategories`:

| Facet | Projects |
| --- | --- |
| Mobile Apps | PlugPro ERP, Kartly, Tidyo |
| Web Platforms | IPS Driving School, Raziagul |
| E-Commerce | Kartly, Raziagul |
| Business Software | PlugPro ERP |
| Booking & Scheduling | Tidyo, IPS Driving School |

## Imagery

The five project mockups were extracted from the PDF's embedded images
(`pdfimages`) and optimised to `public/images/projects/*.jpg`. They are the
company's own previews — no stock or generated substitutes are used.
