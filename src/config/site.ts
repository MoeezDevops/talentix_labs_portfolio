/** Company-level content. Everything here is either taken from the
 *  company logo / Portfolio.pdf / the project brief — nothing invented.
 *  Unknown values (contact details, social links) are `null` and the UI
 *  renders conditionally around them. */

export interface NavLinkItem {
  label: string
  href: string
}

export interface ContactConfig {
  /** Set a real address here or via VITE_CONTACT_EMAIL to enable the
   *  mailto hand-off on the contact form. Kept empty → the form clearly
   *  labels itself as a frontend demonstration. */
  email: string | null
  phone: string | null
  location: string | null
  social: { label: string; href: string }[]
}

export const site = {
  name: 'Talentix Labs',
  shortName: 'Talentix',
  tagline: 'Software that moves business forward',
  description:
    'Talentix Labs is a technology company building web applications, cross-platform mobile apps and AI-powered automation for businesses that want to move faster.',
  // Production origin, injected at build time (VITE_SITE_URL).
  // When empty, canonical/og:url tags and the generated sitemap omit the
  // host — see docs/seo-guide.md.
  siteUrl: (import.meta.env.VITE_SITE_URL as string | undefined) ?? '',
  nav: [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Services', href: '/services' },
    { label: 'Projects', href: '/projects' },
    { label: 'Contact', href: '/contact' },
  ] as NavLinkItem[],
  cta: { label: 'Start a project', href: '/contact' },
  contact: {
    email: null,
    phone: null,
    location: null,
    social: [],
  } as ContactConfig,
}

export const SITE_URL = site.siteUrl.replace(/\/$/, '')

export function absoluteUrl(path: string): string {
  if (!SITE_URL) return path
  return path.startsWith('http') ? path : `${SITE_URL}${path}`
}
