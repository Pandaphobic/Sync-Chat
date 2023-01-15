const http = require("http").createServer();

const io = require("socket.io")(http, {
  cors: { origin: "*" },
});

io.on("connection", (socket) => {
  console.log("a user connected");

  socket.on("message", (message) => {
    console.log(`${socket.id.substr(0, 4)} said ${message}`);
    io.emit("message", `${socket.id.substr(0, 4)} says ${message}`);
  });

  socket.on("disconnect", () => {
    console.log(socket.id.substr(0, 4) + " disconnected"); // undefined
  });
});

http.listen(8080, () => console.log("listening on http://10.0.0.11:8080"));

// Regular Websockets

// const WebSocket = require('ws')
// const server = new WebSocket.Server({ port: '8080' })

// server.on('connection', socket => {

//   socket.on('message', message => {

//     socket.send(`Roger that! ${message}`);

//   });

// });
