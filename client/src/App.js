import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import LoggedOut from "./pagecontainers/LoggedOutContainer";
import LoggedIn from "./pagecontainers/LoggedInContainer";


class App extends React.Component {

  render() {
    return (

      <Router>
        <Switch>

          <Route exact path="/" component={LoggedOut} />
          <Route component={LoggedIn}/>

        </Switch>
      </Router>

    )
  }
}

export default App;
