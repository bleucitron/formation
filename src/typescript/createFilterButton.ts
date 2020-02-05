import { Tweet } from './createLi';
import createOl from './createOl';

let isFr = false;

export default function(tweets: Tweet[], ol: HTMLOListElement) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtre';

  filterButton.addEventListener('click', function() {
    const tweetsToDisplay = isFr
      ? tweets
      : tweets.filter(function(tweet: Tweet) {
          return tweet.lang === 'fr';
        });

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
