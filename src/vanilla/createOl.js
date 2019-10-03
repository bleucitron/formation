import createLi from './createLi';

export default listeDeTweets => {
  const ol = document.createElement('ol');

  listeDeTweets.forEach(tweet => ol.append(createLi(tweet)));

  return ol;
};
