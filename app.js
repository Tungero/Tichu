const express = require('express')
const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);

const path = require('path')
const bodyParser = require('body-parser');

const port = process.env.PORT || 3000;


app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(__dirname + '/public'))
app.use(bodyParser.json());
app.use("/", require('./routes/web'));
app.use("/api", require('./routes/api'));


io.on('connection', socket => {
    socket.on('join-room', (roomId, userId) => {
        socket.join(roomId)
        socket.to(roomId).emit('user-connected', userId)
    })
})


server.listen(port, () => console.log(`Example app listening on port ${port}!`));
