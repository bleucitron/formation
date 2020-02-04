'use strict';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

document.addEventListener(
  'DOMContentLoaded',
  function(e) {
    const allPs = [url1, url2].map(fetchJson);

    Promise.all(allPs)
      .then(function(results) {
        const tweets = results.flat();
        console.log('Le tableau de tweet', tweets);

        // ### 2/ Twitter ###
        const ol = createOl(tweets);

        const trackingButton = createTrackingButton();
        const filterButton = createFilterButton(tweets, ol);

        document.body.append(filterButton);
        document.body.append(trackingButton);
        document.body.append(ol);
      })
      .catch(function(e) {
        console.error(e);
      });
  },
  { once: true },
);
