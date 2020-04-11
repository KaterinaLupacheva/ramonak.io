---
title: Spring Boot – Vaadin – Keycloak – Spring Security Integration
date: "2019-12-17T10:00:32.169Z"
template: "post"
draft: false
slug: "springboot–vaadin-keycloak–springsecurity-integration"
category: "Tutorial"
tags:
  - "Vaadin"
  - "Spring Boot"
  - "Java"
  - "Keycloak"
description: "The first part of tutorial series Spring Boot – Vaadin – Keycloak – Spring Security Integration"
socialImage: "/media/spring-vaadin-keycloak.png"
---

![spring-vaadin-keycloak](/media/spring-vaadin-keycloak.png)

Recently on one of my Java projects, I was faced with the challenge to implement the following architecture:

– Spring Boot backend with REST endpoints

– Vaadin frontend client, which consumes that REST endpoints

– KeyCloak server for authorization and authentication management 

In this blog post series, I’ll go through the process of developing a basic application with the above-mentioned structure. The series consist of the next parts:

* [Developing Spring Boot backend app with REST endpoints](#part-1)

* [Setting up Vaadin Spring Boot frontend app with two UI views](/posts/setting-up-vaadin-spring-boot-frontend-app)

* [Keycloak server installation and Realm creation](/posts/keycloak-server-installation-and-realm-creation)

* [Keycloak: adding roles and users](/posts/keycloak-adding-roles-and-users)

* [Keycloak: clients configuration](/posts/keycloak-clients-configuration)

* [Spring Boot backend app – Keycloak – Spring Security integration](/posts/spring-boot–keycloak-spring-security-integration)

* [Vaadin frontend app – Keycloak – Spring Security integration](/posts/vaadin–keycloak–spring-security-integration) 

The source code of the complete project is available in [this GitHub repository](https://github.com/KaterinaLupacheva/spring-boot-vaadin-keycloak-demo).

## Part 1. Spring Boot backend app

For the backend part, we use Spring Boot app. 

Go to [Spring Initializr](https://start.spring.io/) (BTW, they’ve updated design recently!) and chose the following configuration:

![spring-initializr](/posts/Vaadin-KeyCloak/Initializr.JPG)

I’m gonna keep it simple for the sake of this tutorial. So we need just one dependency – Web – for making REST endpoints.

Press “Generate” button to download zip file with the project, unzip the folder and open the project in your favorite IDE.

The project has the following structure:

![backend-structure](/posts/Vaadin-KeyCloak/Backend-structure.JPG)

Now let’s create Controller class and add two REST endpoints: the first one will return the names of winter months, the second will be admin page.

```java
@RestController
public class Controller {

    @GetMapping("/months")
    public List<String> welcomePage() {
        return Arrays.asList("December", "January", "February");
    }

    @GetMapping("/admin")
    public String adminPage() {
        return "Admin page";
    }
}
```

Controller class is annotated with @RestController annotation, which simplifies the implementation by combining @Controller and @ResponseBody annotations.Both methods are for GET HTTP request, hence the annotation @GetMapping with corresponding URI’s.To run the application on a specific port (for instance, 9999, but you can chose whatever port you like) we need to add a property

```
server.port = 9999
```

in application.properties file. Now run the application in your IDE or using Spring Boot Maven plugin by entering command:

```
mvn spring-boot:run
```

Navigate in your browser to localhost:9999/months. We see JSON object with winter months:

![months-list](/posts/Vaadin-KeyCloak/months.JPG)

Test the second endpoint:  localhost:9999/admin

![admin-page](/posts/Vaadin-KeyCloak/admin.JPG)

The backend application is ready, but it’s not protected. Yet!

Next: [Setting up Vaadin Spring Boot Frontend App](/posts/setting-up-vaadin-spring-boot-frontend-app)