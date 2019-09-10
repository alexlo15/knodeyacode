import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { withAuthentication } from './components/Session'
import MainPage from './pages/MainPage';
 

//Profile Page
import ProfilePage from "./pages/ProfilePage";
import SignInPage from "./pages/SignIn";

// Games
import DragDropPage from "../src/pages/DragAndDropPage";
import FlashCardPage from '../src/pages/FlashCardPage';
import MemoryGamePage from "../src/pages/MemoryPage";
import WhiteBoardPage from "./pages/WhiteBoardPage";

// Leaderboard
import LeaderboardPage from "../src/pages/LeaderboardPage";
import Result from "../src/components/dragdropURL/Result";




class App extends React.Component {

  render() {

    
    return (

      <Router>
        <Switch>

          <Route exact path="/" component={MainPage} />
          <Route exact path="/signin" component={SignInPage} /> 
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/draganddrop" component={DragDropPage} />
          <Route exact path="/flashcard" component={FlashCardPage} />
          <Route exact path="/memorygame" component={MemoryGamePage} />
          <Route exact path="/whiteboard" component={WhiteBoardPage} />
          <Route exact path="/leaderboard" component={LeaderboardPage} />
          <Route exact path="/Result" component={Result}/>
          

        </Switch>
      </Router>

    )
  }
}

export default withAuthentication(App);
