import React from "react";
import { Link } from "react-router-dom";
// import NavBar from "./components/NavBar";
import Sidebar from "../../shared/Navigation";
import "./style.css";
function Result(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-2 cardDiv">
        </div>

        <div className="col-12 col-sm-10">
          <div id="resultContainer">
            <h1>Quiz Finished !!!!</h1>
            <h2>Your Score : {props.score}</h2>
            <p>Check your place on Leaderboard ....</p>
            <Link to="/leaderboard" role="button" className="linkToLeaderboard">
              Take Me to Leaderboard
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
