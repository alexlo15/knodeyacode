import React from "react";
import Sidebar from "../../components/shared/Navigation";
import '../../components/shared/Navigation/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import ProgressBar from 'react-bootstrap/ProgressBar';
import AuthUserContext from '../../components/Session/context'
import { withAuthorization } from '../../components/Session/index'
import API from "../../utils/API";
// import './styles.css';
// import Ticker from "react-ticker";
// import StockTicker from "../../components/ticker/ticker";
// // import NewTicker from "../../components/ticker/newTicker"
// import API from "../../utils/API";


class Profile extends React.Component {

  static contextType = AuthUserContext

  state = {
    name: "",
    grade: 0,
    score: 0,
  };

  componentDidMount() {
    this.getScore();
  }

  getScore = () => {
    API.findUserScore(this.context.email.substr(0, this.context.email.indexOf('@')))
    .then(res => {
      console.log(res.data);
      console.log(res.data[0].score);
        this.setState({score: res.data[0].score, grade: (res.data[0].score*10)})
    })

  }


  render() {
    console.log(this.context)
    console.log(this.props)
    console.log(this.state.score);
    return (
      <>

        <Sidebar />
        <div id="profileBackground">
          <div id="message">
            <h2 id="profileTitle">Welcome to Knode your Code!</h2>
            <h3 id="profileUser">Hello, {this.context.email.substr(0, this.context.email.indexOf('@'))}!</h3>
            <h6 id="profileText">Congratulations on starting your journey with us! Please see the navigation bar on the side to look through what we offer.</h6>
          </div>

          <div id="progress">
            <h3 id="progressUser">{this.context.email.substr(0, this.context.email.indexOf('@'))}'s progress below:</h3>
            <p id="progressText">FlashCards:
          <ProgressBar animated now={45} striped variant="primary" label={`45%`} />
            </p>
            <p id="progressText">Your Highest Score on Drag and Drop Quiz:
          <ProgressBar animated now={this.state.grade} striped variant="primary" label={`${this.state.score} out of 10`} />
            </p>
          </div>
        </div>
        {/* <div id="brotherdiv">
          <h3 id="profileTitle">This is the profile page</h3>
          <div className="Flashpage">
            <div className="row">
              <div className="col-12 col-sm-2">
              </div>
            </div>

            <footer id="ticker">
              {/* <StockTicker /> */}


        {/* <NewTicker /> */}

        {/* 
            </footer>

          </div>

          <div id="profilemain">
            <div id="profileImage">
              <div id="triangle">

              </div>

            </div>

          </div>
          <div id="profileGameTracker">

          </div>
        </div> */}

      </>
        
    );
  }
};

const condition = authUser => !!authUser

export default withAuthorization(condition)(Profile)