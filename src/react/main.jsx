import React from 'react';
import ReactDOM from 'react-dom';

import { isTweetFr } from '../vanilla/utils';
import fetchJson from '../vanilla/fetchJson';

import Filter from './Filter';
import Sorter from './Sorter';
import TweetList from './TweetList';
import AuthorList from './AuthorList';
import HashList from './HashList';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      isDesc: true,
      tweets: [],
      author: null,
      hash: null,
    };

    this.filterFr = this.filterFr.bind(this);
    this.sorter = this.sorter.bind(this);
    this.filterByAuthor = this.filterByAuthor.bind(this);
    this.filterByHash = this.filterByHash.bind(this);
  }

  filterFr () {
    this.setState({
      isFr: !this.state.isFr
    });
  }

  filterByAuthor(author) {
    const newAuthor = this.state.author !== author ? author : null;

    console.log('new Authro', this.state.author, author);

    this.setState({
      author: newAuthor
    });
  }

  filterByHash(hash) {
    const newHash = this.state.hash !== hash ? hash : null;

    this.setState({
      hash: newHash
    });
  }

  sorter() {
    this.setState({
      isDesc: !this.state.isDesc
    });
  }

  componentDidMount() {
    const url1 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
    const url2 = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

    Promise.all([url1, url2].map(fetchJson))
      .then(([tweets1, tweets2]) => {
        const tweets = tweets1.concat(tweets2);
        this.setState({
          tweets: tweets
        })
        console.log(tweets);
      });
  }

  render() {
    let tweetsToDisplay = this.state.isFr ? this.state.tweets.filter(isTweetFr) : this.state.tweets;

    tweetsToDisplay = this.state.author
      ? tweetsToDisplay.filter(tweet => {
        return this.state.author === tweet.user.name;
      })
      : tweetsToDisplay;

    tweetsToDisplay.sort((tweetA, tweetB) => {
      const coef = this.state.isDesc ? 1 : -1;
      return coef * (Date.parse(tweetB.created_at) - Date.parse(tweetA.created_at));
    });

    tweetsToDisplay = this.state.hash
      ? tweetsToDisplay.filter(tweet => {
        return tweet.entities.hashtags.map(hash => hash.text).includes(this.state.hash);
      })
      : tweetsToDisplay;

    const authors = [];
    tweetsToDisplay.forEach(tweet => {
      if (!authors.includes(tweet.user.name)) {
        authors.push(tweet.user.name);
      }
    });

    authors.sort();

    let hashes = [];
    tweetsToDisplay.forEach(tweet => {
      hashes = hashes.concat(tweet.entities.hashtags.map(hash => hash.text));
    });

    hashes = Array.from(new Set(hashes));
    hashes.sort();

    return (
      <div>
        <Filter filter={this.filterFr} />
        <Sorter sorter={this.sorter}/>
        <AuthorList authors={authors} selected={this.state.author} filter={this.filterByAuthor}/>
        <HashList hashes={hashes} selected={this.state.hash} filter={this.filterByHash}/>
        <TweetList tweets={tweetsToDisplay} />
      </div>
    );
  }
}




ReactDOM.render(
  <Root />,
  document.getElementById('root')
);

