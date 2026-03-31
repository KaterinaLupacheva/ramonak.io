"use client";
import { useState } from "react";
import type { ProjectSurface } from "./data";
import styles from "./SurfaceTabs.module.css";

export default function SurfaceTabs({
  surfaces,
}: {
  surfaces: ProjectSurface[];
}) {
  const [active, setActive] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const hasTabs = surfaces.length > 1;
  const hasSurfaces = surfaces.length > 0;

  if (!hasSurfaces) {
    return null;
  }

  const safeActive = Math.min(active, surfaces.length - 1);
  const surface = surfaces[safeActive];
  const activeTabId = `surface-tab-${surface.slug}`;
  const activePanelId = `surface-panel-${surface.slug}`;
  const contentId = `surface-tabs-content-${surface.slug}`;

  const handleTabKeyDown = (index: number, key: string) => {
    if (key === "ArrowRight") {
      setActive((index + 1) % surfaces.length);
      return;
    }

    if (key === "ArrowLeft") {
      setActive((index - 1 + surfaces.length) % surfaces.length);
      return;
    }

    if (key === "Home") {
      setActive(0);
      return;
    }

    if (key === "End") {
      setActive(surfaces.length - 1);
    }
  };

  return (
    <div className={styles.container}>
      <button
        type="button"
        className={styles.toggleButton}
        onClick={() => setIsExpanded((current) => !current)}
        aria-expanded={isExpanded}
        aria-controls={contentId}
      >
        <span className={styles.toggleLabel}>
          {isExpanded ? "Hide Product Areas" : "Show Product Areas"}
        </span>
        <span className={styles.toggleMeta}>
          {surfaces.length} {surfaces.length === 1 ? "area" : "areas"}
        </span>
      </button>

      {isExpanded && (
        <div className={styles.content} id={contentId}>
          {hasTabs && (
            <div
              className={styles.switcher}
              role="tablist"
              aria-label="Product areas"
            >
              {surfaces.map((s, i) => (
                <button
                  key={s.slug}
                  id={`surface-tab-${s.slug}`}
                  role="tab"
                  type="button"
                  aria-controls={`surface-panel-${s.slug}`}
                  aria-selected={i === safeActive}
                  tabIndex={i === safeActive ? 0 : -1}
                  onClick={() => setActive(i)}
                  onKeyDown={(event) => handleTabKeyDown(i, event.key)}
                  className={`${styles.surfaceCard} ${i === safeActive ? styles.surfaceCardActive : ""}`}
                >
                  <span className={styles.cardEyebrow}>{s.eyebrow}</span>
                  <span className={styles.cardTitle}>{s.title}</span>
                  <span className={styles.cardSummary}>{s.summary}</span>
                </button>
              ))}
            </div>
          )}

          <div
            className={styles.panel}
            role="tabpanel"
            id={activePanelId}
            aria-labelledby={activeTabId}
          >
            <div className={styles.surfaceHeader}>
              <p className={styles.eyebrow}>{surface.eyebrow}</p>
              <h3 className={styles.surfaceTitle}>{surface.title}</h3>
            </div>

            <p className={styles.summary}>{surface.summary}</p>
            <p className={styles.context}>{surface.context}</p>

            <div className={styles.details}>
              <div className={styles.block}>
                <h4 className={styles.blockTitle}>Highlights</h4>
                <ul className={styles.highlightList}>
                  {surface.highlights.map((item) => (
                    <li key={item} className={styles.highlightItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className={styles.block}>
                <h4 className={styles.blockTitle}>Core stack</h4>
                <div className={styles.stackList}>
                  {surface.stack.map((item) => (
                    <span key={item} className={styles.stackItem}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
