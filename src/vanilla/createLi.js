import moment from 'moment';

export default function({ text, user, created_at: createdAt }) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  const date = moment(createdAt, 'ddd MMM DD HH:mm:ss ZZ YYYY');

  textDiv.textContent = text;
  dateDiv.textContent = date.fromNow();
  authorDiv.textContent = user.name;

  textDiv.classList.add('text');
  dateDiv.classList.add('date');
  authorDiv.classList.add('author');

  li.append(dateDiv);
  li.append(textDiv);
  li.append(authorDiv);

  return li;
}
