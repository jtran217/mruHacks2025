const WebSocket = require("ws");
const http = require("http");
const express = require("express");
const cors = require("cors"); // Import the CORS package
const p1Turns = require('./P1Turns.js');
const p2Turns = require('./P2Turns.js');

const PORT = 12000;

let p1TurnCounter = 0;
let p2TurnCounter = 0;

let clients = [];

// Create an Express app
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Enable CORS
app.use(cors());

// Store dynamically created WebSocket servers
const gameServers = new Map();

// Define an API endpoint to create a new game
app.get("/api/newGame", (req, res) => {
    
  // Create a new HTTP server for the game
  const gameServer = http.createServer();
  const wss = new WebSocket.Server({ server: gameServer });

  const gameID = Math.floor(Math.random() * (1000 - 1 + 1)) + 1;

  gameServers.set(gameID, { server: gameServer, wss });

  console.log(`New WebSocket server created for game: ${gameID}`);

  // Handle WebSocket connections for this game
  wss.on("connection", (ws) => {
    console.log(`New client connected to game: ${gameID}`);
    ws.clientID = clients.length;
    clients.push(ws);
    broadcastConnectionCount(wss);
    // Send a welcome message to the client
    ws.send(JSON.stringify({ message: `Welcome to game ${gameID}!` }));
    startStory(wss);

    // Listen for messages from the client
    ws.on("message", (message) => {
      console.log(`Game ${gameID} received: ${message}`);
      console.log(ws.clientID);
      if (ws.clientID === 1) {
        socket = clients[0];

        let text = p1Turns[p1TurnCounter]["description"];

        const optionKeys = Object.keys(p1Turns[p1TurnCounter]["options"]);

        optionKeys.forEach((key, index) => {
            text += `\n${index + 1}. ${key}`;
        });
        socket.send(JSON.stringify({ message: text }));
        p1TurnCounter += 1;

      } else if (ws.clientID === 0) {
        socket = clients[1];
        let text = p2Turns[p2TurnCounter]["description"];

        const optionKeys = Object.keys(p2Turns[p2TurnCounter]["options"]);

        optionKeys.forEach((key, index) => {
            text += `\n${index + 1}. ${key}`;
        });
        socket.send(JSON.stringify({ message: text }));
        p2TurnCounter += 1;
      }
    });

    // Handle client disconnection
    ws.on("close", () => {
      console.log(`Client disconnected from game: ${gameID}`);
    });

    // Handle errors
    ws.on("error", (err) => {
      console.error(`WebSocket error in game ${gameID}:`, err);
    });
  });

  // Start the game server on a dynamic port
  gameServer.listen(0, () => {
    const address = gameServer.address();
    console.log(
      `Game ${gameID} WebSocket server is running on ws://localhost:${address.port}`
    );
    res.json({
      message: `Game ${gameID} created!`,
      // Change IP when testing server on your machine using ipconfig getifaddr en0
    //   wsUrl: `ws://10.239.74.30:${address.port}`,
      wsUrl: `ws://10.0.0.37:${address.port}`,
      gameID: address.port,
    });
  });
});

function broadcastConnectionCount(wss) {
  const count = wss.clients.size; // number of connected clients
  const payload = JSON.stringify({ type: "connectionCount", count });

  for (const client of wss.clients) {
    if (client.readyState === WebSocket.OPEN) {
      client.send(payload);
    }
  }
}

function startStory(wss) {
  const count = wss.clients.size;
  if (count === 2) {
      wss.clients.forEach((client) => {
        if (client.readyState === WebSocket.OPEN) {
          client.send(JSON.stringify({ message: "You and your best friend are at the local tavern in the kingdom. There are twin maidens across the bar who catch your eyes. This is the perfect opportunity to link up with them! As you approach them, they see you and grow a look of disgust. The moment you guys say “hello”?, the maidens scream and accuse you of harassment. It turns out, they are the esteemed twin daughters of the king! The two of you black out as the guards take you both away to the dungeon. When you wake up, you realize that you have been separated into 2 different cells. Luckily, you are both wizards, so teleporting out of the dungeon is possible! All you need to do is acquire 5 magic sausage links in order to perform the teleportation spell!" }));
        }
      });
  }
}

// Start the main HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`HTTP server is running on http://localhost:${PORT}`);
});
