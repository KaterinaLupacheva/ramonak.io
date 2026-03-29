import styles from "./Portfolio.module.css";

export default function Portfolio() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <h3 className={styles.eyebrow}>Portfolio</h3>
        <p className={styles.title}>I create awesome digital products</p>
        <p className={styles.description}>
          I am focused on creating beautiful and user friendly applications
          while writing clean code.
        </p>
        <button className={styles.button}>See all works {"->"}</button>
      </div>
    </section>
  );
}
