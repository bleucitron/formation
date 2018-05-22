import createOl from './createOl';
import createTrackingBtn from './createTrackingBtn';
import createFilterBtn from './createFilterBtn';

import fetchJson from '../fetchJson';

document.addEventListener('DOMContentLoaded', function () {

  const urls = [
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
  ];

  Promise.all(urls.map(fetchJson))
  .then(([tweets1, tweets2]) => {
    const allTweets = tweets1.concat(tweets2);

    const ol = createOl(allTweets);
    const filterBtn = createFilterBtn(allTweets, ol);
    const trackingBtn = createTrackingBtn();

    document.body.append(filterBtn);
    document.body.append(trackingBtn);
    document.body.append(ol);
  })
  .catch(e => console.error(e));
}, { once: true });
