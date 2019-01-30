'use strict';

function createLi(tweet) {
  const li = document.createElement('li');
  li.textContent = tweet.text;
  return li;
}
