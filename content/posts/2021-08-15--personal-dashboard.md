---
title: "Next.js, Material UI, MongoDB and API integrations Personal Dashboard"
date: "2021-08-29"
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
2. [dev.to stats](#page-2---devto-stats)
3. GitHub stats
4. Twitter stats
5. NPM packages stats

## Page 1 - Overview of my blog posts, npm packages demo, and hobby apps stats

![page-one](/posts/personal-dashboard/page1.gif)

The first page displays the main stats of the blog posts on my personal website, of the npm packages demos that I developed and maintain, and of the hobby apps that I wrote in my spare time. These stats are rendered in the table and include:

- the date of publishing
- the title, which also serves as a link to the respective blog post/demo/app
- this week number of weeks with comparison to the previous week
- total views count
- modal window with the chart that shows the number of views for each day during the last month

_Published_, _Last 7 days views_ and _Total views_ columns are sortable. By default, the data is sorted by the number of views for the last 7 days. The blog posts table has pagination.

The data about the views count is stored in **MongoDB Atlas** database. There is a dedicated Next.js [API Route](https://github.com/KaterinaLupacheva/my-projects-dashboard/tree/master/pages/api/views) that communicates with the database. To be able to gather these stats, I developed a custom hook - [_useViewCounter_](https://github.com/KaterinaLupacheva/ramonak.io/blob/master/src/hooks/use-view-counter.js).

Probably another part that was tricky to implement on this page is the feature of **sorting** the Material UI **table by specific columns**. [This](https://github.com/KaterinaLupacheva/my-projects-dashboard/blob/master/components/ViewsTable/ViewsTable.tsx) is how I implemented it.

## Page 2 - dev.to stats

I'm a follower of the "Learn in public" concept. When I learn something new while working on a project and I write an article on it, I definitely know the subject better later. Plus I hope this also helps other developers in their "gaining new knowledge" journey.

![page-two](/posts/personal-dashboard/page2.gif)

To use dev.to API you just need to obtain the **API key**. How to do so is described in the [official docs](https://docs.forem.com/api/).

There are two stat cards at the top of the page. They show data about **followers count** and the total **number of posts** for today. The data is gathered from https://dev.to/api/followers/users and https://dev.to/api/articles/me APIs respectively. "Running numbers" animation implemented with the [react-spring](https://react-spring.io/) library.

Also, there are **dynamics of followers count chart**. But dev.to API provides data only for the current number of followers. Where do I get the data for the previous days? To be able to display this data we need to:

1. store followers count in the **database** (for this I use [MongoDB Atlas](https://www.mongodb.com/))
2. run the **cron (scheduled) job** for this to happen daily ([GitHub actions](https://docs.github.com/en/actions) to the rescue)

The number at the bottom right corner of the followers' count card shows the followers' number change for the last week.

The main section of the page consists of cards with information about **each blog post**. This data is fetched from https://dev.to/api/articles/me API. Each card has information about:

- article's title
- date of publishing
- number of views, reactions, and comments
- tags list
- cover image

The card is clickable. By clicking on it, the article opens in a new tab, using the URL data from the API.

All blog posts can be **sorted** by the published date (sorted by default), number of views, reactions, or comments. How to implement this feature is described in [this blog post](https://ramonak.io/posts/react-how-to-sort-array-of-objects-with-dropdown-and-hooks).
