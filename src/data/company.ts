import type { Principle, ProcessStep, Insight } from '@/types'

/**
 * Company principles, process and about-page copy.
 * No statistics, client names, testimonials or history are invented —
 * factual claims come only from Portfolio.pdf and the project brief.
 */

export const principles: Principle[] = [
  {
    title: 'Understanding before building',
    description:
      'Every engagement starts with your business requirements — who uses the product, what decisions it supports and what success looks like. The build only starts once that picture is clear.',
  },
  {
    title: 'Thoughtful development',
    description:
      'We design the flow and the data structure before writing code, so features fit together instead of piling up.',
  },
  {
    title: 'Modern technologies',
    description:
      'MERN for web, Flutter and Firebase for mobile, and practical automation for operations — chosen per project, never by fashion.',
  },
  {
    title: 'User-focused design',
    description:
      'Short paths, clear screens and obvious next steps. Our completed products — from a booking in under a minute to checkout without leaving the app — are built around the user’s time.',
  },
  {
    title: 'Scalable solutions',
    description:
      'Multi-tenant isolation, role-based access and structured APIs are the difference between a demo and a product. We build for what comes after launch.',
  },
  {
    title: 'Quality and maintainability',
    description:
      'Typed code, components that get reused instead of duplicated, and interfaces documented well enough that future work builds on them rather than around them.',
  },
]

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Discovery',
    description:
      'We learn your business, your users and the problem worth solving — and define the scope in writing before anything else.',
  },
  {
    index: '02',
    title: 'Planning',
    description:
      'Features, data and screens are mapped into a concrete plan: what gets built, in what order, and how we will know it works.',
  },
  {
    index: '03',
    title: 'Design',
    description:
      'Interfaces are designed around the flow — clear hierarchy, intentional whitespace and a visual language that fits your brand.',
  },
  {
    index: '04',
    title: 'Development',
    description:
      'The build happens in reviewed increments, with typed, component-based code on web and Flutter on mobile.',
  },
  {
    index: '05',
    title: 'Testing',
    description:
      'Behaviour is verified across devices and screen sizes, with accessibility and performance checked before anything ships.',
  },
  {
    index: '06',
    title: 'Delivery',
    description:
      'You receive a working product, the documentation behind it and a team that stays available for improvements.',
  },
]

export const insights: Insight[] = [
  {
    id: 'sample-planning',
    title: 'From discovery to plan: what good project scoping looks like',
    excerpt:
      'The most expensive misunderstandings happen before the first line of code. A note on how we scope projects so the build stays predictable.',
    topic: 'Process',
    sample: true,
  },
  {
    id: 'sample-mobile-flows',
    title: 'Designing mobile flows people actually finish',
    excerpt:
      'A booking in under a minute, a checkout without leaving the app — what our completed products taught us about short paths and clear calls to action.',
    topic: 'Mobile',
    sample: true,
  },
  {
    id: 'sample-automation-plain',
    title: 'AI automation, explained without the buzzwords',
    excerpt:
      'What “intelligent automation” means for a small business in practice: the steps worth automating, the ones that are not, and how to tell them apart.',
    topic: 'Automation',
    sample: true,
  },
]

export const aboutContent = {
  whoWeAre: [
    'Talentix Labs is a technology company providing software development and intelligent automation solutions. We build web applications on the MERN stack, cross-platform mobile apps with Flutter and Firebase, and AI-powered automation that removes repetitive work from business operations.',
    'The work behind this site is real: an AI-powered mobile ERP, a mobile shopping app, a home-cleaning booking platform, a driving school website for a Glasgow business and an e-commerce store for a clothing brand. Each one started as a business problem and shipped as a product people use.',
  ],
  philosophy: [
    'Simplicity is not the absence of creativity — simplicity is creativity with purpose. We apply that to software the same way we apply it to this site: the shortest path that fully solves the problem, no decoration pretending to be design.',
    'That philosophy shows up in our products. Booking a cleaning in under a minute. Checking out without leaving the app. An ERP that a business owner can actually run from their phone. Every feature must earn its screen space.',
  ],
  mission:
    'To give growing businesses the software they need to operate with confidence — well-built web and mobile products and automation that removes repetitive work, delivered with the care of a partner rather than a vendor.',
  vision:
    'A business landscape where technology feels like an advantage instead of an obstacle — where every company, regardless of size, can run on software that is clear, reliable and genuinely useful.',
  values: [
    {
      title: 'Clarity',
      description:
        'In interfaces, in code and in communication. If it needs explaining twice, we redesign it.',
    },
    {
      title: 'Craft',
      description:
        'Details are the product: typography, loading states, edge cases, the second-order behaviour nobody asked about yet.',
    },
    {
      title: 'Honesty',
      description:
        'We present our real work, say what a technology can and cannot do, and never oversell a build.',
    },
    {
      title: 'Ownership',
      description:
        'We treat your product as ours — its performance, its maintainability and its results after delivery.',
    },
  ],
  approachToTech: [
    'We choose technology per problem, not per trend. For web platforms that usually means MERN — MongoDB, Express.js, React.js and Node.js — a consistent, well-supported stack that covers interface, API and data. For mobile it means Flutter and Firebase, building for Android and iOS from one codebase with authentication, cloud data and push notifications chosen per project.',
    'For operations it means automation that connects the systems a business already runs. Across all three, the standard is the same: typed, structured, maintainable code and interfaces designed around the person using them.',
  ],
}
