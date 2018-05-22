import React from 'react';

const Filter = ({ filter, isFr }) => (
  <button onClick={filter}>{isFr ? 'To English' : 'To French'}</button>
);

export default Filter;
