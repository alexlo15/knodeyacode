import React from 'react';
import Timer from "../../Timer/timer";

const Header = ({ restartGame }) => (
  <div className="grid-header-container">
    <div className="justify-left timer"><Timer onClick={restartGame}/></div>
    <div className="justify-center game-status-text"></div>
    <div className="justify-end">
      <button onClick={restartGame} className="restart-button">Restart Game</button>
    </div>
  </div>
);

export default Header;