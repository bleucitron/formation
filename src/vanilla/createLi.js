import moment from 'moment';

export default function (tweet) {
  const li = document.createElement('li');

  const dateDiv = document.createElement('div');
  const textDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  li.append(dateDiv);
  li.append(textDiv);
  li.append(authorDiv);

  dateDiv.classList.add('date');
  textDiv.classList.add('text');
  authorDiv.classList.add('author');

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(tweet.created_at).fromNow();
  authorDiv.textContent = tweet.user.name;

  if (tweet.truncated)
    li.classList.add('truncated');

  return li;
}
