import React from 'react';

import Tweet from './Tweet.jsx';

export default function Tweets(props) {
  const tweetsComp = props.tweets.map(tweet => (
    <Tweet {...tweet} key={tweet.id} />
  ));

  return <ul>{tweetsComp}</ul>;
}
