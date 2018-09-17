"use strict";

function createLi(tweet) {
  const tweetLi = document.createElement('li');
  tweetLi.textContent = tweet.text;
  return tweetLi;
}
