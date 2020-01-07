---
title: Keycloak - adding roles and users
date: "2019-12-17T13:00:32.169Z"
template: "post"
draft: false
slug: "keycloak-adding-roles-and-users"
category: "Tutorial"
tags:
  - "Keycloak"
description: "The fourth part of tutorial series Spring Boot – Vaadin – Keycloak – Spring Security Integration."
socialImage: "/blogPosts/Vaadin-KeyCloak/spring-vaadin-keycloak.png"
---

> This blog post is a fourth part of the [series](https://ramonak.io/posts/spring-boot-vaadin-keycloak-spring-security-integration).
> The source code of the complete project is available in <a href="https://github.com/KaterinaLupacheva/spring-boot-vaadin-keycloak-demo" target="_blank">this GitHub repository</a>

Now we can define Roles, which will be used in our apps for authorization.

In the left menu bar click Roles and then Add Role.

![keycloak-roles](/blogPosts/Vaadin-KeyCloak/Roles.JPG)

Create two roles: user and admin. 

Here is the list of the roles of our Demo Realm.

![roles-list](/blogPosts/Vaadin-KeyCloak/roles-list.JPG)

Now we can add users. We’ll add two users: one – “standard” user and one – admin user.

In the left menu bar click Users and then Add user.

![add-user](/blogPosts/Vaadin-KeyCloak/add-user.jpg)

For the sake of this tutorial, we’ll add just the minimum of required information, which is just Username:

![create-user](/blogPosts/Vaadin-KeyCloak/create-user.JPG)

Then navigate to the Credentials tab and set the password for the user.

![user-password](/blogPosts/Vaadin-KeyCloak/kate-password.JPG)

By default “Temporary” button is ON. That means that the user must change the password on the first login. But we don’t need this feature. So I disabled the Temporary switch.

Now go to Role Mapping tab, where we can assign our user to the role – the user role. For that chose “user” from Available Roles section and press Add selected.

![kate-roles](/blogPosts/Vaadin-KeyCloak/kate-roles.jpg)

We are done with the first user and now repeat the same actions for creating Admin user. 

Add user with username “admin”, set password and role “admin”.

And we’ve finished creating roles and users.

In the next part, we’ll add applications that should be managed by Keycloak.

Next: [Keycloak: clients configuration]()