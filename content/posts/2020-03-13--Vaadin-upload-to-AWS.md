---
title: "How to upload a file to Amazon S3 in Java (using Vaadin framework)"
date: "2020-03-13"
template: "post"
draft: false
slug: "vaadin-upload-file-to-amazon-s3-java"
category: "Tutorial"
tags:
  - "Vaadin"
  - "Java"
  - "AWS"
description: "How to upload file to Amazon S3 in Java, but with UI build with Vaadin framework"
socialImage: "/media/vaadin-upload-to-aws.png"
---

![vaadin-upload-to-aws](/media/vaadin-upload-to-aws.png)

Nowadays many applications give access to users for uploading images, avatars, audio or video files, etc. Most commonly developers choose to store this data on a different cloud services.

While working on one of my personal projects - [Tabata - Fitness App](https://tabata.ramonak.io/), I’ve developed an administrative tool for managing the exercises data in the database. I’ve done it using a sweet combination of [Spring Boot](https://spring.io/projects/spring-boot) and [Vaadin framework](https://vaadin.com/). That’s the final result:

![admin-panel](/posts/Vaadin-AWS/adminka-view.JPG)

To upload the video of exercises directly to AWS S3 without the use of AWS console, but with my own administrative panel, I’ve developed a custom component based on [Vaadin’s official upload component](https://vaadin.com/components/vaadin-upload).

![upload_demo](/posts/Vaadin-AWS/upload_supermans_demo.gif)

Here how I’ve done it.

## 1. Create AWS account

You can create it [here](http://aws.amazon.com/)

## 2. Create S3 bucket

In the Services menu in the Storage section find S3:

![s3](/posts/Vaadin-AWS/s3.jpg)

Press **Create bucket** button. In the appeared dialog window enter your bucket name, chose the closest to you (or your potential visitors) region and press **Create**.

![create-bucket](/posts/Vaadin-AWS/create-bucket.JPG)

## 3. Create IAM user

For security reasons, we’ll create a new IAM user (which will be our future app) and give permissions only for the app to have access to the created bucket.

In the Services menu chose IAM and then Users under the Access Management section. Press **Add user**.

![add-user](/posts/Vaadin-AWS/add-user.JPG)

Enter username and check **Programmatic access** in the Access type section.

![prog-access](/posts/Vaadin-AWS/prog-access.JPG)

Press **Next: Permissions**. Then click **Attach existing policies directly** and **Create policy**.

![create-policy](/posts/Vaadin-AWS/create-policy.JPG)

Chose JSON tab, then copy and paste a JSON object from the [official AWS docs](https://docs.aws.amazon.com/IAM/latest/UserGuide/reference_policies_examples_s3_rw-bucket.html). Don’t forget to change text placeholder in the example policy with your own bucket name.

![json-policy](/posts/Vaadin-AWS/json-policy.JPG)

Press **Review policy**. Enter the name of the policy, description (optional) and press **Create policy**.

Go back to **Add user** tab in the browser, refresh the page and find in the list of policies our created policy.

![add-policy](/posts/Vaadin-AWS/add-policy.JPG)

Press **Next: Tags**, **Next: Review** and finally **Create user**. Now you can see the credentials for the user. Download .csv file in order not to lose the credentials as we’ll soon need them.

Our AWS configuration is done. Let’s start to code!

## 4. Start Vaadin project

The most convenient way to start Vaadin project is to use [Vaadin Starter](https://vaadin.com/start/v14).

![vaadin-starter](/posts/Vaadin-AWS/vaadin-starter.JPG)

Download, unzip the folder and open it in your favorite IDE.

It's a basic Vaadin project, but it's fully working app (and it's [PWA](/posts/what-is-progressive-web-app) by default).

Delete all demo stuff: GreetService.java and all inside the MainViev.class constructor.

## 5. Create custom upload component

