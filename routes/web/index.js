var express = require('express');
var router = express.Router();

const {v4: uuidV4} = require('uuid')

// creates a server that can be used with socket.io


router.get("/", (req, res) => {
    res.render("HelloWorld");
});

router.get("/room", (req, res) => {
    res.redirect(`/room/${uuidV4()}`)
})
router.get("/room/:roomID", (req, res) => {
    res.render('room', {roomId: req.params.roomID});
})



module.exports = router