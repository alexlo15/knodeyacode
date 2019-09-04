import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./ImgContainer.css";
import Img from "../Img/Img";
// import FlashCard from "../FlashCard"
import API from "../../utils/API";
let topicSelected = [];

class ImgContainer extends Component {
 
  state = {
    images: [
      {
        id: 1,
        name: "HTML",
        src: "./image/html.png",
        category: "notDragged"
      },
      {
        id: 2,
        name: "CSS",
        src: "./image/css.png",
        category: "notDragged"
      },
      {
        id: 3,
        name: "JS",
        src: "./image/js.png",
        category: "notDragged"
      }
    ]
   
  };
  
// This are drag and drop functionality
// ====================================================
  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, id) => {
    console.log("dragStart : " + id);
    ev.dataTransfer.setData("id", id);
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
    topicSelected.push(id);
    let images = this.state.images.filter(img => {
      if (img.name === id) {
        img.category = cat;
      }
      return img;
    });

    this.setState({
      ...this.state,
      images
    });
    console.log("Dropped : " + id);
  };
// ===========================================================
onClick = ()=>{
  // alert('click attached');
  console.log(topicSelected);
  API.searchQuestions(topicSelected)
    .then(res =>{
      console.log(res.data);
    })
    .catch(err => console.log(err));

}
  render() {
    var images = {
      notDragged: [],
      dragged: []
    };
   

    this.state.images.forEach(img => {
      images[img.category].push(
        <Img
          key={img.id}
          src={img.src}
          alt={img.name}
          draggable
          onDragStart={e => this.onDragStart(e, img.name)}
        >
          {img.name}
        </Img>
      );
    });
    

    return (
      
      <main>
        <div>
          <h2>ImgContainer component</h2>
          
          <div
            id="dragComponentsDiv"
            onDrop={e => this.onDrop(e, "notDragged")}
            onDragOver={e => this.onDragOver(e)}
          >
            {images.notDragged}
          </div>
        </div>

        <div
          id="dropArea"
          onDragOver={e => this.onDragOver(e)}
          onDrop={e => this.onDrop(e, "dragged")}
        >
          {images.dragged}
        </div>
        <div id="btnDiv">
        <Link to={`/flashCardSubmit`}>
          <button className="btn btn-primary btnSubmit" onClick={this.onClick}>Submit</button>
          </Link>
        </div>

        
      </main>
    );
  }
}

export default ImgContainer;
