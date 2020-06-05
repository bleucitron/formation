import moment from 'moment';

export default function (tweet) {
  const monLi = document.createElement('li');

  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = tweet.text;
  dateDiv.textContent = moment(tweet.created_at).fromNow();

  textDiv.classList.add('text');
  dateDiv.classList.add('date');

  monLi.append(textDiv);
  monLi.append(dateDiv);

  return monLi;
}
