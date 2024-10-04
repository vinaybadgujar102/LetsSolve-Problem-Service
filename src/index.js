const express = require("express");
const bodyParser = require("body-parser");

const { PORT } = require("./config/server.config");
const apiRouter = require("./routes");
const { connectDB } = require("./config/db.config");
const { errorHandler } = require("./utils");

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());

app.use("/api", apiRouter);

app.get("/ping", (req, res) => {
  res.send("pong");
});

// last middleware if any error comes
app.use(errorHandler);

app.listen(PORT, async () => {
  console.log(`Server running on port ${PORT}`);
  await connectDB();
});
