import type { Project } from '@/types'

/**
 * Project inventory — extracted from Portfolio.pdf (all five projects,
 * verbatim facts, copy edited only for grammar and presentation).
 *
 * Notes kept on purpose:
 *  - The PDF states no per-project frameworks, so `technologies` holds
 *    PDF-confirmed capability tags instead of assumed stacks.
 *  - The PDF contains no GitHub or live URLs → `null` (never invented).
 *  - Images are the project mockups embedded in the PDF itself.
 */
export const projects: Project[] = [
  {
    id: 'plugpro-erp',
    title: 'PlugPro ERP',
    slug: 'plugpro-erp',
    shortDescription:
      'An AI-powered, mobile-first ERP that puts employees, projects, attendance, expenses, finance, banking, vendors and orders in one app — so owners can approve, track and decide from their phone.',
    overview:
      'PlugPro ERP is built for business owners who need control over their operations without being tied to a desk or juggling separate tools. A three-tier role structure keeps every function reachable, while a clean, focused interface replaces a bloated enterprise suite.',
    fullDescription: [
      'PlugPro ERP is an AI-powered, mobile-first ERP built for business owners who need control over their operations without being tied to a desk or juggling separate tools. Employees, projects, attendance, expenses, finance, banking, vendors and orders live in one app, so owners can approve, track and decide from their phone.',
      'The platform runs on a three-tier role structure: Admin, Manager and Employee. Admins create and manage Managers, Managers create and manage Employees, and the Admin oversees both levels. Access Control sits with the Admin alone, who decides which modules and features each role can use — every business gets a clean, focused interface instead of a bloated enterprise suite.',
      'Operations stay connected in real time. Push notifications deliver instant alerts for project submissions, expense approvals and attendance anomalies, and multi-tenant data isolation means every business runs in a fully separate data environment.',
    ],
    category: 'Mobile ERP Platform',
    categories: ['Mobile Apps', 'Business Software'],
    sector: 'Business Management',
    technologies: [
      'AI Assistant',
      'Voice Input',
      'Role-based Access Control',
      'Push Notifications',
      'Multi-tenant Architecture',
      'Mobile-first Design',
    ],
    features: [
      {
        title: 'AI assistant',
        description:
          'A chatbot with voice input for asking questions about the business.',
      },
      {
        title: 'Role-based hierarchy',
        description:
          'Admin, Manager and Employee roles, with Admins creating Managers and Managers creating Employees.',
      },
      {
        title: 'Admin control',
        description:
          'Full oversight of Managers and Employees, plus exclusive Access Control to enable or disable modules and permissions.',
      },
      {
        title: "Manager's Hub",
        description:
          'One place for Employees, Projects, Banking, Expenses, Finance and Attendance.',
      },
      {
        title: 'Manager area',
        description:
          'Employee profiles, salary management, attendance management, team expense management, vendor management and order management.',
      },
      {
        title: 'Project-centric management',
        description: 'Track costs, teams and deliverables per project.',
      },
      {
        title: 'Real-time push notifications',
        description:
          'Instant alerts for project submissions, expense approvals and attendance anomalies.',
      },
      {
        title: 'Multi-tenant data isolation',
        description:
          'Every business runs in a fully separate data environment.',
      },
    ],
    problem:
      'Business owners juggle separate tools for people, projects, money and attendance — and most decisions still wait until they are back at a desk. Routine approvals stall, records drift out of sync, and small businesses end up paying for enterprise suites they never fully use.',
    solution:
      'PlugPro ERP consolidates operations into a single mobile-first application organised around a three-tier role hierarchy. The Admin controls which modules each role can access, Managers run their teams from one hub, and an AI assistant with voice input answers questions about the business directly inside the app.',
    thumbnail: '/images/projects/plugpro-erp.jpg',
    thumbnailAlt:
      'Preview of PlugPro ERP, an AI-powered mobile ERP shown across four phone screens',
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: 'kartly',
    title: 'Kartly',
    slug: 'kartly',
    shortDescription:
      'A mobile shopping app built around a smooth path from discovery to purchase — search, browse by category or brand and check out without leaving the app.',
    overview:
      'Kartly gives shoppers a complete store in their pocket: layered discovery surfaces, detailed product pages, a persistent cart and a dedicated orders screen — wrapped in a polished interface with a custom app bar, bottom navigation and curved design elements.',
    fullDescription: [
      'Kartly is a mobile shopping app built around a smooth path from discovery to purchase. Shoppers can search, browse by category or brand and check out without leaving the app. The home experience layers search, scrolling and tabbed categories, banner sliders, featured brands and sub-categories with horizontal product scrolling.',
      'Product pages carry image galleries, descriptions and selectable attributes and variations such as size and colour, so shoppers can decide with confidence. Ratings and reviews let shoppers read and leave feedback on products, and a wishlist saves products for later.',
      'Checkout is deliberately short: quantities are managed in the cart, delivery addresses are saved for reuse and orders are placed without leaving the app. A dedicated orders screen covers past and current purchases, while profile and settings screens manage personal details — all held together by a polished, curved design language.',
    ],
    category: 'Mobile Shopping App',
    categories: ['Mobile Apps', 'E-Commerce'],
    sector: 'Retail & E-Commerce',
    technologies: [
      'Mobile Commerce',
      'Product Catalog',
      'Cart & Checkout',
      'Ratings & Reviews',
      'Wishlist',
      'Order Tracking',
    ],
    features: [
      {
        title: 'Discovery',
        description:
          'Search, scrolling and tabbed categories, banner sliders, featured brands and sub-categories with horizontal product scrolling.',
      },
      {
        title: 'Product browsing',
        description:
          'A responsive grid layout, “View All” product listings and brand-specific product pages.',
      },
      {
        title: 'Product details',
        description:
          'Image galleries, descriptions and selectable attributes and variations such as size and colour.',
      },
      {
        title: 'Ratings and reviews',
        description: 'Shoppers can read and leave feedback on products.',
      },
      { title: 'Wishlist', description: 'Save products for later.' },
      {
        title: 'Cart and checkout',
        description:
          'Manage quantities, save delivery addresses and place orders.',
      },
      {
        title: 'Order tracking',
        description:
          'A dedicated orders screen for past and current purchases.',
      },
      {
        title: 'Account',
        description:
          'Profile and settings screens for managing personal details.',
      },
      {
        title: 'Polished UI',
        description:
          'Custom app bar, bottom navigation and curved design elements.',
      },
    ],
    problem:
      'Mobile shoppers abandon purchases when the path from discovery to checkout is long — hunting through menus, re-entering delivery details, or being pushed out of the app to complete an order.',
    solution:
      'Kartly compresses the journey into one app: tabbed discovery surfaces, rich product pages with selectable variations, a persistent cart with saved delivery addresses and an orders screen that keeps every purchase traceable.',
    thumbnail: '/images/projects/kartly.jpg',
    thumbnailAlt:
      'Preview of Kartly, a mobile shopping app shown across four phone screens',
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: 'tidyo',
    title: 'Tidyo',
    slug: 'tidyo',
    shortDescription:
      'A home cleaning platform that turns a phone-call-and-wait service into a booking experience as fast as ordering a ride — vetted services, transparent pricing and a visit scheduled in under a minute.',
    overview:
      'Tidyo users discover vetted cleaning services, see exactly what is included and what it costs, then schedule a visit around their day in under a minute — recurring upkeep, deep cleaning, kitchen and bathroom cleaning, move-in/move-out cleaning and more.',
    fullDescription: [
      'Tidyo is a home cleaning platform that turns a phone-call-and-wait service into a booking experience as fast as ordering a ride. Users discover vetted cleaning services, see exactly what is included and what it costs, then schedule a visit around their day in under a minute.',
      'The catalog covers regular recurring upkeep, deep cleaning, kitchen and bathroom cleaning and move-in/move-out cleaning, with additional specialised services beyond these. Each service shows its starting price, estimated duration, ratings and reviews and an itemised “what’s included” checklist, so expectations are set before booking.',
      'Scheduling stays flexible — weekly or biweekly frequency, a date picker and time-slot selection — and saved addresses make rebooking any location a few taps. Upcoming and past cleanings plus account details live in one place, behind a clean, focused UI with clear calls to action at every step.',
    ],
    category: 'Service Booking Platform',
    categories: ['Mobile Apps', 'Booking & Scheduling'],
    sector: 'Home Services',
    technologies: [
      'Booking System',
      'Flexible Scheduling',
      'Location Selection',
      'Transparent Pricing',
      'Recurring Services',
    ],
    features: [
      {
        title: 'Service discovery',
        description:
          'Location selection, search and a categorized catalog with clear descriptions.',
      },
      {
        title: 'Transparent service details',
        description:
          'Starting price, estimated duration, ratings, reviews and an itemised “what’s included” checklist.',
      },
      {
        title: 'Flexible scheduling',
        description:
          'Weekly or biweekly frequency, a date picker and time-slot selection.',
      },
      {
        title: 'Saved addresses',
        description: 'Rebook at any location in a few taps.',
      },
      {
        title: 'Booking management',
        description:
          'Upcoming and past cleanings plus account settings in one place.',
      },
      {
        title: 'Clean, focused UI',
        description:
          'A short path from browsing to confirmation, with clear calls to action at every step.',
      },
      {
        title: 'Bookings and profile',
        description:
          'One place to track upcoming and past cleanings and manage account details.',
      },
    ],
    problem:
      'Booking home cleaning is still a phone-call-and-wait process: unclear pricing, unknown scope and scheduling that depends on someone else’s callback.',
    solution:
      'Tidyo standardises the whole flow — a categorized catalog with transparent pricing and inclusions, flexible scheduling with time slots, saved addresses for rebooking and a bookings screen that keeps every visit on record.',
    thumbnail: '/images/projects/tidyo.jpg',
    thumbnailAlt:
      'Preview of Tidyo, an on-demand home cleaning booking app shown across three phone screens',
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
  {
    id: 'ips-driving-school',
    title: 'IPS Driving School',
    slug: 'ips-driving-school',
    shortDescription:
      'A responsive website for I Passing Smiles, a driving school in Glasgow — one place for learners to explore courses, book lessons, read driving advice and pay online, turning visitors into bookings.',
    overview:
      'I Passing Smiles (IPS) is a responsive website built for a driving school in Glasgow. It gives learners one place to explore courses, book lessons, read driving advice and pay online, while giving the school a professional, trust-focused presence.',
    fullDescription: [
      'I Passing Smiles (IPS) is a responsive website built for a driving school in Glasgow. It gives learners one place to explore courses, book lessons, read driving advice and pay online, while giving the school a professional, trust-focused presence that turns visitors into bookings.',
      'Structured course pages set out clear pricing so learners can compare options and choose the right package, and secure online payments mean paying for courses no longer requires calling or visiting. An SEO-friendly blog publishes driving tips and advice that builds authority and brings in search traffic.',
      'A dedicated “Become an Instructor” page lets the school attract new instructors through the same site, and a persistent “Get Started Now” call to action in the navigation and hero guides visitors toward booking. The layout adapts cleanly from desktop to mobile — including a readable blog experience on phones — in a navy and amber palette that matches the school’s logo and reads as professional but friendly.',
    ],
    category: 'Business Website',
    categories: ['Web Platforms', 'Booking & Scheduling'],
    sector: 'Driving Education — Glasgow, UK',
    technologies: [
      'Online Payments',
      'Course Pages',
      'SEO Blog',
      'Instructor Recruitment',
      'Responsive Design',
      'Conversion-focused UI',
    ],
    features: [
      {
        title: 'Course management',
        description:
          'Structured course pages with clear pricing, so learners can compare options and choose the right package.',
      },
      {
        title: 'Online payments',
        description:
          'Secure checkout so learners can pay for courses without calling or visiting.',
      },
      {
        title: 'Blog and articles',
        description:
          'An SEO-friendly content section with driving tips and advice that builds authority and brings in search traffic.',
      },
      {
        title: 'Instructor recruitment',
        description:
          'A dedicated “Become an Instructor” page that lets the school attract new instructors through the same site.',
      },
      {
        title: 'Conversion-focused design',
        description:
          'A persistent “Get Started Now” call to action in the navigation and hero, guiding visitors toward booking.',
      },
      {
        title: 'Fully responsive',
        description:
          'A layout that adapts cleanly from desktop to mobile, including a readable blog experience on phones.',
      },
      {
        title: 'Brand-aligned UI',
        description:
          'A navy and amber palette that matches the school’s logo and reads as professional but friendly.',
      },
    ],
    problem:
      'Driving schools often rely on phone enquiries alone: pricing is opaque, booking requires a call during office hours and there is no web presence to capture learners searching online.',
    solution:
      'The IPS website packages courses, pricing, payments and advice into one conversion-focused site — a persistent “Get Started Now” CTA, secure checkout, an SEO blog and an instructor recruitment page — fully responsive and aligned to the school’s brand.',
    thumbnail: '/images/projects/ips-driving-school.jpg',
    thumbnailAlt:
      'Preview of the IPS Driving School website shown on a laptop and phone',
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    featured: true,
  },
  {
    id: 'raziagul',
    title: 'Raziagul',
    slug: 'raziagul',
    shortDescription:
      'A responsive e-commerce website for the clothing brand RaziaGul — a complete path from browsing to purchase in one place, with no redirects, DMs or manual order messages.',
    overview:
      'Raziagul gives customers a complete path from browsing to purchase in one place. Shoppers explore the collection, open detailed product pages and pay directly on the website — the design keeps the focus on the clothing, so the brand’s products are the first thing visitors see.',
    fullDescription: [
      'Raziagul is a responsive e-commerce website built for a clothing brand, giving customers a complete path from browsing to purchase in one place. Shoppers explore the collection, open detailed product pages and pay directly on the website — with no redirects, DMs or manual order messages.',
      'A clean product listing page presents the full collection with product images, names and prices for quick browsing. Product detail pages carry large product imagery, descriptions, pricing and size and colour selection, so shoppers have what they need to decide.',
      'Direct online payments and a short cart-to-checkout flow let customers pay and place an order without leaving the site. The layout adapts cleanly from desktop to mobile, where most fashion shoppers browse, and the visual style is built around the RaziaGul identity, so the site feels like the brand and not a template.',
    ],
    category: 'E-Commerce Website',
    categories: ['Web Platforms', 'E-Commerce'],
    sector: 'Fashion & Apparel',
    technologies: [
      'E-Commerce',
      'Online Payments',
      'Product Catalog',
      'Size & Colour Variations',
      'Responsive Design',
    ],
    features: [
      {
        title: 'Product listing page',
        description:
          'A clean grid of the full collection, with product images, names and prices, built for quick browsing.',
      },
      {
        title: 'Product detail page',
        description:
          'Large product imagery, description, pricing and size and colour selection, so shoppers have what they need to decide.',
      },
      {
        title: 'Direct online payments',
        description:
          'Secure checkout on the website, so customers can pay and place an order without leaving the site.',
      },
      {
        title: 'Cart and checkout flow',
        description:
          'A short path from adding a product to confirming an order.',
      },
      {
        title: 'Fully responsive',
        description:
          'A layout that adapts cleanly from desktop to mobile, where most fashion shoppers browse.',
      },
      {
        title: 'Brand-aligned UI',
        description:
          'A visual style built around the RaziaGul identity, so the site feels like the brand and not a template.',
      },
    ],
    problem:
      'Clothing brands selling through social channels lose customers to redirects, DMs and manual order messages — every extra step between a product photo and payment is a dropped sale.',
    solution:
      'The RaziaGul site brings the whole purchase on-website: a browsable catalog, informative product pages with size and colour selection and secure on-site checkout with a short cart-to-order flow, wrapped in the brand’s own visual identity.',
    thumbnail: '/images/projects/raziagul.jpg',
    thumbnailAlt:
      'Preview of the RaziaGul e-commerce website shown on a laptop and phone',
    gallery: [],
    githubUrl: null,
    liveUrl: null,
    featured: false,
  },
]

export const featuredProjects = projects.filter((p) => p.featured)

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}

/** Facets used by the projects page filter. */
export const projectCategories = [
  'All',
  'Mobile Apps',
  'Web Platforms',
  'E-Commerce',
  'Business Software',
  'Booking & Scheduling',
]
