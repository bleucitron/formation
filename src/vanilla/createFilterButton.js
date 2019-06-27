import createOl from './createOl';
import { isFrenchTweet } from './utils';

let isFr = false;

export default function(tweets, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'To Fr';
  filterButton.addEventListener('click', () => {
    const tweetsToDisplay = isFr ? tweets : tweets.filter(isFrenchTweet);

    filterButton.textContent = isFr ? 'To Fr' : 'To Inter';

    const newOl = createOl(tweetsToDisplay);
    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
