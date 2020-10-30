---
title: "Persistence"
date: "2020-08-02"
snippetImageName: "80220snippetAndFull"
fullImageName: "80220snippetAndFull"
fullImageAlt: "Hard Drive Innards"
tags: ["React Native", "Appium", "Expo", "redux-persist"]
subtitle: "Back to Features"
snippetText: "I began the day trying more and more ways to get our e2e testing up.  Despite deciding to switch to Appium the other day, I reconfigured some things and looped back around to Detox (which from what I've read, I think is the better tool).  I made small progress, I suppose, but still was unable to get anything going."
---

<br>
<br>
I began the day trying more and more ways to get our e2e testing up.  Despite deciding to switch to Appium the other day, I reconfigured some things and looped back around to Detox (which from what I've read, I think is the better tool).  I made small progress, I suppose, but still was unable to get anything going.
<br>
<br>
After clicking on the same dozen or so stackoverflow question's I've visited multiple times the past few days, configuring and reconfiguring and building and exporting and on and on, I just couldn't keep going.  E2E is vital and I'm now determined to eventually encorporate it, but after a few more hours this morning and afternoon, I literally couldn't spend any more time on it.
<br>
<br>
I then returned to a feature we'd like to implement in our project -- state persistence.  
<br>
<br>

####The Work
<br>
<br>
I've used redux-persist before in other, React projects, but obviously this was the first time I've used it in RN.  I spent a few hours on a zoom call with another member of the dev team who's been working on this feature, so I got a small glimpse into what he had already tried.
<br>
<br>
The main issue is really how we want our authflow to go.  After some tinkering, I was able to persist the slice thats important.  I do feel, though, like I'm not properly using firebase's auth listener.  On the one hand, we have too much logic invested in the actual user document.  On the other, why even listen to it if we're not going to leverage it?
<br>
<br>
I was able to get a minimal implementation working, before I decided to quit for the day.  For tomorrow, I'd like to really get into refactoring our logic checks and start moving it all to data that can be persisted -- and of course, hunt down the cases for where things <em>won't</em> be.
<br>
<br>

####What I Learned
<br>
<br>
Refactoring is even more of a nightmare when it's a collaborative project.  Due to the nature of the company as it is now, there are plenty of people who have come and gone, so we're riddled with legacy code that we haven't really cleaned up yet.  Many, many pieces of data and checks that were implemented but then abandoned, but are still throughout our reducers and components.
<br>
<br>
From trying to mess around with e2e testing, I dug into Android Studio for the first time.  I had set it up, of course, but I hadn't really configured it to work the best with our setup.  It is definitely, definitely worth while.  I think I sometimes breeze past setup because I want to get to the 'real' work, but making sure you've got the best configuration possible is way, way worth it in the long run.
<br>
<br>