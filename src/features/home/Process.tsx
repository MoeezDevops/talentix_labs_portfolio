import { processSteps } from '@/data/company'
import { Reveal, Section, SectionHeading } from '@/components/common/Section'

/**
 * The working process: a sticky heading on the left and a numbered
 * vertical ledger on the right — deliberate, calm, and readable.
 */
export function Process() {
  return (
    <Section tone="mist" className="border-b border-line">
      <div className="shell py-20 lg:py-28">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4">
            <div className="lg:sticky lg:top-28">
              <SectionHeading
                index="04"
                eyebrow="How we work"
                title="A process you can plan around."
                lead="Six deliberate stages, from first conversation to delivered product. You always know where the project stands and what happens next."
              />
            </div>
          </div>

          <div className="lg:col-span-8">
            <ol className="border-t border-line">
              {processSteps.map((step, i) => (
                <li key={step.index}>
                  <Reveal delay={i * 0.04}>
                    <div className="group grid grid-cols-[auto_1fr] items-baseline gap-6 border-b border-line py-6 sm:grid-cols-[5.5rem_14rem_1fr] sm:gap-8 sm:py-7">
                      <span className="display text-[2rem] leading-none text-brand/80 transition-colors duration-300 group-hover:text-brand">
                        {step.index}
                      </span>
                      <h3 className="display text-[1.3rem] text-ink">
                        {step.title}
                      </h3>
                      <p className="col-span-2 leading-relaxed text-ink-soft sm:col-span-1">
                        {step.description}
                      </p>
                    </div>
                  </Reveal>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </Section>
  )
}
