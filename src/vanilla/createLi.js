import moment from 'moment';

export default function(tweet) {
  const { text, created_at: date, user } = tweet;

  const monLi = document.createElement('li');
  const monText = document.createElement('div');
  const maDate = document.createElement('div');
  const monAuteur = document.createElement('div');

  monText.textContent = text;
  monAuteur.textContent = user.name;
  maDate.textContent = moment(new Date(date)).fromNow();

  monLi.append(monText, maDate, monAuteur);

  return monLi;
}
