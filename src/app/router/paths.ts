import { projects } from '@/data/projects'
import { services } from '@/data/services'

/**
 * Every crawlable route of the site, derived from the data files.
 * Adding a project or service here automatically adds its route to the
 * prerender output and the generated sitemap.
 */
export const ROUTE_PATHS: string[] = [
  '/',
  '/about',
  '/services',
  ...services.map((s) => `/services/${s.slug}`),
  '/projects',
  ...projects.map((p) => `/projects/${p.slug}`),
  '/contact',
]
