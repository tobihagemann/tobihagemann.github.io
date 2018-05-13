---
layout: post
title: "Making Vector Graphics Like Nerds"
date: 2012-10-15
activelink: /blog/
stylesheets: ['/css/blog-post.css']

excerpt: "I'm working on a minor update for Spectrum Run. As for now, you can only see the global ranking of your scores in the \"End Game\" screen. I want to add friends ranking to it, so you don't have to switch to Game Center all the time to check your ranking. Instead of using texts I decided to visualize these separate rankings with icons."
---
<div class="text-center">
  <figure class="figure float-md-right" style="max-width: 80px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2012-10-15-friends-icon.png" | prepend: site.baseurl }}" alt="Friends Icon"/>
    <figcaption class="figure-caption">Friends Icon</figcaption>
  </figure>
</div>

I'm working on a minor update for Spectrum Run. As for now, you can only see the global ranking of your scores in the "End Game" screen. I want to add friends ranking to it, so you don't have to switch to Game Center all the time to check your ranking. Instead of using texts I decided to visualize these separate rankings with icons.

I love vector graphics for obvious reasons, but I have never done a single one completely on my own. Sebastian Stenzel ([overheadhunter][gh-overheadhunter]{:target="_blank"}), a very good friend of mine, helped me out and we spent over 2 hours making this quite simple looking abstraction of an upper human body. Why did it take so long? Because we didn't use any graphics software, but made it the nerdy way – only plain text with visual assistance of HTML. I was really whining a lot, because I didn't understand the relations between the numbers, so he did the most work, but it was a fun and good lesson! Maybe next time we should use a collaboration software, because Dropbox wasn't that optimal! :laughing: Explaining visual stuff in chats sucks.

[Here][friends-icon] is the SVG path (you can see it in the source code) and feel free to use it, if you also need it somewhere in your projects! :smile: The green lines form the end product, you can ignore the black lines. These are just connections between the control points of the Bézier curves.

[gh-overheadhunter]: https://github.com/overheadhunter "Sebastian Stenzel on GitHub"
[friends-icon]: {{ "/assets/2012-10-15-friends-icon.html " | prepend: site.baseurl }} "Friends Icon's SVG Path"
