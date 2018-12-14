import React from 'react';
import classnames from 'classnames';

export default function Tweet({ text, created_at, user, retweeted_status }) {

const classes = classnames('tweet', {
  retweeted: retweeted_status
});

  return (
    <div className={classes}>
      <div className='text'>{text}</div>
      <div className='date'>{created_at}</div>
      <div className='username'>{user.name}</div>
      <img src={user.profile_image_url}></img>
    </div>
  );
}
