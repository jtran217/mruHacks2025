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
      </div>
    </div>
  );
}

export default GameScreen;
