# Brand Guidelines — Talentix Labs

Derived from `company-logo.png` (721×651): a green letter **T** with a dark
**swoosh arrow** sweeping upward through it, above the navy wordmark
**TALENTIX / LABS**, set on a white circular field with a hairline ring.

## Palette

Pixel-sampled from the logo, then extended into a usable scale
(`tailwind.config.ts` → `theme.extend.colors`):

| Token | Hex | Source / use |
| --- | --- | --- |
| `brand` | `#3AAE67` | The logo green. CTAs, links, indices, small marks. **Never a large background.** |
| `brand.dark` | `#237A4A` | Hover state for green buttons/links |
| `brand.deep` | `#1B5E39` | Pressed state, green body text on light backgrounds (AA-contrast) |
| `brand.tint` | `#EDF6F0` | Pale green section background |
| `brand.linetint` | `#CFE8D9` | Hairline borders on tinted sections |
| `ink` | `#1B314E` | Headings — the wordmark navy |
| `ink.soft` | `#42536B` | Body text (≥ 7:1 on white) |
| `ink.muted` / `ink.faint` | `#66758A` / `#8E9AAC` | Secondary text, captions, meta |
| `navy` | `#12233B` | Dark bands (Why-Us, Problem/Solution, CTA, footer) |
| `navy.raised` / `navy.line` | `#1A2E49` / `#2A405C` | Panels and hairlines on navy |
| `paper` | `#FFFFFF` | Main background — the logo is built for white |
| `mist` | `#F7F8F5` | Alternate background (barely-green off-white) |
| `line` / `line.strong` | `#E7EAE6` / `#D7DCD7` | Hairline borders on light |
| `charcoal` | `#343B41` | The swoosh tone — reserved |

### Usage rules

1. **White does the talking.** Sections alternate `paper` / `mist`; colour
   appears through type, hairlines and small marks.
2. **Green is an accent, not a surface.** Full green fills are limited to
   primary buttons and tiny indices/dots.
3. **Navy is the one dark band.** At most one navy section per view plus the
   footer, to give the page rhythm.
4. **No gradients, no glow, no glass, no shadows by default.** Depth comes from
   hairlines (`border-line`) and whitespace.

## Typography

| Role | Font | Notes |
| --- | --- | --- |
| Display / headings | **Fraunces** (variable, serif) | Medium weight, tight tracking. Sizes via `text-display-xl/-lg/-md/-sm` (fluid `clamp()` — no oversized typography) |
| Body / UI | **Instrument Sans** (variable) | 0.92–1.05 rem body, 1.6+ line-height |
| Eyebrow / labels | Instrument Sans | `0.72rem`, semibold, `+0.18em` tracking, uppercase |

Both fonts are self-hosted via Fontsource (`@fontsource-variable/*`) — no font
CDN, no layout shift from late font swaps.

## The swoosh motif

`src/components/ui/Swoosh.tsx` redraws the logo's arrow curve as a **single
underline under one emphasised word per major headline** (e.g. *forward*,
*work*, *move*). One per headline — it is a signature, not a pattern. A very
low-opacity large swoosh also sits in the contact CTA band.

## Logo usage

- `public/logo/company-logo.png` — original file, never modified.
- `src/assets/logo-mark.png` — cropped mark (T + swoosh) with transparency,
  used at 36px beside a typeset wordmark in the header/footer.
- Favicon set (`public/icons/`) generated from the mark.
- On navy surfaces the same lockup renders with the white wordmark.

## Spacing & layout

- Content shell: `max-w-shell` = 76rem (1216px), gutters `px-5 / sm:px-8 / lg:px-10`.
- Section rhythm: `py-20 lg:py-28` for major sections; hero and headers breathe more.
- Editorial devices: numbered sections (`01`–`05`), hairline-separated rows,
  asymmetric 12-column splits (7/5, 8/4), alternating showcase direction.
- Buttons: pill radius, primary green / outline navy / ghost (on navy) variants.
- Images: hairline border + 8px radius, hover scale 1.02–1.03 max.

## Motion

- One entrance language: fade-up 14px, 600ms, `cubic-bezier(0.22, 1, 0.36, 1)`,
  fires once via `Reveal` (Framer Motion `whileInView`).
- `MotionConfig reducedMotion="user"` honours the OS preference; CSS media
  queries plus a `<noscript>` rule keep all content visible without JS or with
  reduced motion.
- No parallax, no floating elements, no looping animation anywhere.
