import React from 'react';

import fetchJson from '../../fetchJson';

const Load = ({ url, onLoad }) => (
  <button
    onClick={() => {
      fetchJson(url)
        .then(onLoad)
        .catch(e => console.error(e));
    }}
  >
    Load More
  </button>
);

export default Load;
