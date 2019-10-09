import createOl from './createOl';
import { isFrenchTweet } from './utils';

let isFr = false;

export default (tweets, displayedOl) => {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtrer';

  filterButton.addEventListener('click', () => {
    const tweetsToDisplay = isFr ? tweets : tweets.filter(isFrenchTweet);

    const newOl = createOl(tweetsToDisplay);

    displayedOl.replaceWith(newOl);
    displayedOl = newOl;
    isFr = !isFr;
  });

  return filterButton;
};
