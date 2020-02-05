import moment from 'moment';
import 'moment/locale/es';

interface User {
  name: string;
}

export interface Tweet {
  id: string;
  text: string;
  lang: string;
  created_at: string;
  user: User;
}

const favsFromLocalStorage = localStorage.getItem('favs');

const favs = favsFromLocalStorage
  ? new Set(JSON.parse(favsFromLocalStorage))
  : new Set();

export default function(tweet: Tweet) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  textDiv.textContent = tweet.text;

  const authorDiv = document.createElement('div');
  authorDiv.textContent = tweet.user.name;

  const dateDiv = document.createElement('div');
  dateDiv.textContent = moment(new Date(tweet.created_at)).fromNow();

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

  textDiv.classList.add('text');
  authorDiv.classList.add('author');
  dateDiv.classList.add('date');

  li.append(textDiv);
  li.append(authorDiv);
  li.append(dateDiv);
  li.append(button);

  return li;
}
