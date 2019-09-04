import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Mainpage from './components/Mainpage';
import DragDropPage from './dragDropPAGE';
import FlashPage from './flashcardPAGE';
import FlashCard from "./components/FlashCard";
import Poop from "./components/Poop";

class App extends React.Component {

  render() {
    return (
      <Router>
        <Switch>
          <div>
            {/* these routes tell what component(PAGE) to load on each path */}
            <Route exact path="/" component={Mainpage} />
            <Route exact path="/profile" component={Poop} />
            <Route exact path="/flashcard" component={FlashPage} />
            <Route exact path="/flashCardSubmit" component={FlashCard} />
            <Route exact path="/dragdrop" component={DragDropPage} />
            <Route exact path="/maintest" component={FlashPage} />
            <Route exact path={`/flashCardSubmit`} component={FlashCard} />
          </div>
        </Switch>
      </Router>
    )
  }

}

export default App;
