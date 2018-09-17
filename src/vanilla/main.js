"use strict";

document.addEventListener('DOMContentLoaded', function (e) {
  fetch('https://raw.githubusercontent.com/iOiurson/formation/corrig%C3%A9/data/tweets.json')
    .then(function (resp) { return resp.json() })
    .then(function (tweets) {
      console.log('Le tableau de tweet', tweets);

      const filterButton = document.createElement('button');
      filterButton.textContent = 'Filtrer';
      document.body.append(filterButton);

      let isFr = false;

      filterButton.addEventListener('click', function () {
        let tempTweets = tweets;

        if (!isFr) {
          tempTweets = tweets.filter(function (tweet) {
            return tweet.lang === 'fr';
          });
        }

        const newOl = createOl(tempTweets);

        originalOl.replaceWith(newOl);
        originalOl = newOl;
        isFr = !isFr;
      });

      let originalOl = createOl(tweets);
      document.body.append(originalOl);
    })

    .catch(function (e) { console.error(e) });

}, { once: true });
