
import { useState } from 'react';
import './JoinGame.css';


function JoinGame({submitCode}){
  const [code, setCode]= useState('')

  
return (
  <div className="JoinGame">
      <p>Enter Game Code:</p>
      <input value= {code} onChange= {(e) => setCode(e.target.value)} type="text" placeholder='Enter Game Code Here'></input>
      <button className="btn btn-primary" onClick={()=>submitCode(code)}>Submit</button>
  </div>
)
}

export default JoinGame;
