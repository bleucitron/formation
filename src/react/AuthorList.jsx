import React from 'react';
import Author from './Author';

export default function AuthorList(props) {
  const authorButtons = props.authors.map((author, i) => (
    <Author
      isSelected={author === props.selected}
      name={author}
      select={() => props.selectAuthor(author)}
      key={i}
    />
  ));

  return <div className='AuthorList'>{authorButtons}</div>;
}
