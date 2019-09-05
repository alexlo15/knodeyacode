import React from "react";
import StickyBox from "react-sticky-box";
import './sidebar.css';


const Sidebar = () => (

    < div className="row sidebar" >
        <StickyBox offsetTop={20}
            offsetBottom={20} >
            <div id="head">&nbsp; Games and Activies </div>
           
        </StickyBox >
        <ul>
<<<<<<< HEAD
            <li><a href="/dragdrop">Drag and Drop</a></li>
            <li><a href="/flashcard">Flash Cards</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
            <li><a href="/profile">Profile</a></li>
        </ul>
=======
                <li><a id="links" href="/DragAndDropPage">Drag n Drop</a></li>
                <li><a id="links" href="/FashCardPage">Flash Cards</a></li>
                <li><a id="links" href="/MemoryGame">Memory Match</a></li>
                <li><a id="links" href="/WhiteBoard">White Board</a></li>

            </ul>
>>>>>>> 7d2cbd45f4e51e082d016ae4ba910bc4e5a8b0db
    </ div >
);

export default Sidebar;