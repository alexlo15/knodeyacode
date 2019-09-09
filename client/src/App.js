import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import firebase from "firebase";
// import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth"
// Components
// import LoggedOut from "./pagecontainers/LoggedOutContainer";
// import LoggedIn from "./pagecontainers/LoggedInContainer";
import Profile from './pages/ProfilePage'
import { withAuthentication } from './components/Session'
import MainPage from './pages/MainPage';
import Test from './pages/Test'


//Profile Page
import ProfilePage from "./pages/ProfilePage";

// Games
import DragDropPage from "../src/pages/DragAndDropPage";
import FlashCardPage from '../src/pages/FlashCardPage';
import MemoryGamePage from "../src/pages/MemoryPage";
import WhiteBoardPage from "./pages/WhiteBoardPage";

// Leaderboard
import LeaderboardPage from "../src/pages/LeaderboardPage";
import Result from "../src/components/dragdropURL/Result";


// Components
import LoggedOut from "./pagecontainers/LoggedOutContainer";
import LoggedIn from "./pagecontainers/LoggedInContainer";


class App extends React.Component {

  render() {
    return (

      <Router>
        <Switch>

          <Route exact path="/" component={LoggedOut} />
          <Route component={LoggedIn}/>

        </Switch>
      </Router>

    )
  }
}

export default withAuthentication(App);
