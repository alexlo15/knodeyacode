import React, { useState } from "react";
import { withRouter } from 'react-router-dom'
import { withFirebase } from '../../components/Firebase/index'
import { compose, renderComponent } from 'recompose'
import logo from "./images/logo.png";
import '../../components/shared/Navigation'
import API from "../../utils/API";

function SignInBase(props) {
    const [state, setState] = useState({ username: '', password: '' })

    const handleInputChange = event => {
        const { name, value } = event.target
        setState(prevState => ({ ...prevState, [name]: value }))
    }

    const signUpUser = () => {
        console.log(props);
        props.firebase.createUser(state.username, state.password).then(() => {
            props.history.push('/profile')
        })

        let newName = state.username.substr(0, state.username.indexOf('@'))
        console.log(newName);

        let newUser = {
            userName: newName,
            email: state.username
        }

        API.saveUsers(newUser)
            .then(res => {
                console.log(res.data);
            }).catch(err => console.log(err));
    }

    const signInUser = () => {
        props.firebase.signInUser(state.username, state.password).then(() => {
            props.history.push('/profile')
        })

        let name = state.username.substr(0, state.username.indexOf('@'))
        console.log(name);
    }

    return (
        <>
            {/* <Container id="sign-In">
                <Row>
                    <Col><p>Sign In or Sign Up</p></Col>
                </Row>
                <Row>
                    <Col>
                        <p>Knode the Code
                        <img src={logo} alt={logo} /></p>
                    </Col>
                    <Col>
                        <input id="usernameInput" name='username' onChange={handleInputChange} type="text" value={state.username}></input>
                        <input id="passwordInput" name='password' onChange={handleInputChange} type='password' value={state.password}></input>
                        <button disabled={state.email === '' || state.password === ''} onClick={signUpUser}>Sign Up</button>
                        <button disabled={state.email === '' || state.password === ''} onClick={signInUser}>Sign In</button>
                    </Col>
                </Row>
            </Container> */}
            <div id="sign-Inbackground">
                <div id="sign-In">
                    <img src={logo} alt={logo} />
                    <h3 id="sign-InTitle">Sign in or Sign Up</h3>
                    <br></br><br></br>

                    <label for="exampleFormControlInput1" id="emailLabel">Email address</label>
                    <input id="usernameInput" name='username' onChange={handleInputChange} type="text" value={state.username} className="form-control mb-2"placeholder="name@example.com"></input>
                    <br></br><br></br>

                    <label for="exampleFormControlInput1" id="passwordLabel">Password</label>
                    <input id="passwordInput" name='password' onChange={handleInputChange} type='password' value={state.password}
                    className="form-control mb-2"placeholder="password"></input>
                    <br></br><br></br>

                    <button disabled={state.email === '' || state.password === ''} onClick={signUpUser} id="signButton" className="btn btn-primary mainButton">Sign Up</button>
                    <button disabled={state.email === '' || state.password === ''} onClick={signInUser} id="signButton" className="btn btn-primary mainButton">Sign In</button>
                </div>
            </div>

        </>
    )

}

const SignInPage = compose(withRouter, withFirebase)(SignInBase)

export default SignInPage;
