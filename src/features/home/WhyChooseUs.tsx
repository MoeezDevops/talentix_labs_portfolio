import { principles } from '@/data/company'
import { Reveal, Section, SectionHeading } from '@/components/common/Section'

/**
 * "Why choose us" — set as a navy band for rhythm: white serif type,
 * hairline separators and green indices. No invented statistics;
 * the content describes how we work.
 */
export function WhyChooseUs() {
  return (
    <Section tone="navy">
      <div className="shell py-20 lg:py-28">
        <SectionHeading
          index="03"
          eyebrow="Why Talentix Labs"
          tone="dark"
          title={
            <span className="text-white">
              The difference is in how we work —{' '}
              <span className="text-brand">not just what we build.</span>
            </span>
          }
          lead="A partner that understands business requirements first, develops thoughtfully, and ships solutions that stay maintainable long after launch."
        />

        <div className="mt-14 grid gap-x-12 gap-y-2 md:grid-cols-2">
          {principles.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.06}>
              <div className="border-t border-navy-line py-7">
                <div className="flex items-baseline gap-4">
                  <span className="text-sm font-semibold tracking-widest text-brand">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="display text-[1.35rem] text-white">{p.title}</h3>
                </div>
                <p className="mt-3 pl-0 leading-relaxed text-white/60 md:pl-9">
                  {p.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
