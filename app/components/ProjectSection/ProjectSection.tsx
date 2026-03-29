import Image from "next/image";
import styles from "./ProjectSection.module.css";

type ProjectSectionProps = {
  title: string;
  description: string;
  period: string;
  href: string;
  image: string;
  isReversed: boolean;
};

export default function ProjectSection({
  title,
  description,
  period,
  href,
  image,
  isReversed,
}: ProjectSectionProps) {
  const sectionClassName = [styles.section, isReversed ? styles.reversed : ""]
    .filter(Boolean)
    .join(" ");
  const copyClassName = [
    styles.copy,
    isReversed ? styles.copyReversed : styles.copyDefault,
  ].join(" ");

  return (
    <div className={sectionClassName}>
      <div className={copyClassName}>
        <div className={styles.header}>
          <p className={styles.title}>{title}</p>
          <a
            href={href}
            rel="noopener noreferrer"
            target="_blank"
            className={styles.link}
          >
            <Image
              src="/icons/openInNewTab.svg"
              alt="Open in new tab"
              width={20}
              height={20}
            />
          </a>
        </div>
        <p className={styles.description}>{description}</p>
        <p className={styles.period}>{period}</p>
      </div>
      <div className={styles.imageWrap}>
        <Image
          src={`/images/${image}.png`}
          alt="Open in new tab"
          width={768}
          height={512}
          className={styles.image}
        />
      </div>
    </div>
  );
}
