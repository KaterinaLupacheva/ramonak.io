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
socialImage: "/media/React-sort-with-dropdown.png"
---

![react-sort-array](/media/React-sort-with-dropdown.png)

Assume we have the following problem:

- sort an array of objects
- do it dynamically based on different properties values
- render this in browser using [react.js](https://reactjs.org/)

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

That’s fantastic, but absolutely nothing happens when we change the dropdown options.

![dropdown](/posts/react-sort-dropdown/dropdown.JPG)

To fix this problem we need to somehow connect the *select* element and the array which we want to sort and re-render sorted array values each time the different *select* option is chosen.

According to [React’s docs](https://reactjs.org/docs/react-component.html):

> By default, when your component’s state or props change, your component will re-render.

That means that we have to add state to our component. And I’m going to do it with the help of [React Hooks](https://reactjs.org/docs/hooks-overview.html).

Let’s define the state variable *data* and the method for its update *setData* using *useState* hook. 

```jsx
const [data, setData] = useState([]);
```

Hypothetically, when the state will be updated with the new data (sorted array), the component should re-render. To test it we need to define a function that will sort the bands array based on the selected option in the dropdown and call it every time the selected option changes.

```jsx
...
const sortArray = type => {
    const types = {
      albums: 'albums',
      members: 'members',
      formed: 'formed_in',
    };
    const sortProperty = types[type];
    const sorted = bands.sort((a, b) => b[sortProperty] - a[sortProperty]);
    console.log(sorted);
    setData(sorted);
  };

...
<select onChange={(e) => sortArray(e.target.value)}>
...
```

But when we run the code, it's not working properly.

![members-sort](/posts/react-sort-dropdown/members.JPG)

![albums-sort](/posts/react-sort-dropdown/albums.JPG)

Array is being sorted just fine, as it’s printed in the console, but the array data doesn’t re-render. It only renders when we change the sorted value for the first time.

The problem is in the following, as it’s stated in the [React docs](https://reactjs.org/docs/state-and-lifecycle.html#do-not-modify-state-directly):

> Do Not Modify State Directly

So, this line of code is wrong, as it modifies state (sorts the array, which is in the state) *in place*. And React “thinks” that *setData* is being called with the same array that it already had, therefore no re-render. *(Big “thank you” goes to [T.J. Crowder](https://stackoverflow.com/users/157247/t-j-crowder) who helped me to clarify this problem)*

```jsx
const sorted = bands.sort((a, b) => b[sortProperty] - a[sortProperty]);
```

The right way is first to do the copy of the bands array, sort it and then call *setData* with this array. So, just adding the spread operator to copy array should solve the problem.

```jsx
const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
```

Let’s try to run the code. Well, it kinda works, but the bands data doesn’t render on the start, just after the select option is changed.

The problem could be easily solved with the help of *useEffect* Hook.

1. Define another state variable for storing value of the sort property. By default, the bands array will be sorted by a number of albums.

```jsx
const [sortType, setSortType] = useState('albums');
```

2. Update the value of the *sortType* on select option change.

```jsx
<select onChange={(e) => setSortType(e.target.value)}>
```

3. Add *useEffect* Hook, which will call *sortArray* function after the component renders and then every time on update of the *sortType* value. We achieve this by passing the second argument (*sortType*) to *useEffect* that is the array of values that the effect depends on.

```jsx
useEffect(() => {
    const sortArray = type => {
      const types = {
        albums: 'albums',
        members: 'members',
        formed: 'formed_in',
      };
      const sortProperty = types[type];
      const sorted = [...bands].sort((a, b) => b[sortProperty] - a[sortProperty]);
      setData(sorted);
    };

    sortArray(sortType);
  }, [sortType]);
```

Now the code works as expected!

*The complete source code is available in [this GitHub repository](https://github.com/KaterinaLupacheva/react-sorting-with-dropdown)*
