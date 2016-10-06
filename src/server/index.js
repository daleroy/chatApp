const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const staticDir = path.join(__dirname, '../../build');
const indexPath = path.join(__dirname, '../../build/index.html');

let clients = {};

app.use(express.static(staticDir));

app.get('/', (req, res) => {
  res.sendFile(indexPath);
});

io.on('connection', (socket) => {
  clients[socket.id] = {id: socket.id};

  // Send the socket.id back to the client so they know when a message is coming from themself.
  io.sockets.connected[socket.id].emit('client id', socket.id);

  socket.on('chat message', msg => {
    let message = {
        sender: socket.id,
        message: msg,
        timeStamp: Date.now()
    }
    io.emit('chat message', message);
  });

  socket.on('disconnect', () => {
    clients[socket.id] = null;
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
