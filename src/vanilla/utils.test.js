import { isFrenchTweet } from './utils';

describe('isFrenchTweet', () => {
  it('should return true when given a french tweet', () => {
    expect(isFrenchTweet({ lang: 'fr' })).toBe(true);
  });
  it('should return false when given a non french tweet', () => {
    expect(isFrenchTweet({ lang: 'esdsn' })).toBe(false);
    expect(isFrenchTweet({})).toBeFalsy();
  });
  it('should return true when given a french canadian tweet', () => {
    expect(isFrenchTweet({ lang: 'fr_ca' })).toBe(true);
  });
  it('should throw when given nothing', () => {
    expect(() => isFrenchTweet()).toThrow();
  });
});
