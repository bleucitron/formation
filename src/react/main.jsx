import React from 'react';
import ReactDOM from 'react-dom';

import { isTweetFr } from '../vanilla/utils';
import fetchJson from '../vanilla/fetchJson';

import Filter from './Filter';
import TweetList from './TweetList';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      tweets: []
    };

    this.filter = this.filter.bind(this);
  }

  filter () {
    this.setState({
      isFr: !this.state.isFr
    });
  }

  componentDidMount() {
    const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
    const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

    Promise.all([url1, url2].map(fetchJson))
      .then(([tweets1, tweets2]) => {
        const tweets = tweets1.concat(tweets2);
        this.setState({
          tweets: tweets
        })
        console.log(tweets);
      });
  }

  render() {
    const tweetsToDisplay = this.state.isFr ? this.state.tweets.filter(isTweetFr) : this.state.tweets;
    return (
      <div>
        <Filter filter={this.filter} />
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}




ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

