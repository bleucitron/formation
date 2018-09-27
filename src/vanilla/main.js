"use strict";

document.addEventListener('DOMContentLoaded', function (e) {

  fetchJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json')
  .then(function (tweets) {
    console.log('Le tableau de tweet', tweets);

    let myOl = createOl(tweets);
    document.body.append(myOl);

    function isTweetFr(tweet) {
      return tweet.lang === 'fr';
    }

    const filterButton = document.createElement('button');
    filterButton.textContent = 'to Fr';
    document.body.append(filterButton);

    let isFr = false;

    filterButton.addEventListener('click', function () {
      const newOl = isFr
        ? createOl(tweets)
        : createOl(tweets.filter(isTweetFr));

      isFr = !isFr;

      myOl.replaceWith(newOl);
      myOl = newOl;
    });

    createTrackingButton();

  })
  .catch(function (e) { console.error(e) });

}, { once: true })
