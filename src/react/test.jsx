import React from 'react';
import ReactDOM from 'react-dom';

const data = [
  {
    id: 0,
    name: 'Romain',
    age: 34,
  },
  {
    id: 1,
    name: 'Eleo',
    age: 32,
  },
  {
    id: 2,
    name: 'Canelle',
    age: 9,
  },
];

function Family(props) {
  const members = props.members.map(member => (
    <Person name={member.name} age={member.age} key={member.id} />
  ));

  return <ul className='Family'>{members}</ul>;
}

function Person(props) {
  return (
    <li className='Person'>
      <div>{props.name}</div>
      <div>{props.age}</div>
    </li>
  );
}

ReactDOM.render(<Family members={data} />, document.getElementById('root'));
