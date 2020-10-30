---
title: "Typescript Is Great"
date: "2020-07-17"
snippetImageName: "71720snippetAndFull"
fullImageName: "71720snippetAndFull"
fullImageAlt: "Man Typing"
tags: ["Typescript"]
subtitle: "Enforced Documentation"
snippetText: "Typescript is great.  I know that I don't have a full idea of the language yet, but even from what I already know, I know I enjoy it a lot."
---

<br>
<br>
Typescript is great.  I know that I don't have a full idea of the language yet, but even from what I already know, I know I enjoy it a lot.
<br>
<br>
It's really amazing the way that it's just an extension of JS code, but with extra implementation on top.  What I mean, is that you could refactor your code to be TS just a line at a time, and it will still work throughout.  Very cool.
<br>
<br>
I'm not sure if it's the language that lends itself to ease of use, or just a growing familiarity with JS, but I find implementing concepts I learn from it very simple to pick up.  Things like automatically annotating types as you declare variables, making sure to check against what a function returns, I find myself writing them automatically without having to refer to any notes or documentation.
<br>
<br>
I'm not sure what I'll end up making once I'm done with this course, but I do know I want to create something with it.  Definitely the inspiration I was looking for.
<br>
<br>

####The Work
<br>
<br>
Today, most of my time was spent implementing a pretty simple concept. We were supposed to create a class that can sort whatever is provided (our propts were a string, an array of numbers, and a LinkedList). The practical coding stepped through writing the Sorter class as a concrete class, as well as classes for all the types that we would eventually want to sort. We hooked up an interface first, and then refactored to have the parent Sorter class be an abstract that the child classes would extend.
<br>
<br>
I was happy to say that I could write a LinkedList implementation from scratch, and without coding along -- I often try to "go ahead" of the course content when it's something that's not brand new to me, to make sure I'm understanding the concepts correctly and can write my code without my hand getting held.
<br>
<br>
Linked Lists... I doubt I'll ever use them outside of a theoretical or coding interview setting, but they definitely get the mind pumping. It makes me want to revisit the JS Coding Interview course I was doing, or otherwise find a nice list of abstract challenges to complete, because nothing makes you feel more like a programmer than getting a logic prompt, and coding it into action.
<br>
<br>
The error messages are great. I still find myself console.logging a bit too much, but getting verbose, specific errors in the IDE is a thing of beauty.
<br>
<br>

####What I Learned
<br>
<br>
Maybe it's that in practical JS use, or React to be more specific, I so rarely ever have to use this, or classes (beyond class App extends Component, say). Never abstracts or interfaces. They make so much sense when wiring up the backbone of this TS program, that I finally feel like I have a practical appreciation for them. Now, constructor and super calls aren't just things I have to do to make my linter shut up, it's something that concretely defines and links my classes.
<br>
<br>
I learned to appreciate abstract classes in a different way. The way the instructor put it, maybe you don't know how to write a sorting algorithm for a Linked List. While that wouldn't be the most difficult thing in the world to write, there's a lot of elegance in writing a class that just requires you to have a swap(), compare(), and length() message, and then implementing your algorithm there. Plus, imagine an ever growing list of data types and structures you eventually still need to sort for your program to work.
<br>
<br>
Then it just becomes a matter of implementing the correct way to swap(), depending on your data. I'm not sure that would have clicked for me without seeing it in action.
<br>
<br>
I'm probably conflating a couple different ideas here -- nothing we did in this challenge is outside the realm of Vanilla JavaScript. If it were posed to me in a coding interview, I'm sure I eventually could have written it without ever having learned TypeScript
<br>
<br>
The way that TypeScript makes you think about your types, though, that's the real magic.
<br>
<br>
