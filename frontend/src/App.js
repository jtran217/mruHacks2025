import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from 'react';
import NewGame from './NewGame';
import JoinGame from './JoinGame';

function HomePage() {
  const [view, setView] = useState(null);
  const [wsMessage, setWsMessage] = useState('');
  const [gameID, setGameID] = useState('');
  const [wsUrl, setWsUrl] = useState('');

  const handleNewGame = async () => {
    setView('new');
    try {
      const res = await fetch('http://10.239.74.30:12000/api/newGame');

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create game');
      }

      const data = await res.json();
      setWsUrl(data.wsUrl); // Save the WebSocket URL
      setGameID(data.gameID);
      console.log(`Game created! WebSocket URL: ${data.wsUrl}, GameID: ${data.gameID}`);
    } catch (err) {
      console.error('Error creating game:', err.message);
    }
  };


  return (
    <div className="homepage-container text-center">
      {view == null && (
        <>
          <h1 className="homepage-title">Dungeon Links</h1>
          <div className="button-group">
          <button className="btn btn-primary" onClick={() => handleNewGame()}>New Game</button>
          <button className="btn btn-primary" onClick={() => setView('join')}>Join Game</button>
          </div>
        </>
      )}

      <div className="content-wrapper">
        <div className="content-box">
          {view === 'new' && <NewGame gameID={gameID}/>}
          {view === 'join' && <JoinGame />}
        </div>
      </div>
    </div>
  );
}

export default HomePage;