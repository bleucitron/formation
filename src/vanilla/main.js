import fetchJson from './fetchJson';
import createFilterButton from './createFilterButton';
import createTrackingButton from './createTrackingButton';
import createOl from './createOl';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Promise.all([url1, url2].map(fetchJson))
      .then(([tweets1, tweets2]) => {
        const tweets = tweets1.concat(tweets2);
        console.log('Le tableau de tweet', tweets);

        const displayedOl = createOl(tweets);

        const trackingButton = createTrackingButton();
        const filterButton = createFilterButton(tweets, displayedOl);

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(displayedOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
