import React from 'react';

import TweetList from './TweetList';
import Filter from './Filter';

import fetchJson from '../fetchJson';
import { isTweetFr } from '../utils';

function AuthorList (props) {
  const authors = props.authors.map(author =>
    <button
      key={author}
      onClick={() => props.selectAuthor(author)}
    >
      {author}
    </button>
  );

  return <div>{authors}</div>;
}

class Root extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      isFr: false,
      author: null,
      tweets: [],
    };

    this.element = null;
    this.getElement = element => { this.element = element; };

    this.filter = this.filter.bind(this);
    this.selectAuthor = this.selectAuthor.bind(this);
  }

  filter () {
    this.setState({ isFr: !this.state.isFr });
  }

  selectAuthor (author) {
    this.setState({ author: author });
  }

  componentDidMount () {
    const urls = [
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
      'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
    ];

    Promise.all(urls.map(fetchJson))
    .then(([list1, list2]) => {
      const tweets = list1.concat(list2);

      this.setState({
        tweets: tweets,
      });
    })
    .catch(e => console.error(e));
  }

  render () {
    console.log('ELEMENT', this.element);

    let authors = this.state.tweets.reduce((acc, tweet) => {
      acc.add(tweet.user.name);
      return acc;
    }, new Set());
    authors = Array.from(authors);

    let tweetsToDisplay = this.state.isFr
      ? this.state.tweets.filter(isTweetFr)
      : this.state.tweets;

    tweetsToDisplay = this.state.author
      ? tweetsToDisplay.filter(tweet => tweet.user.name === this.state.author)
      : tweetsToDisplay;

    return (
      <div>
        <div ref={this.getElement}>COUCOU</div>
        <AuthorList authors={authors} selectAuthor={this.selectAuthor} />
        <Filter filter={this.filter} />
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}

export default Root;
