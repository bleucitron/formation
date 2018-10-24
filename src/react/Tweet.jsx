import React from 'react';

const Tweet = ({ text, date, author }) => (
  <li>
    <div className="date">{date}</div>
    <div className="text">{text}</div>
    <div className="author">{author}</div>
  </li>
);

export default Tweet

