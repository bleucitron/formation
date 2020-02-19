import React from 'react';
import ReactDOM from 'react-dom';

import tweets from '../../data/tweets.json';

function Tweet(props) {
  const { text, created_at: date, id_str, lang } = props;

  return (
    <li className='Tweet'>
      <div>
        <div className='text'>{text}</div>
        <div className='date'>{date}</div>
      </div>
      <button className='fav'>fav</button>
    </li>
  );
}

function TweetList(props) {
  const myTweets = props.tweets.map(tweet => (
    <Tweet {...tweet} key={tweet.id_str} />
  ));

  return <ul className='MyTweets'>{myTweets}</ul>;
}

ReactDOM.render(<TweetList tweets={tweets} />, document.getElementById('root'));
