import createOl from './createOl';
import { isTweetFr } from './utils';

export default function(tweets, container) {
  const monFiltre = document.createElement('button');
  monFiltre.textContent = 'Filtre';

  let isFr = false;

  monFiltre.addEventListener('click', () => {
    const tweetsToDisplay = !isFr ? tweets.filter(isTweetFr) : tweets;

    const newOl = createOl(tweetsToDisplay);
    container.replaceWith(newOl);
    isFr = !isFr;
    container = newOl;
  });

  return monFiltre;
}
