import React from 'react';
import ReactDOM from 'react-dom';
import tweets from '../../data/tweets.json';

const Tweet = ({ text, created_at, user}) => (
  <li>
    <div className="date">{created_at}</div>
    <div className="text">{text}</div>
    <div className="author">{user.name}</div>
  </li>
);

const TweetList = ({ tweets }) => {
  const lis = tweets.map((tweet, i) =>
    <Tweet {...tweet} key={i} />
  );
  return <ol>{lis}</ol>;
}

ReactDOM.render(
  <TweetList tweets={tweets} />,
  document.getElementById('root')
);
