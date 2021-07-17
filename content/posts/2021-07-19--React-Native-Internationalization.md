---
title: "React Native Internationalization with i18next"
date: "2021-07-19"
template: "post"
draft: false
slug: "react-native-internationalization"
category: "Tutorial"
tags:
  - "React Native"
  - "Internationalization"
description: "How to add internationalization functionality to a React Native app using i18next library."
socialImage: "/media/rn-i18n.png"
---

![rn-i18n](/media/rn-i18n.png)

## Content

- general config
- get translations from a google sheet
- custom plugin to store selected language in async storage

Assume we have a basic React Native project. For this blog post, I'm going to use [expo](https://docs.expo.io/) project, but the steps will be the same for a project that was initialized with React Native CLI.

The app has just one screen that renders the text "Hello!" and a button with the title "Click".

![init screen](/posts/react-native-i18n/1.png)

The source code:

```tsx
//App.tsx

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Button title="Press" onPress={() => console.log("Pressed")} />
      <StatusBar style="auto" />
    </View>
  );
}

//styles omitted
```

Now we are going to add support of multiple languages in our app.

## 1. Install and configure react-i18next library

First of all we need to add react-i18next to our project by running

```bash
npm i react-i18next i18next
```

This will intstall i18next framework and its React wrapper.

Next we need to configure it by creating a new file, let's say _i18n.config.ts_ (or any other name as you like), at the top level of the project:

```ts
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

//empty for now
const resources = {};

i18n.use(initReactI18next).init({
  resources,
  //language to use if translations in user language are not available
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react!!
  },
});

export default i18n;
```

_A list of all config options is available in the [docs](https://www.i18next.com/overview/configuration-options)._

Then just import this file in the entry point of your project: App.tsx for expo projects or index.ts/index.js for React Native CLI projects.

```tsx
//App.tsx

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "./i18n.config"; // <-- this line added

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Button title="Press" onPress={() => console.log("Pressed")} />
      <StatusBar style="auto" />
    </View>
  );
}
```

## 2. Add translations (Google Sheet + automated script)

All translations we are going to add into a separate folder - **translations** - with a separate JSON file for each supported language.

```txt
//translations folder structure

├── translations/
│   ├── be.json
│   ├── de.json
│   ├── en.json
│   ├── es.json
│   ├── fr.json
```

Usually, the app is being translated by other team members (if your team is international), or by hired interpreters, or by special translation tools. One of the most convenient ways would be to store all translations in a **Google Sheet** and then automatically generate JSON files and upload them to the project source code - translations folder.

Create a Google Sheet with the following structure:

![google sheet structure](/posts/react-native-i18n/2.png)

Column A will have translations keys (HELLO, PRESS, etc). These values will be used as keys in JSON files with translations. Columns B-F will contain translations themselves, the first row - supported languages names (en - English, es - Spanish, fr - French, and so on).

After adding all translations the Google sheet should look like this:

![google sheet translations](/posts/react-native-i18n/3.png)

Now let's move to the fun - to write a script that:

- will read translations from the Google Sheet
- will write them straight into the translations folder of the project, each language translations into their respective JSON file, and properly formatted.
