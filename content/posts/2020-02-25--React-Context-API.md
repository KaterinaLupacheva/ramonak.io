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

First, start a new React project using [create-react-app](https://github.com/facebook/create-react-app).  

Then let’s create all the components:

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

**play-pause-button.component.js**

```jsx

import React from 'react';

const styles = {
  width: '100px',
  height: '5vh',
  backgroundColor: 'black',
  color: 'white',
  fontSize: '20px',
  marginTop: '20px',
};

const PlayPauseButton = () => <button style={styles}>Click</button>;

export default PlayPauseButton;
```

**controls.component.js**

```jsx

import React from 'react';
import PlayPauseButton from './play-pause-button.component';

const Controls = () => <PlayPauseButton />;

export default Controls;
```

**App.js**

```jsx

import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import './App.css';

function App() {
  return (
    <div className="App">
        <VideoClip />
        <Controls />
    </div>
  );
}

export default App;
```

If we run the app (```npm start```), then we'll see just a video clip with control buttons and a "Click" button, which does nothing for now.

![start-creen](/posts/react-context/screen1.JPG)
*video by https://pixabay.com/*

Our goal is to control the playback of the video by clicking on the Click button.

