import React from 'react';

export default function Filter(props) {
  const { text, filter } = props;
  return <button onClick={filter}>{text}</button>;
}
