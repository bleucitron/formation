"use strict";

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://raw.githubusercontent.com/iOiurson/formation/corrig%C3%A9/data/tweets.json';
  const url2 = 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json';

  const myP = jsonGet(url);
  const myP2 = jsonGet(url2);

  Promise.all([ myP, myP2 ])
  .then(([ tweets1, tweets2 ]) => {

    const tweets = tweets1.concat(tweets2);

    console.log('Le tableau de tweet', tweets);

    const filterButton = document.createElement('button');
    filterButton.textContent = 'Filtrer';
    document.body.append(filterButton);

    let isFr = false;

    filterButton.addEventListener('click', () => {
      let tempTweets = tweets;

      if (!isFr)
        tempTweets = tweets.filter(tweet => tweet.lang === 'fr');

      const newOl = createOl(tempTweets);

      originalOl.replaceWith(newOl);
      originalOl = newOl;
      isFr = !isFr;
    });

    let originalOl = createOl(tweets);
    document.body.append(originalOl);
  })
  .catch(e => console.error(e));

}, { once: true });
