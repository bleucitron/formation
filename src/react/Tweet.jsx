import React from 'react';

export default function ({ text, created_at }) {
  return (
    <li className='Tweet'>
      <div>{text}</div>
      <div>{created_at}</div>
    </li>
  );
}
