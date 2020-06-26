import React from 'react';

export default function Tweet(props) {
  const { text, created_at, user } = props;

  return (
    <li className='Tweet'>
      <div className='text'>{text}</div>
      <div className='date'>{created_at}</div>
      <div className='author'>{user.name}</div>
    </li>
  );
}
