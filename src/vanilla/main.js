import fetchJson from './fetchJson';
import makeOl from './makeOl';
import makeTrackingButton from './makeTrackingButton';
import { isTweetFr } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  document.body.append(makeTrackingButton());

  const urls = [
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
  ];

  Promise.all(urls.map(fetchJson))
  .then(([list1, list2]) => {
    const tweets = list1.concat(list2);
    console.log('Le tableau de tweet', tweets);

    const button = document.createElement('button');
    button.textContent = 'Filtrer';
    document.body.append(button);

    let ol = makeOl(tweets);
    document.body.append(ol);

    let isFr = false;

    button.addEventListener('click', () => {
      const tweetsToDisplay = !isFr
        ? tweets.filter(isTweetFr)
        : tweets;

      const newOl = makeOl(tweetsToDisplay);

      ol.replaceWith(newOl);
      ol = newOl;
      isFr = !isFr;
    });
  })
  .catch(e => console.error(e));
}, { once: true });
