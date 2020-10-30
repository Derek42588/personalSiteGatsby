---
title: "Ejecting"
date: "2020-08-11"
snippetImageName: "81120snippetAndFull"
fullImageName: "81120snippetAndFull"
fullImageAlt: "Two Zippers"
tags: ['React Native', 'Expo Bare']
subtitle: "Problems With Expo Bare"
snippetText: "I spent pretty much all of today attempting to eject our expo app to the bare workflow, which as far as I understand it covers all of our needs.  Half of the time, I was struggling with fixing path variables.  Obviously, once I figured out what the issue was, changing path variables is not difficult at all... but figuring out that that was the issue was what took time."

---
<br>
<br>
I spent pretty much all of today attempting to eject our expo app to the bare workflow, which as far as I understand it covers all of our needs.  Half of the time, I was struggling with fixing path variables.  Obviously, once I figured out what the issue was, changing path variables is not difficult at all... but figuring out that that was the issue was what took time.
<br>
<br>

####The Work
<br>
<br>
The hunt for the right stackoverflow answer lasted all day, and was unfruitful.  Right now, I'm stuck on an error in app:compileDebugJavaWithJavac.  None of the searches I've made off the error seem very relevant.  I've tried a few fixes, but none have worked yet and also, don't give me a lot of confidence -- should I be editing .java files to make the first build work?  Or is that just a patch over a deeper issue?
<br>
<br>
I think I need to work more inside Android Studio.  I guess I had thought I wouldn't need to -- I built a test, bare app with just react-native to ensure that it could run detox correctly, and it worked fine without ever opening the project in Android Studio.
<br>
<br>
Unfortunately, that's going to take a lot of time to figure out.  I think it's my next step, though.
<br>
<br>
It did take me a little while to realize it, but I forgot to run a very basic test to make sure I was looking in the right area.  I finally, after a lot of struggling, built a brand new, blank expo app, ejected it, and then tried to build.
<br>
<br>
That failed with the same errors.  Thankfully, that tells me that the issues aren't with any of the packages or configuration of our expo app, it lies with the ejection itself.
<br>
<br>

####What I Learned
<br>
<br>
I think for my own future, personal RN apps, I'm going to be staying away from Expo.  I simply don't see what value it provides, besides making initial setup easier.  I'd much rather start from a blank react-native app, ensure I'm properly configuring it from the docs, then to reach this point.
<br>
<br>
