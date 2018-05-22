import React from 'react';

import Tweet from './Tweet';

const TweetList = props => {
  const tweets = props.tweets.map(tweet => (
    <Tweet text={tweet.text} date={tweet.created_at} key={tweet.id} />
  ));

  return <ul>{tweets}</ul>;
};

export default TweetList;
