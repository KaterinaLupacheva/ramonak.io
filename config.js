"use strict";

module.exports = {
  url: "https://ramonak.io",
  pathPrefix: "/",
  title: "Ramonak.io",
  subtitle:
    "Personal site and blog by Katsiaryna (Kate) Lupachova: freelancer, full-stack web and mobile developer from Belarus.",
  copyright: "2019 - 2021  © All rights reserved.",
  disqusShortname: "",
  postsPerPage: 8,
  googleAnalyticsId: process.env.GATSBY_GOOGLE_ANALYTICS,
  useKatex: false,
  menu: [
    {
      label: "Home",
      path: "/",
    },
    {
      label: "Blog",
      path: "/posts",
    },
    {
      label: "My projects",
      path: "/projects",
    },
    {
      label: "Digital Garden",
      path: "/digital-garden",
    },
    {
      label: "About me",
      path: "/about",
    },
  ],
  projects: [
    {
      title: "Personal site",
      image: "/media/projects/landing.JPG",
      description:
        "My personal site, where I write blog posts about technologies I use and learn and showcase my web dev projects.",
      link: "https://ramonak.io",
      techs: ["React.js", "Gatsby.js", "Netlify CMS"],
      sourceCode: "https://github.com/KaterinaLupacheva/ramonak.io",
    },
    {
      title: "Google Analytics Dashboard",
      image: "/media/projects/browsers-devices.JPG",
      description:
        "Custom Google Analytics Dashboard based on Google Analytics Reporting API v4 with OAuth2, charts and tables.",
      link: "",
      techs: ["React.js", "Google Analytics API", "Charts.js"],
      sourceCode:
        "https://github.com/KaterinaLupacheva/react-google-analytics-dashboard",
    },
    {
      title: "Tabata - Fitness App",
      image: "/media/projects/tabata2.JPG",
      description:
        "Fitness Progressive Web App (PWA) based on Tabata - a version of High Intensity Interval Training (HIIT).",
      link: "https://tabata.ramonak.io",
      techs: ["React.js / Redux", "Spring Boot", "Vaadin", "PostgreSQL"],
      sourceCode: "https://github.com/KaterinaLupacheva/tabata-app",
    },
    {
      title: "Personal Dashboard",
      image: "/media/projects/page1.gif",
      description:
        "The dashboard for my personal projects using Next.js, Material UI, MongoDB, with dev.to, GitHub, Twitter, and npm API integration.",
      link: "",
      techs: ["Next.js", "Material UI", "TypeScript", "MongoDB"],
      sourceCode: "https://github.com/KaterinaLupacheva/my-projects-dashboard",
    },
    {
      title: "GitHub API Dashboard",
      image: "/media/projects/github.JPG",
      description:
        "A dashboard of a GitHub account with stats and Victory charts. The data is fetched from GitHub REST API. Please, keep in mind GitHub API Rate Limiting.",
      link: "http://github-dashboard.ramonak.io",
      techs: ["React.js", "GitHub API", "Victory", "Styled Components"],
      sourceCode: "https://github.com/KaterinaLupacheva/github-api-dashboard",
    },
    {
      title: "Dashboard Layout",
      image: "/media/projects/dashboard-layout.gif",
      description:
        "React Material UI Dashboard layout template. Starter code with the implementation of: Basic layout: header, the main content area with drawer, footer; Drawer toggle; Navigation between pages.",
      link: "https://katerinalupacheva.github.io/dashboard-layout/",
      techs: ["React.js", "Material UI", "TypeScript"],
      sourceCode: "https://github.com/KaterinaLupacheva/dashboard-layout",
    },
    {
      title: "Financial Manager App",
      image: "/media/projects/fin-manager.JPG",
      description: `A simple app for keeping track of person's cash flow with charts, pivot table and budget feature.`,
      link: "https://fm.ramonak.io",
      techs: ["React.js", "Material UI", "Charts.js", "Firebase"],
      sourceCode: "https://github.com/KaterinaLupacheva/financial-manager",
    },
    {
      title: "Coffee Shop Dashboard",
      image: "/media/projects/coffee-dashboard.JPG",
      description:
        "A sample dashboard for a Coffee Shop. An owner or administrator can have in one place all information about orders, products, sales, employees, and many more.",
      link: "https://coffee-dashboard.netlify.app/",
      techs: ["React.js", "Material UI", "Charts.js"],
      sourceCode: "https://github.com/KaterinaLupacheva/coffee-shop-dashboard",
    },
    {
      title: "Progress Bar React Component",
      image: "/media/projects/pg-bar.JPG",
      description:
        "A customizable Progress Bar React component with interactive playground and code generator, published to NPM.",
      link: "https://katerinalupacheva.github.io/react-progress-bar/",
      techs: ["React.js", "TypeScript", "NPM"],
      sourceCode: "https://github.com/KaterinaLupacheva/react-progress-bar",
    },
    {
      title: "React Excel Library",
      image: "https://i.ibb.co/Qm3QPhb/react-excel-demo.gif",
      description:
        "React component to upload, edit and transform data of excel sheet into an array of objects. Published to NPM.",
      link: "https://katerinalupacheva.github.io/react-excel/",
      techs: ["React.js", "NPM", "Create React Library"],
      sourceCode: "https://github.com/KaterinaLupacheva/react-excel",
    },
    {
      title: "Worktime logger",
      image: "https://i.ibb.co/rv9CvG4/worktime-logger.gif",
      description:
        "The app calculates a daily worktime that needs to be logged based on the time period, salary and hourly rate. Result can be exported to CSV.",
      link: "https://katerinalupacheva.github.io/worktime-logger/",
      techs: ["React.js", "Material UI", "CSV export"],
      sourceCode: "https://github.com/KaterinaLupacheva/worktime-logger",
    },
    {
      title: "Celebrity Recognition App",
      image: "/media/projects/celebrity1.JPG",
      description:
        "Fun app for finding out which celebrity do you look like by uploading or by pasting URL of your photo using Machine Learning API.",
      link: "https://celebrity.ramonak.io",
      techs: ["React.js", "Clarifai API"],
      sourceCode:
        "https://github.com/KaterinaLupacheva/celebrity-recognition-app",
    },
    {
      title: "Paper React Component",
      image: "/media/projects/paper-demo.JPG",
      description:
        "Paper React component based on Material design with interactive playground and code generator, published to NPM.",
      link: "https://katerinalupacheva.github.io/paper-component/",
      techs: ["React.js", "NPM", "Create React Library"],
      sourceCode: "https://github.com/KaterinaLupacheva/paper-component",
    },
    {
      title: "React Button Group",
      image: "/media/projects/button-group.gif",
      description:
        "React ButtonGroup component with the selection (active button) functionality, published to NPM.",
      link: "https://ramonak.io/posts/react-button-group",
      techs: ["React.js", "NPM", "Create React Library"],
      sourceCode: "https://github.com/KaterinaLupacheva/react-button-group",
    },
  ],
  recentWork: [
    {
      title: "Personal Dashboard",
      date: "August 2021",
      image: "/media/projects/page1.gif",
      description:
        "The dashboard for my personal projects using Next.js, Material UI, MongoDB, with dev.to, GitHub, Twitter, and npm API integration.",
      link: "https://github.com/KaterinaLupacheva/my-projects-dashboard",
      techs: ["Next.js", "Material UI", "TypeScript", "MongoDB"],
    },
    {
      title: "Dashboard Layout Template",
      date: "February 2021",
      image: "/media/projects/dashboard-layout.gif",
      description:
        "React Material UI Dashboard layout template. Starter code with the implementation of Basic layout: header, the main content area with drawer, footer, drawer toggle, navigation between pages.",
      link: "https://github.com/KaterinaLupacheva/dashboard-layout",
      techs: ["React.js", "Material UI", "TypeScript"],
    },
    {
      title: "Google Analytics Dashboard",
      date: "May 2020",
      image: "/media/mockups/GA.png",
      description:
        "Custom Google Analytics Dashboard based on Google Analytics Reporting API v4 with OAuth2, charts and tables.",
      link: "https://github.com/KaterinaLupacheva/react-google-analytics-dashboard",
      techs: ["React.js", "Google Analytics API", "Charts.js"],
    },
    {
      title: "Coffee Shop Dashboard",
      date: "April 2020",
      image: "/media/mockups/coffee.png",
      description:
        "A sample dashboard for a Coffee Shop. An owner or administrator can have in one place all information about orders, products, sales, employees, and many more.",
      link: "https://coffee-dashboard.netlify.app/",
      techs: ["React.js", "Material UI", "Charts.js"],
    },
    {
      title: "GitHub API Dashboard",
      date: "March 2020",
      image: "/media/mockups/Github.png",
      description:
        "A dashboard of a GitHub account with stats and Victory charts. The data is fetched from GitHub REST API.",
      link: "http://github-dashboard.ramonak.io",
      techs: ["React.js", "GitHub API", "Victory", "Styled Components"],
    },
  ],
  digitalGarden: [
    {
      image: "/media/logos/heroku.png",
      title: "Heroku",
      link: "/digital-garden/heroku",
      date: "Oct. 2020",
    },
    {
      image: "/media/logos/git.png",
      title: "Git",
      link: "/digital-garden/git",
      date: "Jun. 2021",
    },
    {
      image: "/media/logos/postgresql.png",
      title: "PostgreSQL",
      link: "/digital-garden/postgresql",
      date: "Oct. 2020",
    },
    {
      image: "/media/logos/react.png",
      title: "React",
      link: "/digital-garden/react",
      date: "Oct. 2020",
    },
    {
      image: "/media/logos/vscode.png",
      title: "VS Code",
      link: "/digital-garden/vscode",
      date: "Oct. 2020",
    },
    {
      image: "/media/logos/netlify.png",
      title: "Netlify",
      link: "/digital-garden/netlify",
      date: "Jan. 2021",
    },
  ],
  author: {
    name: "Katsiaryna (Kate) Lupachova",
    photo: "/photo.jpg",
    bio: "Mobile and web developer, freelancer based in Belarus (Europe)",
    contacts: {
      email: "contact@ramonak.io",
      facebook: "#",
      telegram: "#",
      twitter: "ramonak_io",
      github: "KaterinaLupacheva",
      rss: "",
      vkontakte: "",
      linkedin: "katsiaryna-lupachova",
      instagram: "#",
      line: "",
      gitlab: "",
      weibo: "",
      codepen: "",
      youtube: "",
      bitbucket: "EkaterinaLupacheva",
    },
  },
};
