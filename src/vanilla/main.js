import createOl from './createOl';
import jsonGet from './jsonGet';
import { isFr } from './utils';

document.addEventListener('DOMContentLoaded', () => {
  const url = 'https://raw.githubusercontent.com/iOiurson/formation/corrig%C3%A9/data/tweets.json';
  const url2 = 'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json';

  const myP = jsonGet(url);
  const myP2 = jsonGet(url2);

  Promise.all([ myP, myP2 ])
    .then(([ tweets1, tweets2 ]) => {
      const tweets = tweets1.concat(tweets2);

      console.log('Le tableau de tweet', tweets);

      const filterButton = document.createElement('button');
      filterButton.textContent = 'Filtrer';
      document.body.append(filterButton);

      let isLangFr = false;

      filterButton.addEventListener('click', () => {
        let tempTweets = tweets;

        if (!isLangFr) { tempTweets = tweets.filter(isFr); }

        const newOl = createOl(tempTweets);

        originalOl.replaceWith(newOl);
        originalOl = newOl;
        isLangFr = !isLangFr;
      });

      let originalOl = createOl(tweets);
      document.body.append(originalOl);
    })
    .catch(e => console.error(e));
}, { once: true });
