import { isFr } from './utils';

describe('isFr', () => {
  it('should return true when a french tweet is passed', () => {
    expect(isFr({
      lang: 'fr'
    })).toBe(true);
  });

  it('should throw when passed undefined', () => {
    expect(
      () => isFr()
    ).toThrow();
  });
});
