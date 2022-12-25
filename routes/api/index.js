var express = require('express');
var router = express.Router();

router.get("/", (req, res) => {
    res.send("Api part");
});

router.route("/test")
    .get((req, res) => {
        res.send("get test");
    })
    .post((req, res) => {
        res.send(req.body);
    });

module.exports = router