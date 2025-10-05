const WebSocket = require("ws");
const http = require("http");
const express = require("express");
const cors = require("cors"); // Import the CORS package

const PORT = 12000;

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
    broadcastConnectionCount(wss);
    // Send a welcome message to the client
    ws.send(JSON.stringify({ message: `Welcome to game ${gameID}!` }));

    // Listen for messages from the client
    ws.on("message", (message) => {
      console.log(`Game ${gameID} received: ${message}`);
      ws.send(JSON.stringify({ message: `${message}` }));
      // Broadcast the message to all clients in this game
    //   wss.clients.forEach((client) => {
    //     if (client.readyState === WebSocket.OPEN) {
    //       client.send(
    //         JSON.stringify({ message: `Game ${gameID}: ${message}` })
    //       );
    //     }
    //   });
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
      wsUrl: `ws://10.239.74.30:${address.port}`,
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

// Start the main HTTP server
const server = http.createServer(app);
server.listen(PORT, () => {
  console.log(`HTTP server is running on http://localhost:${PORT}`);
});
