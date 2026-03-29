import Image from "next/image";
import Social from "./components/Social/Social";
import NiceToMeetYou from "./components/NiceToMeetYou/NiceToMeetYou";
import Technologies from "./components/Technologies/Technologies";
import Portfolio from "./components/Portfolio/Portfolio";
import Projects from "./components/Projects/Projects";
import ContactForm from "./components/ContactForm/ContactForm";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <Image
          alt="background image"
          src="/Background.png"
          fill
          className={styles.background}
          priority
        />
        <div className={styles.heroContent}>
          <div className={styles.copy}>
            <p className={styles.headline}>Hello, my name is Kate</p>
            <p className={styles.subhead}>
              {">"} I am a full-stack web and mobile apps developer
            </p>
            <Social />
          </div>
          <Image
            alt="kate background image"
            src="/kate.png"
            width={300}
            height={400}
            className={styles.portrait}
          />
        </div>
      </section>
      <NiceToMeetYou />
      <Technologies />
      <Portfolio />
      <Projects />
      <ContactForm />
    </div>
  );
}
