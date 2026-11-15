import type { Service } from '@/types'

/**
 * The company's three service lines, as defined by the company brief.
 * Stacks listed here are what the company OFFERS (MERN for web,
 * Flutter + Firebase for mobile) — they are not claims about which
 * frameworks each completed project used.
 */
export const services: Service[] = [
  {
    id: 'web',
    index: '01',
    name: 'Web Development',
    slug: 'web-development',
    shortDescription:
      'Modern, responsive, scalable web applications — from business and corporate websites to full-stack, database-driven platforms — built on the MERN stack.',
    intro: [
      'Our web development services focus on building modern, responsive, scalable and high-quality web applications. Our primary technology stack is MERN — MongoDB, Express.js, React.js and Node.js — a single language across the whole application, from the interface a visitor touches to the API and database behind it.',
      'We treat a website or web application as a business asset, not a brochure. That means clear structure, fast pages, accessible interfaces and code that the next developer can pick up without a map — whether the project is a corporate website, an e-commerce application or a full-stack platform with its own backend.',
    ],
    capabilities: [
      {
        title: 'Custom web application development',
        description:
          'Applications shaped around your process — dashboards, portals and internal tools built to fit the way your business actually works.',
      },
      {
        title: 'Business & corporate websites',
        description:
          'Professional, conversion-focused sites that present your company clearly and turn visitors into enquiries.',
      },
      {
        title: 'E-commerce applications',
        description:
          'Catalogs, product pages, carts and on-site checkout — a complete path from browsing to purchase in one place.',
      },
      {
        title: 'Full-stack web applications',
        description:
          'React frontends with Node.js and Express.js APIs, connected to MongoDB for data-driven products.',
      },
      {
        title: 'Responsive frontend development',
        description:
          'Interfaces that adapt cleanly from large desktop to phone — designed as intentional mobile compositions, not shrunken layouts.',
      },
      {
        title: 'Backend & API development',
        description:
          'Structured, documented APIs that power your product and leave room to grow.',
      },
      {
        title: 'Database-driven applications',
        description:
          'Data modelled properly in MongoDB, with the queries your product needs kept fast and predictable.',
      },
      {
        title: 'Maintenance & improvements',
        description:
          'Ongoing care for existing web applications — fixing, refining and extending what you already run.',
      },
    ],
    problems: [
      {
        title: '“Our site looks dated and converts poorly.”',
        description:
          'We rebuild business websites around clear messaging, fast pages and calls to action that guide visitors toward contact or checkout.',
      },
      {
        title: '“Everything runs on spreadsheets.”',
        description:
          'We turn manual, spreadsheet-driven processes into database-driven web applications with proper roles and structure.',
      },
      {
        title: '“Selling online means redirects and DMs.”',
        description:
          'We build e-commerce flows that keep the whole purchase on your own website, from product page to payment.',
      },
      {
        title: '“No one can update our product.”',
        description:
          'We write maintainable, typed, component-based frontends and structured backends that future work can build on.',
      },
    ],
    stack: [
      {
        group: 'Frontend',
        items: ['React.js', 'Responsive UI', 'Component architecture'],
      },
      {
        group: 'Backend',
        items: ['Node.js', 'Express.js', 'REST APIs'],
      },
      {
        group: 'Data',
        items: ['MongoDB', 'Database-driven applications'],
      },
    ],
    approach: [
      {
        title: 'Understand the business first',
        description:
          'Before interfaces, we map what the website or application must do for the business — who uses it, what decisions it supports and what a successful outcome looks like.',
      },
      {
        title: 'Design the structure',
        description:
          'We plan the data model and the screen flow together, so the interface and the database agree before development starts.',
      },
      {
        title: 'Build in components',
        description:
          'React components, typed throughout, keep the frontend consistent and reusable; APIs are structured the same way.',
      },
      {
        title: 'Test, refine, deliver',
        description:
          'We verify behaviour across devices and browsers, review performance and accessibility, then ship — and stay available for improvements.',
      },
    ],
    relatedProjects: ['ips-driving-school', 'raziagul'],
  },
  {
    id: 'mobile',
    index: '02',
    name: 'Mobile App Development',
    slug: 'mobile-app-development',
    shortDescription:
      'Cross-platform applications for Android and iOS built with Flutter and Firebase — from idea to a polished, working app in people’s hands.',
    intro: [
      'Our mobile development services focus on building cross-platform applications. Our primary technologies are Flutter and Firebase: one codebase that runs natively on Android and iOS, backed by Firebase for authentication, real-time data and push notifications.',
      'A mobile app succeeds when it feels effortless — short paths, clear screens, no dead ends. We design the flow first, then build it with Flutter’s widget system, keeping the interface native-smooth on both platforms. Firebase products are chosen per project: authentication, Cloud Firestore, Realtime Database and push notifications where they genuinely serve the app.',
    ],
    capabilities: [
      {
        title: 'Cross-platform app development',
        description:
          'One Flutter codebase, native performance on Android and iOS — faster to build, consistent to maintain.',
      },
      {
        title: 'Android & iOS applications',
        description:
          'Apps designed for the platform conventions of both stores, from layout to navigation patterns.',
      },
      {
        title: 'Firebase authentication',
        description:
          'Secure sign-in flows — email, Google and other providers — handled by Firebase Auth.',
      },
      {
        title: 'Cloud Firestore & Realtime Database',
        description:
          'Structured cloud data with real-time sync where the product needs it — chosen per project, not by default.',
      },
      {
        title: 'Push notifications',
        description:
          'Timely alerts that keep users connected — approvals, updates and reminders delivered the moment they matter.',
      },
      {
        title: 'API integrations',
        description:
          'Connecting your app to the services it depends on, from payment providers to your own backend.',
      },
      {
        title: 'Mobile UI development',
        description:
          'Custom, polished interfaces — app bars, navigation, motion — built widget by widget in Flutter.',
      },
      {
        title: 'Application maintenance',
        description:
          'Ongoing improvements, fixes and updates after launch, so the app keeps working as platforms evolve.',
      },
    ],
    problems: [
      {
        title: '“We need iOS and Android, not two budgets.”',
        description:
          'Flutter lets us build both platforms from one codebase, cutting development time without cutting quality.',
      },
      {
        title: '“Our idea stays stuck in a notebook.”',
        description:
          'We take ideas from sketch to store — flow first, then design, then a working app — the same path our completed products followed.',
      },
      {
        title: '“Users drop off before finishing.”',
        description:
          'We design short, focused flows — like a booking completed in under a minute — with clear calls to action at every step.',
      },
      {
        title: '“The app and the website don’t agree.”',
        description:
          'With shared backends and APIs, mobile apps and web platforms can run on the same data and stay in sync.',
      },
    ],
    stack: [
      {
        group: 'Framework',
        items: ['Flutter', 'Dart', 'Cross-platform UI'],
      },
      {
        group: 'Backend services',
        items: ['Firebase Auth', 'Cloud Firestore', 'Realtime Database'],
      },
      {
        group: 'Engagement',
        items: ['Push notifications', 'API integrations'],
      },
    ],
    approach: [
      {
        title: 'Shape the flow',
        description:
          'We start with the user’s path — screens, taps and decisions — and cut every step that does not earn its place.',
      },
      {
        title: 'Design once, both platforms',
        description:
          'Flutter’s widget system lets us design a consistent interface that still respects Android and iOS conventions.',
      },
      {
        title: 'Wire up the right Firebase pieces',
        description:
          'Authentication, Firestore or Realtime Database and push notifications are selected per project — only what the product needs.',
      },
      {
        title: 'Test on real devices',
        description:
          'We verify behaviour on Android and iOS hardware, refine the details, and keep maintaining the app after release.',
      },
    ],
    relatedProjects: ['plugpro-erp', 'kartly', 'tidyo'],
  },
  {
    id: 'ai',
    index: '03',
    name: 'AI Automation',
    slug: 'ai-automation',
    shortDescription:
      'AI-powered workflow automation that reduces repetitive work, connects existing business systems and gives teams intelligent tools they actually use.',
    intro: [
      'AI automation is about giving time back. We help businesses reduce repetitive work, improve workflows and put intelligent automation where it genuinely helps — AI assistants, automated data processing and integrations that connect the systems a business already uses.',
      'We explain automation in plain language to non-technical owners: what it does, where it fits, and what it never touches. No invented products or partnerships — just practical automation built around your process, from AI-powered business tools to API-based workflows that move data between your existing systems.',
    ],
    capabilities: [
      {
        title: 'AI-powered workflow automation',
        description:
          'Repetitive, rule-based steps — approvals, updates, notifications — handled automatically so people only step in where judgement is needed.',
      },
      {
        title: 'Business process automation',
        description:
          'End-to-end processes redesigned around automation, from intake to record-keeping.',
      },
      {
        title: 'AI assistants',
        description:
          'Conversational assistants — like the chatbot with voice input built into PlugPro ERP — that answer questions about the business in plain language.',
      },
      {
        title: 'Intelligent integrations',
        description:
          'Connecting existing business systems so data moves between them without copy-paste.',
      },
      {
        title: 'Automated data processing',
        description:
          'Cleaning, structuring and moving data automatically, with people reviewing the outcomes that matter.',
      },
      {
        title: 'API-based automation',
        description:
          'Workflows that trigger across tools through their APIs — reliable, observable and editable.',
      },
      {
        title: 'AI-powered business tools',
        description:
          'Practical internal tools that put AI where it helps: summarising, drafting, checking and answering.',
      },
      {
        title: 'Custom automation solutions',
        description:
          'When off-the-shelf tools don’t fit, we build the automation around your process instead of forcing your process into the tool.',
      },
    ],
    problems: [
      {
        title: '“The same manual work every week.”',
        description:
          'We identify the repetitive steps in your workflow and automate them, so effort goes to decisions instead of data entry.',
      },
      {
        title: '“Our systems don’t talk to each other.”',
        description:
          'We connect the tools you already use through their APIs, so records stop living in five different places.',
      },
      {
        title: '“We don’t know where AI helps.”',
        description:
          'We start from your process, point to the concrete steps worth automating, and explain each one in plain language before building.',
      },
      {
        title: '“Answers live in someone’s head.”',
        description:
          'AI assistants put business answers a question away — the same principle behind the AI assistant in PlugPro ERP.',
      },
    ],
    stack: [
      {
        group: 'Automation',
        items: [
          'Workflow automation',
          'API-based automation',
          'Automated data processing',
        ],
      },
      {
        group: 'Intelligence',
        items: ['AI assistants', 'AI-powered business tools'],
      },
      {
        group: 'Integration',
        items: ['System connections', 'Custom integrations'],
      },
    ],
    approach: [
      {
        title: 'Walk through the process',
        description:
          'We map how the work actually happens — every hand-off, copy-paste and waiting step — before proposing what to automate.',
      },
      {
        title: 'Pick the high-value steps',
        description:
          'Automation is applied where it clearly pays off; the rest stays human. You see the plan in plain language first.',
      },
      {
        title: 'Build, connect, explain',
        description:
          'We build the workflow or assistant, connect it to your systems, and document what it does and what it never touches.',
      },
      {
        title: 'Review with real work',
        description:
          'Automation runs against your real process, we review the outcomes together and refine until it earns its place.',
      },
    ],
    relatedProjects: ['plugpro-erp'],
  },
]

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug)
}
