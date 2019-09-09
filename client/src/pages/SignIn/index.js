import React, {useState} from "react";
import {withRouter} from 'react-router-dom'
import {withFirebase} from '../../components/Firebase/index'
import { compose, renderComponent } from 'recompose'

function SignInBase(props) {
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

    return(
        <>
        <h1>Sign in Page</h1>

        <div>
        <input id="usernameInput" name='username' onChange={handleInputChange} type="text" value={state.username}></input>
        <input id="passwordInput" name='password' onChange={handleInputChange} type='password' value={state.password}></input>
        <button disabled={state.email === '' || state.password === ''} onClick={signUpUser}>Sign Up</button>
        <button disabled={state.email === '' || state.password === ''} onClick={signInUser}>Sign In</button>
      </div>
        </>
    )

}

const SignInPage = compose(withRouter, withFirebase)(SignInBase)

export default SignInPage;
