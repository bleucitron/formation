import moment from 'moment';

export default function (tweet) {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  textDiv.textContent = tweet.text;

  li.append(textDiv);

  const dateDiv = document.createElement('div');
  dateDiv.textContent = moment(tweet.created_at).fromNow();

  li.append(dateDiv);

  const authorDiv = document.createElement('div');
  authorDiv.textContent = tweet.user.name;

  li.append(authorDiv);

  return li;
}
