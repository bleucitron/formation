'use strict';

function createFilterButton(tweets, displayedOl) {
  const button = document.createElement('button');
  button.textContent = 'Filter';

  let isFr = false;

  button.addEventListener('click', () => {
    isFr = !isFr;

    const tweetsToDisplay = isFr
      ? tweets.filter(tweet => tweet.lang === 'fr')
      : tweets;

    const newOl = createOl(tweetsToDisplay);

    displayedOl.replaceWith(newOl);
    displayedOl = newOl;
  });

  return button;
}
