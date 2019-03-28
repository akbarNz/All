require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const routes = require("./routes/todoRoute");

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({
    extended: true
}));

const port = process.env.PORT || 9000;

routes(app);

app.listen(
    port,
    console.log("server listening on port " + port)
)

module.exports = app;