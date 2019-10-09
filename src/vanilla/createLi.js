import moment from 'moment';
import 'moment/locale/fr';

export default tweet => {
  const { text, created_at: date, user } = tweet;

  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const tagDiv = document.createElement('div');

  textDiv.textContent = text;
  dateDiv.textContent = moment(new Date(date)).fromNow();
  authorDiv.textContent = user.name;
  tagDiv.textContent = '@' + user.screen_name;

  textDiv.classList.add('text');
  dateDiv.classList.add('date');
  authorDiv.classList.add('author');
  tagDiv.classList.add('tag');

  li.append(textDiv, dateDiv, authorDiv, tagDiv);

  return li;
};
