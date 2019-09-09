import React from "react";
import logo from "./images/logo.png"
import "../../components/shared/Navigation/style.css";

function Mainpage() {
  return (
    <div>
      <div className="parallax">
        <h1 className="mainTitle">
          <img src={logo} alt={logo} />
          Knode Your Code
          <img src={logo} alt={logo} />
        </h1>

        <p className="mainp">Please log in to play</p>
        <a id="login" className="btn btn-primary mainButton" href="/profile">
          Sign in
        </a>
      </div>

      {/* This is where the body color is in the main page  */}
      <div className="signIn">

        <h1 className="about">Why Study with Knode Your Code?</h1>

        <div className="aboutReasons">

          <div className="reason1">
            It is a good interactive study tool for students to prepare for test and work on their weaknesses.
          </div>

          <div className="reason2">
            There are multiple games that can be used to practice coding.
          </div>

          <div className="reason3">
            It can help students improve their scores drastically.
          </div>

          <div className="reason4">
            Students can hone and achieve their skills.
          </div>

        </div>
      </div>
    </div>
  );
}

export default Mainpage;
