import React from "react";
import NoteCards from "../Notecard/notecard"
import "./style.css";
import "./flashCard.css";

function FlashCard(props){
    console.log(props);
    return(
        
        <main >
        <h2 id="flashcardtitle">
            FlashCard Page
        </h2>
        <div id="questioncontainer">
        <NoteCards questionArray={props.questionArray}/>

        </div>

        

        </main>
    );
}
export default FlashCard;