import React from "react";
import NoteCards from "../Notecard/notecard"
import "./style.css";


function FlashCard(props){
    console.log(props);
    return(
        <main >
        <h2>
            FlashCard Page
        </h2>
        <NoteCards questionArray={props.questionArray}/>
        </main>
    );
}
export default FlashCard;