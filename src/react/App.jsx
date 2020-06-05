import React, { Component } from 'react';

import Filter from './Filter.jsx';
import TweetList from './TweetList.jsx';

import fetchJson from '../advanced/fetchJson';

class App extends Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      data: [],
    };

    this.filter = this.filter.bind(this);
  }

  componentDidMount() {
    console.log('Mount');

    fetchJson(
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
    ).then(tweets => this.setState({ data: tweets }));
  }

  filter() {
    const { isFr } = this.state;

    this.setState({
      isFr: !isFr,
    });
  }

  render() {
    const { isFr, data } = this.state;

    console.log('isFr', isFr);

    const tweetsToDisplay = isFr
      ? data.filter(tweet => tweet.lang === 'fr')
      : data;

    const label = isFr ? 'To All' : 'To Fr';

    return (
      <div className='App'>
        <Filter label={label} filter={this.filter} />
        {data.length === 0 ? 'Loading' : <TweetList tweets={tweetsToDisplay} />}
      </div>
    );
  }
}

export default App;
