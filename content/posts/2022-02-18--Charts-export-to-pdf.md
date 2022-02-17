---
title: "Export multiple charts to PDF with React and jsPDF"
date: "2022-02-17"
template: "post"
draft: false
slug: "highcharts-react-pdf"
category: "Tutorial"
tags:
  - "React"
  - "Highcharts"
  - "TypeScript"
description: "How to export multiple charts into multipage pdf document with React.js, Highcharts and jsPDF."
socialImage: "/media/charts-export-pdf.png"
---

![charts-export-pdf](/media/charts-export-pdf.png)

## Intro

It's pretty standard functionality for the dashboard (and not only) apps to export charts to PDF. Recently I needed to implement the following feature for one of the apps: a user should be able to export multiple charts into a multipage PDF document. Surprisingly, I spent a significant amount of time finding and developing a suitable solution. In this blog post, I'll describe how I solved this problem.

I'm going to use the following libraries:

- [Highcharts](https://www.highcharts.com/) and it's official [wrapper for React](https://github.com/highcharts/highcharts-react)
- [jsPDF](https://parall.ax/products/jspdf)
- [htmlToImage](https://www.npmjs.com/package/html-to-image)

## Highcharts

As we already have been using the [Highcharts](https://www.highcharts.com/) library on the project, I will use this library for chart rendering in this tutorial. But the following approach, I believe, is suitable for other most commonly used React chart libraries.

First, let's add `highcharts` and `highcharts-react-official` (it's an official [Highcharts wrapper for React](https://github.com/highcharts/highcharts-react)) dependencies:

```bash
npm install highcharts highcharts-react-official
```

Next, we need to render several charts that we are going to export to PDF later.

Create a Chart component that will render a Highchart that accepts different chart options.

```jsx
//Chart.tsx

import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

type ChartProps = {
  chartOptions: Highcharts.Options;
};

export default function Chart({ chartOptions }: ChartProps) {
  return (
    <div className="custom-chart">
      <HighchartsReact
        highcharts={Highcharts}
        options={chartOptions}
        containerProps={{ style: { height: "100%" } }}
      />
    </div>
  );
}
```

Note the class name of "custom-chart" of the wrapper div. We'll use it later.

And then to create a line chart, for example, we just need to pass options object for a line chart:

```ts
//options.ts
import Highcharts from "highcharts";

export const lineChartOptions: Highcharts.Options = {
  title: {
    text: "Chart 1",
  },
  series: [
    {
      type: "line",
      data: [1, 2, 3, 8, 4, 7],
    },
    {
      type: "line",
      data: [5, 7, 6, 9, 5, 4],
    },
  ],
};

//other chart options ommitted
```

Here we can add as many charts as we like:

```jsx
//App.tsx

import "./App.css";
import Chart from "./Chart";
import {
  barChartOptions,
  columnChartOptions,
  lineChartOptions,
} from "./options";

function App() {
  return (
    <div className="App">
      <Chart chartOptions={lineChartOptions} />
      <Chart chartOptions={barChartOptions} />
      <Chart chartOptions={columnChartOptions} />
      <div className="row">
        <Chart chartOptions={lineChartOptions} />
        <Chart chartOptions={columnChartOptions} />
      </div>
    </div>
  );
}

export default App;
```

That's what we've got so far:

![demo1](/posts/export-chart-pdf/demo1.gif)

## Export to PDF

There are numerous libraries that help with creating pdf docs. After investigating a couple of options, I've decided to use [jsPDF](https://parall.ax/products/jspdf) library.

Highcharts (the same as most chart libraries) are mainly SVG elements. And it's tricky to convert SVG to PDF. At least I couldn't find any simple out-of-the-box solution. I've tried different approaches and libraries (canvg, html2canva, svg2pdf.js are among them), but nothing worked for me. Here is what has worked for me.

Basically, the main steps are:

1. Initialize a new jsPDF instance
2. Get all charts as HTML Elements
3. Convert each HTML Element with chart into image (with [htmlToImage](https://www.npmjs.com/package/html-to-image) library)
4. Add converted chart image to the pdf doc with jsPDF's `addImage()` method
5. As we are adding multiple charts, create a new pdf page when needed
6. Download generated pdf doc using jspdf's `save()` method

Now let's implement all these. Install `jsPDF` and `htmlToImage` packages:

```bash
npm install jspdf html-to-image
```

I prefer to keep all business logic separate from UI logic. So, create a new `utils.ts` file where we are going to write all the export to pdf logic.

```ts
// utils.ts

export async function exportMultipleChartsToPdf() {
  const doc = new jsPDF("p", "px"); // (1)

  const elements = document.getElementsByClassName("custom-chart"); // (2)

  await creatPdf({ doc, elements }); // (3-5)

  doc.save(`charts.pdf`); // (6)
}
```

Here we initialize a new jspdf instance with portrait orientation ("p" parameter) and pixels ("px") as units of measure.

The essential thing in the above code is that the charts wrapper div class name should be unique for the app. It should be something more complex than just "custom-chart" in the production app.

Now let's implement steps 3-5.

To convert each chart HTML Element into image, we need to loop through the HTMLCollection of Elements and convert each element to image. Note that we need a base64-encoded data URL and it's very convenient that htmlToImage library does exactly that.

```ts
for (let i = 0; i < elements.length; i++) {
  const el = elements.item(i) as HTMLElement;
  const imgData = await htmlToImage.toPng(el);
}
```

That was step 3. Now we need to add each image data to a pdf document. Let's check the [docs](https://artskydj.github.io/jsPDF/docs/module-addImage.html) for jspdf's `addImage()` method. The `addImage()` method accepts 9 arguments:

1. **imageData** - base64 encoded DataUrl or Image-HTMLElement or Canvas-HTMLElement. We got this covered in the previous step.
2. **format** - format of file. It is "PNG" in our case.
3. **x** - x Coordinate (in units declared at the inception of PDF document) against the left edge of the page. Say it would be 10px.
4. **y** - y Coordinate (in units declared at the inception of PDF document) against the upper edge of the page. This one is a little bit trickier. We need to have a variable for keeping track of the used or already occupied pdf page space, e.g., start with the initial value of 20px, for example, and then increase it every time by the added image height.
5. **width** - width of the image (in pixels in our case)
6. **height** - height of the mage (again in pixels)
7. **alias** - alias of the image (if used multiple times). This is a very **important** prop when adding multiple images. Without using it will have a blank page in our specific case.
8. **compression**
9. **rotation**

We are not going to use 8th and 9th props.

For getting the width and height of a chart container, we'll use offsetWidth and offsetHeight props of the HTML Element class. Let's implement this.

```ts
let top = 20;

for (let i = 0; i < elements.length; i++) {
  const el = elements.item(i) as HTMLElement;
  const imgData = await htmlToImage.toPng(el);

  const elHeight = el.offsetHeight;
  const elWidth = el.offsetWidth;

  doc.addImage(imgData, "PNG", 10, top, elWidth, elHeight, `image${i}`);
  top += elHeight;
}
```

So far, so good, but what if the chart's width is greater than a pdf doc's page width? The chart will be cut at the right. To escape this issue, we should resize the chart's width and height proportionally (to keep the initial width / height ratio) in case the chart's width is greater than a page's width.

```ts
let top = 20;
const padding = 10;

for (let i = 0; i < elements.length; i++) {
  const el = elements.item(i) as HTMLElement;
  const imgData = await htmlToImage.toPng(el);

  let elHeight = el.offsetHeight;
  let elWidth = el.offsetWidth;

  const pageWidth = doc.internal.pageSize.getWidth();
  // if chart do not fit to the page width
  if (elWidth > pageWidth) {
    const ratio = pageWidth / elWidth;
    //resize chart width and heigth proportionally
    elHeight = elHeight * ratio - padding;
    elWidth = elWidth * ratio - padding;
  }

  doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
  top += elHeight;
}
```

And the last thing we need to take care of is to create a new pdf page every time there is no space to add a new chart to the current page.

```ts
...

const pageHeight = doc.internal.pageSize.getHeight();
//if chart do not fit to the page height
if (top + elHeight > pageHeight) {
  doc.addPage(); // add new page
  top = 20; // reset height counter
}

...

```

Thus the final implementation of `createPdf` function is:

```ts
async function creatPdf({
  doc,
  elements,
}: {
  doc: jsPDF;
  elements: HTMLCollectionOf<Element>;
}) {
  let top = 20;
  const padding = 10;

  for (let i = 0; i < elements.length; i++) {
    const el = elements.item(i) as HTMLElement;
    const imgData = await htmlToImage.toPng(el);

    let elHeight = el.offsetHeight;
    let elWidth = el.offsetWidth;

    const pageWidth = doc.internal.pageSize.getWidth();

    if (elWidth > pageWidth) {
      const ratio = pageWidth / elWidth;
      elHeight = elHeight * ratio - padding;
      elWidth = elWidth * ratio - padding;
    }

    const pageHeight = doc.internal.pageSize.getHeight();

    if (top + elHeight > pageHeight) {
      doc.addPage();
      top = 20;
    }

    doc.addImage(imgData, "PNG", padding, top, elWidth, elHeight, `image${i}`);
    top += elHeight;
  }
}
```

To test how it works, add a button by clicking on which the exportMultipleChartsToPdf function will run.

```jsx
//App.tsx

import "./App.css";
import Chart from "./Chart";
import {
  barChartOptions,
  columnChartOptions,
  lineChartOptions,
} from "./options";
import { exportMultipleChartsToPdf } from "./utils";

function App() {
  return (
    <div className="App">
      <button className="button" onClick={exportMultipleChartsToPdf}>
        Export to PDF
      </button>
      <Chart chartOptions={lineChartOptions} />
      <Chart chartOptions={barChartOptions} />
      <Chart chartOptions={columnChartOptions} />
      <div className="row">
        <Chart chartOptions={lineChartOptions} />
        <Chart chartOptions={columnChartOptions} />
      </div>
    </div>
  );
}

export default App;
```

And voilà, we exported multiple (6) charts as multipage (3 pages) pdf document!

## Conclusion

The complete code is available in this [GitHub repo](https://github.com/KaterinaLupacheva/tutorials/tree/master/export-charts-pdf).
