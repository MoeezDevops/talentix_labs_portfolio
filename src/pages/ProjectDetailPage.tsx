import { Link, useParams, Navigate } from 'react-router-dom'
import { ArrowRight, ExternalLink, CheckCircle2 } from 'lucide-react'
import { Seo } from '@/head/Seo'
import { getProjectBySlug, projects } from '@/data/projects'
import { Reveal, Section } from '@/components/common/Section'
import { Breadcrumbs } from '@/pages/ServiceDetailPage'
import { ContactCTA } from '@/components/common/ContactCTA'
import { ProjectCard } from '@/components/common/ProjectCard'
import { Tag, ExternalLink as ExtLink } from '@/components/ui/Links'
import { SITE_URL } from '@/config/site'
import type { Project } from '@/types'

/** CreativeWork / SoftwareApplication structured data for a project. */
function projectJsonLd(p: Project): Record<string, unknown> {
  const base: Record<string, unknown> = {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: p.title,
    description: p.shortDescription,
    applicationCategory: p.category,
    author: { '@type': 'Organization', name: 'Talentix Labs' },
  }
  if (SITE_URL) {
    base.url = `${SITE_URL}/projects/${p.slug}`
    base.image = `${SITE_URL}${p.thumbnail}`
  }
  return base
}

function BreadcrumbLd(p: Project) {
  const crumbs = [
    { position: 1, name: 'Home', item: SITE_URL ? `${SITE_URL}/` : undefined },
    { position: 2, name: 'Projects', item: SITE_URL ? `${SITE_URL}/projects` : undefined },
    { position: 3, name: p.title, item: SITE_URL ? `${SITE_URL}/projects/${p.slug}` : undefined },
  ].filter((c) => c.item)
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: crumbs.map((c) => ({
      '@type': 'ListItem',
      position: c.position,
      name: c.name,
      item: c.item,
    })),
  }
}

export default function ProjectDetailPage() {
  const { slug } = useParams<{ slug: string }>()
  const project = slug ? getProjectBySlug(slug) : undefined
  if (!project) return <Navigate to="/projects" replace />

  const related = projects
    .filter((p) => p.slug !== project.slug && p.categories.some((c) => project.categories.includes(c)))
    .slice(0, 3)

  const index = projects.findIndex((p) => p.slug === project.slug)
  const next = projects[(index + 1) % projects.length]

  return (
    <>
      <Seo
        title={`${project.title} — ${project.category}`}
        description={project.shortDescription}
        path={`/projects/${project.slug}`}
        image={project.thumbnail}
        jsonLd={[projectJsonLd(project), BreadcrumbLd(project)]}
      />

      {/* Hero */}
      <section className="border-b border-line bg-mist">
        <div className="shell py-12 lg:py-16">
          <Breadcrumbs
            items={[
              { label: 'Home', href: '/' },
              { label: 'Projects', href: '/projects' },
              { label: project.title },
            ]}
          />
          <div className="mt-10 grid items-center gap-10 lg:grid-cols-12 lg:gap-14">
            <div className="lg:col-span-5">
              <Reveal>
                <p className="eyebrow">{project.category}</p>
              </Reveal>
              <Reveal delay={0.06}>
                <h1 className="display mt-4 text-display-xl text-balance">
                  {project.title}
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">
                  {project.overview}
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <div className="mt-6 flex flex-wrap gap-1.5">
                  {project.technologies.map((t) => (
                    <Tag key={t}>{t}</Tag>
                  ))}
                </div>
              </Reveal>
              {(project.githubUrl || project.liveUrl) && (
                <Reveal delay={0.2}>
                  <div className="mt-7 flex flex-wrap items-center gap-5">
                    {project.liveUrl && (
                      <ExtLink href={project.liveUrl}>
                        <span className="inline-flex items-center gap-2">
                          <ExternalLink className="h-4 w-4" aria-hidden="true" />
                          View live project
                        </span>
                      </ExtLink>
                    )}
                    {project.githubUrl && (
                      <ExtLink href={project.githubUrl}>Source on GitHub</ExtLink>
                    )}
                  </div>
                </Reveal>
              )}
            </div>
            <div className="lg:col-span-7">
              <Reveal delay={0.1}>
                <figure className="overflow-hidden rounded-xl border border-line bg-paper">
                  <img
                    src={project.thumbnail}
                    alt={project.thumbnailAlt}
                    width={1600}
                    height={1000}
                    className="aspect-[16/10] w-full object-cover"
                  />
                </figure>
                <figcaption className="mt-3 text-xs text-ink-faint">
                  {project.title} — project preview
                </figcaption>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <Section>
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-3">
            <div className="lg:sticky lg:top-28">
              <Reveal>
                <p className="eyebrow">Project overview</p>
              </Reveal>
              <Reveal delay={0.08}>
                <dl className="mt-6 space-y-4 text-sm">
                  <div>
                    <dt className="font-semibold uppercase tracking-wider text-ink-faint text-xs">Type</dt>
                    <dd className="mt-1 text-ink">{project.category}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wider text-ink-faint text-xs">Sector</dt>
                    <dd className="mt-1 text-ink">{project.sector}</dd>
                  </div>
                  <div>
                    <dt className="font-semibold uppercase tracking-wider text-ink-faint text-xs">Status</dt>
                    <dd className="mt-1 inline-flex items-center gap-1.5 text-ink">
                      <span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-brand" />
                      Completed
                    </dd>
                  </div>
                </dl>
              </Reveal>
            </div>
          </div>
          <div className="lg:col-span-9">
            <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
              {project.fullDescription.map((p, i) => (
                <Reveal key={i} delay={i * 0.05}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* Problem & solution */}
      <Section tone="navy">
        <div className="shell grid gap-10 py-16 lg:grid-cols-2 lg:gap-14 lg:py-20">
          <Reveal>
            <div className="border-t-2 border-brand pt-7">
              <h2 className="eyebrow text-white/50">The problem</h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-white/75">
                {project.problem}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-t-2 border-white/30 pt-7">
              <h2 className="eyebrow text-white/50">Our solution</h2>
              <p className="mt-5 text-[1.02rem] leading-relaxed text-white/75">
                {project.solution}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Key features */}
      <Section tone="mist" className="border-y border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <h2 className="display text-display-lg">Key features</h2>
          </Reveal>
          <div className="mt-10 grid gap-x-12 gap-y-2 md:grid-cols-2">
            {project.features.map((f, i) => (
              <Reveal key={f.title} delay={(i % 2) * 0.05}>
                <div className="flex items-start gap-4 border-t border-line-strong py-5">
                  <CheckCircle2
                    className="mt-1 h-[1.1rem] w-[1.1rem] shrink-0 text-brand"
                    aria-hidden="true"
                  />
                  <div>
                    <h3 className="text-[1rem] font-semibold text-ink">{f.title}</h3>
                    <p className="mt-1.5 text-[0.92rem] leading-relaxed text-ink-soft">
                      {f.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Gallery — only rendered when real images exist */}
      {project.gallery.length > 0 && (
        <Section>
          <div className="shell py-16 lg:py-20">
            <Reveal>
              <h2 className="display text-display-lg">Gallery</h2>
            </Reveal>
            <div className="mt-10 grid gap-6 sm:grid-cols-2">
              {project.gallery.map((g) => (
                <Reveal key={g.src}>
                  <figure className="overflow-hidden rounded-xl border border-line">
                    <img
                      src={g.src}
                      alt={g.alt}
                      loading="lazy"
                      className="aspect-[16/10] w-full object-cover"
                    />
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Related projects */}
      {related.length > 0 && (
        <Section>
          <div className="shell py-16 lg:py-24">
            <div className="flex flex-wrap items-end justify-between gap-6">
              <Reveal>
                <h2 className="display text-display-lg">Related projects</h2>
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
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <Reveal key={p.slug} delay={i * 0.06}>
                  <ProjectCard project={p} />
                </Reveal>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* Next project */}
      <Link
        to={`/projects/${next.slug}`}
        className="group block border-t border-line bg-mist transition-colors duration-300 hover:bg-brand-tint"
      >
        <div className="shell flex items-center justify-between gap-6 py-10 lg:py-12">
          <div>
            <p className="eyebrow">Next project</p>
            <p className="display mt-2 text-display-md text-ink transition-colors group-hover:text-brand-deep">
              {next.title}
            </p>
          </div>
          <span className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-line-strong bg-paper text-ink transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
            <ArrowRight className="h-5 w-5" aria-hidden="true" />
          </span>
        </div>
      </Link>

      <ContactCTA
        title="Want something like this for your business?"
        copy="Every project here started as a conversation about a business problem. Yours could be next — tell us what you’re trying to solve."
      />
    </>
  )
}
