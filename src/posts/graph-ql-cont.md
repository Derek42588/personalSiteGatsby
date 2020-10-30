---
title: "GraphQL - Cont."
date: "2020-07-03"
snippetImageName: "70320snippetAndFull"
fullImageName: "70320snippetAndFull"
fullImageAlt: "Query"
tags: ["GraphQL"]
subtitle: "Grunt Work"
snippetText: "Today I continued with my work in GraphQL.  I'm definitely feeling more comfortable writing queries, mutations, and working with the response data.  I'm excited to connect it with a front end and try to make a cohesive project with it, because I now see I was misusing it in in the previous project using it."
---

<br>
<br>
Today I continued with my work in GraphQL.  I'm definitely feeling more comfortable writing queries, mutations, and working with the response data.  I'm excited to connect it with a front end and try to make a cohesive project with it, because I now see I was misusing it in in the previous project using it.
<br>
<br>
Well, misusing isn't probably the right word, but I definitely wasn't taking full advantage of it.  In that project, I used both GraphQL and Redux to manage my data.  I'm sure there's some conceivable case for that, but definitely not for what I was trying to do.
<br>
<br>

####The Work
<br>
<br>
Something I thought of a lot today was relational data and how to ensure you're covering all your cases in updates and deletions.  This is obviously a key component to having a reliable database at all.  
<br>
<br>
Does such a thing as "data linting" exist?  For example, I wrote a mutation to be able to update a user... except I forgot to check whether the updated email was already in use (obviously a necessary component).  Some of this will be protected when writing "real" code, as the functions to complete each pieces of the operation will be abstracted into their own functions and with their own checks.
<br>
<br>
But there will always be smaller things that just get forgotten.  I'm not sure what the best practice for catching it would be.  Constant checks of your data, running all your queries after changes and making sure everything's responding in a logical way?  Manually keeping in mind all the relationships and monitoring for how changes will effect the linked data?
<br>
<br>
I think I just need more practice to figure out what the best way of ensuring my DB is pristine would be.  Definitely something to think about.
<br>
<br>

####What I Learned
<br>
<br>
Utility functions should be chosen for a reason.  I found myself rewriting a very common piece of code throughout my mutations.  Basically, you need to check if a piece of data exists every time before updating/deleting, and then throw a similar error when it doesn't.  So, I began to write a helper function in a utility file.
<br>
<br>
Except, I realized after I wrote the function two things: one, sometimes it's good to keep similar code explicitly written.  I want an explicit error saying what's happening in this case.  A helper function would work fine if I wanted to dumb that error down, but not in this case.  Two, think of what you'll actually achieve.  In my case, is running a simple, single line array.find() that much more verbose than calling a helper function that still has to return a piece of data, and would have to be passed two arguments?  
<br>
<br>
