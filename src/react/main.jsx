import React from 'react';
import ReactDOM from 'react-dom';

const persons = [{ name: 'Romain' }, { name: 'Éléonore' }];

function Person(props) {
  return <div>{props.name}</div>;
}

function Family(props) {
  const members = props.members.map((member, i) => (
    <Person name={member.name} key={i} />
  ));

  return <div>{members}</div>;
}

ReactDOM.render(<Family members={persons} />, document.getElementById('root'));
