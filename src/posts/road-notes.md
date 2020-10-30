---
title: "Road Notes"
date: "2020-07-18"
snippetImageName: "71820snippetAndFull"
fullImageName: "71820snippetAndFull"
fullImageAlt: "Road at Night"
tags: ["TypeScript"]
subtitle: "Getting In Daily Coding while Away"
snippetText: "This will be an interesting excercise.  My girlfriend and I have had a day trip to Maine to see her folks planned for a while.  However, I still want to stick to my commitment to be coding every day, and to write a blog post about it every day as well."
---

<br>
<br>
This will be an interesting excercise.  My girlfriend and I have had a day trip to Maine to see her folks planned for a while.  However, I still want to stick to my commitment to be coding every day, and to write a blog post about it every day as well.
<br>
<br>
I'm not sure what this post will end up like.  I've written my basic set up so that if we get home late tomorrow night, I can just edit the actual body, compile and upload.  In my mind, I've been planning to either read from some of the programming books during down time and taking notes that I'll eventually refactor in this post, or listen to some videos while driving and write about my thoughts on those.
<br>
<br>
Even if it's something very small, though, I will submit this post.
<br>
<br>

####The Work
<br>
<br>
Well, that did not work out as intended. It was a bit too much to hope for 'down time' during a family function, and we ended up spending more time there and in travel than we had planned. I would have listened to some videos on the ride back after having realized my mistake, but knew I would be awake enough to watch a module, or something similar, when I got home and get in my coding for the day.
<br>
<br>
What I mainly focused on was the next module in my TypeScript course, one that is focusing on us reading and parsing data. We're working off of a csv that has soccer match data, we're using node's fs library to read it into strings, and then manipulating the data from there.
<br>
<br>
Mainly, it's just wiring up the initial files, defining a class to read our data and then parse it, and annotating and defining all the types therein.
<br>
<br>
I stumbled at one point trying to code ahead, but I think I clarified some things for myself in doing so.
<br>
<br>

####What I Learned
<br>
<br>
Nothing particularly groundbreaking here, but it just really reinforced to me the elegance, readability, and inherit logic in TypeScript. Refactoring has long been an issue for me. The benefit of having reusable components, classes, and utilities has long been clear to me, but when I'm coding by the seat of my pants, I've rarely gone through the effort of actually doing so.
<br>
<br>
With a language like this, you pretty much <em>have</em> to, otherwise, well, you're just writing JavaScript. I see a ton of value in that for me as a developer.  
<br>
<br>
To be more specific about the coding, the stumble I mentioned above was when I tried to apply an interface to a data structure, when a tuple in type form was better for the specific implementation (returning from within a prase method).
<br>
<br>
That was good to learn, because I think when we initially went over tuples as it relates to TypeScript, it seemed like bad practice. After all, it's all about specificity and type checking, so why go through the work of defining this type when the "properties" are murky and index based? It was good to see, and figure out for myself, a clear use-case for them.
<br>
<br>
Not my longest post, or the most time spent coding, but I got it done! And before midnight too. The streak continues.
<br>
<br>
