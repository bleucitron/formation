"use strict";

function createOl(tweets) {
  const tweetOl = document.createElement('ol');

  tweets
  .map(createLi)
  .forEach(li => tweetOl.append(li));

  return tweetOl;
}
