import styles from "./Timeline.module.css";

const events = [
  {
    year: "2004",
    description: "Graduated from Belarussian State Economic University",
  },
  {
    year: "July 2018",
    description: "Worked at banks as a credit manager",
  },
  {
    year: "July 2018",
    description: "Java programming language learning",
    isReverse: true,
  },
  {
    year: "January 2019",
    description: "Java developer at local start-up companies",
  },
  {
    year: "October 2019",
    description: "JavaScript and React.js learning",
    isReverse: true,
  },
  {
    year: "May 2020",
    description: "Web and mobile apps developer",
    isReverse: true,
  },
];

export default function Timeline() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>
        <div className={styles.line}></div>

        <div className={styles.topRow}>
          {events.map((event, index) => {
            if (index % 2 !== 0) {
              return (
                <TimelineEvent
                  key={index}
                  year={event.year}
                  description={event.description}
                />
              );
            }
          })}
        </div>

        <div className={styles.bottomRow}>
          {events.map((event, index) => {
            if (index % 2 === 0) {
              return (
                <TimelineEvent
                  key={index}
                  year={event.year}
                  description={event.description}
                  isReverse
                />
              );
            }
          })}
        </div>
      </div>
    </section>
  );
}

type TimelineEventProps = {
  year: string;
  description: string;
  isReverse?: boolean;
};

function TimelineEvent({
  year,
  description,
  isReverse = false,
}: TimelineEventProps) {
  const className = [styles.event, isReverse ? styles.reverse : ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div className={className}>
      <div className={styles.card}>
        <p className={styles.year}>{year}</p>
        <p className={styles.description}>{description}</p>
      </div>
      <div className={styles.stem}></div>
      <div className={styles.dot}></div>
    </div>
  );
}
