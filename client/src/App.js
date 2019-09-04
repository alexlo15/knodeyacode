import React from 'react';
// import logo from './logo.svg';
import NavBar from "./components/NavBar";
import './styles/App.css';
import Mainpage from './components/Mainpage';

// function App() {
//   return (
//     <div className="App">
//       <NavBar />
//       <Mainpage />
//     </div>
//   );
// }


class App extends React.Component {

  render() {
    return (
      <div className="App">
        <NavBar />
        <Mainpage />
      </div>

    );
  }
}


export default App;
