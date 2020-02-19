import createLi from './createLi';
import tweets from '../../data/tweets.json';

describe('createLi', () => {
  it('should return a LI element', () => {
    expect(createLi(tweets[0])).toBeInstanceOf(HTMLLIElement);
  });
});
