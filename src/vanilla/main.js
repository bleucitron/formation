import createOl from './createOl';
import fetchJson from './fetchJson';
import createTrackingButton from './createTrackingButton';
import createFilterButton from './createFilterButton';

document.addEventListener('DOMContentLoaded', () => {
  const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
  const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

  Promise.all([url1, url2].map(fetchJson))
  .then(([tweets1, tweets2]) => {
    const tweets = [...tweets1, ...tweets2];

    console.log('Le tableau de tweet', tweets);

    const trackingBtn = createTrackingButton();

    const ol = createOl(tweets);
    const filterBtn = createFilterButton(tweets, ol);

    document.body.append(trackingBtn);
    document.body.append(filterBtn);
    document.body.append(ol);
  })
  .catch(e => console.error(e));
}, { once: true });
