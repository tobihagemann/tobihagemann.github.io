---
layout: post
title: "Unlocking Siri Voices on macOS"
date: 2026-02-14
activelink: /blog/
stylesheets: ['/css/blog-post.css']
ogimage: /assets/2026-02-14-ogimage.png
---
<p class="lead" markdown="1">I've been using the macOS `say` command to generate voiceovers for simple videos and audio clips for AI assistants like [OpenClaw][openclaw]. It works, but Apple's best voices, the Siri Natural voices, can't be selected with it. Turns out there's a workaround.</p>

## The Problem

The `say` command lets you pick a voice with `-v`:

```bash
say -v "Samantha" "Hello world"
```

But if you run `say -v '?'` to list all available voices, the Siri Natural voices are nowhere to be found. They're only available as "System Voice" in System Settings > Accessibility > Spoken Content. The older voices are fine for quick tests, but they don't sound great.

I've tried a bunch of alternatives: ElevenLabs (too expensive for my use case), Kokoro, Matcha-TTS, KittenTTS, VITS, Qwen3-TTS, and probably a few more that I've already forgotten. They all had their issues, whether it was quality or reliability. The Siri Natural voices sound good enough and they're right there on your Mac.

## Prerequisites

Before any of this works, the Siri voices need to be downloaded. Open **System Settings > Accessibility > Spoken Content**, click the info button next to "System voice", and download the voices you want from there. Make sure to select the downloaded Siri voice in the list, so that it's set as default for the language. Otherwise, the voice assignments will remain empty in the next step.

<div class="text-center">
  <figure class="figure" style="max-width: 835px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2026-02-14-spoken-content-settings.png" | prepend: site.baseurl }}" alt="System Settings showing Spoken Content with the System voice selector"/>
    <figcaption class="figure-caption">System Settings > Accessibility > Spoken Content</figcaption>
  </figure>
</div>

<div class="text-center">
  <figure class="figure" style="max-width: 862px;">
    <img class="figure-img img-fluid rounded" src="{{ "/assets/2026-02-14-voice-selection.png" | prepend: site.baseurl }}" alt="Voice selection panel showing language list and voice settings"/>
    <figcaption class="figure-caption">Selecting a Siri voice for a language</figcaption>
  </figure>
</div>

## The Trick

Here's what I figured out: when you run `say` _without_ `-v`, it uses whatever system voice is configured. So the trick is to change the system voice programmatically before calling `say`. And it turns out you can do that with `defaults write`.

The voice selection is stored in `com.apple.Accessibility`:

```bash
# Read current voice assignments
defaults read com.apple.Accessibility SpokenContentDefaultVoiceSelectionsByLanguage
```

The output is an array of language/voice pairs that looks something like this:

```
(
    en,
        {
        "_type" = "Speech.VoiceSelection";
        "_version" = 0;
        boundLanguage = en;
        voiceId = "com.apple.siri.natural.Aaron";
    },
    de,
        {
        "_type" = "Speech.VoiceSelection";
        "_version" = 0;
        boundLanguage = de;
        voiceId = "com.apple.siri.natural.Martin";
    }
)
```

You also need to set the system TTS language to the language you want to use:

```bash
# Set to English
defaults write com.apple.speech.voice.prefs SystemTTSLanguage -string "en"

# Set to German
defaults write com.apple.speech.voice.prefs SystemTTSLanguage -string "de"
```

### Putting It Together

Switch the language, call `say` without `-v`, and it uses the Siri voice:

```bash
# Switch to English
defaults write com.apple.speech.voice.prefs SystemTTSLanguage -string "en"

# Now say uses the Siri English voice
say "Hello, how are you?" -o output-en.aiff

# Switch to German
defaults write com.apple.speech.voice.prefs SystemTTSLanguage -string "de"

# Now say uses the Siri German voice
say "Hallo, wie geht es dir?" -o output-de.aiff
```

No need to restart any processes or kill `speechsynthesisd`. The `defaults write` alone is enough and the next `say` invocation picks up the new language immediately.

## Caveats

A few things to keep in mind:

- This relies on undocumented internals, so future macOS versions could change the plist format.
- Tested on macOS 26 (Tahoe), but could work with earlier versions as well.

## ClawHub Skills

I've created a [say][clawhub-say] skill on ClawHub that wraps all of this into a reusable skill for Claude Code. If you're also interested in the opposite direction, speech-to-text, check out my [yap][clawhub-yap] skill. It's based on [yap][yap-github] by Finn Voorhees, which uses Apple's Speech framework for fast on-device transcription. I prefer it over Whisper CLI, which was less reliable and slower for me. Both skills are macOS only.

I hope this helps if you've ever been frustrated by not being able to use Siri voices in your scripts. It's a simple trick, but it took me a while to even think of this approach. :wink:

[clawhub-say]: https://clawhub.ai/tobihagemann/say "say skill on ClawHub"
[clawhub-yap]: https://clawhub.ai/tobihagemann/yap "yap skill on ClawHub"
[yap-github]: https://github.com/finnvoor/yap "yap by Finn Voorhees"
[openclaw]: https://openclaw.ai/ "OpenClaw"
