import { isTweetFr } from './utils';

describe('isTweetFr', () => {
  it('doit renvoyer VRAI pour un tweet en français', () => {
    const result = isTweetFr({ lang: 'fr' });

    expect(result).toBe(true);
  });

  it('doit renvoyer FAUX pour un tweet qui n est pas français', () => {
    expect(isTweetFr({ lang: 'en' })).toBe(false);
    expect(isTweetFr({})).toBe(false);
  });

  it('doit renvoyer TRUE pour un tweet québécois', () => {
    expect(isTweetFr({ lang: 'fr-ca' })).toBe(true);
  });

  it('doit exploser quand on lui passe rien', () => {
    expect(() => isTweetFr()).toThrow();
  });
});
