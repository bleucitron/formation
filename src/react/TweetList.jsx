import React from 'react';

import Tweet from './Tweet';

export default function TweetList(props) {
  const mesComp = props.tweets.map((tweet, index) => (
    <Tweet {...tweet} key={index} />
  ));

  return <div className='TweetList'>{mesComp}</div>;
}
