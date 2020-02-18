import createOl from './createOl';
import createFilterButton from './createFilterButton';
import fetchJson from './fetchJson';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

document.addEventListener(
  'DOMContentLoaded',
  () => {
    const p1 = fetchJson(urls[0]);
    const p2 = fetchJson(urls[1]);

    Promise.all([p1, p2])
      .then(results => {
        console.log('RESULTS', results);
        const tweets = results.flat();

        console.log('Le tableau de tweet', tweets);

        // ### TOUITTER ###

        const currentOl = createOl(tweets);
        const filterButton = createFilterButton(tweets, currentOl);

        document.body.append(filterButton);
        document.body.append(currentOl);
      })
      .catch(e => console.error(e));
  },
  { once: true },
);
