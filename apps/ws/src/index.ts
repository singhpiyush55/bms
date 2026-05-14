// On connection open, just create a db entry with current time as username and password
import WebSocket, { WebSocketServer } from "ws";
import {Client}  from "@repo/db/client";
const wss = new WebSocketServer({ port: 8080 });

wss.on("connection", (ws) => {
  console.log("New client connected");
  // Create a new user entry with the current time as username and password
  Client.user.create({
    data: {
      username: new Date().toISOString(),
      password: new Date().toISOString()
    }
  });
});