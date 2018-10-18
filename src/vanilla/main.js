import createTrackingButton from './createTrackingButton';
import createOl from './createOl';
import fetchJson from './fetchJson';

document.addEventListener('DOMContentLoaded', function (e){

  createTrackingButton();

  const maP1 = fetchJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json');
  const maP2 = fetchJson('https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json');

  Promise.all([maP1, maP2])
    .then(function (tabDeTabTweets) {

      const tweets = tabDeTabTweets[0].concat(tabDeTabTweets[1]);
      console.log('Le tableau de tweet', tweets);

      const button = document.createElement('button');
      button.textContent = 'Filtrer';
      document.body.append(button);

      const countDiv = document.createElement('div');
      document.body.append(countDiv);

      const countRT = tweets.filter(function(tweet) {
        return tweet.truncated;
      }).length;

      countDiv.textContent = countRT;

      let isFr = false;

      button.addEventListener('click', function () {
        let tweetsToDisplay = tweets;

        if (!isFr) {
          tweetsToDisplay = tweets.filter(function (tweet) {
            return tweet.lang == 'fr';
          });
        }

        const newOl = createOl(tweetsToDisplay);

        ol.replaceWith(newOl);
        ol = newOl;
        isFr = !isFr;
      });

      let ol = createOl(tweets);
      document.body.append(ol);
    })
    .catch(function (e) { console.error(e) });

}, { once: true })
