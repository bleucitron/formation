import React from 'react';

import Filter from './Filter';
import Load from './Load';

const url =
  'https://rawgit.com/DavidBruant/contenu-formations-web/master/js/data/tweets2.json';

const Actions = ({ isFr, toggleFr, addTweets }) => (
  <div className='actions'>
    <Filter isFr={isFr} filter={toggleFr} />
    <Load url={url} onLoad={addTweets} />
  </div>
);

export default Actions;
