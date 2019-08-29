import React from "react";
import "./mainPage.css";

function Mainpage() {
    return (
        <div>
            <div className="parallax">
                <h1>Knode Your Code</h1>
                <p>Please log in to play</p>
            </div>
            <div className="signIn">
                <button type="button" className="btn btn-primary">Sign in</button>
            </div>
            <div class="parallax"></div>
        </div>
    );
}

export default Mainpage;
