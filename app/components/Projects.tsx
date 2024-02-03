import ProjectSection from "./ProjectSection";

export default function Projects() {
  return (
    <div className="flex flex-col py-24 bg-white gap-24">
      {myProjects.map((section, idx) => (
        <ProjectSection
          key={section.title}
          {...section}
          isReversed={idx % 2 !== 0}
        />
      ))}
    </div>
  );
}

const myProjects = [
  {
    title: "StoreHero",
    description:
      "Web app with a connection to multiple 3rd party APIs. My main functionalities include implementation of the integration with Google Analytics API, Google Ads API, Google Search Console API, Meta (Facebook) Ads API, Shopify API, Sendgrid API, TikTok API, Klaviyo API, and also AWS services: DynamoDB, S3, Cognito, Amplify.",
    period: "August 2021 - Present",
    href: "https://storehero.ai",
    image: "storehero",
  },
  {
    title: "Matics",
    description:
      "Real-time Operational Intelligence (RtOI) web interface. I am responsible for front-end development utilizing React. My tasks involve the implementation of a diverse range of components, including but not limited to Kanban boards, charts (Highcharts.js), tables (TanStack Table), diagrams (React Flow), and other sophisticated data visualization elements.",
    period: "August 2021 - Present",
    href: "https://matics.live",
    image: "matics",
  },
  {
    title: "bekiPay",
    description:
      "The local currency app for the Beki currency that is used in canton de Redange in Luxembourg. I was responsible for the front-end development of the mobile app using React Native, and also web admin dashboard developed with React.",
    period: "October 2020 - July 2021",
    href: "https://play.google.com/store/apps/details?id=com.sikoba.bekiPay&hl=en&gl=US&pli=1",
    image: "bekiPay",
  },
];
