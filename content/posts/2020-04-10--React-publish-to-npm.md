---
title: "How to publish a custom React component to NPM using Create React Library"
date: "2020-04-10"
template: "post"
draft: false
slug: "react-publish-to-npm"
category: "Tutorial"
tags:
  - "React"
  - "NPM"
description: "How to create a custom React component and publish it to NPM using create-react-library."
socialImage: "/media/react-to-npm.png"
---

![react-to-npm](/media/react-to-npm.png)

After developing projects with React.js for some time, I’ve noticed that some of my own custom components I use in different projects. Up until now, I’ve used “good ol’ copy-paste method” to share these components between projects. But now I think I’m old enough to publish my own components to [npm](https://www.npmjs.com/) and then import them into my projects.

So, after browsing the internet for a couple of hours and trying to publish my React component “the hard way” (with manual webpack and babel configuration and so on), I’ve found a great tool -
[create-react-library](https://github.com/transitive-bullshit/create-react-library) - CLI for easily creating reusable react libraries. With the help of this package, I’ve published my custom React component fast and painless.

### Prerequisites

I assume that if you are going to make your npm package, you already have installed node and npm. If not, you can download and install it from [here](https://nodejs.org/en/).

Also, you need an npm account. If you don’t have it, please sign up [here](https://www.npmjs.com/signup).

Let’s start creating our npm module!

First of all, you need to come up with the name of your package and make sure that it’s available. Go to https://www.npmjs.com/ and check it through the search bar. 

Open your terminal, go to the directory, where you are going to create your package  and enter the following command:

```bash
npx create-react-library <name of your package>
```

I’m going to publish my custom [Progress Bar React component](https://ramonak.io/posts/react-progress-bar). So I enter the command:

```bash
npx create-react-library react-pg-bar
```

You will be prompted to ask a few questions about your package. Here are my answers:

![answers](/posts/npm-publish/crl-answers.JPG)

As a package name, I’ve entered *@ramonak/react-progress-bar*. This is so-called the [scoped package](https://docs.npmjs.com/using-npm/scope.html). By adding *@<your_username>* you can group your packages and also use any package name that might be already taken.

After create-react-library finishes creating the skeleton of our module, we have the following project structure:

![project-structure](/posts/npm-publish/project-structure.JPG)

This project contains *ExampleComponent* in the *src* folder and its example showcase in the *example* folder. But the main beauty of it is that all necessary configuration for publishing to NPM is already done for you.

As recommended by create-react-library docs, it’s better to open two terminal windows (or tabs). In the first one, run rollup to watch your src/ module and automatically recompile it into dist/ whenever you make changes.

```bash
cd <your_folder_name> && npm start
```  

In the second one, run the example/ create-react-app that's linked to the local version of your module.

```bash
cd <your_folder_name>
cd example && npm start
```

That’s how the Sample component looks like:

![example-component](/posts/npm-publish/example-component.JPG)

The folder, where we are going to add code of our component is *src*. I’m going to replace the code of the Sample component in *index.js* file on the code of my Progress Bar component.

```jsx
import React from "react";

const ProgressBar = props => {
  const { bgcolor, completed } = props;

  const containerStyles = {
    height: 20,
    width: "100%",
    backgroundColor: "#e0e0de",
    borderRadius: 50,
    margin: 50
  };

  const fillerStyles = {
    height: "100%",
    width: `${completed}%`,
    backgroundColor: bgcolor,
    transition: "width 1s ease-in-out",
    borderRadius: "inherit",
    textAlign: "right"
  };

  const labelStyles = {
    padding: 5,
    color: "white",
    fontWeight: "bold"
  };

  return (
    <div style={containerStyles}>
      <div style={fillerStyles}>
        <span style={labelStyles}>{`${completed}%`}</span>
      </div>
    </div>
  );
};

export default ProgressBar;
```

As I don’t use a separate css module for styles, I can delete *styles.module.css* file. Of course, it depends on the component which files you need to use. Just remember to keep the entry point of your component (where you are exporting your module) in the *src/index.js* file. 

Next, we have to test that our component is working. For that, we go to the *example/src/App.js* and replace the code there on the code of the app which will demonstrate your component. This is the code of my demo app:

```jsx
import React, { useState, useEffect } from "react";

import ProgressBar from "@ramonak/react-progress-bar";
import "@ramonak/react-progress-bar/dist/index.css";

const App = () => {
  const [completed, setCompleted] = useState(0);

  useEffect(() => {
    setInterval(() => setCompleted(Math.floor(Math.random() * 100) + 1), 2000);
  }, []);

  return (
    <div className="App">
      <ProgressBar bgcolor={"#6a1b9a"} completed={completed} />
    </div>
  );
};

export default App;
```

Notice, that create-react-app automatically creates an import of your package (just don’t forget to change the name of the imported component) and it’s styles (as I don’t have a separate file for styles I can delete this import). So you don’t have to manually create links to your local package to test it.

Open the browser and see the demo app:

![animated-demo](/posts/progress-bar/animated-demo.gif)

If you are not going to create a public and just use the package by yourself, you can skip the following part and go straight to [Publishing](#publishing)

But if the package is public, meaning other developers can use it, then there are some other things we should take care of before publishing.

One of the most important criteria of the usability of a public package is its **documentation**. So edit *README.md* file at the root of the project. By default, there is a minimum required information added: how to install and use your package.  Feel free to add there whatever you think should be there. There are tons of published npm packages, so the array of readme templates is quite big.

Also, don’t forget to push the code to the GitHub repo which you provided while running *npx create-react-library*.

And it’s cool to have a demo page where you showcase your component. The simplest way to do this is by publishing your app from *example/App.js* to GitHub pages simply by running

```bash
npm run deploy
```

and the create-react-library will do all the work.

## Publishing

Well, finally, let’s publish our component to npm. Just run

```bash
npm publish
```  

If you are publishing a scoped package, but want it to have a public access, run the command

```bash
npm publish --access=public
```

And that’s it! If everything went as planned, you’ll get an email notification that your component was successfully published to npm.

## Conclusion

As you can see, publishing your package to npm is really simple when using a great tool like create-react-library.

*The complete source code of the @ramonak/react-progress-bar component is in [this GitHub repo](https://github.com/KaterinaLupacheva/react-progress-bar). Published npm package is [here](https://www.npmjs.com/package/@ramonak/react-progress-bar).*
