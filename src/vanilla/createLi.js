'use strict';

const favsFromLocalStorage = localStorage.getItem('favs');

const favs = favsFromLocalStorage
  ? new Set(JSON.parse(favsFromLocalStorage))
  : new Set();

function createLi(tweet) {
  const li = document.createElement('li');

  const div = document.createElement('div');
  div.textContent = tweet.text;

  const button = document.createElement('button');
  button.textContent = 'Fav';

  if (favs.has(tweet.id)) li.classList.add('fav');

  button.addEventListener('click', function() {
    if (!favs.has(tweet.id)) {
      favs.add(tweet.id);
    } else {
      favs.delete(tweet.id);
    }

    li.classList.toggle('fav');

    localStorage.setItem('favs', JSON.stringify([...favs]));
  });

  li.append(div);
  li.append(button);

  return li;
}
