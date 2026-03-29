"use client";
import Image from "next/image";
import Link from "next/link";
import styles from "./ScrollToTop.module.css";

export default function ScrollToTop() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <div className={styles.wrapper}>
      <Link
        href="#"
        className={styles.link}
        onClick={scrollToTop}
        scroll={false}
      >
        <Image
          src={`/icons/arrow.svg`}
          alt="arrow icon"
          width={14}
          height={16}
          priority
          className={styles.icon}
        />
        Back to the top
      </Link>
    </div>
  );
}
