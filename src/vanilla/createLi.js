import moment from 'moment';

export default ({ text, created_at: date }) => {
  const li = document.createElement('li');
  const textDiv = document.createElement('div');
  const dateDiv = document.createElement('div');

  textDiv.textContent = text;
  dateDiv.textContent = moment(date, 'ddd MMM DD HH:mm:ss Z YYYY').fromNow();

  li.append(textDiv, dateDiv);

  return li;
};
