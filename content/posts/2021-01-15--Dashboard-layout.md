---
title: "Dashboard layout with React.js and Material-UI"
date: "2021-01-15"
template: "post"
draft: false
slug: "dashboard-layout-react-material-ui"
category: "Tutorial"
tags:
  - "React"
  - "Material UI"
  - "Dashboard"
description: "How to create a classic Dashboard layout that includes a header, footer, menu drawer (sidebar) with toggle and content using React.js and Material UI"
socialImage: "/media/dashboard-layout.png"
---

![dashboard-layout](/media/dashboard-layout.png)

## What are we going to build?

In this tutorial, we are going to build the "classic" dashboard layout, which consists of:

- header
- sidebar (or menu drawer) with toggle
- content area
- and footer

![demo](/posts/dashboard-layout/demo1.gif)

In [the first part](#part-I-pure-react.js), we'll develop this layout using "pure" React.js. In the second part - with the use of [Material UI library](https://material-ui.com/).

### Part I - Pure React.js

First, let's create an HTML carcass of the layout.

```jsx
function App() {
  return (
    <div className="App">
      <div className="header">Header</div>
      <div className="container">
        <aside className="drawer">Drawer</aside>
        <main className="main">Content</main>
      </div>
      <div className="footer">Footer</div>
    </div>
  );
}
```

Here we have the app container (App class name), which includes:

- the header
- the container with drawer and the main content area
- the footer

Now it's time to add some styling.

```css
.App {
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: #000133;
}

.header,
.footer {
  background: #00022e;
  height: 50px;
  color: #fc86aa;
}

.container {
  display: flex;
  flex: 1;
}

.drawer {
  background: #d8dcd6;
  width: 240px;
}

.main {
  flex: 1;
  background: #f7f5f5;
}
```

The main aspects of the CSS code are:

- minimum height of the app container equals window height (100 vh)
- the header and the footer have fixed height (50 px)
- the container takes all available window size (flex: 1) besides parts that were taken by the elements with the fixed height (the header and the footer)
- the drawer has a fixed width (240 px)
- the main (or content) area also takes all available space (flex: 1)

The layout looks like this so far:

![layout-1](/posts/dashboard-layout/layout1.JPG)

The only thing is left to add is the ability to toggle the drawer. To achieve this we need to:

- keep track of the drawer state: is it opened or closed
- depending on its state change the width of the drawer (0px - when closed, 240 px - when opened)
- toggle menu icon in the header section

To store and update the drawer's we are going to use the _useState_ hook. The initial state of the drawer is closed.

```jsx
const [isOpened, setIsOpened] = useState(false);
```

If the drawer is opened, then the _opened_ class will be added to the drawer element. By default, the _drawer_ class will be used in any case.

```jsx
<aside className={`${isOpened ? "opened" : ""} drawer`}>Drawer</aside>
```

As the initial drawer state is closed, so initial drawer width should be 0. Plus let's add the CSS transition property for smooth animation.

```css
.drawer {
  background: #d8dcd6;
  width: 0px;
  transition: width 0.7s;
}

.opened {
  width: 240px;
}
```

To be able to toggle the drawer we need to add the menu icon to the header bar. By clicking on this icon the drawer should become visible and the icon should be changed from menu icon to arrow icon.

As we're going to use the Material-UI library in the second part of this blog post, I'm using the Menu and the ChevronLeftIcon from "@material-ui/icons" package. But you are free to use whatever icons you prefer.

```jsx
import MenuIcon from "@material-ui/icons/Menu";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";

...
 <div className="header">
  <div className="icon" onClick={() => setIsOpened(!isOpened)}>
    {isOpened ? <ChevronLeftIcon /> : <MenuIcon />}
  </div>
  <div className="header-title">Header</div>
</div>
...
```

For the header and the icon to look nice, let's update the styles:

```css
.header,
.footer {
  display: flex;
  background: #00022e;
  height: 50px;
  align-items: center;
  justify-content: center;
  color: #fc86aa;
}

.icon {
  padding: 10px;
}

.icon:hover {
  cursor: pointer;
}

.header-title {
  margin: auto;
}
```

And the result is:

![demo](/posts/dashboard-layout/demo2.gif)
