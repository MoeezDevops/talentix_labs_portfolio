import type { Config } from 'tailwindcss'

/**
 * Talentix Labs design tokens.
 *
 * The palette is derived from the company logo (green `#3AAE67`,
 * navy `#1B314E`, charcoal `#343B41` on white) — see
 * docs/brand-guidelines.md for the derivation and usage rules.
 */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      // Colours are CSS variables (RGB channels) so one set of utility
      // classes serves both themes — light values live in :root and dark
      // values in `.dark` (see src/styles/index.css).
      colors: {
        paper: 'rgb(var(--c-paper) / <alpha-value>)',
        mist: 'rgb(var(--c-mist) / <alpha-value>)',
        ink: {
          DEFAULT: 'rgb(var(--c-ink) / <alpha-value>)', // headings
          soft: 'rgb(var(--c-ink-soft) / <alpha-value>)', // body text
          muted: 'rgb(var(--c-ink-muted) / <alpha-value>)', // secondary text
          faint: 'rgb(var(--c-ink-faint) / <alpha-value>)', // captions, meta
        },
        brand: {
          DEFAULT: 'rgb(var(--c-brand) / <alpha-value>)', // logo green
          dark: 'rgb(var(--c-brand-dark) / <alpha-value>)', // hover state
          deep: 'rgb(var(--c-brand-deep) / <alpha-value>)', // text on surface
          tint: 'rgb(var(--c-brand-tint) / <alpha-value>)', // pale surface
          linetint: 'rgb(var(--c-brand-linetint) / <alpha-value>)', // hairline on tint
        },
        navy: {
          DEFAULT: 'rgb(var(--c-navy) / <alpha-value>)', // dark bands, footer
          raised: 'rgb(var(--c-navy-raised) / <alpha-value>)', // panels on navy
          line: 'rgb(var(--c-navy-line) / <alpha-value>)', // hairline on navy
        },
        line: {
          DEFAULT: 'rgb(var(--c-line) / <alpha-value>)',
          strong: 'rgb(var(--c-line-strong) / <alpha-value>)',
        },
        charcoal: '#343B41', // the swoosh — sparing secondary accents
      },
      fontFamily: {
        display: [
          'Fraunces Variable',
          'Fraunces',
          'Georgia',
          'Times New Roman',
          'serif',
        ],
        sans: [
          'Instrument Sans Variable',
          'Instrument Sans',
          'ui-sans-serif',
          'system-ui',
          'Segoe UI',
          'Helvetica Neue',
          'Arial',
          'sans-serif',
        ],
      },
      fontSize: {
        'display-xl': [
          'clamp(2.6rem, 1.6rem + 4.2vw, 4.75rem)',
          { lineHeight: '1.06', letterSpacing: '-0.02em' },
        ],
        'display-lg': [
          'clamp(2.1rem, 1.4rem + 2.8vw, 3.4rem)',
          { lineHeight: '1.12', letterSpacing: '-0.015em' },
        ],
        'display-md': [
          'clamp(1.65rem, 1.2rem + 1.6vw, 2.4rem)',
          { lineHeight: '1.18', letterSpacing: '-0.01em' },
        ],
        'display-sm': [
          'clamp(1.3rem, 1.05rem + 0.8vw, 1.7rem)',
          { lineHeight: '1.25', letterSpacing: '-0.005em' },
        ],
      },
      maxWidth: {
        shell: '76rem', // 1216px content shell
        prose: '42rem',
      },
      spacing: {
        18: '4.5rem',
        22: '5.5rem',
        30: '7.5rem',
      },
      borderRadius: {
        lg: '0.5rem',
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: '0', transform: 'translateY(14px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        'menu-in': {
          '0%': { opacity: '0', transform: 'translateY(-6px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.22, 1, 0.36, 1) both',
        'menu-in': 'menu-in 0.25s cubic-bezier(0.22, 1, 0.36, 1) both',
      },
    },
  },
  plugins: [],
} satisfies Config
