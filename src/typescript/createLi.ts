import moment from 'moment';
import 'moment/locale/fr';

import { Tweet } from './interfaces';

moment.locale('fr');

export default function(tweet: Tweet) {
  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(
    tweet.created_at,
    'ddd MMM DD HH:mm:ss Z YYYY',
  ).fromNow();
  authorDiv.textContent = tweet.user.name;

  textDiv.classList.add('texte');
  dateDiv.classList.add('date');
  authorDiv.classList.add('auteur');

  li.append(dateDiv);
  li.append(textDiv);
  li.append(authorDiv);

  return li;
}
