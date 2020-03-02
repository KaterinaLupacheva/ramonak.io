---
title: "Javascript: how to merge multiple objects with sum of values"
date: "2020-03-02"
template: "post"
draft: false
slug: "javascript-how-to-merge-multiple-objects"
category: "Tutorial"
tags:
  - "Javascript"
description: "Short blog post about how to merge multiple objects with the sum of property's values in Javascript."
socialImage: ""
---

Assume we have an array of objects - baskets with fruits.

```javascript
const fruits = [
  {
    apples: 4,
    pears: 6,
    oranges: 2,
  },
  {
    bananas: 2,
    oranges: 5,
  },
  {
    pears: 8,
    apples: 3,
    bananas: 10,
  },
  {},
  {
    pears: 7,
    apples: 5,
  },
  {
    mangos: 1,
  },
];
```

There are different types of fruits with different quantities in each basket (one basket even empty).

How can we merge all these objects (baskets) into one and count total sum of each fruit?

Let’s create helper method.

```javascript
const mergeFruits = data => {
  const result = {}; //(1)

  data.forEach(basket => { //(2)
    for (let [key, value] of Object.entries(basket)) { //(3)
      if (result[key]) { //(4)
        result[key] += value; //(5)
      } else { //(6)
        result[key] = value;
      }
    }
  });
  return result; //(7)
};
```

1. Result object, empty.
2. Loop through an array of objects using [Array.prototype.forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) method.
3. Iterate over each object's (basket's) key-value pairs using [Object.entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/entries) method.
4. Check if the result object has a property with the name of the key.
5. If yes (true), add to the previous value of the property the value of the key, e.g. if there is a property “apples” with value “4” in the result object, then add more apples from the next basket.
6. If no (false), then it’s a new property (a new fruit) for a result object, so create this property and assign the corresponding value to it.
7. Return merged object

If we run the code and print the result into console:

```javascript
const mergedObject = mergeFruits(fruits);

console.log(mergedObject);
```

we’ll get the following output:

```javascript
{ apples: 12, pears: 21, oranges: 7, bananas: 12, mangos: 1 }
```

All objects (baskets) in the array merged into one with the sum of each property’s (fruit) value.
