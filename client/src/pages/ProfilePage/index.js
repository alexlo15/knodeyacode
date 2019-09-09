import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import '../../components/shared/Sidebar/style.css';
import AuthUserContext from '../../components/Session/context'
import { withAuthorization } from '../../components/Session/index'
import Ticker from "react-ticker";
import StockTicker from "../../components/ticker/ticker";
// import NewTicker from "../../components/ticker/newTicker"
import API from "../../utils/API";


class Profile extends React.Component {

  static contextType = AuthUserContext

  state = {

  };

  signOutUser = () => {
    this.props.firebase.doSignOutUser()
    this.props.history.push('/')
  }


  render() {
    console.log(this.context)
    console.log(this.props)
    return (
      <div id="brotherdiv">
        <h1>{this.context.email}</h1>
        <button className="btn btn-primary btn-lg" onClick={this.signOutUser}>Sign Out</button>
        <h3 id="profileTitle">This is the profile page</h3>
        <div className="Flashpage">
          <div className="row">
            <div className="col-12 col-sm-2">
              <Sidebar />
            </div>
          </div>

          <footer id="ticker">
              {/* <StockTicker /> */}


              {/* <NewTicker /> */}


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
      </div>
    );
  }
};

const condition = authUser => !!authUser

export default withAuthorization(condition)(Profile)