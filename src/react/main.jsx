import React from 'react';
import ReactDOM from 'react-dom';
import { HashLoader } from 'react-spinners';

import fetchJson from '../vanilla/fetchJson';
import { isTweetFr } from '../utils';
import TweetList from './TweetList';

function Filter(props) {
  return <button onClick={props.filter}>Filtrer</button>;
}

const url1 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const url2 =
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

class Main extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      data: [],
      authors: [],
    };

    this.filter = this.filter.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  filter() {
    this.setState(state => ({ isFr: !state.isFr }));
  }

  componentDidMount() {
    Promise.all([fetchJson(url1), fetchJson(url2)]).then(result => {
      const authors = [];

      const flatTweets = result.flat();

      flatTweets.forEach(tweet => {
        if (!authors.includes(tweet.user.name)) {
          authors.push(tweet.user.name);
        }
      });

      this.setState({
        data: flatTweets,
        authors,
      });
    });
  }

  renderContent() {
    const tweetsToDisplay = this.state.isFr
      ? this.state.data.filter(isTweetFr)
      : this.state.data;

    console.log('Authors', this.state.authors);

    return (
      <>
        <Filter filter={this.filter} />
        <TweetList tweets={tweetsToDisplay} />
      </>
    );
  }

  render() {
    const content =
      this.state.data.length === 0 ? <HashLoader /> : this.renderContent();

    return <div className='Main'>{content}</div>;
  }
}

ReactDOM.render(<Main />, document.getElementById('root'));
