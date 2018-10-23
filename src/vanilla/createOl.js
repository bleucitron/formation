import createLi from './createLi';

export default function(tweets) {
  tweets.sort((tweet1, tweet2) => {
    const date1 = new Date(tweet1.created_at);
    const date2 = new Date(tweet2.created_at);
    return -(date1 - date2);
  });

  const ol = document.createElement('ol');
  tweets.map(createLi)
    .forEach(li => ol.append(li));

  return ol;
}
