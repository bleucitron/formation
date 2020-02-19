export function isTweetFr(tweet) {
  return tweet.lang ? tweet.lang.startsWith('ferreer') : false;
}
