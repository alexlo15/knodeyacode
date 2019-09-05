import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import DragDropPage from './pages/DragAndDrop/dragAndDropPage';
import FlashCardPage from './pages/flashCardPage';
import MemoryGamePage from "./pages/memoryGamePage";
import WhiteBoardPage from "./pages/WhiteBoard/whiteboardPage";
// import FlashCard from "./components/FlashCard";
import Profile from "./pages/Profile";
import Leaderboard from "./pages/leaderboard/leaderboard";

import NavBar from "./components/NavBar"

class App extends React.Component {

  render() {
    return (
      
        <Router>
          <NavBar />
          <Switch>

            {/* these routes tell what component(PAGE) to load on each path */}
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/profile" component = {Profile} />
            <Route exact path="/leaderboard" component = {Leaderboard} />
            <Route exact path="/MemoryGame" component={MemoryGamePage}/>
            <Route exact path="/FlashCardPage" component={FlashCardPage} />
            <Route exact path="/DragAndDropPage" component={DragDropPage} />
            <Route exact path="/WhiteBoard" component={WhiteBoardPage} />



          </Switch>
        </Router>

    
          )
        }
      
      }
      
      export default App;
