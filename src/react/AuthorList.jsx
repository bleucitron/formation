import React from 'react';

export default function AuthorList(props) {

  const authorList = props.authors.map(author =>
    <div
      onClick={() => props.filter(author)}
      className={props.selected === author ? 'selected' : ''}
      key={author}
    >
      {author}
    </div>
  );

  return (
    <div className='AuthorList'>
      { authorList }
    </div>
  );
}
