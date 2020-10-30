---
title: "Meetings And Bugs"
date: "2020-08-03"
snippetImageName: "80320snippetAndFull"
fullImageName: "80320snippetAndFull"
fullImageAlt: "People At Meeting"
tags: ["Detox", "Expo", "React Native"]
subtitle: "Hopeful Sprints"
snippetText: "My ultimately unfruitful search for a way to get Detox and Expo working together this weekend paid of a little bit, as I was able to walk through our team lead the setup on his OSx/iOs environment.  Our work had to stop early due to other meetings, but we definitely got further than I was able to in my environment."
---

<br>
<br>
My ultimately unfruitful search for a way to get Detox and Expo working together this weekend paid of a little bit, as I was able to walk through our team lead the setup on his OSx/iOs environment.  Our work had to stop early due to other meetings, but we definitely got further than I was able to in my environment.
<br>
<br>
My next worry is how we're going to be able to write tests effectively, if his is the only setup where we can actually <em>run</em> the e2e and integration tests, but that'll be a worry for another day.
<br>
<br>
Besides that, I spent some time fixing some bugs (and think I did pretty well).  I'm not really doing very much fancy programming at the moment, but I have to believe that this will eventually be a valuable skill in a paying role.  Debugging has always been a challenge for me, but now that I know our stack, I'm definitely getting better at it.
<br>
<br>

####The Work
<br>
<br>
After the last deploy, we had a sudden influx of bug reports.  Unfortunately, they're on the live database that I hadn't been added to yet (was today), so I had to kind of just guess and muddle through to find what I had suspected the issue to be.
<br>
<br>
I've said it before, but incomplete data has definitely plagued the project, which I think can often be the case in a NoSQL, document-oriented environment.  Besides that, we definitely need to revisit our redux store.  We've made a lot of unnecessary and confusing slices, some that overlap, some that reference what you wouldn't expect them to.  Due to that, we were throwing some ugly usability errors.
<br>
<br>
I think I was able to identify them pretty quickly, and the fix was easy enough (just be more thorough in our loading checks).  I definitely think I need to go back and fine tune the store structure.  I should probably do a write up for our team afterwards, and before implementing anything.
<br>
<br>
Next, we had a few hours of meetings, both dev-oriented and not.  Our next sprints are set, and I'll be working on a few features, helping where I can with the detox and e2e setup, and otherwise being a bug catcher.
<br>
<br>
We're aiming for an almost complete styling overhaul (well, more like polishing, but still), which is fairly ambitious.  I do think that's where we're at, though.  Personally, I think styling and ironing out our current, MVP features is the most important thing at our current stage.  Work about getting something pretty and as clean as possible before moving to the pitch and funding stages.
<br>
<br>

####What I Learned
<br>
<br>
It feels really good to get something into the App Store.
<br>
<br>
Don't bite off more than you can chew.  Get some clear, defined goals in your sprints and once you <em>exceed</em> them, contribute in other areas.
<br>
<br>
