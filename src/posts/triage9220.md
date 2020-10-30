---
title: "Triage"
date: "2020-09-02"
snippetImageName: "90220snippetAndFull"
fullImageName: "90220snippetAndFull"
fullImageAlt: "Drawing of Ambulance"
tags: ['React Native', 'Firebase']
subtitle: "Bugfixing"
snippetText: "Back to the usual of hunting down bugs.  I felt pretty good about what I got done for the day.  It's been a busy week, and I feel like I've hardly been able to catch my breath at times."

---
<br>
<br>
Back to the usual of hunting down bugs.  I felt pretty good about what I got done for the day.  It's been a busy week, and I feel like I've hardly been able to catch my breath at times.
<br>
<br>

####The Work
<br>
<br>
We're trying to transition to two week sprints, week one where we exclusively work on features, week two where we exclusively hunt down reported bugs for those new features.
<br>
<br>
I think it's a great idea, and one I've been pushing for for a while.  One slight hiccup was that we had some issues that stem only from some choppy merges, so unfortunately, the majority of what we're dealing with right now are errors that were caused by <em>that</em> rather than any new UX testing on new features.
<br>
<br>
I think I got a handle on the major offenders, though.  We should be getting a new build out soon, and then afterwards, we can more reliably expect our reported issues to be due to our actual feature work.
<br>
<br>
I am worried about the state of our DBs, though.  We've been getting a <em>lot</em> of reported errors about bad passwords, deleted users, etc.  I've described some of these issues in previous posts, but how are we supposed to determine if its user error, sloppy data purging of the live DB, or an (honestly, catastrophic) failure of DB functions?
<br>
<br>

####What I Learned
<br>
<br>
A little bit of structure goes a long way.  Our reorganization of the UX trello board has made triaging so much better.
<br>
<br>
I wonder if it's actually against the odds that we haven't had large, rippling merge issues before.  Having them, though, just goes to highlight how much can go wrong from it, and how much time had to be spent on rolling it back.  I like to think I'm pretty careful with my merges, but I'll be doubly so from now on.
<br>
<br>
