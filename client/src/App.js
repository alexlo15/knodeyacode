import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// NavBar & Pages
import NavBar from "./components/NavBar"
import MainPage from './pages/MainPage';
import ProfilePage from "./pages/ProfilePage";

import DragDropPage from './pages/DragAndDropPage';
import FlashCardPage from './pages/FlashCardPage';
import MemoryGamePage from "./pages/MemoryPage";
import WhiteBoardPage from "./pages/WhiteBoardPage";
import LeaderboardPage from "./pages/LeaderboardPage";


class App extends React.Component {

  render() {
    return (

      <Router>
        <NavBar />
        <Switch>

          {/* these routes tell what PAGE to load on each path */}
          <Route exact path="/" component={MainPage} />
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/draganddrop" component={DragDropPage} />
          <Route exact path="/flashcard" component={FlashCardPage} />
          <Route exact path="/memorygame" component={MemoryGamePage} />
          <Route exact path="/whiteboard" component={WhiteBoardPage} />
          <Route exact path="/leaderboard" component={LeaderboardPage} />

        </Switch>
      </Router>

    )
  }
}

export default App;
