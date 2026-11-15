import { lazy, type ComponentType } from 'react'
import type { LazyExoticComponent } from 'react'

/**
 * Page registry.
 *
 * Client: pages are code-split via lazy() and matched through
 * `getPageLoaders()`.
 * Server (prerender): the same pages are imported eagerly in
 * entry-server.tsx — a synchronous renderToString can't wait on
 * dynamic imports, so the server always has real components.
 */
const modules = {
  Home: () => import('@/pages/HomePage'),
  About: () => import('@/pages/AboutPage'),
  Services: () => import('@/pages/ServicesPage'),
  ServiceDetail: () => import('@/pages/ServiceDetailPage'),
  Projects: () => import('@/pages/ProjectsPage'),
  ProjectDetail: () => import('@/pages/ProjectDetailPage'),
  Contact: () => import('@/pages/ContactPage'),
  NotFound: () => import('@/pages/NotFoundPage'),
} satisfies Record<string, () => Promise<{ default: ComponentType }>>

export type PageKey = keyof typeof modules
export type PageMap = Record<PageKey, ComponentType>

let loaders: Record<PageKey, LazyExoticComponent<ComponentType>> | null = null

/** Lazily-loaded pages for the client bundle (route-level code splitting). */
export function getPageLoaders(): PageMap {
  if (!loaders) {
    loaders = {
      Home: lazy(modules.Home),
      About: lazy(modules.About),
      Services: lazy(modules.Services),
      ServiceDetail: lazy(modules.ServiceDetail),
      Projects: lazy(modules.Projects),
      ProjectDetail: lazy(modules.ProjectDetail),
      Contact: lazy(modules.Contact),
      NotFound: lazy(modules.NotFound),
    }
  }
  return loaders
}

/**
 * Resolves every page module. Called once before hydration so the lazy
 * components render synchronously on the first pass — otherwise a
 * root-level Suspense would swap the prerendered HTML for its fallback
 * and break hydration (React #418).
 */
export async function ensurePagesLoaded(): Promise<void> {
  await Promise.all(Object.values(modules).map((load) => load()))
}
