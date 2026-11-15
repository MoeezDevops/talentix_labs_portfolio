import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { services } from '@/data/services'
import { featuredProjects } from '@/data/projects'

export function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-navy text-white/70 dark:border-t dark:border-line">
      <div className="shell py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-12">
          {/* Brand */}
          <div className="lg:col-span-5">
            <Link to="/" aria-label="Talentix Labs — home" className="inline-block">
              <Logo tone="dark" />
            </Link>
            <p className="mt-5 max-w-sm text-[0.95rem] leading-relaxed">
              A technology company building web applications, cross-platform
              mobile apps and intelligent automation — as a partner to the
              businesses we work with.
            </p>
            <Link
              to={site.cta.href}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-brand transition-colors hover:text-white"
            >
              {site.cta.label}
              <span aria-hidden="true">→</span>
            </Link>
          </div>

          {/* Company */}
          <nav aria-label="Footer — company" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Company
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {site.nav.map((item) => (
                <li key={item.href}>
                  <Link to={item.href} className="transition-colors hover:text-white">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <nav aria-label="Footer — services" className="lg:col-span-2">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Services
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="transition-colors hover:text-white">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Selected work */}
          <nav aria-label="Footer — selected work" className="lg:col-span-3">
            <h2 className="text-xs font-semibold uppercase tracking-[0.16em] text-white/40">
              Selected work
            </h2>
            <ul className="mt-4 space-y-2.5 text-[0.95rem]">
              {featuredProjects.map((p) => (
                <li key={p.slug}>
                  <Link
                    to={`/projects/${p.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {p.title}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/projects" className="text-brand transition-colors hover:text-white">
                  All projects →
                </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mt-14 flex flex-col gap-3 border-t border-navy-line pt-6 text-sm text-white/40 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {site.name}. All rights reserved.</p>
          <p className="text-xs uppercase tracking-[0.14em]">
            Web · Mobile · AI Automation
          </p>
        </div>
      </div>
    </footer>
  )
}
