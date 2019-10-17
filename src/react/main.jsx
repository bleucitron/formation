import React from 'react';
import ReactDOM from 'react-dom';

import TweetList from './TweetList';

import data from '../../data/tweets.json';

ReactDOM.render(<TweetList tweets={data} />, document.getElementById('root'));
