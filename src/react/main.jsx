import React from 'react';
import ReactDOM from 'react-dom';

import { isFr as isFrenchTweet } from '../vanilla/utils';
import jsonGet from '../vanilla/jsonGet';

import TweetList from './TweetList.jsx';

const url = 'https://raw.githubusercontent.com/iOiurson/formation/corrig%C3%A9/data/tweets.json';

class Root extends React.Component {
  constructor(props) {
    super();

    this.state = {
      tweets: [],
      isFr: false
    };
  }

  componentDidMount() {
    jsonGet(url)
    .then(result => {
      this.setState({
        tweets: result
      })
    });
  }

  render() {
    const { tweets, isFr } = this.state;

    const filteredTweets = isFr
      ? tweets.filter(isFrenchTweet)
      : tweets;

    return (
      <div>
        <button onClick={() => this.setState({ isFr: !isFr })} >Filtre</button>
        <TweetList tweets={filteredTweets} />
      </div>);
  }
}

ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

