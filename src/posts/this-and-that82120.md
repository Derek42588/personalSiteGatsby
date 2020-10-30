---
title: "This and That"
date: "2020-08-21"
snippetImageName: "82120snippetAndFull"
fullImageName: "82120snippetAndFull"
fullImageAlt: "Lake at Night"
tags: ['React Native', 'Firebase', 'TypeScript']
subtitle: "Small Snippets, Challenges"
snippetText: "So, we got a build out today and are submitting to the App Stores again.  Last night, I tested as much as I could.  I definitely got UX bugs, and there were points I needed to kind of tap around the app to restore regular function.  However, I got no crashing bugs, and nothing that would indicate a DB error.  Obviously these need to be fixed, but if thats the worst the user gets at this point, I will take it."

---
<br>
<br>
So, we got a build out today and are submitting to the App Stores again.  Last night, I tested as much as I could.  I definitely got UX bugs, and there were points I needed to kind of tap around the app to restore regular function.  However, I got no crashing bugs, and nothing that would indicate a DB error.  Obviously these need to be fixed, but if thats the worst the user gets at this point, I will take it.
<br>
<br>
Maybe I'm seeing ghosts, but I'm definitely worried about whether or not we had enough proper testing.  We have a whole, large UX team.  Additionally, every member of the company is supposed to be minimally testing, in addition to the focused tests UX does.  I think we got a very light amount of outside (non dev) testing for last night's build.  We'll just have to see.
<br>
<br>

####The Work
<br>
<br>
I think I worked straight from 7:30 AM to about 8:30 last night, so I was fried.  I had told another dev team member I'd take a look at some issues he was having in refactoring one of my reusable components this morning.
<br>
<br>
The issue was minor, and was able to fix it pretty quickly.  I felt a little silly that the issue with his implementation didn't immediately come to me -- he was calling a setState and then reading from that immediately.  I stared at it for a little while before finally realizing we were expecting data that would only be updated after the async setState call.
<br>
<br>
It's kind of funny how little that comes up in the practice of the app.  Obviously, we never set state directly.  I'm just surprised with our large list of old code, there weren't other instances of it.
<br>
<br>
AFter that, I realized (late) that we weren't correctly updating the DB for a property in all cases, only cases where the property didn't exist.  I patched a quick fix, but the dev team lead had already started building for the stores and didn't want to run another one.  Thankfully, this issue wouldn't really matter in the live store, as it is dependent on a new build.  Once they have a new build, they'll have this new code, and it'll work as expected.
<br>
<br>
I attended the React Workshop we have for members of the company who want to learn React/JS/React Native.  I sometimes feel that the dev team lead has unrealistic expectations for people being able to jump into these frameworks.  After all, it took me a long time to get to the level of competency I do have, and of course, I still have a lot to learn (I always will).  Then again, I'm not coming from a strong coding background, having learned from scratch instead.  Maybe it's a lot easier of a jump if you have a lot of experience with Python, Java, or C++.  I do remember a lot of my initial issues weren't with React itself, but rather feeling shaky with JS.  I do feel like I'd be comfortable trying to advance my knowledge in a new language, now that I have a stronger foundation.
<br>
<br>
Lastly, for lack of anything else to do, and since I had a headache and wanted to take a lighter sort of day, I turned back to some leetcode challenges.
<br>
<br>

####What I Learned
<br>
<br>
Why don't recursive solutions occur to me?  For one of the leetcode challenges, it was such a simple solution once it clicked.  I just never would have begun to think of it.  I think I need to identify more blind spots like this, and purposefully check at points if I'm ignoring solutions like that.
<br>
<br>
I think a good challenge for myself would be to try and never use for loops for a little while.  When you start off with them, you get lost in the logic of it, and you might not even consider a better, cleaner, more efficient, and faster option.
<br>
<br>

