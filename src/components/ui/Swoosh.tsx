import { cn } from '@/utils/cn'

/**
 * The brand motif — the swoosh curve from the Talentix Labs logo,
 * redrawn as a quiet underline for a single word in a headline.
 */
export function Swoosh({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 220 22"
      preserveAspectRatio="none"
      className={cn('absolute -bottom-1 left-0 h-[0.32em] w-full', className)}
      fill="none"
    >
      <path
        d="M3 17.5 C 58 22.5, 152 20, 217 4"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinecap="round"
      />
    </svg>
  )
}
