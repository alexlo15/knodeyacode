import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Components
import LoggedOut from "./pagecontainers/LoggedOutContainer";
import LoggedIn from "./pagecontainers/LoggedInContainer";
import Profile from './pages/ProfilePage'
import { withAuthentication } from './components/Session'
import MainPage from './pages/MainPage';
import Test from './pages/Test'


class App extends React.Component {

  render() {
    return (

      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={MainPage} />
            <Route exact path="/profile" component={Profile} />
            {/* <Route component={LoggedIn}/> */}
          </Switch>
        </div>
      </Router>

    )
  }
}

export default withAuthentication(App);
