---
title: "Finishing Up Framework"
date: "2020-07-21"
snippetImageName: "72120snippetAndFull"
fullImageName: "72120snippetAndFull"
fullImageAlt: "Models"
tags: ["TypeScript"]
subtitle: "More Extraction"
snippetText: "Thank god for React.  Finishing up with the project of creating our own Framework using TypeScript,  a lot of the solutions gave me a much bigger appreciation for what React does under the hooks."
---

<br>
<br>
Thank god for React.  Finishing up with the project of creating our own Framework using TypeScript,  a lot of the solutions gave me a much bigger appreciation for what React does under the hooks.
<br>
<br>
In particular, the logic of nesting views for our different classes, all abstracted, to the DOM... I mean, after seeing it it makes sense, but just not having to worry about it is just so much nicer.
<br>
<br>
The github for this module project can be found <a href = "https://github.com/Derek42588/frameworkWithTypeScript">here</a>
<br>
<br>

####The Work
<br>
<br>
We went through and implemented the View portion of the Framework, wiring in all the methods to render our data (stored in a json-server) to our html (parcel).  
<br>
<br>
It did twist my brain a little bit -- especially the roundabout way of rendering, but after seeing all the code in place it does make a lot of sense, and fits very well with our Model implementation.
<br>
<br>
At first, I didn't really like the convention of how we were making our different Models and Classes. Abstract it out as far as possible, then instantiate with more and more new [BlahBlah](arg1, arg2), and so on. I think, though, it got a lot cleaner with the final implementation. Also, it highlights the power of TypeScript and framing in this manner -- every argument is a class, or a method, that's explicitly defined in the Type Defs automatically. If you forget exactly how you're hooking up your framework, all you have to do is highlight over the call and you see the whole chain.
<br>
<br>
I'm excited to finish up with the course -- there are only a few modules left, going over some Express and React implementation, so perfect for me.
<br>
<br>

####What I Learned
<br>
<br>
For the purposes of today's code, implementing with inheritance rather than composition made more sense, and it was good to see that in action in TypeScript form.
<br>
<br>
One thing that stuck out to me was, in the way this module was taught, we had a lot of calls to dummy (not abstract) methods in our abstract class, mainly to take away the immediate error calls of non-implementation in the inheriting classes.
<br>
<br>
I see the logic of that. For example -- if you want to call a render in a different manor than default, you would override it. That makes sense, it just feels a little off? But then again, maybe that's what's been going on behind the scenes, and I just never realized it.
<br>
<br>
It just seemed a little backwards, but I guess that's a choice to make in the construction. What needs to be an abstract method, whatt needs to be the default behavior (if any), and what and where to override.
<br>
<br>
