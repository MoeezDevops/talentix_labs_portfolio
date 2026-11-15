import { Link } from 'react-router-dom'
import { Seo } from '@/head/Seo'
import { aboutContent } from '@/data/company'
import { Reveal, Section } from '@/components/common/Section'
import { Swoosh } from '@/components/ui/Swoosh'
import { ContactCTA } from '@/components/common/ContactCTA'
import { ArrowLink } from '@/components/ui/Links'
import { services } from '@/data/services'

export default function AboutPage() {
  return (
    <>
      <Seo
        title="About"
        description="Talentix Labs is a technology company providing software development and intelligent automation solutions — web platforms on MERN, mobile apps with Flutter and Firebase, and practical AI automation."
        path="/about"
      />

      {/* Page header */}
      <section className="border-b border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">About the company</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display mt-5 max-w-4xl text-display-xl text-balance">
              A technology partner for businesses that need software to{' '}
              <span className="relative inline-block text-brand-deep">
                work
                <Swoosh className="text-brand" />
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Talentix Labs provides software development and intelligent
              automation solutions — and treats every build as a piece of
              someone’s business, not a line item.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Who we are */}
      <Section>
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow lg:sticky lg:top-28">Who we are</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 text-[1.05rem] leading-relaxed text-ink-soft">
              {aboutContent.whoWeAre.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.15}>
              <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3 border-t border-line pt-7">
                {services.map((s) => (
                  <Link
                    key={s.slug}
                    to={`/services/${s.slug}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span className="text-xs font-semibold tracking-widest text-brand">
                      {s.index}
                    </span>
                    <span className="text-[0.95rem] font-semibold text-ink transition-colors group-hover:text-brand-deep">
                      {s.name}
                    </span>
                  </Link>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      {/* Philosophy */}
      <Section tone="mist" className="border-y border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">Our philosophy</p>
          </Reveal>
          <Reveal delay={0.06}>
            <p className="display mt-6 max-w-4xl text-display-lg leading-[1.25] text-ink text-balance">
              Simplicity is creativity{' '}
              <span className="relative inline-block text-brand-deep">
                with purpose
                <Swoosh className="text-brand" />
              </span>{' '}
              — in design, in code and in what we choose to build.
            </p>
          </Reveal>
          <div className="mt-8 max-w-2xl space-y-5 leading-relaxed text-ink-soft">
            {aboutContent.philosophy.map((p, i) => (
              <Reveal key={i} delay={0.1 + i * 0.05}>
                <p>{p}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Mission & vision */}
      <Section>
        <div className="shell grid gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
          <Reveal>
            <div className="border-t-2 border-brand pt-7">
              <h2 className="eyebrow">Mission</h2>
              <p className="display mt-4 text-display-sm leading-relaxed text-ink">
                {aboutContent.mission}
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.08}>
            <div className="border-t-2 border-navy pt-7 dark:border-ink-muted">
              <h2 className="eyebrow">Vision</h2>
              <p className="display mt-4 text-display-sm leading-relaxed text-ink">
                {aboutContent.vision}
              </p>
            </div>
          </Reveal>
        </div>
      </Section>

      {/* Values */}
      <Section tone="mist" className="border-y border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">Values</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h2 className="display mt-5 max-w-2xl text-display-lg">
              Four things we don’t compromise on.
            </h2>
          </Reveal>
          <div className="mt-12 grid gap-x-12 gap-y-2 sm:grid-cols-2">
            {aboutContent.values.map((v, i) => (
              <Reveal key={v.title} delay={(i % 2) * 0.06}>
                <div className="border-t border-line-strong py-7">
                  <div className="flex items-baseline gap-4">
                    <span className="text-sm font-semibold tracking-widest text-brand">
                      {String(i + 1).padStart(2, '0')}
                    </span>
                    <h3 className="display text-[1.35rem] text-ink">{v.title}</h3>
                  </div>
                  <p className="mt-3 leading-relaxed text-ink-soft md:pl-9">
                    {v.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Approach to technology */}
      <Section>
        <div className="shell grid gap-10 py-16 lg:grid-cols-12 lg:py-24">
          <div className="lg:col-span-4">
            <Reveal>
              <p className="eyebrow lg:sticky lg:top-28">Our approach to technology</p>
            </Reveal>
          </div>
          <div className="lg:col-span-8">
            <div className="max-w-2xl space-y-5 leading-relaxed text-ink-soft">
              {aboutContent.approachToTech.map((p, i) => (
                <Reveal key={i} delay={i * 0.06}>
                  <p>{p}</p>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.14}>
              <div className="mt-8">
                <ArrowLink to="/services" tone="dark">
                  Explore our services
                </ArrowLink>
              </div>
            </Reveal>
          </div>
        </div>
      </Section>

      <ContactCTA
        title="Meet the team behind the work."
        copy="If the way we think about software matches the way you think about your business, that’s usually the start of a good partnership."
      />
    </>
  )
}
