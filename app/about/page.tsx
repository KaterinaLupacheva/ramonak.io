import Content from "./components/Content/Content";
import Introduction from "./components/Introduction/Introduction";
import Timeline from "./components/Timeline/Timeline";
import styles from "./page.module.css";

export default function About() {
  return (
    <div className={styles.page}>
      <div className={styles.heroSection}>
        <Introduction />
        <Timeline />
      </div>
      <Content />
    </div>
  );
}
