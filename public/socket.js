const socket = io('https://slimejavascript.herokuapp.com');

socket.on('keyEvent', (keysDown) => {
    otherUserKeysDown = keysDown;
});