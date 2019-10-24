export function isTweetFr(tweet) {
  // return tweet.lang === 'fr' || tweet.lang === 'fr-ca';
  // return ['fr', 'fr-ca'].includes(tweet.lang);
  return tweet.lang ? tweet.lang.startsWith('fr') : false;
}
