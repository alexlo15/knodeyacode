import React from "react";
import StickyBox from "react-sticky-box";

// styling sheet
import './style.css';


const Sidebar = () => (

    <div className="sidebar">
        {/* <StickyBox offsetTop={20} offsetBottom={20} > */}
            <div id="head">Games and Activties</div>
        {/* </StickyBox > */}
        
        <ul className = "linkList">
            <li><a id="links" href="/profile">Profile</a></li>
            <li><a id="links" href="/draganddrop">Drag n Drop</a></li>
            <li><a id="links" href="/flashcard">Flash Cards</a></li>
            <li><a id="links" href="/memorygame">Memory Match</a></li>
            <li><a id="links" href="/whiteboard">White Board</a></li>
            <li><a id="links" href="/leaderboard">Leaderboard</a></li>
        </ul>
    </ div >
);

export default Sidebar;