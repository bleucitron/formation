import fetchJson from './fetchJson';
import createTrackingButton from './createTrackingButton';
import createOl from './createOl';
import { isTweetFr } from './utils';

document.addEventListener('DOMContentLoaded', e => {
  const urls = [
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json'
  ];

  Promise.all(urls.map(fetchJson))
  .then(([tweets1, tweets2]) => {
    const tweets = tweets1.concat(tweets2);

    console.log('Le tableau de tweet', tweets);

    createTrackingButton();

    const bouton = document.createElement('button');
    bouton.textContent = 'to Fr';
    document.body.append(bouton);

    let isFr = false;

    bouton.addEventListener('click', () => {
      let tweetsToDisplay = !isFr
        ? tweets.filter(isTweetFr)
        : tweets;

      const newOl = createOl(tweetsToDisplay);

      bouton.textContent = !isFr
        ? 'to International'
        : 'to Fr';

      ol.replaceWith(newOl);
      ol = newOl;

      isFr = !isFr;
    });

    let ol = createOl(tweets);
    document.body.append(ol);
  })
  .catch(e => console.error(e));
}, { once: true });
