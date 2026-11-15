import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import { AppProviders } from '@/app/providers/AppProviders'
import { AppRoutes } from '@/app/router/AppRoutes'
import { HeadProvider, type HeadTag } from '@/head/Seo'

// Eager imports: a synchronous renderToString cannot wait on dynamic
// imports, so the prerender entry always uses real components.
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ServicesPage from '@/pages/ServicesPage'
import ServiceDetailPage from '@/pages/ServiceDetailPage'
import ProjectsPage from '@/pages/ProjectsPage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'
import ContactPage from '@/pages/ContactPage'
import NotFoundPage from '@/pages/NotFoundPage'

const pages = {
  Home: HomePage,
  About: AboutPage,
  Services: ServicesPage,
  ServiceDetail: ServiceDetailPage,
  Projects: ProjectsPage,
  ProjectDetail: ProjectDetailPage,
  Contact: ContactPage,
  NotFound: NotFoundPage,
}

/**
 * SSR entry consumed by scripts/prerender.mjs.
 * Renders a route to HTML and collects the page's head tags.
 * The provider tree mirrors main.tsx exactly — hydration requires
 * both sides to agree on context as well as DOM.
 */
export function render(url: string): { html: string; head: HeadTag[] } {
  const head: HeadTag[] = []

  const html = renderToString(
    <StaticRouter location={url}>
      <AppProviders>
        <HeadProvider onTag={(tag) => head.push(tag)}>
          <AppRoutes pages={pages} />
        </HeadProvider>
      </AppProviders>
    </StaticRouter>,
  )

  return { html, head }
}

export { ROUTE_PATHS } from '@/app/router/paths'
