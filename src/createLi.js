import moment from 'moment';

export default function createLi(tweet) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  const date = moment(tweet.created_at).fromNow();

  textDiv.textContent = tweet.text;
  dateDiv.textContent = date;
  authorDiv.textContent = tweet.user.screen_name;

  li.append(authorDiv);
  li.append(textDiv);
  li.append(dateDiv);

  li.classList.add('tweet');
  dateDiv.classList.add('date');
  textDiv.classList.add('text');
  authorDiv.classList.add('author');

  return li;
}
