---
title: "Creating an Environment"
date: "2020-07-26"
snippetImageName: "72620snippetAndFull"
fullImageName: "72620snippetAndFull"
fullImageAlt: "People In Lab"
tags: ["React Native", "Firebase"]
subtitle: "Setting Some Foundation"
snippetText: "In yesterday's post, I complained a bit about the development environment of the React Native app I'm interning for.  Today, I tried to take steps to improve my work flow."
---

<br>
<br>
In yesterday's post, I complained a bit about the development environment of the React Native app I'm interning for.  Today, I tried to take steps to improve my work flow.
<br>
<br>
One thing that became clear to me today is that Windows is not an ideal development environment for React Native.  For one, there are just no simple solutions to being able to actually test ios on it.  If I got an ios device, I could test via expo.  There are some other hacky workarounds, but nothing that I want to invest the time in at the moment
<br>
<br>
Unfortunately, that just is what it is.  In a paid environment, I would assume they would be providing a Mac to develop on.  Another option is to consider side loading a Linux environment -- but I haven't really looked into how well Linux does with these same issues.  It may be similarly walled off by the Mac OS
<br>
<br>

####The Work
<br>
<br>
First, I set up a test DB.  I have absolutely learned my lesson here -- that has to be my first step, always.  If one isn't provided, just create your own.  Not having to worry about corrupting even a dev DB makes me feel a lot better about my smash and grab testing methods.
<br>
<br>
Next, I spent some time getting some DevTools up and running.  It took about an hour or so to get <a href = "https://github.com/infinitered/reactotron">Reactotron</a> properly configured, but mostly that was just figuring out what I needed to download, and then implementing fixes in the default, example setup to make it work with how our own Redux store works.
<br>
<br>
It definitely is helpful, but I'll need to keep going and find more solutions for debugging.  For one, while I now have Redux Dev Tools properly wired in and can see my actions and store live, I just need some more fine grained options.  To be honest, I've never really explored breakpoints and the VSC debugger.  I've used the VSC debugger, but only really in node projects, where I could fire up an individual file and test a function with debugger calls.
<br>
<br>
Another dev working on the team mentioned that was his primary tool, so clearly it works, I'll just have to do some testing to figure out how to set it up, and the proper way of running it.
<br>
<br>
I pretty much spent all my time running through my own test environment, and then fixing some bugs on the current version of the app as I went.  I did spend time trying to think of implementation for a new feature, but I think I just want to accomplish too much too fast.  Really, all I can do is wait until the next dev team meeting and go from there.
<br>
<br>

####What I Learned
<br>
<br>
All the time you spend setting up the proper conditions for yourself will pay off tenfold.  It is just so, so worth it.
<br>
<br>
It's annoying that I don't have access to all the tools, simply because of my own equipments limitations.  Though, I know there are workarounds and ways to accomplish at least most, if not all, of what I would want to do in an ideal environment.  I'll just have to spend time trying to figure those things out.
<br>
<br>
I'm enjoying my work.  I wish it was paid, of course, but I can't say I'm not learning anything.  Like I've said in previous posts, you can only work with what you've got.
<br>
<br>
I feel imposter syndrome every day when I open up this project's code, and feel a little overwhelmed at looking at all the methods.  Like trying to unwire a box of 60 foot extension cords that got tangled together over time.  Everything you learn, though, will take you one step closer.
<br>
<br>

