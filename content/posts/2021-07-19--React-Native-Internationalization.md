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
      <Button title="Press" onPress={() => Alert.alert("HELLO")} />
      <StatusBar style="auto" />
    </View>
  );
}

//styles omitted
```

Now we are going to add support of multiple languages in our app.

## 1. Install and configure react-i18next library

First of all we need to add [react-i18next](https://react.i18next.com/) to our project by running

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

```tsx{6}
//App.tsx

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "./i18n.config"; // <-- this line added

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello!</Text>
      <Button title="Press" onPress={() => Alert.alert("HELLO")} />
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

After adding all translations, the Google sheet should look like this:

![google sheet translations](/posts/react-native-i18n/3.png)

Now let's move to the fun - to write a script that:

- will read translations from the Google Sheet
- will write them straight into the translations folder of the project, each language translations into their respective JSON file, and properly formatted.

For reading data from the Google Sheet, we are going to use the [google-spreadsheet](https://www.npmjs.com/package/google-spreadsheet) library. Let's add it to our project:

```bash
npm i google-spreadsheet
```

The next thing we need to handle is v4 Google sheet API authentication. You can read about it in the google-sheet library [docs](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication). I'm going to use the [Service account](https://theoephraim.github.io/node-google-spreadsheet/#/getting-started/authentication?id=service-account) option for this blog post.

Once you followed the steps from the docs, you should have a JSON file with the following keys:

```json
{
  "type": "service_account",
  "project_id": "XXXXXXXXXXXXXXX",
  "private_key_id": "XXXXXXXXXXXXXXX",
  "private_key": "XXXXXXXXXXXXXXX",
  "client_email": "service-account-google-sheet-a@XXXXXXXXXXXX.iam.gserviceaccount.com",
  "client_id": "XXXXXXXXXXXXXXX",
  "auth_uri": "https://accounts.google.com/o/oauth2/auth",
  "token_uri": "https://oauth2.googleapis.com/token",
  "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
  "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/service-account-google-sheet-XXXXXXXXXXXXX.iam.gserviceaccount.com"
}
```

Create another folder in your React Native project (I'm going to call it _utils_) and put this JSON file there. **Don't forget to add it to .gitignore!**

Now initialize a Google sheet instance in the React Native project.

```ts
//utils/script.js

const { GoogleSpreadsheet } = require("google-spreadsheet");
const secret = require("./secret.json");

// Initialize the sheet
const doc = new GoogleSpreadsheet("<YOUR_GOOGLE_SHEET_ID");

// Initialize Auth
const init = async () => {
  await doc.useServiceAccountAuth({
    client_email: secret.client_email, //don't forget to share the Google sheet with your service account using your client_email value
    private_key: secret.private_key,
  });
};
```

You can find the spreadsheet ID in a Google Sheets URL:

```bash
https://docs.google.com/spreadsheets/d/spreadsheetId/edit#gid=0
```

My spreadsheet ID looks like this:

```
1hDB6qlijcU5iovtSAisKqkcXhdVboFd1lg__maKwvDI
```

Now write a function that reads data from our Google sheet with translations.

```js
//utils/script.js
...

const read = async () => {
  await doc.loadInfo(); // loads document properties and worksheets
  const sheet = doc.sheetsByTitle.Sheet1; //get the sheet by title, I left the default title name. If you changed it, then you should use the name of your sheet
  await sheet.loadHeaderRow(); //Loads the header row (first row) of the sheet
  const colTitles = sheet.headerValues; //array of strings from cell values in the first row
  const rows = await sheet.getRows({ limit: sheet.rowCount }); //fetch rows from the sheet (limited to row count)

  let result = {};
  //map rows values and create an object with keys as columns titles starting from the second column (languages names) and values as an object with key value pairs, where the key is a key of translation, and value is a translation in a respective language
  rows.map((row) => {
    colTitles.slice(1).forEach((title) => {
      result[title] = result[title] || [];
      const key = row[colTitles[0]];
      result = {
        ...result,
        [title]: {
          ...result[title],
          [key]: row[title] !== "" ? row[title] : undefined,
        },
      };
    });
  });

  return result;
};
```

If you run this script

```bash
cd utils && node script.js
```

and print the result object (add console.log(result) before return), you should get the following result:

```js
{
  en: { HELLO: 'Hello', PRESS: 'Press' },
  fr: { HELLO: 'Bonjour', PRESS: 'Presse' },
  es: { HELLO: 'Hola', PRESS: 'Prensa' },
  de: { HELLO: 'Hallo', PRESS: 'Drücken Sie' },
  be: { HELLO: 'Прывітанне', PRESS: 'Прэс' }
}
```

Next, we need to write this result object in the _translations_ folder, each file per key.

```js
//utils/script.js
...
const fs = require("fs");

...

const write = (data) => {
  Object.keys(data).forEach((key) => {
    fs.writeFile(
      `../translations/${key}.json`,
      JSON.stringify(data[key], null, 2),
      (err) => {
        if (err) {
          console.error(err);
        }
      }
    );
  });
};
```

So here:

- we get the result object for the read function as a param
- loop through the keys of this object
- write values of a key of the result object (e.g., translations) into a JSON file using Node.js file system module (fs) formatted with JSON.stringify() method.

And finally, chain all the above async methods:

```js
...

init()
  .then(() => read())
  .then((data) => write(data))
  .catch((err) => console.log("ERROR!!!!", err));
```

Now if you run the script again:

```bash
node script.js
```

all the translations should be written in the _translations_ folder as separate JSON files for each language.

![translations folder](/posts/react-native-i18n/4.png)

To be able to use these _translations_ in our React Native project, we need to:

1. export these JSON files from the tranlsations folder

```js
//utils/index.js
export { default as be } from "./be.json";
export { default as en } from "./en.json";
export { default as de } from "./de.json";
export { default as es } from "./es.json";
export { default as fr } from "./fr.json";
```

2. update _i18n.config.ts_ file:

```ts
//i18n.config.ts
...

import { en, be, fr, de, es } from "./translations";

const resources = {
  en: {
    translation: en,
  },
  de: {
    translation: de,
  },
  es: {
    translation: es,
  },
  be: {
    translation: be,
  },
  fr: {
    translation: fr,
  },
};

...

```

Now we can translate the content of the app with the help of useTranslation hook provided by react-i18next library.

```ts{3,9,10}
//App.tsx
...
import { useTranslation } from "react-i18next";

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{`${t("HELLO")}!`}</Text>
      <Button title={t("PRESS")} onPress={() => Alert.alert(t("HELLO"))} />
      <StatusBar style="auto" />
    </View>
  );
}

//styles omitted
```

To switch between supported languages in the app, build Language Picker component:

```ts
//LanguagePicker.tsx

import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import { Modal, View, Text, Pressable, StyleSheet } from "react-native";

const LanguagePicker = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const { i18n } = useTranslation(); //i18n instance

  //array with all supported languages
  const languages = [
    { name: "de", label: "Deutsch" },
    { name: "en", label: "English" },
    { name: "fr", label: "Français" },
    { name: "be", label: "Беларуская" },
    { name: "es", label: "Español" },
  ];

  const LanguageItem = ({ name, label }: { name: string; label: string }) => (
    <Pressable
      style={styles.button}
      onPress={() => {
        i18n.changeLanguage(name); //changes the app language
        setModalVisible(!modalVisible);
      }}
    >
      <Text style={styles.textStyle}>{label}</Text>
    </Pressable>
  );

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {languages.map((lang) => (
              <LanguageItem {...lang} key={lang.name} />
            ))}
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}
      >
        //displays the current app language
        <Text style={styles.textStyle}>{i18n.language}</Text>
      </Pressable>
    </View>
  );
};

export default LanguagePicker;

//styles omitted
```

Add the Language Picker component in the App.tsx:

```ts{8,14}
//App.tsx

import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import "./i18n.config";
import { useTranslation } from "react-i18next";
import LanguagePicker from "./LanguagePicker";

export default function App() {
  const { t } = useTranslation();
  return (
    <View style={styles.container}>
      <LanguagePicker />
      <Text style={styles.text}>{`${t("HELLO")}!`}</Text>
      <Button title={t("PRESS")} onPress={() => Alert.alert(t("HELLO"))} />
      <StatusBar style="auto" />
    </View>
  );
}
```

Let's check how it works now:

![demo1](/posts/react-native-i18n/lang.gif)

It works as expected, but wouldn't it be nice to store a user's language choice, so after a user opens the app his/her previously selected language is used by default?

## 3. Custom plugin to store chosen language in the local storage
