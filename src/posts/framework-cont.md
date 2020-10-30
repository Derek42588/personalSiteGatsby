---
title: "Framework, Continued"
date: "2020-07-20"
snippetImageName: "72020snippetAndFull"
fullImageName: "72020snippetAndFull"
fullImageAlt: "Framework"
tags: ["TypeScript"]
subtitle: "Diving Deeper with TypeScript"
snippetText: "Continuing with the work I mentioned in yesterday's post, most of my coding today was done working through setting up the groundwork of creating a Web Framework from scratch."
---

<br>
<br>
Continuing with the work I mentioned in yesterday's post, most of my coding today was done working through setting up the groundwork of creating a Web Framework from scratch.
<br>
<br>
There are definitely points in TypeScript where your brain twists a bit, trying to understand all the typing that's going on.  Another thing I find myself tripping up over is when to be using composition, inheritance, implementing interfaces, and so on.
<br>
<br>
I think, for me, the important part has always been seeing it in action.  It's easier for me to visualize a model by relating it to one I've either seen, or written, in the past.  When I move on to writing my own TypeScript from scratch, I think this will all start to click a lot quicker once I've gotten a few more references done with.
<br>
<br>

####The Work
<br>
<br>
I do have to say that this exercise is reinforcing a lot of concepts I have neglected for a while (because they simply don't come up in my usual application of this tech stack). This -- the JavaScript this that is -- has mattered to me only insofar as binding something to make sure that my event handlers worked correctly, or something similar.
<br>
<br>
Today, what I got done was creating first a User Class, building all the methods that would be necessary for our end application, and then extracting said implementation to make it more generic and reusable for future Models. Overall, a pretty effective way to write it, I think.
<br>
<br>
Next, we moved on to the 'view' portion of our framework. I haven't worked in vanilla JS in ages (or rather, vanilla JS to manipulate the DOM), so it was really interesting to go through creating an event handler and listeners from scratch. The implementation was logical and easy to read, at least after it was scaffolded.
<br>
<br>
It certainly gives me a much bigger appreciation for the things I take for granted inside React.
<br>
<br>

####What I Learned
<br>
<br>
What stands out most to me from today is the power of generics. What's nice about learning TypeScript is the implicit checking it does for you along the way. I might not immediately be able to visualize all the different things I need to type -- an interface translated into a generic, that returns a key of said interface, all written so that it doesn't refer to a specific type. But since TS has such great self-documentation, automatically lights up if you're returning the wrong thing (or expecting the wrong argument), you self-correct pretty quickly.
<br>
<br>
Certain parts of this exercise do feel a little clunky. There's a lot of passing along of references, setting up of multiple classes in constructors to acheive the highest level of extraction, and so on. But -- once you see the power of it in action by implementing it and having it work perfectly for some pretty different class types, the benefit speaks for itself.
<br>
<br>
I also feel like it's getting me more comfortable with digging into the type definitions. I was having a problem remembering how to extract the input value of an element in vanilla JS. Before this, never in a million years would it have occurred to me to right click on it, dig into the node.js TypeDefs of HTMLElement, and figure out the right syntax from there. Now, it makes perfect sense.
<br>
<br>
