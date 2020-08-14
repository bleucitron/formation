import createOl from './createOl';
import createFilterButton from './createFilterButton';

function getTweets(url) {
  return fetch(url).then(function (resp) {
    return resp.json();
  });
}

const p1 = getTweets(
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
);

const p2 = getTweets(
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
);

document.addEventListener(
  'DOMContentLoaded',
  function () {
    Promise.all([p1, p2])
      .then(function (tweets) {
        tweets = tweets.flat();
        console.log('Le tableau de tweet', tweets);

        const initialOl = createOl(tweets);
        const bouton = createFilterButton(tweets, initialOl);

        document.body.append(bouton);
        document.body.append(initialOl);
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
