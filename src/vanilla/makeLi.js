import moment from 'moment';

const favs = new Set(
  localStorage.getItem('favs')
    ? JSON.parse(localStorage.getItem('favs'))
    : []
);

export default function makeLi (tweet) {
  const { text, id_str: idStr, created_at: date } = tweet;

  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const favButton = document.createElement('button');

  li.append(textDiv);
  li.append(dateDiv);
  li.append(favButton);

  textDiv.textContent = text;
  dateDiv.textContent = moment(new Date(date)).fromNow();
  favButton.textContent = 'Fav';

  if (favs.has(idStr))
    li.classList.add('fav');

  favButton.addEventListener('click', () => {
    if (favs.has(idStr))
      favs.delete(idStr);
    else
      favs.add(idStr);

    localStorage.setItem('favs', JSON.stringify(Array.from(favs)));

    li.replaceWith(makeLi(tweet));
  });
  return li;
}
