import React from "react";
import "./card.css";

//this is a functional and presentational component
const Card = props => (
  <div className="card-container">
    <div className="card">
      <div className="front">
        <div className="question">
          <h2 className="text-center">
            Question{" "}
          </h2>
          {props.question}
        </div>
      </div>
      <div className="back">
        <div className="answer">
          <h2 className="text-center">Answer </h2>
          {props.answer}
        </div>
      </div>
    </div>
  </div>
);

export default Card;
