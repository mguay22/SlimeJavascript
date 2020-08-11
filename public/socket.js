const socket = io('http://localhost:9000');

socket.on('keyEvent', (keysDown) => {
    otherUserKeysDown = keysDown;
});