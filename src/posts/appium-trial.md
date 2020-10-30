---
title: "Appium Trial"
date: "2020-08-01"
snippetImageName: "80120snippetAndFull"
fullImageName: "80120snippetAndFull"
fullImageAlt: "Sketches and Mobile Phone"
tags: ["React Native", "Appium", "Expo"]
subtitle: "More Trials ... And Errors"
snippetText: "So, more smashing my head against the wall trying to configure my next attempt at e2e testing, Appium.  In yesterday's post, I described my attempts to use Detox, and why I decided for now to switch to Appium instead."
---

<br>
<br>
So, more smashing my head against the wall trying to configure my next attempt at e2e testing, Appium.  In yesterday's post, I described my attempts to use Detox, and why I decided for now to switch to Appium instead.
<br>
<br>
I have mixed feelings about days like today.  By necessity, I have to spend most, if not all of my time not really...coding, or doing anything.  I'm just tweaking scripts, trying out packages, and fiddling with configuration.
<br>
<br>
But on the other hand, this is pretty necessary information.  While I haven't decided if I'd like to eventually pursue React Native jobs exclusively, e2e testing in a RN project seems even more necessary to me than a regular web app.
<br>
<br>
While I have baked in a certain level of difficulty in my own (lack) of the right environment tools, I can't imagine setting this up is easy in any setting.  Being able to show that I brought e2e testing to a project would be a very nice touchstone I could be proud of.
<br>
<br>
So, I got it "working" in the sense that I can see that it's speaking to my appium server, it's connecting to my emulator and opening the right APK, but none of my tests are working...yet.
<br>
<br>
It is frustrating, but I have to feel that I'm close to a solution.  I'm not entirely sure what the issue is, but I feel that either I'm not using the right selectors (though I'm working off of preconfigured tests, so I don't see why that would be the case), or the issue is that I'm not correctly letting the app connect properly.  What <em>seems</em> to be happening is that it launches, and while the app is loading, the test suite runs <em>before</em> the app has finished loading.
<br>
<br>
All I'm doing is trying to select an element that I labeled with the recommended props of accessibilityLabel and testId, and then verify that they're there.  I'll worry about all the rest after I can finally get that going.
<br>
<br>
I'd be very happy if I could just get the first integration test working, and I'm targetting being able to log in for that.  From there, I think a lot can be piggybacked on -- registering, doing the simple, necessary actions of post, message, etc. 
<br>
<br>
I do worry about getting into th e next layer of it, like correctly reading the right Redux state and DB calls, but I'll cross that bridge when I come to it.
<br>
<br>
I wish I took better notes throughout this whole process, because I know I'll have to reverse engineer a lot of steps to then walk the rest of the dev team through the proper set up.  The only issue was that I had to try so many different things, so many small variations on presets and libraries, that it was just a jumble.  I need to find something that works, first.
<br>
<br>