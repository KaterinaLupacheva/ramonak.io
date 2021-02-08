---
title: "React: enable Google Analytics after a user grants consent"
date: "2021-02-08"
template: "post"
draft: false
slug: "react-google-analytics-consent"
category: "Tutorial"
tags:
  - "React"
  - "Google Analytics"
description: "How to conditionally enable Google Analytics tracker depending on a user's prior consent."
socialImage: "/media/react-ga-consent.png"
---

![dashboard-layout](/media/react-ga-consent.png)

## Introduction

While working recently on one of the web apps, one of the customer requirements was to track user's activity on the website is only after and if a user gave his/her consent to do so.

This blog post is about my approach to this problem.

## Add Google Analytics to React project

The simpliest way to add Google Analytics to any React project is to use [React-GA](https://github.com/react-ga/react-ga) library. Add it by running:

```bash
npm install react-ga
```

For the code not to look messy, I prefer to create separate util files. Create _ga-utils.ts_ file and add there helper method for Google Analytics initialization:

```ts
import * as ReactGA from "react-ga";

export const initGA = (id: string) => {
  if (process.env.NODE_ENV === "production") {
    ReactGA.initialize(id);
  }
};
```

This method takes a Google Analytics tracking ID as a param and makes an initialization only in a production mode (there is no point in enabling GA in a development mode).

## Add Cookie Consent

Google Analytics use HTTP Cookies to "remember" what a user has done on previous pages/interactions with the website. You can read more about it [here](https://developers.google.com/analytics/devguides/collection/analyticsjs/cookie-usage).

Under laws like the GDPR and ePrivacy (Cookie Law), users must provide their consent before cookies can be deployed or installed on their computer.

There is a library that can be used to prompt a user to grant or decline a cookie consent - [React cookie consent](https://github.com/Mastermindzh/react-cookie-consent).

Install it by running:

```bash
npm install react-cookie-consent
```

Then add **CookieConsent** component in the _App.tsx_ file:

```js
import CookieConsent from "react-cookie-consent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CookieConsent enableDeclineButton>
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default App;
```

If you run the app, you'll see a Cookie Consent bar at the bottom of the page with two buttons: "I understand" and "I decline".

![demo](/posts/react-ga-consent/image1.JPG)

The next thing is to handle actions when a user declines or accepts cookies usage.

If a user grants permission by clicking on the "I understand" button, then Google Analytics should be initialized.

```js
...
const handleAcceptCookie = () => {
  if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
    initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
  }
};
...

<CookieConsent
  enableDeclineButton
  onAccept={handleAcceptCookie}
>
  This website uses cookies to enhance the user experience.
</CookieConsent>
...
```

It is a good practice to hide such values as a Google Analytics tracking ID in _.env_ file.

```txt
REACT_APP_GOOGLE_ANALYTICS_ID=UA-XXXXXXXXX
```

Actually, if a user declines cookie usage by clicking on "I decline" button, then nothing should happen. The app should run just without Google Analytics initialization. But we can delete Google Analytics cookies from a browser just in case if they somehow were written there before. This step is totally optional.

```js
import CookieConsent, { Cookies } from "react-cookie-consent";

...

const handleDeclineCookie = () => {
  //remove google analytics cookies
  Cookies.remove("_ga");
  Cookies.remove("_gat");
  Cookies.remove("_gid");
};

...

<CookieConsent
  enableDeclineButton
  onAccept={handleAcceptCookie}
  onDecline={handleDeclineCookie}
>
  This website uses cookies to enhance the user experience.
</CookieConsent>

...

```

By default, react-cookie-consent library writes a CookieConsent cookie value "true" or "false" based on a user action (accept or decline respectively). You can check this in developer tools on *Application* tab.

![cookie](/posts/react-ga-consent/image2.JPG)

The Cookie Consent bar won't appear on the next app visit from the same browser. So we have to handle Google Analytics initialization on every app run (or website visit) if a user granted prior consent. This can be accomplished with _useEffect_ hook and _getConsentValue()_ function of react-cookie-consent library:

```js
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";

...

useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);
...

```

The final *App.ts* file is:

```ts
import { useEffect } from "react";
import CookieConsent, {
  getCookieConsentValue,
  Cookies,
} from "react-cookie-consent";
import { initGA } from "./ga-utils";
import "./App.css";

function App() {
  const handleAcceptCookie = () => {
    if (process.env.REACT_APP_GOOGLE_ANALYTICS_ID) {
      initGA(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);
    }
  };

  const handleDeclineCookie = () => {
    //remove google analytics cookies
    Cookies.remove("_ga");
    Cookies.remove("_gat");
    Cookies.remove("_gid");
  };

  useEffect(() => {
    const isConsent = getCookieConsentValue();
    if (isConsent === "true") {
      handleAcceptCookie();
    }
  }, []);
  
  return (
    <div className="App">
      <h1>Hello World!</h1>
      <CookieConsent
        enableDeclineButton
        onAccept={handleAcceptCookie}
        onDecline={handleDeclineCookie}
      >
        This website uses cookies to enhance the user experience.
      </CookieConsent>
    </div>
  );
}

export default App;
```

## Conclusion

This is my take on handling Google Analytics initialization only after a user grants permission in a React app.

The source code is [here](https://github.com/KaterinaLupacheva/tutorials/tree/master/react-ga-consent).
