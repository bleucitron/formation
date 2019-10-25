import React from 'react';

import Tweet from './Tweet';

export default function(props) {
  const instances = props.tweets.map(function(tweet, index) {
    return <Tweet {...tweet} key={index} />;
  });

  return <ol className='TweetList'>{instances}</ol>;
}
