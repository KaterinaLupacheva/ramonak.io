import Image from "next/image";
import { socials } from "../constants/social";

export default function Social() {
  return (
    <ul className="w-[336px] h-12 justify-start items-start gap-6 inline-flex z-10 pt-10">
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
        className="w-12 h-12 bg-slate-950 bg-opacity-10 rounded-full justify-center items-center inline-flex"
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
