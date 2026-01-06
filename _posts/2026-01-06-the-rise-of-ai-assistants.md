---
layout: post
title: "The Rise of AI Assistants"
date: 2026-01-06
activelink: /blog/
stylesheets: ['/css/blog-post.css']
ogimage: /assets/2026-01-06-ogimage.png
---
<p class="lead" markdown="1">In December 2025, something clicked for me. Over the last month, I've spent a lot of my time developing AI assistants. Is "AI Assistant Engineering" even a thing? I'm pretty sure this will become a normal job title at some point.</p>

## Example: Support Assistant

I'd like to give you one example that I've been working on: an AI support assistant.

What does handling support usually look like? I would say it starts with a support request, typically an email. You might even be using a help desk tool for this. And now your job is to understand the request, gather information (most of it is probably in your head already), take action if needed, write a response, and send it out. A simplified visual representation could look like this:

<div class="text-center">
  <figure class="figure" style="max-width: 100%;">
    <img class="figure-img img-fluid" src="{{ "/assets/2026-01-06-human-process.svg" | prepend: site.baseurl }}" alt="How a human support agent handles a request"/>
    <figcaption class="figure-caption">Human support workflow (simplified)</figcaption>
  </figure>
</div>

I would argue that this takes a significant amount of time for each request. Sometimes you even get stuck and have to delegate it to someone else, and they have to start the whole process all over again. It's not always because the information is not retrievable, but sometimes it just takes too much time to find the right information if someone else can do it faster. In reality, the process is likely more complex.

So then I asked myself: is it possible to let an AI assistant take action and draft a response for me? Well, yes, of course, that's why we're here. An AI assistant can actually go through all these steps as well. Let's take a look at this:

<div class="text-center">
  <figure class="figure" style="max-width: 100%;">
    <img class="figure-img img-fluid" src="{{ "/assets/2026-01-06-ai-process.svg" | prepend: site.baseurl }}" alt="How the AI support assistant handles a request"/>
    <figcaption class="figure-caption">AI-assisted support workflow (simplified)</figcaption>
  </figure>
</div>

For simplicity's sake, my example is heavily based on Claude Code's tooling and wording, because that's what I'm using, but feel free to experiment with other tools. And I simplified the commands and skills to avoid getting lost in complexity. So what does this all mean?

To be honest, it's mostly Markdown files. [Commands][claude-code-commands] (in blue), [skills][claude-code-skills] (in green), and [subagents][claude-code-agents] (in purple) are all just Markdown files. These are basically prompts that contain instructions and guidelines for the AI to go through the steps. And for taking action, there are scripts (in orange) that the AI can call.

Here is a quick summary of the components:
- **Commands** contain prompts that you can call via `/<command-name>` in Claude Code.
- **Skills** contain prompts that the AI can use via trigger words. Actually, you can make skills more complex, and optionally add scripts, references, and assets, but that's not important now.
- **Subagents** contain prompts that are automatically loaded when a subagent is being spawned. They're useful for saving context for the main agent during long runs.
- **Scripts** are executable files (like shell scripts, Python scripts, etc.) that the AI can call to take action reliably. They can do anything that you could do manually in your terminal or code editor. This is actually the "coding" part.

Scripts aren't new. We, as humans, can also make use of scripts. And we should. They're deterministic, they're reliable, they save us a lot of time. That's great. But now, we have this "[powerful alien tool][post-by-karpathy]" that is extremely capable. If you will, all the commands and skills are basically non-deterministic scripts.

However, to make this work, AI assistants need the right context and information. If it's all just in our brains, that's bad, especially on a team. That's why a knowledge base typically exists. And if you don't have one, guess what, let the AI build one based on past conversations. Again, Markdown files are totally sufficient.

All right, now let's put it together and let's see how we can work together with an AI assistant. Let's take a look at this:

<div class="text-center">
  <figure class="figure" style="max-width: 100%;">
    <img class="figure-img img-fluid" src="{{ "/assets/2026-01-06-human-ai-process.svg" | prepend: site.baseurl }}" alt="How a human uses the AI support assistant"/>
    <figcaption class="figure-caption">Human-in-the-loop workflow (review &amp; approvals)</figcaption>
  </figure>
</div>

As you can see, I don't have to do all that much anymore myself, but it's still important to me to review and approve certain steps. While I rarely use the _exact_ response from the draft, most of the time it's astoundingly correct. I still like to give it a final review and add some personal touch, but the whole new process is still saving me _so much_ time and effort.

That's something that fascinates me. I'm very excited to fine-tune it by improving its instructions and giving it more skills. I can even imagine that a specialized AI support assistant delegates its work to a different specialized AI assistant: it just has to open a new Terminal window in a different working directory and prompt another Claude instance.

## Well, Actually…

The visual representation of the "Process Ticket" command (in the images above) is somewhat misleading. That's not actually how an AI assistant works with all these components. This is just the mental model that I had while working on this project.

If I left it like that, you might think this process could be solved with workflow automation tools like n8n. Why does it feel so different here, and what makes it so amazing? Because in reality, it's more like this:

<div class="text-center">
  <figure class="figure" style="max-width: 100%;">
    <img class="figure-img img-fluid" src="{{ "/assets/2026-01-06-claude-code.svg" | prepend: site.baseurl }}" alt="How Claude Code works"/>
    <figcaption class="figure-caption">Claude Code mental model (high-level)</figcaption>
  </figure>
</div>

There are no "arrows" that I'm drawing between the components. It's not a fixed workflow. Those Markdown files are just text files inside my filesystem. Claude Code (the tool) with its LLM (the brain) is reading those files, interpreting them, and deciding what to do next on its own. And its skill set is humongous. The LLM "knows" sooo much more than I can ever write down in skills.

Of course, I can try to steer it in a certain direction with trigger words like "run the `<skill-name>` skill" or "run the `<script-name>` script", but it can actually decide on its own to deviate from it if it deems necessary based on the context. That's what makes it so magical. But also why I review so much of its work.

Now, at least, I understand what the fuss about skills is all about. And I'm glad it's an [open format][agentskills]. I actually used the popular [`frontend-design`][frontend-design-plugin] plugin/skill from Anthropic before, but I didn't really understand what the point of writing skills in general was. Boy, was I wrong.

## Assistant or Agent?

I'm actually struggling with the words "AI assistant" and "AI agent". Claude Code is marketed as an agentic coding tool, but it's more like a general-purpose agentic tool. I think Claude Code itself is just an extremely versatile tool that you can use to build AI assistants or AI agents. Maybe assistants require more human interaction, while agents are more autonomous? Maybe you have a better idea. Let me know.

For me, I'm happy with having multiple specialized AI assistants. Separation of concerns is important to me. I'm still driving the process (at least for now), while Claude Code is doing the heavy lifting for me. I'm still trying to find the right balance for it to be as autonomous as possible. It's truly insane though that this is something that's possible to use _right now_, and I'm glad I found out that you can use Claude Code to help you out with tasks that aren't even coding.

## A Word of Caution

While all of this is working astonishingly well, we still have to deal with hallucinations and AI outputs can be just flat-out wrong sometimes. I can't stress enough that you have to verify its output, especially if it takes action that is irreversible. If the verification can be done automatically via scripts, that's even better, but you really just can't blindly trust it. Not yet, at least.

And I should probably mention the security aspect of it all. Yes, prompt injection is real, and you have to be conscious about it and prepare for it. Sandboxing and permission restrictions are a good start. There is still much to learn and improve though, it's not that trivial. Developing these systems requires a significant amount of time as well, don't be fooled. So I'm winning time by losing time? I guess that's how it is in the beginning. :joy:

## One More Thing: Personal Assistants

You should absolutely follow Peter Steinberger ([@steipete][steipete-twitter]). His [Clawdbot][clawdbot-website] ([@clawdbot][clawdbot-twitter]) is gaining a lot of traction right now, and you should definitely take a look. The [skills][clawdbot-skills] alone are insane and growing. And it looks like [ClawdHub][clawdhub] (a skill directory for Clawdbot) is one way to share skills. But the fun part is probably to build your own skills.

For me, personally, that's a bit much right now. Giving an AI assistant access to all of my personal stuff and being somewhat autonomous is not on my mind right now. But it still excites me.

If I recall correctly, all of his tweets in late November 2025 (when it was called warelay, then clawdis, now recently clawdbot) were an inspiration for my own AI assistants. Is this something that Siri should've been all along? Oh well, I guess we're building our AI assistants ourselves now. Thank you, Peter! And thank you, Claude! :wink:

If you want to experiment with this yourself, start small: pick one recurring task, write down the steps in a single command file (actually, prompt Claude to write it), add references, and wire up scripts as you need. Then run it, review the output, and iterate. Believe me, it will take _a lot of_ iterations, but magic will happen when it finally works. :sparkles:

[claude-code-commands]: https://code.claude.com/docs/en/slash-commands "Claude Code - Slash Commands"
[claude-code-skills]: https://code.claude.com/docs/en/skills "Claude Code - Agent Skills"
[claude-code-agents]: https://code.claude.com/docs/en/sub-agents "Claude Code - Subagents"
[post-by-karpathy]: https://x.com/karpathy/status/2004607146781278521 "Post by Andrej Karpathy"
[agentskills]: https://agentskills.io/ "Agent Skills"
[frontend-design-plugin]: https://github.com/anthropics/claude-plugins-official/tree/main/plugins/frontend-design "Frontend Design Plugin"
[steipete-twitter]: https://x.com/steipete "Peter Steinberger on Twitter"
[clawdbot-website]: https://clawdbot.com/ "Clawdbot"
[clawdbot-twitter]: https://x.com/clawdbot "Clawdbot on Twitter"
[clawdbot-skills]: https://github.com/clawdbot/clawdbot/tree/main/skills "Clawdbot Skills"
[clawdhub]: https://clawdhub.com/ "ClawdHub"
