import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

export default function(tweet) {
  const { text, user, created_at: createdAt } = tweet;
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = text;
  authorDiv.textContent = user.name;
  dateDiv.textContent = moment(new Date(createdAt)).fromNow();

  textDiv.classList.add('text');
  authorDiv.classList.add('author');
  dateDiv.classList.add('date');

  li.classList.add('tweet');

  li.append(textDiv);
  li.append(authorDiv);
  li.append(dateDiv);

  return li;
}
