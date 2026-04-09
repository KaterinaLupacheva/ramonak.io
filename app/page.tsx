import Image from "next/image";
import Link from "next/link";
import Social from "./components/Social/Social";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./page.module.css";

const selectedWork = [
  {
    title: "StoreHero",
    href: "/projects#storehero",
    label: "Ecommerce analytics",
    summary:
      "Multi-tenant analytics for profitability, LTV, and marketing decisions.",
    detail:
      "Customer-facing reporting and internal tooling shaped around integrations, exports, and complex merchant workflows.",
    image: "/images/storehero.png",
  },
  {
    title: "Matics",
    href: "/projects#matics",
    label: "Manufacturing operations",
    summary:
      "Real-time operational product design for planning, monitoring, and action.",
    detail:
      "High-density dashboards and workflow surfaces built to stay legible in fast-moving factory environments.",
    image: "/images/matics.png",
  },
  {
    title: "bekiPay / Sikoba",
    href: "/projects#bekipay-sikoba",
    label: "Fintech mobile product",
    summary:
      "Cross-platform payments experience with a strong trust and security model.",
    detail:
      "Mobile and admin experiences spanning secure account setup, transaction flows, and multilingual customer journeys.",
    image: "/images/bekiPay.png",
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
                  I build product interfaces for complex systems.
                </span>
              </h1>
              <p className={styles.subhead}>
                Full-stack work for analytics, operations, and integration-heavy
                products that still feel clear in use.
              </p>
              <div className={styles.heroActions}>
                <a href="#selected-work" className={styles.primaryAction}>
                  View selected work
                </a>
                <a href="#contact-form" className={styles.tertiaryAction}>
                  Start a conversation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className={styles.heroMeta}
        aria-label="Profile links and focus areas"
      >
        <div className={styles.heroMetaInner}>
          <p className={styles.heroContext}>
            Focused on product design and full-stack delivery across StoreHero,
            Matics, and bekiPay / Sikoba.
          </p>
          <div className={styles.socialWrap}>
            <Social />
          </div>
        </div>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Selected work</p>
          <h2 className={styles.sectionTitle}>
            Product systems with distinct constraints, not interchangeable UI.
          </h2>
          <p className={styles.sectionDescription}>
            A few projects that show how I work across analytics depth,
            operational speed, and trust-heavy customer experiences.
          </p>
        </div>

        <div className={styles.workList}>
          {selectedWork.map((project, index) => (
            <article
              key={project.title}
              className={`${styles.workFeature} ${index % 2 === 1 ? styles.workFeatureReverse : ""}`}
            >
              <div className={styles.workVisual}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  className={styles.workImage}
                  sizes="(max-width: 900px) 100vw, 50vw"
                />
              </div>

              <div className={styles.workContent}>
                <p className={styles.workLabel}>{project.label}</p>
                <h3 className={styles.workTitle}>{project.title}</h3>
                <p className={styles.workSummary}>{project.summary}</p>
                <p className={styles.workDetail}>{project.detail}</p>
                <Link href={project.href} className={styles.workLink}>
                  Open project
                </Link>
              </div>
            </article>
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

      <ContactForm />
    </div>
  );
}
