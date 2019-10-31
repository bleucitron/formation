import React from 'react';
import moment from 'moment';

export default function Tweet(props) {
  return (
    <div className='Tweet'>
      <div>{props.text}</div>
      <div>{moment(new Date(props.created_at)).fromNow()}</div>
    </div>
  );
}
