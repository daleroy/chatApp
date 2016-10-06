const path = require('path');
const express = require('express');
const app = express();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const staticDir = path.join(__dirname, '../../build');
const indexPath = path.join(__dirname, '../../build/index.html');

app.use(express.static(staticDir));

app.get('/', function(req, res){
  res.sendFile(indexPath);
});

io.on('connection', function(socket){
  console.log('a user connected');

  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
