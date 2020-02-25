---
title: "React Context API: updating Context from a nested component (in functional components with Hooks and class components)"
date: "2020-02-25"
template: "post"
draft: false
slug: "react-context-api-update-from-nested-component"
category: "Tutorial"
tags:
  - "React"
  - "Context API"
description: "How to update React's Context from a nested component in a two ways: using functional components with React Hooks and using class components."
socialImage: "/posts/react-context/react-context-api.jpg"
---

![react-context-api](/posts/react-context/react-context-api.jpg)

[Context API](https://reactjs.org/docs/context.html)  is a way to store and modify different states and then be able to have access to those states in any part (component) of the app. Thus it eliminates “prop drilling” issue. Context comes with React, so we don’t need to bring in any 3rd-party library (like [Redux](https://redux.js.org/), for instance) to solve this problem.

While developing my recent project, [Tabata - Fitness App](https://tabata.ramonak.io), I needed to be able to play and pause the video clip of the exercise from another component. So, the simplified diagram of the component tree is as following:

![app-structure](/posts/react-context/app-structure.JPG)

In this blog post, I’m going to solve this problem in two ways:

1. Using only functional components, Hooks and Context API
2. Using only class components and Context API

## Part I: React Context API with functional components and Hooks

First, let’s create all the components:

**video-clip.component.js**

```jsx

import React from 'react';

const videoStyles = {
  marginTop: '100px',
  width: '50vw',
};

const VideoClip = () => (
  <video style={videoStyles} controls>
    <source
      src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
      type="video/mp4"
    />
  </video>
);

export default VideoClip;
```

*video by https://pixabay.com/*
