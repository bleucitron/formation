import React from 'react';
import ReactDOM from 'react-dom';
import fetchJson from '../vanilla/fetchJson';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isFr: false,
      tweets: []
    };

    this.filterTweets = this.filterTweets.bind(this);
  }

  filterTweets() {
    this.setState({
      isFr: !this.state.isFr
    });
  }

  componentDidMount() {
    const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
    const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

    const p1 = fetchJson(url1);
    const p2 = fetchJson(url2);

    Promise.all([p1, p2])
    .then(results => {
      const [l1, l2] = results;
      const tweets = l1.concat(l2);

      console.log('Le tableau de tweet', tweets);

      this.setState({
        tweets: tweets
      });
    });
  }

  render() {
    let tweetsToDisplay = this.state.tweets;

    if (this.state.isFr)
      tweetsToDisplay = this.state.tweets.filter(tweet => tweet.lang === 'fr');

    const users = new Set();
    tweetsToDisplay.forEach(tweet => users.add(tweet.user.name));

    const nbDeMots = {};
    users.forEach(user => nbDeMots[user] = 0);

    tweetsToDisplay.forEach(tweet => {
      nbDeMots[tweet.user.name] = nbDeMots[tweet.user.name] + tweet.text.length;
    });

    return (
      <div>
        <Filtre updateLang={this.filterTweets} />
        <div>Nombre de tweets : {tweetsToDisplay.length}</div>
        <Histo data={nbDeMots} />
        <TweetList tweetsToDisplay={tweetsToDisplay} />
      </div>
    );

  }
}

function Histo(props) {
  console.log('Nb', Object.keys(props.data));

  const bars = Object.keys(props.data)
  .map((user, i) =>
    <div
      style={{ height: props.data[user] / 20 }}
      key={i}
    >
      {user}
    </div>
  );

  return (
    <div className='histo'>
      { bars }
    </div>
  );
}

function Filtre(props) {
  return <button onClick={props.updateLang}>Filtrer</button>;
}

function Tweet(props) {
  return (
    <div>
      <div className='text'>{props.text}</div>
      <div className='date'>{props.date}</div>
      <div className='author'>{props.author}</div>
    </div>
  );
}

function TweetList(props) {
  const children = props.tweetsToDisplay.map(
    (tweet, i) =>
      <Tweet
        text={tweet.text}
        date={tweet.created_at}
        author={tweet.user.name}
        key={i}
      />
  );

  return (
    <div>
      { children }
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
