import React from 'react';
import ReactDOM from 'react-dom';
import { HashLoader } from 'react-spinners';

import fetchJson from '../vanilla/fetchJson';
import { isTweetFr, isSelectedAuthor } from '../utils';
import AuthorList from './AuthorList';
import TweetList from './TweetList';
import Filter from './Filter';

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
      selectedAuthor: '',
    };

    this.filter = this.filter.bind(this);
    this.selectAuthor = this.selectAuthor.bind(this);
    this.renderContent = this.renderContent.bind(this);
  }

  filter() {
    this.setState(state => ({ isFr: !state.isFr }));
  }

  selectAuthor(name) {
    const isAlreadySelected = this.state.selectedAuthor === name;

    this.setState({ selectedAuthor: isAlreadySelected ? '' : name });
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
    const { data, isFr, selectedAuthor } = this.state;
    let tweetsToDisplay = data;

    if (isFr) tweetsToDisplay = tweetsToDisplay.filter(isTweetFr);

    if (selectedAuthor)
      tweetsToDisplay = tweetsToDisplay.filter(tweet =>
        isSelectedAuthor(tweet, selectedAuthor),
      );

    return (
      <>
        <Filter filter={this.filter} />
        <AuthorList
          authors={this.state.authors}
          selected={selectedAuthor}
          selectAuthor={this.selectAuthor}
        />
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
