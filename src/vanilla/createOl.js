"use strict";

function createOl(tweets) {
  const tweetOl = document.createElement('ol');

  tweets.map(createLi)
    .forEach(function (li) {
      tweetOl.append(li);
    });

  return tweetOl;
}
