import React from 'react';
import moment from 'moment';
import 'moment/locale/fr';

moment.locale('fr');

const Tweet = ({ text, date }) => (
  <li>
    <div>{text}</div>
    <div>{moment(date, 'ddd MMM DD HH:mm:ss Z YYYY').fromNow()}</div>
  </li>
);

export default Tweet;
