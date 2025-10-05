import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState, useEffect } from 'react';
import NewGame from './NewGame';
import JoinGame from './JoinGame';

function HomePage() {
  const [view, setView] = useState(null);
  const [wsMessage, setWsMessage] = useState('');

useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001'); // Replace with our websocket server
    socket.onmessage = (event) => {
      try {
        const data = JSON.parse(event.data);
        if (data.type === 'branch') {
          setWsMessage(data.message); // Only store messages of type 'branch'
        }
      } catch (err) {
        console.error('Invalid WebSocket message:', event.data);
      }
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);


  return (
    <div className="homepage-container text-center">
      {view == null && (
        <>
          <h1 className="homepage-title">Dungeon Links</h1>
          <div className="button-group">
          <button className="btn btn-primary" onClick={() => setView('new')}>New Game</button>
          <button className="btn btn-primary" onClick={() => setView('join')}>Join Game</button>
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