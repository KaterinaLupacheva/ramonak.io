---
title: "Render, update, and transform Excel spreadsheet data into an array of objects using React.js"
date: "2020-06-01"
template: "post"
draft: false
slug: "react-excel-render-update"
category: "Tutorial"
tags:
  - "React"
  - "Excel"
  - "NPM"
description: "@ramonak/react-excel library to render, update, and transform Excel spreadsheet data into an array of objects using React.js"
socialImage: "/media/react-excel.JPG"
---

![react-excel-image](/media/react-excel.JPG)

Nowadays it’s hard to find a company that doesn’t use MS Excel as an obvious go-to tool for data management. It’s quite simple and accessible software which definitely does a great job in some situations and when managed by a professional. But at the same time, the use of Excel has a lot of disadvantages compared to web tools.

That’s why more and more companies are willing to move out of Excel Hell and switch to modern web applications.

Recently on one of my freelance projects, I needed to develop a feature in the dashboard for a recruiter to be able to quickly upload data about available job positions from an Excel sheet into the app’s database. As I didn’t find any ready-made solution and think it might be an often time used feature, I decided to develop a library by myself and make it available for the community. So any feedback and suggestions are very welcome!

## Demo App

![demo](https://i.ibb.co/Qm3QPhb/react-excel-demo.gif)

## Installation

```bash
npm install --save @ramonak/react-excel
```

## Usage Example

```jsx
import { ReactExcel, readFile, generateObjects } from '@ramonak/react-excel';

const App = () => {
  const [initialData, setInitialData] = useState(undefined);
  const [currentSheet, setCurrentSheet] = useState({});

  const handleUpload = (event) => {
    const file = event.target.files[0];
    //read excel file
    readFile(file)
      .then((readedData) => setInitialData(readedData))
      .catch((error) => console.error(error));
  };

  const save = () => {
    const result = generateObjects(currentSheet);
    //save array of objects to backend
    fetch("/api/save", {
        method: 'POST',
        body: JSON.stringify(result)
    });
  };

  return (
    <>
      <input
        type='file'
        accept='.xlsx'
        onChange={handleUpload}
      />
      <ReactExcel
        initialData={initialData}
        onSheetUpdate={(currentSheet) => setCurrentSheet(currentSheet)}
        activeSheetClassName='active-sheet'
        reactExcelClassName='react-excel'
      />
      <button onClick={save}>
          Save to API
      </button>
    </>
  );
}
```

## Description

The library consists of 3 parts:

1. readFile function - reads excel file with the use of [SheetJS](https://github.com/sheetjs/sheetjs) library.
2. ReactExcel component - a custom React.js component for rendering and editing an excel sheet on the screen.
3. generateObjects function - generates an array of objects from excel sheet data using the following template:

excel sheet data:

| id | name | age |
|---|---|---|
|1| John | 25|
|2| Mary | 31 |
|3| Ann | 23 |

will be transformed into:

```bash
[
  {
    id: 1,
    name: "John",
    age: 25
  },
  {
    id: 2,
    name: "Mary",
    age: 31
  },
  {
    id: 3,
    name: "Ann",
    age: 23
  }
]
```

## Conclusion

*The complete source code of the @ramonak/react-excel library and the demo app is in [this GitHub repo](https://github.com/KaterinaLupacheva/react-excel). Published npm package is [here](https://www.npmjs.com/package/@ramonak/react-excel).*

Feel free to suggest any improvements, create issues, or make feature requests. Any feedback is very welcome!
