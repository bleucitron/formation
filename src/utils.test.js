import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when given a french tweet', () => {
    const result = isTweetFr({
      lang: 'fr',
    });

    expect(result).toBe(true);
  });

  it('should return false when given a non french tweet', () => {
    expect(
      isTweetFr({
        lang: 'en',
      }),
    ).toBe(false);

    expect(isTweetFr({})).toBe(false);
  });

  it('should return true when given a french canadian tweet', () => {
    expect(
      isTweetFr({
        lang: 'fr-ca',
      }),
    ).toBe(true);
  });

  it('should throw when given nothing', () => {
    expect(() => isTweetFr()).toThrow();
  });
});
