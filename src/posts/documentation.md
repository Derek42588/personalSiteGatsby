---
title: "Documentation"
date: "2020-07-15"
snippetImageName: "71520snippetAndFull"
fullImageName: "71520snippetAndFull"
fullImageAlt: "Documentation"
tags: ["Apollo"]
subtitle: "Reading Documentation and Cache Persistance"
snippetText: "For lack of anything specific to work on today, I thought a good exercise would be to work through Apollo Client's documentation in full, and see what I learned."
---

<br>
<br>
For lack of anything specific to work on today, I thought a good exercise would be to work through Apollo Client's documentation in full, and see what I learned.
<br>
<br>
It turned out to be a great decision!  I feel like I learned a lot, and honed the critical skill of learning through documentation alone, rather than a course, book, and so on.
<br>
<br>

####The Work
<br>
<br>
Something that I saw over and over in the documentation for Apollo Client (3.0 at the time of this writing) was the emphasis for swithcing over to Hooks (which I love).
<br>
<br>
Not only that, I had no idea that apollo-boost was now deprecated in Apollo Client 3.0.  I've been using it throughout my projects, and will now refactor my boilerplate to remove that and use the recommended library.
<br>
<br>
That definitely relates to something I think that has tripped me up consistently in the past.  I go through courses, and depending on when they were written, they reference older versions and deprecated usage.  Being able to see the current recommended usage via the documentation was extremely helpful.
<br>
<br>
Going through all the documentation, even for methods that I felt comfortable with, really cemented the syntax for me.  
<br>
<br>
Another thing about learning via a course, they're almost exclusively a shallow dive.  They cover the most common use, for sure, but the edge cases are never explored.  And while I may never use 90% of the options in the individual hook APIs here, learning about them, and the why/what/how of what they do gives me a much better idea of the library.
<br>
<br>
Finally, it gave me an idea of something to implement!  It referenced options for cache persistence, and since that hadn't occurred to me yet, I figured it was a perfect time to implement it.
<br>
<br>

####What I Learned
<br>
<br>
My latest React course went over Apollo Client + GraphQL, and in a section comparing it to Redux, one of the biggest Cons against Apollo was how much more robust Redux was in support libraries, documentation, and community use.
<br>
<br>
That was clearly easy to see when I started to implement the cache persistence.  All the documentation out there for one of the recommended libraries, apollo-cache-persist, referred to Apollo Client 2.0.  Now, Apollo Client 3.0 was only officially released yesterday, but it's been around in beta for a while.  
<br>
<br>
The only way to both seed your cache with initial data, and to still use the cache persistor, was to write your own helper utility functions.  I was able to figure it out and apply it just fine, but compared to Redux's persistance options where you pretty much just instantiate a persistor, wrap it around your components, and it works out of the box?
<br>
<br>
That's not to say I'm down on GraphQL and Apollo, just food for thought.
<br>
<br>
