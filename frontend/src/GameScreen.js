// import './GameScreen.css';
import React, { useState } from "react";

function GameScreen({ handleEnter }) {
  const [inputCommand, setInputCommand] = useState("");

  const handleKeyPress = (event) =>
  {
    if (event.key === "Enter")
    {
        handleEnter(inputCommand);
    }
  }
  return (
    <div className="GameScreen">
      <h1> GameScreen </h1>
      <div>
        <input
          type="text"
          value={inputCommand}
          placeholder="Enter Command"
          onChange={(e) => {
            setInputCommand(e.target.value);
          }}
          onKeyDown={handleKeyPress}
        ></input>
import React, { useState } from 'react';
import './GameScreen.css';

function GameScreen({message}) {
  const [story, setStory] = useState(''); // State to hold the story text
  const [input, setInput] = useState(''); // State to hold the input text

  const handleAddToStory = () => {
    if (input.trim()) {
      setStory((prev) => (prev ? `${prev} ${input}` : input)); // Append input to the story
      setInput(''); // Clear the input box
    }
  };

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
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter your text..."
        />
        <button onClick={handleAddToStory}>Add to Story</button>
      </div>
    </div>
  );
}

export default GameScreen;