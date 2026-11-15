import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { Seo } from '@/head/Seo'
import { services } from '@/data/services'
import { Reveal, Section } from '@/components/common/Section'
import { Swoosh } from '@/components/ui/Swoosh'
import { ContactCTA } from '@/components/common/ContactCTA'
import { Tag } from '@/components/ui/Links'

/**
 * Services overview. Each practice gets a tall editorial band with its
 * own accent and composition, alternating sides — distinct enough to
 * feel intentional, consistent enough to stay one brand.
 */
export default function ServicesPage() {
  return (
    <>
      <Seo
        title="Services"
        description="Web development on the MERN stack, cross-platform mobile apps with Flutter and Firebase, and AI-powered automation — the three service lines of Talentix Labs."
        path="/services"
      />

      {/* Header */}
      <section className="border-b border-line">
        <div className="shell py-16 lg:py-24">
          <Reveal>
            <p className="eyebrow">Services</p>
          </Reveal>
          <Reveal delay={0.06}>
            <h1 className="display mt-5 max-w-4xl text-display-xl text-balance">
              Three ways we help businesses{' '}
              <span className="relative inline-block text-brand-deep">
                move
                <Swoosh className="text-brand" />
              </span>
              .
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="mt-7 max-w-2xl text-lg leading-relaxed text-ink-soft">
              Web platforms that carry the business, mobile apps that put it
              in people’s pockets, and automation that removes the work
              nobody should be doing by hand.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Service bands */}
      {services.map((s, i) => {
        const flip = i % 2 === 1
        return (
          <Section key={s.slug} tone={i % 2 === 1 ? 'mist' : 'paper'} className={i > 0 ? 'border-t border-line' : ''}>
            <div className="shell py-16 lg:py-24">
              <div className="grid items-start gap-10 lg:grid-cols-12 lg:gap-14">
                {/* Text side */}
                <div className={flip ? 'lg:order-2 lg:col-span-7' : 'lg:col-span-7'}>
                  <Reveal>
                    <p className="text-xs font-semibold tracking-widest text-ink-muted">
                      <span className="text-brand">Service {s.index}</span>
                      {' '}/ {String(services.length).padStart(2, '0')}
                    </p>
                  </Reveal>
                  <Reveal delay={0.06}>
                    <h2 className="display mt-4 text-display-lg">{s.name}</h2>
                  </Reveal>
                  <Reveal delay={0.1}>
                    <p className="mt-5 max-w-xl text-lg leading-relaxed text-ink-soft">
                      {s.intro[0]}
                    </p>
                  </Reveal>
                  <Reveal delay={0.14}>
                    <div className="mt-6 flex flex-wrap gap-1.5">
                      {s.stack.flatMap((g) => g.items.slice(0, 3)).map((item) => (
                        <Tag key={item}>{item}</Tag>
                      ))}
                    </div>
                  </Reveal>
                  <Reveal delay={0.18}>
                    <div className="mt-8">
                      <Link
                        to={`/services/${s.slug}`}
                        className="group inline-flex items-center gap-3 rounded-full border border-line-strong px-6 py-3 text-[0.95rem] font-semibold text-ink transition-all duration-300 hover:border-brand hover:bg-brand hover:text-white"
                      >
                        Explore {s.name.toLowerCase()}
                        <ArrowRight
                          className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
                          strokeWidth={2.2}
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </Reveal>
                </div>

                {/* Capability side */}
                <div className={flip ? 'lg:order-1 lg:col-span-5' : 'lg:col-span-5'}>
                  <Reveal delay={0.1}>
                    <div className="rounded-xl border border-line bg-paper p-7 lg:p-8">
                      <h3 className="eyebrow">Capabilities</h3>
                      <ul className="mt-5 space-y-4">
                        {s.capabilities.slice(0, 5).map((c, ci) => (
                          <li
                            key={c.title}
                            className="flex items-start gap-4 border-b border-line pb-4 last:border-b-0 last:pb-0"
                          >
                            <span className="text-xs font-semibold text-brand">
                              {String(ci + 1).padStart(2, '0')}
                            </span>
                            <div>
                              <p className="text-[0.95rem] font-semibold text-ink">
                                {c.title}
                              </p>
                              <p className="mt-1 text-sm leading-relaxed text-ink-soft">
                                {c.description}
                              </p>
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </Reveal>
                </div>
              </div>
            </div>
          </Section>
        )
      })}

      <ContactCTA
        title="Not sure which service fits?"
        copy="Describe the problem in plain language — we’ll tell you honestly whether it needs a website, an app, an automation, or something simpler."
      />
    </>
  )
}
