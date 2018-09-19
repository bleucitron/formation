import React from 'react';
import ReactDOM from 'react-dom';

const Personne = props => <div> {props.nom} {props.age} </div>;


ReactDOM.render(
  <Personne nom='Romain' age='32' />,
  document.getElementById('root')
);

