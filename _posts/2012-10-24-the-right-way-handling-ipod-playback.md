---
layout: post
title: "The Right Way Handling iPod Playback"
date: 2012-10-24
stylesheets: ['/css/blog-post.css']
---
I am pretty unhappy with the current implementation of audio handling in Spectrum Run. In fact a lot of games have mediocre or really bad audio handling. I'm talking specifically about dealing with iPod playback. I don't know if it's just me, but sometimes I want to hear my own music while playing games. And I want the possiblity to switch to the ingame music instantly. No stupid fade ins and fade outs (don't get me wrong, I love smooth transitions, but this one is just annoying).

It's so hard to find the right Framework or custom implementation for my needs, because I have the feeling I'm the only developer who sees this as a big issue (I guess not really, but googling didn't give any wanted results). This should be a standard implementation for game developers. Just take the three games for example and compare them to each other: Jetpack Joyride, Angry Birds and Tiny Wings. Use your iPod/iPhone ear phones for more convenience and just press the play/pause button. Jetpack Joyride – in my opinion – has the best implementation. It just feels RIGHT! Angry Birds doesn't even care and plays both ingame and iPod music. And Tiny Wings has the default implementation with those fadings, where the ingame music doesn't even resume, because the default implementation is buggy as hell.

So why does this bother me that much? Because I'm using ear phones all the time and it just annoys me, when I can't hear the music whenever I want – wether it's ingame or iPod. Another bad example: the MacHeist puzzles. Try to hear your iPod music while solving those puzzles. Wait what? You can't? Because the music fades away, when the Sound Effects start to play? I guess you have to solve these puzzles in silence! Have fun!

There are two Frameworks out there, which are both dealing with the same thing: Handling audio for games the easy way (this includes sound effects and background music). [CocosDenshion][cocosdenshion]{:target="_blank"} and [ObjectAL][objectal]{:target="_blank"}. Currently I'm using CocosDenshion, because it's already delivered with cocos2d. Unfortunately there is a bug in combination with Game Center, which lets the game occasionally crash. There is a [workaround][workaround]{:target="_blank"} for that, but I don't really like it (in fact the workaround is currently implemented in Spectrum Run). Aside from that I have found no way to deal with my iPod playback issue (okay, maybe I haven't tried hard enough).

So I was looking for an alternative to CocosDenshion and found ObjectAL, which sounded really promising. There is an interesting flag you can set called "useHardwareIfAvailable". I'm not quite sure what it internally does, but deactivating it causes at least no fadings. In fact it's just like Angry Birds now, where both ingame and iPod musics are playing. So the last thing to do is to mute or resume the ingame music, if there is iPod music playing or not. This is something you can google, if you dig deep enough. Add an observer to the `NSNotificationCenter` in your init:

```objc
MPMusicPlayerController *iPodController = [MPMusicPlayerController iPodMusicPlayer];
[[NSNotificationCenter defaultCenter] addObserver:self selector:@selector(iPodStateChanged:) name:MPMusicPlayerControllerPlaybackStateDidChangeNotification object:iPodController];
[iPodController beginGeneratingPlaybackNotifications];
```

Don't forget to remove the observer in your dealloc:

```objc
[[NSNotificationCenter defaultCenter] removeObserver:self];
```

```objc
- (void)iPodStateChanged:(NSNotification *)notification {
  NSParameterAssert([notification.object isKindOfClass:MPMusicPlayerController.class]);
  MPMusicPlayerController *iPodController = (MPMusicPlayerController*)[notification object];
  // e.g. use [iPodController playbackState] to set [[OALSimpleAudio sharedInstance] bgVolume] accordingly
}
```

That's it! As simple as that! Have fun listening to your own music and switch instantly to the ingame music whenever you want!

This is going to be implemented in the next update of Spectrum Run.

[cocosdenshion]: http://www.cocos2d-iphone.org/wiki/doku.php/cocosdenshion:faq "CocosDenshion"
[objectal]: http://kstenerud.github.io/ObjectAL-for-iPhone/ "ObjectAL"
[workaround]: http://www.cocos2d-iphone.org/forum/topic/21909 "Crash on become active - iOS5 sound related?"
