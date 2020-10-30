---
title: "GraphQL Boilerplate"
date: "2020-07-10"
snippetImageName: "71020snippetAndFull"
fullImageName: "71020snippetAndFull"
fullImageAlt: "Servers"
tags: ["GraphQL", "Prisma", "React"]
subtitle: "Getting Things Talking"
snippetText: "I got less done today than I was hoping, but the goal of this blog was to just code every day, regardless of what I currently think of the quality of work I got done.  I do think I made some good steps forward, and by tomorrow, hope to have a nice boilerplate for my React/GraphQL/Prisma stack up and running."
---

<br>
<br>
I got less done today than I was hoping, but the goal of this blog was to just code every day, regardless of what I currently think of the quality of work I got done.  I do think I made some good steps forward, and by tomorrow, hope to have a nice boilerplate for my React/GraphQL/Prisma stack up and running.
<br>
<br>
To be honest, my brain just blanked a little bit today.  I've completed my GraphQL course by Andrew Mead, and definitely enjoyed it and would recommend it for the topic.  I'm excited to keep going with it and hope to be progressing with a new project with it this week.
<br>
<br>
The boilerplate was a lot easier than I anticipated, and more importantly, so was the configuration.  
<br>
<br>

####The Work
<br>
<br>
Beyond just stripping the DB and the schemas to its barebones, there wasn't much work in getting my backend boilerplate set up -- at least in the stage it's at now.  I know I'll have to go back to it and figure out how to fix it for my needs in hooking up my front end, but that will come after some more testing and boilerplate code.
<br>
<br>
The only initial problem I had was a conflict in babel-jest -- my backend has itt as a dependency, and then with my React boilerplate CRA also requires it which causes an error.  I could've spent more time on it, but as I wont need jest for the moment, I removed it as a dependency in the back end and let it live solely in the front end React client for now.
<br>
<br>
As of right now, though, I have a blank, boilerplate DB + backend, hooked up to my React front end, and they are communicating with one another just fine in the dev environment.  I've yet to add authentication, but am not anticipating much trouble in that area.
<br>
<br>
One issue, that I know I had trouble with last time, was that apollo-boost as it stands requires more configuration to be able to handle subscriptions.  We ran into that in my course when dealing with jest-testing our subscriptions, and the client setup there was fairly similar to the index.js front end solution I had made myself in my original GraphQL full stack project.  I had hoped that since this courses publication and now, apollo-boost would have a little more seamless integration with subscription data, but as I know I got it working in the past, knowing that it will work is good enough.
<br>
<br>
I do know that in my prior project, I didn't use the react-apollo hook of useSubscription, so I'm looking forward to leveraging that.  
<br>
<br>
The next goal, I think, before I get too deep into writing more front end code, is making sure my boilerplate works in every step, including deployment.  I want to config my backend server, deploy it to Heroku, have it serve my react front end, and make sure that all my queries, mutations (and most importantly), subscriptions are working on the front end.  And then I will be spending as much time as possible playing with subscriptions.
<br>
<br>

####What I Learned
<br>
<br>
Configuration can sometimes make me feel pretty stupid -- there's so much to remember, if you've got it set up incorrectly it'll throw errors that are hard to decipher, and pretty much shoot you in the foot before you even get going.  But that can't just be me.  Is it the mark of a good dev that you remember exactly the syntax of hooking up websockets in your front end ApolloClient, or is it good enough that you're able to do it from some documentation and searches, and then use that in future projects?
<br>
<br>
I learned that once you get more confident, you start to have a lot more fun.  GraphQL used to give me massive headaches -- different servers, all with syntax just slightly different enough to matter, all having to talk to one another.  But having done this course and setup, and run through every facet of my queries, types, schemas, mutations, and subscriptions, in the local Playground, the Prisma playground, the Production playground and via Apollo, I understand way, way more.
<br>
<br>
Not only that, I enjoy it more.  GraphQL should be about freeing you up as a developer -- the trade off is a bit of a learning curve, but once it clicks, it really is a beautiful tool.
<br>
<br>
