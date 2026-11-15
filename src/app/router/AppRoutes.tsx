import { Route, Routes } from 'react-router-dom'
import { Layout } from '@/components/layout/Layout'
import type { PageMap } from './loaders'

/**
 * Route table. `pages` is the page registry — lazy on the client,
 * eager in the prerender entry.
 */
export function AppRoutes({ pages }: { pages: PageMap }) {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<pages.Home />} />
        <Route path="/about" element={<pages.About />} />
        <Route path="/services" element={<pages.Services />} />
        <Route path="/services/:slug" element={<pages.ServiceDetail />} />
        <Route path="/projects" element={<pages.Projects />} />
        <Route path="/projects/:slug" element={<pages.ProjectDetail />} />
        <Route path="/contact" element={<pages.Contact />} />
        <Route path="*" element={<pages.NotFound />} />
      </Route>
    </Routes>
  )
}
