import Image from "next/image";
import { socials } from "../../constants/social";
import styles from "./Social.module.css";

export default function Social() {
  return (
    <ul className={styles.list}>
      {socials.map((social) => (
        <SocialItem key={social.icon} {...social} />
      ))}
    </ul>
  );
}

type SocialItemProps = {
  icon: string;
  href: string;
  alt: string;
};

function SocialItem({ icon, href, alt }: SocialItemProps) {
  return (
    <li>
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        className={styles.link}
      >
        <Image
          src={`/icons/${icon}.svg`}
          alt={alt}
          width={24}
          height={24}
          priority
        />
      </a>
    </li>
  );
}
