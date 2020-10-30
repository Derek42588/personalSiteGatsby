---
title: "Prisma, Continued"
date: "2020-07-05"
snippetImageName: "70520snippetAndFull"
fullImageName: "70520snippetAndFull"
fullImageAlt: "Prism In Sunset"
tags: ["GraphQL", "Prisma", "Postgres", "Docker", "Node"]
subtitle: "More Prisma"
snippetText: "Guess who gets to do more authentication?!  This guy.  Not too upset about it though.  It's a classic for a reason.  It's an excellent real world example of all the concepts you need to go over.  In this case, type models, subscriptions, data verification, etc."
---

<br>
<br>
Guess who gets to do more authentication?!  This guy.  Not too upset about it though.  It's a classic for a reason.  It's an excellent real world example of all the concepts you need to go over.  In this case, type models, subscriptions, data verification, etc.
<br>
<br>
Other work today was done on refactoring type models and hooking up prisma with our node application.  Much easier than I thought it would be (becoming more and more of a prisma fan).  I'm excited to hook up authentication, and then hopefully go through the process of moving it to production by tomorrow.
<br>
<br>
The end section of this course is making up boilerplate, so I'm confident that I'll have something decent for that by the end.  Prisma itself is pretty easy as far as setting up a new project/DB.  I'm unsure how difficult wiring it up to a live site will be.  I still am unsure what docker is doing behind the scenes.  Is it just exposing an IP Address endpoint?  Will I switch that to be a dev environment variable, and use something else for production?
<br>
<br>
Something I think I'm becoming more comfortable with is the relationship between all the files and the GraphQL structure.  In the first course I did, I was just following along.  The queries and mutations themselves are pretty self-explanatory, and written in an easy to read manor.  But seeing it broken down like it is in this project, I see more clearly what we're doing on the node backend (manipulating the responses we get from prisma, pretty much).  The resolver files make perfect sense.
<br>
<br>
AFter the introductory sections, it's night and day how nice the resolvers are after hooking up prisma.  Taking care of all the relational data, cascading deletions for relationships, filtering by query arguments... all baked in, and the node resolvers are now simple and readable.
<br>
<br>
One thing I'm curious about are string search queries.  It does seem to be case sensitive, and I don't know that that can be changed.  Perhaps that's something you can handle yourself.  As it's not too big a deal at the moment, I'll save that for later.
<br>
<br>

####Random Thoughts
<br>
<br>
Not that it really effects any of my projects at the moment, but I've been thinking lately about scalability.  I had a great night last night where me and my friends had a virtual game night, using my web app!  There were a few small bugs, but ones that would be hard for me to test for on my own, so I definitely needed to have a real-world test to find them.
<br>
<br>
What would happen if there were 10k users on that firebase site at once?  Or 100k with 10k game instances?  What happens to performance?
<br>
<br>
In so many job postings, they mention things like "work on Enterprise projects" and experience with scaling, etc.  These are definitely must have skills.  But how can I gain them on my own?  I guess you can study the theoretical aspects.  I just gloss over server + hosting info, opting for the cheapest/free options because of course I do, these are portfolio/small/personal projects.  But is there more necessary to making these apps scalable than just choosing more heavy duty hosting + server options?  
<br>
<br>
What about testing in development?  In all of my courses so far, I've yet to come across something that speaks to a way to test those 10k 100k etc concurrent user cases.  
<br>
<br>

####What I Learned
<br>
<br>
Don't be afraid of different libraries and models.  I feel like I've learned so much more about the underlying concept of GraphQL just by seeing it in a different frame of reference, something I never would have decided to use on my own (Postgres and Prisma)
<br>
<br>
It's okay to be incremental in my learning.  Eventually, if you just keep plugging, things will click.
<br>
<br>
Don't be so hard on yourself.  I'm trying to essentially teach myself a CS Degree, to the point where someone will pay me pretty good money to do it full time.  I'm not amazing yet and I will have imposter syndrome for a long, long time -- but I'm not bad.  I'm definitely employable.  And I'll just keep getting better, so long as I code every day.
<br>
<br>
