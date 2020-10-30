---
title: "Testing, Testing, Testing"
date: "2020-07-25"
snippetImageName: "72520snippetAndFull"
fullImageName: "72520snippetAndFull"
fullImageAlt: "People In Lab"
tags: ["React Native", "Firebase"]
subtitle: "My Kingdom for a Clean Environment"
snippetText: "In previous posts, I've definitely given a lot of lip-service to test databases and test suites.  I probably couched it every time with something like -- I don't know if I need it in my personal projects, but I can see the benefit in a team environment blah blah blah."
---

<br>
<br>
In previous posts, I've definitely given a lot of lip-service to test databases and test suites.  I probably couched it every time with something like -- I don't know if I need it in my personal projects, but I can see the benefit in a team environment blah blah blah.
<br>
<br>
Well, that's right on the money.  I think I learned a few very important lessons today.  First and foremost -- if I ever even think that a project I write might have contributors other than myself, set it up in the most pristine conditions possible.  It will save <em>so</em> much headache.
<br>
<br>

####The Work
<br>
<br>
For the majority of the day, I messed around trying to find a fix for the 'break' I introduced yesterday.  I was able to bring the functionality back to what it was before I introduced the live chat feature.  I was limited in adding some additional functionality by the structure of our data.
<br>
<br>
I do feel confident that eventually I can arrive at a fix that will cover all of these bases.  For now, I'm okay with where it's at currently.  After spending hours trying different tweaks -- limited by the environment -- I needed to work on something different to clear my head.  I spent some time today also trying to dive into bugs.
<br>
<br>
React Native isn't all that scary.  I feel pretty confident that I can code in it and do some of the front end for this project just by reviewing the already written code and referring to the docs.  That's a pretty nice feeling.
<br>
<br>
The work on the bugs was varied, and had me switching all over the app.  I really appreciate the setup of a Trello board dividing all the tasks into categories, and having specific assignments tagged in your Sprints.  That kind of structure really helped me today.
<br>
<br>

####What I Learned
<br>
<br>
After today's work, it's abundently clear to me that I need to set up a more effective dev environment.  I'm limited by my unfamiliarity with React Native, but after trying to debug listening to the expo-cli console log all day, I know that I absolutely need a better solution.
<br>
<br>
I definitely need to figure out an emulator situation.  Seeing bugs tagged as ios, but with my only environment options right now running it on my own android devices from the expo-cli, I feel like I'm not fully contributing, and that also I can't even count on my tests since I'm only testing on one environment.
<br>
<br>
Next, I think I really need to push for some sort of test database.  When trying to test user bugs, we're having a ton of issues with valid data.  Having to create a user, manually delete it on the firestore, and then recreate it to test again just adds so much unnecessary time to my tests.
<br>
<br>
I need to do some groundwork to make sure I'm working smarter.  If I have to spend a day just on setting up tools and environments, and maybe even my own cloned test database, it will be worth it.  It will save me so much time, time that was wasted today just constantly running back through the same inputs, deletions, and data checks I had to run over and over and over.
<br>
<br>
