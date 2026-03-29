import Image, { StaticImageData } from "next/image";
import styles from "./LightContentItem.module.css";

type ContentItemProps = {
  imageSrc: StaticImageData;
  children: React.ReactNode;
  sectionTitle: string;
  isReverse?: boolean;
};

export default function LightContentItem({
  imageSrc,
  sectionTitle,
  children,
  isReverse = false,
}: ContentItemProps) {
  const sectionClassName = [styles.section, isReverse ? styles.reverse : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={sectionClassName}>
      <div className={styles.media}>
        <Image src={imageSrc} alt="image" className={styles.image} />
      </div>
      <div className={styles.content}>
        <h2>{sectionTitle}</h2>
        {children}
      </div>
    </div>
  );
}
