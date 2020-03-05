---
title: "React: how to dynamically sort an array of objects using the dropdown (with React Hooks)"
date: "2020-03-05"
template: "post"
draft: false
slug: "react-how-to-sort-array-of-objects-with-dropdown-and-hooks"
category: "Tutorial"
tags:
  - "React"
  - "Javascript"
description: "How to dynamically sort an array of objects using dropdown and React Hooks and render it in React"
socialImage: ""
---

![react-sort-array]()

Assume we have the following problem:

- sort an array of objects
- do it dynamically based on different properties values
- render this in browser using react.js

OK, let’s get down to business!

The sample array of objects:

```jsx
const bands = [
  {
    name: 'Nightwish',
    albums: 9,
    members: 6,
    formed_in: 1996,
  },
  {
    name: 'Metallica',
    albums: 10,
    members: 4,
    formed_in: 1981,
  },
  {
    name: 'Nirvana',
    albums: 3,
    members: 3,
    formed_in: 1987,
  },
];
```

For the sake of this tutorial I’m not going to do any fancy components, so let’s render this array in plain *div’s*.

```jsx
function App() {
  return (
    <div className="App">
      {bands.map(band => (
        <div key={band.id} style={{ margin: '30px' }}>
          <div>{`Band: ${band.name}`}</div>
          <div>{`Albums: ${band.albums}`}</div>
          <div>{`Members: ${band.members}`}</div>
          <div>{`Year of founding: ${band.formed_in}`}</div>
        </div>
      ))}
    </div>
  );
}
```

Check the view in browser:

![bands](/posts/react-sort-dropdown/bands.JPG)

Looks good!

Now let’s add the *select* element with options of sortable properties.

```jsx
<select>
        <option value="albums">Albums</option>
        <option value="members">Members</option>
        <option value="formed">Formed in</option>
</select>
```
