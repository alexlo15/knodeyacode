import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import DragDropPage from './dragDropPAGE';
import FlashPage from './flashcardPAGE';
import FlashCard from "./components/FlashCard";
import NavBar from "./components/NavBar";
// this is the main index.js file that handles routes

const routing = (
    <Router>
        <NavBar />
        <Switch>
        <div>
            {/* these routes tell what component(PAGE)
            to load on each path */}
            <Route exact path="/" component={App} />
            <Route exact path="/flashcard" component={FlashPage} />
            <Route exact path="/flashCardSubmit" component={FlashCard} />
            <Route exact path="/dragdrop" component={DragDropPage} />
            <Route exact path="/maintest" component={FlashPage} />
            <Route exact path={`/flashCardSubmit`} component={FlashCard} />
        </div>
        </Switch>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
