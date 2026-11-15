import { insights } from '@/data/company'
import { Reveal, Section, SectionHeading } from '@/components/common/Section'

/**
 * Insights layout with clearly-labelled sample entries. No fake
 * articles are presented as company content — the badge and the note
 * say exactly what this is, and cards intentionally do not link.
 */
export function Insights() {
  return (
    <Section>
      <div className="shell py-20 lg:py-28">
        <SectionHeading
          index="05"
          eyebrow="Notes & insights"
          title="We write about how we build."
          lead="Short, practical notes on planning, mobile flows and automation — the things we think about between projects."
        />

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {insights.map((post, i) => (
            <Reveal key={post.id} delay={i * 0.06}>
              <article className="flex h-full flex-col rounded-xl border border-line bg-paper p-7 transition-colors duration-300 hover:border-line-strong">
                <div className="flex items-center justify-between gap-3">
                  <p className="eyebrow text-[0.66rem]">{post.topic}</p>
                  <span className="rounded-full border border-brand-linetint bg-brand-tint px-2.5 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wider text-brand-deep">
                    Sample
                  </span>
                </div>
                <h3 className="display mt-4 text-[1.3rem] leading-snug text-ink">
                  {post.title}
                </h3>
                <p className="mt-3 flex-1 text-[0.92rem] leading-relaxed text-ink-soft">
                  {post.excerpt}
                </p>
                <p className="mt-6 border-t border-line pt-4 text-xs text-ink-faint">
                  Demonstration content — will link to published articles.
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
