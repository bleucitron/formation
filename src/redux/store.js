import { createStore, combineReducers } from 'redux';

const ADD_TWEETS = 'ADD_TWEETS';
const TOGGLE_FR_FILTER = 'TOGGLE_FR_FILTER';

export const addTweets = tweets => ({
  type: ADD_TWEETS,
  tweets,
});

export const toggleFr = () => ({
  type: TOGGLE_FR_FILTER,
});

const tweetReducer = (tweets = [], action) => {
  switch (action.type) {
    case ADD_TWEETS: {
      const all = action.tweets.concat(tweets);

      const tweetMap = new Map();
      all.forEach(tweet => {
        tweetMap.set(tweet.id, tweet);
      });

      return Array.from(tweetMap.values());
    }

    default:
      return tweets;
  }
};

const filterReducer = (filter = { isFr: false }, action) => {
  switch (action.type) {
    case TOGGLE_FR_FILTER:
      return {
        isFr: !filter.isFr,
      };

    default:
      return filter;
  }
};

export default createStore(
  combineReducers({
    tweets: tweetReducer,
    filters: filterReducer,
  }),
);
