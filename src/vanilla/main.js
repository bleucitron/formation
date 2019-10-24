import fetchJSON from './fetchJSON';
import createOl from './createOl';
import createTracking from './createTracking';
import { isTweetFr } from './utils';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

const tableauPromesses = [url1, url2].map(fetchJSON);
// const tableauPromesses = [fetchJSON(url1), fetchJSON(url2)];

document.addEventListener(
  'DOMContentLoaded',
  function() {
    Promise.all(tableauPromesses)
      .then(tableauDeTableauDeTweets => {
        const tweets = tableauDeTableauDeTweets.flat();

        console.log('Le tableau de tweet', tweets);

        const trackingButton = createTracking();

        let monOl = createOl(tweets);

        const monFiltre = document.createElement('button');
        monFiltre.textContent = 'Filtre';

        let isFr = false;

        monFiltre.addEventListener('click', () => {
          const tweetsToDisplay = !isFr ? tweets.filter(isTweetFr) : tweets;

          const newOl = createOl(tweetsToDisplay);
          monOl.replaceWith(newOl);
          isFr = !isFr;
          monOl = newOl;
        });

        document.body.append(monFiltre);
        document.body.append(trackingButton);
        document.body.append(monOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
