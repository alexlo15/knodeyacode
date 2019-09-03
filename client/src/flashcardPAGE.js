import React from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Sidebar from './components/Sidebar/sidebarIndex';


class FlashPage extends React.Component {

  render() {
    return (
      <div className="Flashpage">
        <NavBar />
        <Sidebar />
      </div>

    );
  }
}


export default FlashPage;
