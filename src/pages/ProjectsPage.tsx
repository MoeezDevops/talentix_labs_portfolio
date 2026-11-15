import { useMemo, useState } from 'react'
import { Seo } from '@/head/Seo'
import { projects, projectCategories } from '@/data/projects'
import { Reveal, Section } from '@/components/common/Section'
import { ProjectCard } from '@/components/common/ProjectCard'
import { Swoosh } from '@/components/ui/Swoosh'
import { cn } from '@/utils/cn'

/**
 * Full portfolio: every completed project from Portfolio.pdf, with
 * category filtering and a count that always reflects the real data.
 */
export default function ProjectsPage() {
  const [category, setCategory] = useState('All')

  const visible = useMemo(
    () =>
      category === 'All'
        ? projects
        : projects.filter((p) => p.categories.includes(category)),
    [category],
  )

  const countFor = (c: string) =>
    c === 'All' ? projects.length : projects.filter((p) => p.categories.includes(c)).length

  return (
    <>
      <Seo
        title="Projects"
        description="Completed work by Talentix Labs: PlugPro ERP, Kartly, Tidyo, IPS Driving School and Raziagul — mobile apps, web platforms and e-commerce, presented as delivered."
        path="/projects"
        jsonLd={[
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: 'Projects — Talentix Labs',
            description:
              'Completed software projects delivered by Talentix Labs.',
            hasPart: projects.map((p) => ({
              '@type': 'CreativeWork',
              name: p.title,
              description: p.shortDescription,
            })),
          },
        ]}
      />

      {/* Header */}
      <section className="border-b border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">Portfolio</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display mt-5 max-w-4xl text-display-xl text-balance">
              The work speaks{' '}
              <span className="relative inline-block text-brand-deep">
                first
                <Swoosh className="text-brand" />
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              {projects.length} completed projects across mobile apps, web
              platforms and e-commerce. Everything shown here was designed,
              built and delivered by us — presented exactly as it shipped.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Filter + grid */}
      <Section>
        <div className="shell py-14 lg:py-20">
          <div className="flex flex-wrap items-center gap-2" role="group" aria-label="Filter projects by category">
            {projectCategories.map((c) => {
              const active = c === category
              return (
                <button
                  key={c}
                  type="button"
                  onClick={() => setCategory(c)}
                  aria-pressed={active}
                  className={cn(
                    'inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-medium transition-all duration-200',
                    active
                      ? 'border-navy bg-navy text-white dark:border-brand dark:bg-brand'
                      : 'border-line-strong bg-paper text-ink-soft hover:border-ink/40 hover:text-ink',
                  )}
                >
                  {c}
                  <span
                    className={cn(
                      'text-xs',
                      active ? 'text-white/60' : 'text-ink-faint',
                    )}
                  >
                    {countFor(c)}
                  </span>
                </button>
              )
            })}
          </div>

          <p className="mt-6 text-sm text-ink-faint" aria-live="polite">
            Showing {visible.length} {visible.length === 1 ? 'project' : 'projects'}
            {category !== 'All' && <> in “{category}”</>}
          </p>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {visible.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.06}>
                <ProjectCard project={p} />
              </Reveal>
            ))}
          </div>
        </div>
      </Section>
    </>
  )
}
