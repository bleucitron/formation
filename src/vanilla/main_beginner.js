import fetchJson from './fetchJson';
import createUl from './createUl';
import createTrackingButton from './createTrackingButton';

function checkFr(tweet) {
  return tweet.lang === 'fr';
}

// Promise.all([
//   fetchJson(
//     'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
//   ),
//   fetchJson(
//     'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
//   ),
// ]);

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';

const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

const urls = [url1, url2];
const myPs = urls.map(fetchJson);

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Promise.all(myPs)
      .then(function (results) {
        let tweets = results.flat();
        console.log('Le tableau de tweet', tweets);

        // ### 2/ Twitter ###
        let monUl = createUl(tweets);

        let isFr = false;
        const bouton = document.createElement('button');
        bouton.textContent = 'Filtrer';

        bouton.addEventListener('click', () => {
          isFr = !isFr;

          const tweetsToDisplay = isFr ? tweets.filter(checkFr) : tweets;

          const newUl = createUl(tweetsToDisplay);

          monUl.replaceWith(newUl);
          monUl = newUl;
        });

        // const filterButton = createFilterButton();
        const trackingButton = createTrackingButton();

        document.body.append(bouton);
        document.body.append(trackingButton);
        document.body.append(monUl);
      })
      .catch(e => {
        console.error(e);
      });
  },
  { once: true },
);
