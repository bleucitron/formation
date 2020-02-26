import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when given a french tweet', () => {
    const maValeur = isTweetFr({
      lang: 'fr',
    });

    expect(maValeur).toBe(true);
  });

  it('should return false when given a non-french tweet', () => {
    const maValeur = isTweetFr({
      lang: 'en',
    });

    expect(maValeur).toBe(false);
  });

  it('should return false when given a tweet with no lang', () => {
    const maValeur = isTweetFr({ lang: undefined });

    expect(maValeur).toBe(false);
  });

  it('should return true when given a french canadian tweet', () => {
    const maValeur = isTweetFr({ lang: 'fr-ca' });

    expect(maValeur).toBe(true);
  });

  it('should throw given nothing', () => {
    expect(() => isTweetFr()).toThrow();
  });
});
