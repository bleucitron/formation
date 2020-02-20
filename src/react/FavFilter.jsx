import React from 'react';

export default function FavFilter(props) {
  const { text, filter } = props;
  return <button onClick={filter}>{text}</button>;
}
