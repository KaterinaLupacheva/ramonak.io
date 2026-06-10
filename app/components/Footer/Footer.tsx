import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p>© {new Date().getFullYear()} Ramonak</p>
        <SocialLinks
          className={styles.socialList}
          linkClassName={styles.socialLink}
          iconSize={18}
        />
      </div>
    </footer>
  );
}
