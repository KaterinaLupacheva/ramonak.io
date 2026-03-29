import Image from "next/image";
import Link from "next/link";
import Social from "./components/Social/Social";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./page.module.css";

const proofPoints = [
  {
    title: "Data-heavy interfaces",
    description:
      "Dashboards, scheduling views, KPI tracking, tables, charts, and operational UIs built to stay clear under complexity.",
  },
  {
    title: "Complex integrations",
    description:
      "Hands-on integration work across ecommerce, ads, analytics, notifications, auth, cloud services, and async processing.",
  },
  {
    title: "Production architecture",
    description:
      "Experience with multi-tenant SaaS, RBAC, ETL flows, protected routes, exports, PWA support, and internationalization.",
  },
];

const capabilities = [
  "Multi-tenant SaaS",
  "Real-time dashboards",
  "Data visualization",
  "System integrations",
  "RBAC and auth",
  "Internationalization",
];

const selectedWork = [
  {
    title: "StoreHero",
    href: "/projects#storehero",
    ctaLabel: "View Case Study",
    label: "Ecommerce analytics SaaS",
    description:
      "A multi-tenant ecommerce analytics platform combining profitability reporting, LTV insights, marketing attribution, and AI-assisted analysis across a large integration surface.",
    detail:
      "Built around ETL flows, async processing, AI-assisted analytics with streaming chat and GPT-4 integration, exports, and integrations spanning Shopify, ads platforms, analytics, messaging, and AWS services.",
    image: "/images/storehero.png",
  },
  {
    title: "Matics",
    href: "/projects#matics",
    ctaLabel: "View Case Study",
    label: "Manufacturing operations software",
    description:
      "Real-time operations software for manufacturing, with live dashboards, scheduling views, KPI tracking, multilingual support, and complex frontend workflows.",
    detail:
      "Frontend work across charts, diagrams, drag-and-drop flows, enterprise auth, and interfaces designed for high-density operational decision-making.",
    image: "/images/matics.png",
  },
  {
    title: "bekiPay",
    href: "/projects#bekipay-sikoba",
    ctaLabel: "View Case Study",
    label: "React Native fintech app",
    description:
      "A cross-platform fintech app with peer-to-peer payments, multi-currency support, and a dual-key ECDSA cryptographic account architecture across iOS and Android.",
    detail:
      "The most technically distinctive project in the portfolio for its security model: BIP32/BIP39 HD wallet integration, signature-based API auth, encrypted seed storage, and configurable SSL pinning.",
    image: "/images/bekiPay.png",
  },
];

const workingStyle = [
  "I care about clean implementation as much as usable, high-quality interfaces.",
  "I’m most valuable on products with messy data, multiple integrations, evolving requirements, and interfaces that need to stay usable under complexity.",
  "I’m comfortable turning ambiguous product needs into clear, shippable features that balance product thinking with engineering depth.",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Kate Lupachova</p>
            <h1 className={styles.headline}>
              Full-stack developer building polished web products.
            </h1>
            <p className={styles.subhead}>
              I build React and Node.js products for complex, data-heavy
              workflows, from multi-tenant SaaS platforms and admin systems to
              real-time dashboards and integration-heavy web apps.
            </p>
            <div className={styles.heroActions}>
              <a href="#selected-work" className={styles.primaryAction}>
                View Projects
              </a>
              <a href="#contact-form" className={styles.secondaryAction}>
                Contact Me
              </a>
              <Link href="/about" className={styles.textAction}>
                Read about me
              </Link>
            </div>
            <div className={styles.heroMeta}>
              <p className={styles.availability}>
                Available for select freelance and product roles.
              </p>
              <Social />
            </div>
          </div>

          <div className={styles.heroPanel}>
            <div className={styles.panelHeader}>
              <span className={styles.panelLabel}>What I bring</span>
              <p className={styles.panelHint}>
                Web-focused, product-minded, and comfortable with integration
                complexity.
              </p>
            </div>

            <div className={styles.chipGrid}>
              {proofPoints.map((point) => (
                <article key={point.title} className={styles.chip}>
                  <p className={styles.chipTitle}>{point.title}</p>
                  <p className={styles.chipDescription}>{point.description}</p>
                </article>
              ))}
            </div>

            <p className={styles.panelFootnote}>
              Recent work spans dashboards, ecommerce tooling, analytics
              integrations, and internal platforms.
            </p>
          </div>
        </div>
      </section>

      <section className={styles.capabilitiesSection}>
        <p className={styles.sectionEyebrow}>Technical areas</p>
        <div className={styles.capabilitiesList}>
          {capabilities.map((item) => (
            <span key={item} className={styles.capability}>
              {item}
            </span>
          ))}
        </div>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Selected work</p>
          <h2 className={styles.sectionTitle}>
            A few products that show the range of my work.
          </h2>
        </div>

        <div className={styles.workGrid}>
          {selectedWork.map((project) => (
            <article key={project.title} className={styles.workCard}>
              <div className={styles.workImageWrap}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={960}
                  height={640}
                  className={styles.workImage}
                />
              </div>

              <div className={styles.workBody}>
                <div className={styles.workHeading}>
                  <div>
                    <p className={styles.workLabel}>{project.label}</p>
                    <h3 className={styles.workTitle}>{project.title}</h3>
                  </div>
                  <Link href={project.href} className={styles.workLink}>
                    {project.ctaLabel}
                  </Link>
                </div>

                <p className={styles.workDescription}>{project.description}</p>
                <p className={styles.workDetail}>{project.detail}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.approachSection}>
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>How I work</p>
          <h2 className={styles.sectionTitle}>
            Product-minded execution, clean code, and a strong eye for interface
            quality.
          </h2>
        </div>

        <div className={styles.approachPanel}>
          {workingStyle.map((item) => (
            <p key={item} className={styles.approachItem}>
              {item}
            </p>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
