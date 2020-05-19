---
title: "How to develop a custom Google Analytics Dashboard using Google Analytics Reporting API v4 and React.js"
date: "2020-05-19"
template: "post"
draft: false
slug: "react-google-analytics-dashboard"
category: "Tutorial"
tags:
  - "React"
  - "Google API"
description: "The blog post about how to enable Google Analytics Reporting API in Google developers console, create OAuth 2.0 client ID and develop a custom Google Analytics Dashboard using React.js."
socialImage: "/media/react-ga.png"
---

![react-ga-image](/media/react-ga.png)

[Google Analytics](https://analytics.google.com/analytics/web/) is a great tool. You can use it for measuring a website performance by a huge amount of metrics. But what if you need to build a custom app where you can see just those metrics that you or your customer want to measure? And this app should have a unique design (Google Analytics default UI, well, is not very impressive).

Let’s try to solve this problem using React.js and Google Analytics Reporting API.

## Prerequisites

- Google Analytics account with an existing web site or app setup
- Basic knowledge of React.js

We’ll be using the official Google Analytics tutorial - [Javascript quickstart for web applications](https://developers.google.com/analytics/devguides/reporting/core/v4/quickstart/web-js), but the Javascript part will be refactored to React.js code.

## Part 1: Enable the API

For that go to [this link](https://console.developers.google.com/flows/enableapi?apiid=analyticsreporting.googleapis.com&credential=client_key) to Google Developers console.

![console1](/posts/react-ga/console1.JPG)

We can enable Google Analytics Reporting API in a new project or in an existing project. As we are developing an app from scratch, let’s chose the option “Create a project”. Simply press the “Continue” button.

Thus Google Analytics Reporting API is enabled, but to use it we need to get the right credentials.

![console2](/posts/react-ga/console2.JPG)

Click “Go to credentials” button. Now we need to define what credentials do we need.

![console3](/posts/react-ga/console3.JPG)

For that, we have to answer 3 questions about which API are we using, where will we be calling the API from (Web browser (Javascript)) and what data will we be accessing (User data).

Press “What credentials do I need?” button.

Next, we see the modal window with the information that we have to set up OAuth consent screen, so the user can see who (meaning which application) is requesting access to their data and decide whether allow or not to get their data.

![oauth-consent](/posts/react-ga/oauth-consent1.JPG)

Press “Set up consent screen”. In the next window choose External User Type and press “Create”.

![oauth-consent](/posts/react-ga/oauth-consent2.JPG)

On the next page, it is sufficient just to fill the Application name and Support email (filled automatically). All other fields are optional and, for development purposes, we can leave them empty. Press “Save” button.

The last thing we have to do in the Google Developers Console is to get an OAuth 2.0 Client ID.

![create-credentials](/posts/react-ga/create-credentials.png)

Navigate to “Credentials” menu on the left bar, then press “Create credentials”. In the dropdown menu select “OAuth client ID”.

![create-oauth-id](/posts/react-ga/create-oauth-id.JPG)

Select *Web application* in the Application type field, and then enter *http://localhost:3000* in the Authorized JavaScript origins field. Also, you can enter the name of the app (Web client 1 by default). Press “Save”.

The data with your Client ID and Client Secret appears. We don’t need to save it in some safe place as we always can see the credentials in the developers’ console.

Finally, we are done with enabling Analytics Reporting API and getting OAuth Client ID. Now it’s time to write some code.

## Part 2: Setup React App

Start with the basic Create React App project. In the console run

```bash
npx create-react-app react-google-analytics
```

Open generated project in your text editor of choice and delete all demo code in the App.js file.

**App.js**

```jsx
import React from "react";
import "./App.css";

function App() {
  return <div className="App"></div>;
}

export default App;
```

Then we should add the script which will load Google JavaScript API client and Sign-in library. For that place the following script tag inside the head tag of the *public/index.html* file.

```html
<script src="https://apis.google.com/js/client:platform.js"></script>
```

Next, we’ll add several util functions for initialization of OAuth client and sign in. Create utils.js file in src folder and add the first function there which will initialize GoogleAuth object.

**src/utils.js**

```jsx
const initAuth = () => {
  return window.gapi.auth2.init({
    client_id: "YOUR_CLIENT_ID", //paste your client ID here
    scope: "https://www.googleapis.com/auth/analytics.readonly",
  });
};
```
*[Docs reference](https://developers.google.com/identity/sign-in/web/reference#gapiauth2initparams
)*

Remember the client ID which we created in the first part? Now it’s time to copy it from Google Developers Console and paste in our React app.

The next util function will check if the user signed in or not and we’ll use it later in App.js, that’s why we should export it.

```jsx
export const checkSignedIn = () => {
  return new Promise((resolve, reject) => {
    initAuth() //calls the previous function
      .then(() => {
        const auth = window.gapi.auth2.getAuthInstance(); //returns the GoogleAuth object
        resolve(auth.isSignedIn.get()); //returns whether the current user is currently signed in
      })
      .catch((error) => {
        reject(error);
      });
  });
};
```
*[Docs reference](https://developers.google.com/identity/sign-in/web/reference#gapiauth2getauthinstance
)*

Also, we need to add the Google Sign-in button.

```jsx
export const renderButton = () => {
  window.gapi.signin2.render("signin-button", {
    scope: "profile email",
    width: 240,
    height: 50,
    longtitle: true,
    theme: "dark",
    onsuccess: onSuccess,
    onfailure: onFailure,
  });
};

const onSuccess = (googleUser) => {
  console.log("Logged in as: " + googleUser.getBasicProfile().getName());
};

const onFailure = (error) => {
  console.error(error);
};
```
*[Docs reference](https://developers.google.com/identity/sign-in/web/reference#gapisignin2renderid_options
)*

Functions *onSuccess* and *onFailure* are just the callback functions to call when a user successfully signs in or sign-in fails respectively.

That’s it for the util functions. Now let’s code the main logic of the app: on page load, check if a user is signed in. If not - render the sign-in button, if yes - request Google Analytics Report (for example, daily user’s visits for the last 10 days) and show it in the browser.

**App.js**

```jsx
import React, { useState, useEffect } from "react";
import "./App.css";
import { renderButton, checkSignedIn } from "./utils";

function App() {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const updateSignin = (signedIn) => { //(3)
    setIsSignedIn(signedIn);
    if (!signedIn) {
      renderButton();
    }
  };

  const init = () => { //(2)
    checkSignedIn()
      .then((signedIn) => {
        updateSignin(signedIn);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    window.gapi.load("auth2", init); //(1)
  });

  return (
    <div className="App">
      {!isSignedIn ? (
        <div id="signin-button"></div>
      ) : (
        <div>Coming soon...</div>
      )}
    </div>
  );
}

export default App;
```

1. When the App component mounts, load the Auth2 library ([Docs reference](https://developers.google.com/identity/sign-in/web/reference#auth_setup))
2. Initialize auth2 client (runs inside checkSignedIn util function) and call checkSignedIn function. 
3. Update value of  *isSignedIn* state variable with the result of checkSignedIn function. If is not signed in, render sign-in button.

Let’s run the app and see what we’ve developed so far. In the console run

```bash
npm start
```

As we are not signed in yet, we see Google Sign-in button:

![signin-button](/posts/react-ga/signin-button.JPG)

If we press the button, we'll see Google Sign in dialog window. Chose the account with which you'd like to sign and then there is a scary alert window:

![app-not-verified](/posts/react-ga/app-not-verified.JPG)

This basically means that we request a sensitive or restricted OAuth scope, but hasn't gone through the Google verification process. More details on the matter you can find [here](https://support.google.com/cloud/answer/7454865?hl=en).

If you trust yourself as a developer (ha-ha), then click on the **Advanced** link and then **Go to *name of your app***.

![app-not-verified](/posts/react-ga/go-to-unverified-app.JPG)

Next, grant your app permission to view your Google Analytics data and you'll see your Google Analytics Report! Well, soon. Very soon.

![coming-soon](/posts/react-ga/coming-soon.JPG)

The last thing that we need to implement is to create a React component which will fetch the necessary data from Google Analytics Reporting API.

But first, you need to get the view ID. It’s a Google Analytics custom property that is created in the Google Analytics account. You can obtain the view ID in two ways:

1. Using [Account Explorer Service](https://ga-dev-tools.appspot.com/account-explorer/)
2. In your **Google Analytics account**:

    - navigate to **Admin** section on the left side menu
![analytics1](/posts/react-ga/analytics1.png)

    - in the View column click on **View Settings**
![analytics2](/posts/react-ga/analytics2.png)

    - copy the **View ID**
![analytics3](/posts/react-ga/analytics3.png)

Then create a new file in the src folder - *report.js*.

**src/report.js**

```jsx
import React, { useState, useEffect } from "react";

const Report = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const queryReport = () => {//(1)
      window.gapi.client
        .request({
          path: "/v4/reports:batchGet",
          root: "https://analyticsreporting.googleapis.com/",
          method: "POST",
          body: {
            reportRequests: [
              {
                viewId: "YOUR_VIEW_ID", //enter your view ID here
                dateRanges: [
                  {
                    startDate: "10daysAgo",
                    endDate: "today",
                  },
                ],
                metrics: [
                  {
                    expression: "ga:users",
                  },
                ],
                dimensions: [
                  {
                    name: "ga:date",
                  },
                ],
              },
            ],
          },
        })
        .then(displayResults, console.error.bind(console));
    };

    const displayResults = (response) => {//(2)
      const queryResult = response.result.reports[0].data.rows;
      const result = queryResult.map((row) => {
        const dateSting = row.dimensions[0];
        const formattedDate = `${dateSting.substring(0, 4)}
        -${dateSting.substring(4, 6)}-${dateSting.substring(6, 8)}`;
        return {
          date: formattedDate,
          visits: row.metrics[0].values[0],
        };
      });
      setData(result);
    };

    queryReport();
  }, []);

  return data.map((row) => (
    <div key={row.date}>{`${row.date}: ${row.visits} visits`}</div>//(3)
  ));
};

export default Report;
```

1. After the component renders, query the Google Analytics Reporting API. In this example, we are querying for daily visits for the last 10 days. The all available query parameters you can find in the [Docs](https://developers.google.com/analytics/devguides/reporting/core/v4/rest/v4/reports/batchGet).
2. Transform the response data into an array of objects with two keys each: date and number of visits. Then set the value of the data state variable to the formatted result.
3. Render the data array.

Import this component into App.js and replace the “Coming soon” div element with it.

**App.js**

```jsx
...
import Report from './report';
...

return (
    <div className="App">
      {!isSignedIn ? (
        <div id="signin-button"></div>
      ) : (
        <Report />
      )}
    </div>
  );
  ...
```

By running the app for my [personal site](https://ramonak.io/), I get the following result:

![query-result](/posts/react-ga/query-result.JPG)

## Conclusion

In this blog post, I’ve described the process of enabling the Google Analytics Reporting API and how to query it from React App. Using this approach I’ve built a **Custom Google Analytics Dashboard** with different reports. The results are shown in charts, graphs and tables.

![users](/posts/react-ga/users.JPG)

![pages](/posts/react-ga/pages.JPG)

![devices](/posts/react-ga/browsers-devices.JPG)

The source code of the **Custom Google Analytics Dashboard**, as well as the code fragments, which are used in this blog post,  are available in [this GitHub repo](https://github.com/KaterinaLupacheva/react-google-analytics-dashboard).
