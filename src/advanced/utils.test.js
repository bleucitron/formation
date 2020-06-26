import { isFrenchTweet } from './utils';

describe('isFrenchTweet', () => {
  it('should return true for a french tweet', () => {
    const result = isFrenchTweet({ lang: 'fr' });

    expect(result).toBe(true);
  });

  it('should return false for a non french tweet', () => {
    const result = isFrenchTweet({ lang: 'eeeee' });

    expect(result).toBe(false);
  });

  it('should return true for a french canadian tweet', () => {
    const result = isFrenchTweet({ lang: 'fr-ca' });

    expect(result).toBe(true);
  });
});
