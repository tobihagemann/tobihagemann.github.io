---
layout: post
title: "THLabel – UILabel Subclass"
date: 2012-12-22
stylesheets: ['/css/blog-post.css']

excerpt: "I am releasing a UILabel subclass, which allows shadow blur, stroke text and fill gradient. You can find it here: tobihagemann/THLabel"
---
<div class="text-center">
  <figure class="figure float-md-right" style="max-width: 160px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2012-12-22-thlabel-screenshot.png" | prepend: site.baseurl }}" alt="THLabel screenshot"/>
    <figcaption class="figure-caption">THLabel screenshot</figcaption>
  </figure>
</div>

I am releasing a UILabel subclass, which allows shadow blur, stroke text and fill gradient. You can find it here: [tobihagemann/THLabel][thlabel]{:target="_blank"}

I know that there are already classes out there like [OHAttributedLabel][ohattributedlabel]{:target="_blank"}, [FXLabel][fxlabel]{:target="_blank"} and [KSLabel][kslabel]{:target="_blank"}, but none of them fulfilled all my needs for my game. My motivation was:

- I needed an outer stroke, which seems to be kind of special, because Core Graphics only can centered stroke. I found the neat solution in KSLabel, which doubles the stroke size and draws the text just over it again, which cuts the stroke into halves.
- The stroke manipulates the character glyph widths, which has to be dealt with in all style operations. I came up with the idea of using invisible strokes, which works perfectly.
- Shadow has to be also thrown off by the stroke, not the text only!

Thanks to Kai Schweiger for making [KSLabel][kslabel]{:target="_blank"}, which started my own implementation, and Nick Lockwood for making [FXLabel][fxlabel]{:target="_blank"}, which is just insanely great, and I adapted most of his framework.

I had to reorganize the `drawRect:` method several times, which caused me a lot of headache. :smile: For learning purposes I built the class from ground up, that's why I didn't just enhance FXLabel for example.

If you find any bugs or want to give feedback, I'm happy to hear them! :smile:

[thlabel]: https://github.com/tobihagemann/THLabel "THLabel"
[ohattributedlabel]: https://github.com/AliSoftware/OHAttributedLabel "OHAttributedLabel"
[fxlabel]: https://github.com/nicklockwood/FXLabel "FXLabel"
[kslabel]: https://github.com/vigorouscoding/KSLabel "KSLabel"
