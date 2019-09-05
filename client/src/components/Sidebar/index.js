import React from "react";
import StickyBox from "react-sticky-box";
import './sidebar.css';


const Sidebar = () => (

    < div className="sidebar" >
        <StickyBox offsetTop={20}
            offsetBottom={20} >
            <div id="head">&nbsp; Games and Activies </div>
           
        </StickyBox >
        <ul>
            <li><a id="links" href="/leaderboard">Leaderboard</a></li>
            <li><a id="links" href="/profile">Profile</a></li>
            <li><a id="links" href="/DragAndDropPage">Drag n Drop</a></li>
            <li><a id="links" href="/FashCardPage">Flash Cards</a></li>
            <li><a id="links" href="/MemoryGame">Memory Match</a></li>
            <li><a id="links" href="/WhiteBoard">White Board</a></li>

        </ul>
    </ div >
);

export default Sidebar;