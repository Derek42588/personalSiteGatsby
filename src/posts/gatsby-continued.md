---
title: "More Gatsby"
date: "2020-07-01"
snippetImageName: "70120snippetAndFull"
fullImageName: "70120snippetAndFull"
fullImageAlt: "Shop Page - Continued"
tags: ["Gatsby", "Contentful", "GraphQL"]
subtitle: "More E-Commerce Fun"
snippetText: "I began my studying today by continuing my course and refactoring it to use GraphQL for state management, but took a detour at around noon.  A friend of mine asked in a group chat what we all thought of solutions for making a shop page for his wife, essentially a custom replacement for her current Etsy page."
---

<br>
<br>
After I showed my friend and he in turn showed his wife the placeholder e-commerce shop I described in yesterday's post, she loved it!  I wasn't expecting to do much more than an exercise in testing my own skills, but I was really happy to hear that even a tiny, test app like that went over well.
<br>
<br>
So the majority of my day today was spent on polishing up that placeholder code, and trying to work out some of the challenges of what will be needed if this is used as a real, live site!
<br>
<br>
It went pretty well, just a little slower than I would have hoped.  I think I need to develop better skills in planning out exactly what I need to do, step by step.  It was a little overwhelming when I was just staring at the code, but in my mind was a laundry list of tasks that needed to get done.
<br>
<br>
Version two<a href="https://dr-winguyen.netlify.app">here</a>
<br>
<br>

####The Work
<br>
<br>
There were a few things that needed to get done.  The majority of my time was spent on trying to tweak some of the design.  I can't stress this enough -- making my own library of components has to be priority one.  Obviously, css isn't the most difficult thing in the world, and the components I was adding weren't very intricate.  I know how to do them and can write from scratch pretty easily.
<br>
<br>
But when I've re-used an image gallery a dozen times across various personal projects, why don't I have a boilerplate gallery component?  Make it as dumb as possible to allow for customizing as the individual project needs, but why waste time writing the HTML and CSS that I've done a hundred times?  Moreover, that way you KNOW it will work in specific contexts, and don't have to play trial and error.
<br>
<br>
The second big portion of work was spent on trying to tweak the content model (again, data returned from GraphQL queries).  Contentful has a good choice of options you can pick from.  Given that I hadn't explored them in depth, I definitely chose incorrectly for some fields and will have to refactor for tomorrow -- but in essence, whatever you can reasonably expect to be able to put in these data fields, you can achieve.
<br>
<br>
Unsurprisingly for an e-commerce store, there needed to be variable options for specific products.  So, the challenge was figuring out how to create those fields, format the data back on the GraphQL result to align with what our front end needs, and then plug it again into the purchasing API (Snipcart).  Not very difficult, but a few steps.
<br>
<br>

####What I Learned
<br>
<br>
I'm going to get WRITE MORE BOILERPLATE tattooed on my chest.
<br>
<br>
I spent a good amount of time in the various APIs I used's documentation pages.  I tried to plan ahead as best as I could as far as data types went, but I still needed to see it in practice to get a good idea of what the end-product will need.
<br>
<br>
I wonder if there's a good testing option for cases like that.  Load up different data types quickly and query them.  GraphQL has an amazing playground, I bet making a local test environment and working that way would be incredibly valuable.  Definitely going to add that to the list.
<br>
<br>