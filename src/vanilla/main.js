import fetchJson from './fetchJson';
import { isTweetFr } from './utils';
import createOl from './createOl';
import createTrackingButton from './createTrackingButton';

document.addEventListener('DOMContentLoaded', e => {
  const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
  const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

  Promise.all([url1, url2].map(fetchJson))
  .then(([tweets1, tweets2]) => {
    let tweets = tweets1.concat(tweets2);
    console.log('Le tableau de tweet', tweets);

    createTrackingButton();

    const filterButton = document.createElement('button');
    filterButton.textContent = 'to Fr';
    document.body.append(filterButton);

    let isFr = false;

    filterButton.addEventListener('click', () => {
      const newOl = isFr
        ? createOl(tweets)
        : createOl(tweets.filter(isTweetFr));

      isFr = !isFr;

      myOl.replaceWith(newOl);
      myOl = newOl;
    });

    tweets = tweets.sort((first, second) => Date.parse(second.created_at) - Date.parse(first.created_at));

    console.log('Le tableau de tweet trié', tweets);

    let myOl = createOl(tweets);
    document.body.append(myOl);
  })
  .catch(e => console.error(e));
}, { once: true });
