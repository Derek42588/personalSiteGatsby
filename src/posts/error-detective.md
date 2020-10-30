---
title: "Error Detective"
date: "2020-07-11"
snippetImageName: "71120snippetAndFull"
fullImageName: "71120snippetAndFull"
fullImageAlt: "Maginifying Glass"
tags: ["GraphQL", "Prisma", "React"]
subtitle: "Hooking Up Front End"
snippetText: "Feeling pretty good about the progress I got done today.  I continued with hooking up my boilerplate backend and front end, and kept up production, development, and test environments for each step."
---

<br>
<br>
Feeling pretty good about the progress I got done today.  I continued with hooking up my boilerplate backend and front end, and kept up production, development, and test environments for each step.  
<br>
<br>
The majority of work was spent trying to wrestle with ApolloClient on the front end, making sure it was communication correctly with my back end.
<br>
<br>
The main goal I set my sights on was working Subscription in the front end, and everything seemed to work out well.  I haven't done more than a Hello World react component, console logging returned data from gql queries, but they're all working currently.  I anticipated a lot of trouble, and certainly ran into some, but it's working so far!  
<br>
<br>

####The Work
<br>
<br>
I do have to say that even beyond the difficulty of the GraphQL backend setup -- which, now, I feel comfortable with, but it certainly is a big curve -- the further setup necessary on the front end is just as much of a headache.  This whole project was conceived with wanting to use subscriptions, and as such, that is an absolute necessity.  Introducing subscriptions means websockets, and means tons and tons of further configuration.
<br>
<br>
I spent a lot of time diving into environmental variables.  In the past, I would feel pretty lost when getting to production -- this time, I want to have a clear streamline each step of the way.  I feel like I'm succeeding pretty well in that regard.   
<br>
<br>
I needed to have my GraphQL Yoga dev server hooked up to my developmental front end, and the production versions working as well.  I flopped around a little bit getting the right configuration getting the React app served statically from my backend server, but eventually, I figured out with some trial and error, Heroku Error Logs, and heroku bash.  
<br>
<br>
Next, websockets, probably the thing I was dreading the most.  I'd like to say it came easily, but it did not.  Only after a lot of searching was I able to eventually figure out what my problem was.  
<br>
<br>
I reused the configuration for the server itself from past projects (that used subscriptions).  
<br>
<br>
Then, I was simply stuck with some angry console logs in my production app.  I've been here before... working in development, but broken in production.  My biggest nightmare!
<br>
<br>
The first fixes I attempted resulted in (of course) breaking both development AND production.  Eventually, I landed on the right google search that caused me to try my production app in Chrome rather than Firefox (my preferred dev browser).  It gave me a more verbose error, and from there, was able to find my fix.
<br>
<br>
In development, it was working because it was using http://localhost:4000/graphql and ws://localhost:4000/subscriptions.  It broke in production, because even though I was loading the new URLs correctly via my env variables, production was served on the https protocol, and as such, needed wss for subscriptions to work correctly.  Thankfully, once found, an easy fix.
<br>
<br>

####What I Learned
<br>
<br>
After fixing that, I stared at my code a while and tried a little bit to take the next steps.  The next big feature will be working on the full auth flow.  It works perfectly in the back end, and I'm feeling fine about actually protecting queries/mutations/subscriptions where necessary with authentication, but passing that along to the front end is intimidating me a little bit.
<br>
<br>
I know in the past, I've used the classic jwt + localStorage.  I know that will work fine, but it is a little annoying, switching from the sleek Firebase to the clunky Apollo Client.
<br>
<br>
Plus, I can't stare at the client configuration any more today.  I'll have to apply the auth middleware to inject into the request headers, and I know I've done it before... I'm just not looking forward to it.
<br>
<br>
I feel like I want to find a more elegant solution.  It does seem a little silly that Apollo Client doesn't have a different, simpler way of handling the authorization.  Maybe I'll feel better about it after having implemented it.  
<br>
<br>
The important thing is good work was done today.  Just keep moving forward.  Getting my auth flow done, I'll be free to move on from there to get a really sleek, advanced full stack project going.    
<br>
<br>