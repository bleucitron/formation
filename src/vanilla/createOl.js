import createLi from './createLi';

export default function(tweets) {
  const tweetOl = document.createElement('ol');

  tweets
  .map(createLi)
  .forEach(li => tweetOl.append(li));

  return tweetOl;
}
