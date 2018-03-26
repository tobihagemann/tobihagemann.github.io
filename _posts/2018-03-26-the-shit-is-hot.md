---
layout: post
title: "The Shit Is Hot"
date: 2018-03-26
stylesheets: ['/css/blog-post.css']
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

<div class="card card-tweet mx-auto mb-3" style="max-width: 500px;">
  <div class="card-body">
    <div class="d-flex align-items-start justify-content-between">
      <a class="card-author text-dark" href="https://twitter.com/fimbim" target="_blank">
        <div class="d-flex align-items-center mb-2">
          <img class="card-author-img mr-2" src="https://pbs.twimg.com/profile_images/729204803054743552/5H5szp7m_normal.jpg" srcset="https://pbs.twimg.com/profile_images/729204803054743552/5H5szp7m_normal.jpg 1x, https://pbs.twimg.com/profile_images/729204803054743552/5H5szp7m_bigger.jpg 2x"/>
          <div class="d-flex flex-column">
            <p class="card-title">Fynn Kliemann</p>
            <p class="card-subtitle">@fimbim</p>
          </div>
        </div>
      </a>
      <a href="https://twitter.com/fimbim/status/975714061190037504" target="_blank">
        <div class="card-icon-twitter">{% include icon-twitter.svg %}</div>
      </a>
    </div>
    <p class="card-text mb-1">.<a href="https://twitter.com/tobihagemann" target="_blank">@tobihagemann</a> hat das Spiel, dass ich mit <a href="https://twitter.com/janboehm" target="_blank">@janboehm</a> beim <a href="https://twitter.com/neomagazin" target="_blank">@neomagazin</a> gespielt habe nachgebaut! Meistgesuchte Begriffe über Wikipedia API, Suchvolumen wahlweise über Yandex, Google oder Bing. R-E-S-T-E-C-P Alter :fire: <a href="https://shitishot.de" target="_blank">shitishot.de</a> <a href="https://twitter.com/tobihagemann/status/975700447649521665" target="_blank">twitter.com/tobihagemann/s…</a></p>
    <p class="card-text small"><a class="link-muted" href="https://twitter.com/fimbim/status/975714061190037504" target="_blank">13:42 - 19. März 2018</a></p>
    <a class="text-dark" href="https://shitishot.de" target="_blank">
      <div class="card card-media">
        <div class="card-body pr-0">
          <img class="card-media-img" src="https://shitishot.de/assets/logo.png"/>
        </div>
        <div class="card-body">
          <p class="card-title mb-1">Der Scheiß ist heiß</p>
          <p class="card-text card-media-text mb-1">Ihr müsst raten, wie viele Treffer die gezeigten Begriffe bei einer Suchmaschine erzeugen und diese in der richtigen Reihenfolge platzieren. Und jetzt heißt es: Der Scheiß ist heiß.</p>
          <p class="card-text text-muted">shitishot.de</p>
        </div>
      </div>
    </a>
  </div>
</div>

<div class="card card-tweet mx-auto mb-3" style="max-width: 500px;">
  <video class="card-img-top" autoplay controls loop poster="https://pbs.twimg.com/tweet_video_thumb/DYqp4kzW4AAbQTV.jpg">
    <source type="video/mp4" src="https://video.twimg.com/tweet_video/DYqp4kzW4AAbQTV.mp4">
    Your browser does not support the video tag.
  </video>
  <div class="card-body">
    <div class="d-flex align-items-start justify-content-between">
      <a class="card-author text-dark" href="https://twitter.com/janboehm" target="_blank">
        <div class="d-flex align-items-center mb-2">
          <img class="card-author-img mr-2" src="https://pbs.twimg.com/profile_images/974401685320814592/OfS3i78p_normal.jpg" srcset="https://pbs.twimg.com/profile_images/974401685320814592/OfS3i78p_normal.jpg 1x, https://pbs.twimg.com/profile_images/974401685320814592/OfS3i78p_bigger.jpg 2x"/>
          <div class="d-flex flex-column">
            <p class="card-title">Jan Böhmermann</p>
            <p class="card-subtitle">@janboehm</p>
          </div>
        </div>
      </a>
      <a href="https://twitter.com/janboehm/status/975779070993666050" target="_blank">
        <div class="card-icon-twitter">{% include icon-twitter.svg %}</div>
      </a>
    </div>
    <p class="card-text small mb-1"><a class="link-muted" href="https://twitter.com/_/status/975714061190037504" target="_blank">Antwort an @fimbim und 2 weitere</a></p>
    <p class="card-text small"><a class="link-muted" href="https://twitter.com/janboehm/status/975779070993666050" target="_blank">19:00 - 19. März 2018</a></p>
  </div>
</div>

Alles in allem bin sehr zufrieden mit dem Ergebnis. :grin: Ach ja, wer meinen Blog etwas näher verfolgt, wird jetzt vermutlich geahnt haben, dass ich mich in meinem letzten Blog-Post [Know Your Tools][know-your-tools-post] für mich zumindest auf Angular bezogen habe. :wink:

[the-shit-is-hot]: https://shitishot.de "The Shit Is Hot"
[der-scheiss-ist-heiss]: https://www.youtube.com/watch?v=upm6SfYuGX4 "Der Scheiß ist heiß mit Fynn Kliemann | NEO MAGAZIN ROYALE mit Jan Böhmermann - ZDFneo"
[angular]: https://angular.io/ "Angular"
[gh-the-shit-is-hot]: https://github.com/tobihagemann/shitishot "The Shit Is Hot • GitHub"
[tw-the-shit-is-hot]: https://twitter.com/tobihagemann/status/975700447649521665 "The Shit Is Hot • Twitter"
[know-your-tools-post]: {{ "/2018/01/14/know-your-tools/" | prepend: site.baseurl }} "Know Your Tools"
