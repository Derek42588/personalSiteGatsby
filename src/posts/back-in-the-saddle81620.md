---
title: "Back In The Saddle"
date: "2020-08-16"
snippetImageName: "81620snippetAndFull"
fullImageName: "81620snippetAndFull"
fullImageAlt: "People On Horseback"
tags: ['React Native']
subtitle: "Last Minute Bug Catching"
snippetText: "Finally was able to return to a full day of work on our app.  It felt good to get back into the swing of things."

---
<br>
<br>
Finally was able to return to a full day of work on our app.  It felt good to get back into the swing of things.
<br>
<br>

####The Work
<br>
<br>
Pretty much everything I worked on today was bug fixes.  We'll be having a build coming out tonight, sent to the App Store, and then will be testing off of that.  For this current build, the Dev team lead didn't want any work on features, or anything that wasn't a crashing bug.
<br>
<br>
While a few of the bugs I worked on today I <em>would</em> classify as breaking, as far as UX, they weren't crashing or error bugs.  I spent most of my time trying to fix some tricky logic and reworking our auth flow, but it seems to be working well.  There was an edge case I couldn't code for, but I feel pretty confident that a) it'll be very rare and b) the negative consequences can be caught pretty easily in DB sanitation functions.
<br>
<br>
Lately, I've been feeling pretty aggravated by the end user vs. dev team dynamic.  Honestly, I feel like they expect a lot, and we're already stretched as thin as we can be.  Today, though, while trying to catch a specific bug, I found myself frustrated by a lack of a feature.  In all honesty, this feature is necessary.
<br>
<br>
In fairness, we have a bit of a hotfix in for its lack of functionality, and before properly resetting the cache, I was looking at an old version.  As an aside, that might be one of my least favorite things about expo -- it builds from cache, and you can think that you've properly loaded the latest version, only to realize that it hasn't.
<br>
<br>
In any case, I'll be pushing hard this week for that feature to be in the sprint.  It is necessary.

####What I Learned
<br>
<br>
In all my work trying to mess around with Expo ejecting, I've reconfigured my Android Studio and AVDs more than a few times.  When getting back to work on the app today, I was using the latest version of AVD as recommended by the React Native team.  I do have to say though, that the emulator is almost unusable when I have remote debugging on.
<br>
<br>
I was hesitant to revisit downloading more AVDs, since I feel like that was giving me issues when validating the right configuration for Android Studio during ejecting.  Honestly, it's untenable.  I think I need to either find a different live debugging tool or bite the bullet and find a downgraded AVD version so that it isn't so unbearably slow.
<br>
<br>

