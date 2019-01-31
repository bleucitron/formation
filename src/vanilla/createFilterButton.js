import createOl from './createOl';
import { isFrenchTweet } from './utils';

let isFr = false;

export default function (tweets, ol) {
  const filterBtn = document.createElement('button');
  filterBtn.textContent = 'Filter';

  filterBtn.addEventListener('click', () => {
    let tweetsToDisplay = tweets;

    if (!isFr)
      tweetsToDisplay = tweets.filter(isFrenchTweet);

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    isFr = !isFr;
    ol = newOl;
  });

  return filterBtn;
}
