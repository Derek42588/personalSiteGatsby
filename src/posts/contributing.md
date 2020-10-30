---
title: "Contributing Code"
date: "2020-07-24"
snippetImageName: "72420snippetAndFull"
fullImageName: "72420snippetAndFull"
fullImageAlt: "Multiple Laptops"
tags: ["React Native", "Firebase", "Git"]
subtitle: "Working On A Team Project"
snippetText: "Today was definitely an interesting experience.  I'm still forming my opinion on this internship in total, but I definitely am super glad for the live experience it's already providing me."
---

<br>
<br>
Today was definitely an interesting experience.  I'm still forming my opinion on this internship in total, but I definitely am super glad for the live experience it's already providing me.
<br>
<br>
One thing I don't think I'll ever get over in a programming career is just how much there is to learn.  I want to know it all, but only have so much time!  I started coding at 7AM today and besides lunch, and a few, 15 minute or so stretch breaks, I've been working straight through.  It's now 6PM my time, and I'll probably need to sleep by 10:30 or 11 at the latest.  I still need to make dinner, spend time with my girlfriend, and spend at least a little time decompressing... when am I going to fit in extra study?
<br>
<br>
There's definitely something to be said for just diving in, though.  Yesterday morning, I was about to start a React Native course (and I still plan on completing that, just now at a slower pace, during off hours).  Today, I'm contributing code to a React Native project, learning by doing.  Now, I don't think I'll have the same level of understanding as I would have by completing that course, but I'm getting hands-on experience, learning while doing, and still able to make progress, even by just stumbling around, semi-blindly.
<br>
<br>

####The Work
<br>
<br>
I mentioned in yesterday's post that I was tasked with implementing a full on feature. Definitely an intimidating way to start!  
<br>
<br>
So while I took a look at the code yesterday, and played around a little bit, today was the first time I really dug in. I was a bit thrown, both at the structure of the files and the structure of the data.
<br>
<br>
I also desperately need to figure out a better way to live debug React Native. I know there are options out there, but since I was really determined to make good progress on my tasks, I decided to focus on them instead.
<br>
<br>
Thankfully, it was something I had dealt with before. Making the chat feature actually work as live. Our database is on Firebase, and I have very extensively documented some of my issues with getting that to work in my own project in posts on this blog.  
<br>
<br>
There were a few wrinkles, since the current implementation needed to initialize the data, re-sort and parse some things that were adding bugs to our code after being read off the DB, and then merging the data before sending off to the redux store. Another challenge was the structure of the data. I needed to apply two separate listeners, since each individual message is stored as a document. In use as a chat feature, you have to grab those where both the sender = X and the receiver = Y and vice versa.
<br>
<br>
In the end, though, I got it working. I am glad that there was some skeleton unsubscribing already going on in the useEffect of the component (I hadn't seen it used in that syntax, and probably would have had to dig around at least for another few hours to land on it)
<br>
<br>
After finishing, I did notice that I did break a small other feature that I hadn't realized was relying on that data, but I'm confident it will be a relatively easy fix (fingers crossed).
<br>
<br>

####What I Learned
<br>
<br>
I learned how rewarding it is to make contributions to a project that's much bigger than anything you could've made on your own.
<br>
<br>
I learned that I can contribute, even if it was small and relatively low level, to something that's real. While the entire team are at my level, there is a senior dev working on this code as well, and I was able to write something to supplement his real-world code. Very nice feeling.
<br>
<br>
I hesitate to say I learned this, because I doubt I can change it, but I 'learned' I shouldn't be so hard on myself. I was absolutely determined to crank out this assignment, and got it done... even though I had the whole weekend to do it. Now, of course, there are other tasks I can and will work on, but this was the big one. I think my imposter syndrome made me frame this exercise as a sink or swim moment. I created some unexpected bugs, I have more things to iron out, but I definitely feel like it qualifies as swim.
<br>
<br>
