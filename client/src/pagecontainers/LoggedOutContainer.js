import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Landing Page
import MainPage from '../pages/MainPage';


class LoggedOut extends React.Component {

  render() {
    return (

      <Router>
        <Switch>
          {/* these routes tell what PAGE to load on each path */}
          {/* <Route exact path="/" component={MainPage} /> */}
        </Switch>
      </Router>

    )
  }
}

export default LoggedOut;
