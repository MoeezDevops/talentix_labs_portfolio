import { useState } from 'react'
import type { FormEvent } from 'react'
import { Mail, Send } from 'lucide-react'
import { Seo } from '@/head/Seo'
import { site } from '@/config/site'
import { Reveal, Section } from '@/components/common/Section'
import { Swoosh } from '@/components/ui/Swoosh'
import { cn } from '@/utils/cn'

/* ------------------------------------------------------------------ types */

interface FormState {
  name: string
  email: string
  phone: string
  subject: string
  message: string
}

type FieldErrors = Partial<Record<keyof FormState, string>>

const initialForm: FormState = {
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(form: FormState): FieldErrors {
  const errors: FieldErrors = {}
  if (form.name.trim().length < 2) errors.name = 'Please tell us your name.'
  if (!EMAIL_RE.test(form.email.trim()))
    errors.email = 'Please enter a valid email address.'
  if (form.phone.trim() && !/^[+\d][\d\s().-]{6,}$/.test(form.phone.trim()))
    errors.phone = 'This phone number doesn’t look right — digits, spaces and + only.'
  if (form.subject.trim().length < 3)
    errors.subject = 'A short subject helps us route your message.'
  if (form.message.trim().length < 20)
    errors.message = 'Please give us at least a sentence or two (20+ characters).'
  return errors
}

/* -------------------------------------------------------------- components */

function Field({
  label,
  error,
  children,
  optional,
  htmlFor,
}: {
  label: string
  error?: string
  children: React.ReactNode
  optional?: boolean
  htmlFor: string
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-semibold text-ink">
        {label}
        {optional && (
          <span className="ml-1.5 font-normal text-ink-faint">(optional)</span>
        )}
      </label>
      {children}
      {error && (
        <p role="alert" className="mt-1.5 text-sm text-[#B3423A] dark:text-[#F0908A]">
          {error}
        </p>
      )}
    </div>
  )
}

const inputClass = (invalid: boolean) =>
  cn(
    'w-full rounded-lg border bg-paper px-4 py-3 text-[0.95rem] text-ink placeholder:text-ink-faint transition-colors duration-200',
    'focus:outline-none focus:ring-2 focus:ring-brand/50 focus:border-brand',
    invalid ? 'border-[#C96962] dark:border-[#D9776F]' : 'border-line-strong hover:border-ink/30',
  )

/**
 * Contact page. The form validates fully on the frontend.
 *
 * Submission is honest about what it can do:
 *  - if `site.contact.email` is configured, the validated message is
 *    handed off via a pre-filled mailto draft;
 *  - otherwise the page clearly says this is a frontend demonstration
 *    and explains how to connect a real endpoint (see docs/deployment.md).
 */
export default function ContactPage() {
  const [form, setForm] = useState<FormState>(initialForm)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [submitted, setSubmitted] = useState<null | 'sent' | 'demo'>(null)

  const set = (key: keyof FormState) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((f) => ({ ...f, [key]: e.target.value }))
    if (errors[key]) setErrors((er) => ({ ...er, [key]: undefined }))
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validate(form)
    setErrors(found)
    if (Object.keys(found).length > 0) return

    // --- Future backend integration point -------------------------------
    // When a backend exists, POST `form` to the configured endpoint here
    // (see docs/deployment.md). Until then, two honest paths:
    if (site.contact.email) {
      const subject = encodeURIComponent(
        `[Website] ${form.subject} — ${form.name}`,
      )
      const body = encodeURIComponent(
        `Name: ${form.name}\nEmail: ${form.email}\nPhone: ${form.phone || '—'}\n\n${form.message}`,
      )
      window.location.href = `mailto:${site.contact.email}?subject=${subject}&body=${body}`
      setSubmitted('sent')
    } else {
      setSubmitted('demo')
    }
  }

  return (
    <>
      <Seo
        title="Contact"
        description="Tell Talentix Labs about your project — web development, mobile apps or AI automation. We reply with a clear view of scope, options and effort."
        path="/contact"
      />

      <Section>
        <div className="shell grid gap-12 py-16 lg:grid-cols-12 lg:gap-16 lg:py-24">
          {/* Invitation side */}
          <div className="lg:col-span-5">
            <Reveal>
              <p className="eyebrow">Contact</p>
            </Reveal>
            <Reveal delay={0.06}>
              <h1 className="display mt-5 text-display-xl text-balance">
                Start the{' '}
                <span className="relative inline-block text-brand-deep">
                  conversation
                  <Swoosh className="text-brand" />
                </span>
                .
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-6 max-w-md text-lg leading-relaxed text-ink-soft">
                Whether it’s a website that should be doing more, an app
                idea that’s still in the notebook, or a process that eats
                your team’s week — tell us. We’ll reply with a considered
                answer, not a sales script.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <ul className="mt-8 space-y-3 border-t border-line pt-7 text-[0.95rem] text-ink-soft">
                <li className="flex gap-3">
                  <span className="font-semibold text-ink">01</span>
                  You describe the problem in your own words.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-ink">02</span>
                  We reply with questions, options and an honest scope.
                </li>
                <li className="flex gap-3">
                  <span className="font-semibold text-ink">03</span>
                  If it’s a fit, we plan the build together.
                </li>
              </ul>
            </Reveal>

            {/* Contact details render only if configured — nothing invented. */}
            {(site.contact.email || site.contact.phone || site.contact.location) && (
              <Reveal delay={0.22}>
                <div className="mt-8 space-y-2.5 border-t border-line pt-7 text-[0.95rem]">
                  {site.contact.email && (
                    <p className="flex items-center gap-2.5 text-ink-soft">
                      <Mail className="h-4 w-4 text-brand" aria-hidden="true" />
                      <a
                        className="font-medium text-ink underline-offset-2 hover:underline"
                        href={`mailto:${site.contact.email}`}
                      >
                        {site.contact.email}
                      </a>
                    </p>
                  )}
                  {site.contact.phone && (
                    <p className="flex items-center gap-2.5 text-ink-soft">
                      <span aria-hidden="true" className="text-brand">·</span>
                      {site.contact.phone}
                    </p>
                  )}
                  {site.contact.location && (
                    <p className="text-ink-soft">{site.contact.location}</p>
                  )}
                </div>
              </Reveal>
            )}
          </div>

          {/* Form side */}
          <div className="lg:col-span-7">
            <Reveal delay={0.1}>
              <form
                onSubmit={handleSubmit}
                noValidate
                className="rounded-2xl border border-line bg-paper p-7 lg:p-10"
              >
                {submitted === null ? (
                  <>
                    <h2 className="display text-display-sm">
                      Tell us about your project
                    </h2>
                    <p className="mt-2 text-sm text-ink-muted">
                      Fields marked (optional) can stay empty — the rest
                      helps us reply properly.
                    </p>

                    <div className="mt-7 grid gap-5 sm:grid-cols-2">
                      <Field label="Full name" htmlFor="contact-name" error={errors.name}>
                        <input
                          type="text"
                          id="contact-name"
                          name="name"
                          autoComplete="name"
                          value={form.name}
                          onChange={set('name')}
                          placeholder="Your name"
                          aria-invalid={Boolean(errors.name)}
                          className={inputClass(Boolean(errors.name))}
                        />
                      </Field>
                      <Field label="Email" htmlFor="contact-email" error={errors.email}>
                        <input
                          type="email"
                          id="contact-email"
                          name="email"
                          autoComplete="email"
                          value={form.email}
                          onChange={set('email')}
                          placeholder="you@company.com"
                          aria-invalid={Boolean(errors.email)}
                          className={inputClass(Boolean(errors.email))}
                        />
                      </Field>
                      <Field label="Phone number" htmlFor="contact-phone" optional error={errors.phone}>
                        <input
                          type="tel"
                          id="contact-phone"
                          name="phone"
                          autoComplete="tel"
                          value={form.phone}
                          onChange={set('phone')}
                          placeholder="+44 …"
                          aria-invalid={Boolean(errors.phone)}
                          className={inputClass(Boolean(errors.phone))}
                        />
                      </Field>
                      <Field label="Subject" htmlFor="contact-subject" error={errors.subject}>
                        <input
                          type="text"
                          id="contact-subject"
                          name="subject"
                          value={form.subject}
                          onChange={set('subject')}
                          placeholder="What is this about?"
                          aria-invalid={Boolean(errors.subject)}
                          className={inputClass(Boolean(errors.subject))}
                        />
                      </Field>
                      <div className="sm:col-span-2">
                        <Field label="Message" htmlFor="contact-message" error={errors.message}>
                          <textarea
                            id="contact-message"
                            name="message"
                            rows={6}
                            value={form.message}
                            onChange={set('message')}
                            placeholder="The problem you’re solving, who it’s for, and anything you already have in place…"
                            aria-invalid={Boolean(errors.message)}
                            className={cn(inputClass(Boolean(errors.message)), 'resize-y')}
                          />
                        </Field>
                      </div>
                    </div>

                    <div className="mt-7 flex flex-wrap items-center justify-between gap-4 border-t border-line pt-6">
                      <p className="text-xs text-ink-faint">
                        We use your details only to reply to this enquiry.
                      </p>
                      <button
                        type="submit"
                        className="inline-flex items-center gap-2 rounded-full bg-brand px-7 py-3 text-[0.95rem] font-semibold text-white transition-all duration-200 hover:bg-brand-dark active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand/60 focus-visible:ring-offset-2"
                      >
                        Send message
                        <Send className="h-4 w-4" aria-hidden="true" />
                      </button>
                    </div>
                  </>
                ) : (
                  <div className="py-6 text-center" role="status">
                    <h2 className="display text-display-sm">
                      {submitted === 'sent'
                        ? 'Your email draft is ready.'
                        : 'Thank you — your message has been validated.'}
                    </h2>
                    <p className="mx-auto mt-4 max-w-md text-[0.95rem] leading-relaxed text-ink-soft">
                      {submitted === 'sent' ? (
                        <>
                          Your email app should now open with the message
                          pre-filled for{' '}
                          <span className="font-semibold text-ink">
                            {site.contact.email}
                          </span>
                          . Press send there and we’ll take it from here.
                        </>
                      ) : (
                        <>
                          This site currently runs without a backend, so
                          nothing was sent to a server. To receive messages
                          for real, set your address in{' '}
                          <code className="rounded bg-mist px-1.5 py-0.5 text-[0.85em] text-ink">
                            src/config/site.ts
                          </code>{' '}
                          (enables email hand-off) or connect an endpoint as
                          described in{' '}
                          <code className="rounded bg-mist px-1.5 py-0.5 text-[0.85em] text-ink">
                            docs/deployment.md
                          </code>
                          .
                        </>
                      )}
                    </p>
                    <button
                      type="button"
                      onClick={() => {
                        setForm(initialForm)
                        setSubmitted(null)
                      }}
                      className="mt-7 rounded-full border border-line-strong px-6 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-ink/40 hover:bg-mist"
                    >
                      Write another message
                    </button>
                  </div>
                )}
              </form>
            </Reveal>
          </div>
        </div>
      </Section>
    </>
  )
}
