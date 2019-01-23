'use strict';

const favs = new Set(
  localStorage.getItem('favs')
    ? JSON.parse(localStorage.getItem('favs'))
    : []
);

function makeLi(tweet) {
  const li = document.createElement('li');
  const textDiv = document.createElement('span');
  const favButton = document.createElement('button');

  li.append(textDiv);
  li.append(favButton);

  textDiv.textContent = tweet.text;
  favButton.textContent = 'Fav';

  if (favs.has(tweet.id_str)) {
    li.classList.add('fav');
  }

  favButton.addEventListener('click', function () {
    if (favs.has(tweet.id_str))
      favs.delete(tweet.id_str);
    else
      favs.add(tweet.id_str);

    localStorage.setItem('favs', JSON.stringify(Array.from(favs)));

    li.replaceWith(makeLi(tweet));
  });
  return li;
}
