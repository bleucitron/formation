import { isFrenchTweet } from './utils';

describe('isFrenchTweet', () => {
  it('should return true when passed a french tweet', () => {
    const result = isFrenchTweet({
      lang: 'fr',
    });

    expect(result).toBeTruthy();
  });

  it('should return true when passed a french tweet', () => {
    const result = isFrenchTweet({
      lang: 'fr_ca',
    });

    expect(result).toBeTruthy();
  });

  it('should return true when passed a french tweet', () => {
    expect(isFrenchTweet({})).toBeFalsy();
  });

  it('should throw if passed null', () => {
    expect(() => {
      isFrenchTweet();
    }).toThrow();
  });
});
