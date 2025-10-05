import './NewGame.css';

function NewGame({ gameID }) {
  return (
    <div className= 'NewGame'>
        <h1> Join Game With This Code:</h1>
        <h2> {gameID}</h2>
    </div>
  )
}

export default NewGame;
