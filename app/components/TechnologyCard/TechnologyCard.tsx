import Image from "next/image";
import styles from "./TechnologyCard.module.css";

type TechnologyCardProps = {
  name: string;
  description: string;
  icon: string;
};

export default function TechnologyCard({
  name,
  description,
  icon,
}: TechnologyCardProps) {
  return (
    <div className={styles.card}>
      <Image src={icon} alt={name} width={48} height={48} />
      <div className={styles.content}>
        <div className={styles.title}>{name}</div>
        <div className={styles.description}>{description}</div>
      </div>
    </div>
  );
}
