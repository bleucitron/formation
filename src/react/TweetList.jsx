import React from 'react';

import Tweet from './Tweet';

export default function TweetList (props) {
  const list = props.tweets.map(tweet =>
    <Tweet
      key={tweet.id}
      {...tweet}
    />);

  return (
    <div>
      { list }
    </div>
  );
}
