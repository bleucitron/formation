import moment from 'moment';

export default tweet => {
  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(tweet.created_at, 'ddd MMM DD HH:mm:ss Z YYYY').fromNow();

  li.append(textDiv);
  li.append(dateDiv);

  return li;
}
