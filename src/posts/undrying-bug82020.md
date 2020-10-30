---
title: "Neverending Bugs"
date: "2020-08-20"
snippetImageName: "82020snippetAndFull"
fullImageName: "82020snippetAndFull"
fullImageAlt: "Fire"
tags: ['React Native', 'Firebase']
subtitle: "The Bugs that Wont Die"
snippetText: "These bugs just ... won't... go away.  I'm kind of going crazy to be honest.  I've tried everything I can think of.  I have every type check in a place that could effect the component in question, and even a few that are only tangentially related but I added just for paranoia's sake."

---
<br>
<br>
These bugs just ... won't... go away.  I'm kind of going crazy to be honest.  I've tried everything I can think of.  I have every type check in a place that could effect the component in question, and even a few that are only tangentially related but I added just for paranoia's sake.
<br>
<br>
At least I know I've done all I can do.  What's done is done.  There's a new build tomorrow and it works or it doesn't.
<br>
<br>

####The Work
<br>
<br>
I started by feeling actually pretty good.  I caught a bug, worked it through from beginning to end, and reworked quite a bit of auth flow to fix it.  It seems to be working as expected every new user created is working correctly.
<br>
<br>
That ... should ... have fixed the issue, but after merging, we got yet another new error.  At the time, the dev lead and I were coding together working on trying to fix things.  He added some checks, we re-tested, and didn't get the same error, but I'm not conviced that it was a fix.  I just don't believe they were related.
<br>
<br>
But, of COURSE!  They weren't recreated.  That's the case way too often.
<br>
<br>
My big new feature, clearing cache on version, was merged.  The logic in it is more sound, but again, we just kind of breezed through things.  When it gets into the wild, that's a whole different animal.
<br>
<br>
My plan is to just make a million test users tonight.  I want to track these down.  It's my mission.
<br>

####What I Learned
<br>
<br>
Persisted data is a double edged sword.
<br>
<br>

