import React, {useState} from "react";
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../../components/Firebase/index'
import { compose } from 'recompose'
import logo from "./images/logo.png";
import studyman from "./images/studyicon2.png";
import matchy from "./images/matchingicon.png";
import brainy from "./images/brains.png";
import progress from "./images/progress.PNG";


function MainpageBase(props) {

  const [state, setState] = useState({username: '', password: ''})

  const handleInputChange = event => {
    const {name, value} = event.target
    setState(prevState => ({ ...prevState, [name]: value}))
  }

  const signUpUser = () => {
    console.log(props);
    props.firebase.createUser(state.username, state.password).then(() => {
      props.history.push('/profile')
    })
  }

  const signInUser = () => {
    props.firebase.signInUser(state.username, state.password).then(() => {
      props.history.push('/profile')
    })
  }

  return (
    <div>
      <div className="parallax">
        <h1 className="mainTitle">
          <img src={logo} alt={logo} />
          Knode Your Code
          <img src={logo} alt={logo} />
        </h1>

        <p className="mainp">Please log in to play</p>
        <a id="login" className="btn btn-primary mainButton" href="/profile">
          Sign in
        </a>
      </div>

      {/* This is where the body color is in the main page  */}
      <div className="signIn">
        <h1 className="about">Why Study with Knode Your Code?</h1>

        <div className="aboutReasons">
          <div className="reason1">
          <img src={studyman} alt="Study" />
          <br></br>
            It is a good interactive study tool for students to prepare for test
            and work on their weaknesses. 
          </div>


          <div className="reason2">
          <img src={matchy} alt="Match" />
          <br></br>
            There are multiple games ranging from matching, to whiteboarding
            that can be used to practice.
          </div>

          <div className="reason3">
          <img src={brainy} alt="Brain" />
          <br></br>
            It can help all developers from beginners to veterans improve their
            coding skills and knowledge.
          </div>

          <div className="reason4">
          <img src={progress} alt="Progress" />
          <br></br>
            Students can hone and achieve their skills while monitoring their progress.
          </div>
        </div>
        <div>
        <h1>Hi!</h1>
        <input id="usernameInput" name='username' onChange={handleInputChange} type="text" value={state.username}></input>
        <input id="passwordInput" name='password' onChange={handleInputChange} type='password' value={state.password}></input>
        <button disabled={state.email === '' || state.password === ''} onClick={signUpUser}>Sign Up</button>
        <button disabled={state.email === '' || state.password === ''} onClick={signInUser}>Sign In</button>
      </div>
      </div>
    </div>
  );
}

const Mainpage = compose(withRouter, withFirebase)(MainpageBase)

export default Mainpage;
