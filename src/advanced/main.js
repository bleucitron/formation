import fetchJson from './fetchJson';
import createTrackingButton from './createTrackingButton';
import createFilterButton from './createFilterButton';
import createOl from './createOl';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

document.addEventListener(
  'DOMContentLoaded',
  () => {
    Promise.all(urls.map(fetchJson))
      .then(resultats => {
        const tweets = resultats.flat();
        console.log('Le tableau de tweet', tweets);

        const ol = createOl(tweets);
        const filterButton = createFilterButton(tweets, ol);
        const trackingButton = createTrackingButton();

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(ol);
      })
      .catch(e => {
        console.error(e);
      });
  },
  { once: true },
);
