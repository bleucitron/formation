import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';

function Tweet({ text, created_at: date, user }) {
  return (
    <li className='Tweet'>
      <div className='text'>{text}</div>
      <div className='date'>{moment(new Date(date)).fromNow()}</div>
      <div className='author'>{user.name}</div>
    </li>
  );
}

Tweet.propTypes = {
  text: PropTypes.string,
  created_at: PropTypes.string,
  user: PropTypes.shape({
    name: PropTypes.string,
  }),
};

export default Tweet;
