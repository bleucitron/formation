// 1) tester que isTweetFr renvoie vrai pour un tweet en francais

// 2) tester que isTweetFr renvoie false pour un tweet en anglais
// 2bis) tester que isTweetFr renvoie faux pour un tweet sans langue

// 3) tester que isTweetFr renvoie vrai pour un tweet en francais canadien (fr-ca)

// 4) tester que isTweetFr jette une exception pour un tweet undefined


import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('should return true when passed a french tweet', () => {
    expect(isTweetFr({ lang: 'fr' })).toBeTruthy();
  });

  it('should return false when passed a non-french tweet', () => {
    expect(isTweetFr({ lang: 'en' })).toBeFalsy();
    expect(isTweetFr({ lang: undefined })).toBeFalsy();
    expect(isTweetFr({ })).toBeFalsy();
  });

  it('should return true when passed a french canadian tweet', () => {
    expect(isTweetFr({ lang: 'fr-ca' })).toBeTruthy();
  });

  it('should throw when passed null', () => {
    expect(() => isTweetFr()).toThrow();
  });
});
