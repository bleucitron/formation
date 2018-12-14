import React from 'react';

export default function HashList(props) {

  const hashList = props.hashes.map(hash =>
    <div
      onClick={() => props.filter(hash)}
      className={props.selected === hash ? 'selected' : ''}
      key={hash}
    >
      {hash}
    </div>
  );

  return (
    <div className='HashList'>
      { hashList }
    </div>
  );
}
