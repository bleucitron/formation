import React from 'react';

import Tweet from './Tweet.jsx';

const TweetList = ({ tweets }) => {
  const tweetsAsLi = tweets.map(
    tweet => <Tweet key={tweet.id} tweet={tweet} />
  );

  return (<ol>{tweetsAsLi}</ol>);
}

export default TweetList;
