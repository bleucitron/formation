import { isFrenchTweet } from './utils';

describe('isTweetFr', () => {
  it('should return true when provided a french tweet', () => {
    const result = isFrenchTweet({ lang: 'fr' });

    expect(result).toBe(true);
  });

  it('should return false when provided a non french tweet', () => {
    const result = isFrenchTweet({ lang: 'en' });
    expect(result).toBe(false);

    const resultWithoutLanguage = isFrenchTweet({});
    expect(resultWithoutLanguage).toBe(false);
  });

  it('should return true when provided a canadian french tweet', () => {
    const result = isFrenchTweet({ lang: 'fr-ca' });
    expect(result).toBe(true);
  });

  it('should throw when provided with nothing', () => {
    expect(() => isFrenchTweet()).toThrow();
  });
});
