---
title: "Jest, Etc"
date: "2020-07-09"
snippetImageName: "70920snippetAndFull"
fullImageName: "70920snippetAndFull"
fullImageAlt: "Test"
tags: ["Jest", "GraphQL"]
subtitle: "Setting Up Test Suites"
snippetText: "Today, most of my work was spent setting up a Jest test suite for the current GraphQL project.  I've use jest before and feel pretty comfortable with it.  It's easy to use and verbose, too, exactly what you want out of testing functionality."
---

<br>
<br>
Today, most of my work was spent setting up a Jest test suite for the current GraphQL project.  I've use jest before and feel pretty comfortable with it.  It's easy to use and verbose, too, exactly what you want out of testing functionality.
<br>
<br>
One of my hangups with Jest before was the issue of not really having anything I needed to test.  Why set up suites and go through the process of all the configuration, if what I was going to accomplish with it could be tested more easily and (more importantly) more quickly via the browser for my React projects.
<br>
<br>
I could definitely envision using it in a project with a more extensive backend, though, so I'm grateful to get some experience testing from that angle.  
<br>
<br>
One thing in particular that seems handy is being able to instantiate a new prisma client for specific tests.  We went through the setup of that for testing Auth vs. Unauth, and I can anticipate using that in a full stack test suite.  Instantiate a client, hook it up with a lifecycle method in the test, then make sure that the data is coming through correctly.  
<br>
<br>
Some pitfalls today came when I was getting errors that I eventually figured out were library conflicts.  I eventually downgraded a package (something I didn't want to do, but couldn't find a different solution) and reinstalled all packages to get it working.
<br>
<br>
The problem, though, is that I had absolutely no idea it was a package conflict error.  Without my search query leading me to an answer that identified it as such, I would've had no idea how to fix it.
<br>
<br>
What's the answer there?  In situations like this in the past, and today, the console errors are only useful insofar as googling them, they don't really lead me to being able to figure them out myself.  I'm not sure how to improve in this area.  I suppose trying to isolate the bad package and working backwards would be my next step, if there were no clues whatsoever in a search.  I'll have to note the next time this comes up.
<br>
<br>

####The Work
<br>
<br>
Besides the headache of the configuration itself (I'm hoping that I really like the boilerplate that's coming next, because I doubt I'll want to go through the effort of hooking it up in future projects unless it comes baked in with my own boilerplate repo), everything today was easy and straightforward.
<br>
<br>
Instantiating a test DB with Prisma is very simple, and useful.  I never much liked it in my projects that used MongoDB, but I probably wasn't properly setting it up/scripting it to really appreciate it.  I'll definitely make use of prod, dev, and test environments for my future DB projects, and I feel confident in being able to set them up without having to spend too much time reviewing my notes.
<br>
<br>
Tomorrow, I should be able to finish this course and have a boilerplate repo up on my github.  From there, I plan to create a brand new project, based off that boilerplate, and try to go through every step of recreating my game app, only this time leveraging GraphQL and Apollo only as my front end data management.  I'm going to try and use hooks wherever possible as well.  I don't want to skip over anything, so I'll probably be spending a lot of time redoing things I've already done, but I think doing them from scratch with a new stack will be really beneficial.
<br>
<br>

####What I Learned
<br>
<br>
There were some neat tricks in the jest test suites that never would have occurred to me.  For instance, we set it up so that you seed the test DB with fresh data to test off of every time you fire.  Simple enough, and I've done that before.
<br>
<br>
But exposing an object that you then export from the seeding function (e.g. User object, whatever), and then testing against <em>that</em> in your individual test files is not something I've done before, but I'll have to remember.  Definitely makes it easy. 
<br>
<br>
Like I mentioned above, firing off two different clients, depending on the test you're running itself, never occurred to me before either.  I probably would have made a beforeEach that got a fresh user every time for a token to refer to, which would make the test themselves much longer.
<br>
<br>
I definitely like jest, but comparing to my instructor's suites, mine runs way, way slower. Some of that could be communication with the server, but I'm also sure that it's partially because that I'm running all my programming on a mid-level laptop as well.  I can't wait to get a new job, because a brand new PC is definitely on the list of things I will need soon.
<br>
<br>

