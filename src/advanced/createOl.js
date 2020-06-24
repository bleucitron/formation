'use strict';

function createOl(tableauDeTweets) {
  const ol = document.createElement('ol');

  tableauDeTweets.forEach(tweet => {
    const li = createLi(tweet);
    ol.append(li);
  });

  return ol;
}
