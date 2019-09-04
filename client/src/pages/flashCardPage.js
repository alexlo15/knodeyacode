import React from 'react';
import Sidebar from '../components/Sidebar';
import ImgContainer from "../components/ImgContainer/ImgContainer";


class FlashCardPage extends React.Component {

  render() {
    return (
      <div className="Flashpage">
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


export default FlashCardPage;
