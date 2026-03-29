import bankImage from "../images/image_bank.png";
import programmingImage from "../images/programming.png";
import javaImage from "../images/java.png";
import startUpImage from "../images/start-up1.png";
import startUpImage2 from "../images/start-up2.png";
import javascriptImage from "../images/javascript.png";
import freelanceImage from "../images/freelance.png";
import LightContentItem from "../LightContentItem/LightContentItem";
import TwoColumnsContentItem from "../TwoColumnsContentItem/TwoColumnsContentItem";
import Image from "next/image";
import styles from "./Content.module.css";

export default async function Content() {
  return (
    <>
      <section className={styles.lightSection}>
        <div className={styles.lightInner}>
          <LightContentItem imageSrc={bankImage} sectionTitle="Banking Career">
            <p>
              After graduating from Belarussian State Economic University with a
              Bachelor&rsquo;s degree in finance and credit in 2004, I&rsquo;ve
              spent the next 14 years working as a bank clerk. I&rsquo;ve worked
              in two banks and changed 5 departments in the meantime. Retail and
              corporate lending, collateral evaluation, financial analysis,
              credit risk assessment, accounting reports are among the things
              that I was doing.
            </p>
            <p>
              But gradually my work became like a &ldquo;Groundhog Day&rdquo; -
              every day was the same as the previous one. I liked my work in
              general and my working team, the boss was great and the salary was
              good, but I wanted more. I wanted to learn every day, to move
              forward, and to have more freedom (as a bonus). To look forward to
              Mondays and not to drag my feet to the office every day.
            </p>
            <p>
              I always dreamed to have my own business someday, or at least be
              my own boss. At the same time, I was prone to the automation and
              optimization of all processes in my banking career. And besides,
              the tech industry is booming in Belarus for the last decade.
            </p>
          </LightContentItem>
          <LightContentItem
            imageSrc={programmingImage}
            sectionTitle="Switching to Programming"
            isReverse
          >
            <p>
              So, at 35, with no relevant degree, I&rsquo;ve decided to
              completely change my professional life and to become somebody like
              a programmer. At the time I didn&apos;t have a clear idea of what
              exactly I&apos;d like to do. I had no friends in the tech
              industry, nobody who could become my mentor in this journey. So my
              learning path was very curvy with lots of trials and errors.
            </p>
            <p>
              While still working at a bank, I&rsquo;ve decided to learn a
              programming language. Simply googling this topic, I&rsquo;ve found
              out that the most popular language at that time was Java (it was
              2018). So, let&rsquo;s try to learn it! I&rsquo;ve started to do
              an online free course, but my progress was extremely slow. Working
              full-time and having a family with a small kid, I literally had a
              very small time and even less energy to study.
            </p>
            <p>
              So, together with my husband, we made a decision that I&rsquo;ll
              quit my banking job and will study full-time. My last working day
              in the bank was July 13th, 2018. Since then my long and heavy road
              in development began.
            </p>
          </LightContentItem>
          <LightContentItem imageSrc={javaImage} sectionTitle="Java Course">
            <p>
              I&rsquo;ve wanted to start with a beginner level of Java off-line
              course. But for that, I needed to have a basic understanding of
              web technologies (HTML, CSS, how the Internet works, and so on).
              So I had a crash course on that.
            </p>
            <p>
              Then during the next 6 months, I&rsquo;ve successfully completed
              the Java Fundamentals course and Java Enterprise course in the
              Educational Center of HI-Tech Park Belarus (IT Academy). There
              were lots of hard studies during these 6 months. I&rsquo;d say
              that it was 95% of self-studies and only 5% of classwork. By the
              way, I was the only female in the advanced section of the Java
              course and finished it as the best student in the class!
            </p>
            <p>
              I understood that I really like programming, all this
              problem-solving thing. But at the same time, it was obvious that
              Java is mostly required in big tech companies and I definitely
              didn&rsquo;t want to go back into the corporate world. Besides,
              when I was working on my final project of the course, I wanted to
              have a &quot;normal&quot; front-end, although due to assignment it
              was enough to display results of the back-end queries in a
              console. I guess I&rsquo;ve tried to use some Java frontend tools
              like JSP and it was awful!
            </p>
            <p>
              When the Java course was coming to an end, I&rsquo;ve started to
              think about what should I do next? I had an idea that it would be
              great to work in a small start-up team. But the problem was that
              nobody needed a developer with a zero experience. Start-ups
              require an experienced developer who can bring results fast.
            </p>
          </LightContentItem>
        </div>
      </section>
      <TwoColumnsContentItem sectionTitle="Start-up Projects">
        <p>
          Luckily I&rsquo;ve found out that there is a lab for IT Academy
          graduates where junior developers can improve their skills working on
          a real project in a small team. I was accepted on a project called
          naakcII.by. It&rsquo;s a service that helps to find groceries and
          other goods with the best prices among Belarussian stores. By the time
          when I joined this project (January 2019), it was in a development
          mode for 8 months. My first assignment was to develop Swagger
          documentation of the project. After that, the team decided that an
          admin panel is really would be useful to implement CRUD operations on
          the database. And once again there was a problem - Java is not a
          front-end language and we were short in front-end developers.
        </p>
        <p>
          Then the project&rsquo;s mentor suggested using Vaadin framework for
          admin panel development. That&rsquo;s how I knew that you can develop
          front-end parts in Java too! So since February 2019, I&rsquo;ve
          started to learn Vaadin intensively. For the first time, I was reading
          technical documentation a lot, as this framework is not widely used,
          so there are very few tutorials on it. It was hard, especially to
          grasp front-end concepts without almost zero background in classic
          front-end technologies, like HTML, CSS, and Javascript. But in 2
          months of hard work, I&rsquo;ve developed an admin panel for the
          project. I was proud of my job, but now looking back, the quality of
          the code was low and the architecture of the project was not good. But
          it was a really useful experience and it was my first full-stack Java
          project. And more importantly, the admin panel was doing its job just
          fine.
        </p>
      </TwoColumnsContentItem>
      <div className={styles.imageBand}>
        <div className={styles.imageBandInner}>
          <Image
            src={startUpImage}
            alt="Start-up"
            className={styles.bandImage}
          />
        </div>
      </div>
      <TwoColumnsContentItem>
        <div>
          <p>
            In April-May 2019 a new start-up project was presented to the lab -
            weekmenu.by: the app for helping families to make a menu for a week
            (with recipes) that generates a list of ingredients to be bought
            once in a week. It was decided to join this new project
            (weekmenu.by) to the existing project (naakcii.by) and start
            building an ecosystem Happy Family.
          </p>
          <div className={styles.spacer}></div>
          <p>
            By that time most of the team members found jobs in tech companies,
            so a new portion of IT Academy graduates joined the team. I
            wasn&rsquo;t looking for a job on purpose. I wanted to gain
            experience in this start-up world and eventually start my own
            project. BTW, in April-May 2019 I&rsquo;ve attended a Project
            management course, as I wanted to improve my knowledge base on how
            to build a process of tech product development in a team.
          </p>
        </div>
        <div>
          <p>
            Work on a new project started very enthusiastically. UI/UX design,
            user stories, app architecture, ideas about integration of two
            services, and into 3rd parties API. But unfortunately, it lasted not
            for long. The lab wasn&rsquo;t paying anything to its members. So
            people were founding a real job pretty quickly and leaving the
            project.
          </p>
          <div className={styles.spacer}></div>
          <p>
            The funny thing is that I was the most &quot;experienced&quot;
            developer of the team at the time. So my responsibilities include
            app architecture, code review, assistance to other developers. And
            of course, once again I was developing an admin panel for the
            project using the Vaadin framework. By the way, in December 2019 I
            passed an exam and got Vaadin 14 Developer Certificate .
          </p>
        </div>
      </TwoColumnsContentItem>
      <div className={styles.imageBand}>
        <div className={styles.imageBandInner}>
          <Image
            src={startUpImage2}
            alt="Start-up"
            className={styles.bandImage}
          />
        </div>
      </div>
      <TwoColumnsContentItem>
        <div>
          <p>
            Well, things were moving very slowly. More and more people were
            leaving the project as they were lacking motivation. The most
            problem was in finding front-end developers, specifically Angular
            developers, as the first project (naakcii.by) was developed with
            Angular, so our mentor had a strong opinion that to integrate two
            projects they should use the same tech stack (I completely disagree
            with that). Unfortunately, gradually, the work on the projects
            completely stopped.
          </p>
        </div>
        <div>
          <p className={styles.accentTitle}>
            What I&apos;ve learned working on two start-up projects:
          </p>
          <ul className={styles.list}>
            <li>
              Improved my tech skills in Spring Boot, Vaadin, PostgreSQL, Git,
              Bitbucket, Jira
            </li>
            <li>
              Gained experience in remote work with a team of developers on real
              projects
            </li>
            <li>Saw how Scrum methodology looks like in practice</li>
            <li>Met a lot of new really nice people</li>
          </ul>
        </div>
      </TwoColumnsContentItem>
      <section className={styles.lightSection}>
        <div className={styles.lightInner}>
          <LightContentItem
            imageSrc={javascriptImage}
            sectionTitle="Learning JavaScript"
            isReverse
          >
            <p>
              In the meantime, I was starting to look at freelance job
              opportunities. But with my tech stack (Java) it was practically
              impossible to compete with experienced developers. So I decided to
              switch my programming language preferences and start learning
              front-end technologies: Javascript and then React.
            </p>
            <p>
              At the end of October 2019, I&rsquo;ve started to learn
              JavaScript. For me, it was way easier to learn JavaScript than
              Java. Maybe because it was a second programming language for me.
              But overall after &quot;heavy&quot; and strict Java, JavaScript
              was like fresh air. And you can use JavaScript (Node.js) for a
              back-end too!
            </p>
            <p>
              After learning JavaScript fundamentals I moved to React.js. Why
              did I choose React.js? Once again, because it&rsquo;s the most
              popular JavaScript library. I was having sooooo much fun learning
              React! You know, in Java you can&rsquo;t see the results of your
              work visually. And React is all about UI.
            </p>
          </LightContentItem>
          <LightContentItem
            imageSrc={freelanceImage}
            sectionTitle="Preparing For Freelance"
          >
            <p>
              I&rsquo;ve read several articles of experienced freelancers, where
              the main message was that you should start to find jobs as soon as
              possible and learning during the process of working on it. I
              didn&rsquo;t feel that it&rsquo;s the right way for me. I
              can&rsquo;t take a job if I don&rsquo;t feel that I can accomplish
              it.
            </p>
            <p>
              I&rsquo;ve decided to practice my front-end skills while
              developing apps and tools, that I needed in my everyday life. For
              example, a fitness app Tabata App for my personal training, a
              Financial manager app - to keep track of our family incomes and
              expenses, a Celebrity recognition app just for fun.
            </p>
            <p>
              Later I&rsquo;ve decided to try to develop a well-know for me
              thing - admin panels and dashboards. But this time using React.
              Vaadin is a great tool. You can create a nice dashboard pretty
              easy and fast using an array of Vaadin&rsquo;s components. But
              it&rsquo;s become quite challenging to create a dashboard with
              more custom design. With React you can build whatever you like (UI
              wise), the sky and your imagination is the limit. So, I&rsquo;ve
              developed several dashboards, like GitHub Dashboard, Coffee Shop
              Dashboard, Google Analytics Dashboard.
            </p>
          </LightContentItem>
        </div>
      </section>
    </>
  );
}
