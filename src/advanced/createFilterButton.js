import createOl from './createOl';
import { isFrenchTweet } from './utils';

export default function (tweets, displayedOl) {
  const button = document.createElement('button');
  button.textContent = 'Filter';

  let isFr = false;

  button.addEventListener('click', () => {
    isFr = !isFr;

    const tweetsToDisplay = isFr ? tweets.filter(isFrenchTweet) : tweets;

    const newOl = createOl(tweetsToDisplay);

    displayedOl.replaceWith(newOl);
    displayedOl = newOl;
  });

  return button;
}
