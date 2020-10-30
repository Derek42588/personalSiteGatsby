---
title: "Query Thoughts"
date: "2020-07-07"
snippetImageName: "70720snippetAndFull"
fullImageName: "70720snippetAndFull"
fullImageAlt: "Trees With Question Marks"
tags: ["GraphQL", "Prisma", "Postgres"]
subtitle: "Thinking About Resolvers"
snippetText: "Another day, more GraphQL.  I really am enjoying my time spent with it.  I think, also, that I'm getting a better grasp on back-end in general.  Whereas before it was more just -- things I have to set up to make things work right -- now I'm seeing the bigger picture a bit better.  That's not to say that I've neglected back end study, but in the context of what I've been learning so far, there just wasn't much to learn about it beyond hooking up a DB, and maybe some REST endpoints."
---

<br>
<br>
Another day, more GraphQL.  I really am enjoying my time spent with it.  I think, also, that I'm getting a better grasp on back-end in general.  Whereas before it was more just -- things I have to set up to make things work right -- now I'm seeing the bigger picture a bit better.  That's not to say that I've neglected back end study, but in the context of what I've been learning so far, there just wasn't much to learn about it beyond hooking up a DB, and maybe some REST endpoints.
<br>
<br>
Take, for example, my forehead game app.  That leveraged Firebase, the wonderful BaaS google solution.  That was a great tool to learn, but like the name says, its a backend replacement, more or less.  By trying to make a more in depth GraphQL project, I feel like I'm going to learn a lot more about the inner workings.
<br>
<br>
I've decided after I finish this course, another new project is in order.  I might expand my game idea, and add different game types, only this time with the backend being my Prisma/GraphQL/Postgres solution here.  I'm a little nervous about putting it all together, but I think it will be really rewarding and bring me another step further in my self-education.
<br>
<br>
My main goals for it: learn the pitfalls and functionality of hooking up my stack.  In this case, I'm imagining GraphQL/Prisma/Postgres, Express, React, Apollo and Node (ah yes! the classic GPPERAN stack).  I've done it before, but I know that only practice and the context of applying it to my own personal projects makes it feel "real" and stick.    
<br>
<br>
Then, of course, the inevitable bugs in moving to production and live hosting it.
<br>
<br>
My main goals for it: learn the pitfalls and functionality of hooking up my stack.  In this case, I'm imagining GraphQL/Prisma/Postgres, Express, React, Apollo and Node (ah yes! the classic GPPERAN stack).  I've done it before, but I know that only practice and the context of applying it to my own personal projects makes it feel "real" and stick.    
<br>
<br>
Finally, I want to recapture the functionality of what I acheived with my game app, but with this stack.  Namely, live data and instanced game rooms.  From previous experience I know it will entail websockets (though who knows?  There might be some easier config options that I overlooked/misunderstood when I was first looking for solutions in my first GraphQL app).  I want to completely compartmentalize my React code and apply some good, clean architecture.  No "fixes" like in my last app where I had to move data to the top level parent.  I want to leverage containers and effect hooks/lifecycle methods properly so that everything is not only where it needs to be, but also the mount process doesn't give me errors like last time.
<br>
<br>

####The Work
<br>
<br>
Today was more work on authentication, and the logic of tweaking the public API to only expose the data that is proper for the proper queries.  It was definitely good practice.  A lot of brain teasing about making the proper queries, applying the right logical checks between both the auth context and the return data.
<br>
<br>
Some of the shine of prisma (not much! it's still amazing) came off for me today when I realized how much configuration is still necessary in your public server to make it respond the way it needs to.  For example, protecting query resolvers after authentication isn't *just* a matter of adding an auth check, when you have relational data that exists on multiple queries.  If you have one that isn't auth checked (which is logical, the working example in my course is all users authed or not can see published posts), you have to protect data not just on the posts query, but also on the users query (or any other query you want to think of as an example) which could then select posts and then show unpublished posts through nested queries of its relational data.
<br>
<br>
But that's the beauty, really.  The solution (Type Resolvers) makes sense, and you as the programmer have all the control.  I'm excited to keep going with it.
<br>
<br>

####What I Learned
<br>
<br>
Think about what you're trying to accomplish in your queries!  I spent a lot of time today applying a lot of conditional logic to a query within my public-exposed GraphQL server.  It was only after I realized that I didn't need to cover every case within one query, but instead could create a new one(s) to expose different responses that it started to make sense.
<br>
<br>
Such an obvious fix, but sometimes those are the things that don't come immediately.  
<br>
<br>
