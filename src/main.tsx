import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { AppProviders } from '@/app/providers/AppProviders'
import { AppRoutes } from '@/app/router/AppRoutes'
import { getPageLoaders, ensurePagesLoaded } from '@/app/router/loaders'
import '@/styles/index.css'

const container = document.getElementById('root')

const app = (
  <StrictMode>
    <BrowserRouter>
      <AppProviders>
        <AppRoutes pages={getPageLoaders()} />
      </AppProviders>
    </BrowserRouter>
  </StrictMode>
)

async function boot() {
  if (!container) throw new Error('Missing #root element')
  // Warm every lazy page module first: hydrating against a suspended
  // root would replace the prerendered HTML with the Suspense fallback.
  await ensurePagesLoaded()
  // Prerendered pages hydrate in place; a bare dev index.html creates a root.
  if (container.hasChildNodes()) {
    hydrateRoot(container, app)
  } else {
    createRoot(container).render(app)
  }
}

void boot()
