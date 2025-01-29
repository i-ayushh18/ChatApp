import { WebSocketServer, WebSocket } from "ws";

const wss = new WebSocketServer({ port: 8080 });

interface User {
  socket: WebSocket;
  room: string;
}

let userCount = 0;
let allSockets: User[] = [];

wss.on("connection", (socket) => {
  console.log("user connected #" + userCount);

  socket.on("message", (message) => {
    //@ts-ignore
    const parsedMessage = JSON.parse(message);
    if (parsedMessage.type === "join") {
      allSockets.push({
        socket,
        room: parsedMessage.payload.roomId,
      });
    }
    let currentUserRoom = null;
    if (parsedMessage.type == "chat") {
        console.log("user wants to chat");
      for (let i = 0; i < allSockets.length; i++) {
        currentUserRoom = allSockets[i].room;
      }
    }
    for (let i = 0; i < allSockets.length; i++) {
      if (allSockets[i].room == currentUserRoom) {
        allSockets[i].socket.send(parsedMessage.payload.message);
      }
    }
  });
});
