---
title: "Agility"
date: "2020-08-10"
snippetImageName: "81020snippetAndFull"
fullImageName: "81020snippetAndFull"
fullImageAlt: "Dog Doing Tricks"
tags: ['React Native']
subtitle: "Another Week, Another Build"
snippetText: "On Mondays, we have both an organizational meeting and a Dev team meeting.  Today would have been fairly quick, actually...except for the fact that after our Dev team meeting I stayed on a Zoom with another dev and we coded together for about 5 hours.  It was enjoyable, though."

---
<br>
<br>
On Mondays, we have both an organizational meeting and a Dev team meeting.  Today would have been fairly quick, actually...except for the fact that after our Dev team meeting I stayed on a Zoom with another dev and we coded together for about 5 hours.  It was enjoyable, though.
<br>
<br>
I'm pretty nervous about this upcoming week.  The CEO wants to be releasing to the public pretty much now.  And yet, they still want more features added... we'll see how it goes.
<br>
<br>

####The Work
<br>
<br>
My assigned sprint is to get to work testing ejecting our app from Expo into vanilla RN.  From there, we'll be trying to implement Detox and e2e testing throughout our app.  After that, I'll be bughunting and working on a feature with another dev.  Oh yeah, and my girlfriend and I will be moving on Thursday...
<br>
<br>
Stressful week.  Today, though, I polished last week's sprint, reviewed the current bugs on our trello, and pushed some hot fixes.
<br>
<br>
After the Dev meeting, myself and another dev worked on implementing some search and filter features.  I am absolutely shocked that I never came across this before, in either this app or another of my Firebase projects, but we came up against issues when what were being returned from some DB calls were an array of promises.
<br>
<br>
Honestly, it took trial and error to even realize that was what was happening.  I guess so often in other areas of the app, the forEaches we were running were on snapshots, and our async calls were working correctly.
<br>
<br>
Anyway, long story short, a Promise.all and a call back and it was working.  I'm still shaking my head that we hadn't come across that before.
<br>
<br>

####What I Learned
<br>
<br>
I think if I were ever a project manager, I'd be <em>scheduling in</em> times where Dev could work on maintainence.  We have so much to do, and we'll never get it done if our sprits are always feature-focused.
<br>
<br>
Our CTO/dev team lead is pretty good at prioritizing.  Like I said earlier, my entire assigned sprint is pretty much maintainence work.  Right now though, its just kind of groundwork.  Off the top of my head I can think of a laundry list of things that need to get done, and need to be a priority while implementing (i.e. no work done on the app besides bug fixes): E2E, Unit Testing, moving our DB off of Firebase, implementing data analytics, and so on, and so on...
<br>
<br>