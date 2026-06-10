import Link from "next/link";
import SocialLinks from "./components/SocialLinks/SocialLinks";
import WorkCard from "./components/WorkCard/WorkCard";
import styles from "./page.module.css";

const selectedWork = [
  {
    title: "StoreHero",
    externalHref: "https://storehero.ai",
    label: "Ecommerce analytics",
    summary:
      "Multi-tenant analytics for profitability, LTV, and marketing decisions.",
    detail:
      "Customer-facing analytics, AI-assisted insights, an MCP server for merchant AI clients, and internal tooling across integrations, exports, and complex workflows.",
    image: "/images/storehero.png",
    stack: [
      "Next.js",
      "React",
      "TypeScript",
      "Prisma",
      "PostgreSQL",
      "DynamoDB",
      "AWS",
      "MUI",
    ],
    highlights: [
      "Multi-tenant architecture with RBAC and protected routes",
      "Integrations: Shopify, Meta Ads, Google Ads, TikTok, Klaviyo, GA4, etc.",
      "MCP server with 20+ tools — merchants query their analytics from Claude Desktop, ChatGPT, or any AI client",
    ],
  },
  {
    title: "Matics",
    externalHref: "https://matics.live",
    label: "Manufacturing operations",
    summary:
      "Real-time platform for factory-floor planning, monitoring, and response.",
    detail:
      "High-density dashboards and workflow surfaces built to stay legible in fast-moving factory environments.",
    image: "/images/matics.png",
    stack: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "Highcharts",
      "React Flow",
      "i18next",
      "PWA",
    ],
    highlights: [
      "Live factory-floor monitoring with bidirectional updates",
      "10+ languages, Azure AD / Okta enterprise auth, PWA/offline support",
      "Charts, Gantt, scheduling views, drag-and-drop, dense data tables",
    ],
  },
  {
    title: "bekiPay / Sikoba",
    externalHref:
      "https://play.google.com/store/apps/details?id=com.sikoba.bekiPay",
    label: "Fintech mobile product",
    summary:
      "Local currency and IOU platform built for community-scale financial trust.",
    detail:
      "bekiPay enables local currency payments in Luxembourg; Sikoba handles peer IOU tracking with automated clearing — both built on a shared React Native foundation.",
    image: "/images/bekiPay.png",
    stack: [
      "React Native",
      "TypeScript",
      "Redux",
      "React Navigation",
      "bitcoinjs-lib",
      "i18next",
      "Jest",
    ],
    highlights: [
      "59+ screens across iOS & Android with domain-based state management",
      "BIP32/BIP39 dual-key ECDSA architecture, encrypted seed storage, SSL pinning",
      "QR payments, IBAN integration, multi-currency flows, 10+ languages",
    ],
  },
];

const workingStyle = [
  {
    badge: "01",
    title: "Start with the working surface",
    description:
      "I map the decisions a screen needs to support before thinking about polish, so the interface earns its complexity instead of hiding it.",
  },
  {
    badge: "02",
    title: "Own the full slice",
    description:
      "From data shape to UI states, I follow the whole path so integration issues get solved early and the product feels coherent.",
  },
  {
    badge: "03",
    title: "Ship in meaningful increments",
    description:
      "I prefer small, working milestones that create feedback loops quickly instead of long stretches of hidden progress.",
  },
  {
    badge: "04",
    title: "Keep collaboration visible",
    description:
      "Good async notes, explicit trade-offs, and honest status updates are part of the delivery work, not extra admin around it.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroCopy}>
              <p className={styles.heroEyebrow}>Full-stack engineer</p>
              <h1 className={styles.headline}>
                <span className={styles.headlineIntro}>Hi, I&apos;m Kate.</span>
                <span className={styles.headlineMain}>
                  I build full-stack products where the hard parts stay
                  invisible.
                </span>
              </h1>
              <p className={styles.subhead}>
                Full-stack work for analytics, operations, and integration-heavy
                products that still feel clear in use.
              </p>
              <div className={styles.heroActions}>
                <Link href="/projects" className={styles.primaryAction}>
                  View selected work
                </Link>
                <Link href="/contact" className={styles.tertiaryAction}>
                  Start a conversation →
                </Link>
              </div>
              <SocialLinks
                className={styles.heroSocial}
                linkClassName={styles.heroSocialLink}
              />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Selected work</p>
          <h2 className={styles.sectionTitle}>
            Real products built for real constraints.
          </h2>
          <p className={styles.sectionDescription}>
            A few projects that show how I work across analytics depth,
            operational speed, and trust-heavy customer experiences.
          </p>
        </div>

        <div className={styles.workList}>
          {selectedWork.map((project, index) => (
            <WorkCard
              key={project.title}
              project={project}
              reverse={index % 2 === 1}
            />
          ))}
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>How I work</p>
          <h2 className={styles.sectionTitle}>
            A delivery style built for collaboration and difficult product
            surfaces.
          </h2>
        </div>

        <div className={styles.approachList}>
          {workingStyle.map((item) => (
            <article key={item.badge} className={styles.approachItem}>
              <span className={styles.approachBadge}>{item.badge}</span>
              <div className={styles.approachBody}>
                <h3 className={styles.approachTitle}>{item.title}</h3>
                <p className={styles.approachDescription}>{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
