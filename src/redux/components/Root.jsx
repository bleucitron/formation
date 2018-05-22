import React from 'react';

import TweetList from '../containers/TweetList';
import Actions from '../containers/Actions';

import fetchJson from '../../fetchJson';

class Root extends React.Component {
  componentDidMount() {
    fetchJson(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    )
      .then(this.props.addTweets)
      .catch(e => console.error(e));
  }

  render() {
    return (
      <div>
        <Actions />
        <TweetList />
      </div>
    );
  }
}

export default Root;
