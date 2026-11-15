import { ArrowRight } from 'lucide-react'
import { Reveal } from '@/components/common/Section'
import { Button } from '@/components/ui/Button'

/**
 * Reusable contact call-to-action band. Used on the homepage and on
 * every service detail page.
 */
export function ContactCTA({
  title = 'Have an idea worth building?',
  copy = 'Tell us where your business is stuck — or where it should go next. We’ll reply with a clear view of how web, mobile or automation could move it forward.',
  note,
}: {
  title?: string
  copy?: string
  note?: string
}) {
  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Quiet swoosh — the brand curve, traced at low contrast. */}
      <svg
        aria-hidden="true"
        viewBox="0 0 900 300"
        className="pointer-events-none absolute -right-16 top-6 hidden w-[34rem] opacity-[0.16] md:block"
        fill="none"
      >
        <path
          d="M10 250 C 260 300, 640 260, 890 60"
          stroke="#3AAE67"
          strokeWidth="34"
          strokeLinecap="round"
        />
      </svg>

      <div className="shell relative py-20 lg:py-28">
        <Reveal>
          <p className="eyebrow text-white/50">Let’s talk</p>
        </Reveal>
        <Reveal delay={0.06}>
          <h2 className="display mt-4 max-w-2xl text-display-lg text-white text-balance">
            {title}
          </h2>
        </Reveal>
        <Reveal delay={0.12}>
          <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/70">
            {copy}
          </p>
        </Reveal>
        <Reveal delay={0.18}>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button to="/contact" size="lg" variant="primary">
              Start the conversation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Button>
            <Button to="/projects" size="lg" variant="ghost" className="text-white hover:bg-white/10">
              See our work
            </Button>
          </div>
        </Reveal>
        {note && (
          <Reveal delay={0.22}>
            <p className="mt-6 text-sm text-white/50">{note}</p>
          </Reveal>
        )}
      </div>
    </section>
  )
}
