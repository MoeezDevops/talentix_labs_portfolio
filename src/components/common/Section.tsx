import { motion } from 'framer-motion'
import type { ReactNode } from 'react'
import { cn } from '@/utils/cn'

interface RevealProps {
  children: ReactNode
  className?: string
  /** Seconds of delay before the reveal starts. */
  delay?: number
  /** Vertical offset in px. */
  y?: number
}

/**
 * Gentle, single-run reveal for below-the-fold content.
 * Reduced-motion preferences are handled globally by MotionConfig
 * (reducedMotion="user") — elements then render in their final state.
 */
export function Reveal({ children, className, delay = 0, y = 14 }: RevealProps) {
  return (
    <motion.div
      data-reveal
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '0px 0px -10% 0px' }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {children}
    </motion.div>
  )
}

/** Section shell: consistent vertical rhythm + optional tone. */
export function Section({
  children,
  className,
  tone = 'paper',
  id,
}: {
  children: ReactNode
  className?: string
  tone?: 'paper' | 'mist' | 'tint' | 'navy'
  id?: string
}) {
  const tones = {
    paper: 'bg-paper text-ink-soft',
    mist: 'bg-mist text-ink-soft',
    tint: 'bg-brand-tint text-ink-soft',
    navy: 'bg-navy text-white/80',
  } as const
  return (
    <section id={id} className={cn(tones[tone], className)}>
      {children}
    </section>
  )
}

/** Eyebrow + display heading + optional lead, with the numbered index. */
export function SectionHeading({
  index,
  eyebrow,
  title,
  lead,
  tone = 'light',
  align = 'left',
  className,
}: {
  index?: string
  eyebrow?: string
  title: ReactNode
  lead?: string
  tone?: 'light' | 'dark'
  align?: 'left' | 'center'
  className?: string
}) {
  return (
    <div
      className={cn(
        'max-w-3xl',
        align === 'center' && 'mx-auto text-center',
        className,
      )}
    >
      {(index || eyebrow) && (
        <Reveal>
          <p
            className={cn(
              'eyebrow flex items-baseline gap-3',
              align === 'center' && 'justify-center',
              tone === 'dark' && 'text-white/50',
            )}
          >
            {index && <span className="text-brand">{index}</span>}
            {eyebrow && <span>{eyebrow}</span>}
          </p>
        </Reveal>
      )}
      <Reveal delay={0.06}>
        <h2 className="display mt-4 text-display-lg text-balance">{title}</h2>
      </Reveal>
      {lead && (
        <Reveal delay={0.12}>
          <p
            className={cn(
              'mt-5 text-lg leading-relaxed',
              tone === 'dark' ? 'text-white/70' : 'text-ink-soft',
            )}
          >
            {lead}
          </p>
        </Reveal>
      )}
    </div>
  )
}
