import fetchJSON from './fetchJSON';
import createOl from './createOl';
import createTracking from './createTracking';
import createFilter from './createFilter';

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

        const monOl = createOl(tweets);
        const trackingButton = createTracking();
        const filterButton = createFilter(tweets, monOl);

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(monOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
