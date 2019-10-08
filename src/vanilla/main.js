import fetchJson from './fetchJson';
import createTrackingButton from './createTrackingButton';
import createOl from './createOl';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    Promise.all([url1, url2].map(fetchJson))
      .then(function(tweets) {
        tweets = tweets[0].concat(tweets[1]);
        console.log('Le tableau de tweet', tweets);

        const trackingButton = createTrackingButton();

        let displayedOl = createOl(tweets);

        const filterButton = document.createElement('button');
        filterButton.textContent = 'Filtrer';

        let isFr = false;

        filterButton.addEventListener('click', function() {
          const tweetsToDisplay = isFr
            ? tweets
            : tweets.filter(function(tweet) {
                return tweet.lang === 'fr';
              });

          const newOl = createOl(tweetsToDisplay);

          displayedOl.replaceWith(newOl);
          displayedOl = newOl;
          isFr = !isFr;
        });

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(displayedOl);
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
