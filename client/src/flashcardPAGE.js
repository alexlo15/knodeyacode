import React from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar/sidebarIndex';
import ImgContainer from "./components/ImgContainer/ImgContainer";


class FlashPage extends React.Component {

  render() {
    return (
      <div className="Flashpage">
        <NavBar />
        <div className="row">
          <div className="col-12 col-sm-2">
          <Sidebar />
          </div>
          <div className="col-12 col-sm-10">
          <ImgContainer/>
          </div>
        </div>
        
        
      </div>

    );
  }
}


export default FlashPage;
