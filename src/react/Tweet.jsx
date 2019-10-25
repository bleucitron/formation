import React from 'react';

export default function(props) {
  return (
    <li className='Tweet'>
      <div>{props.text}</div>
      <div>{props.created_at}</div>
      <div>{props.user.name}</div>
    </li>
  );
}
