export function isTweetFr (tweet) {
  return tweet.lang.startsWith('fr');
}

export function isTweetAuthor (tweet, author) {
  return tweet.user.name === author;
}
