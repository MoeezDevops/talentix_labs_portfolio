import { Link } from 'react-router-dom'
import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

type Variant = 'primary' | 'outline' | 'dark' | 'ghost'
type Size = 'sm' | 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-200 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-60'

const variants: Record<Variant, string> = {
  primary:
    'bg-brand text-white shadow-none hover:bg-brand-dark active:scale-[0.98]',
  outline:
    'border border-line-strong bg-transparent text-ink hover:border-ink/40 hover:bg-mist active:scale-[0.98]',
  dark: 'bg-navy text-white hover:bg-navy/90 active:scale-[0.98]',
  ghost:
    'bg-transparent text-ink hover:bg-mist active:scale-[0.98]',
}

const sizes: Record<Size, string> = {
  sm: 'h-9 px-4 text-sm',
  md: 'h-11 px-6 text-[0.95rem]',
  lg: 'h-12 px-7 text-base',
}

type CommonProps = {
  variant?: Variant
  size?: Size
  children: ReactNode
  className?: string
}

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { to?: never; href?: never }

type ButtonAsLink = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to: string
    href?: never
  }

type ButtonAsExternal = CommonProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    to?: never
    href: string
  }

export type ButtonProps = ButtonAsButton | ButtonAsLink | ButtonAsExternal

export function Button({
  variant = 'primary',
  size = 'md',
  className,
  children,
  ...rest
}: ButtonProps) {
  const classes = cn(base, variants[variant], sizes[size], className)

  if ('to' in rest && typeof rest.to === 'string') {
    return (
      <Link to={rest.to} className={classes} {...(rest as object)}>
        {children}
      </Link>
    )
  }
  if ('href' in rest && typeof rest.href === 'string') {
    const external = rest.href.startsWith('http')
    return (
      <a
        href={rest.href}
        className={classes}
        {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        {...(rest as object)}
      >
        {children}
      </a>
    )
  }
  return (
    <button className={classes} {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}>
      {children}
    </button>
  )
}
