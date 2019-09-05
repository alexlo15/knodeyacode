import React from "react";
import Sidebar from "../../components/Sidebar";
import "./style.css";
import Ticker from "react-ticker";

function Profile() { 
  return (
    <div id="fatherdiv">
      <h3 id="profileTitle">This is the profile page</h3>
      <div className="Flashpage">
        <div className="row" >
          <div className="col-12 col-sm-2" >
            <Sidebar />
          </div>
        </div>

        <footer id="ticker">
          <Ticker>
            {({ index }) => (
              <>
                <p>This can be high scores or latest scores! #{index}!</p>
                <img src="www.my-image-source.com/" alt="" />
              </>
            )}
          </Ticker>
        </footer>

      </div>

      <div id="profilemain" >
        <div id="profileImage">
          <div id="triangle">

          </div>

        </div>

      </div>
      <div id="profileGameTracker">

      </div>
    </div>
  );
};

export default Profile;
