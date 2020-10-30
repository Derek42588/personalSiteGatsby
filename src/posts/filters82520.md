---
title: "Filters"
date: "2020-08-25"
snippetImageName: "82520snippetAndFull"
fullImageName: "82520snippetAndFull"
fullImageAlt: "Spotlight"
tags: ['React Native', 'Firebase']
subtitle: "Tweaking"
snippetText: "Continued work on the main feature of my sprint this week, and its in pretty good shape.  Once it fleshed out more, I realized I had to make some refactors and UX changes, but I like the way it turned out."

---
<br>
<br>
Continued work on the main feature of my sprint this week, and its in pretty good shape.  Once it fleshed out more, I realized I had to make some refactors and UX changes, but I like the way it turned out.
<br>
<br>

####The Work
<br>
<br>
I expanded and finished the functionality of the feature I described yesterday.  Thankfully, edge cases up came up quickly and allowed me to code them in.  It should work perfectly well for documents that no longer exist, or have a flag that we have in the DB indicating its something the user wouldn't want.
<br>
<br>
After some polishing on that, I realized a few things I'd need to do in the implementation.  First, I created a few helper functions for parsing, to make our search work as expected -- or as expected as possible at this point.
<br>
<br>
Next, we had a lot of repeated code, so I refactored it into a reusable component.
<br>
<br>
Lastly, our current implementation had never really expected empty data, but in this case -- filtering via searhces -- that would be necessary.  As such, I reworked a bit of it to make it more elegantly flow from empty to re-filtering.
<br>
<br>

####What I Learned
<br>
<br>
I already knew this part, but while designing this, I definitely was frustrated by the fact that Firebase doesn't support partial string searches by default.
<br>
<br>
I coded around it best I could, but for a more fully fleshed out version of this feature, we're going to need to implement a third party indexer.  Firebase's documentation recommends Algolia, and a few people I know recommended ElasticSearch.  I briefly skimmed through the docs of both, and (hopefully) they shouldn't be too hard to implement.
<br>
<br>
Since they'd be paid at the number of documents we'll have to support, I was hesitent to try out a version of it myself.  I'd rather report and see what we say at the next Dev meeting.
<br>
<br>
