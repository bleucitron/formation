import React from 'react';
import ReactDOM from 'react-dom';

import TweetList from './TweetList';
import FilterLang from './FilterLang';
import FilterAuthor from './FilterAuthor';
import fetchJson from '../vanilla/fetchJson';
import { isTweetFr, isTweetBy } from '../vanilla/utils';

const initUrl = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json';
const moreUrl = 'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json';

class Root extends React.Component {
  constructor() {
    super();

    this.state = {
      isFr: false,
      sortDesc: true,
      author: null,
      tweets: []
    };

    this.loadMore = this.loadMore.bind(this);
    this.toggleFr = this.toggleFr.bind(this);
    this.toggleSort = this.toggleSort.bind(this);
    this.selectAuthor = this.selectAuthor.bind(this);
  }

  componentDidMount() {
    fetchJson(this.props.initUrl)
    .then(tweets => this.setState({ tweets: tweets }))
    .catch(e => console.error(e));
  }

  toggleFr() {
    this.setState({ isFr: !this.state.isFr });
  }

  toggleSort() {
    this.setState({ sortDesc: !this.state.sortDesc });
  }

  loadMore() {
    fetchJson(this.props.moreUrl)
    .then(tweets => {
      const allTweets = {};
      const list = tweets.concat(this.state.tweets);

      list.forEach(tweet => {
        if (!(tweet.id in allTweets)) {
          allTweets[tweet.id] = tweet;
        }
      });

      this.setState({ tweets: Object.values(allTweets) });
    })
    .catch(e => console.error(e));
  }

  selectAuthor(e) {
    this.setState({ author: parseInt(e.target.value) });
  }

  render() {
    const { isFr, tweets, sortDesc, author } = this.state;

    let tweetsToDisplay = !isFr
      ? tweets
      : tweets.filter(isTweetFr);

    tweetsToDisplay = tweetsToDisplay.filter(tweet => isTweetBy(tweet, author));

    tweetsToDisplay.sort((tweet1, tweet2) => {
      const multiplier = sortDesc ? 1 : -1;

      const date1 = new Date(tweet1.created_at);
      const date2 = new Date(tweet2.created_at);
      return multiplier * (date2 - date1);
    });

    const filterText = !isFr
      ? 'To Fr'
      : 'To All';

    const sortText = !sortDesc
      ? 'Sort Asc.'
      : 'Sort Desc.';

    const auteurs = tweets.reduce((acc, cur) => {
      if (!acc.find(e => e.id === cur.user.id)) {
        return acc.concat([{ id: cur.user.id, name: cur.user.name }]);
      }
      else
        return acc;
    }, [{ id: null, name: 'All' }]);

    let hashtags = tweetsToDisplay.reduce((acc, cur) => {
        return acc.concat(cur.entities.hashtags.map(hashtag => hashtag.text));
    }, []);

    hashtags = [...new Set(hashtags)];
    const hashtagList = hashtags.map((hashtag, i) => <li key={i}>#{hashtag}</li>);

    console.log('tweetsToDisplay', tweetsToDisplay);
    console.log('hashtags', hashtags);

    return (
      <div>
        <FilterLang text={ filterText } toggle={ this.toggleFr }/>
        <FilterAuthor authors={ auteurs } select={ this.selectAuthor } />
        <button onClick={ this.loadMore }>Load More</button>
        <button onClick={ this.toggleSort }>{ sortText }</button>
        <ol className='hashtags'>
          { hashtagList }
        </ol>
        <TweetList tweets={tweetsToDisplay} />
      </div>
    )
  }
}

ReactDOM.render(
  <Root initUrl={initUrl} moreUrl={moreUrl} />,
  document.getElementById('root')
);
