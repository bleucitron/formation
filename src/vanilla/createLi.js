import moment from 'moment';

export default function(tweet) {
  const { text, created_at: date, user } = tweet;

  const monLi = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const authorDiv = document.createElement('div');

  textDiv.textContent = text;
  authorDiv.textContent = user.name;
  dateDiv.textContent = moment(date, 'ddd MMM DD HH:mm:ss ZZ YYYY').fromNow();

  monLi.append(textDiv);
  monLi.append(dateDiv);
  monLi.append(authorDiv);

  return monLi;
}
