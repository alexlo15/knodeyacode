import React from "react";
import StickyBox from "react-sticky-box";
import './sidebar.css';
import Leaderboard from "../../pages/leaderboard/leaderboard";

const Sidebar = () => (
    
    < div className="row sidebar" >
        <StickyBox offsetTop={20}
            offsetBottom={20} >
            <div> Games and Activies </div>
        </StickyBox >
        <ul>
            <li><a href="/dragdrop">Drag and Drop</a></li>
            <li><a href="/flashcard">Flash Cards</a></li>
            <li><a href="/leaderboard">Leaderboard</a></li>
        </ul>
    </ div >
);

export default Sidebar;