---
layout: post
title: "Spectrum Run 1.0.1 Update"
date: 2012-11-22
activelink: /blog/
stylesheets: ['/css/blog-post.css']
---
The first "minor" update of Spectrum Run is [out now][spectrum-run]{:target="_blank"}{:rel="noopener"} and took about a month with an unfortunate 1-week-delay because of a crash bug. I didn't expect it would take that long. My initial plan was to fix some bugs and optimize the game. Just small things that would fit into a "minor" update. The official changes are:

- Added both Friends and Global Rankings to Scores Menu
- Massive Improvements: Performance, Tutorial, Balancing, Audio, Graphics
- Bug Fixes

_Added both Friends and Global Rankings to Scores Menu:_ This is something I wanted to do from the beginning, but just couldn't do due to time constraints. More details and facts over [here][making-vector-graphics-like-nerds-post].

_Massive Improvements:_ Performance, Tutorial, Balancing, Audio, Graphics: Okay, what? Why "massive" improvements? I must admit, some improvements seem to feel like a minor change, but I had to upgrade and exchange a lot of stuff internally.

_Performance:_ This was probably my biggest concern. The game was a bit laggy on iPhone 4 and sometimes even noticeable on iPhone 4S. iPhone 3GS seem to have no problem, because they're using non-retina graphics. But I'm not 100% sure, because I couldn't test it at first hand. And iPhone 5 just has enough power in any way. ;) I spent a lot of time with Xcode Instruments to analyze the performance and tried to get the reason(s) for the lags. I don't want to go into details, but the major performance killers were "permanent I/O activities" and "inefficient Z reordering".

_Tutorial:_ Not that big of a deal, I added arrows to the swiping gestures, and shortened some sections.

_Balancing:_ Oh boy, this is also something I was kinda aware of, but didn't realize it would make such a huge impact. iPhone 5 widescreen support was a little bit of a "last minute implementation", because it was new back then. So… yeah… maybe you can think of a reason why a widescreen support would be beneficial for an endless runner like Spectrum Run. Fixed that by reducing the distance between the left edge of the screen and the runner on non-widescreen devices, and increased it on widescreen devices. Now it's fair and square, sorry for that!

_Audio:_ This was also huge. More details and facts over [here][the-right-way-handling-ipod-playback-post].

_Graphics:_ Added motion trails at higher running speeds. Yay! :smile:

_On a side note:_ Internally I upgraded from cocos2d v1.0.1 to v2.0, which was also challenging. But it was totally worth it, fixed some performance issues as well.

This update doesn't seem that minor anymore, does it? Already working on the next update, making good progress! :smile:

[spectrum-run]: https://itunes.apple.com/app/id516387678 "Spectrum Run on the App Store"
[making-vector-graphics-like-nerds-post]: {{ "/2012/10/15/making-vector-graphics-like-nerds/" | prepend: site.baseurl }} "Making Vector Graphics like Nerds"
[the-right-way-handling-ipod-playback-post]: {{ "/2012/10/24/the-right-way-handling-ipod-playback/" | prepend: site.baseurl }} "The right way handling iPod playback"
