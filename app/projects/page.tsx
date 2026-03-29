import type { Metadata } from "next";
import Image from "next/image";
import { projectGroups } from "./data";
import SurfaceTabs from "./SurfaceTabs";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Selected projects across SaaS, analytics, real-time dashboards, admin systems, and fintech.",
};

const capabilityGroups = [
  "Multi-tenant SaaS",
  "Analytics and ETL",
  "Real-time dashboards",
  "Admin platforms",
  "System integrations",
  "Enterprise auth",
  "PWA support",
  "Internationalization",
];

export default function ProjectsPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <p className={styles.eyebrow}>Projects</p>
          <h1 className={styles.title}>
            Product work across analytics platforms, operational dashboards,
            admin systems, and fintech.
          </h1>
          <p className={styles.description}>
            These projects show the kind of work I do best: data-heavy
            interfaces, integration-rich systems, and product surfaces that need
            both strong UX and solid engineering underneath.
          </p>
          <div className={styles.capabilityList}>
            {capabilityGroups.map((item) => (
              <span key={item} className={styles.capability}>
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.projectsSection}>
        {projectGroups.map((project) => (
          <article
            key={project.slug}
            id={project.slug}
            className={styles.projectGroup}
          >
            <div className={styles.projectCard}>
              <div className={styles.projectMedia}>
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  width={1200}
                  height={800}
                  className={styles.projectImage}
                />
              </div>

              <div className={styles.projectBody}>
                <div className={styles.header}>
                  <div>
                    <p className={styles.projectEyebrow}>{project.eyebrow}</p>
                    <h2 className={styles.projectTitle}>{project.title}</h2>
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

                <p className={styles.summary}>{project.summary}</p>
                <p className={styles.context}>{project.context}</p>
              </div>
            </div>

            <SurfaceTabs surfaces={project.surfaces} />
          </article>
        ))}
      </section>
    </div>
  );
}
