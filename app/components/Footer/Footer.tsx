import Link from "next/link";
import { navItems } from "../../constants/nav";
import SocialLinks from "../SocialLinks/SocialLinks";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <div className={styles.top}>
          <div>
            <h2 className={styles.brand}>RAMONAK</h2>
            <nav className={styles.nav}>
              <ul className={styles.navList}>
                {Object.entries(navItems).map(([path, { name }]) => {
                  return (
                    <li key={path}>
                      <Link href={path} className={styles.navLink}>
                        {name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Ramonak. All rights reserved.</p>
          <SocialLinks
            className={styles.socialList}
            linkClassName={styles.socialLink}
          />
        </div>
      </div>
    </footer>
  );
}
