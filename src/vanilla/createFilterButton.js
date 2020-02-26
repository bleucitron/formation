import createOl from './createOl';

let isFr = false;

export default function(ol, tweets) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filter';

  filterButton.addEventListener('click', () => {
    const tweetsToDisplay = !isFr
      ? tweets.filter(tweet => tweet.lang === 'fr')
      : tweets;

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
