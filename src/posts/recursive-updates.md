---
title: "Recursive Updates"
date: "2020-08-04"
snippetImageName: "80420snippetAndFull"
fullImageName: "80420snippetAndFull"
fullImageAlt: "Staircase"
tags: ["React Native", "Firebase"]
subtitle: "The Perils of NoSQL"
snippetText: "More database woes.  Part of my sprint for this week was implementing the feature of updating our user profiles.  That had it's own challenges, but nothing too formidable.  The issue, really, lays with the database."
---

<br>
<br>
More database woes.  Part of my sprint for this week was implementing the feature of updating our user profiles.  That had it's own challenges, but nothing too formidable.  The issue, really, lays with the database.
<br>
<br>
We come closer and closer to a wide, live release, but there is still much left to do.
<br>
<br>

####The Work
<br>
<br>
As mentioned, implementing updating our profiles wasn't too bad.  With props and minimal conditional rendering, I really only had to slightly tweak the signup forms and then add a little bit of database logic in the store actions.
<br>
<br>
I was pleasantly surprised to play around with some of the Navigation components within React Native.  I hadn't had much reason to muck around with our Navigation context beyond calling screen names and the navigate function, but it was logical and easy enough to reconfigure.
<br>
<br>
The only hanging point right now is live reloading the images on edit.  For some reason it works sometimes, and not on others.  I would have thought that it <em>sometimes</em> working would lead me to the error, but it doesn't seem to be throwing off the errors I'd expect.  Perhaps it's in the incomprehensible warnings, though I worked through those and coulnd't find anything that seemed the likely culprit.
<br>
<br>
I'm not too worried about that, and am confident I'll smooth that edge tonight or tomorrow.
<br>
<br>
The real sticking point at the moment is that we've structured our collections in a pretty... messy way.  For example, a user makes a post.  Rather than storing simply the userId and then reading the <em>user<em> data necessary for a post as you load a Post Collection item, we also store things like say, username, right on the post.  So, I update the user, and that works fine... except a post that they made prior to their update doesn't recursively update.
<br>
<br>
Of course, I could then write in the logic to go through everywhere the reference ID is, and then update the fields that need updating... but that is very data hungry.  A simple update would then cascade dozens and dozens of read/writes.  That is the trade off, though.  Instead of having to read two items for the post feed, we read one and store only the necessary reference data.  Something to think about.  I think the coding itself isn't much of a challenge, but there will be a lot to do with any sort of refactor.
<br>
<br>

####What I Learned
<br>
<br>
I think, perhaps, we hadn't considered growing DB needs enough while working on the MVP.  We added things to make things work, as needed, but then what's to consider when we need to change something?  It's a waterfall of necessary changes.
<br>
<br>
Is that avoidable, though?  That's simply the double-edged nature of a document-based DB.  
<br>
<br>
I think maybe without even putting in a pull request to the master branch, I should try both implementations (abbreviated, at least) and take a look at how it feels from a usability standpoint.  Is it better to scaffold on more to the editing functionality?  Make it very, very data heavy, but then our reads are relatively painless?  Or is doing the work now in setting reads up to require less "doubled" data, will that make the collections themselves more flexible?
<br>
<br>
