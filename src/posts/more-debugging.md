---
title: "More Debugging"
date: "2020-07-13"
snippetImageName: "71320snippetAndFull"
fullImageName: "71320snippetAndFull"
fullImageAlt: "404 door"
tags: ["Heroku", "Prisma", "Docker"]
subtitle: "Database Down"
snippetText: "Today, I had to deal with a lot more headaches from dealing with our apartment woes I mentioned in yesterday's post.  The work I was able to get to was diving back into my own GraphQL/Prisma boilerplate, but now with fun new errors!"
---

<br>
<br>
Today, I had to deal with a lot more headaches from dealing with our apartment woes I mentioned in yesterday's post.  The work I was able to get to was diving back into my own GraphQL/Prisma boilerplate, but now with fun new errors!
<br>
<br>
The issues arised from Heroku's (where my Postgres DBs are) regularly scheduled database maintenance.  Granted, I had no idea from the errors I was getting that that was the issue, but given that I got an email from Heroku and then was having database connection errors, I figured that was a pretty safe bet.  
<br>
<br>

####Hunting It Down
<br>
<br>
Heroku's emails told me that they changed the credentials (and name, and database URI) for all the hosted DBs.  This is apparently a regular occurance, so I wanted to make sure that I noted whatever the fix would be correctly.  It also automatically changes the environmental variables for you.
<br>
<br>
It took a bit of backtracking, because from my files, I couldn't figure out where the issues were.  The first thing I got "working" was the production DB.  Basically, all I had to do was change my credentials in my pgAdmin to the newly generated credentials, generate a new token to speak with the prisma DB, and I was good to go.  I wonder why this didn't need the further configuration my test and dev servers did, but I assume that's because it is live hosted and heroku's auto-config changes took care of everything else?
<br>
<br>
For my test and dev DBs, I was getting a few, unhelpful error messages (Literally!  It said "Whoops!  Network error.").  I changed that server's credentials in my pgAdmin as well, and I could see my data.  Clearly, that DB was still up and working, I just wasn't able to access it on my prisma endpoint, nor was I able to redeploy those environments on the prisma CLI.
<br>
<br>
I hunted around, but the only place that my project had the DB credentials were in the docker.compose yml.  I wasted time on the prisma cloud dashboard, but of course, those are my LIVE databases, not developmental, so they were irrelevant.
<br>
<br>
I spent time looking at the docker error logs, and that was what helped me pinpoint it.  It was getting a bad credentials error, and was using the old username from the pre-maintanance DB.  
<br>
<br>
I tried to redeploy, ensuring more than a few times that the info in my docker.compose.yml was correct.  I have to admit I was a little stumped (mostly because it didn't occur to me at this point why my prod server would be fine without further configuration, but my test ones were throwing errors).  
<br>
<br>
I tried forcing deletion of those DBs and redploying, only for more errors.
<br>
<br>
Finally, (duh!), I realised I had to recompose the docker container with the new credentials.  docker-config up -d, and I was good to go. 
<br>
<br>
I've also thought that a deep dive into documentation would be a good activity during these times.  I don't know, though.  Times like these, I feel like it would be really good to have a mentor to give me advice and guide me to the right course.  But, when all you can do is muddle through, you just got to keep muddling.
<br>
<br>

####What I Learned
<br>
<br>
These are exactly the issues that I'm afraid of, mostly because I know I'm all on my own.  I have no point of reference, I never tracked down these errors from the comfort of a course, and all my searches were giving me back zilch (given how unspecific the errors themselves were).
<br>
<br>
Thankfully, eventually, the issue was simple.  I do think I narrowed it down pretty well, and worked off of what I knew to find the answer.  I still have barely any idea what's going on with docker, but I'll learn more with time.
<br>
<br>
If this didn't work, the next step would have been to redeploy ALL my prisma services from scratch.  That wouldn't have been too big a headache, and I'm confident it would have lead me to the right answer.  Still, I'm glad I didn't have to do that.
<br>
<br>
And -- I'm sure this is incredibly obvious -- but I'm learning more and more how valuable logs are.  I think I avoided them in the past mostly because they would be incomprehensible to me at my level of understanding.  As that grows, though, I'm able to do more and more using them.
<br>
<br>
I had some issues with production deployment recently, and heroku's logs lead me to my answer.  I didn't even know WHAT I was looking for in this instance, but docker's logs lead me to this answer. 
<br>
<br>