---
title: "Next.js, Material UI, MongoDB Personal Dashboard"
date: "2021-08-29"
template: "post"
draft: false
slug: "personal-dashboard"
category: "Showcase"
tags:
  - "React"
  - "Material UI"
  - "Next.js"
description: "Overview of how I built the dashboard for my personal projects using Next.js, Material UI, MongoDB, with dev.to, GitHub, Twitter, and npm API integration."
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

Also, the app uses [ESLint](https://eslint.org/) custom rules, [prettier](https://prettier.io/) code formatting, [husky](https://typicode.github.io/husky/#/) git hooks with [lint-staged](https://github.com/okonet/lint-staged).

## Pages

The dashboard consists of 5 pages:

1. [Overview of my blog posts, npm packages demo, and hobby apps stats](#page-1---overview-of-my-blog-posts-npm-packages-demo-and-hobby-apps-stats)
2. [dev.to stats](#page-2---devto-stats)
3. [GitHub stats](#page-3---github-stats)
4. [Twitter stats](#page-4---twitter-stats)
5. [NPM packages stats](#page-5---npm-packages-stats)

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

There are two stat cards at the top of the page. They show data about **followers count** and the total **number of posts** for today. The data is gathered from `https://dev.to/api/followers/users` and `https://dev.to/api/articles/me` APIs respectively. "Running numbers" animation implemented with the [react-spring](https://react-spring.io/) library.

Also, there are **dynamics of followers count chart**. But dev.to API provides data only for the current number of followers. Where do I get the data for the previous days? To be able to display this data we need to:

1. store followers count in the **database** (for this I use [MongoDB Atlas](https://www.mongodb.com/))
2. run the **cron (scheduled) job** for this to happen daily ([GitHub actions](https://docs.github.com/en/actions) to the rescue)

The number at the bottom right corner of the followers' count card shows the followers' number change for the last week.

The main section of the page consists of cards with information about **each blog post**. This data is fetched from `https://dev.to/api/articles/me` API. Each card has information about:

- article's title
- date of publishing
- number of views, reactions, and comments
- tags list
- cover image

The card is clickable. By clicking on it, the article opens in a new tab, using the URL data from the API.

All blog posts can be **sorted** by the published date (sorted by default), number of views, reactions, or comments. How to implement this feature is described in [this blog post](https://ramonak.io/posts/react-how-to-sort-array-of-objects-with-dropdown-and-hooks).

## Page 3 - GitHub stats

![page-three](/posts/personal-dashboard/page3.gif)

Before using [GitHub REST API](https://docs.github.com/en/rest) you need to create a personal access token. [Here](https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token) are the instructions on how to do so.

At the top of the page, the general GitHub **user profile data** and **main stats** indicators are shown. A user profile data is a response from `https://api.github.com/user` endpoint and it includes:

- name
- bio
- avatar
- location
- company
  and other profile information.

The **followers' count** and the **number of the public repos** are also coming from the above-mentioned endpoint.

But the data about **total stars** and **total forks** amount is calculated based on each repo data. To get the information about all user's repos you should query `https://api.github.com/user/repos` endpoint.

Same as for dev.to followers count, the data on GitHub total repos, total followers, total stars, and total forks is stored **daily** in the **database** with the help of the **scheduled GitHub action**.

The repositories section of the page displays cards with **each repo data**, such as:

- repo name
- website (if exists)
- description
- number of stars, forks, watchers
- language
- created at and updated at dates
- license

The cards are **sortable** by stars (default), forks, and the last update date.

> I have a separate app that utilizes GitHub REST API - [GitHub API dashboard](https://github-dashboard.ramonak.io/), that I've developed a while back and probably need to update. A user can enter any existing GitHub username and see public information on that user, including profile information, a person's programming languages structure, and repos data.

## Page 4 - Twitter stats

![page-four](/posts/personal-dashboard/page4.gif)

I'm not a very active (mildly speaking) Twitter user. I mean I do read other people's tweets, but do not tweet myself often. Maybe this will change eventually, but it is what it is now.

As it's stated in the [docs](https://developer.twitter.com/en/docs/twitter-api/getting-started/getting-access-to-the-twitter-api), to get access to the Twitter API you need to:

1. apply and receive approval for a developer account
2. get your app's key and tokens.

Specifically for my dashboard, I use v1.1. of the API and Bearer Token for authorization.

The top section of the page displays general information about the Twitter **profile**. This data comes from `https://api.twitter.com/1.1/users/show` API and includes:

- screen name
- name
- description
- location
- when a profile was created
- followers count
- image URL
  and so on.

Same as for dev.to and GitHub followers count, the data on Twitter followers is stored **daily** in the **database** with the help of the **scheduled GitHub action**.

The data in the Tweets section of the page comes from `https://api.twitter.com/1.1/statuses/user_timeline` API. This API returns a tweet's text, date of publishing, retweets and likes count, etc. I visually distinguish if a tweet was a reply to some other tweet and a tweet by itself.

If a tweet returns from the API **truncated**, I compute a link to its full content.

The tweet cards are **sortable** by published date (default), retweets, and likes.

## Page 5 - NPM packages stats

![page-five](/posts/personal-dashboard/page5.gif)

While developing a piece of functionality for any projects that I'm involved with, sometimes I publish it as a public **library** on [NPM](https://www.npmjs.com/). Thus any developer (myself included) can use it, and I feel great that I can do something useful for a community.

If you'd like to publish your library, I wrote the **blog post** on [how to publish a custom React component to NPM](https://ramonak.io/posts/react-publish-to-npm).

There is no need to obtain an API key or token for querying NPM registry API. For the dashboard, I use only the endpoint that provides the data about a **package downloads count** - `https://api.npmjs.org/downloads/`. You can read more about it [here](https://github.com/npm/registry/blob/master/docs/download-counts.md).

I have **4 public NPM libraries** at the moment. There are stats on each of them in the dashboard:

- a chart with the daily downloads count for the last month
- an average downloads per day (calculated)
- weekly downloads

As you can see, the [React progress bar](https://www.npmjs.com/package/@ramonak/react-progress-bar) library has the biggest downloads count among my libraries so far. The robust UI components libraries are great, and I love to use them. But sometimes you just need one simple customizable component. And I had exactly such a use case. Here is the blog post about [how to create a custom progress bar component in 5 minutes](https://ramonak.io/posts/react-progress-bar).

## Conclusion

The source code for my personal dashboard is available in [this repo](https://github.com/KaterinaLupacheva/my-projects-dashboard). And here is the [live version](https://my-projects-dashboard.vercel.app/) (deployed on [Vercel](https://vercel.com)).
