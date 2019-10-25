import React from 'react';
import ReactDOM from 'react-dom';
import HashLoader from 'react-spinners/HashLoader';

import TweetList from './TweetList';
import Filter from './Filter';

import fetchJSON from '../vanilla/fetchJSON';
import { isTweetFr } from '../vanilla/utils';

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      tweets: [],
    };

    this.updateIsFr = this.updateIsFr.bind(this);
  }

  updateIsFr() {
    this.setState({ isFr: !this.state.isFr });
  }

  componentDidMount() {
    const tableauPromesses = [url1, url2].map(fetchJSON);

    Promise.all(tableauPromesses).then(tableauDeTableauDeTweets => {
      const tweetsAPlat = tableauDeTableauDeTweets.flat();

      this.setState({
        tweets: tweetsAPlat,
      });
    });
  }

  render() {
    console.log('STATE', this.state);

    const tweetsToDisplay = this.state.isFr
      ? this.state.tweets.filter(isTweetFr)
      : this.state.tweets;

    const content =
      this.state.tweets.length === 0 ? (
        <HashLoader />
      ) : (
        <TweetList tweets={tweetsToDisplay} />
      );

    return (
      <div className='Root'>
        <Filter handleClick={this.updateIsFr} />
        {content}
      </div>
    );
  }
}

ReactDOM.render(<Root />, document.getElementById('root'));
