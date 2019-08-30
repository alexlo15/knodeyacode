import React from 'react';
// import logo from './logo.svg';
import NavBar from './components/NavBar';
import Test from './components/test';


class FlashPage extends React.Component {

  render() {
    return (
      <div className="Flashpage">
        <NavBar />
        <Test />
      </div>

    );
  }
}


export default FlashPage;
