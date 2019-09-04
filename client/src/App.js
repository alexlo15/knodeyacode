import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import DragDropPage from './pages/dragAndDropPage';
import FlashCardPage from './pages/flashCardPage';

// import FlashCard from "./components/FlashCard";
import Profile from "./pages/Profile";

import NavBar from "./components/NavBar"

class App extends React.Component {

  render() {
    return (
      <Router>
        <NavBar/>
        <Switch>
          
            {/* these routes tell what component(PAGE) to load on each path */}
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/profile" component = {Profile} />

            <Route exact path="/FashCardPage" component={FlashCardPage} />
            <Route exact path="/DragAndDropPage" component={DragDropPage} />


          
        </Switch>
      </Router>
    )
  }

}

export default App;
