import Image from "next/image";
import Link from "next/link";
import Social from "./components/Social/Social";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./page.module.css";

const proofPoints = [
  {
    title: "Data-rich product UI",
    description:
      "I design and ship interfaces for reporting, exports, and workflows backed by complex data.",
  },
  {
    title: "Operational tools",
    description:
      "Dashboards, planning screens, tables, and charts built for people making decisions under time pressure.",
  },
  {
    title: "Integrations and scale",
    description:
      "I work comfortably across multi-tenant SaaS, internal tooling, auth flows, and third-party platforms.",
  },
];

const selectedWork = [
  {
    title: "StoreHero",
    href: "/projects#storehero",
    ctaLabel: "View Project",
    label: "Ecommerce analytics",
    description: "A multi-tenant analytics platform for ecommerce teams.",
    detail:
      "I build product features across customer-facing analytics and internal admin tooling, from integrations to reporting workflows.",
    image: "/images/storehero.png",
  },
  {
    title: "Matics",
    href: "/projects#matics",
    ctaLabel: "View Project",
    label: "Manufacturing operations",
    description: "A real-time platform for factory operations and planning.",
    detail:
      "I build high-density operational interfaces that stay clear and usable in fast-moving environments.",
    image: "/images/matics.png",
  },
  {
    title: "bekiPay / Sikoba",
    href: "/projects#bekipay-sikoba",
    ctaLabel: "View Project",
    label: "Fintech mobile product",
    description: "A cross-platform app for payments and account management.",
    detail:
      "I led frontend delivery for mobile and web admin experiences with a strong focus on trust and security.",
    image: "/images/bekiPay.png",
  },
];

const workingStyle = [
  {
    badge: "01",
    title: "Scope before syntax",
    description:
      "Before writing code, I define what's in and out of scope, surface ambiguities, and identify decisions that need to be made first. Less rework, more momentum.",
  },
  {
    badge: "02",
    title: "Full-stack ownership",
    description:
      "I track the full slice — from data model to UI state — so integration gaps get caught at design time, not during code review.",
  },
  {
    badge: "03",
    title: "Ship early, learn fast",
    description:
      "I break features into the smallest shippable slice. I'd rather demo something rough to stakeholders than deliver a polished surprise at the end.",
  },
  {
    badge: "04",
    title: "Leave a trail",
    description:
      "I document decisions and flag trade-offs async. Working remotely means good written context isn't optional — it's part of the job.",
  },
];

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroShell}>
          <div className={styles.heroCopy}>
            <h1 className={styles.headline}>
              <span className={styles.headlineIntro}>Hi, I&rsquo;m Kate.</span>
              <br />I build{" "}
              <span className={styles.headlineAccent}>thoughtful</span> products
              for data-heavy teams.
            </h1>
            <p className={styles.subhead}>
              Full-stack engineer turning complex workflows into interfaces that
              feel simple, fast, and reliable.
            </p>
            <div className={styles.focusAreas}>
              <span className={styles.focusLabel}>Focus areas</span>
              <div className={styles.tagCloud}>
                {proofPoints.map((point) => (
                  <span key={point.title} className={styles.tag}>
                    {point.title}
                  </span>
                ))}
              </div>
            </div>
            <div className={styles.heroActions}>
              <a href="#selected-work" className={styles.primaryAction}>
                View Work
              </a>
              <a href="#contact-form" className={styles.secondaryAction}>
                Contact
              </a>
            </div>
            <div className={styles.heroMeta}>
              <Social />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.workSection} id="selected-work">
        <div className={styles.sectionIntro}>
          <p className={styles.sectionEyebrow}>Selected work</p>
          <h2 className={styles.sectionTitle}>
            A few products I have helped ship.
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
            What&rsquo;s it like to work with me?
          </h2>
        </div>

        <div className={styles.approachPanel}>
          {workingStyle.map((item) => (
            <article key={item.badge} className={styles.approachCard}>
              <span className={styles.approachBadge}>{item.badge}</span>
              <h3 className={styles.approachTitle}>{item.title}</h3>
              <p className={styles.approachDescription}>{item.description}</p>
            </article>
          ))}
        </div>
      </section>

      <ContactForm />
    </div>
  );
}
