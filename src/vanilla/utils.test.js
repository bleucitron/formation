import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when passed a french tweet', () => {
    expect(isTweetFr({ lang: 'fr' })).toBe(true);
  });
  it('should return false when passed a non french tweet', () => {
    expect(isTweetFr({ lang: 'en' })).toBe(false);
    expect(isTweetFr({ })).toBeFalsy();
  });
  it('should throw when passed null', () => {
    expect(() => isTweetFr()).toThrow();
  });
  it('should return true when passed a french canadian tweet', () => {
    expect(isTweetFr({ lang: 'fr_ca' })).toBe(true);
  });
});
