import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import NewGame from './NewGame';
import JoinGame from './JoinGame';

function HomePage() {
  const [view, setView] = useState(null);

  const renderNewGameButton = () => (
    <button className="btn btn-primary" onClick={() => setView('new')}>
      New Game
    </button>
  );

  const renderJoinButton = () => (
    <button className="btn btn-primary" onClick={() => setView('join')}>
      Join Game
    </button>
  );

  return (
    <div className="homepage-container text-center">
      {view == null && (
        <>
          <h1 className="homepage-title">Dungeon Links</h1>
          <div className="button-group">
            {renderNewGameButton()}
            {renderJoinButton()}
          </div>
        </>
      )}

      <div className="content-wrapper">
        <div className="content-box">
          {view === 'new' && <NewGame />}
          {view === 'join' && <JoinGame />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;