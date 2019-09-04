import React from "react";
// import imgList from "./imageList.json";
import "./Img.css"

function Img(props){
    return(
        <div className="imgDiv" >
               
                {/* <h2>{props.item.name}</h2> */}
                <img draggable onDragStart={props.onDragStart} className="singleImg" src={props.src} alt={props.name}></img>
        </div>
        
        
    );
}

export default Img;