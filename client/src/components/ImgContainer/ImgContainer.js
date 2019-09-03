import React, { Component } from "react";
// import { Draggable, Droppable } from "react-drag-and-drop";
import "./ImgContainer.css";
import Img from "../Img/Img";
// import imgList from "./imageList.json";

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

  onDragOver = ev => {
    ev.preventDefault();
  };

  onDragStart = (ev, id) => {
    console.log("dragStart : " + id);
    ev.dataTransfer.setData("id", id);
  };

  onDrop = (ev, cat) => {
    let id = ev.dataTransfer.getData("id");
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
    // const singleImg = imgList.map(item => (
    //   <Img
    //     key={item.id}
    //     item={item}
    //     onDragStart={e => this.onDragStart(e, item.name)}
    //   />
    // ));

    return (
      <main>
        <div>
          <h2>ImgContainer component</h2>
          {/* {singleImg} */}
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
      </main>
    );
  }
}

export default ImgContainer;
