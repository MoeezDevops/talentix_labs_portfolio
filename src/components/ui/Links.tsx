import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight } from 'lucide-react'
import { cn } from '@/utils/cn'

/** Inline text link with an arrow — used for editorial "view" links. */
export function ArrowLink({
  to,
  children,
  className,
  tone = 'brand',
}: {
  to: string
  children: React.ReactNode
  className?: string
  tone?: 'brand' | 'dark' | 'light'
}) {
  const tones = {
    brand: 'text-brand-deep hover:text-brand-dark',
    dark: 'text-ink hover:text-brand-deep',
    light: 'text-white hover:text-brand',
  } as const
  return (
    <Link
      to={to}
      className={cn(
        'group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold',
        tones[tone],
        className,
      )}
    >
      <span className="border-b border-current pb-0.5 opacity-80 transition-opacity duration-200 group-hover:opacity-100">
        {children}
      </span>
      <ArrowRight
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-1"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </Link>
  )
}

/** Small pill label for technologies / capabilities. */
export function Tag({ children, tone = 'light' }: { children: React.ReactNode; tone?: 'light' | 'dark' }) {
  return (
    <span
      className={cn(
        'inline-flex items-center rounded-full px-3 py-1 text-xs font-medium tracking-wide',
        tone === 'light'
          ? 'border border-line-strong bg-paper text-ink-muted'
          : 'border border-navy-line bg-navy-raised text-white/70',
      )}
    >
      {children}
    </span>
  )
}

/** External link with the diagonal-arrow affordance. */
export function ExternalLink({
  href,
  children,
  className,
}: {
  href: string
  children: React.ReactNode
  className?: string
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        'group inline-flex items-center gap-1.5 text-[0.95rem] font-semibold text-brand-deep hover:text-brand-dark',
        className,
      )}
    >
      {children}
      <ArrowUpRight
        className="h-4 w-4 transition-transform duration-300 ease-out group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
        strokeWidth={2.2}
        aria-hidden="true"
      />
    </a>
  )
}
