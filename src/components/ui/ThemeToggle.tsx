import { Moon, Sun } from 'lucide-react'
import { cn } from '@/utils/cn'

const STORAGE_KEY = 'theme'

/**
 * Light / dark switch.
 *
 * The initial theme is applied before first paint by an inline script
 * in index.html (saved choice, else the OS preference). This button
 * renders no theme-dependent state — the right icon is picked by CSS
 * (`dark:` variants) — so prerendered HTML and hydration always match.
 */
export function ThemeToggle({ className }: { className?: string }) {
  const toggle = () => {
    const root = document.documentElement
    const dark = root.classList.toggle('dark')
    try {
      localStorage.setItem(STORAGE_KEY, dark ? 'dark' : 'light')
    } catch {
      /* storage unavailable (private mode) — the choice just won't persist */
    }
    document
      .querySelector('meta[name="theme-color"]')
      ?.setAttribute('content', dark ? '#0B1321' : '#FFFFFF')
  }

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
      className={cn(
        'inline-flex h-10 w-10 items-center justify-center rounded-full border border-line-strong text-ink transition-colors duration-200 hover:border-ink/40 hover:bg-mist',
        className,
      )}
    >
      <Sun className="hidden h-[1.1rem] w-[1.1rem] dark:block" aria-hidden="true" />
      <Moon className="block h-[1.1rem] w-[1.1rem] dark:hidden" aria-hidden="true" />
    </button>
  )
}
