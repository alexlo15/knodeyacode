import React from "react";
import Sidebar from "../../components/shared/Sidebar";
import '../../components/shared/Sidebar/style.css';
import Ticker from "react-ticker";
import StockTicker from "../../components/ticker/ticker";
import API from "../../utils/API";


class Profile extends React.Component {

  state = {

  };


  render() {
    return (
      <div id="brotherdiv">
        <h3 id="profileTitle">This is the profile page</h3>
        <div className="Flashpage">
          <div className="row">
            <div className="col-12 col-sm-2">
              <Sidebar />
            </div>
          </div>

          <footer id="ticker">
              {/* <StockTicker /> */}


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

export default Profile;