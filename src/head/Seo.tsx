import { createContext, useContext, useEffect, type ReactNode } from 'react'
import { site, absoluteUrl } from '@/config/site'

/* ------------------------------------------------------------------ types */

export interface HeadTag {
  tag: 'title' | 'meta' | 'link' | 'script'
  attrs: Record<string, string>
  innerHTML?: string
}

interface HeadContextValue {
  push: (tag: HeadTag) => void
}

const HeadContext = createContext<HeadContextValue | null>(null)

/* ----------------------------------------------------------- SEO component */

export interface SeoProps {
  /** Page title. The site name is appended automatically unless present. */
  title: string
  description?: string
  /** Route path, e.g. `/projects/kartly` — used for canonical / og:url. */
  path?: string
  /** Image path (absolute from site root) for social previews. */
  image?: string
  type?: 'website' | 'article'
  /** JSON-LD structured data objects, rendered as scripts. */
  jsonLd?: Record<string, unknown>[]
}

const siteName = site.name

function fullTitle(title: string): string {
  return title.includes(siteName) ? title : `${title} · ${siteName}`
}

/**
 * Per-page metadata. Works in both worlds:
 *  - static prerender: tags are collected through HeadProvider (server)
 *  - client navigation: document.head is updated in an effect
 */
export function Seo({ title, description, path, image, type = 'website', jsonLd }: SeoProps) {
  const ctx = useContext(HeadContext)
  const finalTitle = fullTitle(title)
  const desc = description ?? site.description
  const img = absoluteUrl(image ?? '/images/og-image.png')
  const url = path ? absoluteUrl(path) : undefined

  // Static prerender path — collect tags during render.
  if (ctx) {
    ctx.push({ tag: 'title', attrs: {}, innerHTML: finalTitle })
    ctx.push({ tag: 'meta', attrs: { name: 'description', content: desc } })
    if (url) ctx.push({ tag: 'link', attrs: { rel: 'canonical', href: url } })
    ctx.push({ tag: 'meta', attrs: { property: 'og:title', content: finalTitle } })
    ctx.push({ tag: 'meta', attrs: { property: 'og:description', content: desc } })
    ctx.push({ tag: 'meta', attrs: { property: 'og:type', content: type } })
    ctx.push({ tag: 'meta', attrs: { property: 'og:image', content: img } })
    if (url) ctx.push({ tag: 'meta', attrs: { property: 'og:url', content: url } })
    ctx.push({ tag: 'meta', attrs: { name: 'twitter:title', content: finalTitle } })
    ctx.push({ tag: 'meta', attrs: { name: 'twitter:description', content: desc } })
    ctx.push({ tag: 'meta', attrs: { name: 'twitter:image', content: img } })
    for (const obj of jsonLd ?? []) {
      ctx.push({
        tag: 'script',
        attrs: { type: 'application/ld+json' },
        innerHTML: JSON.stringify(obj),
      })
    }
  }

  // Client navigation path — update the live document.
  useEffect(() => {
    document.title = finalTitle

    const upsert = (attr: 'name' | 'property', key: string, content: string) => {
      let el = document.head.querySelector<HTMLMetaElement>(`meta[${attr}="${key}"]`)
      if (!el) {
        el = document.createElement('meta')
        el.setAttribute(attr, key)
        document.head.appendChild(el)
      }
      el.setAttribute('content', content)
    }

    upsert('name', 'description', desc)
    upsert('property', 'og:title', finalTitle)
    upsert('property', 'og:description', desc)
    upsert('property', 'og:type', type)
    upsert('property', 'og:image', img)
    upsert('name', 'twitter:title', finalTitle)
    upsert('name', 'twitter:description', desc)
    upsert('name', 'twitter:image', img)

    if (url) {
      upsert('property', 'og:url', url)
      let link = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]')
      if (!link) {
        link = document.createElement('link')
        link.setAttribute('rel', 'canonical')
        document.head.appendChild(link)
      }
      link.setAttribute('href', url)
    }

    const added: HTMLScriptElement[] = []
    for (const obj of jsonLd ?? []) {
      const script = document.createElement('script')
      script.setAttribute('type', 'application/ld+json')
      script.textContent = JSON.stringify(obj)
      document.head.appendChild(script)
      added.push(script)
    }
    return () => {
      for (const s of added) s.remove()
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [finalTitle, desc, img, url, type, JSON.stringify(jsonLd ?? [])])

  return null
}

/* --------------------------------------------------------------- providers */

/** Server-only provider used by the prerender entry. */
export function HeadProvider({
  onTag,
  children,
}: {
  onTag: (tag: HeadTag) => void
  children: ReactNode
}) {
  return (
    <HeadContext.Provider value={{ push: onTag }}>{children}</HeadContext.Provider>
  )
}
