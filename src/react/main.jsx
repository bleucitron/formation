import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';

import tweets from '../../data/tweets.json';

ReactDOM.render(<Root tweets={tweets} />, document.getElementById('root'));
