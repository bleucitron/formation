import createOl from './createOl';
import checkFr from './checkFr';

export default function (twts, displayedOl) {
  let isFr = false;

  const bouton = document.createElement('button');
  bouton.textContent = 'To Fr';

  bouton.addEventListener('click', function () {
    isFr = !isFr;

    let displayedTweets = twts;

    if (isFr) {
      displayedTweets = twts.filter(checkFr);
    }
    // const displayedTweets = isFr ? tweets.filter(checkFr) : tweets;

    const newOl = createOl(displayedTweets);

    bouton.textContent = isFr ? 'To All' : 'To Fr';

    displayedOl.replaceWith(newOl);
    displayedOl = newOl;
  });

  return bouton;
}
