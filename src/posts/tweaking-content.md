---
title: "Tweaking Content"
date: "2020-07-29"
snippetImageName: "72920snippetAndFull"
fullImageName: "72920snippetAndFull"
fullImageAlt: "Tuned Guitar"
tags: ["React Native", "Firebase"]
subtitle: "Finishing Up an MVP"
snippetText: "Unfortunately, one of my fixes from yesterday wasn't working on my team lead's devices.  I guess I get to say the famous line of -- it works on my machine!"
---

<br>
<br>
Unfortunately, one of my fixes from yesterday wasn't working on my team lead's devices.  I guess I get to say the famous line of -- it works on my machine!
<br>
<br>
Most of my work today was just going through and trying to firm up my assigned tasks, as we still have a deadline for tomorrow to get a build out for the app stores.
<br>
<br>
At times, I was a little lost as to what to try.  For the most part, though, I think that was just because I had finished my personal sprints, more or less (or as much as I could do until my pull request was merged).
<br>
<br>

####The Work
<br>
<br>
A big chunk of work this morning was spent on trying to fix a swiping function.  There were issues with the documentation of the library we're using for that component, but after tweaking, I was able to get it working.  Now, I had thought I had gotten it working even without this implementation yesterday.  With more proper configuration, though, I'm confident this should work across all platforms.
<br>
<br>
Next, problems with a form.  I think my unfamiliarity with React Native played a role here, as my attempted fixes really didn't make much of a difference.  One in particular was making me want to dig further into how StyleSheet.create works, exactly, as I was getting some unexpected results.
<br>
<br>
In the end, my fix was just applying the implementation of the same type of component from another part of the app where it <em>was</em> working to the broken part.  Not the most satisfying solution, but it works for now, and hopefully I can figure out the reverse-engineering reason why later.
<br>
<br>
After working on my sprint content, I ambled around through our bug reports and various trello cards, but in the end, figured I had done what I could before tomorrow's next dev meeting.  Afterwards, I went back to work through more of the React Native course I had started.
<br>
<br>

####What I Learned
<br>
<br>
Its interesting trying to learn from a beginner-to-proficiency type of course, while simultaneously actually working in the framework on a live project.  Pretty much everything the course has gone over, I've already figured out for myself via documentation.  I could probably skip enormous chunks of the different sections, but I am paranoid and always want to be extremely thorough.
<br>
<br>
I am feeling pretty comfortable with the basics of RN.  It's a pretty nice framework.  One thing I'd like to learn more of is getting used to its styling quirks.  There must be ways to set up something a little more robust than StyleSheet create.
<br>
<br>
Also, I think it'd be beneficial to learn something about its best practices for styling.  I noticed off-hand that StyleSheet create doesn't even support css grid -- fair enough, but why?
<br>
<br>