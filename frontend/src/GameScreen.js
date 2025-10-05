import React, { useState } from 'react';
import './GameScreen.css';

function GameScreen({ handleEnter, message }) {
  const [input, setInput] = useState("");

  const handleKeyPress = (event) =>
  {
    if (event.key === "Enter")
    {
        handleEnter(input);
    }
  }

  return (
    <div className="game-room">
      <div className="story-box">
        <h3>Story</h3>
        <div className="scrollable-content">
          {message ? <p>{message}</p> : <p>The story will appear here...he story will appear here...</p>}
        </div>
      </div>
      <div className="input-box">
        <input
          type="text"
          value={input}
          placeholder="Enter Command"
          onChange={(e) => {
            setInput(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></input>
      </div>
    </div>
  );
}

export default GameScreen;