import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when given a french tweet', () => {
    expect(isTweetFr({ lang: 'fr' })).toBeTruthy();
  });

  it('should return false when given a non french tweet', () => {
    expect(isTweetFr({})).toBeFalsy();
    expect(isTweetFr({ lang: undefined })).toBeFalsy();
    expect(isTweetFr({ lang: 'en' })).toBeFalsy();
  });

  it('should throw when given no tweet', () => {
    expect(() => isTweetFr()).toThrow();
  });

  it('should return true when given a fr-ca french canadian tweet', () => {
    expect(isTweetFr({ lang: 'fr-ca' })).toBeTruthy();
  });
});
