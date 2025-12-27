---
layout: post
title: "Vibe Coding Energiekuchen"
date: 2025-07-05
activelink: /blog/
stylesheets: ['/css/blog-post.css']
---
<p class="lead" markdown="1">I've programmed for 25 years, but in the past weeks, I barely wrote any code myself. I'd like to tell you about my first personal "vibe coding" side project Energiekuchen and how it changed my perspective on building software.</p>

## The Journey Begins

My journey into vibe coding actually began on May 20, when ChatGPT Codex was unlocked for ChatGPT Team users. Three days later, on May 23, I tested it by creating my first vibe coding project: a small internal tool for [Skymatic][skymatic]{:target="_blank"}{:rel="noopener"}. But I wasn't impressed. The browser interface was too cumbersome, everything felt sluggish and isolated. Setting up the environment was tedious, especially since it had no internet access once running. I considered trying the Codex CLI but was already quite happy with VS Code and GitHub Copilot, where the agentic features worked smoothly (at first). A couple of weeks later, Codex gained internet access, but it still didn't convince me. I'm curious what OpenAI's answer to all of this will be.

While creating that Skymatic tool, I'd googled spec-driven development and stumbled upon Vivek Haldar's blog post about [spec-driven vibe coding][spec-driven-vibe-coding]{:target="_blank"}{:rel="noopener"}. The idea was intriguing: let AI write a detailed spec and implement it. But [Energiekuchen][energiekuchen]{:target="_blank"}{:rel="noopener"} (literally "Energy Cake" in German), a web app for visualizing your daily energy levels, was my first personal side project using this approach.

The initial idea came from my wife, who told me about this coaching tool quite some time ago. I always kept it in the back of my mind thinking "well, this could be an app!" I actually bought the domain on April 22 without knowing if I'd ever get to writing the web app. (Oh boy, I have a domain that I bought in 2018 right after releasing [The Shit Is Hot][the-shit-is-hot] – fuck, that's already 7 years ago – and never got to starting the project. :joy:) I decided to try it with VS Code + GitHub Copilot Pro (using Sonnet 4) on this simple energy tracking app.

Being very picky about tech stacks and dependencies, I manually initialized the project even though I didn't know the exact stack by heart. I just knew what I wanted: Next.js, Tailwind CSS, Chart.js, Jest, Playwright, and some other minor dependencies. No backend whatsoever. Everything had to run client-side with state persisted in `localStorage`. The initial spec-driven result was impressive. The AI churned out a working app in no time. :rocket: But I'll admit that there was a lot of "slop" in there. I didn't review everything from the beginning (hell, I didn't even review the spec 100%). But that was fine. It was all new to me, and I just wanted to get started.

## The Tool Evolution

After a couple of weeks, I got pretty annoyed by GitHub Copilot's constant premature conversation summarization and rate-limiting. I couldn't get very far with the e2e tests because the small context window filled up too quickly, causing the agent to get stuck in a loop and unable to move forward. Around the same time, there was massive hype around Claude Code.

Peter Steinberger went wild with agentic engineering (or context engineering, no one really knows what to call it now). His [tweets][steipete-twitter]{:target="_blank"}{:rel="noopener"} and [blog posts][steipete-blog]{:target="_blank"}{:rel="noopener"} were a blast to read and incredibly inspiring. Before that, I'd read [Harper Reed's blog][harper-blog]{:target="_blank"}{:rel="noopener"}, which was interesting for getting started but already felt outdated. It's weird how fast everything changes.

I had to join the party. Got the Max subscription and went down the rabbit hole. :rabbit: It turned out to be massively useful for my work as well. It's amazing for side projects, but also for production-ready apps, even though the approach is probably a little slower and more thoughtful.

## The Claude Code Experience

Claude Code is just a fantastic tool. I'm not writing a lot of my own code anymore. It's a pair programmer that's always available and extremely fast. Having programmed for 25 years (see my blog post [The Path of Least Resistance][path-of-least-resistance]), I love when I can bring ideas to life through coding. Agentic engineering is such a crazy accelerator for this. I'm glad I learned the fundamentals and acquired my own taste for programming. I can apply it here very easily. It's crazy how agents can imitate and replicate your style and deliver what you want in such a short time. :zap:

With Energiekuchen, I had this project full of bugs and slop, but it was such a blast to remove unwanted features and fix bugs by just telling Claude Code what to do. At one point, I ran four agents in parallel to work on things that annoyed me while testing. Some people constantly run multiple agents, but I don't have the capacity to review so much. I'm having a hard time with multitasking even though I'm constantly forced to do it in my job. I guess I just like to watch what the hell the agent is thinking and doing, so I can fine-tune my custom instructions in `CLAUDE.md`.

## The Power of Determinism

You get the most out of Claude Code if your project has all the good stuff set up: linting, auto-formatting, unit tests, e2e/integration tests, pre-commit hooks. The incredible thing is that compilers and these tools are deterministic. Agents are kind of fuzzy and get things mostly right, but due to the feedback loop of warnings and errors, it becomes a self-correcting system. It's fascinating to watch them fix their own mistakes. :robot:

Setting up e2e tests was painful, but I'm glad the project has them now. I must admit that I don't know what the hell is in those tests. It's pretty dumb to say it out loud, but I'll be completely honest: this project has more tests than apps that I write myself. I'm just not a good test-driven developer. But here's the thing: I've always been thoughtful about edge cases while coding, and I pair that with thorough manual testing. Now the agent takes my rambling about edge cases and actually verifies them with tests. That's a huge plus.

I still haven't reviewed every line of code in Energiekuchen, which may be a downside since I actually value good readability. But with auto-formatting and knip (which detects unused code), it's actually not that bad. I'm very opinionated about UI/UX, and I'm good at catching issues through manual testing. There may still be slop in the project, but I don't really care anymore because the app works great (at least in my opinion).

Just recently, I set up [Claude Code hooks][claude-code-hooks]{:target="_blank"}{:rel="noopener"} in Energiekuchen, and I'm curious if I can make use of them. There's so much stuff to learn right now, and all these new tools and features are being released in a matter of weeks or even days.

## The Future is Now

I've open-sourced [Energiekuchen on GitHub][energiekuchen-github]{:target="_blank"}{:rel="noopener"} if you want to check out the code.

I'm very excited about the many side projects I can now tackle because of agentic engineering. I have a long list of ideas and I still want to create good stuff. Even though there may be some slop, at least I can bring my ideas to life without wasting months and years coding. I can do it in days or weeks for something that's just not worth a longer time investment. It's very freeing that I don't have to do all the "manual labor". :tada:

Some of my personal favorite readings on this topic:
- [Claude Code: Best practices for agentic coding][claude-code-best-practices]{:target="_blank"}{:rel="noopener"} by Anthropic
- [AI-assisted coding for teams that can't get away with vibes][ai-assisted-coding]{:target="_blank"}{:rel="noopener"} by Atharva Raykar
- [The Future of Vibe Coding: Building with AI, Live and Unfiltered][future-vibe-coding]{:target="_blank"}{:rel="noopener"} by Peter Steinberger
- [My AI Skeptic Friends Are All Nuts][youre-all-nuts]{:target="_blank"}{:rel="noopener"} by Thomas Ptacek
- [Stop Over-thinking AI Subscriptions][stop-overthinking]{:target="_blank"}{:rel="noopener"} by Peter Steinberger
- [AI Changes Everything][changes]{:target="_blank"}{:rel="noopener"} by Armin Ronacher
- [How I Use Claude Code][how-i-use-claude]{:target="_blank"}{:rel="noopener"} by Simon Spiess

Also, I highly recommend watching this talk by Andrej Karpathy:

<div class="text-center">
  <div class="embed-responsive embed-responsive-16by9 mx-auto mb-2" style="max-width: 720px;">
    <iframe class="embed-responsive-item" src="https://www.youtube-nocookie.com/embed/LCEmiRjPEtQ"></iframe>
  </div>
  <p class="figure-caption" markdown="1">[Software Is Changing (Again)][karpathy-software]{:target="_blank"}{:rel="noopener"} by Andrej Karpathy at Y Combinator</p>
</div>

The world of software development is changing rapidly. Whether you call it vibe coding, agentic engineering, or context engineering: it's here, and it's powerful. The key is to embrace it while maintaining your own standards and vision. After all, you're still the architect. The agents are just very capable construction workers. :construction_worker:

[energiekuchen]: http://energiekuchen.de/ "Energiekuchen"
[skymatic]: https://skymatic.de/ "Skymatic"
[spec-driven-vibe-coding]: https://vivekhaldar.com/articles/spec-driven-vibe-coding/ "Spec-driven vibe coding"
[the-shit-is-hot]: /2018/03/26/the-shit-is-hot/ "The Shit Is Hot"
[steipete-twitter]: https://x.com/steipete "Peter Steinberger on Twitter"
[steipete-blog]: https://steipete.me/posts "Peter Steinberger's Blog"
[harper-blog]: https://harper.blog/posts/ "Harper Reed's Blog"
[path-of-least-resistance]: /2017/01/08/the-path-of-least-resistance/ "The Path of Least Resistance"
[energiekuchen-github]: https://github.com/tobihagemann/energiekuchen "Energiekuchen on GitHub"
[claude-code-hooks]: https://docs.anthropic.com/en/docs/claude-code/hooks "Claude Code Hooks"
[claude-code-best-practices]: https://www.anthropic.com/engineering/claude-code-best-practices "Claude Code: Best practices for agentic coding"
[ai-assisted-coding]: https://blog.nilenso.com/blog/2025/05/29/ai-assisted-coding/ "AI-assisted coding for teams that can't get away with vibes"
[future-vibe-coding]: https://steipete.me/posts/2025/the-future-of-vibe-coding "The Future of Vibe Coding: Building with AI, Live and Unfiltered"
[youre-all-nuts]: https://fly.io/blog/youre-all-nuts/ "My AI Skeptic Friends Are All Nuts"
[stop-overthinking]: https://steipete.me/posts/2025/stop-overthinking-ai-subscriptions "Stop Over-thinking AI Subscriptions"
[changes]: https://lucumr.pocoo.org/2025/6/4/changes/ "AI Changes Everything"
[how-i-use-claude]: https://spiess.dev/blog/how-i-use-claude-code "How I Use Claude Code"
[karpathy-software]: https://www.youtube.com/watch?v=LCEmiRjPEtQ "Software Is Changing (Again)"
