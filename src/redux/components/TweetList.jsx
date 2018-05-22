import React from 'react';

import { isFrenchTweet } from '../../utils';
import Tweet from './Tweet';

const TweetList = ({ tweets, isFr }) => {
  const tweetsToDisplay = !isFr ? tweets : tweets.filter(isFrenchTweet);

  const tweetItems = tweetsToDisplay.map(tweet => (
    <Tweet text={tweet.text} date={tweet.created_at} key={tweet.id} />
  ));

  return <ul>{tweetItems}</ul>;
};

export default TweetList;
