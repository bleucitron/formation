import React from 'react';

export default function Filter(props) {
  return (
    <button onClick={props.filter}>
      Filtrer
    </button>
  );
}
