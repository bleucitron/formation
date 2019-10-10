import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import TweetList from './TweetList';
import { isFrenchTweet } from '../vanilla/utils';
import fetchJson from '../vanilla/fetchJson';

const URL1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const URL2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

function Filter(props) {
  return <button onClick={props.handleClick}>Filter</button>;
}

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isFr: false,
      data: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isFr: !state.isFr,
    }));
  }

  componentDidMount() {
    Promise.all([URL1, URL2].map(fetchJson)).then(([tweets1, tweets2]) => {
      const data = tweets1.concat(tweets2);

      this.setState({
        data,
      });
    });
  }

  render() {
    const { data } = this.state;
    const tweets = this.state.isFr ? data.filter(isFrenchTweet) : data;

    const content = data ? (
      <div>
        <Filter handleClick={this.handleClick} />
        <TweetList tweets={tweets} />
      </div>
    ) : (
      'Loading'
    );

    return content;
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
