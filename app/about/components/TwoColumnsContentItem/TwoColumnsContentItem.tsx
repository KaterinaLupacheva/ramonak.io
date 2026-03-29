import styles from "./TwoColumnsContentItem.module.css";

type TwoColumnsContentItemProps = {
  sectionTitle?: string;
  children: React.ReactNode;
};

export default function TwoColumnsContentItem({
  sectionTitle,
  children,
}: TwoColumnsContentItemProps) {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        {sectionTitle ? <h2 className={styles.title}>{sectionTitle}</h2> : null}
        <div className={styles.grid}>{children}</div>
      </div>
    </section>
  );
}
