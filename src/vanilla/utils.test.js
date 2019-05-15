import isFrenchTweet from './utils';

describe('isFrenchTweet', () => {

  it('should output true when given a french tweet', () => {
    var maValeur = isFrenchTweet({
      lang: 'fr'
    });

    expect(maValeur).toBe(true);
  });

  it('should output false when given a non french tweet', () => {
    var maValeur = isFrenchTweet({
      lang: 'en'
    });

    expect(maValeur).toBe(false);
  });

  it('should output true when given a french canadian tweet', () => {
    var maValeur = isFrenchTweet({
      lang: 'fr_ca'
    });

    expect(maValeur).toBe(true);
  });
});

