import React from "react";
import API from "../../../utils/API";
// import NavBar from "./components/NavBar";
import Sidebar from "../../shared/Sidebar";
import "./style.css";
function Result(props) {
  return (
    <div>
      <div className="row">
        <div className="col-12 col-sm-2 cardDiv">
          <Sidebar />
        </div>

        <div className="col-12 col-sm-10">
          <div id="resultContainer">
            <h1>Quiz Finished !!!!</h1>
            <h2>Your Score : {props.score}</h2>
            <p>Check your place on Leaderboard ....</p>
            <button>Take Me to Leaderboard</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
