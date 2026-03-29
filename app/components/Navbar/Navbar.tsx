"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MouseEventHandler } from "react";
import { navItems } from "../../constants/nav";
import styles from "./Navbar.module.css";

export function Navbar() {
  const pathname = usePathname();

  const handleScroll: MouseEventHandler<HTMLAnchorElement> = (e) => {
    e.preventDefault();

    const href = e.currentTarget.href;
    const targetId = href.replace(/.*\#/, "");

    const elem = document.getElementById(targetId);

    elem?.scrollIntoView({ behavior: "smooth" });
  };

  const isDarkBg = navItems[pathname]?.isDarkBg;
  const navClassName = [styles.nav, isDarkBg ? styles.dark : styles.light].join(
    " ",
  );
  const textColor = isDarkBg ? styles.lightText : styles.darkText;

  return (
    <nav className={navClassName}>
      <div className={styles.inner}>
        <Link href="/" className={[styles.brand, textColor].join(" ")}>
          ramonak
        </Link>

        <div className={styles.links}>
          {Object.entries(navItems).map(([path, { name }]) => {
            const itemColor = path === pathname ? styles.active : textColor;
            return (
              <Link
                key={path}
                href={path}
                className={[styles.link, itemColor].join(" ")}
              >
                {name}
              </Link>
            );
          })}
        </div>
        <a href="#contact-form" onClick={handleScroll} className={styles.cta}>
          <span>Contact Me</span>
        </a>
      </div>
    </nav>
  );
}
