import { Suspense } from 'react'
import { MotionConfig } from 'framer-motion'

/**
 * Global providers. MotionConfig honours the user's reduced-motion
 * preference: animations are swapped for instant state changes.
 */
export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig reducedMotion="user" transition={{ ease: [0.22, 1, 0.36, 1] }}>
      <Suspense fallback={null}>{children}</Suspense>
    </MotionConfig>
  )
}
