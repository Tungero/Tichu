const socket = io('/')

const myPeer = new Peer()

myPeer.on('open', id => {
    socket.emit('join-room', ROOM_ID, id);
});


socket.on('user-connected', userId => {
    console.log('user connected: ' + userId)
});

socket.on('toggleFrontend', () => {
    toggleButton(document.getElementById('testbutton', false));
});

function toggleButton(btn, socketEmit=false){
    if (btn.style.backgroundColor == 'rgb(255, 0, 255)')
        btn.style.backgroundColor = '#FFFF00';
    else
        btn.style.backgroundColor = '#FF00FF';

    if (socketEmit){
        socket.emit('toggleApi', ROOM_ID);
    }
}
