import createOl from './createOl';

let isFr = false;

export default function(tweets, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtre';

  filterButton.addEventListener('click', () => {
    let tweetsToDisplay = tweets;

    if (!isFr) {
      tweetsToDisplay = tweets.filter(({ lang }) => lang === 'fr');
    }

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
