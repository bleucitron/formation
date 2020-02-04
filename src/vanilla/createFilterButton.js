'use strict';

let isFr = false;

function createFilterButton(tweets, ol) {
  const filterButton = document.createElement('button');
  filterButton.textContent = 'Filtre';

  filterButton.addEventListener('click', function() {
    const tweetsToDisplay = isFr
      ? tweets
      : tweets.filter(function(tweet) {
          return tweet.lang === 'fr';
        });

    const newOl = createOl(tweetsToDisplay);

    ol.replaceWith(newOl);
    ol = newOl;
    isFr = !isFr;
  });

  return filterButton;
}
