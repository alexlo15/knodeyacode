import React from 'react';
import './card.css';

//this is a functional and presentational component
const Card = (props) => (
  <div className='card-container'>
    <div className='card'>
      <div className='front'>
        <div className='question'>{props.question}</div>
      </div>
      <div className='back'>
        <div className='answer'>{props.answer}</div>
      </div>
    </div>
  </div>
);

export default Card;