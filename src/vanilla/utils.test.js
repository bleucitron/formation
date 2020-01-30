import { checkTweetLang } from './checkTweetLang';

describe('checkTweetLang', () => {
  it('should return true when given a french tweet', () => {
    const maValeur = checkTweetLang({ lang: 'fr' });

    expect(maValeur).toBe(true);
  });

  it('should return false when given a non-french tweet', () => {
    const maValeur = checkTweetLang({ lang: 'ederw' });

    expect(maValeur).toBe(false);
  });

  it('should return true when given a french canadian tweet', () => {
    const maValeur = checkTweetLang({ lang: 'fr-ca' });

    expect(maValeur).toBe(true);
  });
});
