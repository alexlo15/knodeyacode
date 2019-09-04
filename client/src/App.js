import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import DragDropPage from './pages/dragAndDropPage';
import FlashCardPage from './pages/flashCardPage';
import FlashCard from "./components/FlashCard";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <div>
            {/* these routes tell what component(PAGE) to load on each path */}
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/FashCardPage" component={FlashCardPage} />
            <Route exact path="/FlashCard" component={FlashCard} />
            <Route exact path="/DragAndDropPage" component={DragDropPage} />

          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
