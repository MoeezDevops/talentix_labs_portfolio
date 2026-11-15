import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { site } from '@/config/site'
import { services } from '@/data/services'
import { featuredProjects } from '@/data/projects'
import { Button } from '@/components/ui/Button'
import { Swoosh } from '@/components/ui/Swoosh'

/**
 * The hero. Left: the company statement. Right: the featured project
 * from the portfolio — real work, not decoration. Static composition:
 * the entrance is CSS-only, so the page paints instantly, with or
 * without JavaScript.
 */
export function Hero() {
  const featured = featuredProjects[0]

  return (
    <section className="relative isolate border-b border-line">
      {/* Soft brand glow — barely there in light, a little more in dark. */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(52rem_26rem_at_88%_-8%,rgb(var(--c-brand)/0.10),transparent_65%)] dark:bg-[radial-gradient(52rem_28rem_at_88%_-8%,rgb(var(--c-brand)/0.16),transparent_65%)]"
      />
      <div className="shell grid gap-14 pb-16 pt-14 lg:grid-cols-12 lg:gap-10 lg:pb-24 lg:pt-20">
        {/* Statement */}
        <div className="lg:col-span-7 lg:pr-10">
          <p
            className="eyebrow animate-fade-up"
            style={{ animationDelay: '0.05s' }}
          >
            Software development · Intelligent automation
          </p>

          <h1
            className="display mt-6 text-display-xl animate-fade-up text-balance"
            style={{ animationDelay: '0.12s' }}
          >
            Software that moves
            <br />
            business{' '}
            <span className="relative inline-block text-brand-deep">
              forward
              <Swoosh className="text-brand" />
            </span>
            .
          </h1>

          <p
            className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft animate-fade-up"
            style={{ animationDelay: '0.2s' }}
          >
            {site.name} builds web applications, cross-platform mobile apps
            and AI-powered automation for businesses that want to move
            faster — as a technology partner, not just a supplier.
          </p>

          <div
            className="mt-9 flex flex-wrap items-center gap-4 animate-fade-up"
            style={{ animationDelay: '0.28s' }}
          >
            <Button to={site.cta.href} size="lg">
              {site.cta.label}
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/projects" size="lg" variant="outline">
              See our work
            </Button>
          </div>

          {/* Service index — a quiet table of contents for the three practices. */}
          <div
            className="mt-12 max-w-xl animate-fade-up border-t border-line"
            style={{ animationDelay: '0.36s' }}
          >
            {services.map((s) => (
              <Link
                key={s.slug}
                to={`/services/${s.slug}`}
                className="group flex items-baseline gap-5 border-b border-line py-3.5 transition-colors duration-200 hover:bg-mist"
              >
                <span className="text-xs font-semibold tracking-widest text-brand">
                  {s.index}
                </span>
                <span className="text-[0.95rem] font-semibold text-ink transition-colors group-hover:text-brand-deep">
                  {s.name}
                </span>
                <ArrowRight
                  className="ml-auto h-4 w-4 shrink-0 self-center text-ink-faint transition-all duration-300 group-hover:translate-x-1 group-hover:text-brand"
                  aria-hidden="true"
                />
              </Link>
            ))}
          </div>
        </div>

        {/* Featured work */}
        <div
          className="lg:col-span-5 animate-fade-up"
          style={{ animationDelay: '0.3s' }}
        >
          <Link
            to={`/projects/${featured.slug}`}
            className="group block rounded-xl border border-line bg-paper transition-colors duration-300 hover:border-line-strong"
            aria-label={`Featured project: ${featured.title}`}
          >
            <div className="relative overflow-hidden rounded-t-xl bg-mist">
              <img
                src={featured.thumbnail}
                alt={featured.thumbnailAlt}
                width={1600}
                height={900}
                className="aspect-[16/11] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
              />
            </div>
            <div className="flex items-center justify-between gap-4 border-t border-line px-5 py-4">
              <div>
                <p className="text-[0.68rem] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  Featured work
                </p>
                <p className="mt-1 text-sm font-semibold text-ink">
                  {featured.title} — {featured.category}
                </p>
              </div>
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-line-strong text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
