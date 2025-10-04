import React, { useState } from 'react';
import { io } from 'socket.io-client';

function App() {
  const [messages, setMessages] = useState([]);
  const [error, setError] = useState(null);

  const handleConnect = () => {
    try {
      const socket = io('http://10.239.74.30:12000', {
        transports: ['websocket'], // Use WebSocket transport
      });

      socket.on('connect', () => {
        console.log('Connected to server');
        socket.send('Hello from client!');
      });

      socket.on('message', (data) => {
        console.log('Message from server:', data);
        setMessages((prev) => [...prev, data]);
      });

      socket.on('disconnect', () => {
        console.log('Disconnected from server');
      });

      socket.on('connect_error', (err) => {
        console.error('Connection error:', err);
        setError('Connection error occurred');
      });
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="App">
      <header className="App-header">
        <p>
          <button onClick={handleConnect}>Connect</button>
        </p>
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