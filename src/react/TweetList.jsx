import React from 'react';

import Tweet from './Tweet';

const TweetList = ({ tweets }) => {
  const lis = tweets.map(({text, created_at, user}, i) =>
    <Tweet text={text} author={user.name} date={created_at} key={i} />
  );
  return <ol>{lis}</ol>;
}

export default TweetList;
