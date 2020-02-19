import createOl from './createOl';
import tweets from '../../data/tweets.json';

describe('createOl', () => {
  it('should return a Ol element', () => {
    expect(createOl([])).toBeInstanceOf(HTMLOListElement);
  });

  it('should return a Ol element with the correct nb of children', () => {
    const ol = createOl(tweets);

    expect(ol.children.length).toBe(10);
  });
});
