import moment from 'moment';

export default function (t) {
  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  textDiv.textContent = t.text;
  dateDiv.textContent = moment(t.created_at).fromNow();
  authorDiv.textContent = t.user.name;

  textDiv.classList.add('text');
  authorDiv.classList.add('author');

  li.append(textDiv);
  li.append(dateDiv);
  li.append(authorDiv);

  return li;
}
