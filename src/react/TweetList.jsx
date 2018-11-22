import React from 'react';
import Tweet from './Tweet';

export default function TweetList(props) {
  const myTweets = props.tweets.map(tweet => <Tweet key={tweet.id} {...tweet}/>);

  return (
    <div>
      {myTweets}
    </div>
  );
}
