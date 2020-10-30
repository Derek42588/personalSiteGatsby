---
title: "Deploying Prisma"
date: "2020-07-08"
snippetImageName: "70820snippetAndFull"
fullImageName: "70820snippetAndFull"
fullImageAlt: "Factory"
tags: ["GraphQL", "Prisma", "Postgres"]
subtitle: "Moving to Production"
snippetText: "My work today was mostly spent in staging the app for production.  I'm very happy to say it isn't all that difficult with this stack.  Of course, I'm knocking on wood seven times while saying that."
---

<br>
<br>
My work today was mostly spent in staging the app for production.  I'm very happy to say it isn't all that difficult with this stack.  Of course, I'm knocking on wood seven times while saying that.
<br>
<br>
I wonder how long it'll take for me to stop having pre-deployment nightmares before moving to production.  Without fail, there are always issues -- and worse yet, it's almost always caused by something that wasn't covered in what I was just studying, so of course you feel a little panicked when trying to debug. 
<br>
<br>
But, we'll save those problems for when they happen.  As of right now, I have a few more sections before completing this course, both of which are exciting -- first hooking up with Apollo server and then testing with Jest (I love Jest, but have never used it in conjunction with a GraphQL backend... for that matter, I don't think I've ever used it with a backend), and then finally, say it with me, a boilerplate!
<br>
<br>
I'm continuing to have a hard time with applying for jobs.  I'm not sure what else to do at this point.  There are only so many hours in the day.  I give myself a hard time about the amount of time I'm studying/working, but it's at a bare minimum of 9-5 on weekdays and at least 5 hours a day on weekends.  
<br>
<br>
I could study more preparatory information and courses about coding interviews...but then again, I'm not even getting beyond the application stage at this point.  Is it the lack of a degree?  For the amount of time I've been coding, I'm pretty proud of my portfolio.  I'm not sure where else to turn.  I guess just keep going, and make more projects.
<br>
<br>

####The Work
<br>
<br>
The pre-config itself is a tiny bit of a headache.  I know I'll have problems remembering each fiddly piece, but I think I took good enough notes to reproduce it with both my own notes and referring to documentation as needed.
<br>
<br>
Heroku integrates with Prisma Cloud (their cloud services for your docker container) and the Posgtres DB seamlessly.  After the setup, the live site and it's current state (just a hosted GraphQL Playground) is now live on Heroku.
<br>
<br>
Looking ahead, I'm still nervous about hooking up the back and front ends.  I've done enough of these projects that the Node/Express parts should be in the bag, but the new stack parts make me nervous.
<br>
<br>
Though, like I've said, should just wait until that actually begins before worrying over it.
<br>
<br>

####What I Learned
<br>
<br>
Another project, another teacher, another way of doing environment variables!  env-cmd was the library of the day.  I do like it.  Simple, basically just have to add some lines to your package.json scripts.
<br>
<br>
Not that it's all that advanced, but I learned how to import in a graphql schema with these libraries.  All it is is using a # before your imports, but I thought it was interesting.  Hadn't seen that yet.
<br>
<br>
The reason for the import was to use my Prisma-generated enums in my Node server queries.  There are plenty of other ways to achieve this, but I think it's cleaner this way.
<br>
<br>

