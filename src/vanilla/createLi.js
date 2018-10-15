import moment from 'moment';

export default function (tweet) {
  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  li.append(textDiv);
  li.append(dateDiv);

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').fromNow();

  return li;
}
