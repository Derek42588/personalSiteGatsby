---
title: "Brain Teasers"
date: "2020-08-05"
snippetImageName: "80520snippetAndFull"
fullImageName: "80520snippetAndFull"
fullImageAlt: "Puzzle"
tags: ["React Native", "Firebase", "JavaScript"]
subtitle: "Feature Work and Challenges"
snippetText: "Continued on with the edit user feature today.  I'm happy, but I also could have improved in my implementation.  Then again, that's what putting up branches for testing is for, right?  It works, with some small usability issues.  While I could have hacked away at it and tried to fine tune on my own, that's what usability testing is for."
---

<br>
<br>
Continued on with the edit user feature today.  I'm happy, but I also could have improved in my implementation.  Then again, that's what putting up branches for testing is for, right?  It works, with some small usability issues.  While I could have hacked away at it and tried to fine tune on my own, that's what usability testing is for.
<br>
<br>

####The Work
<br>
<br>
I refactored a few of our components to better deal with the issue I had mentioned in yesterday's post, where if the user changes their avatar image, it doesn't live refresh inside our form component.  Strangely enough, it does when a user hasn't signed up yet, but honestly I think we're just getting some finicky DB responses.
<br>
<br>
I changed and added some checks for whether I'm inside an image being edited or uploaded (same component as any other image we're getting off of our DB).  In the end, it works, but the loading needs to be a little smoother.  
<br>
<br>
Next, I started to take a whack at our recursive updates.  I have implementations for both, but I don't really want to push them to the branch before the team meets again.  Honestly, either can be implemented, but it really needs to be done after we make a decision on how we're going to move forward with the data.  The only thing that a user can really update that needs to be reflected in places other than that user's own document is their avatar and their name.
<br>
<br>
As I mentioned in yesterday's post, let's take for instance that we have a blog post feed showing posts from all users.  In that component, it's reading from a collection of blog posts.  The user's id is referenced (inside a nested object, something we'll have to fix as firebase can't search beyond the first child layer) inside a prop object.  Inside <em>that</em> object is where the user's name is being stored.
<br>
<br>
So, I as a user go to update my name, it reflects fine on my profile, shows up fine in any new posts or messages I make, but if I go to that blog post feed and view a post I made in the past, that post is referencing the name of the user as it was at that point in time.
<br>
<br>
We could refactor to read live on the front end, or recursively write on update (after fixing the nested id issue).  Unfortunately, both are read heavy and data hogs.  I tend to lean towards thinking that reading the data live is better for now -- if this is the <em>ONLY</em> places we'll ever need to read user data, fine, lets limit it and speed up the process that way.  But if we implement more features that need to reference the user, and maybe even data that isn't just their name, I tend to think getting in a refactor now to just read their name live, while data costly, is the better solution.
<br>
<br>
After that, I tried to do some LeetCode challenges.  If this company never gets going, I'll have to go back to the dreaded job hunt, and while I'm feeling way more confident about my real world experience, I still am intimidated by the thought of a coding interview.
<br>
<br>
Hopefully by spending time practicing exercises, I'll feel more confident if it ever comes to that.
<br>
<br>