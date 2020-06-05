import React from 'react';

import Tweet from './Tweet.jsx';

export default function (props) {
  const myTweets = props.tweets.map(tweet => (
    <Tweet {...tweet} key={tweet.id} />
  ));

  return <ul className='TweetList'>{myTweets}</ul>;
}
