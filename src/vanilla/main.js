import fetchJson from './fetchJson';
import createOl from './createOl';

import createTrackingButton from './createTrackingButton';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const ulToReplace = document.getElementById('tweets');
    const main = document.getElementsByTagName('main')[0];

    // Promise.all([fetchJson(url), fetchJson(url2)])
    Promise.all([url1, url2].map(fetchJson))
      .then(data => {
        const tweets = data.flat();
        console.log('Le tableau de tweet', tweets);

        let displayedOl = createOl(tweets);
        ulToReplace.replaceWith(displayedOl);

        const filter = document.createElement('button');
        filter.textContent = 'To Fr';

        const trackingButton = createTrackingButton();

        let isFr = false;

        filter.addEventListener('click', () => {
          const tweetsToDisplay = !isFr
            ? tweets.filter(tweet => tweet.lang === 'fr')
            : tweets;

          filter.textContent = !isFr ? 'To Int' : 'To Fr';

          const newOl = createOl(tweetsToDisplay);

          displayedOl.replaceWith(newOl);
          displayedOl = newOl;
          isFr = !isFr;
        });

        main.prepend(filter);
        main.prepend(trackingButton);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
