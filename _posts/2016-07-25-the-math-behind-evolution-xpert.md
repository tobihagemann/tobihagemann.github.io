---
layout: post
title: "The Math Behind Evolution XPert"
date: 2016-07-25
stylesheets: ['/css/blog-post.css']
---
I've released [Evolution XPert for iOS][evoxpert-ios]{:target="_blank"} last week (a calculator app for Pokémon GO; [Manu][manu]{:target="_blank"} made the [Android app][evoxpert-android]{:target="_blank"}) and I wanted to share with you the math behind it. Obviously, there are similar projects due to the massive success of Pokémon GO, but all the calculators I've seen so far lack in their implementation. Projects like [PidgeyCalc][pidgeycalc]{:target="_blank"} are at least doing the correct calculation, but the algorithm used has a complexity of `O(n)`, which is fine for low numbers. Others like [PokéLevel][pokelevel]{:target="_blank"} are calculating the wrong numbers, which doesn't make any sense for a calculator and should be precise by definition, but can be fixed very quickly.

That's why I'm presenting you the calculation of Evolution XPert. I can't say it's 100% correct, because I haven't done any mathematical proof. I just did a lot of experimenting and worked my ass off. Therefore, I'm certain that the calculation is correct (or at least plausible).

Let's begin with the first algorithm. The input for this calculation is `availablePokemon`, `availableCandies`, and `candiesPerEvolution`.

```
// initialize
INT possibleEvolutions = 0
INT requiredTransfers = 0
INT remainingPokemon = availablePokemon
INT remainingCandies = availableCandies

// maximize possible evolutions by transferring pokemon and evolving one pokemon each step
INT potentialCandies = remainingCandies + remainingPokemon - 1
WHILE (remainingPokemon > 0 && potentialCandies >= candiesPerEvolution) {
  // simulates one evolution at a time
  INT requiredTransfersForCurrentEvolution = MAX(0, candiesPerEvolution - remainingCandies)
  possibleEvolutions++
  requiredTransfers += requiredTransfersForCurrentEvolution
  remainingPokemon -= (requiredTransfersForCurrentEvolution + 1)
  remainingCandies -= (candiesPerEvolution - requiredTransfersForCurrentEvolution - 1);
  potentialCandies -= candiesPerEvolution
}

RETURN possibleEvolutions, requiredTransfers, remainingPokemon, remainingCandies
```

This is basically what everyone is doing. Run a stupid for-loop and simulate each evolution step and add up the required transfers. This is by the way the calculation that is currently live in the App Store and in Google Play of Evolution XPert. I was too lazy updating the app, will do it soon. :wink: I didn't like the calculation, because it's freezing the app when entering large numbers. That's why I spent some hours in the weekend to give it another go, so that the algorithm has a complexity of `O(1)` instead of `O(n)`.

Here is the optimized algorithm. The input is the same as before.

```
INT possibleEvolutions = MIN(availablePokemon, (availablePokemon + availableCandies - 1) / candiesPerEvolution);
INT requiredTransfers = MAX(0, possibleEvolutions * candiesPerEvolution - availableCandies - possibleEvolutions + MIN(1, possibleEvolutions));
INT remainingPokemon = availablePokemon - requiredTransfers - possibleEvolutions;
INT remainingCandies = availableCandies + requiredTransfers - (possibleEvolutions * (candiesPerEvolution - 1));

RETURN possibleEvolutions, requiredTransfers, remainingPokemon, remainingCandies
```

That's it! :tada: I've run some unit tests and ran the old algorithm against the new one (0-10000 `availablePokemon` and 0-10000 `availableCandies`). As far as I can tell, the output is identical. If you find any errors or even better if you find any possible optimizations, please tell me!

[evoxpert-ios]: https://itunes.apple.com/app/id1135176839 "Evolution XPert for iOS"
[manu]: http://manuel-kehl.de/ "Manuel Kehl"
[evoxpert-android]: https://play.google.com/store/apps/details?id=de.manuel_kehl.evo_xpert "Evolution XPert for Android"
[pidgeycalc]: http://www.pidgeycalc.com/ "PidgeyCalc"
[pokelevel]: http://www.pokelevel.com/ "PokéLevel"
