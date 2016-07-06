---
layout: post
title: "Sprites & Textures"
date: 2012-05-09
---
I mentioned in the [first post][first-post] that I'm using cocos2d for Spectrum Run. It basically is a 2D game framework. You can import images/sprites, move them around, do whatever you want with them and much more! I'm using [Texture Packer][texture-packer] by Andreas Löw / code'n'web, which is a VERY handy tool for organizing sprite sheets. I was thinking about improving performance and generally how I should handle textures better. I didn't really know all features of Texture Packer until I recently came across [this tutorial][rw-tutorial] by Ray Wenderlich and this tool just became more awesome!

<div class="thumbnail thumbnail-right">
  <img width="320px" src="{{ "/assets/2012-05-09-dithering-comparison.png" | prepend: site.baseurl }}" alt="&quot;NearestNeighbour&quot; (left) vs. &quot;FloydSteinberg&quot; (right)" class="img-responsive"/>
  <div class="caption">
    <small>&quot;NearestNeighbour&quot; (left) vs. &quot;FloydSteinberg&quot; (right)</small>
  </div>
</div>

I already knew that I should use the RGBA4444 pixel format, but I was so shocked about the low quality, I reverted the changes instantly. So the first thing I've learned is that I can turn on "FloydSteinberg(+Alpha)" dithering. The textures looked much better after that! The second thing is that I should use the ".pvr.ccz" format instead of ".png" to save memory and even let the game start up much faster! Memory is expensive on mobile devices, I want to use as less as possible.

There are also some useful features for faster and convenient development. For example adding folders instead of adding images directly. Now it automatically adds every new sprite to the sprite sheet if I just add them to the folder. And the AutoSD option allows automatic creation of a standard definition sprite sheet, which is needed for non-retina displays. I did that manually the whole time, downscaling every single image one by one. That was repetitive and annoying!

You can even automate the whole exporting process by writing a script, which is included in the tutorial. I haven't done that yet, but probably will in some days. I still want to use the Texture Packer GUI for some time to find my optimal settings.

There are some other challenges I have to deal with right now to find the best method on how to draw sprites. Sprite positions aren't absolute values, because calculation is done with floating-point numbers. Some problems came up with that, because you can't draw "a half a pixel", it has to be interpolated, which can cause gaps between sprites. There are several highly discussed approaches, so I still have to find the perfect solution for my needs.

[first-post]: {{ "/blog/2012/04/29/first.html" | prepend: site.baseurl }} "First!"
[texture-packer]: https://www.codeandweb.com/texturepacker "Texture Packer"
[rw-tutorial]: https://www.raywenderlich.com/32049/texture-packer-tutorial-how-to-create-and-optimize-sprite-sheets-in-cocos2d "How to Create and Optimize Sprite Sheets in Cocos2D with Texture Packer and Pixel Formats"
