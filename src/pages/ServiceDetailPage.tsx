import { useParams, Navigate, Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/head/Seo'
import { getServiceBySlug } from '@/data/services'
import { getProjectBySlug } from '@/data/projects'
import { Reveal, Section } from '@/components/common/Section'
import { ContactCTA } from '@/components/common/ContactCTA'
import { ProjectCard } from '@/components/common/ProjectCard'
import { Tag } from '@/components/ui/Links'

/** Breadcrumb trail, shared by service and project detail pages. */
export function Breadcrumbs({
  items,
}: {
  items: { label: string; href?: string }[]
}) {
  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex flex-wrap items-center gap-2 text-sm text-ink-muted">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-2">
            {item.href ? (
              <Link to={item.href} className="transition-colors hover:text-brand-deep">
                {item.label}
              </Link>
            ) : (
              <span aria-current="page" className="font-medium text-ink">
                {item.label}
              </span>
            )}
            {i < items.length - 1 && (
              <span aria-hidden="true" className="text-ink-faint">
                /
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

/**
 * Service detail pages — one data-driven component; each service gets
 * a distinct tinted hero band and accent while sharing the brand system.
 */
export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const service = slug ? getServiceBySlug(slug) : undefined
  if (!service) return <Navigate to="/services" replace />

  const related = service.relatedProjects
    .map((s) => getProjectBySlug(s))
    .filter((p): p is NonNullable<typeof p> => Boolean(p))

  const tint =
    service.id === 'web' ? 'bg-brand-tint' : service.id === 'mobile' ? 'bg-mist' : 'bg-[#F2F4F6] dark:bg-mist'
  const indexLabel = `Service ${service.index}`

  const breadcrumbs = [
    { label: 'Home', href: '/' },
    { label: 'Services', href: '/services' },
    { label: service.name },
  ]

  return (
    <>
      <Seo
        title={service.name}
        description={service.shortDescription}
        path={`/services/${service.slug}`}
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            name: service.name,
            serviceType: service.name,
            description: service.shortDescription,
            provider: { '@type': 'Organization', name: 'Talentix Labs' },
          },
        ]}
      />

      {/* Hero band — tint varies per service */}
      <section className={`${tint} border-b border-line`}>
        <div className="shell py-12 lg:py-16">
          <Breadcrumbs items={breadcrumbs} />
          <div className="mt-8 grid gap-8 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Reveal>
                <p className="flex items-baseline gap-4 text-xs font-semibold uppercase tracking-[0.16em] text-ink-muted">
                  <span className="text-brand">{service.index}</span>
                  {indexLabel}
                </p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display mt-4 max-w-3xl text-display-xl text-balance">
                  {service.name}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
                  {service.intro[0]}
                </p>
              </Reveal>
            </div>
            <div className="flex items-end lg:col-span-4">
              <Reveal delay={0.15}>
                <div className="rounded-xl border border-line bg-paper p-6">
                  <h2 className="eyebrow">Stack</h2>
                  <div className="mt-4 space-y-3">
                    {service.stack.map((g) => (
                      <div key={g.group} className="flex flex-wrap items-baseline gap-2">
                        <span className="w-20 shrink-0 text-xs font-semibold uppercase tracking-wider text-ink-muted">
                          {g.group}
                        </span>
                        <span className="text-[0.92rem] font-medium text-ink">
                          {g.items.join(' · ')}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* What we build */}
      <Section>
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <h2 className="display text-display-lg">
              {service.id === 'ai' ? 'What we automate' : 'What we build'}
            </h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {service.capabilities.map((c, i) => (
              <Reveal key={c.title} delay={(i % 2) * 0.05}>
                <div className="border-t border-line py-6">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold tracking-widest text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="text-[1.05rem] font-semibold text-ink">{c.title}</h3>
                  </div>
                  <p className="mt-2.5 leading-relaxed text-ink-soft md:pl-9">
                    {c.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Problems we solve */}
      <Section tone="mist" className="border-y border-line">
        <div className="shell py-16 lg:py-24">
          <div className="grid gap-10 lg:grid-cols-12">
            <div className="lg:col-span-4">
              <div className="lg:sticky lg:top-28">
                <Reveal>
                  <p className="eyebrow">Business problems we solve</p>
                </Reveal>
                <Reveal delay={0.06}>
                  <h2 className="display mt-4 text-display-md">
                    Sound familiar?
                  </h2>
                </Reveal>
                <Reveal delay={0.1}>
                  <p className="mt-4 leading-relaxed text-ink-soft">
                    These are the situations where this service usually
                    starts. Yours may be one of them — or close enough that
                    the same approach applies.
                  </p>
                </Reveal>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="grid gap-5 sm:grid-cols-2">
                {service.problems.map((p, i) => (
                  <Reveal key={p.title} delay={i * 0.05}>
                    <figure className="flex h-full flex-col rounded-xl border border-line bg-paper p-6">
                      <blockquote className="display text-[1.15rem] leading-snug text-ink">
                        “{p.title.replace(/^[“”]+|[“”]+$/g, '')}”
                      </blockquote>
                      <figcaption className="mt-3 flex-1 text-sm leading-relaxed text-ink-soft">
                        {p.description}
                      </figcaption>
                    </figure>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Approach */}
      <Section>
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <h2 className="display max-w-2xl text-display-lg">
              How we approach{' '}
              {service.id === 'ai' ? 'an automation project' : 'the build'}
              <span className="text-brand">.</span>
            </h2>
          </Reveal>
          <ol className="mt-10 border-t border-line">
            {service.approach.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.04}>
                  <div className="grid gap-3 border-b border-line py-7 sm:grid-cols-[7rem_16rem_1fr] sm:items-baseline sm:gap-8">
                    <span className="display text-[1.9rem] leading-none text-brand/80">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display text-[1.3rem] text-ink">{step.title}</h3>
                    <p className="leading-relaxed text-ink-soft">{step.description}</p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Section>

      {/* Second intro paragraph as a quiet editorial interlude */}
      {service.intro[1] && (
        <Section tone="tint" className="border-y border-brand-linetint">
          <div className="shell py-14 lg:py-16">
            <Reveal>
              <p className="display mx-auto max-w-3xl text-center text-display-md leading-[1.4] text-ink text-balance">
                {service.intro[1].split('.')[0]}
                <span className="text-brand">.</span>
              </p>
            </Reveal>
          </div>
        </Section>
      )}

      {/* Related completed projects */}
      {related.length > 0 && (
        <Section>
          <div className="shell py-16 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <h2 className="display text-display-lg">Completed work in this area</h2>
              </Reveal>
              <Reveal delay={0.08}>
                <Link
                  to="/projects"
                  className="group inline-flex items-center gap-2 text-[0.95rem] font-semibold text-brand-deep hover:text-brand-dark"
                >
                  All projects
                  <ArrowRight
                    className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                    strokeWidth={2.2}
                    aria-hidden="true"
                  />
                </Link>
              </Reveal>
            </div>
            <div
              className={`mt-10 grid gap-6 md:grid-cols-2 ${
                related.length > 2 ? 'lg:grid-cols-3' : ''
              }`}
            >
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Technologies, restated */}
      <Section tone="mist" className="border-t border-line">
        <div className="shell py-12">
          <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
            <span className="eyebrow mr-2">We work with</span>
            {service.stack.flatMap((g) => g.items).map((item) => (
              <Tag key={item}>{item}</Tag>
            ))}
            <span className="text-sm text-ink-faint">
              — always matched to the project, never to a trend.
            </span>
          </div>
        </div>
      </Section>

      <ContactCTA
        title={`Considering ${service.name.toLowerCase()}?`}
        copy="Tell us what the business needs. We’ll map the options, explain the trade-offs in plain language, and give you a realistic picture of scope and effort."
      />
    </>
  )
}
