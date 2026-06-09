import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import { socials } from "../constants/social";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "About",
  description: "About Kate Ramonak — full-stack engineer.",
};

const timeline = [
  {
    year: "2004",
    event: "Graduated Belarussian State Economic University — finance & credit",
  },
  {
    year: "2004–2018",
    event:
      "Bank credit manager across retail lending, collateral evaluation, financial analysis",
  },
  { year: "Jul 2018", event: "Left banking to study programming full-time" },
  { year: "Jan 2019", event: "Java developer at local start-up companies" },
  { year: "Oct 2019", event: "Pivoted to JavaScript & React.js" },
  {
    year: "2020–now",
    event:
      "Freelance, then full-stack engineer — building web and mobile products end to end",
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
    >
      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
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
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect x="2" y="9" width="4" height="12" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  ),
};

export default function AboutPage() {
  return (
    <div className={styles.page}>
      {/* Dark intro */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <p className={styles.eyebrow}>About</p>
            <h1 className={styles.introHeading}>
              <span className={styles.introHeadingLine}>
                Hi! My name is Kate.
              </span>
              <span className={styles.introHeadingLine}>
                I&apos;m a self-taught{" "}
                <em className={styles.accentMobile}>full-stack</em> developer
                and I continue to learn constantly.
              </span>
            </h1>
            <p className={styles.introBio}>
              After 14 years in banking I made a complete career switch at 35 —
              no relevant degree, no tech contacts, just a decision to learn.
              That experience shapes how I approach complexity: carefully,
              persistently, and with genuine curiosity. I specialize in
              dashboards and admin panels, though I&apos;d be happy to help
              develop any web application or website.
            </p>
            <div className={styles.introSocials}>
              {socials.map((s) => (
                <a
                  key={s.icon}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.socialIcon}
                  title={s.alt}
                >
                  {socialIcons[s.icon]}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.photoWrap}>
            <Image
              src="/kate.png"
              alt="Kate Ramonak"
              fill
              className={styles.photo}
              sizes="(max-width: 800px) 0px, 340px"
            />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className={styles.timelineSection}>
        <div className={styles.sectionInner}>
          <p className={styles.timelineEyebrow}>Journey</p>
          <div className={styles.timeline}>
            {timeline.map((ev, i) => (
              <div key={i} className={styles.timelineRow}>
                <div className={styles.timelineStep}>
                  <div
                    className={`${styles.timelineStepNum}${i === timeline.length - 1 ? ` ${styles.timelineStepNumActive}` : ""}`}
                  >
                    {i + 1}
                  </div>
                  {i < timeline.length - 1 && (
                    <div className={styles.timelineConnector} />
                  )}
                </div>
                <div className={styles.timelineContent}>
                  <span className={styles.timelineYear}>{ev.year}</span>
                  <p className={styles.timelineEvent}>{ev.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Full story accordion */}
      <section className={styles.storySection}>
        <div className={styles.sectionInner}>
          <details className={styles.storyDetails}>
            <summary className={styles.storySummary}>
              <span>
                My long story of how I changed careers from bank employee to
                developer
              </span>
              <span className={styles.storyChevron} aria-hidden="true">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="6 9 12 15 18 9" />
                </svg>
              </span>
            </summary>

            <div className={styles.storyContent}>
              <h3 className={styles.storyHeading}>Banking Career</h3>
              <p>
                After graduating from Belarussian State Economic University with
                a Bachelor&apos;s degree in finance and credit in 2004,
                I&apos;ve spent the next 14 years working as a bank clerk.
                I&apos;ve worked in two banks and changed 5 departments in the
                meantime. Retail and corporate lending, collateral evaluation,
                financial analysis, credit risk assessment, accounting reports
                are among the things that I was doing.
              </p>
              <p>
                But gradually my work became like a &ldquo;Groundhog Day&rdquo;
                — every day was the same as the previous one. I liked my work in
                general and my working team, the boss was great and the salary
                was good, but I wanted more. I wanted to learn every day, to
                move forward, and to have more freedom (as a bonus). To look
                forward to Mondays and not to drag my feet to the office every
                day.
              </p>
              <p>
                I always dreamed to have my own business someday, or at least be
                my own boss. At the same time, I was prone to the automation and
                optimization of all processes in my banking career. And besides,
                the tech industry is booming in Belarus for the last decade.
              </p>

              <h3 className={styles.storyHeading}>Switching to Programming</h3>
              <p>
                So, at 35, with no relevant degree, I&apos;ve decided to
                completely change my professional life and to become somebody
                like a programmer. At the time I didn&apos;t have a clear idea
                of what exactly I&apos;d like to do. I had no friends in the
                tech industry, nobody who could become my mentor in this
                journey. So my learning path was very curvy with lots of trials
                and errors.
              </p>
              <p>
                While still working at a bank, I&apos;ve decided to learn a
                programming language. Simply googling this topic, I&apos;ve
                found out that the most popular language at that time was Java
                (it was 2018). So, let&apos;s try to learn it! I&apos;ve started
                to do an online free course, but my progress was extremely slow.
                Working full-time and having a family with a small kid, I
                literally had a very small time and even less energy to study.
              </p>
              <p>
                So, together with my husband, we made a decision that I&apos;ll
                quit my banking job and will study full-time. My last working
                day in the bank was July 13th, 2018. Since then my long and
                heavy road in development began.
              </p>

              <h3 className={styles.storyHeading}>Java Course</h3>
              <p>
                I&apos;ve wanted to start with a beginner level of Java off-line
                course. But for that, I needed to have a basic understanding of
                web technologies (HTML, CSS, how the Internet works, and so on).
                So I had a crash course on that.
              </p>
              <p>
                Then during the next 6 months, I&apos;ve successfully completed
                the Java Fundamentals course and Java Enterprise course in the
                Educational Center of HI-Tech Park Belarus (IT Academy). There
                were lots of hard studies during these 6 months. I&apos;d say
                that it was 95% of self-studies and only 5% of classwork. By the
                way, I was the only female in the advanced section of the Java
                course and finished it as the best student in the class!
              </p>
              <p>
                I understood that I really like programming, all this
                problem-solving thing. But at the same time, it was obvious that
                Java is mostly required in big tech companies and I definitely
                didn&apos;t want to go back into the corporate world. Besides,
                when I was working on my final project of the course, I wanted
                to have a &ldquo;normal&rdquo; front-end, although due to
                assignment it was enough to display results of the back-end
                queries in a console. I guess I&apos;ve tried to use some Java
                frontend tools like JSP and it was awful!
              </p>
              <p>
                When the Java course was coming to an end, I&apos;ve started to
                think about what should I do next? I had an idea that it would
                be great to work in a small start-up team. But the problem was
                that nobody needed a developer with a zero experience. Start-ups
                require an experienced developer who can bring results fast.
              </p>

              <h3 className={styles.storyHeading}>Start-up Projects</h3>
              <p>
                Luckily I&apos;ve found out that there is a lab for IT Academy
                graduates where junior developers can improve their skills
                working on a real project in a small team. I was accepted on a
                project called naakcii.by. It&apos;s a service that helps to
                find groceries and other goods with the best prices among
                Belarussian stores. By the time when I joined this project
                (January 2019), it was in a development mode for 8 months. My
                first assignment was to develop Swagger documentation of the
                project. After that, the team decided that an admin panel is
                really would be useful to implement CRUD operations on the
                database. And once again there was a problem — Java is not a
                front-end language and we were short in front-end developers.
              </p>
              <p>
                Then the project&apos;s mentor suggested using{" "}
                <a
                  href="https://vaadin.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vaadin framework
                </a>{" "}
                for admin panel development. That&apos;s how I knew that you can
                develop front-end parts in Java too! So since February 2019,
                I&apos;ve started to learn Vaadin intensively. For the first
                time, I was reading technical documentation a lot, as this
                framework is not widely used, so there are very few tutorials on
                it. It was hard, especially to grasp front-end concepts without
                almost zero background in classic front-end technologies, like
                HTML, CSS, and Javascript. But in 2 months of hard work
                I&apos;ve developed an admin panel for the project. I was proud
                of my job, but now looking back, the quality of the code was low
                and the architecture of the project was not good. But it was a
                really useful experience and it was my first full-stack Java
                project. And more importantly, the admin panel was doing its job
                just fine.
              </p>
              <p>
                In April-May 2019 a new start-up project was presented to the
                lab — weekmenu.by: the app for helping families to make a menu
                for a week (with recipes) that generates a list of ingredients
                to be bought once in a week. It was decided to join this new
                project (weekmenu.by) to the existing project (naakcii.by) and
                start building an ecosystem Happy Family.
              </p>
              <p>
                By that time most of the team members found jobs in tech
                companies, so a new portion of IT Academy graduates joined the
                team. I wasn&apos;t looking for a job on purpose. I wanted to
                gain experience in this start-up world and eventually start my
                own project. BTW, in April-May 2019 I&apos;ve attended a Project
                management course, as I wanted to improve my knowledge base on
                how to build a process of tech product development in a team.
              </p>
              <p>
                Work on a new project started very enthusiastically. UI/UX
                design, user stories, app architecture, ideas about integration
                of two services, and into 3rd parties API. But unfortunately, it
                lasted not for long. The lab wasn&apos;t paying anything to its
                members. So people were founding a real job pretty quickly and
                leaving the project.
              </p>
              <p>
                The funny thing is that I was the most &ldquo;experienced&rdquo;
                developer of the team at the time. So my responsibilities
                include app architecture, code review, assistance to other
                developers. And of course, once again I was developing an admin
                panel for the project using the Vaadin framework. By the way, in
                December 2019 I passed an exam and got{" "}
                <a
                  href="/media/vaadin-certificate.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Vaadin 14 Developer Certificate
                </a>
                .
              </p>
              <p>
                Well, things were moving very slowly. More and more people were
                leaving the project as they were lacking motivation. The most
                problem was in finding front-end developers, specifically
                Angular developers, as the first project (naakcii.by) was
                developed with Angular, so our mentor had a strong opinion that
                to integrate two projects they should use the same tech stack (I
                completely disagree with that). Unfortunately, gradually, the
                work on the projects completely stopped.
              </p>
              <p>What I&apos;ve learned working on two start-up projects:</p>
              <ul className={styles.storyList}>
                <li>
                  improved my tech skills in Spring Boot, Vaadin, PostgreSQL,
                  Git, Bitbucket, Jira
                </li>
                <li>
                  gained experience in remote work with a team of developers on
                  real projects
                </li>
                <li>saw how does Scrum methodology looks like in practice</li>
                <li>met a lot of new really nice people</li>
              </ul>

              <h3 className={styles.storyHeading}>Learning Javascript</h3>
              <p>
                In the meantime, I was starting to look at freelance job
                opportunities. But with my tech stack (Java) it was practically
                impossible to compete with experienced developers. So I decided
                to switch my programming language preferences and start learning
                front-end technologies: Javascript and then React.
              </p>
              <p>
                At the end of October 2019, I&apos;ve started to learn
                Javascript. For me, it was way easier to learn Javascript than
                Java. Maybe because it was a second programming language for me.
                But overall after &ldquo;heavy&rdquo; and strict Java,
                Javascript was like fresh air. And you can use Javascript
                (Node.js) for a back-end too!
              </p>
              <p>
                After learning Javascript fundamentals I moved to React.js. Why
                did I choose React.js? Once again, because it&apos;s the most
                popular Javascript library.
              </p>
              <p>
                I was having sooooo much fun learning React! You know, in Java
                you can&apos;t see the results of your work visually. And React
                is all about UI.
              </p>

              <h3 className={styles.storyHeading}>Preparing for Freelance</h3>
              <p>
                I&apos;ve read several articles of experienced freelancers,
                where the main message was that you should start to find jobs as
                soon as possible and learning during the process of working on
                it. I didn&apos;t feel that it&apos;s the right way for me. I
                can&apos;t take a job if I don&apos;t feel that I can accomplish
                it.
              </p>
              <p>
                I&apos;ve decided to practice my front-end skills while
                developing apps and tools that I needed in my everyday life. For
                example, a fitness app (Tabata App) for my personal training, a
                Financial manager app to keep track of our family incomes and
                expenses, a Celebrity recognition app just for fun.
              </p>
              <p>
                Later I&apos;ve decided to try to develop a well-known for me
                thing — admin panels and dashboards. But this time using React.
                Vaadin is a great tool. You can create a nice dashboard pretty
                easy and fast using an array of Vaadin&apos;s components. But
                it&apos;s become quite challenging to create a dashboard with
                more custom design. With React you can build whatever you like
                (UI wise), the sky and your imagination is the limit. So,
                I&apos;ve developed several dashboards, like GitHub Dashboard,
                Coffee Shop Dashboard, Google Analytics Dashboard.
              </p>

              <h3 className={styles.storyHeading}>Freelance Job</h3>
              <p>
                So, after learning and practicing Javascript (React.js, Node.js
                / Express.js) for about 6 months (while still doing some minor
                work for start-ups), I felt sure enough for trying to get some
                freelance jobs. I&apos;ve created accounts on freelancer.com and
                upwork.com. I was bidding only on projects where development or
                update of a dashboard needed. And to my surprise, I was able to
                get a customer in a couple of days!
              </p>
              <p>
                After completing a few small freelance jobs, I&apos;ve got an
                invitation for a job interview on Upwork. The job was to develop
                a web app based on the existing mobile app. During the
                interview, my previous banking experience was discovered. As the
                app is at the intersection of technology (blockchain) and
                banking, I received an offer to join a team in the role of
                Product Manager. So, I joined{" "}
                <a
                  href="https://sikoba.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Sikoba
                </a>{" "}
                as a Product Manager / Developer — a wonderful project at the
                intersection of blockchain and banking. As the team was pretty
                small, I did the coding too (and quickly dove into React
                Native).
              </p>
              <p>
                In August 2021 I joined two new projects simultaneously:{" "}
                <a
                  href="https://storehero.ai/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  StoreHero
                </a>{" "}
                and{" "}
                <a
                  href="https://matics.live/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Matics
                </a>
                . Both were supposed to be short-term engagements — and yet,
                here we are, I&apos;m still happily working on both.
              </p>

              <h3 className={styles.storyHeading}>Conclusion</h3>
              <p>
                So, this is my professional journey so far. I can truly say that
                I am completely happy in my career. I do enjoy my daily job,
                that I have to gain new knowledge every day, meet new people
                from around the world (online, of course). And I&apos;m my own
                boss! I&apos;m free to choose a project, free to make my daily
                schedule, and free to work whenever I want.
              </p>
              <p>
                My path to development was not easy and not the shortest one.
                But I wouldn&apos;t change a thing. Everything was (and is) as
                it meant to be.
              </p>
              <p>
                And remember, it&apos;s never too late to pursue your dreams!
              </p>
            </div>
          </details>
        </div>
      </section>

      {/* Hobbies */}
      <section className={styles.hobbiesSection}>
        <div className={styles.hobbiesInner}>
          <div className={styles.hobbiesHeading}>
            <p className={styles.hobbiesEyebrow}>Beyond work</p>
            <h2>Away from the keyboard</h2>
          </div>
          <div className={styles.hobbiesContent}>
            <p className={styles.hobbiesLead}>
              There&apos;s usually still a keyboard involved, just a different
              kind.
            </p>
            <p className={styles.hobbiesText}>
              I play keyboards in a metal band, listen to Finnish and Dutch
              metal, follow tennis, get lost in a good book, and enjoy time with
              my family.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
