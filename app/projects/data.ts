export type ProjectSurface = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  highlights: string[];
  stack: string[];
};

export type ProjectGroup = {
  slug: string;
  title: string;
  eyebrow: string;
  summary: string;
  context: string;
  image: string;
  links: Array<{
    label: string;
    href: string;
  }>;
  highlights: string[];
  surfaces: ProjectSurface[];
};

export const projectGroups: ProjectGroup[] = [
  {
    slug: "storehero",
    title: "StoreHero",
    eyebrow: "Ecommerce analytics company",
    summary:
      "A multi-tenant ecommerce analytics product family focused on profitability, LTV, marketing performance, store operations, and integration-heavy merchant workflows.",
    context:
      "Work spanning both the merchant-facing analytics platform and the internal admin tooling — covering product UX, analytics complexity, multi-tenant architecture, and operational depth.",
    image: "/images/storehero.png",
    links: [
      {
        label: "Visit company",
        href: "https://storehero.ai",
      },
    ],
    highlights: [
      "Worked inside a multi-tenant product architecture with store-based tenancy, agency relationships, RBAC, protected routes, and operational tooling.",
      "Contributed across an integration surface spanning Shopify, Rutter, Meta Ads, Google Ads, TikTok Ads, Klaviyo, GA4, SendGrid, Stripe, and multiple AWS services.",
      "Supported product capabilities such as ETL processing, async data sync flows, exports, whitelabeling, caching, and PWA support.",
    ],
    surfaces: [
      {
        slug: "storehero-platform",
        title: "Merchant-facing analytics platform",
        eyebrow: "Customer product surface",
        summary:
          "A B2B SaaS platform that gives ecommerce merchants a unified view of profitability, LTV, and marketing performance across channels.",
        context:
          "This side of the product combines analytics-heavy UX, reporting logic, AI-assisted workflows, and a large external integration surface.",
        highlights: [
          "Contributed to AI-assisted analytics features with streaming chat, structured insight outputs, forecasting-related tooling, and metric-oriented recommendations.",
          "Built within a hybrid Next.js setup using React, TypeScript, Prisma, PostgreSQL, DynamoDB, Vercel KV, and AWS services.",
          "Worked on exports, reporting surfaces, and complex merchant-facing product flows shaped by ecommerce and marketing data.",
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "Prisma + PostgreSQL",
          "DynamoDB",
          "Vercel KV",
          "AWS SQS / S3 / Lambda / Cognito",
          "MUI",
          "React Query",
          "ApexCharts / ECharts",
          "Vercel AI SDK",
          "Vitest",
        ],
      },
      {
        slug: "storehero-admin-dashboard",
        title: "Admin dashboard and internal tooling",
        eyebrow: "Operational product surface",
        summary:
          "An internal system for managing stores, agency relationships, sync workflows, feature flags, files, and platform-level operations.",
        context:
          "Internal tooling for managing stores, sync queues, multi-tenant controls, feature flags, presigned file uploads, and platform operations.",
        highlights: [
          "Built with Next.js 16 App Router, React 19, and TypeScript 5.",
          "Used TanStack React Query, Prisma, PostgreSQL, Server Actions, and REST routes for admin data and operational workflows.",
          "Worked with NextAuth v5, presigned file uploads, async sync queues, feature flags, and agency/store separation.",
        ],
        stack: [
          "Next.js 16",
          "React 19",
          "TypeScript 5",
          "MUI",
          "Styled Components",
          "Emotion",
          "CSS Modules",
          "TanStack React Query",
          "Prisma",
          "PostgreSQL",
          "NextAuth",
          "S3 / DynamoDB / SQS / Cognito",
        ],
      },
    ],
  },
  {
    slug: "matics",
    title: "Matics",
    eyebrow: "Manufacturing software company",
    summary:
      "A manufacturing operations product family centered on real-time monitoring, planning, scheduling, dashboards, and decision-making across industrial environments.",
    context:
      "Work spanning both the core frontend platform and the real-time cockpit — covering dense data visualization, live operations, multilingual UX, and enterprise authentication.",
    image: "/images/matics.png",
    links: [
      {
        label: "Visit company",
        href: "https://matics.live",
      },
    ],
    highlights: [
      "Built interfaces for operational data, planning, charts, scheduling, diagrams, and decision-making workflows in manufacturing contexts.",
      "Worked across strict TypeScript codebases, real-time data patterns, enterprise auth, multilingual products, and PWA-related concerns.",
      "Used advanced UI and visualization libraries to support high-density operational workflows without sacrificing usability.",
    ],
    surfaces: [
      {
        slug: "matics-platform",
        title: "Core frontend platform",
        eyebrow: "Planning and operations surface",
        summary:
          "A real-time operational interface for production monitoring, planning, and workflow coordination across industrial environments.",
        context:
          "Dense visualization, advanced interaction patterns, feature-based architecture, and a React app embedded into a legacy Angular shell.",
        highlights: [
          "Built charts, scheduling views, tables, virtualized lists, diagrams, drag-and-drop flows, and form-heavy operational interfaces.",
          "Worked with React 18, strict TypeScript, Redux Toolkit, Redux-Saga, and a feature-based architecture.",
          "Integrated Highcharts, React-Google-Charts, Bryntum Gantt, React Flow, React Big Calendar, and a React app embedded into a legacy Angular shell.",
        ],
        stack: [
          "React 18",
          "TypeScript",
          "Redux Toolkit",
          "Redux-Saga",
          "Styled Components",
          "MUI",
          "Highcharts",
          "React Flow",
          "Bryntum Gantt",
          "React Hook Form",
          "Vitest",
          "Webpack 5",
        ],
      },
      {
        slug: "matics-cockpit",
        title: "Cockpit real-time dashboard",
        eyebrow: "Live monitoring surface",
        summary:
          "A PWA for factory-floor monitoring, live production status, machine operations, job assignments, quality tracking, and KPI visibility.",
        context:
          "Real-time factory monitoring with enterprise authentication (Azure AD, MSAL, Okta), offline/PWA support, and interfaces designed for fast-moving operational data.",
        highlights: [
          "Built with React 18, TypeScript 5.7, Vite 6, Redux Toolkit, and React Router 6.",
          "Used SignalR for live bidirectional updates and Axios interceptors for authentication and timezone handling.",
          "Worked with Azure Active Directory, MSAL, Okta, reCAPTCHA, 30+ languages, and Workbox-backed PWA capabilities.",
        ],
        stack: [
          "React 18",
          "TypeScript 5.7",
          "Vite 6",
          "Redux Toolkit",
          "React Router 6",
          "SignalR",
          "Axios",
          "Highcharts",
          "dnd-kit",
          "i18next",
          "Workbox",
          "Express",
        ],
      },
    ],
  },
  {
    slug: "bekipay-sikoba",
    title: "bekiPay / Sikoba",
    eyebrow: "Fintech product",
    summary:
      "A cross-platform fintech product with peer-to-peer payments, IOU and credit-line features, multi-currency support, and secure account workflows.",
    context:
      "An older standalone mobile project, and the most technically distinctive in the portfolio for its cryptographic account architecture and security-focused implementation.",
    image: "/images/bekiPay.png",
    links: [
      {
        label: "Google Play listing",
        href: "https://play.google.com/store/apps/details?id=com.sikoba.bekiPay&hl=en&gl=US&pli=1",
      },
    ],
    highlights: [
      "Built with React Native and TypeScript across iOS and Android, with 59+ screens and domain-based state management.",
      "Implemented signature-based API authentication, encrypted seed storage, configurable SSL pinning, and dual-key account architecture.",
      "Worked on QR payments, transaction history polling, IBAN integration, multi-currency financial flows, and 10+ language support.",
    ],
    surfaces: [
      {
        slug: "bekipay-app",
        title: "Mobile app and supporting tooling",
        eyebrow: "Standalone product surface",
        summary:
          "A cross-platform mobile product for secure payments, credit-line management, and customer financial workflows.",
        context:
          "The cryptographic account architecture and security model are the most technically distinctive aspects — a dual-key ECDSA scheme with BIP32/BIP39 wallet integration, encrypted seed storage, and configurable SSL pinning.",
        highlights: [
          "Built with React Native 0.63, TypeScript 4, Redux, Redux Thunk, React Navigation, and React Hook Form.",
          "Implemented BIP32/BIP39 wallet and seed workflows, ECDSA-based account security, local encryption, and configurable SSL pinning.",
          "Shipped QR code payments, transaction status polling, bank-account integration, and multi-currency user flows.",
        ],
        stack: [
          "React Native",
          "TypeScript",
          "Redux",
          "Redux Thunk",
          "React Navigation",
          "React Hook Form",
          "bitcoinjs-lib",
          "Crypto.js",
          "i18next",
          "Jest",
        ],
      },
    ],
  },
];
