---
title: "Apollo Apollo"
date: "2020-07-14"
snippetImageName: "71420snippetAndFull"
fullImageName: "71420snippetAndFull"
fullImageAlt: "Sunset Moon"
tags: ["React", "Prisma", "GraphQL", "Apollo"]
subtitle: "Auth Flow and Testing Hooks"
snippetText: "Feeling pretty good about the work today.  After having to spend some time in the previous days fixing bugs (among non-programming headaches), was able to spend a good amount of time actually coding."
---

<br>
<br>
Feeling pretty good about the work today.  After having to spend some time in the previous days fixing bugs (among non-programming headaches), was able to spend a good amount of time actually coding.
<br>
<br>
I didn't write anything flashy or incredibly impressive today.  I was, however, able to hook up authentication, test all the Apollo Hooks (useQuery, useMutation, useSubscription -- new to me), and spend some time practicing Apollo Client cache manipulation.
<br>
<br>

####The Work
<br>
<br>
I'm surprised to say it didn't really click for me before now, but I'm really getting a better handle on Apollo Client.  I guess one thing that wasn't quite clicking for me was how the local Cache <em>was</em> our local data store -- basically our replacement for Redux.  Queries and mutations are still the langauge we use to manipulate that data, but we're manipulating <em>client</em> data, unless otherwise specified.  
<br>
<br>
Obviously, I've utilized it in that fashion in my past projects, but I think the syntax of how I was fetching that data was tripping me up.  Now I see more clearly the data loop.  We can extend types on our client typeDefs, add resolvers, manipulate that data even more, and in that way, we're replacing our store with the cache and our reducers with resovlers.
<br>
<br>
I was hesitant to move forward with the auth flow, mainly because I'm coming from a project where that was so robust (and once hooked up, seamless), to one where there's layer after layer after layer.  I wasn't looking forward to using a localStorage jwt, but who cares?  If it works, it works.  Not only that, after skimming some articles, I'm confident I can even get the same auth flow going -- allow for social logins, combine user accounts if they match, and so on.  
<br>
<br>
It was relatively painless, once I was able to take it step by step.  I was pretty much just staring at my configuration, not wanting to move forward, until I wrote down a to-do list where I broke them down into micro-steps (step 1, test that I can get hardcoded token from the front to the back, step 2, test that that token changes when I refresh it on the front end, etc etc).
<br>
<br>
Next, I went through various queries and hooks, just to make sure that they would work, and that the data would come through correctly on the front end.  I've yet to test the production stage, but I'll do that tomorrow.
<br>
<br>
The most challenging was probably hooking up subscriptions.  Apollo's documentation goes through it pretty clearly, however, and after a little bit of testing I was able to get an Apollo Wrapper container, passing the data to a functional component, that queried the backend, and also hooked up a subscription.  On that subscription triggering, it would rewrite the cached data, and the component would update.
<br>
<br>
A little more finicky than I was envisioning.  When I was envisioning rewriting my game app, I had hoped that the subscription side here would be a little simpler (especially after all the work put in on the backend).  I guess I'll have to try it to really see how different it will be.
<br>
<br>

####What I Learned
<br>
<br>
Breaking things down step by step is incredibly helpful.  I think I always want to solve the WHOLE problem, right NOW.  So I search for solutions that probably don't align with what I'm after, since I'm not seeing the full picture.  Breaking things down not only helps you take it in smaller, easier to digest pieces, it also exposes solutions you might never have thought of.
<br>
<br>
For example, my subscription to update/overwrite query wasn't working correctly.  So I kept breaking it down to points I knew would work, tested the data with console logs until I could see the issue, and then recomposed it and it eventually worked.
<br>
<br>
There will never be that one framework or library that takes me to the next step.  I know I've been singing the praises of GraphQL -- and I still do really love it! -- but at one point today, I was realizing that what I was accomplishing was essentially just a different way to reach the same end point I've reached many, many times before.
<br>
<br>
I've put all this work into setting up a back end, and I'm very grateful for it, since I've relearned a lot of things about it that I had neglected for a while.  At the same time, not all projects need a backend.  This is great if I have a specific idea for it (and I can rewrite and expand my game app with it), but on it's own sake, doesn't solve anything.
<br>
<br>
