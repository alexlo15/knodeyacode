import React from "react";
import logo from "../Navigation/logo.png"

// styling sheet
import './style.css';


const Sidebar = (props) => (

    // <div className="sidebar">
    //         <div id="head">Games and Activties</div>

    //     <ul className = "linkList">
    //         <li><a id="links" href="/profile">Profile</a></li>
    //         <li><a id="links" href="/draganddrop">Drag n Drop</a></li>
    //         <li><a id="links" href="/flashcard">Flash Cards</a></li>
    //         <li><a id="links" href="/memorygame">Memory Match</a></li>
    //         <li><a id="links" href="/whiteboard">White Board</a></li>
    //         <li><a id="links" href="/leaderboard">Leaderboard</a></li>

    //     </ul>
    // </ div >

    <div className="NavPlz">
        <nav className="navbar navbar-expand-lg navbar-dark black">

            <a className="navbar-brand logo" href="/"><img src={logo} alt={logo} /></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            
        </nav>


        <div class="main-menu">
            {/* <h3>Games and Activities</h3> */}
            <ul className="linklist">
                <li>
                    <a id="links" href="/profile">
                        <i class="fa fa-home fa-2x"></i>
                        <span class="nav-text">
                            Profile
                        </span>
                    </a>

                </li>
                <li class="has-subnav">
                    <a id="links" href="/draganddrop">
                        <i class="fa fa-laptop fa-2x"></i>
                        <span class="nav-text">
                            Drag and Drop
                        </span>
                    </a>

                </li>
                <li class="has-subnav">
                    <a id="links" href="/flashcard">
                        <i class="fa fa-folder-open fa-2x"></i>
                        <span class="nav-text">
                            Flash Cards
                        </span>
                    </a>

                </li>
                <li>
                    <a id="links" href="/whiteboard">
                        <i class="fa fa-bar-chart-o fa-2x"></i>
                        <span class="nav-text">
                            White Board
                            </span>
                    </a>
                </li>
                <li>
                    <a id="links" href="/leaderboard">
                        <i class="fa fa-table fa-2x"></i>
                        <span class="nav-text">
                            Leaderboard
                        </span>
                    </a>
                </li>
                <li>
                    <a id="links" href="/memorygame">
                        <i class="fa fa-info fa-2x"></i>
                        <span class="nav-text">
                            Memory Match
                        </span>
                    </a>
                </li>
            </ul>

            {/* <ul class="logout">
                <li>
                   <a href="#">
                         <i class="fa fa-power-off fa-2x"></i>
                        <span class="nav-text">
                            Logout
                        </span>
                    </a>
                </li>  
            </ul> */}
        </div>


    </div>






);

export default Sidebar;