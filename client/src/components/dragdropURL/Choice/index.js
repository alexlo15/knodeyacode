import React from "react";
// import { tsPropertySignature } from "@babel/types";
import "./style.css"
function Choice(props){
    return(
        <div id="choice" className="choice" 
        draggable
        onDragStart={props.onDragStart}
         >
               <p> {props.choice} </p>
        </div>
    );
}

export default Choice;