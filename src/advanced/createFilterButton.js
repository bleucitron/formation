import createOl from './createOl';

let isFr = false;

export default function (tweets, ol) {
  const button = document.createElement('button');
  button.textContent = 'Filtrer';

  button.addEventListener('click', () => {
    isFr = !isFr;

    const tweetsToDisplay = isFr
      ? tweets.filter(tweet => tweet.lang === 'fr')
      : tweets;

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
  });

  return button;
}
