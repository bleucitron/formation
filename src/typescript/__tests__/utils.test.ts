import { Tweet } from '../createLi';
import { isTweetFr } from '../utils';

describe('isTweetFr', () => {
  it('should return true when given a french tweet', () => {
    const tweet = { lang: 'fr' } as Tweet;
    expect(isTweetFr(tweet)).toBe(true);
  });

  it('should return false when given a non-french tweet', () => {
    const tweet = { lang: 'en' } as Tweet;
    expect(isTweetFr(tweet)).toBe(false);
    expect(isTweetFr({} as Tweet)).toBe(false);
  });

  it('should return true when given a french-canadian tweet', () => {
    const tweet = { lang: 'fr-ca' } as Tweet;
    expect(isTweetFr(tweet)).toBe(true);
  });

  it('should throw when given nothing', () => {
    expect(() => isTweetFr(undefined)).toThrow();
  });
});
