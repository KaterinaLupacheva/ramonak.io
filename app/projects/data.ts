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
      "A multi-tenant ecommerce analytics product family focused on profitability, LTV, marketing performance, and integration-heavy merchant workflows.",
    context:
      "I am currently working across both the merchant-facing analytics platform and the internal admin tooling, covering product UX, analytics complexity, multi-tenant architecture, and operational depth.",
    image: "/images/storehero.png",
    links: [
      {
        label: "Visit company",
        href: "https://storehero.ai",
      },
    ],
    highlights: [
      "I work inside a multi-tenant product architecture with store-based tenancy, agency relationships, RBAC, protected routes, and operational tooling.",
      "I implemented and maintain an MCP server with 20+ tools that lets merchants query their StoreHero analytics from any AI client — Claude Desktop, ChatGPT, or any MCP-compatible tool.",
      "I contribute across an integration surface spanning Shopify, Meta Ads, Google Ads, TikTok Ads, Klaviyo, GA4, SendGrid, and multiple AWS services.",
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
          "I build merchant-facing features shaped by ecommerce and marketing data coming from Shopify, ad platforms, analytics tools, and related systems.",
          "I contribute to AI-assisted analytics features with streaming chat, structured insight outputs, forecasting-related tooling, and metric-oriented recommendations.",
          "I work within a hybrid Next.js setup using React, TypeScript, Prisma, PostgreSQL, DynamoDB, Vercel KV, and AWS services.",
          "I work on exports, reporting surfaces, and complex product flows around profitability, LTV, and channel performance.",
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
        slug: "storehero-mcp",
        title: "MCP server",
        eyebrow: "AI integration surface",
        summary:
          "A Model Context Protocol server that lets merchants query their StoreHero analytics from any AI client — Claude Desktop, ChatGPT, or any MCP-compatible tool.",
        context:
          "Implemented and actively maintained as the product expands its AI surface. New tools are added continuously as merchants discover use cases.",
        highlights: [
          "I built and maintain 20+ MCP tools covering merchant analytics, profitability data, LTV metrics, and marketing performance — with more being added.",
          "Merchants connect directly via Claude Desktop, ChatGPT, or other MCP-compatible AI clients to query and explore their own store data.",
          "I work with the MCP SDK, TypeScript, and the Vercel AI SDK to keep the server consistent with the broader platform data model.",
        ],
        stack: [
          "MCP SDK",
          "TypeScript",
          "Next.js",
          "Vercel AI SDK",
          "Prisma + PostgreSQL",
          "DynamoDB",
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
          "I build this surface with Next.js 16 App Router, React 19, and TypeScript 5.",
          "I use TanStack React Query, Prisma, PostgreSQL, Server Actions, and REST routes for admin data and operational workflows.",
          "I work with NextAuth v5, presigned file uploads, async sync queues, feature flags, and agency/store separation.",
        ],
        stack: [
          "Next.js",
          "React",
          "TypeScript",
          "MUI",
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
    eyebrow: "Manufacturing operations platform",
    summary:
      "A manufacturing operations product family centered on real-time monitoring, planning, scheduling, dashboards, and decision-making across industrial environments.",
    context:
      "I am currently working across both the core frontend platform and the real-time cockpit, covering dense data visualization, live operations, multilingual UX, and enterprise authentication.",
    image: "/images/matics.png",
    links: [
      {
        label: "Visit company",
        href: "https://matics.live",
      },
    ],
    highlights: [
      "I build interfaces for operational data, planning, charts, scheduling, diagrams, and decision-making workflows in manufacturing contexts.",
      "I work across strict TypeScript codebases, real-time data patterns, enterprise auth, multilingual products, and PWA-related concerns.",
      "I use advanced UI and visualization libraries to support high-density operational workflows without sacrificing usability.",
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
          "I build charts, scheduling views, tables, virtualized lists, diagrams, drag-and-drop flows, and form-heavy operational interfaces.",
          "I work with React 18, strict TypeScript, Redux Toolkit, Redux-Saga, and a feature-based architecture.",
          "I integrate Highcharts, React-Google-Charts, Bryntum Gantt, React Flow, React Big Calendar, and a React app embedded into a legacy Angular shell.",
        ],
        stack: [
          "React 18",
          "TypeScript",
          "Redux Toolkit",
          "Styled Components",
          "MUI",
          "Highcharts",
          "React Flow",
          "React Hook Form",
        ],
      },
      {
        slug: "matics-cockpit",
        title: "Cockpit real-time dashboard",
        eyebrow: "Live monitoring surface",
        summary:
          "A PWA for factory-floor monitoring, live production status, machine operations, job assignments, quality tracking, and KPI visibility.",
        context:
          "Real-time factory monitoring with enterprise authentication, offline/PWA support, and interfaces designed for fast-moving operational data.",
        highlights: [
          "I build this PWA with React 18, TypeScript 5.7, Vite 6, Redux Toolkit, and React Router 6.",
          "I use SignalR for live bidirectional updates and Axios interceptors for authentication and timezone handling.",
          "I work with Azure Active Directory, MSAL, Okta, reCAPTCHA, 30+ languages, and Workbox-backed PWA capabilities.",
        ],
        stack: [
          "React 18",
          "TypeScript",
          "Vite",
          "Redux Toolkit",
          "React Router 6",
          "Axios",
          "Highcharts",
          "dnd-kit",
          "i18next",
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
