import moment from 'moment';
import { Tweet } from './interfaces';

export default function(tweet: Tweet) {
  const { text, created_at, user } = tweet;

  const monLi = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  textDiv.textContent = text;
  authorDiv.textContent = user.name;
  dateDiv.textContent = moment(
    created_at,
    'ddd MMM DD HH:mm:ss ZZ YYYY',
  ).fromNow();

  monLi.append(textDiv);
  monLi.append(dateDiv);
  monLi.append(authorDiv);

  return monLi;
}
