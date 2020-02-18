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
      title: 'Tabata - Fitness App',
      image: '/media/projects/tabata2.JPG',
      description: 'Fitness Progressive Web App (PWA) based on Tabata - a version of High Intensity Interval Training (HIIT).',
      link: 'https://tabata.ramonak.io',
      techs: ['React.js / Redux', 'Spring Boot', 'Vaadin', 'PostgreSQL'],
      sourceCode: 'https://github.com/KaterinaLupacheva/tabata-app'
    }
  ],
  author: {
    name: 'Katsiaryna (Kate) Lupachova',
    photo: '/my-photo.png',
    bio: 'Full-stack web developer, freelancer based in Belarus (Europe)',
    contacts: {
      email: 'contact@ramonak.io',
      facebook: '#',
      telegram: '#',
      twitter: 'IoRamonak',
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
