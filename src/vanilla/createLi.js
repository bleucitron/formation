import moment from 'moment';
import 'moment/locale/fr';

const favs = new Set(JSON.parse(localStorage.getItem('favs')));

export default function({ lang, id_str, created_at, text }) {
  const li = document.createElement('li');

  if (lang === 'fr') {
    li.classList.add('fr');
  } else {
    li.classList.add('other');
  }

  if (favs.has(id_str)) li.classList.add('fav');

  const textDiv = document.createElement('div');
  textDiv.textContent = text;
  const dateDiv = document.createElement('div');
  dateDiv.textContent = moment(new Date(created_at)).fromNow();
  // dateDiv.textContent = moment(
  //   tweet.created_at,
  //   'ddd MMM DD HH:mm:ss Z YYYY',
  // ).fromNow();
  const bouton = document.createElement('button');
  bouton.textContent = 'Fav';

  const contentDiv = document.createElement('div');

  bouton.addEventListener('click', () => {
    if (favs.has(id_str)) {
      li.classList.remove('fav');
      favs.delete(id_str);
    } else {
      li.classList.add('fav');
      favs.add(id_str);
    }

    localStorage.setItem('favs', JSON.stringify(Array.from(favs)));
  });

  contentDiv.append(textDiv);
  contentDiv.append(dateDiv);
  li.append(contentDiv);
  li.append(bouton);
  return li;
}
