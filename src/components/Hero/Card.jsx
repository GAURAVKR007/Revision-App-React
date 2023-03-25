import React from 'react';
import './card.css'
const Card = ({subject, topic, link, notes, lastRevisioned, date}) => {
  return (
    <div className="card">
      <div className="card-header">
        <h3>{subject}</h3>
      </div>
      <div className="card-body">
        <div className="card-row">
          <p>Topic :</p>
          <p>{topic}</p>
        </div>
        <div className="card-row">
          <p>Link/Notes :</p>
          <p>{link ? <a href={link} target="_blank" rel="noopener noreferrer">{link}</a> : notes}</p>
        </div>
        <div className="card-row">
          <p>Last Revisioned :</p>
          <p>{lastRevisioned}</p>
        </div>
        <div className="card-row">
          <p>Entry-Date :</p>
          <p>{date}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
