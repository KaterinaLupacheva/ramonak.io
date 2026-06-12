---
title: "Tabata - Fitness App: my first personal project"
date: "2020-02-19"
template: "post"
draft: false
slug: "tabata-fitness-app-first-project"
category: "Story"
tags:
  - "Project"
  - "Development"
description: "This blog post is a story about development of my first personal project: Tabata - Fitness App."
socialImage: "/posts/tabata/tabata-landing.JPG"
---

![tabata-app](/posts/tabata/tabata-landing.JPG)

This blog post is going to be about the process of developing my first significant personal project - [Tabata App](https://tabata.ramonak.io/).

The idea of this app was born from personal needs. As a freelancer, I work mostly from home. Thus the movement is minimal. So to feel better and to be energized I need to work out.

Throughout the years of amateur fitness, I’ve tried a lot of types of workouts.

DVDs, youtube videos, apps…

I was bored pretty fast. I picked one workout and after two weeks of doing it, I was sick of the same routine and repetitive exercises. I knew all the encouragements and jokes of the fitness instructor. Then switched to another workout. And after two weeks it was all the same. Groundhog day.

As for the apps, most of them are difficult to use. You need to register, enter a ton of information (weight, height, age and so on), millions of settings (most of them are completely useless), and besides, most of the fitness apps are not free. Some of them are even without a trial period. How am I supposed to know if the app is a good fit for me without paying for it first???

And by the way, as I’ve started doing fitness using old good DVDs (yeah, it was a very long time ago), I’ve used to look at the instructor on a big screen (not less than laptop screen). Mobile apps… I don’t know… Small screen on which it’s almost impossible to see in detail how to do exercises properly. You need to manage somehow to place the phone vertically… It’s just not convenient for me.

So, my thinking was “I need a fitness web app, with bare minimum of settings and options, which I can use every day and not be bored”. And started to develop the fitness app.

I’m a big fan of efficiency. And I’m not a fitness expert. But I’ve been practicing a home fitness for about the past 10 years (with some timeouts). I’ve read a lot of articles about the most efficient way of workout. And came to the conclusion that the most suitable and the most effective workout for me is High Intensity Interval Training (HIIT). Specifically, the Tabata training: you do every exercise for 20 secs and then rest for 10 secs. That’s why the Tabata timer with voice countdown was the first feature I’ve developed in the app.

![tabata-timer](/posts/tabata/tabata-timer.JPG)

The “not be bored” part I’ve decided to solve by creating [Random Workouts!](https://tabata.ramonak.io/parameters) The app randomly picks the exercises from the list of all exercises, that I’ve added to the database.

![tabata-start](/posts/tabata/tabata1.JPG)

As for workout options, you can choose:

- duration of the workout’s circuit: 4, 8 or 12 minutes
- number of circuits (or sets): 1, 2 or 4
- focus muscle group: whole body, lower body, upper body, core or cardio training.

![tabata-parameters](/posts/tabata/tabata2.JPG)

My usual setup is:

- 8 mins duration of one circuit
- 2 circuits
- whole body workout

And also I choose the option to add exercises with dumbbells, just for the extra load.

![tabata-my-setup](/posts/tabata/tabata-my-setup.JPG)

So, in 5 seconds I’m ready to workout! A 16-minute high-intensity workout is enough for me.

Also, I’ve implemented the algorithm by which there will be at least 20% of cardio exercises in every random workout. I’ve done it to keep the heart rate up which is very important for an effective workout.  

If you are not willing to completely put your fitness fate into the app’s arms, you can [choose the exercises](https://tabata.ramonak.io/create-workout) for workout by yourself from the list of all exercises. Then just pick the number of circuits and you are ready to go!

![tabata-create-workout](/posts/tabata/tabata4.JPG)

Well, the next problem was with the visuals of the exercises. Images? Not very informative, hard to show the exercise in the dynamics. GIFS? Doesn’t look good. So I’ve decided to add the videos! Not to worry about copyrights and other possible legal issues, I was left with the only option - to shoot videos of myself doing exercises.

I have zero experience in video shooting and editing, but had to learn quickly. And moreover, I’m not a fitness instructor or some kind of model with the perfect body. I’m just an ordinary human being who likes to do fitness at home.

So, I moved all the shyness and self-consciousness away and stood in front of the camera trying to do the best I could. My husband acted as a cameraman of the iPhone camera. In one take we shoot for about 15 exercises.

Then I had to edit them all. I cut the 1-2 repetitions of the exercises and looped the playback. The results were uploaded to AWS S3 and corresponding links were provided in the app.

![tabata-workout](/posts/tabata/tabata3.JPG)

The last thing I did for the first release was implementing the [Progressive Web App](/posts/what-is-progressive-web-app) feature. Thus the app is fully functioning on mobile devices. When you open the app in the browser for the first time, just add it’s icon on the home screen.

On Android there is a notification to install the app.

![tabata-andr](/posts/tabata/tabata-andr.jpg)

On Apple’s devices it’s a little bit harder: first, you need to press the share button, and then press Add to home screen.

![tabata-ios](/posts/tabata/tabata-ios.png)

So after about 2 months of hard work, the first version of the Tabata App was ready!!!

Couple words about the tech part. I’ve developed the app using the following main technologies:

- front-end (Javascript): [React.js](https://reactjs.org/), [Redux](https://redux.js.org/), [Sass](https://sass-lang.com/)
- back-end (Java): [Spring Boot](https://spring.io/projects/spring-boot), [Spring Data](https://spring.io/projects/spring-data), [Spring Security](https://spring.io/projects/spring-security), [PostgreSQL](https://www.postgresql.org/) database
- admin panel: [Vaadin](https://vaadin.com/) framework (Java)

I’m planning to write some technical blog posts about new things that I’ve learned and about some problems that I’ve solved while developing the app.  

I still continue to work on the app. I want to add more exercises to the database, meaning I need to shoot and edit more videos. And there are still some minor bugs needed to be fixed, and some improvements I want to make. So it’s the work in progress and I’m happy to work on it.

But the main goal is reached: now I have a simple app with a very simple interface which is extremely easy to use! I do my workouts 3-4 times a week using the Tabata App and I couldn’t be happier!

Well, I could be happier… If this app could be useful for other home fitness lovers. I really hope for that!
