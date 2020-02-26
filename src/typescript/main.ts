import fetchJson from './fetchJson';
import createOl from './createOl';
import createFilterButton from './createFilterButton';
import createTrackingButton from './createTrackingButton';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Promise.all([url1, url2].map(fetchJson))
      .then(results => {
        const tweets = results.flat();

        console.log('Le tableau de tweets', tweets);

        let monOl = createOl(tweets);
        const trackingButton = createTrackingButton();
        const filterButton = createFilterButton(monOl, tweets);

        document.body.append(trackingButton);
        document.body.append(filterButton);
        document.body.append(monOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
