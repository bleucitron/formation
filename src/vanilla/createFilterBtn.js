import createOl from './createOl';
import { isFrenchTweet } from '../utils';

export default function(tweets, element) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'to Fr';

  let isFr = false;

  filterButton.addEventListener('click', () => {
    let newOl;

    if (isFr) {
      newOl = createOl(tweets);
      filterButton.textContent = 'to All';
    } else {
      newOl = createOl(tweets.filter(isFrenchTweet));
      filterButton.textContent = 'to Fr';
    }

    element.replaceWith(newOl);
    element = newOl;

    isFr = !isFr;
  });

  return filterButton;
}
