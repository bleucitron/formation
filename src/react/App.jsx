import React from 'react';

import FavFilter from './FavFilter.jsx';
import Filter from './Filter.jsx';
import TweetList from './TweetList.jsx';

import fetchJson from '../vanilla/fetchJson';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isFr: false,
      onlyFav: false,
      favs: new Set(props.favs),
      tweets: [],
    };

    this.switch = this.switch.bind(this);
    this.filterFav = this.filterFav.bind(this);
    this.handleFav = this.handleFav.bind(this);
  }

  switch() {
    this.setState({ isFr: !this.state.isFr });
  }

  filterFav() {
    this.setState({ onlyFav: !this.state.onlyFav });
  }

  handleFav(id) {
    const { favs } = this.state;

    if (favs.has(id)) {
      favs.delete(id);
    } else {
      favs.add(id);
    }

    localStorage.setItem('favs', JSON.stringify(Array.from(favs)));

    this.setState({ favs: new Set(favs) });
  }

  componentDidMount() {
    const p1 = fetchJson(urls[0]);
    const p2 = fetchJson(urls[1]);

    Promise.all([p1, p2]).then(results => {
      const tweets = results
        .flat()
        .sort(
          (t1, t2) =>
            new Date(t2.created_at).getTime() -
            new Date(t1.created_at).getTime(),
        );

      console.log('tweets', tweets);

      [...new Set(tweets.map(t => t.user.screen_name))];

      const authors = [...new Set(tweets.map(t => t.user.name))];

      this.setState({ tweets: tweets, authors: authors });
    });
  }

  render() {
    const { favs, isFr, onlyFav, tweets } = this.state;

    let tweetsToDisplay = isFr ? tweets.filter(t => t.lang === 'fr') : tweets;
    tweetsToDisplay = onlyFav
      ? tweetsToDisplay.filter(t => favs.has(t.id_str))
      : tweetsToDisplay;

    return (
      <div className='App'>
        <Filter filter={this.switch} text={isFr ? 'To All' : 'To Fr'} />
        <FavFilter filter={this.filterFav} text={`Favoris: ${favs.size}`} />
        <TweetList
          tweets={tweetsToDisplay}
          favs={favs}
          handleFav={this.handleFav}
        />
      </div>
    );
  }
}
