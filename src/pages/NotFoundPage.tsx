import { Seo } from '@/head/Seo'
import { Button } from '@/components/ui/Button'

export default function NotFoundPage() {
  return (
    <>
      <Seo title="Page not found" description="This page doesn’t exist." />
      <section className="flex min-h-[60vh] items-center">
        <div className="shell py-20 text-center">
          <p className="eyebrow justify-center">404</p>
          <h1 className="display mx-auto mt-5 max-w-xl text-display-lg text-balance">
            This page took a different route.
          </h1>
          <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">
            The link may be old or mistyped. The work itself is still here.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Button to="/" size="lg">
              Back home
            </Button>
            <Button to="/projects" size="lg" variant="outline">
              Browse projects
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
