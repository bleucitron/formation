import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when given a french tweet', () => {
    const result = isTweetFr({
      lang: 'fr',
    });

    expect(result).toBe(true);
  });

  it('should return false when given an english tweet', () => {
    const result = isTweetFr({
      lang: 'en',
    });

    expect(result).toBe(false);
  });

  it('should return false when given an tweet without lang', () => {
    const result = isTweetFr({});

    expect(result).toBe(false);
  });

  it('should return true when given an french canadian tweet', () => {
    const result = isTweetFr({
      lang: 'fr-ca',
    });

    expect(result).toBe(true);
  });

  it('should throw when given nothing', () => {
    expect(() => isTweetFr()).toThrow();
  });
});
