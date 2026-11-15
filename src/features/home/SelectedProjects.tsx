import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/types'
import { featuredProjects } from '@/data/projects'
import { Reveal, Section, SectionHeading } from '@/components/common/Section'
import { ArrowLink, Tag } from '@/components/ui/Links'
import { cn } from '@/utils/cn'

/**
 * Selected projects as alternating editorial showcases — large imagery,
 * generous text columns and a different rhythm per row, drawn from the
 * real completed work in Portfolio.pdf.
 */
function Showcase({
  project,
  index,
  flip = false,
}: {
  project: Project
  index: number
  flip?: boolean
}) {
  return (
    <Reveal>
      <article className="grid items-center gap-8 lg:grid-cols-12 lg:gap-12">
        <div
          className={cn(
            'lg:col-span-7',
            flip ? 'lg:order-2' : 'lg:order-1',
          )}
        >
          <Link
            to={`/projects/${project.slug}`}
            className="group block overflow-hidden rounded-xl border border-line bg-mist transition-colors duration-300 hover:border-line-strong"
            aria-label={`View project: ${project.title}`}
          >
            <img
              src={project.thumbnail}
              alt={project.thumbnailAlt}
              loading="lazy"
              width={1600}
              height={1000}
              className="aspect-[16/10] w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.02]"
            />
          </Link>
        </div>

        <div className={cn('lg:col-span-5', flip ? 'lg:order-1' : 'lg:order-2')}>
          <p className="flex items-baseline gap-4 text-xs font-semibold tracking-widest text-ink-muted">
            <span className="text-brand">{String(index).padStart(2, '0')}</span>
            {project.category}
          </p>
          <h3 className="display mt-3 text-display-md text-ink">
            <Link
              to={`/projects/${project.slug}`}
              className="transition-colors hover:text-brand-deep"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-4 leading-relaxed text-ink-soft">
            {project.shortDescription}
          </p>
          <div className="mt-5 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 4).map((t) => (
              <Tag key={t}>{t}</Tag>
            ))}
          </div>
          <div className="mt-6">
            <ArrowLink to={`/projects/${project.slug}`} tone="dark">
              View case study
            </ArrowLink>
          </div>
        </div>
      </article>
    </Reveal>
  )
}

export function SelectedProjects() {
  return (
    <Section tone="paper">
      <div className="shell py-20 lg:py-28">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <SectionHeading
            index="02"
            eyebrow="Selected work"
            title="Built for real businesses, already in use."
          />
          <Reveal delay={0.1}>
            <ArrowLink to="/projects">All projects</ArrowLink>
          </Reveal>
        </div>

        <div className="mt-14 space-y-20 lg:space-y-28">
          {featuredProjects.map((p, i) => (
            <Showcase key={p.slug} project={p} index={i + 1} flip={i % 2 === 1} />
          ))}
        </div>

        <Reveal>
          <div className="mt-16 border-t border-line pt-8">
            <Link
              to="/projects"
              className="group inline-flex items-center gap-3 text-lg font-semibold text-ink transition-colors hover:text-brand-deep"
            >
              Explore the full portfolio
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong transition-all duration-300 group-hover:border-brand group-hover:bg-brand group-hover:text-white">
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </span>
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  )
}
