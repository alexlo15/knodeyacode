import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import DragDropPage from './pages/dragAndDropPage';
import FlashCardPage from './pages/flashCardPage';
import FlashCard from "./components/FlashCard";
import Profile from "./pages/Profile";
import NavBar from "./components/NavBar"

class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          <div>
            {/* these routes tell what component(PAGE) to load on each path */}
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/profile" component = {Profile} />
            <Route exact path="/flashcard" component={FlashCardPage} />
            <Route exact path="/dragdrop" component={DragDropPage} />

          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
