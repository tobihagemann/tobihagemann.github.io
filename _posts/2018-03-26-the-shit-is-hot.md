---
layout: post
title: "The Shit Is Hot"
date: 2018-03-26
activelink: /blog/
stylesheets: ['/css/blog-post.css']

tweet1:
  id: 975714061190037504
  avatar_id: 729204803054743552/5H5szp7m
  name: Fynn Kliemann
  screen_name: fimbim
  text: >
    .<a href="https://twitter.com/tobihagemann" target="_blank">@tobihagemann</a> hat das Spiel, dass ich mit <a href="https://twitter.com/janboehm" target="_blank">@janboehm</a> beim <a href="https://twitter.com/neomagazin" target="_blank">@neomagazin</a> gespielt habe nachgebaut! Meistgesuchte Begriffe über Wikipedia API, Suchvolumen wahlweise über Yandex, Google oder Bing. R-E-S-T-E-C-P Alter :fire: <a href="https://shitishot.de" target="_blank">shitishot.de</a> <a href="https://twitter.com/tobihagemann/status/975700447649521665" target="_blank">twitter.com/tobihagemann/s…</a>
  date: "13:42 - 19. März 2018"
  media:
    url: "https://shitishot.de"
    img: "https://shitishot.de/assets/logo.png"
    title: Der Scheiß ist heiß
    text: >
      Ihr müsst raten, wie viele Treffer die gezeigten Begriffe bei einer Suchmaschine erzeugen und diese in der richtigen Reihenfolge platzieren. Und jetzt heißt es: Der Scheiß ist heiß.
    destination: shitishot.de
tweet2:
  id: 975779070993666050
  avatar_id: 974401685320814592/OfS3i78p
  name: Jan Böhmermann
  screen_name: janboehm
  date: "19:00 - 19. März 2018"
  video:
    id: DYqp4kzW4AAbQTV
  reply_to:
    id: 975714061190037504
    text: >
      Antwort an @fimbim und 2 weitere
---
<p class="lead" markdown="1">[The Shit Is Hot][the-shit-is-hot]{:target="_blank"} is my first browser game, based on the segment _Der Scheiß ist heiß_ on _NEO MAGAZIN ROYALE_. You have to guess how many hits the shown words generate in a search engine and then place them in the correct order. This blog post is in German since this game is inspired by a German late-night talk show.</p>

Letzte Woche habe ich mein erstes Browser-Spiel veröffentlicht: [Der Scheiß ist heiß][the-shit-is-hot]{:target="_blank"} (The Shit Is Hot). :fire: Es basiert auf dem gleichnamigen Segment aus NEO MAGAZIN ROYALE Folge 92. Wie man unschwer am Namen erkennen kann, lehnt sich das Spiel an _Der Preis ist heiß_ (The Price Is Right). Aber in diesem Spiel müsst ihr raten, wie viele Treffer die gezeigten Begriffe bei einer Suchmaschine erzeugen, und diese in der richtigen Reihenfolge platzieren.

<div class="text-center">
  <div class="embed-responsive embed-responsive-16by9 mx-auto mb-2" style="max-width: 720px;">
    <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/upm6SfYuGX4"></iframe>
  </div>
  <p class="figure-caption" markdown="1">[Der Scheiß ist heiß mit Fynn Kliemann | NEO MAGAZIN ROYALE mit Jan Böhmermann - ZDFneo][der-scheiss-ist-heiss]{:target="_blank"}</p>
</div>

Als die Sendung letztes Jahr im Oktober lief, habe ich mir direkt gedacht, dass man daraus ein „digitales“ Spiel machen könnte. Idealerweise so, dass man die Begriffe nicht selbst pflegen muss, sondern sowohl die Begriffe als auch die Suchergebnistreffer aus verschiedenen Quellen automatisch bezogen werden. Ich weiß es nicht mehr ganz genau, aber zu der Zeit hatte ich vermutlich eine iOS-App im Kopf. Die Idee packte ich aber erst einmal in meine Ideensammlung.

Seit Anfang des Jahres beschäftige ich mich intensiv mit [Angular][angular]{:target="_blank"}. Bisher fand ich Web-Entwicklung abschreckend, weil sich jeder Browser anders verhält und ich den Eindruck hatte, dass man sehr viel mit Workarounds arbeiten muss. Aber mit Angular (und Bootstrap) komme ich inzwischen sehr gut zurecht und es macht mir Spaß, damit zu entwickeln. Im Februar entschied ich mich dann dazu, nach langer Zeit wieder ein neues Freizeitprojekt zu starten, und ging noch mal meine Ideensammlung durch. _Der Scheiß ist heiß_ hatte in meinen Augen den richtigen Scope und fand ich als Browser-Spiel geeignet.

Da ich mit dem Projekt keine besonderen Absichten hatte und inzwischen ein großer Fan von Open-Source bin, ist der [Quellcode auf GitHub][gh-the-shit-is-hot]{:target="_blank"} verfügbar. Wer sich also mit den Technologien, die ich verwendet habe, etwas näher auseinandersetzen möchte, kann dies gerne tun. Nach ca. 6 Wochenenden (mit einigen Abend-Sessions unter der Woche) fand ich das Spiel vorzeigbar und habe es [per Twitter][tw-the-shit-is-hot]{:target="_blank"} angekündigt. Über die Reaktionen habe ich mich wirklich gefreut. :smile:

{% include tweet.html tweet=page.tweet1 %}
{% include tweet.html tweet=page.tweet2 %}

Alles in allem bin sehr zufrieden mit dem Ergebnis. :grin: Ach ja, wer meinen Blog etwas näher verfolgt, wird jetzt vermutlich geahnt haben, dass ich mich in meinem letzten Blog-Post [Know Your Tools][know-your-tools-post] für mich zumindest auf Angular bezogen habe. :wink:

[the-shit-is-hot]: https://shitishot.de "The Shit Is Hot"
[der-scheiss-ist-heiss]: https://www.youtube.com/watch?v=upm6SfYuGX4 "Der Scheiß ist heiß mit Fynn Kliemann | NEO MAGAZIN ROYALE mit Jan Böhmermann - ZDFneo"
[angular]: https://angular.io/ "Angular"
[gh-the-shit-is-hot]: https://github.com/tobihagemann/shitishot "The Shit Is Hot • GitHub"
[tw-the-shit-is-hot]: https://twitter.com/tobihagemann/status/975700447649521665 "The Shit Is Hot • Twitter"
[know-your-tools-post]: {{ "/2018/01/14/know-your-tools/" | prepend: site.baseurl }} "Know Your Tools"
