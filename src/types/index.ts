import type { ContactConfig, NavLinkItem } from '@/config/site'

export type { ContactConfig, NavLinkItem }

/** A completed project, extracted from Portfolio.pdf.
 *  Every field is sourced from the PDF; unknown values stay `null`
 *  and are simply not rendered. */
export interface Project {
  id: string
  title: string
  slug: string
  /** One-line summary for cards. */
  shortDescription: string
  /** Lead paragraph shown under the title on the detail page. */
  overview: string
  /** Body paragraphs for the detail page. */
  fullDescription: string[]
  /** Display label, e.g. "Mobile ERP Platform". */
  category: string
  /** Filter facets used by the projects page. */
  categories: string[]
  sector: string
  /** PDF-confirmed capability tags — no assumed frameworks. */
  technologies: string[]
  features: { title: string; description: string }[]
  problem: string
  solution: string
  thumbnail: string
  thumbnailAlt: string
  gallery: { src: string; alt: string }[]
  githubUrl: string | null
  liveUrl: string | null
  featured: boolean
}

export interface ServiceCapability {
  title: string
  description: string
}

export interface Service {
  id: 'web' | 'mobile' | 'ai'
  index: string
  name: string
  slug: string
  /** One-liner for overview rows. */
  shortDescription: string
  /** Detail-page lead + body paragraphs. */
  intro: string[]
  capabilities: ServiceCapability[]
  /** Challenges this service addresses. */
  problems: ServiceCapability[]
  /** Technology groups, exactly as offered by the company. */
  stack: { group: string; items: string[] }[]
  /** How we deliver this service. */
  approach: ServiceCapability[]
  /** Slugs of completed projects shown on the detail page. */
  relatedProjects: string[]
}

export interface Principle {
  title: string
  description: string
}

export interface ProcessStep {
  index: string
  title: string
  description: string
}

export interface Insight {
  /** Demo entries for the insights layout — clearly labelled in the UI. */
  id: string
  title: string
  excerpt: string
  topic: string
  sample: true
}
