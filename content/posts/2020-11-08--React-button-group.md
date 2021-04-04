---
title: "React: How to create a custom Button Group component in 5 minutes"
date: "2020-11-08"
template: "post"
draft: false
slug: "react-button-group"
category: "Tutorial"
tags:
  - "React"
  - "component"
description: "How to create a custom Button Group component in 5 minutes from scratch with selection (active button) functionality using React.js."
socialImage: "/media/react-button-group.png"
---

![react-button-group](/media/react-button-group.png)

Buttons are used in 99.9% of web apps. Also very often developers need to add a group of buttons into an app. A Button group component combines several related buttons.

Let's try to build this widely used component with the selection (active button) functionality.

## Render Button group component in the app

Create a new file for the Button group component.

*ButtonGroup.js*

```jsx
import React from "react";

const ButtonGroup = () => {
  return (
    <>
      <button>One</button>
      <button>Two</button>
      <button>Three</button>
    </>
  );
};

export default ButtonGroup;
```

Then render it from inside of the main app entry point:

*App.js*

```jsx
import React from "react";
import "./App.css";
import ButtonGroup from "./ButtonGroup";

const App = () => {
  return (
    <div className="App">
      <ButtonGroup />
    </div>
  );
};

export default App;
```

That's how it looks so far.

![button-group-demo](/posts/button-group/demo1.JPG)

## Dynamically add buttons

Now refactor the code so buttons wouldn't be so hard-coded.

*ButtonGroup.js*

```jsx
const ButtonGroup = ({ buttons }) => {
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel}>
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
```

*App.js*

```jsx
const App = () => {
  return (
    <div className="App">
      <ButtonGroup buttons={["One", "Two", "Three"]} />
    </div>
  );
};
```

So here we:

- created an array of strings with buttons labels
- passed in it as a prop to a ButtonGroup component
- used the [map method](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) to loop through an array and render buttons

## Active button

Usually when a user clicks on a button in a Button group:

1. This button should be somehow highlighted, e.g. its style should differ from other buttons.
2. Something should happen, like render some content, go to another page, etc.

First of all, we need to keep track of an index of an active button. For this, we are going to use *useState* hook. The initial value of the *clickedId* variable is set to *-1*, so at the first render, all buttons are not selected. But when a button is clicked, its index is stored in the state.

*ButtonGroup.js*

```jsx{1,4,8}
import React, { useState } from "react";

const ButtonGroup = ({ buttons }) => {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button key={i} name={buttonLabel} onClick={() => setClickedId(i)}>
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
```

To **highlight an active button** create a CSS class (actually two classes: for a basic button and a selected button).

*button-group.css*

```css
.customButton {
    width: 150px;
    height: 50px;
    letter-spacing: 0.5px;
    background-color: #E0314B;
    color: white;
    font-size: 32px;
    border: 1.5px solid #E0314B;
    border-radius: 5px;
    cursor: pointer;
    }
  
.active{
    background-color: rgb(25, 26, 24);
    border: 1.5px solid rgb(25, 26, 24);
    }
```

Then define a button's className whether this button is selected or not.

*ButtonGroup.js*

```jsx{2,13}
import React, { useState } from "react";
import "./button-group.css";

const ButtonGroup = ({ buttons }) => {
  const [clickedId, setClickedId] = useState(-1);
  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={() => setClickedId(i)}
          className={i === clickedId ? "customButton active" : "customButton"}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};
```

And the "doSomethingAfterClick()" function only left do add. We will pass this function as a prop to the ButtonGroup component (child) and do what we need to do after a click in App.js file (parent).

*ButtonGroup.js*

```jsx
import React, { useState } from "react";
import "./button-group.css";

const ButtonGroup = ({ buttons, doSomethingAfterClick }) => {
  const [clickedId, setClickedId] = useState(-1);

  const handleClick = (event, id) => {
    setClickedId(id);
    doSomethingAfterClick(event);
  };

  return (
    <>
      {buttons.map((buttonLabel, i) => (
        <button
          key={i}
          name={buttonLabel}
          onClick={(event) => handleClick(event, i)}
          className={i === clickedId ? "customButton active" : "customButton"}
        >
          {buttonLabel}
        </button>
      ))}
    </>
  );
};

export default ButtonGroup;
```

*App.js*

```jsx
import React from "react";
import "./App.css";
import ButtonGroup from "./ButtonGroup";

const App = () => {
  const printButtonLabel = (event) => {
    console.log(event.target.name);
    //do some stuff here
  };
  return (
    <div className="App">
      <ButtonGroup
        buttons={["One", "Two", "Three"]}
        doSomethingAfterClick={printButtonLabel}
      />
    </div>
  );
};

export default App;
```

For this tutorial purpose, after a button is clicked we just print its label in the console. But of course, in a real-life application, you make an API request, update content, and so on.

Final demo:

![final-demo](/posts/button-group/final-demo.gif)

## Conclusion

This ButtonGroup custom React component with additional features, like orientation (vertical or horizontal) and custom styling, is available as an [NPM package](https://www.npmjs.com/package/@ramonak/react-button-group).
