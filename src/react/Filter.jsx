import React from 'react';

export default function (props) {
  const { label, filter } = props;

  return <button onClick={filter}>{label}</button>;
}
