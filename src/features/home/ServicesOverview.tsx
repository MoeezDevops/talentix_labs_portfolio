import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { services } from '@/data/services'
import { Reveal, Section, SectionHeading } from '@/components/common/Section'

/**
 * Services presented as numbered editorial rows — one full-width band
 * per practice, not three identical cards. Each row: index, name,
 * description, capability list and a quiet arrow affordance.
 */
export function ServicesOverview() {
  return (
    <Section className="border-b border-line">
      <div className="shell py-20 lg:py-28">
        <SectionHeading
          index="01"
          eyebrow="What we do"
          title={
            <>
              Three practices, one standard:{' '}
              <span className="text-brand-deep">build it properly.</span>
            </>
          }
          lead="Web development on the MERN stack, cross-platform mobile apps with Flutter and Firebase, and AI automation that connects the systems a business already runs."
        />

        <div className="mt-14 border-t border-line">
          {services.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <Link
                to={`/services/${s.slug}`}
                className="group grid gap-6 border-b border-line py-10 transition-colors duration-300 hover:bg-mist/70 lg:grid-cols-12 lg:gap-8 lg:py-12"
              >
                <div className="lg:col-span-1">
                  <span className="text-sm font-semibold tracking-widest text-brand">
                    {s.index}
                  </span>
                </div>
                <div className="lg:col-span-5">
                  <h3 className="display text-display-md text-ink transition-colors duration-200 group-hover:text-brand-deep">
                    {s.name}
                  </h3>
                  <p className="mt-3 max-w-md leading-relaxed text-ink-soft">
                    {s.shortDescription}
                  </p>
                </div>
                <div className="lg:col-span-4">
                  <ul className="space-y-2">
                    {s.capabilities.slice(0, 4).map((c) => (
                      <li
                        key={c.title}
                        className="flex items-start gap-2.5 text-[0.92rem] text-ink-soft"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-[0.55rem] h-1 w-3 shrink-0 rounded-full bg-brand/70"
                        />
                        {c.title}
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-start lg:col-span-2 lg:justify-end">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors duration-300 group-hover:text-brand-deep">
                    Explore
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
                      strokeWidth={2.2}
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
