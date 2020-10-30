---
title: "Ejecting, Continued"
date: "2020-08-12"
snippetImageName: "81220snippetAndFull"
fullImageName: "81220snippetAndFull"
fullImageAlt: "Shipwreck"
tags: ['React Native', 'Expo Bare']
subtitle: "Dejection Ejection"
snippetText: "Today, I continued work on ejecting our managed-workflow expo app to expo bare, to try and set us up to be able to run Detox e2e testing.  As of yet, I've failed."

---
<br>
<br>
Today, I continued work on ejecting our managed-workflow expo app to expo bare, to try and set us up to be able to run Detox e2e testing.  As of yet, I've failed.
<br>
<br>

####The Work
<br>
<br>
I am very happy to say that I was still able to contribute to this weeks build in a tangible way, as after a few more hours in the morning of getting nowhere, I switched over to a new branch and added a small feature.
<br>
<br>
It was a tiny addition, but before doing so, I refactored some repeated code I had written and that we were also leveraging elsewhere in the app to be a reusable component.  I'm very happy not only that I did that, but that I was able to quickly run through it, and make some meaningful additions to the app for this week.
<br>
<br>
So -- back to ejecting.  My error messages are no more meaningful, and my searches on stackoverflow no more helpful than yesterday.  I am glad that I made a few more test attempts.
<br>
<br>
First, as I wrote in yesterday's post, I had confirmed that ejecting from a blank expo project gave me errors no matter what.  Today, I decided to completely reinstall Android Studio. 
<br>
<br>
After doing so, I got pretty much the same errors -- both on our app, and a blank expo init app.
<br>
<br>
I also made a halfhearted attempt to simply init a blank react-native app, copy our app files over, and then work from there.  The build failed pretty immediately afterwards, so there are issues.  I don't know that this is the solution we want to go with -- basically, we'd be rebuilding our project -- but it might be worth testing further, if only to give me some better ideas of what errors to look for.
<br>
<br>
As mentioned, I will be moving this week, so I won't be able to work on the app thoroughly tomorrow or for most of Friday.  Thursdays are typically a build day, alongside team and dev wide meetings, so I'll have to miss that.  As such, I wrote out a pretty decent markdown of what I've attempted so far, outlining the errors, and other basic setup steps.
<br>
<br>

####What I Learned
<br>
<br>
I need to spend some more time inside of Android Studio.  I guess I've been neglecting it, because I'm assuming React Native will always do the work for me.  But I need to know the reasons behind the errors I'm getting better, and to do that, I have to learn what's going on there behind the scenes.
<br>
<br>
