import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import "../../components/shared/Sidebar/style.css";


function Leaderboard() {
  return (
    <div id="leaderdiv">
      <Sidebar />
        <h3 id="leadertitle">LEADERBOARD</h3>
      <div className="Flashpage">
      <div className="row">
      <div className="col-12 col-sm-2">
      
      </div>
    </div> 
    <div id="leaderboard">
      <h2 id="jstitle">Drag n Drop</h2><h2 id="htmltitle">Flash Cards</h2><h2 id="csstitle">Memory Match</h2>
      <table id="table">
        <tr>
          <th id="odd">1</th>
        </tr>
        <tr>
          <th id="even">2</th>
        </tr>
        <tr>
          <th id="odd">3</th>
        </tr>
        <tr>
          <th id="even">4</th>
        </tr>
        <tr>
          <th id="odd">5</th>
        </tr>
        <tr>
          <th id="even">6</th>
        </tr>
        <tr>
          <th id="odd">7</th>
        </tr>
        <tr>
          <th id="even">8</th>
        </tr>
        <tr>
          <th id="odd">9</th>
        </tr>
        <tr>
          <th id="even">10</th>
        </tr>
      </table>
        
        </div>
  </div>
</div>
  );
}

export default Leaderboard;