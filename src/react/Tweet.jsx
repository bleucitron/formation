import React from 'react';
import moment from 'moment';

export default function Tweet(props) {
  const { text, created_at: date, id_str: id, user, isFav, handleFav } = props;

  const className = isFav ? 'Tweet fav' : 'Tweet';
  const dateFromNow = moment(new Date(date)).fromNow();

  return (
    <li className={className}>
      <div>
        <div className='text'>{text}</div>
        <div className='author'>{user.name}</div>
        <div className='date'>{dateFromNow}</div>
      </div>
      <button className='favButton' onClick={handleFav}>
        fav
      </button>
    </li>
  );
}
