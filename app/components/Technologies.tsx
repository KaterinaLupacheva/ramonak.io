import TechnologyCard from "./TechnologyCard";
import styles from "./Technologies.module.css";

const techs = [
  {
    name: "React",
    description: "React is a JavaScript library for building user interfaces.",
    icon: "/icons/react.svg",
  },
  {
    name: "React Native",
    description:
      "React Native is an open-source UI software framework created by Meta Platforms, Inc.",
    icon: "/icons/react.svg",
  },
  {
    name: "TypeScript",
    description:
      "TypeScript is a strongly typed programming language that builds on JavaScript, giving you better tooling at any scale.",
    icon: "/icons/typescript.svg",
  },
  {
    name: "Node.js",
    description:
      "Node.js is a platform built on Chrome's JavaScript runtime for easily building fast and scalable network applications.",
    icon: "/icons/nodejs.svg",
  },
];

export default function Technologies() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <div className={styles.eyebrow}>Tech stack</div>
          <p className={styles.title}>Technologies I use</p>
        </div>
        <div className={styles.grid}>
          {techs.map((tech) => (
            <TechnologyCard key={tech.name} {...tech} />
          ))}
        </div>
      </div>
    </section>
  );
}
