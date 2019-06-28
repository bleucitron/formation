import React from 'react';

import Tweets from './Tweets.jsx';
import Filter from './Filter.jsx';

import fetchJson from '../vanilla/fetchJson';
import { isFrenchTweet } from '../vanilla/utils';

class Main extends React.Component {
  constructor() {
    super();
    this.state = {
      isFr: false,
      tweets: [],
    };

    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      isFr: !this.state.isFr,
    });
  }

  componentDidMount() {
    const url1 =
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
    const url2 =
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

    const ps = [url1, url2].map(fetchJson);

    Promise.all(ps)
      .then(([t1, t2]) => {
        const tweets = t1.concat(t2);

        this.setState({
          tweets,
        });
      })
      .catch(e => console.error(e));
  }

  render() {
    const tweetsToDisplay = this.state.isFr
      ? this.state.tweets.filter(isFrenchTweet)
      : this.state.tweets;

    const users = [];
    tweetsToDisplay.forEach(tweet => {
      if (!users.find(u => u.name === tweet.user.name)) users.push(tweet.user);
    });

    console.log('USERS', users);

    return (
      <div>
        <Filter filter={this.filter} />
        <Tweets tweets={tweetsToDisplay} />
      </div>
    );
  }
}

export default Main;
