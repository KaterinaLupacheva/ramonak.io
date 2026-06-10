import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { socials } from "../constants/social";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Kate Ramonak — full-stack engineer.",
};

const timeline = [
  {
    year: "2004",
    event: "Graduated in finance and credit",
    takeaway:
      "Learned to understand risk, systems, and the decisions behind the numbers.",
  },
  {
    year: "2004–2018",
    event: "Built a career in banking",
    takeaway:
      "Worked across lending, collateral evaluation, and financial analysis.",
  },
  {
    year: "Jul 2018",
    event: "Left banking to study programming full-time",
    takeaway:
      "Made the uncertain choice because staying curious mattered more than staying comfortable.",
  },
  {
    year: "Jan 2019",
    event: "Joined local start-up projects as a Java developer",
    takeaway:
      "Shipped an admin panel, reviewed code, and learned how small teams really work.",
  },
  {
    year: "Oct 2019",
    event: "Pivoted to JavaScript and React",
    takeaway:
      "Found the combination of systems thinking and visual product work that still drives me.",
  },
  {
    year: "2020–now",
    event: "Build web and mobile products end to end",
    takeaway:
      "Turn complex analytics, operations, and fintech problems into clear working surfaces.",
  },
];

const socialIcons: Record<string, ReactNode> = {
  github: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  twitter: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  linkedin: (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

function Chapter({
  number,
  title,
  summary,
  children,
}: {
  number: string;
  title: string;
  summary: string;
  children: ReactNode;
}) {
  return (
    <details className={styles.chapter}>
      <summary className={styles.chapterSummary}>
        <span className={styles.chapterNumber}>{number}</span>
        <span className={styles.chapterIntro}>
          <h3 className={styles.chapterTitle}>{title}</h3>
          <span className={styles.chapterSummaryText}>{summary}</span>
        </span>
        <span className={styles.chapterToggle} aria-hidden="true">
          <span />
          <span />
        </span>
      </summary>
      <div className={styles.chapterBody}>{children}</div>
    </details>
  );
}

export default function AboutPage() {
  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.heroCopy}>
            <p className={styles.eyebrow}>About Kate Ramonak</p>
            <div className={styles.mobilePortrait}>
              <Image
                src="/kate.png"
                alt="Kate Ramonak"
                fill
                className={styles.portraitImage}
                sizes="7rem"
                priority
              />
            </div>
            <h1 className={styles.heroHeading}>
              I changed careers at 35. Curiosity has guided everything since.
            </h1>
            <p className={styles.heroBio}>
              Fourteen years in banking taught me to understand complex systems.
              Becoming a self-taught full-stack engineer taught me how to make
              them clearer, more useful, and easier to trust.
            </p>
            <div className={styles.heroActions}>
              <Link href="/projects" className={styles.primaryAction}>
                See my work
              </Link>
              <Link href="/contact" className={styles.secondaryAction}>
                Contact me <span aria-hidden="true">→</span>
              </Link>
            </div>
            <div className={styles.heroSocials}>
              {socials.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  aria-label={social.alt}
                >
                  {socialIcons[social.icon]}
                </a>
              ))}
            </div>
          </div>

          <div className={styles.portraitWrap}>
            <div className={styles.portraitGlow} />
            <Image
              src="/kate.png"
              alt="Kate Ramonak"
              fill
              className={styles.portraitImage}
              sizes="(max-width: 800px) 0px, 34vw"
              priority
            />
            <p className={styles.portraitCaption}>
              Full-stack engineer
              <span>Analytics · Operations · Fintech</span>
            </p>
          </div>
        </div>
      </section>

      <section className={styles.journeySection}>
        <div className={styles.journeyInner}>
          <div className={styles.journeyIntro}>
            <p className={styles.eyebrow}>The journey</p>
            <h2>
              Fourteen years in banking.
              <span>One deliberate leap.</span>
            </h2>
            <p>
              The industries changed, but the useful part stayed constant: I
              like understanding difficult systems and helping people work with
              them confidently.
            </p>
          </div>

          <ol className={styles.timeline}>
            {timeline.map((item) => (
              <li key={item.year} className={styles.timelineItem}>
                <p className={styles.timelineYear}>{item.year}</p>
                <div className={styles.timelineCopy}>
                  <h3>{item.event}</h3>
                  <p>{item.takeaway}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.storySection}>
        <div className={styles.storyHeader}>
          <p className={styles.eyebrow}>The longer story</p>
          <h2>A career switch, in five chapters.</h2>
          <p>
            The short version is persistence. The fuller version has Java,
            start-ups, a few wrong turns, and a lot of learning.
          </p>
        </div>

        <div className={styles.chapters}>
          <Chapter
            number="01"
            title="Banking"
            summary="The career that taught me how systems, risk, and people interact."
          >
            <p>
              After graduating from Belarusian State Economic University with a
              degree in finance and credit in 2004, I spent the next 14 years
              working across two banks and five departments. Retail and
              corporate lending, collateral evaluation, financial analysis,
              credit risk, and accounting reports were all part of the work.
            </p>
            <p>
              I liked the work and the people, but eventually every day started
              to feel the same. I wanted to keep learning, move forward, and
              have more freedom. I had always been drawn to automating and
              improving processes, so technology began to feel like a natural
              next direction.
            </p>
          </Chapter>

          <Chapter
            number="02"
            title="The career switch"
            summary="At 35, I left a stable job and gave myself the time to learn properly."
          >
            <p>
              I had no relevant degree, no friends in tech, and no clear map of
              what kind of programmer I wanted to become. Studying after a
              full-time job while raising a young child made progress slow, so
              my husband and I made a bigger decision: I would leave banking and
              study full-time.
            </p>
            <p>
              My last day at the bank was July 13, 2018. The path that followed
              was not especially straight, but it proved that I loved
              programming and the kind of sustained problem-solving it demands.
            </p>
          </Chapter>

          <Chapter
            number="03"
            title="Learning and early projects"
            summary="Java opened the door; real start-up projects taught me how software gets made."
          >
            <p>
              I completed Java Fundamentals and Java Enterprise courses at the
              Educational Center of High-Tech Park Belarus. I was the only woman
              in the advanced section and finished as the best student in the
              class. More importantly, I learned how much effective development
              depends on self-study.
            </p>
            <p>
              I then joined a lab where graduates worked on real start-up
              projects. I built admin panels with Java and Vaadin, wrote
              documentation, helped shape architecture, reviewed code, and
              supported newer developers. The code was imperfect, but it worked
              and taught me lessons a course could not.
            </p>
            <ul>
              <li>Ship useful software before waiting to feel fully ready.</li>
              <li>Read documentation closely when tutorials run out.</li>
              <li>Make collaboration and feedback part of the work.</li>
            </ul>
          </Chapter>

          <Chapter
            number="04"
            title="Finding the right medium"
            summary="JavaScript and React connected systems thinking with visible product work."
          >
            <p>
              Freelance opportunities for a new Java developer were limited, so
              in October 2019 I began learning JavaScript, then React and
              Node.js. After strict, heavy Java, JavaScript felt like fresh air.
              React was especially satisfying because the results became
              immediately visible.
            </p>
            <p>
              I practiced by building tools I wanted to use: a fitness app, a
              financial manager, and several dashboards. Admin panels and
              dashboards became a natural specialty because they combine
              technical depth, product decisions, and interface clarity.
            </p>
          </Chapter>

          <Chapter
            number="05"
            title="Freelance to full-stack"
            summary="A first dashboard client grew into long-term product partnerships."
          >
            <p>
              After about six months of focused JavaScript practice, I began
              bidding on dashboard work and found my first client within days.
              My banking background later helped me join Sikoba as a product
              manager and developer, where I also moved into React Native.
            </p>
            <p>
              In 2021 I joined StoreHero and Matics. Both started as short-term
              engagements and became lasting collaborations. Today I build
              complex products end to end, with particular depth in analytics,
              operations, integrations, and trust-heavy product surfaces.
            </p>
            <p>
              My path was neither easy nor short, but I would not change it. It
              made me persistent, comfortable with ambiguity, and genuinely
              excited to learn something new every day.
            </p>
          </Chapter>
        </div>
      </section>

      <section className={styles.beyondSection}>
        <div className={styles.beyondImage}>
          <Image
            src="/images/keyboard-performance.jpg"
            alt="Hands playing a keyboard under dark stage lighting"
            fill
            className={styles.keyboardImage}
            sizes="(max-width: 800px) 100vw, 52vw"
            loading="eager"
          />
        </div>
        <div className={styles.beyondCopy}>
          <p className={styles.eyebrow}>Beyond work</p>
          <h2>Away from one keyboard, usually near another.</h2>
          <p className={styles.beyondLead}>
            I play keyboards in a metal band. The practice is different, but the
            appeal is familiar: listen closely, find the structure, and make
            your part serve the whole.
          </p>
          <p className={styles.beyondText}>
            I also listen to Finnish and Dutch metal, follow tennis, get lost in
            a good book, and enjoy time with my family.
          </p>
        </div>
      </section>

      <section className={styles.ctaSection}>
        <div className={styles.ctaInner}>
          <p className={styles.ctaEyebrow}>Work together</p>
          <h2>Building something complex?</h2>
          <p>
            I help turn difficult systems into products people can understand
            and use with confidence.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/contact" className={styles.ctaPrimary}>
              Start a conversation
            </Link>
            <Link href="/projects" className={styles.ctaSecondary}>
              See selected work <span aria-hidden="true">→</span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
