import Image from "next/image";
import Link from "next/link";
import Social from "./components/Social/Social";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./page.module.css";

const proofPoints = [
  {
    title: "Analytics and ETL",
    description:
      "Product work around reporting, profitability, LTV, marketing performance, exports, and async data flows.",
  },
  {
    title: "Operational interfaces",
    description:
      "Real-time dashboards, planning views, KPI tracking, charts, tables, and workflows for fast-moving environments.",
  },
  {
    title: "Integration-heavy systems",
    description:
      "Experience with multi-tenant SaaS, enterprise auth, internal tooling, cloud services, and third-party platform integrations.",
  },
];

const capabilities = [
  "Multi-tenant SaaS",
  "Analytics + ETL",
  "Real-time dashboards",
  "Admin platforms",
  "Enterprise auth",
  "PWA support",
];

const selectedWork = [
  {
    title: "StoreHero",
    href: "/projects#storehero",
    ctaLabel: "View Project",
    label: "Ecommerce analytics product family",
    description:
      "A multi-tenant ecommerce analytics platform focused on profitability, LTV, marketing performance, and merchant reporting.",
    detail:
      "I currently work across both the merchant-facing analytics product and internal admin tooling, covering integrations, ETL flows, async processing, exports, and AI-assisted analytics.",
    image: "/images/storehero.png",
  },
  {
    title: "Matics",
    href: "/projects#matics",
    ctaLabel: "View Project",
    label: "Manufacturing operations product family",
    description:
      "A real-time operations platform for production monitoring, planning, scheduling, dashboards, and decision-making in industrial environments.",
    detail:
      "I currently work across the core frontend platform and the live cockpit, building dense operational interfaces with charts, scheduling views, multilingual support, enterprise auth, and PWA capabilities.",
    image: "/images/matics.png",
  },
  {
    title: "bekiPay / Sikoba",
    href: "/projects#bekipay-sikoba",
    ctaLabel: "View Project",
    label: "Fintech mobile product",
    description:
      "A cross-platform fintech app for peer-to-peer payments, credit-line workflows, multi-currency support, and secure account management.",
    detail:
      "The strongest technical differentiator is its security architecture: BIP32/BIP39 wallet flows, signature-based API authentication, encrypted seed storage, and configurable SSL pinning.",
    image: "/images/bekiPay.png",
  },
];

const workingStyle = [
  "I’m most effective on product surfaces that combine strong UX expectations with non-trivial engineering underneath.",
  "I do my best work on systems with multiple integrations, evolving requirements, and interfaces that need to stay usable under complexity.",
  "I like turning ambiguous product needs into clear, shippable features across analytics, operations, and internal tooling.",
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <p className={styles.kicker}>Kate Lupachova</p>
            <h1 className={styles.headline}>
              Product engineer for analytics platforms, operational dashboards,
              and complex SaaS.
            </h1>
            <p className={styles.subhead}>
              I do full-stack product work within modern web app architectures,
              building for data-heavy workflows, real-time operations, and
              integration-rich systems.
            </p>
            <div className={styles.heroActions}>
              <a href="#selected-work" className={styles.primaryAction}>
                See Selected Work
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
              <span className={styles.panelLabel}>What I build</span>
              <p className={styles.panelHint}>
                Complex product surfaces where UX and engineering both matter.
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
              Current work spans merchant analytics, factory-floor operations,
              internal admin tooling, and fintech.
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
            Selected projects aligned with the kind of work I do best.
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
            Best on products with dense workflows, messy data, and real
            operational complexity.
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
