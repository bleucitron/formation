import moment from 'moment';
import 'moment/locale/fr';

const favs = new Set(JSON.parse(localStorage.getItem('favs')));

export default function({ lang, id_str: id, created_at: date, text }) {
  const li = document.createElement('li');

  if (lang === 'fr') {
    li.classList.add('fr');
  } else {
    li.classList.add('other');
  }

  if (favs.has(id)) li.classList.add('fav');

  const textDiv = document.createElement('div');
  textDiv.textContent = text;
  const dateDiv = document.createElement('div');
  dateDiv.textContent = moment(new Date(date)).fromNow();
  // dateDiv.textContent = moment(
  //   tweet.created_at,
  //   'ddd MMM DD HH:mm:ss Z YYYY',
  // ).fromNow();
  const bouton = document.createElement('button');
  bouton.textContent = 'Fav';

  const contentDiv = document.createElement('div');

  bouton.addEventListener('click', () => {
    if (favs.has(id)) {
      li.classList.remove('fav');
      favs.delete(id);
    } else {
      li.classList.add('fav');
      favs.add(id);
    }

    localStorage.setItem('favs', JSON.stringify(Array.from(favs)));
  });

  contentDiv.append(textDiv);
  contentDiv.append(dateDiv);
  li.append(contentDiv);
  li.append(bouton);
  return li;
}
