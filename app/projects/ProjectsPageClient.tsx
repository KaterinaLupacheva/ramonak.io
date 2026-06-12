"use client";
import { useState } from "react";
import Image from "next/image";
import { projectGroups } from "./data";
import styles from "./page.module.css";

export default function ProjectsPage() {
  const [activeSlug, setActiveSlug] = useState(projectGroups[0].slug);
  const project = projectGroups.find((p) => p.slug === activeSlug)!;

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <div className={styles.headerInner}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.title}>Projects that shaped how I work.</h1>
          <p className={styles.description}>
            Three distinct product contexts — each with its own constraints,
            depth, and technical character.
          </p>
        </div>
      </div>

      {/* Tab switcher */}
      <div className={styles.tabsWrap}>
        <div className={styles.tabsInner}>
          <div className={styles.tabs} role="tablist" aria-label="Projects">
            {projectGroups.map((p) => (
              <button
                key={p.slug}
                role="tab"
                aria-selected={p.slug === activeSlug}
                onClick={() => setActiveSlug(p.slug)}
                className={`${styles.tab} ${p.slug === activeSlug ? styles.tabActive : ""}`}
              >
                {p.title}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Project detail */}
      <div className={styles.detailWrap}>
        <div className={styles.detailInner}>
          <ProjectDetail project={project} />
        </div>
      </div>
    </div>
  );
}

function ProjectDetail({ project }: { project: (typeof projectGroups)[0] }) {
  return (
    <div className={styles.detail}>
      {/* Hero card */}
      <div className={styles.heroCard}>
        <div className={styles.heroInfo}>
          <p className={styles.projectEyebrow}>{project.eyebrow}</p>
          <h2 className={styles.projectTitle}>{project.title}</h2>
          <p className={styles.summary}>{project.summary}</p>
          <p className={styles.context}>{project.context}</p>
          <ul className={styles.highlights}>
            {project.highlights.map((h) => (
              <li key={h} className={styles.highlightItem}>
                <span className={styles.highlightDash} aria-hidden="true">
                  —
                </span>
                {h}
              </li>
            ))}
          </ul>
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.visitLink}
            >
              {link.label}
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
            </a>
          ))}
        </div>
        <div className={styles.heroImageWrap}>
          <Image
            src={project.image}
            alt={`${project.title} preview`}
            fill
            className={styles.heroImage}
            sizes="(max-width: 800px) 100vw, 50vw"
          />
        </div>
      </div>

      {/* Surfaces */}
      <div className={styles.surfaces}>
        <h3 className={styles.surfacesLabel}>
          Product surfaces — {project.surfaces.length}
        </h3>
        {project.surfaces.map((s, i) => (
          <SurfaceCard key={i} surface={s} />
        ))}
      </div>
    </div>
  );
}

function SurfaceCard({
  surface,
}: {
  surface: (typeof projectGroups)[0]["surfaces"][0];
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.surfaceCard}>
      <p className={styles.surfaceEyebrow}>{surface.eyebrow}</p>
      <h4 className={styles.surfaceTitle}>{surface.title}</h4>
      <p className={styles.surfaceSummary}>{surface.summary}</p>

      <div className={styles.stackList}>
        {surface.stack.map((t) => (
          <span key={t} className={styles.stackPill}>
            {t}
          </span>
        ))}
      </div>

      <button className={styles.toggleBtn} onClick={() => setOpen(!open)}>
        {open ? "Hide highlights" : "Show highlights"}
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{
            transform: open ? "rotate(180deg)" : "none",
            transition: "transform 0.2s",
          }}
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </button>

      {open && (
        <ul className={styles.highlightList}>
          {surface.highlights.map((h, i) => (
            <li key={i} className={styles.surfaceHighlight}>
              <span className={styles.highlightDash} aria-hidden="true">
                —
              </span>
              {h}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
