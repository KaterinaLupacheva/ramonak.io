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
    <div className="flex justify-center bg-slate-950 h-60 mt-40">
      <div className="relative w-full mx-20">
        <div className="absolute w-full h-1 bg-gray-700 top-1/2 transform -translate-y-1/2"></div>

        <div className="flex justify-around absolute w-full left-20">
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

        <div className="flex justify-around absolute w-full bottom-1 -left-5">
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
    </div>
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
  return (
    <div
      className={`flex ${
        isReverse ? "flex-col-reverse" : "flex-col"
      } items-center`}
    >
      <div className="bg-white p-4 rounded-lg shadow-md w-fit w-min-80">
        <p className="text-gray-700 font-semibold">{year}</p>
        <p className="text-gray-600">{description}</p>
      </div>
      <div className="w-1 h-6 bg-gray-700"></div>
      <div className="w-6 h-6 bg-gray-700 rounded-full border-2 border-white"></div>
    </div>
  );
}
