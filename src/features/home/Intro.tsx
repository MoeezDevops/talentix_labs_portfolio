import { ArrowLink } from '@/components/ui/Links'
import { Reveal } from '@/components/common/Section'

/**
 * Short company introduction — a two-column editorial block with a
 * hanging label, set on the off-white band between hero and services.
 */
export function Intro() {
  return (
    <section className="bg-mist">
      <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
        <div className="lg:col-span-3">
          <Reveal>
            <p className="eyebrow lg:sticky lg:top-28">Who we are</p>
          </Reveal>
        </div>
        <div className="lg:col-span-9">
          <Reveal>
            <p className="display max-w-3xl text-display-md leading-[1.35] text-ink text-balance">
              A technology company that solves business problems with three
              tools: well-built web platforms, useful mobile apps, and
              automation that quietly removes the busywork.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="mt-6 max-w-2xl space-y-4 text-[1.02rem] leading-relaxed text-ink-soft">
              <p>
                Talentix Labs works as a technology partner — we start from
                your requirements, design the shortest path to a working
                product, and build it with modern, maintainable technology.
                The work shown on this site is our own: an AI-powered ERP, a
                mobile shopping app, a booking platform for home services,
                and websites for businesses in the UK and beyond.
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.14}>
            <div className="mt-7">
              <ArrowLink to="/about">More about the company</ArrowLink>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
