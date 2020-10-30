---
title: "End to End"
date: "2020-07-31"
snippetImageName: "73120snippetAndFull"
fullImageName: "73120snippetAndFull"
fullImageAlt: "Woman Holding Phone"
tags: ["React Native", "Firebase"]
subtitle: "ISO Cross Platform Support"
snippetText: "I did very little actual coding today.  Most of my time was spent trying to figure out what our project could use for real E2E testing.  We have a lot of issues we have to tackle before we can integrate that properly."
---

<br>
<br>
I did very little actual coding today.  Most of my time was spent trying to figure out what our project could use for real E2E testing.  We have a lot of issues we have to tackle before we can integrate that properly.
<br>
<br>
First, it's a React Native project, so that comes with its own issues.  Second, almost all of us are developing on an enviroment other than Mac, and I think only one person actually has a phyiscial iOs device.  Lastly, it was made with Expo.
<br>
<br>
I spent a <em>lot</em> of time today digging into our options.  Most of it was looking into Detox.  Detox seems to have the most information out there, but the problem is, it just doesn't play well with Expo.  
<br>
<br>
I think one of the guides I visited (many times today) had a pretty valid setup guide for Detox + Expo + iOs emulator, but as I don't have access to that, I'm not sure it's a viable option.
<br>
<br>
Given that people (apparently) got it working, I spent a lot of time tweaking configuration to see if I could make it work with an android emulator, but to no avail. 
<br>
<br>
Next, I dug into the other recommended e2e option -- Appium.  One comment I read was that it was even more difficult to configure than Detox, so I wasn't very hopeful.
<br>
<br>
For now, I'm giving up on Detox, and am going to try and see if I can find a viable Appium setup for our project.  It, too, is throwing me a lot of errors, but I'm betting that another half-day spent digging around stackoverflow and google can find me something workable.
<br>
<br>
In the end, though, I have two main takeaways -- a config and go e2e option for RN is desperately needed.  Secondly, I think another big re-tool for our app would be to just ditch Expo entirely.  Set up our configuration and build for our emulators, and not have to worry about the headache.
<br>
<br>
I imagine that proposal won't be met with a lot of enthusiasm, though.  For one thing, it just makes usability testing that much harder.  The dev team is relatively small -- the usability, design, UI/UX people would all have issues if we moved away from Detox.
<br>
<br>
Then again, maybe there's a solution to that.  I haven't looked into much, of anything, besides expo, since that was what was taught to me in my course and what this project uses.
<br>
<br>