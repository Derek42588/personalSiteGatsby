---
title: "Decorating"
date: "2020-07-22"
snippetImageName: "72220snippetAndFull"
fullImageName: "72220snippetAndFull"
fullImageAlt: "Decorating a Christmas Tree"
tags: ["TypeScript", "Decorators", "Metadata"]
subtitle: "Decoration and Metadata with TypeScript"
snippetText: "I regret mentioning how adding event handlers and rendering nested views was twisting my brain in yesterdays post, because it has nothing on the (currently experimental) implementation of decorators and metadata."
---

<br>
<br>
I regret mentioning how adding event handlers and rendering nested views was twisting my brain in yesterdays post, because it has nothing on the (currently experimental) implementation of decorators and metadata.
<br>
<br>
Continuing on in my course, today's work was mostly spent within a module exporing some more in depth implementation of Express with TypeScript, and to acheive the functionality necessary, we had to dive deep into the optional, experimental functionality of decorators and metadata.
<br>
<br>
I think the concept itself was hard to grasp before seeing it in practice, but afterwards, I definitely feel more comfortable with this code than the kind of messy Model and View of the custom Framework described in the last few posts.
<br>
<br>

####The Work
<br>
<br>
I had hoped to completely finish with this course today, but I have one final, shorter module going over TS with React and Redux. Trying to cram this in with prepping our apartment with another round of bed bug treatment was a bit of a headache, but I definitely got a lot done today.  
<br>
<br>
For the module project, we just hosted a very simple Express server with a very dumbed down auth flow. No retrieval of data, just putting up get and post routes, implementing body-parser and cookie-session, and typing it all.
<br>
<br>
Decorators are definitely really interesting. Stephen Grider, the course's instructor, definitely explained them well -- well, I doubt I'd be able to write them from scratch, but using this code as a template, I feel pretty confident. The concept of how the decorators are painted, with the Class one going last, makes sense.
<br>
<br>
We implemented two different classes for our routes, one for an auth flow and one for other generalized routes, implemented the route handlers, defined the get, post, put, patch, delete etc in in a functional and abstracted way, and applied them to all the methods within the classes. Then, in the class decorator, you basically apply all of them if they exist, or not, by accessing the metadata.
<br>
<br>
Very, very interesting, and definitely unlike anything I've seen before.  
<br>
<br>

####What I Learned
<br>
<br>
While it took a little while for the concepts to sink in, the actual application of them wasn't too daunting. Work on the methods, make sure they're applying correctly, then work up to the class.
<br>
<br>
I also really like how, after you do the work of wiring it all up, it reads very cleanly. You're applying your @get decorator, your @middleware compiler, your @use middlewares, and they're all defined above the individual methods inside your route controller. Very clean and clear.
<br>
<br>
The end result, at least in the example project here, was a lot of functionality that could easily be achieved with the usual custom Express middlewares -- except with the added benefit of being strongly typed. I can definitely see the benefit in projects where I need to be a lot more complicated in my express code.
<br>
<br>
Metadata in particular just seems incredibly versatile. An invisible, global variable? Definitely valuable.
<br>
<br>
