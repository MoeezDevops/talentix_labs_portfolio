import { cn } from '@/utils/cn'
import logoMark from '@/assets/logo-mark.png'

interface LogoProps {
  tone?: 'light' | 'dark'
  className?: string
}

/**
 * Brand lockup: the extracted logo mark + a typeset wordmark.
 * (The original full logo file is used where a badge treatment fits.)
 */
export function Logo({ tone = 'light', className }: LogoProps) {
  return (
    <span className={cn('inline-flex items-center gap-2.5', className)}>
      <img
        src={logoMark}
        alt="Talentix Labs logo"
        width={36}
        height={36}
        className="h-9 w-9 dark:brightness-[1.3]"
      />
      <span
        className={cn(
          'text-[1.02rem] font-bold uppercase leading-none tracking-[0.08em]',
          tone === 'light' ? 'text-ink' : 'text-white',
        )}
      >
        Talentix{' '}
        <span className="text-brand">Labs</span>
      </span>
    </span>
  )
}
