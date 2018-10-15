import { isTweetFr, isTweetAuthor } from './utils';

describe('isTweetFr', () => {
  it('should return true when given a tweet in french', () => {
    const tweet = { lang: 'fr' };

    expect(isTweetFr(tweet)).toBeTruthy();
  });

  it('should return true when given a tweet in english', () => {
    const tweet = { lang: 'en' };

    expect(isTweetFr(tweet)).toBeFalsy();
  });

  it('should return true when given a tweet in belgian french', () => {
    const tweet = { lang: 'fr_be' };

    expect(isTweetFr(tweet)).toBeTruthy();
  });
});

describe('isTweetAuthor', () => {
  it('should return true when given a tweet with the right author', () => {
    const tweet = {
      user: {
        name: 'test'
      }
    };

    expect(isTweetAuthor(tweet, 'test')).toBeTruthy();
  });
});
