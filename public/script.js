const socket = io('/')

/*
const myPeer = new Peer(undefined, {
    host: "/",
    port: "403"
})

myPeer.on('open', id => {
});
*/

id = 5
socket.emit('join-room', ROOM_ID, id);


socket.on('user-connected', userId =>{
    console.log('user connected: ' + userId)
})