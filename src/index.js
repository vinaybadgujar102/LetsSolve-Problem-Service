const express = require("express");
const bodyParser = require("body-parser");
const { PORT } = require("./config/server.config");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
