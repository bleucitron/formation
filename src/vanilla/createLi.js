import moment from 'moment';

export default function({ text, user, created_at }) {
  const { name, screen_name } = user;

  const li = document.createElement('li');
  const pic = document.createElement('div');

  const wrapper = document.createElement('div');

  const header = document.createElement('header');
  const n = document.createElement('div');
  const tag = document.createElement('div');
  const date = document.createElement('div');
  const t = document.createElement('div');

  li.classList.add('tweet');
  pic.classList.add('picture');
  wrapper.classList.add('wrapper');
  n.classList.add('name');
  tag.classList.add('tag');
  date.classList.add('date');
  t.classList.add('text');

  n.textContent = name;
  tag.textContent = screen_name;
  date.textContent = moment(created_at).fromNow();
  t.textContent = text;

  li.append(header, wrapper);
  wrapper.append(header, t);
  header.append(n, tag, date);

  return li;
}
