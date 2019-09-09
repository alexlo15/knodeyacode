import React, { Component } from "react";
import API from "../../utils/API"
import "../../components/shared/Navigation/style.css";
import "./style.css"

class Leaderboard extends Component {

  state={
    scoreData:[]
  }

    componentDidMount(){
      this.loadScores();
    }

    loadScores=()=>{
      API.getScores()
      .then(res=>{
        
        this.setState({
          scoreData:res.data
        })
        console.log(this.state.scoreData)

      })
      .catch(err=>console.log(err));

    }
  render() {

    let tableRow = this.state.scoreData.map(user=>{
      return (
        <tr key={user._id}>
          <td>{user.userName}</td>
          <td>{user.email}</td>
          <td>{user.score}</td>
        </tr>
      )
      })


    return (
      <div id="leaderdiv">

        <div className="row">
          <div className="col-12 col-sm-2">
          </div>
          <div className="col-12 col-sm-10">
          <div id="borderOuter">

          <table id='table'>
          <h3 id="leadertitle">LEADERBOARD</h3>
               <tbody className="scoreTableBody">
                
                  <tr>
                    <th>UserName</th>
                    <th>Email</th>
                    <th>Score</th>
                  </tr>
                  {tableRow}
               </tbody>
            </table>
          </div>

          </div>
        </div>
      </div>
    );
  }
}

export default Leaderboard;
