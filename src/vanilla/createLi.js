import moment from 'moment';

export default function createLi(tweet) {
  const monLi = document.createElement('li');
  const monText = document.createElement('p');
  const maDate = document.createElement('p');
  const myAuthor = document.createElement('p');
  monText.textContent = tweet.text;
  myAuthor.textContent = 'by ' + tweet.user.name;
  maDate.textContent = moment(tweet.created_at).fromNow();
  monLi.append(monText, maDate, myAuthor);
  return monLi;
}
