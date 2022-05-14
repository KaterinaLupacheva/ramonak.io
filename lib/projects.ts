import { Project } from "../ts";

export const commercialProjects: Project[] = [
  {
    projectTitle: "Matics",
    companyName: "Matics Manufacturing Analytics Ltd. (Israel)",
    companyLink: "https://matics.live/",
    date: "August 2021 - Present",
    description: "Manufacturing execution system.",
    tech: ["React"],
  },
  {
    projectTitle: "StoreHero",
    companyName: "StoreHero (Ireland)",
    date: "August 2021 - Present",
    description:
      "Web app with a connection to multiple 3rd party APIs. My job is to implement the integration with: Google Analytics API, Google Ads API, Google Search Console API, Facebook Ads API, Shopify API, Sendgrid API.",
    companyLink: "https://storehero.ai/",
    tech: ["JavaScript", "Next.js"],
    projectLink: "https://storehero.ai/",
    image: "/static/projects/storehero/storehero.png",
  },
  {
    projectTitle: "sikobaPay app",
    companyName: "Sikoba Ltd. (UK)",
    date: "May 2020 - July 2021",
    description: "IOU (debt tracking) mobile and web app",
    companyLink: "https://sikoba.com",
    tech: ["React Native", "React"],
    projectLink: "https://play.google.com/store/apps/details?id=com.sikoba.dev",
    image: "/static/projects/sikobaApp.jpeg",
    isMobile: true,
  },
  {
    projectTitle: "bekiPay app",
    companyName: "Sikoba Ltd. (UK)",
    date: "October 2020 - July 2021",
    description:
      "The local currency app for the Beki currency that is used in canton de Redange in Luxembourg",
    companyLink: "https://sikoba.com",
    tech: ["React Native"],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.sikoba.bekiPay",
    image: "/static/projects/bekiPay.png",
    isMobile: true,
  },
  {
    projectTitle: "ABM Wallet app",
    companyName: "Sikoba Ltd. (UK)",
    date: "January 2021 - July 2021",
    description:
      "The app for sending tokens and other assets to other registered user or to any phone number",
    companyLink: "https://sikoba.com",
    tech: ["React Native"],
    projectLink:
      "https://play.google.com/store/apps/details?id=com.sikoba.wallet",
    image: "/static/projects/abmWallet.png",
    isMobile: true,
  },
];
