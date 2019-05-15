import createLi from './createLi';

describe('createLi', () => {

  it('should output a LI element when given a tweet', () => {
    var monElement = createLi({
      text: 'le texte',
      created_at: '27/05/2019'
    });

    expect(monElement).toBeInstanceOf(HTMLLIElement);
  });
});

