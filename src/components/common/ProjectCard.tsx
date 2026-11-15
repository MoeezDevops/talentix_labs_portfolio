import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import type { Project } from '@/types'
import { Tag } from '@/components/ui/Links'

/**
 * Editorial project card for grid layouts. The mockup image sits on a
 * white panel behind a hairline border — no shadows, no glow.
 */
export function ProjectCard({
  project,
  aspect = 'aspect-[16/10]',
}: {
  project: Project
  aspect?: string
}) {
  return (
    <Link
      to={`/projects/${project.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-xl border border-line bg-paper transition-all duration-300 ease-out hover:border-line-strong focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60"
    >
      <div className={`relative overflow-hidden bg-paper ${aspect}`}>
        <img
          src={project.thumbnail}
          alt={project.thumbnailAlt}
          loading="lazy"
          width={1600}
          height={1000}
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
      </div>
      <div className="flex flex-1 flex-col border-t border-line p-6">
        <p className="eyebrow text-[0.68rem]">{project.category}</p>
        <h3 className="display mt-2 text-[1.35rem] leading-snug text-ink">
          {project.title}
        </h3>
        <p className="mt-2.5 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
          {project.shortDescription}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.technologies.slice(0, 3).map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
          {project.technologies.length > 3 && (
            <Tag>+{project.technologies.length - 3}</Tag>
          )}
        </div>
        <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-brand-deep">
          View project
          <ArrowRight
            className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
            strokeWidth={2.2}
            aria-hidden="true"
          />
        </span>
      </div>
    </Link>
  )
}
