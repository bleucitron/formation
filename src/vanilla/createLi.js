
const favs = new Set(
  JSON.parse(localStorage.getItem('favs'))
);

export default function (tweet) {
  const tweetLi = document.createElement('li');
  tweetLi.textContent = tweet.text;

  const fav = document.createElement('button');

  let isFav = favs.has(tweet.id);
  fav.textContent = isFav ? 'Supprimer des favs' : 'Ajouter aux favs';

  if (isFav) { tweetLi.classList.add('fav'); }

  fav.addEventListener('click', () => {
    if (isFav) {
      favs.delete(tweet.id);
    } else {
      favs.add(tweet.id);
    }

    isFav = !isFav;
    fav.textContent = isFav ? 'Supprimer des favs' : 'Ajouter aux favs';

    tweetLi.classList.toggle('fav');

    const updatedFavs = JSON.stringify(Array.from(favs));

    localStorage.setItem('favs', updatedFavs);
  });

  tweetLi.append(fav);

  return tweetLi;
}
