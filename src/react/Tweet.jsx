import React from 'react';
import moment from 'moment';

export default function Tweet({ text, user, created_at: date }) {
  const fromNow = moment(new Date(date)).fromNow();

  return (
    <li className='tweet'>
      <div className='text'>{text}</div>
      <div className='author'>{user.name}</div>
      <div className='date'>{fromNow}</div>
    </li>
  );
}
