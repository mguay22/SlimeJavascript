const express = require('express');
const app = express();
const socketio = require('socket.io');

app.use(express.static(__dirname + '/public'));

const expressServer = app.listen(process.env.PORT || 9000);
const io = socketio(expressServer);

io.on('connection', (socket) => {
    socket.on('keyEvent', (keysDown) => {
        socket.broadcast.emit('keyEvent', keysDown);
    });
});