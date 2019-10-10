import React, { useState, useEffect } from 'react';
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

function Root({ data, name, age }) {
  const [isFr, setIsFr] = useState(false);
  const [data, setData] = useState([]);

  useEffect(() => {
    Promise.all(
      [URL1, URL2].map(fetchJson).then(([tweets1, tweets2]) => {
        setData(tweets1.concat(tweets2));
      }),
    );
  }, []);

  function handleClick() {
    setIsFr(prevIsFr => !prevIsFr);
  }

  const tweets = isFr ? data.filter(isFrenchTweet) : data;

  const content = data ? (
    <div>
      <Filter handleClick={handleClick} />
      <TweetList tweets={tweets} />
    </div>
  ) : (
    'Loading'
  );

  return content;
}

class Root extends Component {
  constructor() {
    super();
    this.state = {
      isFr: false,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isFr: !state.isFr,
    }));
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

ReactDOM.render(<Root data={data} />, document.getElementById('root'));
