<<<<<<< HEAD
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

//--------NavBar & Pages-------------//
import NavBar from "../components/shared/NavBar"

//Profile Page
import ProfilePage from "../pages/ProfilePage";

// Games
import DragDropPage from '../pages/DragAndDropPage';
import FlashCardPage from '../pages/FlashCardPage';
import MemoryGamePage from "../pages/MemoryPage";
import WhiteBoardPage from "../pages/WhiteBoardPage";

// Leaderboard
import LeaderboardPage from "../pages/LeaderboardPage";
import Result from "../components/dragdropURL/Result"

class LoggedIn extends React.Component {

  render() {
    return (

      <Router>
        <NavBar />
        <Switch>

          {/* these routes tell what PAGE to load on each path */}
          <Route exact path="/profile" component={ProfilePage} />
          <Route exact path="/draganddrop" component={DragDropPage} />
          <Route exact path="/flashcard" component={FlashCardPage} />
          <Route exact path="/memorygame" component={MemoryGamePage} />
          <Route exact path="/whiteboard" component={WhiteBoardPage} />
          <Route exact path="/leaderboard" component={LeaderboardPage} />
          <Route exact path="/Result" component={Result}/>
        </Switch>
      </Router>

    )
  }
}

export default LoggedIn;
=======
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// //--------NavBar & Pages-------------//
// import NavBar from "../components/shared/NavBar"

// //Profile Page
// import ProfilePage from "../pages/ProfilePage";

// // Games
// import DragDropPage from '../pages/DragAndDropPage';
// import FlashCardPage from '../pages/FlashCardPage';
// import MemoryGamePage from "../pages/MemoryPage";
// import WhiteBoardPage from "../pages/WhiteBoardPage";

// // Leaderboard
// import LeaderboardPage from "../pages/LeaderboardPage";
// import Result from "../components/dragdropURL/Result"

// class LoggedIn extends React.Component {

//   render() {
//     return (

//       <Router>
//         <NavBar />
//         <Switch>

//           {/* these routes tell what PAGE to load on each path */}
//           <Route exact path="/profile" component={ProfilePage} />
//           <Route exact path="/draganddrop" component={DragDropPage} />
//           <Route exact path="/flashcard" component={FlashCardPage} />
//           <Route exact path="/memorygame" component={MemoryGamePage} />
//           <Route exact path="/whiteboard" component={WhiteBoardPage} />
//           <Route exact path="/leaderboard" component={LeaderboardPage} />
//           <Route exact path="/Result" component={Result}/>
//         </Switch>
//       </Router>

//     )
//   }
// }

// export default LoggedIn;
>>>>>>> 2db880f94ed2d55094be02153089d4f58df07396
