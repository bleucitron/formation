import createLi from './createLi';

export default function(tweets) {
  const ol = document.createElement('ol');

  tweets.map(createLi).forEach(function(li) {
    ol.append(li);
  });

  return ol;
}
