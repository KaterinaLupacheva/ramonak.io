import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <p className={styles.line}>Hi! My name is Kate.</p>
        <p className={styles.line}>
          I&apos;m a <span className={styles.mobile}>mobile</span> and{" "}
          <span className={styles.web}>web apps</span> developer.
        </p>
        <p className={styles.line}>I&apos;m a self-taught developer and</p>
        <p className={styles.line}>I continue to learn constantly.</p>
      </div>
    </section>
  );
}
