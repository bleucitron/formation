export function isTweetFr (tweet) {
  return tweet.lang && tweet.lang.startsWith('fr');
};
