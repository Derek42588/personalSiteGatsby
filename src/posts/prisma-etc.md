---
title: "Prisma and More"
date: "2020-07-04"
snippetImageName: "70420snippetAndFull"
fullImageName: "70420snippetAndFull"
fullImageAlt: "Two Prisms"
tags: ["GraphQL", "Prisma", "Postgres", "Docker"]
subtitle: "Diving into Prisma and Postgres"
snippetText: "A lot of new information today!  Very excited to be learning some new tools.  After completing the portion of my GraphQL course which was basically going over the basics (a reintroduction for me), we're now working with live data, which has introduced some new tools and concepts to me."
---

<br>
<br>
A lot of new information today!  Very excited to be learning some new tools.  After completing the portion of my GraphQL course which was basically going over the basics (a reintroduction for me), we're now working with live data, which has introduced some new tools and concepts to me.
<br>
<br>
First of all, Prisma is very cool.  My other forays into GraphQL had never mentioned it, but a database agnostic ORM that autogenerates CRUD + Subscription boilerplate?  Not only that, if I wanted to, I could use it in a Node REST too?  Very surprised I haven't been introduced to it yet.
<br>
<br>
The tools that this course is using is Prisma, obviously, but then the free tier Heroku Postgres DB, pgAdmin for a DB GUI, and Docker.  To be honest, I'm not sure what Docker's need is here, only that it seems to be necessary for Prisma configuration?  Hoping to figure more out about that.
<br>
<br>
In addition to Prisma, this is my first project using a PostgreSQL DB.  In fact, I think its my first one with any sort of SQL database.  Now, given that so much of the queries are abstracted out and I'm using GraphQL, I don't know that the end product will be that much different than my previous projects using MongoDB or Firebase, but I'm glad to expand my experience.  Now I can say more confidently that I can work with these types of DBs as well.
<br>
<br>
Some initial thoughts: the config is a little cumbersome, but not all that difficult.  pgAdmin is pretty ugly, but definitely seems to show quite a lot of information.  And lets be honest, MongoDB is ugly as hell as well.  Firebase is pretty polished, but definitely doens't seem to expose as much the behind-the-scenes information as this does.
<br>
<br>

####VSCode Shortcuts
<br>
<br>
Man do I love learning new VSCode shortcuts.  Just learned about the command palette, shortcut ctrl+shift+p for windows, through which you can search for other shortcuts.  Also learned about the language change to tell VSC to treat files like what you tell it to.  So very cool.
<br>
<br>

####What I Learned
<br>
<br>
This is an incredible tool.  So far, there isn't any functionality that I hadn't already written myself in various personal projects.  The pre-generated boilerplate is absolutely amazing, though.  Not only that, it guarantees clean relations and data as well, something I was wondering about in my previous post.
<br>
<br>
I'm nervous about connecting this to front end.  I've written this more than a few times now, but while I have an understanding of Promises, async/await, subscriptions, and so on, connecting it all together can be a little confusing.    
<br>
<br>
I can only hope, though, that with more practice it will eventually click.  I have no reason to think otherwise.  Not only that, I've been able to accomplish everything I've tried to do as far as live data in my own projects, just not in a "clean" way.  
