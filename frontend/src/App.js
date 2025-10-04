
import 'bootstrap/dist/css/bootstrap.min.css';


import { useState } from 'react';
import NewGame from './NewGame';
import JoinGame from './JoinGame';

function HomePage() {
  const [view, setView] = useState(null);

  const renderNewGameButton = () => (
    <button className="btn btn-success" onClick={() => setView('new')}> 
      New Game 
    </button>
  );

  const renderJoinButton = () => (
    <button className="btn btn-primary" onClick={() => setView('join')}> 
      Join Game 
    </button>
  );

return (
  <div className="container text-center mt-5">
    {view == null && (
      <>
    <h1 className="mb-4">Sausage Dungeon Links</h1>

    <div  className="d-flex justify-content-center gap-3 mb-4">
      {renderNewGameButton()}
      {renderJoinButton()}

    </div>
    </>

    )}

    <div className="d-flex justify-content-center">
      <div className="w-50">
      {view === 'new' && <NewGame />}
      {view === 'join' && <JoinGame/>}
      </div>
    </div>
  </div>

);


}

export default HomePage;

  