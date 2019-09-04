import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import App from './App';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import * as serviceWorker from './serviceWorker';
import DragDropPage from './dragDropPAGE';
import FlashPage from './flashcardPAGE';
// this is the main index.js file that handles routes

const routing = (
    <Router>
        <div>
            {/* these routes tell what component(PAGE)
            to load on each path */}
            <Route exact path="/" component={App} />
            <Route exact path="/flashcard" component={FlashPage} />
            <Route exact path="/dragdrop" component={DragDropPage} />
            <Route exact path="/maintest" component={FlashPage} />

        </div>
    </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
