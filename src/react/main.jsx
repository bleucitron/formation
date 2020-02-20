import React from 'react';
import ReactDOM from 'react-dom';

import App from './App.jsx';

const favs = new Set(JSON.parse(localStorage.getItem('favs')));

ReactDOM.render(<App favs={favs} />, document.getElementById('root'));
