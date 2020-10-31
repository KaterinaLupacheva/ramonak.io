---
title: "How to write and use custom hooks in React.js"
date: "2020-11-03"
template: "post"
draft: false
slug: "react-custom-hooks"
category: "Tutorial"
tags:
  - "React"
description: "Tutorial about how to write custom hooks in React.js. In this tutorial, we will write hooks for smooth scrolling, document title update, and browser URL change."
socialImage: "/media/react-custom-hooks.png"
---

![react-custom-hooks-image](/media/react-custom-hooks.png)

## What is a Hook in react

Hooks as a new feature was introduced in React 16.8 back in 1Q of 2019 and since then became one of the most valuable features in React.

**Hook** is a piece of functionality containing its state or other hooks that can be reused in multiple places across the app (or even across many apps if a hook is published as an NPM package).

There are several [rules of hooks](https://reactjs.org/docs/hooks-rules.html), most important of them are:

- only call hooks at the top level (not inside loops, conditions, or nested functions)
- call hooks from React function components (you actually can’t use hooks inside a class component)
- and name your custom hook starting with "use". Only this way React will be able to automatically check for a rules violation.

By default, React comes with several **build-in hooks**. The most widely used of them are:

- useState
- useEffect
- useContext

You can find a full list [here](https://reactjs.org/docs/hooks-reference.html).

## Writing a custom hook

### 1. useSmoothScroll custom hook

As we established this earlier, basically hook is a function that uses other hooks. Let's try to write our custom hook!

Assume we'd like to scroll to some element by clicking on the button somewhere in our app. And for it to look nice we want the scroll to happen smoothly.

*useSmoothScroll.js*

```jsx
import { useRef } from "react";

const useSmoothScroll = () => {
  const ref = useRef();
  const smoothScroll = () => ref.current.scrollIntoView({ behavior: "smooth" });

  return [ref, smoothScroll];
};

export default useSmoothScroll;
```

In this custom hook, we are using *[useRef](https://reactjs.org/docs/hooks-reference.html#useref) hook* - a default React's hook that returns a mutable ref object. This ref object will be used as a way to access the DOM by passing it to a ref HTML attribute.

*smoothScroll* is a function that incapsulates [Element.scrollIntoView() method](https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView).

And finally, the custom hook returns an array that contains a ref object and a function for smooth scrolling to this object (similar to useState React's hook).

Now we can use this custom hook in any component in the app. For example,

```jsx
import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  const [refToScroll, smoothScroll] = useSmoothScroll();

  return (
    <div className="App">
      <button onClick={smoothScroll}>Scroll</button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        I wanna be seen
      </div>
    </div>
  );
}

export default App;
```

Here is this app in action:

![scroll-demo](https://i.ibb.co/7bVGwNR/use-Smooth-Scroll.gif)

This hook can be used multiple times across the app. And the important thing is that **two components using the same hook do not share the state**.

For instance, we can use the useSmoothScroll hook for marking another element to which we'd like to scroll and do so by clicking on another button.

*useSmoothScroll.js*

```jsx{7,11,17}
import React from "react";
import "./App.css";
import useSmoothScroll from "./hooks/useSmoothScroll";

function App() {
  const [refToScroll, smoothScroll] = useSmoothScroll();
  const [topRef, smoothScrollToTop] = useSmoothScroll();

  return (
    <div className="App">
      <button ref={topRef} onClick={smoothScroll}>
        Scroll
      </button>
      <div style={{ marginTop: "150vh" }} ref={refToScroll}>
        I wanna be seen
      </div>
      <button onClick={smoothScrollToTop}>Go UP</button>
    </div>
  );
}

export default App;
```

Demo:

![use-smooth-scroll](https://i.ibb.co/dbM8TVN/use-Smooth-Scroll1.gif)

### 2. useDocTitle custom hook

A custom hook can use not only one other hook but as many as you wish. Now let's write a custom hook that contains two other hooks.

*useDocTitle.js*

```jsx
import { useState, useEffect } from "react";

const useDocTitle = (title) => {
  const [docTitle, setDocTitle] = useState(title);

  useEffect(() => {
    document.title = docTitle;
  }, [docTitle]);

  return [docTitle, setDocTitle];
};

export default useDocTitle;
```

This custom hook updates the current *[title of the document](https://developer.mozilla.org/en-US/docs/Web/API/Document/title)* (the name of the current browser's tab).

In this hook two other hooks are used:

1. useState - for saving and updating the state of the *docTitle* variable. *Title* prop is passed as an initial state value.
2. useEffect - for setting the document.title property to a new value on every change of the docTitle variable.

And this hook can be used in the following way:

```jsx
import React from "react";
import "./App.css";
import useDocTitle from "./hooks/useDocTitle";

function App() {
  const [_, setDocTitle] = useDocTitle("Start page");

  return (
    <div className="App">
      <button onClick={() => setDocTitle("Updated title")}>
        Change doc title
      </button>
    </div>
  );
}

export default App;
```

The hook in action:

![useDocTitle-demo](https://i.ibb.co/9WPSRL7/use-Doc-Title.gif)