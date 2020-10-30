---
title: "Bug Detective"
date: "2020-08-19"
snippetImageName: "81920snippetAndFull"
fullImageName: "81920snippetAndFull"
fullImageAlt: "Typewriter"
tags: ['React Native', 'Firebase']
subtitle: "More and More"
snippetText: "Unfortunately, I woke up to found that my feature to check against version and clear cache wasnt working as expected (if last logged build number !== current, etc).  For most of the morning, that's what I focused on."

---
<br>
<br>
Unfortunately, I woke up to found that my feature to check against version and clear cache wasnt working as expected (if last logged build number !== current, etc).  For most of the morning, that's what I focused on.
<br>
<br>
AFter that, it was back to the drawing board with the un-recreatable bugs.
<br>
<br>

####The Work
<br>
<br>
At first, I tried just moving the logic of my storage clear, which worked from clearing the AsyncStorage.  I figured it wasn't high enough in the app heirarchy.  Unfortunately, nothing I changed made a difference.
<br>
<br>
From the docs, I then tried to fiddle with the callback of the persistor, which only runs after store DOES get persisted.  Great, right?  Except, the components would be too far down the line of rendering before it ran.  And, its an async function, so it really doesn't play well with what we're trying to acheive.
<br>
<br>
Finally, I landed on a different approach entirely: working with a createMigration within the persist.  As far as I can tell (and another team member I had test it), its working much more like I'm expecting.  Fingers crossed there.
<br>
<br>
After that, I moved on to the pesky, persisting bugs.  I think I did pretty well, and my attempts at a fix today are closer to the mark (as close as I can get without being able to reproduce).  First, I tracked down faulty logic checks by logging into the user who had the issue on the live version, and then tracking down the data in the DB.  Unfortunately, it was a combination of a dumb logic check and lack of sanitation.  We're making big strides in sanitation, so I'm hoping those will clear up soon, via the DB team.
<br>
<br>
Next, I tried yet again to figure out the errors that our CEO is getting on build after build.  From the app flow, for the life of me, I can't figure out where its coming from.  I do feel more confident today, however, that if the cache clear feature works as expected, it will ensure he's not reading bad data from his device state.  Next, out of sheer frustration, I just dug through the components in debugger.  I noticed that we were passing null to our state on a property that was supposed to be a date.
<br>
<br>
It stemmed from parsing the data from the doc, which was a Firebase timestamp.  I simply never noticed the property, because to be honest, we're just not using it anywhere.  But the problem was the parse syntax we were using returned null.  By changing, I got the date correct as expected.  Again, I have no idea how this could be causing the CEO's specific problem, but here's hoping.
<br>
<br>

####What I Learned
<br>
<br>
Don't waste time by being too committed to your common fixes.  I've been so heavily using useEffect and other hooks, that I never even considered other options until I had to.  The reality was, useEffect was never what I needed to be doing.
<br>
<br>

