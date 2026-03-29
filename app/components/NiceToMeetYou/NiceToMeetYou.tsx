import Link from "next/link";
import styles from "./NiceToMeetYou.module.css";

export default function NiceToMeetYou() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.eyebrow}>Nice to meet you</div>
        <div className={styles.content}>
          <div className={styles.lead}>
            I’m a self-taught developer. I continue to learn constantly{" "}
          </div>
          <div className={styles.aside}>
            <div className={styles.details}>
              <p>In my free time</p>
              <ul className={styles.list}>
                <li>_ I write blog posts about the new things that I learn</li>
                <li>_ Develop some fun projects</li>
                <li>_ Contribute to an open-source community</li>
              </ul>
            </div>
            <p className={styles.readMore}>
              <Link href="/about">{"> "}Read More</Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
