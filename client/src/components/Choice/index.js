import React from "react";
// import { tsPropertySignature } from "@babel/types";
import "./style.css"
function Choice(props){
    return(
        <div className="choice" 
        draggable
        onDragStart={props.onDragStart}
         >
               <p className="choiceBox"> {props.choice} </p>
        </div>
    );
}

export default Choice;