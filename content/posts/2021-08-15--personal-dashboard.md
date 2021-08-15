---
title: "Personal Dashboard built with Next.js, Material UI, MongoDB and API integrations"
date: "2021-08-15"
template: "post"
draft: false
slug: "personal-dashboard"
category: "Showcase"
tags:
  - "React"
  - "Material UI"
  - "Next.js"
description: "Overview of how I built the dashboard for my personal projects using Next.js, Material UI, MongoDB and API integrations."
socialImage: "/media/personal-dashboard.png"
---

![rn-i18n](/media/personal-dashboard.png)

## Motivation

As a developer who tries to contribute to the community by writing blog posts, developing and maintaining open-source libraries, and building side projects, I'd like to have a place where I could see and track all these my activities in one place. So I decided to create the dashboard of my personal projects.

## Tech Stack

For the tech stack I've chosen to use:

- [Next.js](https://nextjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Material UI](https://material-ui.com/)
- [Recharts](https://recharts.org/en-US/) - charting library
- [react-spring](https://react-spring.io/) - animation library
- [MongoDB Atlas](https://www.mongodb.com/) - cloud-hosted Mongo Database

## Overview

The app has a "classic" dashboard layout:

- header
- dark and light theme switch
- sidebar with toggle
- content area
- footer

## Pages

The dashboard consists of 5 pages:

1. [Overview of my blog posts, npm packages demo, and hobby apps stats](#page-1---overview-of-my-blog-posts-npm-packages-demo-and-hobby-apps-stats)
2. dev.to stats
3. GitHub stats
4. Twitter stats
5. NPM packages stats

## Page 1 - Overview of my blog posts, npm packages demo, and hobby apps stats

![page-one](/posts/personal-dashboard/page1.gif)

The first page displays the main stats of the blog posts on my personal website, of the npm packages demos that I developed and maintain, and of the hobby apps that I wrote in my spare time. These stats are rendered in the table and include:

- the date of publishing
- the title which also serves as a link to the respective blog post/demo/app
- this week number of weeks with comparison to the previous week
- total views count
- modal window with the chart that shows the number of views for each day during the last month

_Published_, _Last 7 days views_ and _Total views_ columns are sortable. By default, the data is sorted by the number of views for the last 7 days. The blog posts table has pagination.

The data about the views count is stored in **MongoDB Atlas** database. There is a dedicated Next.js [API Route](https://github.com/KaterinaLupacheva/my-projects-dashboard/tree/master/pages/api/views) that communicates with the database. To be able to gather these stats I developed a custom hook - [_useViewCounter_](https://github.com/KaterinaLupacheva/ramonak.io/blob/master/src/hooks/use-view-counter.js). I'll describe the implementation details in one of the upcoming blog posts.
