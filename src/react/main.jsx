import React from 'react';
import ReactDOM from 'react-dom';

import tweets from '../../data/tweets.json';

console.log('Tweets', tweets);

function Tweet (props) {
  return (
    <div>
      {props.tweet.text}
      {props.tweet.created_at}
    </div>
  );
}

function Filter(props) {
  return (
    <button onClick={props.filter}>
      Filtrer
    </button>
  );
}

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false
    };

    this.filter = this.filter.bind(this);
  }

  filter () {
    this.setState({
      isFr: !this.state.isFr
    });
  }

  render() {
    return (
      <div>
        <Filter filter={this.filter} />
        <TweetList tweets={this.props.tweets} />
      </div>
    );
  }
}

function TweetList(props) {
  const myTweets = props.tweets.map(tweet => <Tweet key={tweet.id} tweet={tweet}/>);

  return (
    <div>
      {myTweets}
    </div>
  );
}


ReactDOM.render(
  <Root tweets={tweets} />,
  document.getElementById('root')
);

