import React from "react";
import "./question.css";

function Question(props){
    return(
        <main >
                <h2 id="questionH2">{props.questions}</h2>
        </main>
       
    );
}

export default Question;