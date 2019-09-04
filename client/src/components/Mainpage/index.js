import React from "react";
import "./mainPage.css";

function Mainpage() {
  return (
    <div>
      <div className="parallax">
        <h1>Knode Your Code</h1>
        <p>Please log in to play</p>
        <a className="btn btn-primary" href="/profile">
          Sign in
        </a>
      </div>

      {/* This is where the body color is in the main page  */}
      <div className="signIn">

        <h1 className="about">Why Study with Knode Your Code?</h1>

            <div className="aboutReasons">

                <div className="reason1">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Iusto
                    laborum quae, nihil consectetur voluptatem at eos sint doloribus
                    cupiditate soluta beatae dolores aperiam tempore quisquam et
                    quibusdam! Corrupti, ducimus dolorem?
                </div>

                <div className="reason2">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium
                    a quod ducimus hic nesciunt praesentium nostrum quisquam autem,
                    optio id minima magni eligendi sunt dolor omnis possimus modi magnam
                    eveniet!
                </div>

                <div className="reason3">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    recusandae non error, porro nemo impedit fugit iure fuga rem labore
                    tempora unde eos et cum quis! Maxime iure distinctio repellat!
                </div>
                
                <div className="reason4">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
                    recusandae non error, porro nemo impedit fugit iure fuga rem labore
                    tempora unde eos et cum quis! Maxime iure distinctio repellat!
                </div>

        </div>
      </div>
    </div>
  );
}

export default Mainpage;
