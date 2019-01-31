import moment from 'moment';

export default function ({ text, created_at: date, user }) {
  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const authorDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = text;
  dateDiv.textContent = moment(new Date(date)).fromNow();
  authorDiv.textContent = user.name;

  li.classList.add('tweet');
  textDiv.classList.add('text');
  dateDiv.classList.add('date');
  authorDiv.classList.add('author');

  li.append(dateDiv);
  li.append(textDiv);
  li.append(authorDiv);

  return li;
}
