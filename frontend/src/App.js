import React, { useState, useEffect } from 'react';

function App() {
  const [gameId, setGameId] = useState('');
  const [wsUrl, setWsUrl] = useState('');
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(null);

  // Create a new game and get the WebSocket URL
  const handleCreateGame = async () => {
    try {
      const response = await fetch('http://localhost:12000/api/newGame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ gameId }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || 'Failed to create game');
      }

      const data = await response.json();
      setWsUrl(data.wsUrl); // Save the WebSocket URL
      console.log(`Game created! WebSocket URL: ${data.wsUrl}`);
    } catch (err) {
      console.error('Error creating game:', err.message);
      setError(err.message);
    }
  };

  // Connect to the game WebSocket server
  const handleConnectToGame = () => {
    if (!wsUrl) {
      setError('WebSocket URL is not set. Create a game first.');
      return;
    }

    try {
      const ws = new WebSocket(wsUrl);
      setSocket(ws);

      ws.onopen = () => {
        console.log('Connected to game WebSocket server');
        ws.send(JSON.stringify({ message: 'Hello from client!' }));
      };

      ws.onmessage = (event) => {
        const data = JSON.parse(event.data);
        console.log('Message from server:', data.message);
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
  };

  const handleSendMessage = () => {
    if (socket && socket.readyState === WebSocket.OPEN) {
      socket.send(JSON.stringify({ message: inputValue }));
      setInputValue('');
    } else {
      console.error('WebSocket is not connected');
      setError('WebSocket is not connected');
    }
  };

  useEffect(() => {
    // Cleanup WebSocket connection on component unmount
    return () => {
      if (socket) {
        socket.close();
      }
    };
  }, [socket]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Game WebSocket Client</h1>
        <div>
          <input
            type="text"
            value={gameId}
            onChange={(e) => setGameId(e.target.value)}
            placeholder="Enter Game ID"
          />
          <button onClick={handleCreateGame}>Create Game</button>
        </div>
        <div>
          <button onClick={handleConnectToGame}>Connect to Game</button>
        </div>
        <div>
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type your message here"
          />
          <button onClick={handleSendMessage}>Send</button>
        </div>
        {messages.length > 0 && (
          <div>
            <h3>Messages:</h3>
            <ul>
              {messages.map((msg, index) => (
                <li key={index}>{msg}</li>
              ))}
            </ul>
          </div>
        )}
        {error && <p style={{ color: 'red' }}>Error: {error}</p>}
      </header>
    </div>
  );
}

export default App;