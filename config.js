'use strict';

module.exports = {
  url: 'https://ramonak.io',
  pathPrefix: '/',
  title: 'Ramonak.io',
  subtitle: 'Personal site and blog by Katsiaryna (Kate) Lupachova: freelancer, full-stack web developer from Belarus.',
  copyright: '2019 - 2020  © All rights reserved.',
  disqusShortname: '',
  postsPerPage: 4,
  googleAnalyticsId: 'UA-145833602-1',
  useKatex: false,
  menu: [
    {
      label: 'Blog',
      path: '/'
    },
    {
      label: 'About me',
      path: '/pages/about'
    },
    {
      label: 'My projects',
      path: '/pages/projects'
    }
  ],
  projects: [
    {
      title: 'Personal site',
      image: '/media/projects/personal-site1.JPG',
      description: 'My personal site, where I write blog posts about technologies I use and learn and showcase my web dev projects.',
      link: 'https://ramonak.io',
      techs: ['React.js', 'Gatsby.js', 'Netlify CMS'],
      sourceCode: 'https://github.com/KaterinaLupacheva/ramonak.io'
    },
    {
      title: 'Tabata - Fitness App',
      image: '/media/projects/tabata2.JPG',
      description: 'Fitness Progressive Web App (PWA) based on Tabata - a version of High Intensity Interval Training (HIIT).',
      link: 'https://tabata.ramonak.io',
      techs: ['React.js / Redux', 'Spring Boot', 'Vaadin', 'PostgreSQL'],
      sourceCode: 'https://github.com/KaterinaLupacheva/tabata-app'
    },
    {
      title: 'Celebrity Recognition App',
      image: '/media/projects/celebrity1.JPG',
      description: 'Fun app for finding out which celebrity do you look like by uploading or by pasting URL of your photo using Machine Learning API.',
      link: 'https://celebrity.ramonak.io',
      techs: ['React.js', 'Clarifai API'],
      sourceCode: 'https://github.com/KaterinaLupacheva/celebrity-recognition-app'
    },
    {
      title: 'GitHub API Dashboard',
      image: '/media/projects/github.JPG',
      description: 'A dashboard of a GitHub account with stats and Victory charts. The data is fetched from GitHub REST API. Please, keep in mind GitHub API Rate Limiting.',
      link: 'http://github-dashboard.ramonak.io',
      techs: ['React.js', 'GitHub API', 'Victory', 'Styled Components'],
      sourceCode: 'https://github.com/KaterinaLupacheva/github-api-dashboard'
    },
    {
      title: 'Financial Manager App',
      image: '/media/projects/fin-manager.JPG',
      description: `A simple app for keeping track of person's cash flow with charts, pivot table and budget feature.`,
      link: 'https://fm.ramonak.io',
      techs: ['React.js', 'Material UI', 'Charts.js', 'Firebase'],
      sourceCode: 'https://github.com/KaterinaLupacheva/financial-manager'
    },
    {
      title: 'Coffee Shop Dashboard',
      image: '/media/projects/coffee-dashboard.JPG',
      description: 'A sample dashboard for a Coffee Shop. An owner or administrator can have in one place all information about orders, products, sales, employees, and many more.',
      link: 'https://coffee-dashboard.netlify.app/',
      techs: ['React.js', 'Material UI', 'Charts.js'],
      sourceCode: 'https://github.com/KaterinaLupacheva/coffee-shop-dashboard'
    },
    {
      title: 'Progress Bar React Component',
      image: '/media/projects/pg-bar.JPG',
      description: 'A customizable Progress Bar React component with interactive playground and code generator, published to NPM.',
      link: 'https://katerinalupacheva.github.io/react-progress-bar/',
      techs: ['React.js', 'NPM', 'Create React Library'],
      sourceCode: 'https://github.com/KaterinaLupacheva/react-progress-bar'
    },
  ],
  author: {
    name: 'Katsiaryna (Kate) Lupachova',
    photo: '/my-photo.png',
    bio: 'Full-stack web developer, freelancer based in Belarus (Europe)',
    contacts: {
      email: 'contact@ramonak.io',
      facebook: '#',
      telegram: '#',
      twitter: 'ramonak_io',
      github: 'KaterinaLupacheva',
      rss: '',
      vkontakte: '',
      linkedin: 'katsiaryna-lupachova',
      instagram: '#',
      line: '',
      gitlab: '',
      weibo: '',
      codepen: '',
      youtube: '',
      bitbucket: 'EkaterinaLupacheva'
    }
  }
};
