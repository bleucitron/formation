import React, { useState, useEffect } from 'react';

import fetchJson from '../advanced/fetchJson';
import Filter from './Filter.jsx';
import TweetList from './TweetList.jsx';

const urls = [
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets.json',
  'https://raw.githubusercontent.com/iOiurson/formation/correction/data/tweets2.json',
];

function getData() {
  return Promise.all(urls.map(fetchJson)).then(resultats => {
    const tweets = resultats.flat();

    console.log('Mes tweets', tweets);

    return tweets;
  });
}

export default function App() {
  const [isFr, setIsFr] = useState(false);
  const [data, setData] = useState();

  useEffect(() => {
    console.log('Getting Data');
    getData().then(result => setData(result));
  }, []);

  function filter() {
    setIsFr(!isFr);
  }

  const tweetsToDisplay =
    data && isFr ? data.filter(tweet => tweet.lang === 'fr') : data;

  const label = isFr ? 'To All' : 'To Fr';

  const content = data ? <TweetList tweets={tweetsToDisplay} /> : 'Loading';
  const authors = data ? [...new Set(data.map(tweet => tweet.user.name))] : [];

  console.log('Authors', authors);

  const authorDivs = authors.map(author => <div>{author}</div>);

  return (
    <div className='App'>
      <Filter label={label} filter={filter} />
      {authorDivs}
      {content}
    </div>
  );
}
