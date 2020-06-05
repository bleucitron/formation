import fetchJson from './fetchJson';
import createOl from './createOl';
import createFilterButton from './createFilterButton';
import createTrackingButton from './createTrackingButton';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

const mesPromesses = urls.map(fetchJson);

document.addEventListener(
  'DOMContentLoaded',
  function (e) {
    Promise.all(mesPromesses)
      .then(function (data) {
        const tweets = data.flat();
        console.log('Le tableau de tweet chargé', tweets);

        const monOl = createOl(tweets);
        const filterButton = createFilterButton(tweets, monOl);
        const trackingButton = createTrackingButton();

        document.body.append(trackingButton);
        document.body.append(filterButton);
        document.body.append(monOl);
      })
      .catch(function (e) {
        console.error(e);
      });
  },
  { once: true },
);
