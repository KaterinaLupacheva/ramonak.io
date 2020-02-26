---
title: "React Context API: updating Context from a nested component (in functional components with Hooks and class components)"
date: "2020-02-26"
template: "post"
draft: false
slug: "react-context-api-update-from-nested-component"
category: "Tutorial"
tags:
  - "React"
  - "Context API"
description: "How to update React's Context from a nested component in two ways: using functional components with React Hooks and using class components."
socialImage: "/posts/react-context/react-context-api.jpg"
---

![react-context-api](/posts/react-context/react-context-api.jpg)

[Context API](https://reactjs.org/docs/context.html)  is a way to store and modify different states and then be able to have access to those states in any part (component) of the app. Thus it eliminates “prop drilling” issue. Context comes with React, so we don’t need to bring in any 3rd-party library (like [Redux](https://redux.js.org/), for instance) to solve this problem.

While developing my recent project, [Tabata - Fitness App](https://tabata.ramonak.io), I needed to be able to play and pause the video clip of the exercise from another component. So, the simplified diagram of the component tree is as following:

![app-structure](/posts/react-context/app-structure.JPG)

In this blog post, I’m going to solve this problem in two ways:

1. [Using only functional components, Hooks and Context API](#part-i-react-context-api-with-functional-components-and-hooks)
2. [Using only class components and Context API](#part-ii-react-context-api-with-class-components)

## Part I: React Context API with functional components and Hooks

First, start a new React project using [create-react-app](https://github.com/facebook/create-react-app).  

Then let’s create all the components:

**src/components/video-clip.component.js**

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

**src/components/play-pause-button.component.js**

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

**src/components/controls.component.js**

```jsx

import React from 'react';
import PlayPauseButton from './play-pause-button.component';

const Controls = () => <PlayPauseButton />;

export default Controls;
```

**src/App.js**

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

Our goal is to control the playback of the video by clicking on the Click button. For that, we need data about the video status (playing or paused) and a way to update this status by clicking on the button. And also we’d like to escape the “prop drilling”.

In a typical React app, we would have a state object in the parent component (App.js) with a status property and a function for updating the status. This state would be passed-down to direct child components (VideoClip component and Controls component) via props, and then from Controls component further to PalyPauseButton component. Classical “prop-drilling”.

Let’s use the help of the Context API.

Create VideoContext with default status value as ‘paused’ and a default (empty) function for updating the status.

**src/context/video.context.js**

```jsx
import React, { createContext } from 'react';

const VideoContext = createContext({
  status: 'paused',
  togglePlayPause: () => {},
});

export default VideoContext;
```

Both VideoClip component and PlayPauseButton component must have access to the Video Context. As in React app, data should be passed top-down, we need to leverage the local state of the common ancestor component in order to simultaneously propagate changes into the context and into the child components. In our case the common ancestor is App.js.

We'll add state to the App.js component by implementing **useState** Hook. The default value of the status must be the same as it's default value in the Video Context. And we’ll write the implementation of **togglePlayPause()** function:

**src/App.js**

```jsx
import React, { useState} from 'react';

...

function App() {
  const [status, setStatus] = useState('paused');
  const togglePlayPause = () => setStatus(status === 'playing' ? 'paused' : 'playing');
...
}

```

In order for any child, grandchild, great-grandchild, and so on to have access to Video Context, we must wrap the parent element into VideoContext.Provider component, which will be used to pass the status and **togglePlayPause()** function via a **value** prop.

**src/App.js**

```jsx
...
import VideoContext from './context/video.context';
...

return (
    <div className="App">
      <VideoContext.Provider
        value={{
          status,
          togglePlayPause,
        }}
      >
        <VideoClip />
        <Controls />
      </VideoContext.Provider>
    </div>
  );
...
```

To consume VideoContext we are going to use **useContext** Hook.

**src/components/play-pause-button.component.js**

```jsx
import React, { useContext } from 'react';
import VideoContext from '../context/video.context';
...

const PlayPauseButton = () => {
  const { status, togglePlayPause } = useContext(VideoContext);
  return (
    <button style={styles} onClick={togglePlayPause}>
      {status === 'playing' ? 'PAUSE' : 'PLAY'}
    </button>
  );
};

...
```

Thus by clicking on the button we are toggling playing and paused value of the status prop and also dynamically changing the title of the button. We can see it in the browser:

<video autoplay loop controls>
  <source src="/react-context/clip1.mp4" type="video/mp4">
</video>

But we still don’t control the playback of the video clip. Let’s fix this!

For that, we need to update VideoClip component. Once again for consuming VideoContext we’ll use **useContext** Hook. And to get the access to play() and pause() methods of a video element, we’ll implement [React Refs](https://reactjs.org/docs/refs-and-the-dom.html), which we’ll place inside the **useEffect** Hook.

**src/components/video-clip.component.js**

```jsx
import React, { useContext, useEffect, createRef } from 'react';
import VideoContext from '../context/video.context';

...

const VideoClip = () => {
  const { status } = useContext(VideoContext);

  const vidRef = createRef();

  useEffect(() => {
    if (status === 'playing') {
      vidRef.current.play();
    } else if (status === 'paused') {
      vidRef.current.pause();
    }
  });

  return (
    <video style={videoStyles} controls ref={vidRef}>
      <source
        src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
        type="video/mp4"
      />
    </video>
  );
};
...
```

Result is in the browser window:

<video autoplay controls>
  <source src="/react-context/clip2.mp4" type="video/mp4">
</video>

We can control video playback in VideoClip component from a nested PlayPauseButton component, which is not directly related.

The complete source code of this part of the tutorial is available in [this GitHub repo](https://github.com/KaterinaLupacheva/react-context/tree/master/with-hooks).

## Part II: React Context API with class components

Now let’s solve the same problem, but refactoring all the components from functional to class components.

But first I’m going to change video.context.js file and implement there another approach in developing context. I’ll create VideoContextProvider class inside video.context.js, in which all the logic concerning the current status of the video playback and the way to update it will be included.

**src/context/video.context.js**

```jsx
import React, { createContext } from 'react';

//create context with an empty object
const VideoContext = createContext({});

export class VideoContextProvider extends React.Component {
  //helper function to play or pause the video clip using React Refs
  playVideo = () => {
    let { status } = this.state;
    if (status === 'playing') {
      this.state.vidRef.current.play();
    } else if (status === 'paused') {
      this.state.vidRef.current.pause();
    }
  };

  //function for toggling the video status and it's playback
  togglePlayPause = () => {
    this.setState(
      state => ({
        ...state,
        status: state.status === 'playing' ? 'paused' : 'playing',
      }),
      () => this.playVideo()
    );
  };

  //initial context value
  state = {
    status: 'paused',
    togglePlayPause: this.togglePlayPause,
    vidRef: React.createRef(),
  };

  render() {
    return (
        //passing the state object as a value prop to all children
        <VideoContext.Provider value={this.state}>
            {this.props.children}
        </VideoContext.Provider>;
    )}
}

export default VideoContext;
```

Now we can import VideoContextProvider component into App.js and wrap it around child components.

**src/App.js**

```jsx
import React from 'react';
import VideoClip from './components/video-clip.component';
import Controls from './components/controls.component';
import { VideoContextProvider } from './context/video.context';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <VideoContextProvider>
          <VideoClip />
          <Controls />
        </VideoContextProvider>
      </div>
    );
  }
}

export default App;
```

I won’t change Controls component as it has no logic in it, so for the purpose of this tutorial it doesn’t matter if it’s a functional or a class component.

I’ll show how to consume the Video Context in PlayPauseButton class component and VideoClip class component in two different ways.

Let’s start with the PlayPauseButton component. Here we’ll use the **Consumer component**, which comes with every context object and subscribes to its changes. The Consumer component requires a function as a child, which receives the current context value and returns a React node. Using this approach, we can access the context value only in **render()** method.

**src/components/play-pause-button.component.js**

```jsx
import React from 'react';
import VideoContext from '../context/video.context';

...

class PlayPauseButton extends React.Component {
  render() {
    return (
      <VideoContext.Consumer>
        {({ status, togglePlayPause }) => (
          <button style={styles} onClick={togglePlayPause}>
            {status === 'playing' ? 'PAUSE' : 'PLAY'}
          </button>
        )}
      </VideoContext.Consumer>
    );
  }
}

export default PlayPauseButton;
```

In the VideoClip class component, we’ll consume the VideoContext value using the **contextType** property of the class, which can be assigned to the context object. Thus we can reference context value in any of the lifecycle methods. But you can only subscribe to a single context using this approach.

**src/components/video-clip.component.js**

```jsx
import React from 'react';
import VideoContext from '../context/video.context';

...

class VideoClip extends React.Component {
  render() {
    return (
      <video style={videoStyles} controls ref={this.context.vidRef}>
        <source
          src="https://react-context.s3.eu-central-1.amazonaws.com/Pouring+Of+Milk.mp4"
          type="video/mp4"
        />
      </video>
    );
  }
}

VideoClip.contextType = VideoContext;

export default VideoClip;
```

As we moved all the logic for playing and pausing the video, in VideoClip component we just need to use the vidRef prop fo the Video Context.

The app works the same, as when using only functional components and Hooks.

<video autoplay controls>
  <source src="/react-context/clip2.mp4" type="video/mp4">
</video>

The complete source code of this part of the tutorial is available in [this GitHub repo](https://github.com/KaterinaLupacheva/react-context/tree/master/with-classes).

## Conclusion

So, to use Context API in the app you need to follow the next steps:

- create context - React.createContext()
- provide context - YourContext.Provider
- consume context - YourContext.Consumer, or for a functional component useContext(YourContext), or for a class component Class.contextType = YourContext.

And that’s it!

The complete source code of the tutorial is available in [this GitHub repo](https://github.com/KaterinaLupacheva/react-context).
