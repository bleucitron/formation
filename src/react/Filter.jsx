import React from 'react';

export default function Filter(props) {
  const { label, filter } = props;

  return <button onClick={filter}>{label}</button>;
}
