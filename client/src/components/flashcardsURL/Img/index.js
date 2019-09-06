import React from "react";
// import imgList from "./imageList.json";
import "./style.css";

function Img(props) {
  return (
    <div className="imgDiv">
     
      <img
        draggable
        onDragStart={props.onDragStart}
        className="singleImg"
        src={props.src}
        alt={props.name}
      ></img>
    </div>
  );
}

export default Img;
