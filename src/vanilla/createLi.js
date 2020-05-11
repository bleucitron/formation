import moment from 'moment';

export default function (tweet) {
  const { text, created_at, user } = tweet;
  const { name } = user;

  const li = document.createElement('li');

  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');
  const userDiv = document.createElement('div');

  textDiv.textContent = text;
  dateDiv.textContent = moment(new Date(created_at)).fromNow();
  userDiv.textContent = name;

  li.classList.add('tweet');
  textDiv.classList.add('text');
  dateDiv.classList.add('date');
  userDiv.classList.add('user');

  li.append(userDiv);
  li.append(textDiv);
  li.append(dateDiv);

  return li;
}
