---
title: "A Gatsby Detour"
date: "2020-06-30"
snippetImageName: "63020snippetAndFull"
fullImageName: "63020snippetAndFull"
fullImageAlt: "Shop Page"
tags: ["Gatsby", "Contentful", "GraphQL"]
subtitle: "Placeholder Etsy Replacement"
snippetText: "I began my studying today by continuing my course and refactoring it to use GraphQL for state management, but took a detour at around noon.  A friend of mine asked in a group chat what we all thought of solutions for making a shop page for his wife, essentially a custom replacement for her current Etsy page."
---

<br>
<br>
I began my studying today by continuing my course and refactoring it to use GraphQL for state management, but took a detour at around noon.  A friend of mine asked in a group chat what we all thought of solutions for making a shop page for his wife, essentially a custom replacement for her current Etsy page.
<br>
<br>
Of course there are a million, billion options for that -- he is an engineer, but doesn't do much in the way of web design.  In the end I'm sure he'll use one of those solutions.
<br>
<br>
But I was inspired.  I wanted to do a quick mockup.  Pretend that this was a freelance client, and they wanted me to give them a solution and a quick mockup.
<br>
<br>
That's the kind of challenge and information I should be able to work off of at this point in my career, no?  Not only that, I knew a solution that would work well in the confines of the problem: a mix of Gatsby and Contentful.  End product (a mockup) <a href="https://mrs-winguyen.netlify.app">here</a>
<br>
<br>

####The Work
<br>
<br>
I got lost in the weeds a bit trying to do design.  I had my boilerplate already wired in (Gatsby is what I use for this site, after all), but then I definitely spent a little too much time trying to design.  This was supposed to be a mockup, not an end-product.  Why was I wasting time trying to tweak the page designs, etc?
<br>
<br>
The real focus was showing how easy it would be to set up a shop through these tools.  If this was a real client, you shouldn't expecting them to code anything, or have any knowledge of design, etc.  Contentful handles that -- work with the API they provide, and a client who wanted to make their own shop only has to create new products (or whatever you like) on a nice, graphical end point, and Gatsby will statically generate the pages for you.
<br>
<br>
The real focus was showing how easy it would be to set up a shop through these tools.  If this was a real client, you shouldn't expecting them to code anything, or have any knowledge of design, etc.  Contentful handles that -- work with the API they provide, and a client who wanted to make their own shop only has to create new products (or whatever you like) on a nice, graphical end point, and Gatsby will statically generate the pages for you.
<br>
<br>
I'm pretty happy with the end result.  This is a completely reasonable solution to the "prompt".  There are a few "downsides" -- more like tradeoffs -- that I can see.  Some of the other solutions give the client more freedom in design + implementation -- that is, their individual static pages, product pages, etc, they can design with wordpress-like features.  Not too hard for someone who isn't a developer.
<br>
<br>
But this way, while more of the work has to be done by the developer themselves, offers way more flexibility.  You're able to design, limited only by the developer's skills, not an e-commerce plugin's.  All we're getting from the API endpoint is a GraphQL query.  What we do with it is entirely up to us.

####What I Learned
<br>
<br>
It was really good to give myself this "exercise".  Obviously, it's not very meaty or fleshed out.  I always knew I had the knowledge to do something like this -- but it was theoretical until now.  The actual practice of starting it, writing it from scratch, and deploying it was incredibly valuable to do.
<br>
<br>
I think it looks clunky, and if I were pursuing a freelance career, I think this taught me how valuable a library of components + boilerplates would be.  Let's say I had another friend of a friend, who really did want to spin up a shop/blog/site quickly.  Being able to demonstrate not only features but a variety of designs, quickly, all with the polish of looking professionally done (and not like I just downloaded a WordPress theme) would be key.
<br>
<br>