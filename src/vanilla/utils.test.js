import { isFrenchTweet } from './utils';

describe('isFrenchTweet', () => {
  it('doit retourner true pour un tweet en français', () => {
    expect(isFrenchTweet({ lang: 'fr' })).toBe(true);
  });
  it('doit retourner false pour un tweet non français', () => {
    expect(isFrenchTweet({ lang: 'en' })).toBe(false);
    expect(isFrenchTweet({})).toBeFalsy();
  });
  it('doit retourner true pour un tweet québécois', () => {
    expect(isFrenchTweet({ lang: 'fr-ca' })).toBe(true);
  });
  it("doit lever une exception quand rien n'est fourni", () => {
    expect(() => isFrenchTweet()).toThrow();
  });
});
