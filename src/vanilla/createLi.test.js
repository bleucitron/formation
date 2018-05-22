import createLi from './createLi';

describe('createLi', () => {
  it('should throw if passed null', () => {
    expect(() => {
      createLi();
    }).toThrow();
  });

  it('should verify return object is HTMLLIElement', () => {
    expect(
      createLi({
        text: 'Blablabla',
        user: {
          name: 'Romain',
        },
      }),
    ).toBeInstanceOf(HTMLLIElement);
  });
});
