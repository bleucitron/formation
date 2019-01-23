'use strict';

function makeOl(tweets) {
  const ol = document.createElement('ol');

  tweets.forEach(function (tweet) {
    const li = makeLi(tweet);
    ol.append(li);
  });
  return ol;
}
