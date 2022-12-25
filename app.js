const express = require("express");
const app = express();
const path = require('path');
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000;


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");


app.use(bodyParser.json());
app.use("/", require('./routes/web'));
app.use("/api", require('./routes/api'));



app.listen(port, () => console.log(`Example app listening on port ${port}!`));
