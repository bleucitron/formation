import React from 'react';

export default function Author(props) {
  console.log('IS Selected', props.isSelected);
  const className = props.isSelected ? 'selected Author' : 'Author';
  console.log('Class', className);
  return (
    <button className={className} onClick={props.select}>
      {props.name}
    </button>
  );
}
