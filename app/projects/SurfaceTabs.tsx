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
  const surface = surfaces[active];
  const hasTabs = surfaces.length > 1;

  return (
    <div className={styles.container}>
      {hasTabs && (
        <div className={styles.tabBar} role="tablist">
          {surfaces.map((s, i) => (
            <button
              key={s.slug}
              role="tab"
              aria-selected={i === active}
              onClick={() => setActive(i)}
              className={`${styles.tab} ${i === active ? styles.tabActive : ""}`}
            >
              <span className={styles.tabEyebrow}>{s.eyebrow}</span>
              <span className={styles.tabLabel}>{s.title}</span>
            </button>
          ))}
        </div>
      )}

      <div className={styles.panel} role="tabpanel">
        <div className={styles.surfaceHeader}>
          <p className={styles.eyebrow}>{surface.eyebrow}</p>
          <h3 className={styles.surfaceTitle}>{surface.title}</h3>
        </div>

        <p className={styles.summary}>{surface.summary}</p>
        <p className={styles.context}>{surface.context}</p>

        <div className={styles.details}>
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
  );
}
