import React from 'react';

import Tweet from './Tweet.jsx';

export default function TweetList(props) {
  const { tweets, favs, handleFav } = props;

  const myTweets = tweets.map(tweet => (
    <Tweet
      {...tweet}
      isFav={favs.has(tweet.id_str)}
      handleFav={() => handleFav(tweet.id_str)}
      key={tweet.id_str}
    />
  ));

  return <ul className='MyTweets'>{myTweets}</ul>;
}
