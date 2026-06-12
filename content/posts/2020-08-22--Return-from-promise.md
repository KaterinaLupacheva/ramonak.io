---
title: "Javascript: How to access the return value of a Promise object"
date: "2020-08-22"
template: "post"
draft: false
slug: "javascript-return-promise"
category: "Tutorial"
tags:
  - "Javascript"
description: "How to return a value from a Javascript's Promise object and then use it later in a code."
socialImage: "/media/javascript-promise.png"
---

![javascript-promise-image](/media/javascript-promise.png)

## Intro (completely off-topic)

It's has been almost 3 months since my last blog post. There are reasons for that.

First, despite all precautions, I got sick with coronavirus (COVID-19) in the second half of June 2020. For two weeks it was total hell. Very bad well-being, I could only lie in bed and hope that it will go away soon. After that, it was a recovery for the next 2-3 weeks. Now I'm finally got back to normal life and even resumed my fitness training. So, coronavirus is no joke. Please, stay safe.

Second, there are lots of things happening right now in my home country - Belarus. Belarussians are fighting against dictatorship. Our (ex)-president lost last elections which were held on August 9th, 2020, but he continues to stay in power using brutal police and army forces against peaceful people and to threaten to anybody who disagrees with him. But we keep on fighting and to protest every day. I do take all these events very close to heart and hope to wake up one day in a free, democratic, and prosperous Belarus.

Now back to the topic.

## What is a Promise in Javascript

A [Promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) is an object representing the eventual completion or failure of an asynchronous operation.

A Promise may be in one of the following states:

- pending
- fulfilled
- rejected

One of the most widely used examples of asynchronous operations in Javascript is a [Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). The fetch() method returns a Promise.

Assume that we fetch some data from a backend API. For this blog post, I'll use [JSONPlaceholder](https://jsonplaceholder.typicode.com/) - a fake REST API. We will fetch a user's data with the id = 1:

```js
fetch("https://jsonplaceholder.typicode.com/users/1")
```

Let's see how we can access returned data.

## 1 - .then() chaining

It is the most simple and the most obvious way.

```js
fetch("https://jsonplaceholder.typicode.com/users/1") //1
  .then((response) => response.json()) //2
  .then((user) => {
    console.log(user.address); //3
  });
```

Here we (1) fetch data from the API, (2) transform it into JSON object and then (3) print user's address value to the console.

The result is:

```txt
{
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: { lat: '-37.3159', lng: '81.1496' }
}
```

## 2 - Use returned value later in a code

But what if we'd like to use the returned value somewhere later in code?

If we try to do it like this (wrong way!):

```js
const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

console.log(address);
```

We'll get

```txt
Promise { <pending> }
```

It's happening because the Javascript code always executes synchronously, so the console.log() function starts immediately after the fetch() request, not waiting until it is resolved. In the moment when console.log() function starting to run, a Promise that should be returned from a fetch() request is in a pending status.

That said we can access the returned value of a Promise object in another .then() callback:

```js
const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = () => {
  address.then((a) => {
    console.log(a);
  });
};

printAddress();
```

OR using async / await syntax:

```js
const address = fetch("https://jsonplaceholder.typicode.com/users/1")
  .then((response) => response.json())
  .then((user) => {
    return user.address;
  });

const printAddress = async () => {
  const a = await address;
  console.log(a);
};

printAddress();
```

In both ways, we'll get:

```txt
{
  street: 'Kulas Light',
  suite: 'Apt. 556',
  city: 'Gwenborough',
  zipcode: '92998-3874',
  geo: { lat: '-37.3159', lng: '81.1496' }
}
```

## Conclusion

A Promise object is widely used in Javascript async programming. And it's sometimes confusing for developers how to use it properly. In this blog post, I've attempted to describe a use case when a developer needs to use a returned value from a Promise object somewhere later in code.
