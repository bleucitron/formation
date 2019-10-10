import React from 'react';
import PropTypes from 'prop-types';

import Tweet from './Tweet';

function TweetList(props) {
  const tweetsElements = props.tweets.map((tweet, i) => (
    <Tweet {...tweet} key={i} />
  ));

  return <ol className='TweetList'>{tweetsElements}</ol>;
}

Tweet.propTypes = {
  tweets: PropTypes.array,
};

export default TweetList;
