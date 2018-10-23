import createOl from './createOl';
import { isTweetFr } from './utils';

export default function(tweets, ol) {
  const button = document.createElement('button');
  button.textContent = 'to Fr';

  let isFr = false;

  button.addEventListener('click', () => {
    const tweetsToDisplay = isFr ? tweets : tweets.filter(isTweetFr);
    button.textContent = isFr ? 'to Fr' : 'to Int';

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return button;
}
