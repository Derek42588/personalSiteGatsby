---
title: "Initializing Data"
date: "2020-09-04"
snippetImageName: "90420snippetAndFull"
fullImageName: "90420snippetAndFull"
fullImageAlt: "Building Blocks"
tags: ['React Native', 'Firebase']
subtitle: "Touchy useEffects"
snippetText: "One of my features that I had been working on had bugs exposed on testing.  It's always interesting to see how other people will test and come up with ways to find bugs.  I had tested this feature, but testing it in the way that the other person did never would have occured to me."

---
<br>
<br>
One of my features that I had been working on had bugs exposed on testing.  It's always interesting to see how other people will test and come up with ways to find bugs.  I had tested this feature, but testing it in the way that the other person did never would have occured to me.  
<br>
<br>

####The Work
<br>
<br>
There was some tricky work getting a few different useEffects to work in the way expected.  I had to initialize data, and then use that data to properly filter the next fetch and the render.
<br>
<br>
After that, I attended our React Workshop.  It's nice to see people on the team who want to learn this work on their own projects.
<br>
<br>
Then, I took a look at another dev's branch and tried to help him with some of the issues he was having.
<br>
<br>

####What I Learned
<br>
<br>
I had never passed a setState method to another function (outside the component) but necessity had me try it today, and I was pleasantly surprised when it worked.  Definitely something to keep in mind.
<br>
<br>
