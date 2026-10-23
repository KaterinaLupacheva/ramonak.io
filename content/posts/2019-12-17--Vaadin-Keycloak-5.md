---
title: "Keycloak: clients configuration"
date: "2019-12-17T14:00:32.169Z"
updated: "2026-10-23"
template: "post"
draft: false
slug: "keycloak-clients-configuration"
category: "Tutorial"
tags:
  - "Keycloak"
description: "In the Keycloak admin console, open Clients, click Create, and enter a Client ID and root URL for each app, here the Spring Boot backend and the Vaadin frontend. The Installation tab exports the Keycloak OIDC JSON settings each app needs."
socialImage: "/media/spring-vaadin-keycloak.png"
---

> This blog post is a fifth part of the [series](https://ramonak.io/posts/springboot–vaadin-keycloak–springsecurity-integration).
> The source code of the complete project is available in <a href="https://github.com/KaterinaLupacheva/spring-boot-vaadin-keycloak-demo" target="_blank">this GitHub repository</a>

## How do I add a client in Keycloak?

Now we need to define which applications (or Clients in Keycloak terms) are mapped with created Realm and users/roles. 

In the Keycloak’s Administration console Click on Clients link on the left menu and then Create.

![create-clients](/posts/Vaadin-KeyCloak/create-clients.jpg)

Add our Spring Boot backend app:

![client-backend](/posts/Vaadin-KeyCloak/client-backend.JPG)

Enter Client ID (spring-boot-backend, for example) and Root URL of the app (http://localhost:9999/ in our case). Press Save button.

We’ll leave all the default settings. 

To speed up the following configuration process of our apps, click on Installation tab and chose “Keycloak OIDC JSON”.  Thus we have ready properties which we’ll add to the application.properties file of our backend app in a minute. You can download them as a .json file or just copy and save in text file. 

## Add the Vaadin frontend client

Finally, add the second Client – Vaadin frontend app. Repeat the same steps as with adding the backend app: Clients -> Create. Then enter data about the app and click Save.

![vaadin-client](/posts/Vaadin-KeyCloak/vaadin-client.JPG)

Then save generate and save properties from the Installation tab (optionally).

And that’s it with KeyCloak configuration!!!

Now we have to “befriend” two of our apps with Keycloak.

Next: [Spring Boot – Keycloak – Spring Security integration](/posts/spring-boot–keycloak-spring-security-integration)