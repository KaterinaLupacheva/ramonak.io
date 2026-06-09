"use client";
import { useState } from "react";
import Image from "next/image";
import styles from "./WorkCard.module.css";

type WorkCardProps = {
  project: {
    title: string;
    externalHref: string;
    label: string;
    summary: string;
    detail: string;
    image: string;
    stack: string[];
    highlights: string[];
  };
  reverse: boolean;
};

export default function WorkCard({ project, reverse }: WorkCardProps) {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className={`${styles.card} ${reverse ? styles.cardReverse : ""}`}>
      <div
        className={`${styles.visual} ${reverse ? styles.visualReverse : ""}`}
      >
        <Image
          src={project.image}
          alt={`${project.title} preview`}
          fill
          className={styles.image}
          sizes="(max-width: 900px) 100vw, 50vw"
        />
        <div className={styles.imageOverlay} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <p className={styles.label}>{project.label}</p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>
        <p className={styles.detail}>{project.detail}</p>

        <div className={styles.stackList}>
          {project.stack.map((t) => (
            <span key={t} className={styles.stackPill}>
              {t}
            </span>
          ))}
        </div>

        <button
          className={styles.toggleBtn}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Hide highlights" : "Show highlights"}
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{
              transform: expanded ? "rotate(180deg)" : "none",
              transition: "transform 0.2s",
            }}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        {expanded && (
          <ul className={styles.highlightsList}>
            {project.highlights.map((h, i) => (
              <li key={i} className={styles.highlightItem}>
                <span className={styles.highlightDash} aria-hidden="true">
                  —
                </span>
                {h}
              </li>
            ))}
          </ul>
        )}

        <a
          href={project.externalHref}
          target="_blank"
          rel="noopener noreferrer"
          className={styles.visitLink}
        >
          Visit project
          <svg
            width="13"
            height="13"
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
      </div>
    </article>
  );
}
