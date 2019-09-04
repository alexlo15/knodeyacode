import React from "react";
import "./style.css";

function NavBar() {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark black">

            <a className="navbar-brand" href="/">Knode Your Code</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <div className="navbar-nav">
                    <a className="nav-item nav-link" href="/flashcard">Flashcard</a>
                    <a className="nav-item nav-link" href="/dragdrop">DragDrop</a>
                    <a className="nav-item nav-link" href="/maintest" tabIndex="-1" aria-disabled="true">Maintest</a>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;
