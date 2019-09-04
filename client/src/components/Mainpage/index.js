import React from "react";
import "./mainPage.css";

function Mainpage() {
  return (
    <div>
      <div className="parallax">
        <h1>Knode Your Code</h1>
        <p>Please log in to play:</p>
        <button type="button" className="btn btn-primary">
          Sign in
        </button>
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
