import React from 'react';

const FilterAuthor = ({ authors, select }) => {
  const options = authors.map(author => <option key={author.id} value={author.id}>{author.name}</option>);

  return <select onChange={select}>{options}</select>;
}

export default FilterAuthor;
