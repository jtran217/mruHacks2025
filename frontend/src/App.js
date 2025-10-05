import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { useState } from 'react';
import NewGame from './NewGame';
import JoinGame from './JoinGame';
import GameScreen from './GameScreen';

function HomePage() {
  const [view, setView] = useState(null);
  const [wsMessage, setWsMessage] = useState('');
  const [gameID, setGameID] = useState('');
  const [wsUrl, setWsUrl] = useState('');
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const handleNewGame = async () => {
    setView('new');
    try {
      const res = await fetch('http://10.239.74.30:12000/api/newGame');

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.message || 'Failed to create game');
      }

      const data = await res.json();
      setWsUrl(data.wsUrl); 
      setGameID(data.gameID);
      console.log(`Game created! WebSocket URL: ${data.wsUrl}, GameID: ${data.gameID}`);
      connectToServer(data.gameID);
    } catch (err) {
      console.error('Error creating game:', err.message);
      setError('Error creating game:', err.message);
    }
  };

  const connectToServer = (code) => {
    const url = `ws://10.239.74.30:${code}`;
    setWsUrl(url);
    if (!url) {
      setError('WebSocket URL is not set. Create a game first.');
      return;
    }

    try {
      const ws = new WebSocket(url);
      setSocket(ws);

      ws.onopen = () => {
        console.log('Connected to game WebSocket server');
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        if (data.type === "connectionCount" && data.count === 2) 
        {
          setView('game');
        } else {
          console.log("Message from server:", data.message);
          setMessages((prev) => [...prev, data.message]);
        }
        setMessages((prev) => [...prev, data.message]);
      };

      ws.onerror = (err) => {
        console.error('WebSocket error:', err);
        setError('WebSocket error occurred');
      };

      ws.onclose = () => {
        console.log('Disconnected from game WebSocket server');
      };
    } catch (err) {
      console.error('Error connecting to WebSocket:', err.message);
      setError(err.message);
    }
  
  }

  const sendMessage = (message) => {
    // Send message to server using socket
    console.log("Sending message: ", message);
    socket.send(JSON.stringify({ message: message }));
  }

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
          {view === 'join' && <JoinGame submitCode={connectToServer} />}
          {view === 'game' && <GameScreen handleEnter={sendMessage} message={messages[messages.length-1]}/>}
        </div>
      </div>
    </div>
  );
}

export default HomePage;