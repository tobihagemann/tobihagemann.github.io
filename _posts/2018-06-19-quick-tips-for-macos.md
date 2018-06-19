---
layout: post
title: "Quick Tips for macOS"
date: 2018-06-19
activelink: /blog/
stylesheets: ['/css/blog-post.css']
---
<p class="lead" markdown="1">Here are some quick tips for macOS users. Most of them are shortcuts that I use on a daily basis. I'll throw essential tips in as well so that _everyone_ is up to speed but maybe you can find some hidden gems. :wink:</p>

## 1. Spotlight
For the love of God, [use Spotlight][spotlight]{:target="_blank"}{:rel="noopener"}! You can activate it with <kbd><kbd>Cmd</kbd> + <kbd>Space</kbd></kbd>. With Spotlight, you can find almost anything on your Mac. But you can also use it to open applications, perform simple calculations, and much more.

- Find applications more quickly by typing only the first letters of each word. E.g., if you are looking for `Disk Utility`, type in <kbd>du</kbd>. If the application name only consists of one word, type it partially.
- After performing a calculation, press <kbd><kbd>Cmd</kbd> + <kbd>C</kbd></kbd> to copy the result.
- Instead of opening the selected file, reveal it in Finder by holding <kbd><kbd>Cmd</kbd></kbd> when pressing <kbd><kbd>Return</kbd></kbd> or double-clicking.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-spotlight.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-spotlight.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 2. Screenshots
You probably already know [how to take screenshots][screenshots]{:target="_blank"}{:rel="noopener"} but for the sake of completeness, these are the shortcuts:

- <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>3</kbd></kbd> to take a screenshot of your entire screen.
- <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd></kbd> to take a screenshot of a selected portion of your screen.
- <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>4</kbd></kbd> and then <kbd><kbd>Space</kbd></kbd> to take a screenshot of a window.

I'm looking forward to macOS 10.14 Mojave which will introduce <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>5</kbd></kbd> to bring up the screenshot toolbar. With that, you'll also be able to quickly record your screen. Until then, you have to use QuickTime Player. Use Spotlight and type <kbd>qt</kbd> :wink:, then press <kbd><kbd>Cmd</kbd> + <kbd>Ctrl</kbd> + <kbd>N</kbd></kbd>, and then <kbd><kbd>Space</kbd></kbd>. You see what I'm doing here? Use keyboard shortcuts as much as possible.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-screenshots.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-screenshots.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 3. Text Navigation
I used to navigate through text via arrow keys without using any modifiers. Utilizing these two keys will speed up your text navigation immensely:

- Hold <kbd><kbd>Option</kbd></kbd> to navigate word by word when pressing the left and right arrow keys.
- Hold <kbd><kbd>Cmd</kbd></kbd> to jump to the beginning and end of a line when pressing the left and right arrow keys.

As you might imagine, this is also very useful for selecting text by additionally holding <kbd><kbd>Shift</kbd></kbd>. Or you can use these modifiers to delete whole words or lines when pressing <kbd><kbd>Backspace</kbd></kbd>/<kbd><kbd>Delete</kbd></kbd>. If you don't have a delete key, hold <kbd><kbd>fn</kbd></kbd> when pressing backspace.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-text-navigation.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-text-navigation.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 4. Do Not Disturb
Hold <kbd><kbd>Option</kbd></kbd> and click the notification icon in the menu bar to enter Do Not Disturb mode. This mode will turn off notifications, both the banners/alerts and notification sounds.

If you'd like to automatically enter Do Not Disturb mode while screen sharing, I recommend [Muzzle][muzzle].

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-do-not-disturb.png" | prepend: site.baseurl }}" preload="none" style="max-width: 400px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-do-not-disturb.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 5. Hidden Files
It used to be quite cumbersome to show hidden files in Finder. You had to execute a command in Terminal that you probably had to google and even relaunch Finder. Since macOS 10.12 Sierra, you can press <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>.</kbd></kbd> to show hidden files instantly.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-hidden-files.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-hidden-files.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 6. Modal Dialogs
In most cases, you can "press" the buttons inside modal dialogs via keyboard shortcuts. If the obvious shortcuts <kbd><kbd>Enter</kbd></kbd>/<kbd><kbd>Return</kbd></kbd> for the default button and <kbd><kbd>Esc</kbd></kbd> for cancel don't work or aren't sufficient, try the following:

- <kbd><kbd>Cmd</kbd> + <kbd>First Letter on Button</kbd></kbd> presses that button.
- <kbd><kbd>Cmd</kbd> + <kbd>.</kbd></kbd> cancels.

<div class="text-center">
  <figure class="figure" style="max-width: 516px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2018-06-19-modal-dialogs.png" | prepend: site.baseurl }}" alt="Modal Dialog Example"/>
  </figure>
</div>

## 7. Change Directory in Terminal
To change the working directory in Terminal, type <kbd>cd</kbd>, hit <kbd><kbd>Space</kbd></kbd>, and then drag & drop the directory from Finder into Terminal.

But wait, you can do that even faster and don't have to type anything at all. Hold <kbd><kbd>Cmd</kbd></kbd> when dropping the directory into Terminal and it will change the working directory for you. If you drop a file, Terminal will change to the parent directory.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-change-directory.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-change-directory.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 8. Item Operations
Move an item in Finder with <kbd><kbd>Cmd</kbd> + <kbd>C</kbd></kbd> and <kbd><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>V</kbd></kbd>. This is the equivalent of cut & paste on Windows.

Other useful shortcuts in Finder:

- <kbd><kbd>Cmd</kbd> + <kbd>Option</kbd> + <kbd>C</kbd></kbd> to copy the pathname of the selected item.
- <kbd><kbd>Cmd</kbd> + <kbd>D</kbd></kbd> to duplicate the selected item. It's almost the same as copy & paste but not for folders because Finder will try to paste the copied folder into itself since it's still selected.
- <kbd><kbd>Cmd</kbd> + <kbd>Shift</kbd> + <kbd>G</kbd></kbd> to go to a specified folder.

<div class="text-center mb-3">
  <video controls loop poster="{{ "/assets/2018-06-19-item-operations.png" | prepend: site.baseurl }}" preload="none" style="max-width: 800px;">
    <source type="video/mp4" src="{{ "/assets/2018-06-19-item-operations.mp4" | prepend: site.baseurl }}">
    Your browser does not support the video tag.
  </video>
</div>

## 9. Turn Off
Sleep, restart, or shut down your Mac by showing the dialog with <kbd><kbd>Ctrl</kbd> + <kbd>Eject</kbd></kbd>. If you don't have an eject key, press <kbd><kbd>Ctrl</kbd> + <kbd>Power</kbd></kbd> or press the power button for 1.5 seconds. In that dialog, press

- <kbd><kbd>S</kbd></kbd> to sleep,
- <kbd><kbd>R</kbd></kbd> to restart, or
- <kbd><kbd>Enter</kbd></kbd>/<kbd><kbd>Return</kbd></kbd> to shut down.

Yes, there are shortcuts to directly execute these commands but I find them quite hard to remember. Putting a MacBook to sleep is of course much easier by closing the lid.

<div class="text-center">
  <figure class="figure" style="max-width: 552px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2018-06-19-turn-off.png" | prepend: site.baseurl }}" alt="Turn Off Dialog"/>
  </figure>
</div>

## Bonus: Window Management
This tip doesn't really fit in since all the other ones can be directly applied without installing third-party software. But I can highly recommend using a window management tool. I'm using [Spectacle][spectacle] and with that, you can quickly move and resize windows using keyboard shortcuts.

If you have a keyboard with a numpad, take advantage of [natural mapping][natural-mapping] for your keyboard shortcuts to position a window accordingly. Here are my settings in Spectacle:

<div class="text-center">
  <figure class="figure" style="max-width: 712px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2018-06-19-spectacle-settings.png" | prepend: site.baseurl }}" alt="Spectacle Settings"/>
  </figure>
</div>

<hr>

That's all I got for now! :tada: Do you have other tips that you find essential? Please let me know via [@{{ site.twitter_username }}][tw-tobiha]{:target="_blank"}{:rel="noopener"}.

[spotlight]: https://support.apple.com/en-us/ht204014 "Use Spotlight on your Mac"
[screenshots]: https://support.apple.com/en-us/ht201361 "How to take a screenshot on your Mac"
[muzzle]: https://muzzleapp.com/ "Muzzle - silence embarrassing notifications"
[spectacle]: https://www.spectacleapp.com/ "Spectacle - move and resize windows with ease"
[natural-mapping]: https://en.wikipedia.org/wiki/Natural_mapping_(interface_design) "Natural mapping (interface design)"
[tw-tobiha]: https://twitter.com/{{ site.twitter_username }} "{{ site.twitter_username }} on Twitter"
