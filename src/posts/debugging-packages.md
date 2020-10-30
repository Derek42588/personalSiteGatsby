---
title: "Debugging and Package Hunt"
date: "2020-07-06"
snippetImageName: "70620snippetAndFull"
fullImageName: "70620snippetAndFull"
fullImageAlt: "70620snippetAndFull"
tags: ["GraphQL", "Prisma", "Postgres"]
subtitle: "Authentication, Etc."
snippetText: "More fun with Prisma and GraphQL today.  Had to spend some time first debugging an issue.  Not sure if I like the workaround, but at least it's working.  The issue: in the course, we closed off our Prisma server so that all client requests could only go to our Node server.  Good, makes sense to me.  It's a simple secret token, one that you just inject into various config files."
---

<br>
<br>
More fun with Prisma and GraphQL today.  Had to spend some time first debugging an issue.  Not sure if I like the workaround, but at least it's working.  The issue: in the course, we closed off our Prisma server so that all client requests could only go to our Node server.  Good, makes sense to me.  It's a simple secret token, one that you just inject into various config files.
<br>
<br>
For the project, you want to be generating your Prisma client's schema and keeping in that folder of your project.  In the course, the instructor had us do that through graphql-cli and a .graphqlrc config.  It wasn't working for me, and from googling the issue and reading the lecture Q+A's, the instructor's suggestion was to downgrade to previous versions.  Well, I didn't really want to do that, so I found a different work around, the fetch-graphql-schema package.
<br>
<br>
That worked, and all that was necessary was writing a new script in package.json.  But once we added the above level of security, that package would no longer work.  I dug around, but there were no options for passing through Authorization header tokens.  I tried messing around with a few other packages, but nothing worked.
<br>
<br>
I still have yet to try the workaround fix of downgrading packages.  In the mean time, I've substituted just downloading the schema directly from the GraphQL playground.  Not the most elegant, but it works.  But!  There was an issue there too.  For some reason, clicking that tab on the playground would give me just a blank screen.  The fix I found was changing it's settings (upper right hand corner), editing the config line "schema.disableComments" to be false instead of true.
<br>
<br>

####The Work
<br>
<br>
Today, I mostly just worked on some boilerplate setup for authentication inside our Node GraphQL Server.  Some old friends were the principal packages - bcrypt, jsonwebtoken.  I've been through this process before, but I definitely feel like I have a more solid undertstanding of it.
<br>
<br>
As an aside, sometiems I feel like I'm "losing ground" on what I'm learning, switching back and forth between libraries and tools like I do.  But at the same time, I'm not sure how else I can progress.  My improvements always come by just...doing.  I could probably be a little more methodical about my approach, but then again, who do I have to model after?  I'm just learning as I go along, as best as I can.
<br>
<br>
Back to the actual work -- I'm feeling more confident in writing GraphQL.  Andrew Mead, my current course's instructor, is very good at segmenting the work.  It's broken up into (pretty simple) challenges, but the flow of it is very effective.  Introduce a concept, write an example, have a challenge prompt to apply that logic, and then move on.  Then, after the underlying working concepts are introduced, refactor for better functionality.  This way, you really understand what you're changing and why you're changing it.
<br>
<br>

####What I Learned
<br>
<br>
I think it's a skill I'll just have to hone, like working up calluses on your fingers while learning guitar, but my eyes just glaze over when I try to <em>read</em> a function's documentation.  I've definitely improved, and have an appreciation for why they're written how they're written.  Where 6 months or so ago, the MDN definition of array.reduce() would have made my eyes glaze over, I can definitely parse it myself now.
<br>
<br>
Descriptive errors are a lifesaver.  That has to be one of the best things about GraphQL.  It's simple, so there's not <em>that</em> many things you can break, but when you do it tells you exactly where you've messed up.  
<br>
<br>
