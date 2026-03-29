import Link from "next/link";
import { navItems } from "../../constants/nav";
import { socials } from "../../constants/social";
import Image from "next/image";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
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
          <ScrollToTop />
        </div>
        <div className={styles.bottom}>
          <p>© {new Date().getFullYear()} Ramonak. All rights reserved.</p>
          <ul className={styles.socialList}>
            {socials.map(({ icon, href, alt }) => (
              <li key={icon}>
                <a href={href} rel="noopener noreferrer" target="_blank">
                  <Image
                    src={`/icons/${icon}-footer.svg`}
                    alt={alt}
                    width={48}
                    height={48}
                    priority
                  />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
