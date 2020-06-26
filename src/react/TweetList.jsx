import React from 'react';
import Tweet from './Tweet.jsx';

export default function TweetList(props) {
  const tws = props.tweets.map(tweet => (
    <Tweet {...tweet} key={tweet.id_str} />
  ));

  return <ul className='TweetList'>{tws}</ul>;
}
