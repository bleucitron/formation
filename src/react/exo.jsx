import React, { useState } from 'react';
import ReactDOM from 'react-dom';

const data = [
  {
    name: 'Romain',
    age: 34,
    id: 0,
  },
  {
    name: 'Romain',
    age: 52,
    id: 1,
  },
  {
    name: 'Paul',
    age: 54,
    id: 2,
  },
  {
    name: 'Julie',
    age: 2,
    id: 3,
  },
];

function Person(props) {
  return (
    <div className='Person' onClick={props.add}>
      <div className='name'>{props.name}</div>
      <div className='age'>{props.age}</div>
    </div>
  );
}

function Family(props) {
  const [allMembers, setAllMembers] = useState(props.members);

  console.log('allMembers', allMembers);

  const familyMembers = allMembers.map(m => (
    <Person name={m.name} age={m.age} add={() => addMember(m)} key={m.id} />
  ));

  function addMember(personData) {
    const clone = { ...personData, id: allMembers.length };
    const newMembers = [...allMembers, clone];
    setAllMembers(newMembers);
  }

  return <div>{familyMembers}</div>;
}

ReactDOM.render(<Family members={data} />, document.getElementById('root'));
