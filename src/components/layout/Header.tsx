import { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { ArrowRight, Menu, X } from 'lucide-react'
import { site } from '@/config/site'
import { Logo } from '@/components/ui/Logo'
import { Button } from '@/components/ui/Button'
import { ThemeToggle } from '@/components/ui/ThemeToggle'
import { cn } from '@/utils/cn'

/** Active-link dot — a quiet green marker echoing the brand. */
function ActiveDot() {
  return (
    <span
      aria-hidden="true"
      className="absolute -bottom-1.5 left-1/2 h-1 w-1 -translate-x-1/2 rounded-full bg-brand"
    />
  )
}

export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  // Same rule as react-router's <NavLink>: exact match for "/", prefix
  // for section routes (so detail pages keep their section highlighted).
  const isActive = (href: string) =>
    href === '/' ? pathname === '/' : pathname === href || pathname.startsWith(`${href}/`)

  // Close the mobile menu on navigation and lock body scroll while open.
  useEffect(() => {
    setOpen(false)
  }, [pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-md transition-colors duration-300">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-full focus:bg-brand focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
      >
        Skip to content
      </a>
      <div className="shell flex h-[4.5rem] items-center justify-between gap-6">
        <Link to="/" aria-label="Talentix Labs — home" className="shrink-0">
          <Logo />
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {site.nav.map((item) => {
            const active = isActive(item.href)
            return (
              <Link
                key={item.href}
                to={item.href}
                aria-current={active ? 'page' : undefined}
                className={cn(
                  'relative py-1 text-[0.95rem] transition-colors duration-200',
                  active ? 'font-semibold text-ink' : 'text-ink-soft hover:text-ink',
                )}
              >
                {item.label}
                {active && <ActiveDot />}
              </Link>
            )
          })}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle className="h-9 w-9" />
          <Button to={site.cta.href} size="sm" variant="primary">
            {site.cta.label}
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? 'Close menu' : 'Open menu'}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-mist"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-[4.5rem] bottom-0 z-30 overflow-y-auto border-t border-line bg-paper lg:hidden"
          >
            <nav aria-label="Mobile" className="shell flex flex-col py-8">
              {site.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.05 + i * 0.04, duration: 0.3 }}
                >
                  <Link
                    to={item.href}
                    aria-current={isActive(item.href) ? 'page' : undefined}
                    className={cn(
                      'display flex items-center justify-between border-b border-line py-5 text-display-md',
                      isActive(item.href) ? 'text-ink' : 'text-ink-muted hover:text-ink',
                    )}
                  >
                    {item.label}
                    <ArrowRight className="h-5 w-5 text-brand" aria-hidden="true" />
                  </Link>
                </motion.div>
              ))}
              <div className="pt-8">
                <Button to={site.cta.href} size="lg" className="w-full">
                  {site.cta.label}
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Button>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
