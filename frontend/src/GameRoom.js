import React, {useEffect, useRef, useState} from 'react';
import {useParams} from 'react-router-dom';
import {Container, Card, Button} from 'react-bootstrap';
import './GameRoom.css'

function GameRoom(){

    const{code: NewGame} = useParams(); //Might not be code: ****
    const [wsRef] = useRef(null);
    const [playerIndex, setPlayerindex] = useState(null);
    const [joined, setJoined] = useState(false);

    //core data from server
    const [storyText, setStoryText] = useState("");
    const [options, setOptions] = useState([]);
    const [messages, setMessages] = useState([]);
    const [effects, setEffects] = useState([]);
    

    useEffect(() => {
        const ws = new WebSocket(`ws://localhost:8000/ws/game/${NewGame}`); //place holder weebsocket address
        wsRef.current = ws;

        WebSocket.onopen = () => {
            WebSocket.send(JSON .stringify({
                type: 'JoinGame',
                gameID
            }));
        };
        WebSocket.onmessage = (event) => {
            const data = JSON.parse(event.data);
            handleServerMessage(data);

            if (type === 'joinedgame') {
                setPlayerindex(data.playerIndex);
            } else if (type === 'startgame') {
                setJoined(true);
                setTurn(payload.turn);

            } else if (type === 'updatestory') {
                setStoryText(data.storyText);
                setOptions(data.options);
                setEffectText(payload.effectText);
                setTurn(payload.turn);
            } else if (type === 'playermessage') {
                setMessage(prev => [...prev, data.message]);

            } else if (type === 'gameover'){ //Replace with actual game handling when backend implemented
                alert(payload);
                window.location.href = '/'; // WHat are we going to do for gameover? Redirect to homepage?

            
            }
        };

        return () => {
            WebSocket.close();
        };
    }, [gameID]);
    const isMyTurn = ('') = playIndex === turn;

    
    const handleChoice = (optionIndex) => {
        if (!isMyTurn()) return;

        wsRef.current.send(JSON.stringify({
            type: 'sendchoice',
            gameID,
            payload: {
            optionIndex,
            senderIndex:playerIndex,
            }
        }));
    };

      return (
        <Container className="mt-5">
            <h4>Game Code: {gameCode}</h4>

            {!joined ? (
                <p>Waiting for second player to join...</p>
            ) : (
                <>
                    {/* Story / Lore */}
                    <Card className="p-4 mb-3">
                        <h5>Story</h5>
                        <p>{storyText}</p>
                    </Card>

                    {/* Message Log */}
                    <Card className="p-3 mb-3">
                        <h6>Player Responses</h6>
                        {messages.map((msg, idx) => (
                            <p key={idx}>{msg}</p>
                        ))}
                    </Card>

                    {/* Consequence / Effect of Choice */}
                    {effectText && (
                        <Card className="p-3 mb-3 bg-light">
                            <strong>Effect:</strong> {effectText}
                        </Card>
                    )}

                    {/* Options */}
                    <Card className="p-3">
                        <p><strong>{isMyTurn ? "Your options:" : "Waiting for other player..."}</strong></p>
                        {options.map((opt, idx) => (
                            <Button
                                key={idx}
                                onClick={() => handleChoice(idx)}
                                disabled={!isMyTurn}
                                className="mb-2 me-2"
                            >
                                {opt.text}
                            </Button>
                        ))}
                    </Card>
                </>
            )}
        </Container>
    );
}

export default GameRoom;