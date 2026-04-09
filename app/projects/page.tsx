import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { projectGroups } from "./data";
import SurfaceTabs from "./SurfaceTabs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects across SaaS, analytics, real-time dashboards, admin systems, and fintech.",
};

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>Projects</p>
            <h1 className={styles.title}>
              Product work across analytics, operations, and trust-heavy
              customer systems.
            </h1>
            <p className={styles.description}>
              A portfolio of product surfaces built for dense information,
              real-time decision making, and the quieter complexity behind
              integrations, auth, and scale.
            </p>
            <div className={styles.jumpList}>
              {projectGroups.map((project) => (
                <Link
                  key={project.slug}
                  href={`#${project.slug}`}
                  className={styles.jumpLink}
                >
                  {project.title}
                </Link>
              ))}
            </div>
          </div>

          <div className={styles.heroStrip} aria-hidden="true">
            {projectGroups.map((project) => (
              <div key={project.slug} className={styles.heroStripItem}>
                <Image
                  src={project.image}
                  alt=""
                  fill
                  className={styles.heroStripImage}
                  sizes="(max-width: 900px) 85vw, 22vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        {projectGroups.map((project, index) => (
          <article
            key={project.slug}
            id={project.slug}
            className={`${styles.projectGroup} ${index % 2 === 1 ? styles.projectGroupReverse : ""}`}
          >
            <div className={styles.projectMedia}>
              <Image
                src={project.image}
                alt={`${project.title} preview`}
                fill
                className={styles.projectImage}
                sizes="(max-width: 900px) 100vw, 50vw"
              />
            </div>

            <div className={styles.projectBody}>
              <div className={styles.header}>
                <div className={styles.titleBlock}>
                  <p className={styles.projectEyebrow}>{project.eyebrow}</p>
                  <h2 className={styles.projectTitle}>{project.title}</h2>
                  <p className={styles.summary}>{project.summary}</p>
                </div>

                <div className={styles.links}>
                  {project.links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={styles.link}
                    >
                      {link.label} <span aria-hidden="true">↗</span>
                    </a>
                  ))}
                </div>
              </div>

              <p className={styles.context}>{project.context}</p>

              <div className={styles.highlightsBlock}>
                <h3 className={styles.highlightsTitle}>
                  Why this project matters
                </h3>
                <ul className={styles.highlightsList}>
                  {project.highlights.map((item) => (
                    <li key={item} className={styles.highlightsItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <SurfaceTabs surfaces={project.surfaces} />
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}
