// import React, { Component } from 'react';
// import Message from '../components/Message';
// import { withFirebase } from '../components/Firebase/index';
// import MessageAlt from '../components/MessageAlt';

// class Base extends Component {
//   //just a demo obviously you will have more in state
//   state = { username: '', password: '' };
//   //can call any firebase method in any components via props.firebase or this.props.firebase

//   signUpUser = () => {
//     console.log(this.props);
//     this.props.firebase.createUser(this.state.username, this.state.password)
//   }

//   handleInputChange = event => {
//     const {name, value} = event.target
//     this.setState({[name]: value})
//   }
//   render() {
//     console.log(this.state)
//     //YOU WILL GET ALL YOUR FIREBASE METHODS HERE WRAP WHATEVER COMPONENTS YOU NEED WITH THE HIGHER ORDER COMPONENT
//     return (
//       <div>
//         <h1>Hi!</h1>
//         <input name='username' onChange={this.handleInputChange} type="text" value={this.state.username}></input>
//         <input name='password' onChange={this.handleInputChange} type='password' value={this.state.password}></input>
//         <button disabled={this.state.email === '' || this.state.password === ''} onClick={this.signUpUser}>Sign Up</button>
//         {/* EXAMPLE USING HIGHER ORDER COMPONENT */}
//         <Message />
//         {/* PASS DOWN FIREBASE AS PROP FROM APP INSTEAD OF HIGHER ORDER COMPONENT */}
//         <MessageAlt firebase={this.props.firebase} />
//       </div>
//     );
//   }
// }

// const App = withFirebase(Base);

// export default App;
