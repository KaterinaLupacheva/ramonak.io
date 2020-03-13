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
