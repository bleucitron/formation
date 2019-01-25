import React from 'react';

export default function Tweet (props) {
  return (
    <div>
      <div>{props.text}</div>
      <div>{props.created_at}</div>
      <div>{props.user.author}</div>
    </div>
  );
}
