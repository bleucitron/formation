import React from 'react';
import ReactDOM from 'react-dom';

import fetchJson from '../vanilla/fetchJson';
import { isFrenchTweet } from '../vanilla/utils';

const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

function Tweet(props) {
  return <li>{ props.tweet.text }</li>;
}

function TweetList(props) {
  const allTweets = props.tweets.map(tweet => <Tweet key={tweet.id} tweet={ tweet } />);

  return <ul>{ allTweets }</ul>;
}

function Filter(props) {
  return <button onClick={ props.filter }>Filter</button>;
}

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      tweets: []
    };
    this.filter = this.filter.bind(this);
  }

  filter() {
    this.setState({
      isFr: !this.state.isFr
    });
  }

  componentDidMount() {
    Promise.all([url1, url2].map(fetchJson))
    .then(([tweets1, tweets2]) => {
      this.setState({
        tweets: [...tweets1, ...tweets2]
      });
    });
  }

  render() {
    const tweetsToDisplay = this.state.isFr
      ? this.state.tweets.filter(isFrenchTweet)
      : this.state.tweets;

    return (
      <div>
        <Filter filter={ this.filter } />
        <TweetList tweets={ tweetsToDisplay } />
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
